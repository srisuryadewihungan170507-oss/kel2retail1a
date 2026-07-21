/* ===== DATA PRODUK ===== */
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
];

function fmtRp(n){return 'Rp'+parseInt(n).toLocaleString('id-ID')}

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

/* ===== KASIR AUTH =====
   Di aplikasi nyata, validasi login WAJIB dilakukan di server (backend), bukan hanya di JavaScript sisi klien. */
var KASIR_USER='kasir';
var KASIR_PASS='kasir123';
var isKasirLoggedIn=false;
var kasirLoggedName='';

function togglePwKasir(){
  var input=document.getElementById('kasir-login-password');
  var icon=document.getElementById('kasir-pw-eye-icon');
  if(input.type==='password'){input.type='text';icon.className='ti ti-eye-off'}
  else{input.type='password';icon.className='ti ti-eye'}
}

function doKasirLogin(){
  var u=document.getElementById('kasir-login-username').value.trim();
  var p=document.getElementById('kasir-login-password').value;
  var errBox=document.getElementById('kasir-login-error');
  if(!u||!p){
    document.getElementById('kasir-login-error-msg').textContent='Username dan password wajib diisi';
    errBox.classList.add('show');
    return;
  }
  if(u===KASIR_USER&&p===KASIR_PASS){
    isKasirLoggedIn=true;
    kasirLoggedName=u;
    errBox.classList.remove('show');
    sessionStorage.setItem('gomart_kasir_logged_in','1');
    showToast('✅ Login berhasil, selamat bertugas!');
    showPage('kasir');
    initKasirPage();
  }else{
    document.getElementById('kasir-login-error-msg').textContent='Username atau password salah';
    errBox.classList.add('show');
    document.getElementById('kasir-login-password').value='';
  }
}

function kasirLogout(){
  if(!confirm('Yakin ingin keluar dari halaman kasir? Transaksi berjalan yang belum dibayar akan hilang.'))return;
  isKasirLoggedIn=false;
  kasirLoggedName='';
  kasirCart={};
  sessionStorage.removeItem('gomart_kasir_logged_in');
  if(ksClockTimer)clearInterval(ksClockTimer);
  showToast('👋 Berhasil keluar dari halaman kasir');
  showPage('kasirlogin');
}

/* ===== HALAMAN KASIR (POS) ===== */
var kasirCart={};
var ksActiveCat='Semua';
var ksPayMethod='cash';
var ksLastTrx=null;
var ksClockTimer=null;

function ksUpdateClock(){
  var d=new Date();
  var c=document.getElementById('ks-clock');
  if(!c)return;
  c.textContent=d.toLocaleTimeString('id-ID');
  document.getElementById('ks-clockdate').textContent=d.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}

function renderKasirCatTabs(){
  var cats=['Semua'].concat(Array.from(new Set(products.map(function(p){return p.cat}))));
  var wrap=document.getElementById('ks-cat-tabs');
  if(!wrap)return;
  wrap.innerHTML='';
  cats.forEach(function(c){
    var b=document.createElement('div');
    b.className='ks-cat-tab'+(c===ksActiveCat?' active':'');
    b.textContent=c;
    b.onclick=function(){ksActiveCat=c;renderKasirCatTabs();renderKasirProducts()};
    wrap.appendChild(b);
  });
}

function renderKasirProducts(){
  var searchEl=document.getElementById('ks-search');
  var q=searchEl?searchEl.value.trim().toLowerCase():'';
  var list=products.filter(function(p){
    var matchCat=ksActiveCat==='Semua'||p.cat===ksActiveCat;
    var matchQ=!q||p.name.toLowerCase().includes(q);
    return matchCat&&matchQ;
  });
  var grid=document.getElementById('ks-prod-grid');
  if(!grid)return;
  if(list.length===0){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--gray-400)"><i class="ti ti-package-off" style="font-size:36px;display:block;margin-bottom:8px"></i>Produk tidak ditemukan</div>';return}
  grid.innerHTML='';
  list.forEach(function(p){
    var sisaStok=p.stock-(kasirCart[p.id]?kasirCart[p.id].qty:0);
    var out=sisaStok<=0;
    var card=document.createElement('div');
    card.className='ks-pos-card'+(out?' out':'');
    card.onclick=function(){if(!out)ksAddToCart(p.id)};
    card.innerHTML='<div class="ks-em">'+(p.emoji||'📦')+'</div><div class="ks-nm">'+p.name+'</div><div class="ks-pr">'+fmtRp(p.price)+'</div><div class="ks-st">Stok: '+sisaStok+'</div>';
    grid.appendChild(card);
  });
}

