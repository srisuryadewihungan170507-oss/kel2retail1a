/* ===== DATA PRODUK =====
   Halaman Gudang berdiri sendiri (terpisah dari Kasir), sehingga punya salinan
   data produk sendiri seperti halaman-halaman lain (index.js, kasir.js).
   Di aplikasi nyata, data ini semestinya berasal dari satu sumber (backend/database)
   agar perubahan stok di Gudang otomatis tersinkron ke Kasir & etalase toko. */
var products=[
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
  {id:26,name:'Gudang Garam Surya 16',brand:'Gudang Garam',price:26000,oldPrice:null,emoji:'🚬',photo:'cigarette-pack',photoUrl:'images/gudanggaram.jpg',cat:'Rokok',stock:80,disc:null,rating:4.6},
  {id:27,name:'Sampoerna A Mild 16',brand:'Sampoerna',price:28500,oldPrice:null,emoji:'🚬',photo:'cigarette-pack',photoUrl:'images/sampoerna.jpg',cat:'Rokok',stock:65,disc:null,rating:4.7},
  {id:28,name:'Marlboro Merah 20',brand:'Philip Morris',price:38000,oldPrice:null,emoji:'🚬',photo:'cigarette-pack',photoUrl:'images/marlboro.jpg',cat:'Rokok',stock:40,disc:null,rating:4.5},
];

function showToast(msg){
  var t=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');
  setTimeout(function(){t.classList.remove('show')},2200);
}

function showPage(id){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
  var el=document.getElementById('pg-'+id);
  if(el)el.classList.add('active');
  window.scrollTo(0,0);
}

