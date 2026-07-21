/* =====================================================================
   ADMIN PANEL GOMART — file mandiri, terpisah dari index.html/index.js
   Produk disimpan di localStorage ('gomart_products') sehingga perubahan
   yang dilakukan di sini (tambah/edit/hapus) otomatis terlihat di toko
   (index.html) saat halaman tersebut dimuat ulang.
   Di aplikasi nyata, autentikasi & penyimpanan data WAJIB dilakukan di
   server (backend), bukan hanya di JavaScript sisi klien / localStorage.
   ===================================================================== */

/* ===== KREDENSIAL ADMIN (ganti untuk produksi) ===== */
var ADMIN_USER='admin';
var ADMIN_PASS='admin123';

/* ===== DATA PRODUK DEFAULT (dipakai hanya jika localStorage kosong) ===== */
var DEFAULT_PRODUCTS=[
  {id:1,name:'Indomie Goreng Spesial',brand:'Indofood',price:3500,oldPrice:4000,emoji:'🍜',photo:'instant-noodles',photoUrl:'images/indomie.png',cat:'Makanan',stock:250,disc:'PROMO',rating:4.9},
  {id:2,name:'Aqua Air Mineral 1500ml',brand:'Danone',price:5500,oldPrice:null,emoji:'💧',photo:'mineral-water-bottle',photoUrl:'images/aqua.jpg',cat:'Minuman',stock:180,disc:null,rating:4.8},
  {id:3,name:'Sabun Lifebuoy Total 10 Action',brand:'Unilever',price:12500,oldPrice:15000,emoji:'🧼',photo:'soap-bar',photoUrl:'images/lifebuoy.png',cat:'Perawatan',stock:95,disc:'HEMAT',rating:4.7},
  {id:4,name:'Susu UHT Ultra Full Cream 250ml',brand:'Ultra Jaya',price:7500,oldPrice:9000,emoji:'🥛',photo:'milk-carton',photoUrl:'images/ultra.jpg',cat:'Makanan',stock:120,disc:'DISKON',rating:4.8},
  {id:5,name:'Kopi Kapal Api Special Mix',brand:'Kapal Api',price:8000,oldPrice:null,emoji:'☕',photo:'instant-coffee',photoUrl:'images/kapalapi.png',cat:'Minuman',stock:200,disc:null,rating:4.9},
  {id:6,name:'Minyak Goreng Bimoli 2 Liter',brand:'Bimoli',price:35000,oldPrice:40000,emoji:'🫙',photo:'cooking-oil-bottle',photoUrl:'images/bimoli.jpg',cat:'Dapur',stock:75,disc:'PROMO',rating:4.6},
  {id:7,name:'Oreo Sandwich Vanilla 119g',brand:'Mondelez',price:11000,oldPrice:null,emoji:'🍪',photo:'sandwich-cookies',photoUrl:'images/oreo.jpg',cat:'Snack',stock:160,disc:null,rating:4.7},
  {id:8,name:'Shampo Pantene Smooth & Silky 170ml',brand:'P&G',price:22500,oldPrice:27000,emoji:'🧴',photo:'shampoo-bottle',photoUrl:'images/shampo.jpg',cat:'Perawatan',stock:88,disc:'HEMAT',rating:4.6},
  {id:9,name:'Pampers Active Baby M 30pcs',brand:'Procter & Gamble',price:95000,oldPrice:110000,emoji:'👶',photo:'baby-diaper',photoUrl:'images/pempres.png',cat:'Bayi',stock:45,disc:'DISKON',rating:4.8},
  {id:10,name:'Paracetamol Tempra 500mg 10tab',brand:'Sanofi',price:8500,oldPrice:null,emoji:'💊',photo:'medicine-tablets',photoUrl:'images/paracetamol.jpg',cat:'Kesehatan',stock:300,disc:null,rating:4.9},
  {id:11,name:'Beras Premium Ramos 5kg',brand:'Topi Koki',price:78000,oldPrice:85000,emoji:'🌾',photo:'rice-grain',photoUrl:'images/beras.jpg',cat:'Makanan',stock:60,disc:'PROMO',rating:4.7},
  {id:12,name:'Teh Botol Sosro 450ml',brand:'Sosro',price:6000,oldPrice:null,emoji:'🍵',photo:'iced-tea-bottle',photoUrl:'images/tehbotol.jpg',cat:'Minuman',stock:220,disc:null,rating:4.8},
  {id:13,name:'Apel Fuji Segar 1kg',brand:'Fresh Farm',price:32000,oldPrice:38000,emoji:'🍎',photo:'fresh-apple',photoUrl:'images/fuji.jpg',cat:'Makanan',storeId:5,stock:70,disc:'SEGAR',rating:4.7},
  {id:14,name:'Jeruk Sunkist 1kg',brand:'Fresh Farm',price:28000,oldPrice:null,emoji:'🍊',photo:'sunkist-orange',photoUrl:'images/jeruk.jpg',cat:'Makanan',storeId:5,stock:65,disc:null,rating:4.8},
  {id:15,name:'Bayam Segar 250g',brand:'Fresh Farm',price:6000,oldPrice:null,emoji:'🥬',photo:'fresh-spinach',photoUrl:'images/bayam.jpg',cat:'Makanan',storeId:5,stock:90,disc:null,rating:4.6},
  {id:16,name:'Kecap Manis Bango 275ml',brand:'Unilever',price:14500,oldPrice:16000,emoji:'🍯',photo:'soy-sauce-bottle',photoUrl:'images/bango.jpg',cat:'Dapur',storeId:6,stock:110,disc:'HEMAT',rating:4.9},
  {id:17,name:'Saus Sambal ABC 340ml',brand:'ABC',price:11000,oldPrice:null,emoji:'🌶️',photo:'chili-sauce-bottle',photoUrl:'images/sambalabc.jpg',cat:'Dapur',storeId:6,stock:130,disc:null,rating:4.7},
  {id:18,name:'Garam Dapur Refina 500g',brand:'Refina',price:4500,oldPrice:null,emoji:'🧂',photo:'salt-package',photoUrl:'images/garam.jpg',cat:'Dapur',storeId:6,stock:200,disc:null,rating:4.6},
  {id:19,name:'Chitato Sapi Panggang 68g',brand:'Indofood',price:9500,oldPrice:11000,emoji:'🥔',photo:'potato-chips',photoUrl:'images/chitato.jpg',cat:'Snack',storeId:7,stock:140,disc:'PROMO',rating:4.8},
  {id:20,name:'Taro Net Snack 65g',brand:'Fumakilla',price:7500,oldPrice:null,emoji:'🍟',photo:'corn-snack',photoUrl:'images/taro.jpg',cat:'Snack',storeId:7,stock:155,disc:null,rating:4.7},
  {id:21,name:'Better Wafer Coklat 100g',brand:'Mayora',price:6500,oldPrice:8000,emoji:'🍫',photo:'chocolate-wafer',photoUrl:'images/better.jpg',cat:'Snack',storeId:7,stock:170,disc:'DISKON',rating:4.8},
  {id:22,name:'Teh Pucuk Harum 350ml',brand:'Mayora',price:5000,oldPrice:null,emoji:'🍵',photo:'green-tea-bottle',photoUrl:'images/pucukharum.jpg',cat:'Minuman',storeId:8,stock:210,disc:null,rating:4.8},
  {id:23,name:'Pocari Sweat 500ml',brand:'Otsuka',price:9000,oldPrice:10500,emoji:'🥤',photo:'sports-drink-bottle',photoUrl:'images/pocari.jpg',cat:'Minuman',storeId:8,stock:145,disc:'HEMAT',rating:4.9},
  {id:24,name:'Milo Kotak 200ml',brand:'Nestle',price:5500,oldPrice:null,emoji:'🥛',photo:'chocolate-milk-box',photoUrl:'images/milo.jpg',cat:'Minuman',storeId:8,stock:190,disc:null,rating:4.8},
  {id:25,name:'Nutrisari Jeruk Sachet 10pcs',brand:'Nutrifood',price:12000,oldPrice:14000,emoji:'🍊',photo:'orange-drink-sachet',photoUrl:'images/nutrisari.jpg',cat:'Minuman',storeId:8,stock:100,disc:'PROMO',rating:4.7},
];

