/* Produk default, dipakai hanya jika localStorage kosong (mis. kunjungan pertama).
   Setelah itu, sumber kebenaran data produk ada di localStorage ('gomart_products'),
   sehingga perubahan yang dilakukan admin di admin.html langsung terlihat di sini. */
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

var PRODUCTS_KEY='gomart_products';
function loadSharedProducts(){
  try{
    var raw=localStorage.getItem(PRODUCTS_KEY);
    if(raw)return JSON.parse(raw);
  }catch(e){}
  try{localStorage.setItem(PRODUCTS_KEY,JSON.stringify(DEFAULT_PRODUCTS))}catch(e){}
  return DEFAULT_PRODUCTS.slice();
}
var products=loadSharedProducts();

/* ===== DATA TOKO ===== */
var stores=[
  {id:1,name:'GoMART Official Store',initial:'GM',loc:'Surabaya, Jawa Timur',rating:4.9,reviews:1240,followers:'12,4rb',products:8,joined:'Jan 2020',responseRate:'99%',responseTime:'± 5 menit',verified:true,official:true,fastShip:true,cats:['Makanan','Minuman','Dapur']},
  {id:2,name:'Sehat Sejahtera Farma',initial:'SF',loc:'Surabaya, Jawa Timur',rating:4.8,reviews:850,followers:'6,1rb',products:3,joined:'Mar 2021',responseRate:'97%',responseTime:'± 10 menit',verified:true,official:false,fastShip:true,cats:['Kesehatan']},
  {id:3,name:'Bunda & Baby Shop',initial:'BB',loc:'Surabaya, Jawa Timur',rating:4.9,reviews:642,followers:'4,8rb',products:1,joined:'Jun 2022',responseRate:'98%',responseTime:'± 8 menit',verified:true,official:false,fastShip:false,cats:['Bayi']},
  {id:4,name:'Rumah Perawatan Diri',initial:'RP',loc:'Sidoarjo, Jawa Timur',rating:4.7,reviews:521,followers:'3,2rb',products:2,joined:'Nov 2022',responseRate:'95%',responseTime:'± 15 menit',verified:false,official:false,fastShip:true,cats:['Perawatan']},
  {id:5,name:'Segar Buah & Sayur',initial:'SB',loc:'Surabaya, Jawa Timur',rating:4.8,reviews:410,followers:'2,9rb',products:3,joined:'Feb 2023',responseRate:'96%',responseTime:'± 12 menit',verified:true,official:false,fastShip:true,cats:['Makanan']},
  {id:6,name:'Rumah Bumbu Nusantara',initial:'RB',loc:'Surabaya, Jawa Timur',rating:4.7,reviews:365,followers:'2,1rb',products:3,joined:'Aug 2022',responseRate:'94%',responseTime:'± 18 menit',verified:false,official:false,fastShip:false,cats:['Dapur']},
  {id:7,name:'Snack Corner Official',initial:'SC',loc:'Sidoarjo, Jawa Timur',rating:4.9,reviews:788,followers:'5,6rb',products:3,joined:'May 2021',responseRate:'98%',responseTime:'± 6 menit',verified:true,official:false,fastShip:true,cats:['Snack']},
  {id:8,name:'Fresh Drink Station',initial:'FD',loc:'Surabaya, Jawa Timur',rating:4.8,reviews:602,followers:'4,3rb',products:4,joined:'Oct 2021',responseRate:'97%',responseTime:'± 9 menit',verified:true,official:false,fastShip:true,cats:['Minuman']},
];
var followedStores={};
var currentStoreId=null;

var storeReviews=[
  {name:'Rina A.',rating:5,date:'2 hari lalu',text:'Barang original dan pengiriman cepat sekali, seller responsif!'},
  {name:'Budi S.',rating:5,date:'5 hari lalu',text:'Sudah langganan di toko ini, kualitas selalu terjaga.'},
  {name:'Dewi K.',rating:4,date:'1 minggu lalu',text:'Packing rapi, cuma agak lama sampainya karena ongkir reguler.'},
];

/* Kaitkan tiap produk ke toko tertentu berdasarkan kategori */
var catToStore={Makanan:1,Minuman:1,Dapur:1,Snack:1,Kebutuhan:1,Kesehatan:2,Bayi:3,Perawatan:4};

function getStoreProducts(storeId){
  return products.filter(function(p){
    return p.storeId ? p.storeId===storeId : catToStore[p.cat]===storeId;
  });
}