function ksAddToCart(id){
  var p=products.find(function(x){return x.id===id});
  if(!p)return;
  if(!kasirCart[id])kasirCart[id]={id:p.id,name:p.name,price:p.price,emoji:p.emoji||'📦',stock:p.stock,qty:0};
  if(kasirCart[id].qty>=p.stock){showToast('⚠️ Stok tidak mencukupi');return}
  kasirCart[id].qty++;
  renderKasirCart();renderKasirProducts();
  showToast('✅ '+p.name+' ditambahkan ke transaksi');
}
function ksChangeQty(id,delta){
  var it=kasirCart[id];if(!it)return;
  it.qty+=delta;
  if(it.qty<=0){delete kasirCart[id]}
  else if(it.qty>it.stock){it.qty=it.stock;showToast('⚠️ Stok maksimum tercapai')}
  renderKasirCart();renderKasirProducts();
}
function ksRemoveFromCart(id){delete kasirCart[id];renderKasirCart();renderKasirProducts()}
function ksClearCart(){
  if(Object.keys(kasirCart).length===0)return;
  if(!confirm('Kosongkan seluruh transaksi ini?'))return;
  kasirCart={};renderKasirCart();renderKasirProducts();
  showToast('🗑️ Transaksi dikosongkan');
}

function renderKasirCart(){
  var wrap=document.getElementById('ks-cart-list');
  if(!wrap)return;
  var items=Object.values(kasirCart);
  if(items.length===0){
    wrap.innerHTML='<div class="ks-cart-empty"><i class="ti ti-shopping-cart-off"></i>Belum ada barang<br>Klik produk di sebelah kiri untuk menambahkan</div>';
  } else {
    wrap.innerHTML='';
    items.forEach(function(it){
      var row=document.createElement('div');
      row.className='ks-cart-item';
      row.innerHTML='<div class="ks-ci-em">'+it.emoji+'</div>'
        +'<div class="ks-ci-info"><div class="ks-ci-name">'+it.name+'</div><div class="ks-ci-price">'+fmtRp(it.price)+'</div></div>'
        +'<div class="ks-qty-ctrl">'
        +'<button class="ks-qty-btn" onclick="ksChangeQty('+it.id+',-1)"><i class="ti ti-minus" style="font-size:11px"></i></button>'
        +'<span class="ks-qty-num">'+it.qty+'</span>'
        +'<button class="ks-qty-btn" onclick="ksChangeQty('+it.id+',1)"><i class="ti ti-plus" style="font-size:11px"></i></button>'
        +'</div>'
        +'<div class="ks-ci-sub">'+fmtRp(it.price*it.qty)+'</div>'
        +'<button class="ks-ci-remove" onclick="ksRemoveFromCart('+it.id+')"><i class="ti ti-x"></i></button>';
      wrap.appendChild(row);
    });
  }
  var jenis=items.length;
  var totalQty=items.reduce(function(s,i){return s+i.qty},0);
  var subtotal=items.reduce(function(s,i){return s+i.price*i.qty},0);
  document.getElementById('ks-sum-jenis').textContent=jenis;
  document.getElementById('ks-sum-qty').textContent=totalQty;
  document.getElementById('ks-sum-subtotal').textContent=fmtRp(subtotal);
  document.getElementById('ks-sum-total').textContent=fmtRp(subtotal);
  document.getElementById('ks-btn-open-pay').disabled=totalQty===0;
}