function gdEscHtml(s){
  return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

/* ===== LOGIN PETUGAS GUDANG =====
   Di aplikasi nyata, validasi login WAJIB dilakukan di server (backend), bukan hanya di JavaScript sisi klien. */
var GUDANG_USER='gudang';
var GUDANG_PASS='gudang123';
var isGudangLoggedIn=false;
var gudangLoggedName='';
var gdClockTimer=null;

function togglePwGudang(){
  var input=document.getElementById('gd-login-password');
  var icon=document.getElementById('gd-pw-eye-icon');
  if(input.type==='password'){input.type='text';icon.className='ti ti-eye-off'}
  else{input.type='password';icon.className='ti ti-eye'}
}

function doGudangLogin(){
  var u=document.getElementById('gd-login-username').value.trim();
  var p=document.getElementById('gd-login-password').value;
  var errBox=document.getElementById('gd-login-error');
  if(!u||!p){
    document.getElementById('gd-login-error-msg').textContent='Username dan password wajib diisi';
    errBox.classList.add('show');
    return;
  }
  if(u===GUDANG_USER&&p===GUDANG_PASS){
    isGudangLoggedIn=true;
    gudangLoggedName=u;
    errBox.classList.remove('show');
    sessionStorage.setItem('gomart_gudang_logged_in','1');
    showToast('✅ Login berhasil, selamat bertugas di Gudang!');
    showPage('gudang');
    initGudangPage();
  }else{
    document.getElementById('gd-login-error-msg').textContent='Username atau password salah';
    errBox.classList.add('show');
    document.getElementById('gd-login-password').value='';
  }
}

function gudangLogout(){
  if(!confirm('Yakin ingin keluar dari halaman Gudang?'))return;
  isGudangLoggedIn=false;
  gudangLoggedName='';
  sessionStorage.removeItem('gomart_gudang_logged_in');
  if(gdClockTimer)clearInterval(gdClockTimer);
  showToast('👋 Berhasil keluar dari halaman Gudang');
  showPage('gudanglogin');
}

/* ===== HALAMAN GUDANG ===== */
var gdActiveCat='Semua';
var GD_LOG_KEY='gomart_gudang_log';

function gdUpdateClock(){
  var d=new Date();
  var c=document.getElementById('gd-clock');
  if(!c)return;
  c.textContent=d.toLocaleTimeString('id-ID');
  document.getElementById('gd-clockdate').textContent=d.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}

function renderGudangCatTabs(){
  var cats=['Semua'].concat(Array.from(new Set(products.map(function(p){return p.cat}))));
  var wrap=document.getElementById('gd-cat-tabs');
  if(!wrap)return;
  wrap.innerHTML='';
  cats.forEach(function(c){
    var b=document.createElement('div');
    b.className='gd-cat-tab'+(c===gdActiveCat?' active':'');
    b.textContent=c;
    b.onclick=function(){gdActiveCat=c;renderGudangCatTabs();renderGudangList()};
    wrap.appendChild(b);
  });

  var datalist=document.getElementById('gd-cat-datalist');
  if(datalist){
    datalist.innerHTML='';
    Array.from(new Set(products.map(function(p){return p.cat}))).forEach(function(c){
      var opt=document.createElement('option');
      opt.value=c;
      datalist.appendChild(opt);
    });
  }
}

function renderGudangStats(){
  var totalProduk=products.length;
  var stokMenipis=products.filter(function(p){return p.stock<20}).length;
  var totalUnit=products.reduce(function(s,p){return s+p.stock},0);
  document.getElementById('gd-stat-total').textContent=totalProduk;
  document.getElementById('gd-stat-low').textContent=stokMenipis;
  document.getElementById('gd-stat-units').textContent=totalUnit.toLocaleString('id-ID');
}

function renderGudangList(){
  var searchEl=document.getElementById('gd-search');
  var q=searchEl?searchEl.value.trim().toLowerCase():'';
  var list=products.filter(function(p){
    var matchCat=gdActiveCat==='Semua'||p.cat===gdActiveCat;
    var matchQ=!q||p.name.toLowerCase().includes(q);
    return matchCat&&matchQ;
  });
  var wrap=document.getElementById('gd-gudang-list');
  if(!wrap)return;
  if(list.length===0){
    wrap.innerHTML='<div class="gd-empty"><i class="ti ti-package-off" style="font-size:32px;display:block;margin-bottom:8px"></i>Produk tidak ditemukan</div>';
    return;
  }
  wrap.innerHTML='';
  list.forEach(function(p){
    var low=p.stock<20;
    var row=document.createElement('div');
    row.className='gd-gudang-row';
    row.innerHTML='<div class="gd-gudang-em">'+(p.emoji||'📦')+'</div>'
      +'<div class="gd-gudang-info"><div class="gd-gudang-name">'+gdEscHtml(p.name)+'</div>'
      +'<div class="gd-gudang-meta">'+gdEscHtml(p.cat)+' &middot; '+gdEscHtml(p.brand||'-')+(p.berat?' &middot; '+p.berat+' '+gdEscHtml(p.satuan||'g'):'')+'</div>'
      +'<div class="gd-gudang-stock'+(low?' low':'')+'" id="gd-stock-'+p.id+'">Stok saat ini: <b>'+p.stock+'</b>'+(low?' &middot; menipis!':'')+'</div></div>'
      +'<input type="number" min="1" class="gd-gudang-input" id="gd-qty-'+p.id+'" placeholder="Jml" onkeypress="if(event.key===\'Enter\')gdTambahStok('+p.id+')">'
      +'<button class="gd-gudang-addbtn" onclick="gdTambahStok('+p.id+')" title="Tambah Stok"><i class="ti ti-plus"></i> Masuk</button>';
    wrap.appendChild(row);
  });
}

function gdTambahStok(id){
  var input=document.getElementById('gd-qty-'+id);
  var qty=parseInt(input.value,10);
  if(!qty||qty<=0){
    showToast('⚠️ Masukkan jumlah stok yang valid');
    return;
  }
  var p=products.find(function(x){return x.id===id});
  if(!p)return;

  p.stock+=qty;
  input.value='';

  gdSaveLog(p,qty);
  renderGudangList();
  renderGudangStats();
  renderGudangHistory();
  showToast('✅ Stok "'+p.name+'" bertambah '+qty+' (total: '+p.stock+')');
}

/* ===== MASUKKAN BARANG BARU KE SISTEM =====
   Berbeda dengan gdTambahStok() (menambah stok barang yang SUDAH ADA),
   fungsi ini mendaftarkan barang BARU ke sistem lengkap dengan detailnya,
   termasuk berat/isi bersih beserta satuannya (kg, gram, karton, pcs, slof, bal, bungkus). */
function gdTambahBarangBaru(){
  var nama=document.getElementById('gd-new-nama').value.trim();
  var brand=document.getElementById('gd-new-brand').value.trim();
  var kategori=document.getElementById('gd-new-kategori').value.trim();
  var emoji=document.getElementById('gd-new-emoji').value.trim();
  var berat=parseInt(document.getElementById('gd-new-berat').value,10);
  var satuan=document.getElementById('gd-new-satuan').value;
  var harga=parseInt(document.getElementById('gd-new-harga').value,10);
  var stok=parseInt(document.getElementById('gd-new-stok').value,10);
  var deskripsi=document.getElementById('gd-new-deskripsi').value.trim();

  if(!nama||!kategori){
    showToast('⚠️ Nama barang dan kategori wajib diisi');
    return;
  }
  if(!berat||berat<=0){
    showToast('⚠️ Berat/isi bersih wajib diisi dan lebih dari 0');
    return;
  }
  if(isNaN(harga)||harga<0){
    showToast('⚠️ Harga jual wajib diisi');
    return;
  }
  if(isNaN(stok)||stok<0){
    showToast('⚠️ Stok awal wajib diisi');
    return;
  }
  var namaLower=nama.toLowerCase();
  var duplikat=products.some(function(p){return p.name.toLowerCase()===namaLower});
  if(duplikat){
    showToast('⚠️ Barang dengan nama tersebut sudah ada di sistem');
    return;
  }

  var newId=products.reduce(function(max,p){return p.id>max?p.id:max},0)+1;
  var newProduct={
    id:newId,
    name:nama,
    brand:brand||'-',
    price:harga,
    oldPrice:null,
    emoji:emoji||'📦',
    photo:null,
    photoUrl:null,
    cat:kategori,
    berat:berat,
    satuan:satuan,
    stock:stok,
    disc:null,
    rating:null,
    description:deskripsi||''
  };
  products.push(newProduct);

  gdSaveNewItemLog(newProduct);

  document.getElementById('gd-new-nama').value='';
  document.getElementById('gd-new-brand').value='';
  document.getElementById('gd-new-kategori').value='';
  document.getElementById('gd-new-emoji').value='';
  document.getElementById('gd-new-berat').value='';
  document.getElementById('gd-new-satuan').value='gram';
  document.getElementById('gd-new-harga').value='';
  document.getElementById('gd-new-stok').value='';
  document.getElementById('gd-new-deskripsi').value='';

  renderGudangCatTabs();
  renderGudangStats();
  renderGudangList();
  renderGudangHistory();
  showToast('✅ Barang "'+newProduct.name+'" ('+newProduct.berat+' '+newProduct.satuan+') berhasil dimasukkan ke sistem');
}

var GD_NEWITEM_LOG_KEY='gomart_gudang_newitem_log';

function gdSaveNewItemLog(p){
  var list=gdLoadNewItemLog();
  list.push({id:p.id,name:p.name,emoji:p.emoji,cat:p.cat,brand:p.brand,berat:p.berat,satuan:p.satuan,price:p.price,stock:p.stock,date:new Date().toISOString(),by:gudangLoggedName||'gudang'});
  sessionStorage.setItem(GD_NEWITEM_LOG_KEY,JSON.stringify(list));
}

function gdLoadNewItemLog(){
  try{
    var raw=sessionStorage.getItem(GD_NEWITEM_LOG_KEY);
    return raw?JSON.parse(raw):[];
  }catch(e){return []}
}

function gdSaveLog(p,qty){
  var list=gdLoadLog();
  list.push({id:p.id,name:p.name,emoji:p.emoji,qty:qty,stockAfter:p.stock,date:new Date().toISOString(),by:gudangLoggedName||'gudang'});
  sessionStorage.setItem(GD_LOG_KEY,JSON.stringify(list));
}

function gdLoadLog(){
  try{
    var raw=sessionStorage.getItem(GD_LOG_KEY);
    return raw?JSON.parse(raw):[];
  }catch(e){return []}
}

function renderGudangHistory(){
  var wrap=document.getElementById('gd-gudang-history');
  if(!wrap)return;
  var stokLog=gdLoadLog().map(function(l){return {type:'stok',data:l,date:l.date}});
  var newLog=gdLoadNewItemLog().map(function(l){return {type:'baru',data:l,date:l.date}});
  var combined=stokLog.concat(newLog).sort(function(a,b){return new Date(a.date)-new Date(b.date)});

  if(combined.length===0){
    wrap.innerHTML='<div class="gd-empty">Belum ada riwayat barang masuk</div>';
    return;
  }
  wrap.innerHTML='';
  combined.slice().reverse().slice(0,30).forEach(function(entry){
    var l=entry.data;
    var d=new Date(l.date);
    var row=document.createElement('div');
    row.className='gd-gudang-hist-row';
    if(entry.type==='baru'){
      row.innerHTML='<span>'+(l.emoji||'📦')+' '+gdEscHtml(l.name)+' <span class="gh-new">BARU &middot; '+l.berat+' '+gdEscHtml(l.satuan||'g')+' &middot; stok awal '+l.stock+'</span></span>'
        +'<span>'+d.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})+' '+d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})+'</span>';
    } else {
      row.innerHTML='<span>'+(l.emoji||'📦')+' '+gdEscHtml(l.name)+' <span class="gh-add">+'+l.qty+'</span></span>'
        +'<span>'+d.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})+' '+d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})+'</span>';
    }
    wrap.appendChild(row);
  });
}

function gdResetHistory(){
  if(!confirm('Reset seluruh riwayat barang masuk (termasuk riwayat barang baru)?'))return;
  sessionStorage.removeItem(GD_LOG_KEY);
  sessionStorage.removeItem(GD_NEWITEM_LOG_KEY);
  renderGudangHistory();
  showToast('🗑️ Riwayat barang masuk direset');
}

function initGudangPage(){
  renderGudangCatTabs();
  renderGudangStats();
  renderGudangList();
  renderGudangHistory();
  gdUpdateClock();
  if(gdClockTimer)clearInterval(gdClockTimer);
  gdClockTimer=setInterval(gdUpdateClock,1000);
  var hdrUser=document.getElementById('gd-hdr-user');
  if(hdrUser)hdrUser.textContent='Bertugas: '+(gudangLoggedName||'Petugas Gudang')+' · Manajemen Stok';
}

document.getElementById('gd-login-username').focus();