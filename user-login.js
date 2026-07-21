/* ===== USER AUTH =====
   Di aplikasi nyata, validasi login/daftar WAJIB dilakukan di server (backend). */
var DEMO_USER_EMAIL='umar@gmail.com';
var DEMO_USER_PASS='user123';

function switchUloginTab(tab){
  document.getElementById('ulogin-tab-masuk').classList.toggle('active',tab==='masuk');
  document.getElementById('ulogin-tab-daftar').classList.toggle('active',tab==='daftar');
  document.getElementById('ulogin-panel-masuk').classList.toggle('active',tab==='masuk');
  document.getElementById('ulogin-panel-daftar').classList.toggle('active',tab==='daftar');
  document.getElementById('ulogin-error').classList.remove('show');
  document.getElementById('uregister-error').classList.remove('show');
}

function toggleUloginPw(inputId,iconId){
  var input=document.getElementById(inputId);
  var icon=document.getElementById(iconId);
  if(input.type==='password'){input.type='text';icon.className='ti ti-eye-off'}
  else{input.type='password';icon.className='ti ti-eye'}
}

function doUserLogin(){
  var e=document.getElementById('ulogin-email').value.trim();
  var p=document.getElementById('ulogin-password').value;
  var errBox=document.getElementById('ulogin-error');
  if(!e||!p){
    document.getElementById('ulogin-error-msg').textContent='Email dan kata sandi wajib diisi';
    errBox.classList.add('show');
    return;
  }
  if(e.toLowerCase()===DEMO_USER_EMAIL&&p===DEMO_USER_PASS){
    errBox.classList.remove('show');
    var user={name:'La Ode Umar',email:'umar@gmail.com',phone:'0812-3456-7890'};
    sessionStorage.setItem('gomart_user',JSON.stringify(user));
    showToast('✅ Selamat datang kembali, '+user.name+'!');
    setTimeout(function(){
      window.location.href='index.html#profil';
    },700);
  }else{
    document.getElementById('ulogin-error-msg').textContent='Email atau kata sandi salah';
    errBox.classList.add('show');
    document.getElementById('ulogin-password').value='';
  }
}

function doUserRegister(){
  var name=document.getElementById('uregister-name').value.trim();
  var email=document.getElementById('uregister-email').value.trim();
  var phone=document.getElementById('uregister-phone').value.trim();
  var pass=document.getElementById('uregister-password').value;
  var errBox=document.getElementById('uregister-error');
  if(!name||!email||!phone||!pass){
    document.getElementById('uregister-error-msg').textContent='Semua kolom wajib diisi';
    errBox.classList.add('show');
    return;
  }
  if(pass.length<6){
    document.getElementById('uregister-error-msg').textContent='Kata sandi minimal 6 karakter';
    errBox.classList.add('show');
    return;
  }
  errBox.classList.remove('show');
  var user={name:name,email:email,phone:phone};
  sessionStorage.setItem('gomart_user',JSON.stringify(user));
  showToast('🎉 Akun berhasil dibuat, selamat datang '+name+'!');
  setTimeout(function(){
    window.location.href='index.html#profil';
  },700);
}

function showToast(msg){
  var t=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');
  setTimeout(function(){t.classList.remove('show')},2200);
}

document.getElementById('ulogin-email').focus();