function ksGetTotal(){return Object.values(kasirCart).reduce(function(s,i){return s+i.price*i.qty},0)}

function ksOpenPayModal(){
  var total=ksGetTotal();
  if(total<=0)return;
  document.getElementById('ks-pay-total').textContent=fmtRp(total);
  document.getElementById('ks-cash-input').value='';
  ksSelectPayMethod('cash');
  ksBuildQuickCash(total);
  ksCalcChange();
  document.getElementById('ks-pay-modal').classList.add('show');
}
function ksClosePayModal(){document.getElementById('ks-pay-modal').classList.remove('show')}

function ksSelectPayMethod(m){
  ksPayMethod=m;
  document.querySelectorAll('.ks-pay-method').forEach(function(el){el.classList.toggle('active',el.dataset.m===m)});
  document.getElementById('ks-cash-fields').style.display=(m==='cash')?'block':'none';
  var btn=document.getElementById('ks-btn-confirm-pay');
  if(m!=='cash'){btn.disabled=false}else{ksCalcChange()}
}

function ksBuildQuickCash(total){
  var opts=[total,Math.ceil(total/5000)*5000,Math.ceil(total/10000)*10000,Math.ceil(total/50000)*50000,Math.ceil(total/100000)*100000];
  opts=Array.from(new Set(opts)).filter(function(v){return v>0}).sort(function(a,b){return a-b}).slice(0,4);
  var wrap=document.getElementById('ks-quick-cash');
  wrap.innerHTML='';
  opts.forEach(function(v){
    var b=document.createElement('button');
    b.textContent=v===total?'Uang Pas':fmtRp(v);
    b.onclick=function(){document.getElementById('ks-cash-input').value=v;ksCalcChange()};
    wrap.appendChild(b);
  });
}

function ksCalcChange(){
  var total=ksGetTotal();
  var cash=parseFloat(document.getElementById('ks-cash-input').value)||0;
  var change=cash-total;
  var box=document.getElementById('ks-change-box');
  var val=document.getElementById('ks-change-val');
  if(change<0){
    box.classList.add('negative');
    val.textContent=fmtRp(Math.abs(change))+' kurang';
    document.getElementById('ks-cb-label').textContent='Kekurangan Bayar';
  } else {
    box.classList.remove('negative');
    val.textContent=fmtRp(change);
    document.getElementById('ks-cb-label').textContent='Kembalian';
  }
  document.getElementById('ks-btn-confirm-pay').disabled=(cash<total);
}

function ksConfirmPay(){
  var total=ksGetTotal();
  var items=Object.values(kasirCart);
  if(items.length===0)return;
  var cash=ksPayMethod==='cash'?(parseFloat(document.getElementById('ks-cash-input').value)||0):total;
  if(ksPayMethod==='cash'&&cash<total){showToast('⚠️ Uang diterima kurang dari total');return}
  document.getElementById('ks-confirm-modal').classList.add('show');
}

function ksCloseConfirmModal(){
  document.getElementById('ks-confirm-modal').classList.remove('show');
}

function ksProceedPay(){
  ksCloseConfirmModal();
  var total=ksGetTotal();
  var items=Object.values(kasirCart);
  if(items.length===0)return;
  var cash=ksPayMethod==='cash'?(parseFloat(document.getElementById('ks-cash-input').value)||0):total;
  var change=ksPayMethod==='cash'?(cash-total):0;

  items.forEach(function(it){
    var p=products.find(function(x){return x.id===it.id});
    if(p)p.stock-=it.qty;
  });

  ksLastTrx={
    id:'TRX'+Date.now(),
    date:new Date(),
    items:items,
    totalQty:items.reduce(function(s,i){return s+i.qty},0),
    jenis:items.length,
    total:total,
    method:ksPayMethod,
    cash:cash,
    change:change
  };

  ksClosePayModal();
  ksRenderStruk(ksLastTrx);
  document.getElementById('ks-struk-modal').classList.add('show');
  ksSaveTrxToReport(ksLastTrx);
}