/* ===== PENYIMPANAN PRODUK BERSAMA (localStorage) ===== */
var PRODUCTS_KEY='gomart_products';
function loadProducts(){
  try{
    var raw=localStorage.getItem(PRODUCTS_KEY);
    if(raw)return JSON.parse(raw);
  }catch(e){}
  saveProducts(DEFAULT_PRODUCTS);
  return DEFAULT_PRODUCTS.slice();
}
function saveProducts(list){
  try{localStorage.setItem(PRODUCTS_KEY,JSON.stringify(list))}catch(e){}
}
var products=loadProducts();
var nextId=products.reduce(function(m,p){return Math.max(m,p.id)},0)+1;
var editingId=null;
var modalEmoji='📦';

var categoryEmojis={Makanan:'🥘',Minuman:'🥤',Kebutuhan:'🏠',Perawatan:'🧴',Snack:'🍿',Dapur:'🫙',Bayi:'👶',Kesehatan:'💊'};

var faqData=[
  {q:'Bagaimana cara menambahkan produk baru?',a:'Buka menu Produk di sidebar, lalu klik tombol "Tambah Produk Baru" di kanan atas. Isi nama, harga, kategori, dan stok produk, kemudian klik Simpan Produk.'},
  {q:'Bagaimana cara mengubah status pesanan?',a:'Masuk ke menu Pesanan, cari nomor pesanan yang ingin diubah, lalu gunakan tombol Lacak untuk melihat detail dan memperbarui status pengiriman.'},
  {q:'Bagaimana cara membuat kode voucher baru?',a:'Buka menu Promo & Diskon di sidebar untuk melihat daftar promo aktif. Untuk menambahkan kode baru, hubungi tim support agar dibantu konfigurasi lanjutan.'},
  {q:'Bagaimana cara mengaktifkan gratis ongkir?',a:'Buka menu Pengaturan, lalu pada bagian "Pengiriman & Ongkos Kirim" aktifkan toggle Gratis Ongkir Otomatis dan atur nilai minimum belanja.'},
  {q:'Kenapa produk saya berstatus stok rendah?',a:'Status "Stok Rendah" muncul otomatis saat jumlah stok produk berada di angka 20-100. Perbarui jumlah stok melalui menu Produk > Edit.'},
  {q:'Bagaimana cara menghubungi tim support GoMART?',a:'Gunakan tombol Live Chat, Telepon CS, atau Email Support pada bagian "Hubungi Tim Support" di halaman Bantuan ini.'},
];

