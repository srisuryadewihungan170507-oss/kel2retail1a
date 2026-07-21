/* ===== PENDAFTARAN TOKO / SELLER =====
   Di aplikasi nyata, data ini WAJIB dikirim & diverifikasi di server (backend),
   bukan hanya disimpan di sessionStorage sisi klien. */

function togglePw(inputId,iconId){
  var input=document.getElementById(inputId);
  var icon=document.getElementById(iconId);
  if(input.type==='password'){input.type='text';icon.className='ti ti-eye-off'}
  else{input.type='password';icon.className='ti ti-eye'}
}

function showError(msg){
  var e=document.getElementById('reg-error');
  document.getElementById('reg-error-msg').textContent=msg;
  e.classList.add('show');
}
function hideError(){
  document.getElementById('reg-error').classList.remove('show');
}

function goToStep2(){
  var nama=document.getElementById('toko-nama').value.trim();
  var kategori=document.getElementById('toko-kategori').value;
  var kota=document.getElementById('toko-kota').value.trim();
  var alamat=document.getElementById('toko-alamat').value.trim();

  if(!nama||!kategori||!kota||!alamat){
    showError('Mohon lengkapi semua data toko yang wajib diisi');
    return;
  }
  hideError();
  document.getElementById('reg-step-1').style.display='none';
  document.getElementById('reg-step-2').style.display='block';
  document.getElementById('dot-1').classList.remove('active');
  document.getElementById('dot-2').classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

function goToStep1(){
  hideError();
  document.getElementById('reg-step-2').style.display='none';
  document.getElementById('reg-step-1').style.display='block';
  document.getElementById('dot-2').classList.remove('active');
  document.getElementById('dot-1').classList.add('active');
}

function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitRegistration(){
  var namaPemilik=document.getElementById('pemilik-nama').value.trim();
  var email=document.getElementById('pemilik-email').value.trim();
  var hp=document.getElementById('pemilik-hp').value.trim();
  var ktp=document.getElementById('pemilik-ktp').value.trim();
  var pass=document.getElementById('pemilik-password').value;
  var pass2=document.getElementById('pemilik-password2').value;
  var agree=document.getElementById('reg-agree').checked;

  if(!namaPemilik||!email||!hp||!pass||!pass2){
    showError('Mohon lengkapi semua data pemilik yang wajib diisi');
    return;
  }
  if(!isValidEmail(email)){
    showError('Format email tidak valid');
    return;
  }
  if(pass.length<6){
    showError('Kata sandi minimal 6 karakter');
    return;
  }
  if(pass!==pass2){
    showError('Konfirmasi kata sandi tidak cocok');
    return;
  }
  if(!agree){
    showError('Kamu harus menyetujui Syarat & Ketentuan terlebih dahulu');
    return;
  }
  hideError();

  var application={
    storeName:document.getElementById('toko-nama').value.trim(),
    category:document.getElementById('toko-kategori').value,
    city:document.getElementById('toko-kota').value.trim(),
    address:document.getElementById('toko-alamat').value.trim(),
    description:document.getElementById('toko-deskripsi').value.trim(),
    ownerName:namaPemilik,
    email:email,
    phone:hp,
    ktp:ktp,
    status:'pending',
    submittedAt:new Date().toISOString()
  };
  sessionStorage.setItem('gomart_seller_application',JSON.stringify(application));

  var summary=document.getElementById('reg-summary');
  summary.innerHTML=
    '<div class="reg-success-row"><span>Nama Toko</span><span>'+application.storeName+'</span></div>'+
    '<div class="reg-success-row"><span>Kategori</span><span>'+application.category+'</span></div>'+
    '<div class="reg-success-row"><span>Kota</span><span>'+application.city+'</span></div>'+
    '<div class="reg-success-row"><span>Email</span><span>'+application.email+'</span></div>'+
    '<div class="reg-success-row"><span>Status</span><span style="color:#D97706">Menunggu Verifikasi</span></div>';

  document.getElementById('reg-form-wrap').style.display='none';
  document.getElementById('reg-success').classList.add('show');
  showToast('🎉 Pendaftaran toko berhasil dikirim!');
}

function showToast(msg){
  var t=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');
  setTimeout(function(){t.classList.remove('show')},2600);
}