var KS_REPORT_KEY='gomart_kasir_report';

function ksLoadReport(){
  try{
    var raw=sessionStorage.getItem(KS_REPORT_KEY);
    return raw?JSON.parse(raw):[];
  }catch(e){return []}
}

function ksSaveTrxToReport(t){
  var list=ksLoadReport();
  list.push({
    id:t.id,
    date:t.date,
    items:t.items.map(function(it){return {id:it.id,name:it.name,emoji:it.emoji,qty:it.qty,price:it.price}}),
    total:t.total,
    method:t.method
  });
  sessionStorage.setItem(KS_REPORT_KEY,JSON.stringify(list));
}

function ksOpenReport(){
  var list=ksLoadReport();
  var totalPenjualan=list.reduce(function(s,t){return s+t.total},0);
  var totalTrx=list.length;
  var soldMap={};
  var totalQtyTerjual=0;
  list.forEach(function(t){
    t.items.forEach(function(it){
      totalQtyTerjual+=it.qty;
      if(!soldMap[it.id])soldMap[it.id]={name:it.name,emoji:it.emoji,qty:0};
      soldMap[it.id].qty+=it.qty;
    });
  });
  var soldArr=Object.values(soldMap).sort(function(a,b){return b.qty-a.qty});

  var html='<div class="ks-report-stats">'
    +'<div class="ks-report-stat"><div class="rs-val">'+totalTrx+'</div><div class="rs-lbl">Transaksi</div></div>'
    +'<div class="ks-report-stat"><div class="rs-val">'+totalQtyTerjual+'</div><div class="rs-lbl">Produk Terjual</div></div>'
    +'<div class="ks-report-stat"><div class="rs-val" style="font-size:13px">'+fmtRp(totalPenjualan)+'</div><div class="rs-lbl">Total Penjualan</div></div>'
    +'</div>';

  html+='<div class="ks-report-sub"><i class="ti ti-receipt"></i> Riwayat Transaksi</div>';
  if(list.length===0){
    html+='<div class="ks-report-trx"><div class="ks-report-empty">Belum ada transaksi</div></div>';
  }else{
    html+='<div class="ks-report-trx">';
    list.slice().reverse().forEach(function(t){
      var methodLabel={cash:'Tunai',qris:'QRIS',debit:'Debit'}[t.method];
      var d=new Date(t.date);
      html+='<div class="ks-report-trx-row"><span>'+t.id+' · '+methodLabel+' · '+d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})+'</span><span style="font-weight:800;color:var(--maroon-dark)">'+fmtRp(t.total)+'</span></div>';
    });
    html+='</div>';
  }

  html+='<div class="ks-report-sub"><i class="ti ti-trending-up"></i> Produk Terlaris</div>';
  if(soldArr.length===0){
    html+='<div class="ks-report-list"><div class="ks-report-empty">Belum ada produk terjual</div></div>';
  }else{
    html+='<div class="ks-report-list">';
    soldArr.forEach(function(s){
      html+='<div class="ks-report-row"><span class="rr-name">'+(s.emoji||'📦')+' '+s.name+'</span><span class="rr-qty">'+s.qty+' terjual</span></div>';
    });
    html+='</div>';
  }

  document.getElementById('ks-report-content').innerHTML=html;
  document.getElementById('ks-report-modal').classList.add('show');
}

function ksCloseReport(){
  document.getElementById('ks-report-modal').classList.remove('show');
}

function ksResetReport(){
  if(!confirm('Reset seluruh laporan penjualan? Data transaksi akan dihapus.'))return;
  sessionStorage.removeItem(KS_REPORT_KEY);
  ksOpenReport();
  showToast('🗑️ Laporan penjualan direset');
}