/* ===== HELPER TAMPILAN ===== */
function fmtRp(n){return 'Rp'+parseInt(n).toLocaleString('id-ID')}
function emojiImg(emoji,size){
  size=size||40;
  return '<div style="width:'+size+'px;height:'+size+'px;display:flex;align-items:center;justify-content:center;font-size:'+Math.round(size*0.72)+'px;line-height:1">'+emoji+'</div>';
}
function photoImg(keyword,emoji,size,square,url){
  size=size||60;
  if(url){
    var radius=square?6:8;
    var safeEmoji=String(emoji).replace(/'/g,"&#39;");
    return '<div class="photo-wrap" style="width:'+size+'px;height:'+size+'px;border-radius:'+radius+'px;overflow:hidden;flex-shrink:0;background:var(--gray-50);display:flex;align-items:center;justify-content:center">'
      +'<img src="'+url+'" alt="'+keyword+'" loading="lazy" style="width:100%;height:100%;object-fit:contain;display:block" onerror="imgFallback(this,\''+safeEmoji+'\','+size+')">'
      +'</div>';
  }
  return emojiImg(emoji,size);
}
function imgFallback(imgEl,emoji,size){
  var wrap=imgEl.parentElement;
  if(wrap)wrap.outerHTML=emojiImg(emoji,size);
}
function showToast(msg){
  var t=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(function(){t.classList.remove('show')},2800);
}

/* ===== AUTENTIKASI ===== */
var SESSION_KEY='gomart_admin_logged_in';

function showView(view){
  document.getElementById('view-login').style.display=view==='login'?'flex':'none';
  document.getElementById('view-admin').style.display=view==='admin'?'flex':'none';
}

function initAdminPage(){
  /* Selalu tampilkan halaman login setiap kali admin.html dibuka/direfresh.
     Status login TIDAK disimpan lintas kunjungan (sengaja tidak memakai
     sessionStorage/localStorage untuk auto-login) sehingga admin wajib
     memasukkan username & password setiap kali membuka halaman ini. */
  sessionStorage.removeItem(SESSION_KEY);
  showView('login');
  var u=document.getElementById('login-username');
  if(u)setTimeout(function(){u.focus()},50);
}

function togglePw(){
  var input=document.getElementById('login-password');
  var icon=document.getElementById('pw-eye-icon');
  if(input.type==='password'){input.type='text';icon.className='ti ti-eye-off'}
  else{input.type='password';icon.className='ti ti-eye'}
}

function doAdminLogin(){
  var u=document.getElementById('login-username').value.trim();
  var p=document.getElementById('login-password').value;
  var errBox=document.getElementById('login-error');
  if(!u||!p){
    document.getElementById('login-error-msg').textContent='Username dan password wajib diisi';
    errBox.classList.add('show');
    return;
  }
  if(u===ADMIN_USER&&p===ADMIN_PASS){
    errBox.classList.remove('show');
    sessionStorage.setItem(SESSION_KEY,'1');
    showView('admin');
    updateAdminStats();
    renderAdminProducts();
    showToast('✅ Login berhasil, selamat datang Admin!');
  }else{
    document.getElementById('login-error-msg').textContent='Username atau password salah';
    errBox.classList.add('show');
    document.getElementById('login-password').value='';
  }
}

function adminLogout(){
  if(!confirm('Yakin ingin keluar dari panel admin?'))return;
  sessionStorage.removeItem(SESSION_KEY);
  showToast('👋 Berhasil keluar dari panel admin');
  setTimeout(function(){window.location.href='index.html'},500);
}

/* ===== NAVIGASI PANEL ===== */
function openAdminPanel(id,el){
  document.querySelectorAll('.admin-panel').forEach(function(p){p.classList.remove('active')});
  document.getElementById('panel-'+id).classList.add('active');
  document.querySelectorAll('.sidebar-link').forEach(function(a){a.classList.remove('active')});
  if(el)el.classList.add('active');
  var titles={dashboard:'Dashboard',products:'Manajemen Produk',orders:'Daftar Pesanan',customers:'Data Pelanggan',reviews:'Ulasan',promo:'Promo & Diskon',report:'Laporan',settings:'Pengaturan',help:'Bantuan'};
  document.getElementById('admin-page-title').textContent=titles[id]||'Admin';
  if(id==='products')renderAdminProducts();
  if(id==='help')renderFaq();
}

/* ===== PRODUK ===== */
function updateAdminStats(){
  var total=products.length;var low=products.filter(function(p){return p.stock<=50}).length;
  document.getElementById('stat-total-prod').textContent=total;
  document.getElementById('stat-low-prod').textContent='⚠ '+low+' produk stok rendah';
  document.getElementById('prod-count').textContent=total;
}
function renderAdminProducts(){
  var tb=document.getElementById('admin-prod-tbody');if(!tb)return;
  document.getElementById('prod-count').textContent=products.length;
  tb.innerHTML='';
  products.forEach(function(p){
    var status=p.stock>100?'st-active':p.stock>20?'st-low':'st-out';
    var statusLabel=p.stock>100?'Stok Baik':p.stock>20?'Stok Rendah':'Habis';
    var tr=document.createElement('tr');
    tr.innerHTML='<td><div style="display:flex;align-items:center;gap:8px">'+photoImg(p.photo,p.emoji,32,true,p.photoUrl)+'<div><div style="font-weight:700;font-size:12px">'+p.name+'</div><div style="font-size:11px;color:#9CA3AF">'+p.brand+'</div></div></div></td><td><span style="background:#EDE9FE;color:#5B21B6;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700">'+p.cat+'</span></td><td><div style="font-weight:800;color:#7B0000">'+fmtRp(p.price)+'</div></td><td><span style="font-weight:700;color:'+(p.stock<=20?'#B91C1C':p.stock<=50?'#92400E':'#065F46')+'">'+p.stock+'</span></td><td><span class="st-badge '+status+'">'+statusLabel+'</span></td><td><div style="display:flex;gap:4px"><button class="act-btn ab-edit" onclick="openModal(\'edit\','+p.id+')">Edit</button><button class="act-btn ab-del" onclick="deleteProduct('+p.id+')">Hapus</button></div></td>';
    tb.appendChild(tr);
  });
}
function deleteProduct(id){
  if(!confirm('Hapus produk ini?'))return;
  products=products.filter(function(p){return p.id!==id});
  saveProducts(products);
  renderAdminProducts();updateAdminStats();
  showToast('🗑️ Produk berhasil dihapus');
}
function openModal(mode,id){
  editingId=null;
  document.getElementById('modal-title').innerHTML=mode==='edit'?'<i class="ti ti-edit"></i> Edit Produk':'<i class="ti ti-package"></i> Tambah Produk Baru';
  if(mode==='edit'&&id){
    var p=products.find(function(x){return x.id===id});
    if(p){editingId=id;document.getElementById('m-name').value=p.name;document.getElementById('m-brand').value=p.brand;document.getElementById('m-price').value=p.price;document.getElementById('m-old-price').value=p.oldPrice||'';document.getElementById('m-stock').value=p.stock;document.getElementById('m-disc').value=p.disc||'';document.getElementById('m-cat').value=p.cat;document.getElementById('m-rating').value=p.rating||'';document.getElementById('m-image-url').value=p.photoUrl||'';modalEmoji=p.emoji||'📦'}
  }else{
    ['m-name','m-brand','m-price','m-old-price','m-stock','m-disc','m-rating','m-image-url'].forEach(function(id){document.getElementById(id).value=''});
    document.getElementById('m-cat').value='Makanan';
    modalEmoji=categoryEmojis['Makanan'];
  }
  updateImagePreview();
  document.getElementById('prod-modal').classList.add('open');
}
function onCatChange(){
  if(!editingId){
    modalEmoji=categoryEmojis[document.getElementById('m-cat').value]||'📦';
    updateImagePreview();
  }
}
function updateImagePreview(){
  var preview=document.getElementById('m-image-preview');
  if(!preview)return;
  var url=document.getElementById('m-image-url').value.trim();
  preview.innerHTML=photoImg('preview',modalEmoji,72,true,url);
}
function closeModal(){document.getElementById('prod-modal').classList.remove('open');editingId=null}
function saveProduct(){
  var name=document.getElementById('m-name').value.trim();
  var price=parseInt(document.getElementById('m-price').value)||0;
  if(!name||!price){showToast('⚠️ Nama dan harga wajib diisi!');return}
  var brand=document.getElementById('m-brand').value.trim();
  var oldPrice=parseInt(document.getElementById('m-old-price').value)||null;
  var stock=parseInt(document.getElementById('m-stock').value)||0;
  var disc=document.getElementById('m-disc').value.trim()||null;
  var cat=document.getElementById('m-cat').value;
  var rating=parseFloat(document.getElementById('m-rating').value)||4.8;
  var photoUrl=document.getElementById('m-image-url').value.trim()||null;
  var photoKeywords={Makanan:'grocery-food',Minuman:'beverage-bottle',Kebutuhan:'household-items',Perawatan:'personal-care',Snack:'snack-food',Dapur:'kitchen-ingredients',Bayi:'baby-products',Kesehatan:'medicine-tablets'};
  if(editingId){
    var idx=products.findIndex(function(p){return p.id===editingId});
    if(idx>=0)products[idx]=Object.assign(products[idx],{name,brand:brand||'-',price,oldPrice,stock,disc,cat,rating,photoUrl});
    showToast('✅ Produk diperbarui!');
  }else{
    products.push({id:nextId++,name,brand:brand||'-',price,oldPrice,emoji:categoryEmojis[cat]||'📦',photo:photoKeywords[cat]||'grocery-product',photoUrl,cat,stock,disc,rating});
    showToast('✅ Produk baru ditambahkan!');
  }
  saveProducts(products);
  closeModal();renderAdminProducts();updateAdminStats();
}

/* ===== PENGATURAN & BANTUAN ===== */
function toggleSetting(el){
  el.classList.toggle('on');
  var titleEl=el.parentElement.querySelector('.settings-row-title');
  var label=titleEl?titleEl.textContent:'Pengaturan';
  var isOn=el.classList.contains('on');
  showToast((isOn?'✅ ':'⏸️ ')+label+' '+(isOn?'diaktifkan':'dinonaktifkan'));
}
function renderFaq(){
  var el=document.getElementById('faq-list');if(!el)return;
  el.innerHTML='';
  faqData.forEach(function(f,i){
    var div=document.createElement('div');
    div.className='faq-item';
    div.id='faq-'+i;
    div.innerHTML='<div class="faq-q" onclick="toggleFaq('+i+')"><span>'+f.q+'</span><i class="ti ti-chevron-down"></i></div><div class="faq-a">'+f.a+'</div>';
    el.appendChild(div);
  });
}
function toggleFaq(i){
  var el=document.getElementById('faq-'+i);
  if(el)el.classList.toggle('open');
}

/* ===== INIT ===== */
var _prodModal=document.getElementById('prod-modal');
if(_prodModal)_prodModal.addEventListener('click',function(e){if(e.target===this)closeModal()});
initAdminPage();