function renderStoreList(){
  var q=(document.getElementById('storelist-search-input')?document.getElementById('storelist-search-input').value:'').trim().toLowerCase();
  var list=stores.filter(function(s){return !q||s.name.toLowerCase().includes(q)});
  var badge=document.getElementById('storelist-count-badge');
  if(badge)badge.textContent=list.length+' TOKO';
  var g=document.getElementById('storelist-grid');
  if(!g)return;
  if(list.length===0){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:32px;color:#9CA3AF"><i class="ti ti-building-store" style="font-size:48px;display:block;margin-bottom:12px"></i><div style="font-size:15px;font-weight:700">Toko tidak ditemukan</div></div>';return}
  g.innerHTML='';
  list.forEach(function(s){
    var div=document.createElement('div');
    div.className='storelist-card';
    div.onclick=function(){goToStoreDetail(s.id)};
    div.innerHTML='<div class="storelist-banner"><div class="storelist-logo">'+s.initial+'</div></div><div class="storelist-body"><div class="storelist-name">'+s.name+(s.verified?' <i class="ti ti-rosette-discount-check" style="color:#1D4ED8;font-size:13px"></i>':'')+'</div><div class="storelist-loc"><i class="ti ti-map-pin" style="font-size:10px"></i> '+s.loc+'</div><div class="storelist-stats"><span><b>'+s.rating+'</b> ★</span><span><b>'+s.products+'</b> produk</span><span><b>'+s.followers+'</b> pengikut</span></div></div>';
    g.appendChild(div);
  });
}

function renderHomeStorePreview(){
  var el=document.getElementById('home-store-preview');
  if(!el)return;
  el.innerHTML='';
  stores.slice(0,6).forEach(function(s){
    var div=document.createElement('div');
    div.style.cssText='background:white;border:1px solid var(--gray-200);border-radius:10px;padding:14px 8px;text-align:center;cursor:pointer;transition:all .2s';
    div.onmouseover=function(){div.style.boxShadow='0 6px 16px rgba(123,0,0,0.14)';div.style.transform='translateY(-2px)'};
    div.onmouseout=function(){div.style.boxShadow='none';div.style.transform='none'};
    div.onclick=function(){goToStoreDetail(s.id)};
    div.innerHTML='<div style="width:44px;height:44px;border-radius:50%;background:var(--yellow);color:var(--maroon-dark);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;margin:0 auto 8px">'+s.initial+'</div><div style="font-size:11px;font-weight:700;color:var(--gray-900);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+s.name+'</div><div style="font-size:10px;color:var(--gray-400);margin-top:2px">★ '+s.rating+' · '+s.products+' produk</div>';
    el.appendChild(div);
  });
}

function openStore(id){
  currentStoreId=id;
  var s=stores.find(function(x){return x.id===id});
  if(!s)return;
  document.getElementById('store-header-title').textContent=s.name;
  var following=!!followedStores[id];
  var badgesHtml='<div class="store-badges-row">';
  if(s.official)badgesHtml+='<span class="store-badge-chip sb-official"><i class="ti ti-shield-check" style="font-size:11px"></i> Toko Resmi</span>';
  if(s.fastShip)badgesHtml+='<span class="store-badge-chip sb-fast"><i class="ti ti-bolt" style="font-size:11px"></i> Pengiriman Cepat</span>';
  badgesHtml+='<span class="store-badge-chip sb-star"><i class="ti ti-star-filled" style="font-size:11px"></i> Rating '+s.rating+'</span></div>';

  document.getElementById('store-header-card').innerHTML=
    '<div class="store-header-row">'+
      '<div class="store-logo">'+s.initial+'</div>'+
      '<div class="store-info">'+
        '<div class="store-name-row"><span class="store-name">'+s.name+'</span>'+(s.verified?'<i class="ti ti-rosette-discount-check store-verified"></i>':'')+'</div>'+
        '<div class="store-status-badge"><span class="store-status-dot"></span> Online</div>'+
        '<div class="store-loc"><i class="ti ti-map-pin" style="font-size:11px"></i> '+s.loc+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="store-actions">'+
      '<button class="store-btn-follow'+(following?' following':'')+'" id="store-follow-btn" onclick="toggleFollowStore('+id+')"><i class="ti '+(following?'ti-check':'ti-plus')+'"></i> '+(following?'Mengikuti':'Ikuti')+'</button>'+
      '<button class="store-btn-chat" onclick="showToast(\'💬 Membuka chat dengan '+s.name+'...\')"><i class="ti ti-message-circle-2"></i> Chat</button>'+
    '</div>'+
    '<div class="store-stat-row">'+
      '<div class="store-stat-item"><div class="store-stat-val">'+s.products+'</div><div class="store-stat-lbl">Produk</div></div>'+
      '<div class="store-stat-item"><div class="store-stat-val">'+s.followers+'</div><div class="store-stat-lbl">Pengikut</div></div>'+
      '<div class="store-stat-item"><div class="store-stat-val"><i class="ti ti-star-filled" style="font-size:11px;color:#F59E0B"></i>'+s.rating+'</div><div class="store-stat-lbl">Rating</div></div>'+
      '<div class="store-stat-item"><div class="store-stat-val">'+s.responseRate+'</div><div class="store-stat-lbl">Respon</div></div>'+
    '</div>'+
    badgesHtml;

  document.getElementById('store-about-content').innerHTML=
    '<div class="store-about-row"><div class="store-about-icon"><i class="ti ti-calendar"></i></div><div><div class="store-about-label">Bergabung Sejak</div><div class="store-about-val">'+s.joined+'</div></div></div>'+
    '<div class="store-about-row"><div class="store-about-icon"><i class="ti ti-map-pin"></i></div><div><div class="store-about-label">Lokasi Toko</div><div class="store-about-val">'+s.loc+'</div></div></div>'+
    '<div class="store-about-row"><div class="store-about-icon"><i class="ti ti-clock"></i></div><div><div class="store-about-label">Waktu Respon</div><div class="store-about-val">'+s.responseTime+'</div></div></div>'+
    '<div class="store-about-row"><div class="store-about-icon"><i class="ti ti-message-check"></i></div><div><div class="store-about-label">Tingkat Respon Chat</div><div class="store-about-val">'+s.responseRate+'</div></div></div>'+
    '<div class="store-about-row"><div class="store-about-icon"><i class="ti ti-package"></i></div><div><div class="store-about-label">Kategori Produk</div><div class="store-about-val">'+s.cats.join(', ')+'</div></div></div>';

  document.getElementById('store-rating-num').textContent=s.rating;
  document.getElementById('store-rating-count').textContent='dari '+s.reviews.toLocaleString('id-ID')+' penilaian';

  var revList=document.getElementById('store-review-list');
  revList.innerHTML='';
  storeReviews.forEach(function(r){
    var div=document.createElement('div');
    div.className='review-item';
    div.innerHTML='<div class="review-user-row"><div class="review-avatar">'+r.name.charAt(0)+'</div><div><div class="review-user-name">'+r.name+'</div><div class="review-stars">'+'★'.repeat(r.rating)+'☆'.repeat(5-r.rating)+'</div></div><span class="review-date">'+r.date+'</span></div><div class="review-text">'+r.text+'</div>';
    revList.appendChild(div);
  });

  switchStoreTab('produk',document.querySelector('.store-tab'));
  renderStoreProducts();
  showPage('store');
}

function toggleFollowStore(id){
  if(followedStores[id]){delete followedStores[id];showToast('Berhenti mengikuti toko')}
  else{followedStores[id]=true;showToast('✅ Berhasil mengikuti toko!')}
  var btn=document.getElementById('store-follow-btn');
  if(btn){
    var f=!!followedStores[id];
    btn.classList.toggle('following',f);
    btn.innerHTML='<i class="ti '+(f?'ti-check':'ti-plus')+'"></i> '+(f?'Mengikuti':'Ikuti');
  }
}

function switchStoreTab(id,el){
  document.querySelectorAll('.store-tab').forEach(function(t){t.classList.remove('active')});
  if(el)el.classList.add('active');
  ['produk','tentang','ulasan'].forEach(function(t){
    var s=document.getElementById('store-tab-'+t);
    if(s)s.style.display=t===id?'block':'none';
  });
}

function renderStoreProducts(){
  if(!currentStoreId)return;
  var q=(document.getElementById('store-prod-search')?document.getElementById('store-prod-search').value:'').trim().toLowerCase();
  var list=getStoreProducts(currentStoreId);
  if(q)list=list.filter(function(p){return p.name.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)});
  var g=document.getElementById('store-prod-grid');
  if(!g)return;
  if(list.length===0){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:32px;color:#9CA3AF"><i class="ti ti-package-off" style="font-size:48px;display:block;margin-bottom:12px"></i><div style="font-size:15px;font-weight:700">Belum ada produk</div></div>';return}
  g.innerHTML='';
  list.forEach(function(p){
    var disc=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
    var card=document.createElement('div');card.className='prod-card';card.onclick=function(){openProductDetail(p.id)};
    var inWl=!!wishlist[p.id];
    card.innerHTML='<div class="prod-img">'+(p.disc?'<div class="prod-badge">'+p.disc+'</div>':'')+'<div class="prod-wishlist'+(inWl?' active':'')+'" style="'+(inWl?'color:#B91C1C;border-color:#B91C1C':'')+'" onclick="event.stopPropagation();toggleWishlist('+p.id+')"><i class="ti '+(inWl?'ti-heart-filled':'ti-heart')+'"></i></div>'+photoImg(p.photo,p.emoji,90,false,p.photoUrl)+'</div><div class="prod-info"><div class="prod-brand">'+p.brand+'</div><div class="prod-name">'+p.name+'</div><div class="price-row"><div class="prod-price">'+fmtRp(p.price)+'</div>'+(p.oldPrice?'<div class="prod-old">'+fmtRp(p.oldPrice)+'</div>':'')+(disc>0?'<div class="prod-disc">-'+disc+'%</div>':'')+'</div><div class="prod-foot"><div class="prod-rating"><i class="ti ti-star-filled"></i>'+(p.rating||'4.8')+'</div><button class="add-to-cart" onclick="event.stopPropagation();addToCart('+p.id+')"><i class="ti ti-shopping-cart-plus"></i> + Keranjang</button></div></div>';
    g.appendChild(card);
  });
}
var vouchers=[
  {code:'HEMAT50',icon:'🔥',type:'Diskon',title:'Diskon 50% Semua Produk',desc:'Min. belanja Rp100.000 · Maks. diskon Rp75.000',exp:'30 Jun 2026',color:'#7B0000'},
  {code:'GRATISFT',icon:'🚚',type:'Ongkir',title:'Gratis Ongkos Kirim',desc:'Min. belanja Rp50.000 · Berlaku seluruh Indonesia',exp:'31 Des 2026',color:'#065F46'},
  {code:'WEEKEND25',icon:'📅',type:'Diskon',title:'Diskon Weekend 25%',desc:'Min. belanja Rp75.000 · Maks. diskon Rp50.000',exp:'29 Jun 2026',color:'#1D4ED8'},
];

var flashItems=[
  {id:1,emoji:'🍜',photo:'instant-noodles',photoUrl:'indomie.png',name:'Indomie Goreng',price:2450,oldPrice:3500,disc:30},
  {id:6,emoji:'🫙',photo:'cooking-oil-bottle',photoUrl:'bimoli.jpg',name:'Minyak Bimoli 2L',price:24500,oldPrice:35000,disc:30},
  {id:3,emoji:'🧼',photo:'soap-bar',photoUrl:'lifebuoy.png',name:'Sabun Lifebuoy',price:8750,oldPrice:12500,disc:30},
];

function loadCart(){try{return JSON.parse(localStorage.getItem('gomart_cart'))||{}}catch(e){return {}}}
function saveCart(){try{localStorage.setItem('gomart_cart',JSON.stringify(cart))}catch(e){}}
var cart=loadCart();

/* ===== NAVIGASI ANTAR HALAMAN TERPISAH ===== */
function goToCart(){window.location.href='keranjang.html'}
function goToTracking(){window.location.href='lacak-pesanan.html'}
function goToStoreList(){window.location.href='toko.html'}
function goToStoreDetail(id){window.location.href='toko-detail.html?id='+id}
var categoryEmojis={Makanan:'🥘',Minuman:'🥤',Kebutuhan:'🏠',Perawatan:'🧴',Snack:'🍿',Dapur:'🫙',Bayi:'👶',Kesehatan:'💊'};
var selectedPayMethod='ovo';var payStep=1;
var wishlist={};

var gomaretCardBalance=485000;
var cardFrozen=false;
var gomaretCardTx=[
  {title:'Cashback Transaksi #ORD-2847',date:'25 Jun 2026, 14.32',amount:14550,type:'in',icon:'💰',bg:'#D1FAE5',color:'#065F46'},
  {title:'Top Up via Transfer BCA',date:'22 Jun 2026, 09.10',amount:200000,type:'in',icon:'🏦',bg:'#DBEAFE',color:'#1D4ED8'},
  {title:'Pembayaran Pesanan #ORD-2846',date:'20 Jun 2026, 11.05',amount:187000,type:'out',icon:'🛒',bg:'#FEE2E2',color:'#B91C1C'},
  {title:'Cashback Transaksi #ORD-2845',date:'15 Jun 2026, 10.40',amount:21200,type:'in',icon:'💰',bg:'#D1FAE5',color:'#065F46'},
  {title:'Pembayaran Pesanan #ORD-2845',date:'15 Jun 2026, 10.30',amount:212000,type:'out',icon:'🛒',bg:'#FEE2E2',color:'#B91C1C'},
];

var trackingData={
  'ORD-2846':{
    no:'#ORD-2846',courier:'JNE REG',resi:'JNE282736455ID',status:'dikirim',
    items:'Susu SGM 1+ · Pampers Active Baby M 30pcs',emojis:['🥛','👶'],
    total:'Rp187.000',date:'20 Jun 2026',
    address:'Jl. Raya Darmo No. 45, RT 03/RW 07, Wonokromo, Kota Surabaya, Jawa Timur 60243',
    recipient:'La Ode Umar · 0812-3456-7890',
    eta:'Hari ini, jam 17.00',
    courierName:'Pak Agus Setiawan',courierPhone:'0815-7788-9900',courierPhoto:'AS',
    history:[
      {time:'25 Jun 2026, 11.45',title:'Paket Dalam Pengiriman',desc:'Kurir sedang menuju lokasi pengiriman kamu',loc:'Wonokromo, Surabaya',done:true,active:true},
      {time:'25 Jun 2026, 08.12',title:'Paket Keluar dari Gudang Sortir',desc:'Paket diberangkatkan dari hub JNE Surabaya Selatan',loc:'Hub JNE Surabaya Selatan',done:true,active:false},
      {time:'24 Jun 2026, 22.30',title:'Paket Tiba di Gudang Sortir',desc:'Paket telah tiba dan sedang disortir',loc:'Hub JNE Surabaya Selatan',done:true,active:false},
      {time:'24 Jun 2026, 18.05',title:'Paket Diserahkan ke Kurir JNE',desc:'GoMART menyerahkan paket ke JNE untuk dikirimkan',loc:'Gudang GoMART Surabaya',done:true,active:false},
      {time:'24 Jun 2026, 14.20',title:'Pesanan Dikemas',desc:'Produk selesai dikemas dan siap diserahkan ke kurir',loc:'Gudang GoMART Surabaya',done:true,active:false},
      {time:'24 Jun 2026, 13.00',title:'Pembayaran Dikonfirmasi',desc:'Pembayaran via OVO berhasil dikonfirmasi',loc:'',done:true,active:false},
      {time:'Menunggu',title:'Paket Diterima',desc:'Konfirmasi penerimaan oleh penerima',loc:'',done:false,active:false},
    ]
  },
  'ORD-2845':{
    no:'#ORD-2845',courier:'SICEPAT REG',resi:'SCP08172736411',status:'diproses',
    items:'Minyak Goreng Bimoli 2L · Beras Premium Ramos 5kg',emojis:['🫙','🌾'],
    total:'Rp212.000',date:'15 Jun 2026',
    address:'Jl. Raya Darmo No. 45, RT 03/RW 07, Wonokromo, Kota Surabaya, Jawa Timur 60243',
    recipient:'La Ode Umar· 0812-3456-7890',
    eta:'Estimasi besok, 26 Jun 2026',
    courierName:'-',courierPhone:'-',courierPhoto:'SC',
    history:[
      {time:'25 Jun 2026, 10.30',title:'Pesanan Dikemas',desc:'Produk sedang dikemas oleh tim gudang GoMART',loc:'Gudang GoMART Surabaya',done:true,active:true},
      {time:'25 Jun 2026, 09.00',title:'Pembayaran Dikonfirmasi',desc:'Pembayaran via Transfer BCA berhasil',loc:'',done:true,active:false},
      {time:'Menunggu',title:'Diserahkan ke Kurir',desc:'Paket akan diberangkatkan ke SiCepat',loc:'',done:false,active:false},
      {time:'Menunggu',title:'Dalam Perjalanan',desc:'Paket sedang dikirimkan ke alamatmu',loc:'',done:false,active:false},
      {time:'Menunggu',title:'Paket Diterima',desc:'Konfirmasi penerimaan oleh penerima',loc:'',done:false,active:false},
    ]
  },
  'ORD-2847':{
    no:'#ORD-2847',courier:'JNE REG',resi:'JNE282736111ID',status:'selesai',
    items:'Indomie Goreng Spesial x3 · Aqua 1500ml x2',emojis:['🍜','💧'],
    total:'Rp145.500',date:'25 Jun 2026',
    address:'Jl. Raya Darmo No. 45, RT 03/RW 07, Wonokromo, Kota Surabaya, Jawa Timur 60243',
    recipient:'La Ode Umar · 0812-3456-7890',
    eta:'Terkirim 25 Jun 2026, 14.32',
    courierName:'Pak Dedi Kusuma',courierPhone:'0817-6655-4433',courierPhoto:'DK',
    history:[
      {time:'25 Jun 2026, 14.32',title:'Paket Diterima',desc:'Diterima oleh La Ode Umar. Terima kasih sudah berbelanja!',loc:'Wonokromo, Surabaya',done:true,active:false},
      {time:'25 Jun 2026, 10.15',title:'Paket Dalam Pengiriman',desc:'Kurir sedang menuju lokasi pengiriman',loc:'Wonokromo, Surabaya',done:true,active:false},
      {time:'25 Jun 2026, 07.50',title:'Paket Keluar dari Gudang Sortir',desc:'Paket diberangkatkan dari hub JNE',loc:'Hub JNE Surabaya Selatan',done:true,active:false},
      {time:'24 Jun 2026, 21.00',title:'Tiba di Gudang Sortir',desc:'Paket telah tiba dan disortir',loc:'Hub JNE Surabaya Selatan',done:true,active:false},
      {time:'24 Jun 2026, 16.30',title:'Diserahkan ke JNE',desc:'GoMART menyerahkan paket ke kurir JNE',loc:'Gudang GoMART Surabaya',done:true,active:false},
      {time:'24 Jun 2026, 13.45',title:'Pembayaran Dikonfirmasi',desc:'Pembayaran via GoPay berhasil dikonfirmasi',loc:'',done:true,active:false},
    ]
  }
};

function fmtRp(n){return 'Rp'+parseInt(n).toLocaleString('id-ID')}

function emojiImg(emoji,size){
  size=size||40;
  return '<div style="width:'+size+'px;height:'+size+'px;display:flex;align-items:center;justify-content:center;font-size:'+Math.round(size*0.72)+'px;line-height:1">'+emoji+'</div>';
}
/* photoImg: menampilkan gambar produk asli (photoUrl) jika tersedia.
   Jika URL kosong ATAU gambar gagal dimuat (404, path salah, dll),
   otomatis fallback ke emoji besar (lihat imgFallback) sehingga
   ikon "gambar rusak" tidak akan pernah terlihat oleh pengguna. */
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
/* Dipanggil otomatis lewat onerror pada <img> di atas.
   Mengganti isi wrapper dengan emoji besar sehingga tampilan tetap rapi
   walau file gambar belum ada / linknya salah / gagal dimuat. */
function imgFallback(imgEl,emoji,size){
  var wrap=imgEl.parentElement;
  if(wrap)wrap.outerHTML=emojiImg(emoji,size);
}

function renderProducts(list){
  var g=document.getElementById('prod-grid');
  if(!list||list.length===0){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:32px;color:#9CA3AF"><i class="ti ti-search-off" style="font-size:48px;display:block;margin-bottom:12px"></i><div style="font-size:15px;font-weight:700">Produk tidak ditemukan</div></div>';return}
  g.innerHTML='';
  list.forEach(function(p){
    var disc=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
    var card=document.createElement('div');card.className='prod-card';card.onclick=function(){openProductDetail(p.id)};
    var inWl=!!wishlist[p.id];
    card.innerHTML='<div class="img">'+(p.disc?'<div class="prod-badge">'+p.disc+'</div>':'')+'<div class="prod-wishlist'+(inWl?' active':'')+'" id="wl-btn-'+p.id+'" style="'+(inWl?'color:#B91C1C;border-color:#B91C1C':'')+'" onclick="event.stopPropagation();toggleWishlist('+p.id+')"><i class="ti '+(inWl?'ti-heart-filled':'ti-heart')+'"></i></div>'+photoImg(p.photo,p.emoji,90,false,p.photoUrl)+'</div><div class="prod-info"><div class="prod-brand">'+p.brand+'</div><div class="prod-name">'+p.name+'</div><div class="price-row"><div class="prod-price">'+fmtRp(p.price)+'</div>'+(p.oldPrice?'<div class="prod-old">'+fmtRp(p.oldPrice)+'</div>':'')+(disc>0?'<div class="prod-disc">-'+disc+'%</div>':'')+'</div><div class="prod-foot"><div class="prod-rating"><i class="ti ti-star-filled"></i>'+(p.rating||'4.8')+'</div><button class="add-to-cart" onclick="event.stopPropagation();addToCart('+p.id+')"><i class="ti ti-shopping-cart-plus"></i> + Keranjang</button></div></div>';
    g.appendChild(card);
  });
}

function filterCat(cat){
  var filtered=products.filter(function(p){return p.cat===cat});
  renderProducts(filtered);
  document.getElementById('sec-products-title').innerHTML='<i class="ti ti-filter"></i> Kategori: '+cat;
  document.getElementById('search-info').style.display='flex';
  document.getElementById('search-info-text').textContent=filtered.length+' produk dalam kategori "'+cat+'"';
  scrollToSection('sec-products');
}
function doSearch(){
  var q=document.getElementById('search-input').value.trim().toLowerCase();
  if(!q){resetFilter();return}
  var found=products.filter(function(p){return p.name.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)});
  renderProducts(found);
  document.getElementById('sec-products-title').innerHTML='<i class="ti ti-search"></i> Hasil: "'+document.getElementById('search-input').value+'"';
  document.getElementById('search-info').style.display='flex';
  document.getElementById('search-info-text').textContent=found.length+' produk ditemukan';
  scrollToSection('sec-products');
}


/* ===== USER AUTH ===== */
var isUserLoggedIn=false;
var currentUser={name:'La Ode Umar',email:'umar@gmail.com',phone:'0812-3456-7890'};

(function loadUserSession(){
  try{
    var raw=sessionStorage.getItem('gomart_user');
    if(raw){
      currentUser=JSON.parse(raw);
      isUserLoggedIn=true;
    }
  }catch(e){}
})();

function goToAccount(){
  if(!document.getElementById('pg-home')){window.location.href='index.html?goto=account';return}
  if(isUserLoggedIn){
    showPage('profil');
  }else{
    window.location.href='user-login.html';
  }
}
function applyCurrentUserToProfile(){
  var nameEl=document.getElementById('profil-name');
  var emailEl=document.getElementById('profil-email');
  var phoneEl=document.getElementById('profil-phone');
  var avatarEl=document.getElementById('profil-avatar');
  if(nameEl)nameEl.textContent=currentUser.name;
  if(emailEl)emailEl.textContent=currentUser.email;
  if(phoneEl)phoneEl.innerHTML='<i class="ti ti-phone" style="font-size:12px"></i> '+currentUser.phone;
  if(avatarEl)avatarEl.textContent=currentUser.name.charAt(0).toUpperCase();
}
function doUserLogout(){
  if(!confirm('Yakin ingin keluar dari akun?'))return;
  isUserLoggedIn=false;
  sessionStorage.removeItem('gomart_user');
  showToast('👋 Berhasil keluar dari akun');
  showPage('home');
}

function resetFilter(){
  renderProducts(products);
  document.getElementById('sec-products-title').innerHTML='<i class="ti ti-flame"></i> Produk Populer';
  document.getElementById('search-info').style.display='none';
  document.getElementById('search-input').value='';
}

/* ===== SEMUA KATEGORI ===== */
var categoryList=[
  {key:'Makanan',label:'Makanan & Minuman',icon:'ti-bread',cls:'red'},
  {key:'Kebutuhan',label:'Kebutuhan Rumah',icon:'ti-home-2',cls:'blue'},
  {key:'Perawatan',label:'Perawatan Diri',icon:'ti-heart-rate-monitor',cls:'green'},
  {key:'Bayi',label:'Bayi & Anak',icon:'ti-baby-carriage',cls:'purple'},
  {key:'Kesehatan',label:'Kesehatan',icon:'ti-pill',cls:'pink'},
  {key:'Dapur',label:'Bumbu & Dapur',icon:'ti-tools-kitchen-2',cls:'orange'},
  {key:'Snack',label:'Snack & Camilan',icon:'ti-cookie',cls:'teal'},
  {key:'Minuman',label:'Minuman Segar',icon:'ti-bottle',cls:'yellow'},
];
function renderAllCategories(){
  var q=(document.getElementById('allcat-search-input')?document.getElementById('allcat-search-input').value:'').trim().toLowerCase();
  var list=categoryList.filter(function(c){return !q||c.label.toLowerCase().includes(q)||c.key.toLowerCase().includes(q)});
  var badge=document.getElementById('allcat-count-badge');
  if(badge)badge.textContent=list.length+' KATEGORI';
  var g=document.getElementById('allcat-grid');
  if(!g)return;
  if(list.length===0){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:32px;color:#9CA3AF"><i class="ti ti-search-off" style="font-size:48px;display:block;margin-bottom:12px"></i><div style="font-size:15px;font-weight:700">Kategori tidak ditemukan</div></div>';return}
  g.innerHTML='';
  list.forEach(function(c){
    var count=products.filter(function(p){return p.cat===c.key}).length;
    var div=document.createElement('div');
    div.className='allcat-card';
    div.onclick=function(){filterCat(c.key);showPage('home');};
    div.innerHTML='<div class="allcat-icon '+c.cls+'"><i class="ti '+c.icon+'"></i></div><div class="allcat-name">'+c.label+'</div><div class="allcat-count">'+count+' produk</div>';
    g.appendChild(div);
  });
}

/* ===== SEMUA PRODUK ===== */
var allprodActiveCat='Semua';
function renderAllProductChips(){
  var scroll=document.getElementById('allprod-chip-scroll');
  if(!scroll)return;
  var cats=['Semua'].concat(categoryList.map(function(c){return c.key}));
  scroll.innerHTML='';
  cats.forEach(function(cat){
    var chip=document.createElement('div');
    chip.className='allprod-chip'+(allprodActiveCat===cat?' active':'');
    chip.textContent=cat==='Semua'?'Semua':(categoryList.find(function(c){return c.key===cat})||{label:cat}).label;
    chip.onclick=function(){allprodActiveCat=cat;renderAllProducts()};
    scroll.appendChild(chip);
  });
}
function renderAllProducts(){
  renderAllProductChips();
  var q=(document.getElementById('allprod-search-input')?document.getElementById('allprod-search-input').value:'').trim().toLowerCase();
  var sortVal=document.getElementById('allprod-sort-select')?document.getElementById('allprod-sort-select').value:'default';
  var list=products.slice();
  if(allprodActiveCat!=='Semua')list=list.filter(function(p){return p.cat===allprodActiveCat});
  if(q)list=list.filter(function(p){return p.name.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)});
  if(sortVal==='price-asc')list.sort(function(a,b){return a.price-b.price});
  else if(sortVal==='price-desc')list.sort(function(a,b){return b.price-a.price});
  else if(sortVal==='rating')list.sort(function(a,b){return (b.rating||0)-(a.rating||0)});
  else if(sortVal==='name')list.sort(function(a,b){return a.name.localeCompare(b.name)});

  var badge=document.getElementById('allprod-count-badge');
  if(badge)badge.textContent=list.length+' PRODUK';
  var countBar=document.getElementById('allprod-count-bar');
  if(countBar)countBar.textContent='Menampilkan '+list.length+' dari '+products.length+' produk'+(allprodActiveCat!=='Semua'?' · Kategori: '+allprodActiveCat:'')+(q?' · Pencarian: "'+q+'"':'');

  var g=document.getElementById('allprod-grid');
  if(!g)return;
  if(list.length===0){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:32px;color:#9CA3AF"><i class="ti ti-search-off" style="font-size:48px;display:block;margin-bottom:12px"></i><div style="font-size:15px;font-weight:700">Produk tidak ditemukan</div></div>';return}
  g.innerHTML='';
  list.forEach(function(p){
    var disc=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
    var card=document.createElement('div');card.className='prod-card';card.onclick=function(){openProductDetail(p.id)};
    var inWl=!!wishlist[p.id];
    card.innerHTML='<div class="prod-img">'+(p.disc?'<div class="prod-badge">'+p.disc+'</div>':'')+'<div class="prod-wishlist'+(inWl?' active':'')+'" id="awl-btn-'+p.id+'" style="'+(inWl?'color:#B91C1C;border-color:#B91C1C':'')+'" onclick="event.stopPropagation();toggleWishlistAllProd('+p.id+')"><i class="ti '+(inWl?'ti-heart-filled':'ti-heart')+'"></i></div>'+photoImg(p.photo,p.emoji,90,false,p.photoUrl)+'</div><div class="prod-info"><div class="prod-brand">'+p.brand+'</div><div class="prod-name">'+p.name+'</div><div class="price-row"><div class="prod-price">'+fmtRp(p.price)+'</div>'+(p.oldPrice?'<div class="prod-old">'+fmtRp(p.oldPrice)+'</div>':'')+(disc>0?'<div class="prod-disc">-'+disc+'%</div>':'')+'</div><div class="prod-foot"><div class="prod-rating"><i class="ti ti-star-filled"></i>'+(p.rating||'4.8')+'</div><button class="add-to-cart" onclick="event.stopPropagation();addToCart('+p.id+')"><i class="ti ti-shopping-cart-plus"></i> + Keranjang</button></div></div>';
    g.appendChild(card);
  });
}
function toggleWishlistAllProd(id){
  toggleWishlist(id);
  var btn=document.getElementById('awl-btn-'+id);
  if(btn){
    var active=!!wishlist[id];
    btn.classList.toggle('active',active);
    btn.style.color=active?'#B91C1C':'';
    btn.style.borderColor=active?'#B91C1C':'';
    btn.innerHTML='<i class="ti '+(active?'ti-heart-filled':'ti-heart')+'"></i>';
  }
}

function addToCart(id){
  var p=products.find(function(x){return x.id===id});
  if(!p)return;
  if(!cart[id])cart[id]=Object.assign({},p,{qty:0});
  cart[id].qty++;
  saveCart();
  updateBadges();
  showToast(p.emoji+' Ditambahkan ke keranjang!');
}
function toggleWishlist(id){
  var p=products.find(function(x){return x.id===id});
  if(!p)return;
  if(wishlist[id]){
    delete wishlist[id];
    showToast('💔 Dihapus dari wishlist');
  }else{
    wishlist[id]=p;
    showToast('💖 Ditambahkan ke wishlist!');
  }
  /* refresh hati di kartu yang sedang tampil tanpa render ulang seluruh grid */
  var btn=document.getElementById('wl-btn-'+id);
  if(btn){
    var active=!!wishlist[id];
    btn.classList.toggle('active',active);
    btn.style.color=active?'#B91C1C':'';
    btn.style.borderColor=active?'#B91C1C':'';
    btn.innerHTML='<i class="ti '+(active?'ti-heart-filled':'ti-heart')+'"></i>';
  }
  updateWishlistMenu();
  if(document.getElementById('pg-subpage').classList.contains('active')&&subPageStack[subPageStack.length-1]==='wishlist'){
    _renderSubPage('wishlist');
  }
}
function removeFromWishlist(id){
  delete wishlist[id];
  updateWishlistMenu();
  _renderSubPage('wishlist');
  showToast('💔 Dihapus dari wishlist');
}
function updateWishlistMenu(){
  var count=Object.keys(wishlist).length;
  var el=document.getElementById('wishlist-menu-sub');
  if(el)el.textContent=count>0?(count+' produk favorit'):'Belum ada produk favorit';
}
function changeQty(id,delta){
  if(!cart[id])return;
  cart[id].qty+=delta;
  if(cart[id].qty<=0)delete cart[id];
  saveCart();
  updateBadges();renderCart();
}
function updateBadges(){
  var total=Object.values(cart).reduce(function(s,i){return s+i.qty},0);
  ['cart-dot','cart-dot2','cart-dot3','cart-dot4','cart-dot5','cart-dot6','cart-dot7','cart-dot8','cart-dot9','cart-dot10','cart-dot-hdr','cart-dot-pd'].forEach(function(id){
    var el=document.getElementById(id);
    if(!el)return;
    if(total>0){el.style.display='flex';el.textContent=total}
    else el.style.display='none';
  });
}
function renderCart(){
  var cc=document.getElementById('cart-content');
  var items=Object.values(cart).filter(function(i){return i.qty>0});
  if(items.length===0){cc.innerHTML='<div class="empty-state"><i class="ti ti-shopping-cart-off"></i><h3>Keranjang Masih Kosong</h3><p>Tambahkan produk favorit kamu!</p><button onclick="window.location.href=\'index.html\'" style="background:var(--maroon);color:white;border:none;padding:12px 28px;border-radius:9px;font-weight:800;cursor:pointer;font-size:14px;margin-top:4px"><i class="ti ti-arrow-left"></i> Mulai Belanja</button></div>';return}
  var sub=items.reduce(function(s,i){return s+i.price*i.qty},0);
  var ongkir=sub>=50000?0:15000;var total=sub+ongkir;
  var html='<div class="cart-body">';
  items.forEach(function(item){html+='<div class="cart-item-card"><div class="cart-emoji">'+photoImg(item.photo,item.emoji,60,false,item.photoUrl)+'</div><div class="cart-info"><div class="cart-info-name">'+item.name+'</div><div class="cart-info-brand">'+item.brand+'</div><div class="cart-info-price">'+fmtRp(item.price)+'</div><div class="qty-row"><button class="qty-btn" onclick="changeQty('+item.id+',-1)"><i class="ti ti-minus" style="font-size:13px"></i></button><span class="qty-num">'+item.qty+'</span><button class="qty-btn" onclick="changeQty('+item.id+',1)"><i class="ti ti-plus" style="font-size:13px"></i></button><span class="line-total">'+fmtRp(item.price*item.qty)+'</span></div></div><button class="remove-btn" onclick="changeQty('+item.id+',-'+item.qty+')"><i class="ti ti-trash"></i></button></div>'});
  html+='</div><div class="cart-summary-box">'+(ongkir===0?'<div class="ongkir-note"><i class="ti ti-circle-check" style="color:#065F46"></i> Gratis ongkir! 🎉</div>':'<div class="ongkir-note"><i class="ti ti-info-circle"></i> Tambah '+fmtRp(50000-sub)+' lagi untuk gratis ongkir!</div>')+'<div class="sum-row"><span>Subtotal</span><span>'+fmtRp(sub)+'</span></div><div class="sum-row"><span>Ongkos Kirim</span><span style="color:'+(ongkir===0?'#065F46':'inherit')+'">'+(ongkir===0?'GRATIS':fmtRp(ongkir))+'</span></div><div class="sum-row total"><span>Total</span><span>'+fmtRp(total)+'</span></div><button class="checkout-btn" onclick="goToCheckout()"><i class="ti ti-credit-card"></i> Lanjut Bayar — '+fmtRp(total)+'</button></div>';
  cc.innerHTML=html;
}

function goToCheckout(){
  /* Keranjang kini halaman terpisah; lanjut ke pembayaran di index.html */
  window.location.href='index.html?goto=pembayaran';
}
function goBackFromPay(){
  if(payStep===2){payStep=1;renderPayPage(window._checkoutTotal);}
  else goToCart();
}

var payMethods=[
  {id:'ovo',icon:'💜',label:'OVO',sub:'Saldo: Rp245.000',tag:'Populer',tagClass:'tag-purple'},
  {id:'gopay',icon:'🟢',label:'GoPay',sub:'Saldo: Rp78.500',tag:'Cashback 5%',tagClass:'tag-green'},
  {id:'bca',icon:'🏦',label:'Transfer Bank BCA',sub:'Virtual Account',tag:'',tagClass:''},
  {id:'cod',icon:'💵',label:'Bayar di Tempat (COD)',sub:'Maks. Rp500.000',tag:'',tagClass:''},
];

function renderPayPage(total){
  var pb=document.getElementById('pay-body-content');
  var lbl=document.getElementById('pay-step-label');
  if(payStep===1){
    lbl.textContent='Langkah 1/2';
    var cartItems=Object.values(cart).filter(function(i){return i.qty>0});
    var sub=cartItems.reduce(function(s,i){return s+i.price*i.qty},0);
    var ongkir=sub>=50000?0:15000;
    var html='<div class="order-summary-card" style="margin-top:12px"><div class="pay-card-header"><i class="ti ti-shopping-bag"></i> Ringkasan Pesanan</div>';
    cartItems.forEach(function(item){html+='<div class="order-item-row"><div class="order-item-emoji">'+photoImg(item.photo,item.emoji,40,true,item.photoUrl)+'</div><div class="order-item-info"><div class="order-item-name">'+item.name+'</div><div class="order-item-qty">x'+item.qty+'</div></div><div class="order-item-price">'+fmtRp(item.price*item.qty)+'</div></div>';});
    html+='</div>';
    html+='<div class="pay-card" style="margin-top:0"><div class="pay-card-header"><i class="ti ti-receipt"></i> Rincian Biaya</div><div style="padding:12px 16px"><div class="sum-row"><span>Subtotal</span><span>'+fmtRp(sub)+'</span></div><div class="sum-row"><span>Ongkir</span><span style="color:'+(ongkir===0?'#065F46':'inherit')+'">'+(ongkir===0?'GRATIS':fmtRp(ongkir))+'</span></div><div class="sum-row total"><span>Total</span><span>'+fmtRp(total)+'</span></div></div></div>';
    html+='<div style="height:90px"></div><div class="pay-total-bar"><div class="pay-total-row"><span class="pay-total-label">Total Bayar</span><span class="pay-total-amount">'+fmtRp(total)+'</span></div><button class="pay-now-btn" onclick="payStep=2;renderPayPage(window._checkoutTotal)"><i class="ti ti-credit-card"></i> Pilih Metode Pembayaran</button></div>';
    pb.innerHTML=html;
  } else {
    lbl.textContent='Langkah 2/2';
    var html='<div class="pay-card" style="margin-top:12px"><div class="pay-card-header"><i class="ti ti-wallet"></i> Pilih Metode Pembayaran</div>';
    payMethods.forEach(function(m){
      var sel=selectedPayMethod===m.id;
      html+='<div class="pay-method" onclick="selectedPayMethod=\''+m.id+'\';renderPayPage(window._checkoutTotal)"><div class="pay-method-icon" style="background:var(--gray-50)">'+m.icon+'</div><div class="pay-method-info"><div class="pay-method-name">'+m.label+'</div><div class="pay-method-sub">'+m.sub+'</div></div>'+(m.tag?'<span class="pay-method-tag '+m.tagClass+'">'+m.tag+'</span>':'')+'<div class="pay-method-radio'+(sel?' selected':'')+'" ></div></div>';
    });
    html+='</div><div style="height:90px"></div><div class="pay-total-bar"><div class="pay-total-row"><span class="pay-total-label">Total Bayar</span><span class="pay-total-amount">'+fmtRp(total)+'</span></div><button class="pay-now-btn" onclick="openAreYouSurePay()"><i class="ti ti-lock"></i> Bayar Sekarang · '+fmtRp(total)+'</button></div>';
    pb.innerHTML=html;
  }
}

function openAreYouSurePay(){
  var total=window._checkoutTotal||0;
  document.getElementById('ays-total').textContent=fmtRp(total);
  document.getElementById('ays-overlay').classList.add('open');
}
function closeAreYouSurePay(){
  document.getElementById('ays-overlay').classList.remove('open');
}

var lastOrderId=null;
function confirmPayment(){
  closeAreYouSurePay();
  var cartItems=Object.values(cart).filter(function(i){return i.qty>0});
  var itemCount=cartItems.reduce(function(s,i){return s+i.qty},0);
  var total=window._checkoutTotal||0;
  var methodMap={ovo:'OVO',gopay:'GoPay',bca:'Transfer Bank BCA',cod:'Bayar di Tempat (COD)'};
  var methodLabel=methodMap[selectedPayMethod]||'-';
  var orderNum='ORD-'+(2848+Math.floor(Math.random()*50));
  lastOrderId=orderNum;

  document.getElementById('pcb-order-no-text').textContent='#'+orderNum;
  document.getElementById('pcb-method').textContent=methodLabel;
  document.getElementById('pcb-date').textContent=new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'});
  document.getElementById('pcb-item-count').textContent=itemCount+' produk';
  document.getElementById('pcb-total').textContent=fmtRp(total);

  cart={};saveCart();updateBadges();payStep=1;
  document.getElementById('pay-confirm-overlay').classList.add('open');
}
function closePayConfirm(){
  document.getElementById('pay-confirm-overlay').classList.remove('open');
}

/* ===== TRACKING FUNCTIONS ===== */
function doTracking(){
  var val=document.getElementById('tracking-input').value.trim().toUpperCase().replace(/[#\s]/g,'');
  if(!val){showToast('⚠️ Masukkan nomor pesanan atau resi dulu');return}
  var key=val.startsWith('ORD-')?val:null;
  if(!key){
    var found=Object.keys(trackingData).find(function(k){return trackingData[k].resi.toUpperCase()===val});
    key=found||null;
  }
  if(key&&trackingData[key])loadTracking(key);
  else showToast('❌ Nomor pesanan/resi tidak ditemukan');
}

function loadTracking(orderId){
  var data=trackingData[orderId];
  if(!data){showToast('❌ Data tidak ditemukan');return}
  document.getElementById('tracking-order-list').style.display='none';
  var area=document.getElementById('tracking-result-area');

  var statusConfig={
    dikirim:{icon:'<i class="ti ti-truck-delivery" style="font-size:22px"></i>',bg:'#DBEAFE',color:'#1D4ED8',label:'Sedang Dikirim',etaColor:'#065F46'},
    diproses:{icon:'<i class="ti ti-box" style="font-size:22px"></i>',bg:'#FEF3C7',color:'#92400E',label:'Diproses',etaColor:'#92400E'},
    selesai:{icon:'<i class="ti ti-circle-check" style="font-size:22px"></i>',bg:'#D1FAE5',color:'#065F46',label:'Selesai',etaColor:'#065F46'},
  };
  var sc=statusConfig[data.status]||statusConfig.diproses;

  var html='';

  /* Back button area */
  html+='<div style="padding:10px 16px 4px"><button onclick="closeTrackingDetail()" style="background:white;border:1.5px solid var(--gray-200);border-radius:8px;padding:8px 14px;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;color:var(--gray-600)"><i class="ti ti-arrow-left" style="font-size:14px"></i> Kembali ke Daftar Pesanan</button></div>';

  /* ETA Banner */
  if(data.status==='dikirim'){
    html+='<div class="eta-banner"><div class="eta-icon"><i class="ti ti-truck-delivery" style="font-size:32px"></i></div><div class="eta-info"><div class="eta-title">Estimasi Tiba</div><div class="eta-time">'+data.eta+'</div><div class="eta-sub">Kurir sedang dalam perjalanan ke lokasmu</div></div><div class="eta-live"><span class="status-pulse-dot" style="display:inline-block;width:6px;height:6px;border-radius:50%;background:white;animation:pulse-anim 1.5s infinite;margin-right:4px"></span>LIVE</div></div>';
  } else if(data.status==='selesai'){
    html+='<div class="eta-banner" style="background:linear-gradient(135deg,#065F46,#059669)"><div class="eta-icon"><i class="ti ti-circle-check" style="font-size:32px"></i></div><div class="eta-info"><div class="eta-title">Status Pesanan</div><div class="eta-time">Paket Diterima</div><div class="eta-sub">'+data.eta+'</div></div></div>';
  } else {
    html+='<div class="eta-banner" style="background:linear-gradient(135deg,#92400E,#B45309)"><div class="eta-icon"><i class="ti ti-box" style="font-size:32px"></i></div><div class="eta-info"><div class="eta-title">Estimasi Pengiriman</div><div class="eta-time">'+data.eta+'</div><div class="eta-sub">Paket sedang disiapkan di gudang GoMART</div></div></div>';
  }

  /* Order Card */
  html+='<div class="order-card-track"><div class="oct-header"><div class="oct-order-no">'+data.no+'</div><div class="oct-courier-badge"><i class="ti ti-package" style="font-size:12px"></i> '+data.courier+'</div></div>';
  html+='<div class="oct-body">';
  html+='<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">';
  html+='<div style="display:flex;align-items:center;gap:5px;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;color:var(--gray-600)"><i class="ti ti-barcode" style="font-size:13px"></i> '+data.resi+'</div>';
  html+='<button onclick="showToast(\'📋 Nomor resi '+data.resi+' disalin!\')" style="display:flex;align-items:center;gap:4px;background:var(--maroon-pale);color:var(--maroon);border:1px solid #FECACA;border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer"><i class="ti ti-copy" style="font-size:13px"></i> Salin Resi</button>';
  html+='</div>';
  html+='<div class="oct-items-row"><div class="oct-items-emojis">'+data.emojis.map(function(e){return emojiImg(e,22)}).join('')+'</div><div class="oct-items-info"><div class="oct-items-name">'+data.items+'</div><div class="oct-items-count">'+data.date+'</div></div><div class="oct-items-price">'+data.total+'</div></div>';
  html+='<div class="oct-address-row"><i class="ti ti-map-pin"></i><div><div style="font-size:12px;font-weight:700;margin-bottom:2px">'+data.recipient+'</div><div>'+data.address+'</div></div></div>';
  html+='</div></div>';

  /* Courier Info */
  if(data.status!=='selesai'||data.courierName!=='-'){
    html+='<div class="courier-info-card">';
    html+='<div class="cic-label"><i class="ti ti-id-badge" style="font-size:12px"></i> Informasi Kurir</div>';
    html+='<div class="cic-row"><div class="cic-icon" style="background:#DBEAFE;color:#1D4ED8"><i class="ti ti-user"></i></div><div class="cic-info"><div class="cic-lbl">Nama Kurir</div><div class="cic-val">'+data.courierName+'</div></div></div>';
    html+='<div class="cic-row"><div class="cic-icon" style="background:#D1FAE5;color:#065F46"><i class="ti ti-phone"></i></div><div class="cic-info"><div class="cic-lbl">Nomor Telepon</div><div class="cic-val">'+data.courierPhone+'</div></div>'+(data.courierPhone!=='-'?'<button class="cic-action" onclick="showToast(\'📞 Menghubungi kurir...\')"><i class="ti ti-phone" style="font-size:12px"></i> Hubungi</button>':'')+'</div>';
    html+='<div class="cic-row"><div class="cic-icon" style="background:#FEF3C7;color:#92400E"><i class="ti ti-building-store"></i></div><div class="cic-info"><div class="cic-lbl">Ekspedisi</div><div class="cic-val">'+data.courier+'</div></div></div>';
    html+='</div>';
  }

  /* Timeline */
  html+='<div class="tracking-timeline-card">';
  html+='<div class="ttc-header"><i class="ti ti-route"></i> Riwayat Pengiriman</div>';
  html+='<div class="timeline-wrap">';
  data.history.forEach(function(h,i){
    var cls=h.active?'tl-active':h.done?'tl-done':'tl-pending';
    var dotIcon=h.done?'<i class="ti ti-check" style="font-size:12px"></i>':h.active?'<i class="ti ti-circle-dot" style="font-size:12px"></i>':'<i class="ti ti-clock" style="font-size:11px"></i>';
    html+='<div class="tl-item '+cls+'">';
    html+='<div class="tl-dot-wrap">';
    if(i<data.history.length-1)html+='<div class="tl-line"></div>';
    html+='<div class="tl-dot">'+dotIcon+'</div></div>';
    html+='<div class="tl-content"><div class="tl-time">'+h.time+'</div><div class="tl-title">'+h.title+'</div><div class="tl-desc">'+h.desc+'</div>'+(h.loc?'<div class="tl-location-pill"><i class="ti ti-map-pin" style="font-size:11px"></i> '+h.loc+'</div>':'')+'</div>';
    html+='</div>';
  });
  html+='</div></div>';

  /* Action Buttons */
  html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 16px 16px">';
  html+='<button onclick="showToast(\'📞 Menghubungi CS GoMART...\')" style="background:white;border:1.5px solid var(--gray-200);border-radius:10px;padding:12px;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;color:var(--gray-600)"><i class="ti ti-headset" style="font-size:16px;color:var(--maroon)"></i> Hubungi CS</button>';
  html+='<button onclick="showToast(\'⚠️ Laporan masalah dikirim\')" style="background:var(--maroon-pale);border:1.5px solid #FECACA;border-radius:10px;padding:12px;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;color:var(--maroon)"><i class="ti ti-alert-triangle" style="font-size:16px"></i> Laporkan Masalah</button>';
  html+='</div>';

  area.innerHTML=html;
  document.getElementById('tracking-input').value='#'+orderId;

  /* scroll to top */
  var trackBody=document.querySelector('#pg-tracking .tracking-body');
  if(trackBody)trackBody.scrollTop=0;
}

function closeTrackingDetail(){
  document.getElementById('tracking-result-area').innerHTML='';
  document.getElementById('tracking-order-list').style.display='block';
  document.getElementById('tracking-input').value='';
}

function switchTrackingTab(id,el){
  document.querySelectorAll('.tracking-tab').forEach(function(t){t.classList.remove('active')});
  el.classList.add('active');
  closeTrackingDetail();
}

/* ===== PROMO ===== */
function renderVouchers(){
  var el=document.getElementById('voucher-list');if(!el)return;el.innerHTML='';
  vouchers.forEach(function(v){
    var card=document.createElement('div');card.className='voucher-card';
    card.innerHTML='<div class="voucher-left" style="background:'+v.color+'"><div class="v-icon">'+v.icon+'</div><div class="v-type">'+v.type+'</div></div><div class="voucher-divider"></div><div class="voucher-body"><div class="voucher-title">'+v.title+'</div><div class="voucher-desc">'+v.desc+'</div><div class="voucher-footer"><span class="voucher-exp"><i class="ti ti-clock" style="font-size:10px"></i> s/d '+v.exp+'</span><button class="voucher-code-btn" onclick="showToast(\'📋 Kode '+v.code+' disalin!\')">'+v.code+'</button></div></div>';
    el.appendChild(card);
  });
}
function renderFlash(){
  var el=document.getElementById('flash-grid');if(!el)return;el.innerHTML='';
  flashItems.forEach(function(f){
    var card=document.createElement('div');card.className='flash-card';
    card.innerHTML='<div class="flash-img"><div class="flash-badge">-'+f.disc+'%</div>'+photoImg(f.photo,f.emoji,90,false,f.photoUrl)+'</div><div class="flash-info"><div class="flash-name">'+f.name+'</div><div class="flash-price">'+fmtRp(f.price)+'</div><div class="flash-old">'+fmtRp(f.oldPrice)+'</div><button onclick="addToCart('+f.id+')" style="width:100%;background:var(--maroon);color:white;border:none;padding:6px;border-radius:5px;font-size:11px;font-weight:700;margin-top:6px;cursor:pointer">+ Keranjang</button></div>';
    el.appendChild(card);
  });
}
function renderSemuaPromo(){
  var el=document.getElementById('semua-promo-list');if(!el)return;
  var all=[
    {title:'Gratis Ongkir Min. Rp50.000',desc:'Berlaku semua produk',icon:'🚚',tag:'Ongkir',color:'#065F46'},
    {title:'Cashback 10% Gomaret Card',desc:'Maks. cashback Rp50.000',icon:'💳',tag:'Cashback',color:'#92400E'},
  ];
  el.innerHTML='';
  all.forEach(function(p){
    var div=document.createElement('div');
    div.style.cssText='background:white;border-radius:12px;margin-bottom:10px;overflow:hidden;box-shadow:var(--shadow);display:flex;cursor:pointer;';
    div.innerHTML='<div style="background:'+p.color+';color:white;padding:16px 12px;display:flex;align-items:center;justify-content:center;font-size:28px;width:60px;flex-shrink:0">'+p.icon+'</div><div style="padding:14px 16px;flex:1"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px"><div style="font-size:13px;font-weight:800">'+p.title+'</div><span style="background:var(--maroon-pale);color:var(--maroon);font-size:9px;font-weight:800;padding:2px 7px;border-radius:20px;flex-shrink:0;margin-left:8px">'+p.tag+'</span></div><div style="font-size:11px;color:var(--gray-600)">'+p.desc+'</div></div>';
    el.appendChild(div);
  });
}
function switchPromoTab(id,el){
  document.querySelectorAll('.promo-tab').forEach(function(t){t.classList.remove('active')});
  el.classList.add('active');
  ['voucher','flash','cashback','gratis','semua'].forEach(function(t){
    var s=document.getElementById('promo-tab-'+t);
    if(s)s.style.display=t===id?'block':'none';
  });
  if(id==='flash')startCountdown();
}

var countdownTimer=null;
function startCountdown(){
  if(countdownTimer)return;
  var secs=2*3600+34*60+17;
  countdownTimer=setInterval(function(){
    secs--;if(secs<0)secs=0;
    var h=Math.floor(secs/3600);var m=Math.floor((secs%3600)/60);var s=secs%60;
    var hEl=document.getElementById('cnt-h'),mEl=document.getElementById('cnt-m'),sEl=document.getElementById('cnt-s');
    if(hEl)hEl.textContent=String(h).padStart(2,'0');
    if(mEl)mEl.textContent=String(m).padStart(2,'0');
    if(sEl)sEl.textContent=String(s).padStart(2,'0');
  },1000);
}



/* ===== SUB-PAGES ===== */
var subPageStack=[];
function showSubPage(id){
  subPageStack.push(id);_renderSubPage(id);showPage('subpage');
}
function _renderSubPage(id){
  var titleMap={'data-pribadi':'Data Pribadi','alamat':'Alamat','keamanan':'Keamanan','pesanan':'Riwayat Pesanan','wishlist':'Wishlist','poin':'Poin & Reward','notifikasi':'Notifikasi','ulasan':'Ulasan Saya','bantuan':'Bantuan'};
  document.getElementById('subpage-title').textContent=titleMap[id]||id;
  var backBtn=document.getElementById('subpage-back-btn');
  backBtn.onclick=function(){
    subPageStack.pop();
    if(subPageStack.length>0)_renderSubPage(subPageStack[subPageStack.length-1]);
    else showPage('profil');
  };
  var content=document.getElementById('subpage-content');
  var html='';
  if(id==='pesanan'){
    var orders=[
      {no:'#ORD-2847',date:'25 Jun 2026',items:'Indomie x3, Aqua x2',emoji:'🍜',photo:'instant-noodles',total:145500,status:'Selesai',statusClass:'st-active'},
      {no:'#ORD-2846',date:'20 Jun 2026',items:'Susu SGM, Pampers M',emoji:'🥛',photo:'baby-products',total:187000,status:'Dikirim',statusClass:'st-process'},
      {no:'#ORD-2845',date:'15 Jun 2026',items:'Minyak Goreng, Beras',emoji:'🫙',photo:'cooking-oil-bottle',total:212000,status:'Diproses',statusClass:'st-low'},
    ];
    html+='<div style="padding:10px 0">';
    orders.forEach(function(o){
      html+='<div class="order-hist-item"><div class="oh-header"><span class="oh-no">'+o.no+'</span><span class="oh-date">'+o.date+'</span></div><div class="oh-body"><div class="oh-emoji">'+photoImg(o.photo,o.emoji,48,false,o.photoUrl)+'</div><div class="oh-info"><div class="oh-name">'+o.items+'</div><div class="oh-items">Lihat detail</div></div><div class="oh-total">'+fmtRp(o.total)+'</div></div><div class="oh-footer"><span class="oh-status"><span class="st-badge '+o.statusClass+'">'+o.status+'</span></span><div style="display:flex;gap:6px"><button class="oh-reorder-btn" onclick="showToast(\'🔄 Ditambahkan ulang ke keranjang\')">Beli Lagi</button><button onclick="window.location.href=\'lacak-pesanan.html?order='+o.no.replace('#','')+'\'" style="background:#DBEAFE;color:#1D4ED8;border:none;border-radius:7px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer"><i class="ti ti-truck-delivery" style="font-size:12px"></i> Lacak</button></div></div></div>';
    });
    html+='</div>';
  } else if(id==='poin'){
    html+='<div style="background:linear-gradient(135deg,var(--maroon-dark),var(--maroon-mid));margin:12px 16px;border-radius:14px;padding:20px;color:white"><div style="font-size:12px;opacity:0.8;margin-bottom:4px">Total Poin Kamu</div><div style="font-size:36px;font-weight:900;margin-bottom:14px">1.250 <span style="font-size:18px;opacity:0.8">Poin</span></div></div>';
  } else if(id==='wishlist'){
    var wlItems=Object.values(wishlist);
    if(wlItems.length===0){
      html+='<div class="empty-state" style="padding:48px 24px"><i class="ti ti-heart-off"></i><h3>Wishlist Masih Kosong</h3><p>Tekan ikon hati pada produk untuk menyimpannya di sini.</p><button onclick="showPage(\'home\')" style="background:var(--maroon);color:white;border:none;padding:12px 28px;border-radius:9px;font-weight:800;cursor:pointer;font-size:14px;margin-top:4px"><i class="ti ti-arrow-left"></i> Mulai Belanja</button></div>';
    }else{
      html+='<div style="padding:12px 16px 4px;font-size:11px;color:var(--gray-400);font-weight:700">'+wlItems.length+' produk disimpan</div>';
      html+='<div class="wishlist-grid">';
      wlItems.forEach(function(p){
        var disc=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
        html+='<div class="wl-card"><div class="wl-img" onclick="event.stopPropagation()">'+(p.disc?'<div class="prod-badge">'+p.disc+'</div>':'')+'<div class="wl-remove" onclick="event.stopPropagation();removeFromWishlist('+p.id+')"><i class="ti ti-x"></i></div>'+photoImg(p.photo,p.emoji,70,false,p.photoUrl)+'</div><div class="wl-info"><div class="wl-name">'+p.name+'</div><div class="wl-price">'+fmtRp(p.price)+'</div>'+(p.oldPrice?'<div style="font-size:10px;color:var(--gray-400);text-decoration:line-through">'+fmtRp(p.oldPrice)+(disc>0?' <span style="color:#B91C1C;font-weight:700">-'+disc+'%</span>':'')+'</div>':'')+'</div><button class="wl-btn" onclick="addToCart('+p.id+')"><i class="ti ti-shopping-cart-plus" style="font-size:12px"></i> + Keranjang</button></div>';
      });
      html+='</div>';
    }
  } else {
    html+='<div style="padding:40px 24px;text-align:center;color:var(--gray-400)"><i class="ti ti-tools" style="font-size:48px;display:block;margin-bottom:12px;color:var(--gray-200)"></i><div style="font-size:14px;font-weight:700;color:var(--gray-600)">Halaman sedang dikembangkan</div></div>';
  }
  content.innerHTML=html;
}

/* ===== GOMARET CARD ===== */
function fmtRpSigned(n,type){return (type==='in'?'+':'-')+fmtRp(n)}
function renderGomaretCard(){
  var balEl=document.getElementById('gcv-balance');
  if(balEl)balEl.textContent=fmtRp(gomaretCardBalance);
  var listEl=document.getElementById('gcv-tx-list');
  if(!listEl)return;
  listEl.innerHTML='';
  gomaretCardTx.forEach(function(tx){
    var div=document.createElement('div');
    div.className='ph-item';
    div.innerHTML='<div class="ph-icon" style="background:'+tx.bg+';color:'+tx.color+'">'+tx.icon+'</div><div class="ph-info"><div class="ph-title">'+tx.title+'</div><div class="ph-date">'+tx.date+'</div></div><div class="ph-points '+(tx.type==='in'?'ph-plus':'ph-minus')+'">'+fmtRpSigned(tx.amount,tx.type)+'</div>';
    listEl.appendChild(div);
  });
  var freezeBtn=document.getElementById('gcv-freeze-btn');
  if(freezeBtn){
    freezeBtn.classList.toggle('frozen',cardFrozen);
    freezeBtn.innerHTML=cardFrozen?'<i class="ti ti-lock-open"></i><span>Aktifkan</span>':'<i class="ti ti-lock"></i><span>Bekukan</span>';
  }
}
function topUpGomaretCard(){
  var amount=50000;
  gomaretCardBalance+=amount;
  gomaretCardTx.unshift({title:'Top Up via GoPay',date:'Baru saja',amount:amount,type:'in',icon:'🟢',bg:'#D1FAE5',color:'#065F46'});
  renderGomaretCard();
  showToast('💳 Top up '+fmtRp(amount)+' berhasil!');
}
function toggleFreezeCard(){
  cardFrozen=!cardFrozen;
  renderGomaretCard();
  showToast(cardFrozen?'🔒 Kartu dibekukan sementara':'🔓 Kartu diaktifkan kembali');
}

/* ===== DETAIL PRODUK ===== */
var currentPdId=null;
var pdQty=1;
var pdReviews=[
  {name:'Andi P.',rating:5,date:'3 hari lalu',text:'Kualitas bagus, sesuai deskripsi, pengiriman juga cepat.'},
  {name:'Sari W.',rating:5,date:'1 minggu lalu',text:'Sudah beberapa kali beli, selalu original dan segar.'},
  {name:'Bagus T.',rating:4,date:'2 minggu lalu',text:'Harga bersaing, cuma packing bisa lebih rapi lagi.'},
];
function findStoreForProduct(p){
  if(p.storeId)return stores.find(function(s){return s.id===p.storeId});
  var sid=catToStore[p.cat];
  return stores.find(function(s){return s.id===sid});
}
function openProductDetail(id){
  var p=products.find(function(x){return x.id===id});
  if(!p){showToast('❌ Produk tidak ditemukan');return}
  if(!document.getElementById('pg-productdetail')){window.location.href='index.html?goto=productdetail&pid='+id;return}
  currentPdId=id;pdQty=1;
  renderProductDetail();
  showPage('productdetail');
  var body=document.querySelector('#pg-productdetail .pd-body');
  if(body)body.scrollTop=0;
}
function goBackFromProductDetail(){
  showPage('home');
}
function pdChangeQty(delta){
  var p=products.find(function(x){return x.id===currentPdId});
  if(!p)return;
  pdQty+=delta;
  if(pdQty<1)pdQty=1;
  if(pdQty>p.stock)pdQty=p.stock;
  var numEl=document.getElementById('pd-qty-num');
  if(numEl)numEl.textContent=pdQty;
  var minusBtn=document.getElementById('pd-qty-minus');
  if(minusBtn)minusBtn.disabled=pdQty<=1;
  var plusBtn=document.getElementById('pd-qty-plus');
  if(plusBtn)plusBtn.disabled=pdQty>=p.stock;
}
function pdAddToCart(){
  var p=products.find(function(x){return x.id===currentPdId});
  if(!p)return;
  if(!cart[p.id])cart[p.id]=Object.assign({},p,{qty:0});
  cart[p.id].qty+=pdQty;
  updateBadges();
  showToast(p.emoji+' '+pdQty+'x ditambahkan ke keranjang!');
}
function pdBuyNow(){
  pdAddToCart();
  var sub=Object.values(cart).reduce(function(s,i){return s+i.price*i.qty},0);
  var ongkir=sub>=50000?0:15000;
  goToCheckout(sub+ongkir);
}
function pdToggleWishlist(){
  if(!currentPdId)return;
  toggleWishlist(currentPdId);
  var active=!!wishlist[currentPdId];
  var btn=document.getElementById('pd-wishlist-btn');
  if(btn){btn.classList.toggle('active',active);btn.innerHTML='<i class="ti '+(active?'ti-heart-filled':'ti-heart')+'"></i>';}
  var btnBottom=document.getElementById('pd-btn-wishlist-bottom');
  if(btnBottom){btnBottom.classList.toggle('active',active);btnBottom.innerHTML='<i class="ti '+(active?'ti-heart-filled':'ti-heart')+'"></i>';}
}
function pdVisitStore(){
  var p=products.find(function(x){return x.id===currentPdId});
  if(!p)return;
  var store=findStoreForProduct(p);
  if(store)goToStoreDetail(store.id);
}
function renderProductDetail(){
  var p=products.find(function(x){return x.id===currentPdId});
  var pd=document.getElementById('pd-body');
  if(!p||!pd)return;
  var disc=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
  var inWl=!!wishlist[p.id];
  var store=findStoreForProduct(p);
  var stockCls=p.stock>100?'pd-stock-good':p.stock>20?'pd-stock-low':'pd-stock-out';
  var stockLabel=p.stock>100?'Stok Tersedia':p.stock>20?'Stok Terbatas':'Stok Hampir Habis';
  var stockIcon=p.stock>20?'ti-circle-check':'ti-alert-triangle';

  var html='';

  html+='<div class="pd-gallery">'+(p.disc?'<div class="pd-badge">'+p.disc+'</div>':'')+'<div class="pd-wishlist-btn'+(inWl?' active':'')+'" id="pd-wishlist-btn" onclick="pdToggleWishlist()"><i class="ti '+(inWl?'ti-heart-filled':'ti-heart')+'"></i></div><div class="pd-gallery-img">'+photoImg(p.photo,p.emoji,200,false,p.photoUrl)+'</div></div>';

  html+='<div class="pd-info-card">';
  html+='<div class="pd-brand" onclick="pdVisitStore()">'+p.brand+' <i class="ti ti-chevron-right" style="font-size:11px"></i></div>';
  html+='<div class="pd-name">'+p.name+'</div>';
  html+='<div class="pd-price-row"><span class="pd-price">'+fmtRp(p.price)+'</span>'+(p.oldPrice?'<span class="pd-old-price">'+fmtRp(p.oldPrice)+'</span>':'')+(disc>0?'<span class="pd-disc-badge">-'+disc+'%</span>':'')+'</div>';
  html+='<div class="pd-meta-row"><div class="pd-meta-item"><i class="ti ti-star-filled"></i> '+(p.rating||'4.8')+' Rating</div><div class="pd-meta-item"><i class="ti ti-shopping-bag" style="color:var(--gray-400)"></i> Terjual '+Math.floor(p.stock*3.4)+'+</div></div>';
  html+='<div class="pd-stock-pill '+stockCls+'"><i class="ti '+stockIcon+'" style="font-size:12px"></i> '+stockLabel+' ('+p.stock+' unit)</div>';
  html+='</div>';

  html+='<div class="pd-section"><div class="pd-section-title"><i class="ti ti-package"></i> Deskripsi Produk</div><div class="pd-desc-text">'+p.name+' dari '+p.brand+' adalah pilihan tepat untuk kebutuhan harian kamu, dalam kategori '+p.cat+'. Kualitas terjamin, dikemas dengan baik, dan dikirim langsung dari gudang GoMART agar sampai ke tanganmu dengan aman dan segar.</div></div>';

  html+='<div class="pd-section"><div class="pd-section-title"><i class="ti ti-info-circle"></i> Informasi Produk</div><div class="pd-info-grid">'
    +'<div class="pd-info-grid-item"><span class="pd-info-grid-label">Kategori</span><span class="pd-info-grid-val">'+p.cat+'</span></div>'
    +'<div class="pd-info-grid-item"><span class="pd-info-grid-label">Merek</span><span class="pd-info-grid-val">'+p.brand+'</span></div>'
    +'<div class="pd-info-grid-item"><span class="pd-info-grid-label">Stok Tersedia</span><span class="pd-info-grid-val">'+p.stock+' unit</span></div>'
    +'<div class="pd-info-grid-item"><span class="pd-info-grid-label">Kode Produk</span><span class="pd-info-grid-val">GMT-'+String(p.id).padStart(4,'0')+'</span></div>'
    +'</div></div>';

  html+='<div class="pd-section"><div class="pd-qty-row"><span class="pd-qty-label">Jumlah</span><div class="pd-qty-controls"><button class="pd-qty-btn" id="pd-qty-minus" onclick="pdChangeQty(-1)" '+(pdQty<=1?'disabled':'')+'><i class="ti ti-minus" style="font-size:15px"></i></button><span class="pd-qty-num" id="pd-qty-num">'+pdQty+'</span><button class="pd-qty-btn" id="pd-qty-plus" onclick="pdChangeQty(1)" '+(pdQty>=p.stock?'disabled':'')+'><i class="ti ti-plus" style="font-size:15px"></i></button></div></div></div>';

  if(store){
    html+='<div class="pd-section"><div class="pd-store-card" onclick="pdVisitStore()"><div class="pd-store-logo">'+store.initial+'</div><div class="pd-store-info"><div class="pd-store-name">'+store.name+(store.verified?' <i class="ti ti-rosette-discount-check" style="color:#1D4ED8;font-size:13px"></i>':'')+'</div><div class="pd-store-meta"><i class="ti ti-map-pin" style="font-size:10px"></i> '+store.loc+' · ★ '+store.rating+'</div></div><button class="pd-store-visit" onclick="event.stopPropagation();pdVisitStore()">Kunjungi</button></div></div>';
  }

  html+='<div class="pd-section"><div class="pd-section-title"><i class="ti ti-star"></i> Ulasan Pembeli</div>';
  html+='<div class="pd-review-summary"><div><div class="pd-review-num">'+(p.rating||'4.8')+'</div><div class="pd-review-stars">'+'★'.repeat(Math.round(p.rating||4.8))+'☆'.repeat(5-Math.round(p.rating||4.8))+'</div><div class="pd-review-count">dari '+Math.floor(p.stock*1.8)+' penilaian</div></div></div>';
  pdReviews.forEach(function(r){
    html+='<div class="pd-review-item"><div class="pd-review-user-row"><div class="pd-review-avatar">'+r.name.charAt(0)+'</div><div><div class="pd-review-name">'+r.name+'</div><div class="pd-review-stars-small">'+'★'.repeat(r.rating)+'☆'.repeat(5-r.rating)+'</div></div><span class="pd-review-date">'+r.date+'</span></div><div class="pd-review-text">'+r.text+'</div></div>';
  });
  html+='</div>';

  var related=products.filter(function(x){return x.cat===p.cat&&x.id!==p.id}).slice(0,4);
  if(related.length>0){
    html+='<div class="pd-section"><div class="pd-section-title"><i class="ti ti-apps"></i> Produk Terkait</div><div class="pd-related-grid" id="pd-related-grid"></div></div>';
  }

  html+='<div style="height:16px"></div>';

  pd.innerHTML=html;

  if(related.length>0){
    var rg=document.getElementById('pd-related-grid');
    related.forEach(function(rp){
      var rdisc=rp.oldPrice?Math.round((1-rp.price/rp.oldPrice)*100):0;
      var card=document.createElement('div');card.className='prod-card';card.onclick=function(){openProductDetail(rp.id)};
      card.innerHTML='<div class="prod-img">'+(rp.disc?'<div class="prod-badge">'+rp.disc+'</div>':'')+photoImg(rp.photo,rp.emoji,90,false,rp.photoUrl)+'</div><div class="prod-info"><div class="prod-brand">'+rp.brand+'</div><div class="prod-name">'+rp.name+'</div><div class="price-row"><div class="prod-price">'+fmtRp(rp.price)+'</div>'+(rp.oldPrice?'<div class="prod-old">'+fmtRp(rp.oldPrice)+'</div>':'')+(rdisc>0?'<div class="prod-disc">-'+rdisc+'%</div>':'')+'</div><div class="prod-foot"><div class="prod-rating"><i class="ti ti-star-filled"></i>'+(rp.rating||'4.8')+'</div><button class="add-to-cart" onclick="event.stopPropagation();addToCart('+rp.id+')"><i class="ti ti-shopping-cart-plus"></i> + Keranjang</button></div></div>';
      rg.appendChild(card);
    });
  }

  var bar=document.querySelector('#pg-productdetail .pd-bottom-bar');
  if(bar)bar.remove();
  var bottomBar=document.createElement('div');
  bottomBar.className='pd-bottom-bar';
  bottomBar.innerHTML='<button class="pd-btn-wishlist'+(inWl?' active':'')+'" id="pd-btn-wishlist-bottom" onclick="pdToggleWishlist()"><i class="ti '+(inWl?'ti-heart-filled':'ti-heart')+'"></i></button><button class="pd-btn-addcart" onclick="pdAddToCart()"><i class="ti ti-shopping-cart-plus"></i> Keranjang</button><button class="pd-btn-buynow" onclick="pdBuyNow()"><i class="ti ti-bolt"></i> Beli Sekarang</button>';
  document.getElementById('pg-productdetail').appendChild(bottomBar);

  updatePdCartBadge();
}
function updatePdCartBadge(){
  var total=Object.values(cart).reduce(function(s,i){return s+i.qty},0);
  var el=document.getElementById('cart-dot-pd');
  if(!el)return;
  if(total>0){el.style.display='flex';el.textContent=total}
  else el.style.display='none';
}

/* ===== PAGE NAV ===== */
function showPage(p){
  var target=document.getElementById('pg-'+p);
  if(!target)return; /* halaman ini tidak ada di file HTML saat ini */
  document.querySelectorAll('.page').forEach(function(el){el.classList.remove('active')});
  target.classList.add('active');
  window.scrollTo(0,0);
  document.documentElement.scrollTop=0;
  document.body.scrollTop=0;
  if(p==='profil')applyCurrentUserToProfile();
  if(p==='promo'){renderVouchers();renderFlash();renderSemuaPromo()}
  if(p==='pembayaran'){
    payStep=1;
    var sub=Object.values(cart).reduce(function(s,i){return s+i.price*i.qty},0);
    var ongkir=sub>=50000?0:15000;
    window._checkoutTotal=sub+ongkir;
    renderPayPage(window._checkoutTotal);
  }
  if(p==='gomaretcard'){
    renderGomaretCard();
  }
  if(p==='allcategories'){
    var s=document.getElementById('allcat-search-input');if(s)s.value='';
    renderAllCategories();
  }
  if(p==='allproducts'){
    var s2=document.getElementById('allprod-search-input');if(s2)s2.value='';
    var sortSel=document.getElementById('allprod-sort-select');if(sortSel)sortSel.value='default';
    allprodActiveCat='Semua';
    renderAllProducts();
  }
}

function scrollToSection(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})}
function showToast(msg){
  var t=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(function(){t.classList.remove('show')},2800);
}

var _trackingInput=document.getElementById('tracking-input');
if(_trackingInput)_trackingInput.addEventListener('keypress',function(e){if(e.key==='Enter')doTracking()});
if(document.getElementById('prod-grid'))renderProducts(products);
if(document.getElementById('home-store-preview'))renderHomeStorePreview();
updateWishlistMenu();
updateBadges();

/* Menangani navigasi lintas-halaman, mis. keranjang.html -> index.html?goto=pembayaran */
(function handleCrossPageGoto(){
  if(!document.getElementById('pg-home'))return;
  var params=new URLSearchParams(window.location.search);
  var goto=params.get('goto');
  if(!goto)return;
  if(goto==='account')goToAccount();
  else if(goto==='productdetail'){
    var pid=parseInt(params.get('pid'),10);
    if(pid)openProductDetail(pid);
  }
  else showPage(goto);
})();