function ksEscHtml(s){
  return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

function ksRenderStruk(t){
  window._ksLastTrx=t;
  var html='<div class="ks-struk-photo-wrap"><img id="ks-struk-img" src="images/struk_belanjaan.jpg" alt="Struk Pembayaran GoMART"></div>';
  document.getElementById('ks-struk-content').innerHTML=html;

  var img=document.getElementById('ks-struk-img');
  if(img){
    if(img.complete&&img.naturalWidth){ksUpdatePrintPageSize();ksApplyPrintSettingsAfterStruk();}
    else{img.onload=function(){ksUpdatePrintPageSize();ksApplyPrintSettingsAfterStruk();};}
  }
}

/* Atur ukuran kertas cetak (@page) agar seperti struk kasir toko sungguhan:
   lebar tetap 80mm (standar kertas printer thermal), tinggi menyesuaikan
   otomatis mengikuti panjang konten struk (seperti kertas roll thermal asli). */
function ksUpdatePrintPageSize(){
  var wrapEl=document.getElementById('ks-struk-content');
  if(!wrapEl)return;
  var s=ksGetPrintSettings();
  var pxPerMm=96/25.4;
  var marginMM=s.marginMM;
  var styleEl=document.getElementById('ks-print-pagesize-style');
  if(!styleEl){
    styleEl=document.createElement('style');
    styleEl.id='ks-print-pagesize-style';
    document.head.appendChild(styleEl);
  }else{
    document.head.appendChild(styleEl);
  }

  if(s.paperType==='a4'||s.paperType==='letter'){
    var fixed=KS_PAPER_SIZES[s.paperType];
    styleEl.textContent='@media print{ '
      +'html,body{width:'+fixed.w+'mm!important;height:'+fixed.h+'mm!important}'
      +'#ks-struk-modal,#ks-struk-modal .ks-modal-box{width:'+fixed.w+'mm!important;max-width:'+fixed.w+'mm!important;height:'+fixed.h+'mm!important}'
      +'#ks-struk-content{width:'+fixed.w+'mm!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;padding-top:15mm!important}'
      +'.ks-struk-photo-wrap{max-width:80mm!important;width:80mm!important}'
      +'@page{ margin:'+marginMM+'mm; size:'+fixed.w+'mm '+fixed.h+'mm; } }';
  }else{
    /* Kertas mengikuti ukuran ASLI gambar struk yang dirender (lebar & tinggi
       gambar itu sendiri), bukan lagi lebar tetap dari pengaturan. */
    var img=document.getElementById('ks-struk-img');
    var imgWidthPx=(img&&img.naturalWidth)?img.getBoundingClientRect().width:wrapEl.scrollWidth;
    var imgHeightPx=(img&&img.naturalHeight)?img.getBoundingClientRect().height:wrapEl.scrollHeight;
    var widthMM=Math.max(20,+(imgWidthPx/pxPerMm).toFixed(2));
    var heightMM=Math.max(20,Math.ceil(imgHeightPx/pxPerMm)+marginMM*2);
    styleEl.textContent='@media print{ '
      +'html,body,#ks-struk-modal,#ks-struk-modal .ks-modal-box,#ks-struk-content,.ks-struk-photo-wrap,.ks-struk-photo-wrap img{width:'+widthMM+'mm!important;max-width:'+widthMM+'mm!important}'
      +'@page{ margin:'+marginMM+'mm; size:'+widthMM+'mm '+heightMM+'mm; } }';
  }
}

function ksPrintStruk(){
  ksUpdatePrintPageSize();
  setTimeout(function(){
    ksUpdatePrintPageSize();
    window.print();
  },50);
}

/* =====================================================================
   PENGATURAN CETAK STRUK (tersimpan di localStorage, per browser/komputer)
   ===================================================================== */
var KS_PRINTSET_KEY='ks_print_settings';
var KS_PAPER_SIZES={
  a4:{w:210,h:297},
  letter:{w:215.9,h:279.4}
};
var KS_PRINTSET_DEFAULT={
  method:'browser',      // 'browser' atau 'thermal'
  paperType:'thermal',   // 'thermal', 'a4', atau 'letter'
  widthMM:80,            // lebar kertas struk dalam mm (khusus paperType 'thermal')
  marginMM:0,            // margin cetak dalam mm
  printerName:'POS-80',  // nama printer thermal (untuk QZ Tray)
  autoPrint:false        // cetak otomatis setelah bayar dikonfirmasi
};

function ksGetPrintSettings(){
  try{
    var raw=localStorage.getItem(KS_PRINTSET_KEY);
    if(!raw)return Object.assign({},KS_PRINTSET_DEFAULT);
    return Object.assign({},KS_PRINTSET_DEFAULT,JSON.parse(raw));
  }catch(e){
    return Object.assign({},KS_PRINTSET_DEFAULT);
  }
}

function ksSavePrintSettingsToStorage(s){
  try{ localStorage.setItem(KS_PRINTSET_KEY,JSON.stringify(s)); }
  catch(e){ console.error('Gagal menyimpan pengaturan cetak',e); }
}

function ksOpenPrintSettings(){
  var s=ksGetPrintSettings();
  document.getElementById('ps-method').value=s.method;
  document.getElementById('ps-paper-type').value=s.paperType||'thermal';
  document.getElementById('ps-width').value=s.widthMM;
  document.getElementById('ps-margin').value=s.marginMM;
  document.getElementById('ps-printer-name').value=s.printerName;
  document.getElementById('ps-auto-print').checked=!!s.autoPrint;
  ksTogglePrintSettingFields();
  ksTogglePaperTypeFields();
  document.getElementById('ps-method').onchange=ksTogglePrintSettingFields;
  document.getElementById('ks-printset-modal').classList.add('show');
}

function ksTogglePaperTypeFields(){
  var isThermal=document.getElementById('ps-paper-type').value==='thermal';
  document.getElementById('ps-thermal-width-field').style.display=isThermal?'block':'none';
}

function ksTogglePrintSettingFields(){
  var isThermal=document.getElementById('ps-method').value==='thermal';
  document.getElementById('ps-thermal-fields').style.display=isThermal?'block':'none';
}

function ksClosePrintSettings(){
  document.getElementById('ks-printset-modal').classList.remove('show');
}

function ksSetPaperPreset(mm){
  document.getElementById('ps-width').value=mm;
}

function ksSavePrintSettings(){
  var widthMM=parseFloat(document.getElementById('ps-width').value)||KS_PRINTSET_DEFAULT.widthMM;
  var marginMM=parseFloat(document.getElementById('ps-margin').value);
  if(isNaN(marginMM))marginMM=KS_PRINTSET_DEFAULT.marginMM;
  var s={
    method:document.getElementById('ps-method').value,
    paperType:document.getElementById('ps-paper-type').value,
    widthMM:Math.max(30,Math.min(120,widthMM)),
    marginMM:Math.max(0,Math.min(20,marginMM)),
    printerName:document.getElementById('ps-printer-name').value.trim()||KS_PRINTSET_DEFAULT.printerName,
    autoPrint:document.getElementById('ps-auto-print').checked
  };
  ksSavePrintSettingsToStorage(s);
  KS_PRINTER_NAME=s.printerName; // sinkron dengan variabel lama yang dipakai ksPrintToThermalPrinter()
  ksClosePrintSettings();
  showToast('✅ Pengaturan cetak disimpan');
}

function ksResetPrintSettings(){
  ksSavePrintSettingsToStorage(KS_PRINTSET_DEFAULT);
  KS_PRINTER_NAME=KS_PRINTSET_DEFAULT.printerName;
  ksOpenPrintSettings();
  showToast('↺ Pengaturan cetak dikembalikan ke default');
}

/* Dipanggil setelah struk dirender, agar sesuai pengaturan: cetak otomatis
   dan/atau memilih metode cetak (browser vs thermal) sesuai preferensi. */
function ksApplyPrintSettingsAfterStruk(){
  var s=ksGetPrintSettings();
  if(!s.autoPrint)return;
  if(s.method==='thermal'){
    ksPrintToThermalPrinter(window._ksLastTrx);
  }else{
    ksPrintStruk();
  }
}

var KS_PRINTER_NAME=(function(){
  try{
    var raw=localStorage.getItem('ks_print_settings');
    if(raw){var s=JSON.parse(raw); if(s.printerName)return s.printerName;}
  }catch(e){}
  return 'POS-80';
})(); // Ganti lewat tombol Pengaturan Cetak di header kasir, atau edit KS_PRINTSET_DEFAULT di bawah

function ksBuildStrukText(t){
  var methodLabel={cash:'Tunai',qris:'QRIS',debit:'Kartu Debit'}[t.method];
  var d=t.date instanceof Date?t.date:new Date(t.date);
  var W=32; // lebar karakter kertas 80mm (font kecil printer thermal)
  function line(ch){return Array(W+1).join(ch)}
  function center(s){s=String(s);var pad=Math.max(0,Math.floor((W-s.length)/2));return Array(pad+1).join(' ')+s}
  function row(l,r){l=String(l);r=String(r);var sp=Math.max(1,W-l.length-r.length);return l+Array(sp+1).join(' ')+r}
  var out='';
  out+=center('GoMART')+'\n';
  out+=center('Struk Belanja')+'\n';
  out+=line('-')+'\n';
  out+='No: '+t.id+'\n';
  out+=d.toLocaleString('id-ID')+'\n';
  out+=line('-')+'\n';
  (t.items||[]).forEach(function(it){
    out+=it.name+'\n';
    out+=row(it.qty+' x '+fmtRp(it.price),fmtRp(it.qty*it.price))+'\n';
  });
  out+=line('-')+'\n';
  out+=row('Jenis Barang',t.jenis)+'\n';
  out+=row('Total Qty',t.totalQty)+'\n';
  out+=row('TOTAL',fmtRp(t.total))+'\n';
  out+=row('Metode',methodLabel)+'\n';
  if(t.method==='cash'){
    out+=row('Tunai',fmtRp(t.cash||t.total))+'\n';
    out+=row('Kembali',fmtRp(t.change))+'\n';
  }
  out+=line('-')+'\n';
  out+=center('Terima Kasih')+'\n';
  out+=center('Selamat Belanja Kembali')+'\n';
  out+='\n\n\n'; // feed kertas sebelum potong
  return out;
}

function ksPrintToThermalPrinter(t){
  if(typeof qz==='undefined'){
    showToast('⚠️ QZ Tray belum terpasang/aktif. Lihat komentar di kasir.js untuk cara setup.');
    return;
  }
  var connectPromise=qz.websocket.isActive()?Promise.resolve():qz.websocket.connect();
  connectPromise.then(function(){
    var config=qz.configs.create(KS_PRINTER_NAME);
    var data=[{type:'raw',format:'plain',data:ksBuildStrukText(t)}];
    return qz.print(config,data);
  }).then(function(){
    showToast('🖨️ Struk berhasil dicetak ke printer');
  }).catch(function(err){
    console.error(err);
    showToast('❌ Gagal mencetak: '+(err&&err.message?err.message:'periksa koneksi printer'));
  });
}

function ksCloseStrukModal(){document.getElementById('ks-struk-modal').classList.remove('show')}

function ksNewTransaction(){
  kasirCart={};
  ksCloseStrukModal();
  renderKasirCart();
  renderKasirProducts();
  showToast('🧾 Transaksi baru dimulai');
}

function initKasirPage(){
  renderKasirCatTabs();
  renderKasirProducts();
  renderKasirCart();
  ksUpdateClock();
  if(ksClockTimer)clearInterval(ksClockTimer);
  ksClockTimer=setInterval(ksUpdateClock,1000);
  var hdrUser=document.getElementById('ks-hdr-user');
  if(hdrUser)hdrUser.textContent='Bertugas: '+(kasirLoggedName||'Kasir')+' · Point of Sale';
}

document.getElementById('kasir-login-username').focus();