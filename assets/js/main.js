'use strict';
/* Pega en endpoint la URL /exec de la aplicación web de Google Apps Script (hoja NUEVA del desodorante).
   Mientras esté vacío, el formulario no crea pedidos y ofrece WhatsApp. */
const CONFIG = {marca:'Aura Tienda en linea', whatsapp:'573160958557', correo:'soporteauratienda@gmail.com', endpoint:''};
/* Debe coincidir con CATALOGO en integraciones/google-sheets/Code.gs. */
const COMBOS = {
  individual:{nombre:'Desodorante Vainilla & Pistacho',detalle:'1 desodorante roll-on 120 ml',precio:59900},
  duo:{nombre:'Combo x2 Vainilla & Pistacho',detalle:'2 desodorantes roll-on 120 ml',precio:109900}
};
/* Listado parcial de municipios: el campo permite escribir cualquier municipio. */
const CIUDADES = {'Amazonas':['Leticia','Puerto Nariño'],'Antioquia':['Medellín','Bello','Envigado','Itagüí','Rionegro','Apartadó'],'Arauca':['Arauca','Arauquita','Saravena'],'Atlántico':['Barranquilla','Soledad','Malambo','Puerto Colombia'],'Bogotá D. C.':['Bogotá'],'Bolívar':['Cartagena','Magangué','Turbaco'],'Boyacá':['Tunja','Duitama','Sogamoso','Chiquinquirá'],'Caldas':['Manizales','La Dorada','Chinchiná'],'Caquetá':['Florencia','San Vicente del Caguán'],'Casanare':['Yopal','Aguazul','Villanueva'],'Cauca':['Popayán','Santander de Quilichao','Puerto Tejada'],'Cesar':['Valledupar','Aguachica','Bosconia'],'Chocó':['Quibdó','Istmina','Tadó'],'Córdoba':['Montería','Cereté','Lorica'],'Cundinamarca':['Soacha','Chía','Zipaquirá','Facatativá','Girardot','Fusagasugá','Mosquera','Madrid'],'Guainía':['Inírida'],'Guaviare':['San José del Guaviare','El Retorno'],'Huila':['Neiva','Pitalito','Garzón'],'La Guajira':['Riohacha','Maicao','San Juan del Cesar'],'Magdalena':['Santa Marta','Ciénaga','Fundación'],'Meta':['Villavicencio','Acacías','Granada'],'Nariño':['Pasto','Ipiales','Tumaco'],'Norte de Santander':['Cúcuta','Ocaña','Pamplona'],'Putumayo':['Mocoa','Puerto Asís','Orito'],'Quindío':['Armenia','Calarcá','Montenegro'],'Risaralda':['Pereira','Dosquebradas','Santa Rosa de Cabal'],'San Andrés y Providencia':['San Andrés','Providencia'],'Santander':['Bucaramanga','Floridablanca','Girón','Piedecuesta','Barrancabermeja'],'Sucre':['Sincelejo','Corozal','Sampués'],'Tolima':['Ibagué','Espinal','Melgar'],'Valle del Cauca':['Cali','Palmira','Buenaventura','Tuluá','Buga','Jamundí'],'Vaupés':['Mitú'],'Vichada':['Puerto Carreño','La Primavera']};

const $ = s => document.querySelector(s);
const money = n => '$'+new Intl.NumberFormat('es-CO').format(n);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Mensajes ---------- */
const dialog = $('#message-dialog');
function showMessage(title,body){$('#dialog-title').textContent=title;$('#dialog-text').textContent=body;dialog.showModal();}
function outsideDialog(event,element){const r=element.getBoundingClientRect();return event.target===element&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom);}
dialog.addEventListener('click',e=>{if(outsideDialog(e,dialog))dialog.close();});

/* ---------- Galería (video + fotos) ---------- */
const gallery=$('#desktop-gallery');
const heroVideo=$('#hero-video'),mainImg=$('#main-product');
const MEDIA=[
  {type:'video',thumb:'assets/images/poster-producto.jpg',alt:'Video del desodorante roll-on'},
  {type:'img',src:'assets/images/producto-roll-on.jpg',alt:'Desodorante roll-on 120 ml con tapa dorada y caja'},
  {type:'img',src:'assets/images/beneficios.jpg',alt:'Frasco en tocador'},
  {type:'img',src:'assets/images/portada-revista.jpg',alt:'Frasco con arreglo floral'},
  {type:'img',src:'assets/images/detalle-frasco.jpg',alt:'Detalle del frasco y tapa dorada'},
  {type:'img',src:'assets/images/notas-olfativas.jpg',alt:'Notas olfativas: vainilla, caramelo, jazmín, pistacho y almendra'}
];
MEDIA.forEach((m,i)=>{
  const b=document.createElement('button');
  b.className='thumb'+(m.type==='video'?' thumb-video':'');b.type='button';
  b.setAttribute('aria-label','Ver '+m.alt.toLowerCase());b.setAttribute('aria-pressed',String(i===0));
  const im=document.createElement('img');im.src=m.thumb||m.src;im.alt='';im.loading='lazy';b.append(im);
  b.addEventListener('click',()=>{
    if(m.type==='video'){mainImg.hidden=true;heroVideo.hidden=false;if(!reducedMotion.matches)heroVideo.play().catch(()=>{});}
    else{heroVideo.pause();heroVideo.hidden=true;mainImg.src=m.src;mainImg.alt=m.alt;mainImg.hidden=false;}
    document.querySelectorAll('.thumb').forEach(el=>el.setAttribute('aria-pressed',String(el===b)));
  });
  gallery.querySelector('.thumbs').append(b);
});
const breakpoint=matchMedia('(max-width:860px)');
function placeGallery(){if(breakpoint.matches)$('#mobile-gallery').append(gallery);else $('.hero').append(gallery);}
placeGallery();breakpoint.addEventListener('change',placeGallery);

/* ---------- Videos: solo se reproducen visibles; sin autoplay con movimiento reducido ---------- */
function setupMotion(){
  const all=[heroVideo,...document.querySelectorAll('.lazy-video')];
  if(reducedMotion.matches){all.forEach(v=>{v.removeAttribute('autoplay');v.pause();v.controls=true;});return;}
  const io=new IntersectionObserver(entries=>{for(const e of entries){const v=e.target;if(e.isIntersecting&&!v.hidden){if(v.preload==='none')v.preload='auto';v.play().catch(()=>{v.controls=true;});}else v.pause();}},{threshold:0.35});
  all.forEach(v=>io.observe(v));
}
setupMotion();

/* ---------- Ofertas y resumen ---------- */
function selectedCombo(){return document.querySelector('input[name="combo"]:checked').value;}
let discountAccepted=false;
let exitOfferShown=false;
// 10 % y redondeo a la centena inferior: 59.900 → 53.900; 109.900 → 98.900. Igual que en Code.gs.
function promotionalPrice(price){return Math.floor(price*0.9/100)*100;}
function orderTotal(){const price=COMBOS[selectedCombo()].precio;return discountAccepted?promotionalPrice(price):price;}
function updateOrder(){
  const c=COMBOS[selectedCombo()];
  $('#summary-name').textContent=c.nombre;$('#summary-detail').textContent=c.detalle;
  document.querySelectorAll('[data-total]').forEach(el=>el.textContent=money(orderTotal()));
  $('#summary-subtotal').textContent=money(c.precio);
  $('#discount-row').hidden=!discountAccepted;$('#discount-amount').textContent='−'+money(c.precio-orderTotal());
}
document.querySelectorAll('input[name="combo"]').forEach(el=>el.addEventListener('change',updateOrder));

/* ---------- Checkout modal ---------- */
const checkoutDialog=$('#checkout-dialog'),exitDialog=$('#exit-offer-dialog');
let lastTrigger=null;
function openCheckout(event){
  lastTrigger=event&&event.currentTarget||null;
  const combo=lastTrigger&&lastTrigger.dataset.combo;
  if(combo&&COMBOS[combo]){const r=document.querySelector('input[name="combo"][value="'+combo+'"]');if(r&&!r.disabled){r.checked=true;updateOrder();}}
  checkoutDialog.showModal();document.body.classList.add('checkout-open');
  checkoutDialog.scrollTop=0;$('#checkout-title').focus({preventScroll:true});
}
function closeCheckout(){
  if(exitDialog.open)exitDialog.close();
  if(checkoutDialog.open)checkoutDialog.close();
  document.body.classList.remove('checkout-open');
  if(lastTrigger&&document.contains(lastTrigger))lastTrigger.focus({preventScroll:true});
}
function hasOrderDetails(){return ['#full-name','#phone','#department','#city','#address'].some(id=>$(id).value.trim());}
function requestCheckoutClose(){
  if(!submitting&&!discountAccepted&&!exitOfferShown&&hasOrderDetails()){
    exitOfferShown=true;const c=COMBOS[selectedCombo()];
    $('#exit-kit').textContent=c.nombre+' · '+c.detalle;
    $('#exit-original').textContent=money(c.precio);
    $('#exit-total').textContent=money(promotionalPrice(c.precio));
    $('#exit-savings').textContent='Ahorras '+money(c.precio-promotionalPrice(c.precio))+' COP.';
    exitDialog.showModal();$('#accept-discount').focus();return;
  }
  if(submitting)return;
  closeCheckout();
}
document.querySelectorAll('[data-open-checkout]').forEach(b=>b.addEventListener('click',openCheckout));
$('#close-checkout').addEventListener('click',requestCheckoutClose);
checkoutDialog.addEventListener('cancel',e=>{e.preventDefault();requestCheckoutClose();});
checkoutDialog.addEventListener('close',()=>document.body.classList.remove('checkout-open'));
checkoutDialog.addEventListener('click',e=>{if(outsideDialog(e,checkoutDialog))requestCheckoutClose();});
$('#accept-discount').addEventListener('click',()=>{
  discountAccepted=true;updateOrder();exitDialog.close();
  $('.order-summary').scrollIntoView({block:'nearest',behavior:reducedMotion.matches?'auto':'smooth'});
  $('.submit').focus({preventScroll:true});
});
$('#decline-discount').addEventListener('click',closeCheckout);
exitDialog.addEventListener('cancel',e=>{e.preventDefault();closeCheckout();});
exitDialog.addEventListener('click',e=>{if(outsideDialog(e,exitDialog))closeCheckout();});

/* ---------- Formulario ---------- */
const department=$('#department'),city=$('#city');
Object.keys(CIUDADES).forEach(d=>department.add(new Option(d,d)));
department.addEventListener('change',()=>{
  city.value='';city.disabled=!department.value;
  city.placeholder=department.value?'Escribe o selecciona tu municipio':'Selecciona primero el departamento';
  $('#city-list').replaceChildren(...(CIUDADES[department.value]||[]).map(name=>new Option(name,name)));
});
const phone=$('#phone');
function validatePhone(){
  const cleaned=phone.value.replace(/[\s().+-]/g,'');
  const valid=/^(?:57)?3\d{9}$/.test(cleaned);
  phone.setCustomValidity(valid?'':'Ingresa un celular colombiano de 10 dígitos que empiece por 3 (puedes incluir +57).');
  return cleaned.replace(/^57(?=3\d{9}$)/,'');
}
phone.addEventListener('input',validatePhone);
for(const id of ['full-name','city','address']){
  $('#'+id).addEventListener('input',function(){
    const min=id==='address'?10:id==='full-name'?5:2;
    this.setCustomValidity(this.value.trim().length>=min?'':'Completa este campo con información válida.');
  });
}

// Envío invisible por iframe: espera confirmación explícita del receptor.
// No se usa fetch(no-cors): una respuesta opaca no demuestra que se guardó el pedido.
let submitting=false;
let retryOrder=null;
function randomToken(){return Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');}
function enviarPedido(datos){
  return new Promise((resolve,reject)=>{
    const token=randomToken();
    const frame=document.createElement('iframe');
    frame.name='aura-'+token;frame.hidden=true;frame.setAttribute('aria-hidden','true');frame.title='Envío del pedido';
    const transport=document.createElement('form');
    transport.hidden=true;transport.method='POST';transport.action=CONFIG.endpoint;transport.target=frame.name;
    for(const [key,value] of Object.entries({...datos,token,origen:location.origin})){
      const input=document.createElement('input');input.type='hidden';input.name=key;input.value=value;transport.append(input);
    }
    function cleanup(){clearTimeout(timer);window.removeEventListener('message',onMessage);transport.remove();frame.remove();}
    function onMessage(event){
      let origin;try{origin=new URL(event.origin);}catch{return;}
      const google=origin.protocol==='https:'&&(origin.hostname==='script.google.com'||origin.hostname==='script.googleusercontent.com'||origin.hostname.endsWith('.script.googleusercontent.com')||origin.hostname.endsWith('-script.googleusercontent.com'));
      const data=event.data;
      if(!google||!data||data.type!=='aura-order-result'||data.token!==token||data.referencia!==datos.referencia)return;
      cleanup();data.ok===true?resolve(data):reject(new Error('El pedido no se pudo guardar. Revisa tus datos y vuelve a intentar o escríbenos por WhatsApp.'));
    }
    const timer=setTimeout(()=>{cleanup();reject(new Error('No pudimos confirmar la recepción. Tus datos siguen aquí: puedes reintentar o escribirnos por WhatsApp. Referencia: '+datos.referencia));},45000);
    window.addEventListener('message',onMessage);
    document.body.append(frame,transport);
    try{HTMLFormElement.prototype.submit.call(transport);}catch{cleanup();reject(new Error('No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.'));}
  });
}
const SUBMIT_LABEL='CONFIRMAR MI PEDIDO CON PAGO CONTRA ENTREGA';
$('#order-form').addEventListener('submit',async event=>{
  event.preventDefault();
  const form=event.currentTarget;
  const celular=validatePhone();
  if(submitting||!form.reportValidity())return;
  $('#form-error').textContent='';
  if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(CONFIG.endpoint)){
    showMessage('Pedidos por WhatsApp','Estamos habilitando el formulario. Por ahora puedes hacer tu pedido por WhatsApp al 316 095 8557.');return;
  }
  if(!/^https?:$/.test(location.protocol)){
    showMessage('Abre la página desde el sitio web','El formulario necesita abrirse desde el dominio de la tienda o la vista previa local.');return;
  }
  const datos={nombre:$('#full-name').value.trim(),telefono:celular,departamento:department.value,ciudad:city.value.trim(),direccion:$('#address').value.trim(),combo:selectedCombo(),promocion:discountAccepted?'SALIDA10':'',totalEsperado:String(orderTotal()),website:$('#website').value};
  const fingerprint=JSON.stringify(datos);
  if(!retryOrder||retryOrder.fingerprint!==fingerprint)retryOrder={fingerprint,referencia:'AURA-'+randomToken()};
  const reference=retryOrder.referencia;
  const button=$('.submit');
  const controls=[...form.querySelectorAll('input,select,textarea'),...document.querySelectorAll('input[name="combo"]'),$('#close-checkout')];
  const previous=controls.map(el=>el.disabled);
  submitting=true;button.disabled=true;form.setAttribute('aria-busy','true');controls.forEach(el=>el.disabled=true);button.textContent='ENVIANDO TU PEDIDO…';
  let success=false;
  try{
    const version=await enviarPedido({accion:'capacidades',referencia:reference});
    if(version.version!==4)throw new Error('Estamos actualizando los pedidos. Escríbenos por WhatsApp para conservar tu oferta.');
    const saved=await enviarPedido({...datos,referencia:reference});
    if(saved.total!==Number(datos.totalEsperado))throw new Error('El valor recibido no coincide. Escríbenos por WhatsApp con la referencia '+reference+' antes de volver a pedir.');
    success=true;
  }catch(error){$('#form-error').textContent=error.message;}
  finally{
    submitting=false;form.removeAttribute('aria-busy');controls.forEach((el,i)=>el.disabled=previous[i]);
    button.disabled=false;button.textContent=SUBMIT_LABEL;
  }
  if(success){
    retryOrder=null;closeCheckout();discountAccepted=false;
    form.reset();$('#city-list').replaceChildren();city.disabled=true;city.placeholder='Selecciona primero el departamento';
    form.querySelectorAll('input,textarea').forEach(el=>el.setCustomValidity(''));updateOrder();
    showMessage('¡Pedido enviado con éxito!','Nos contactaremos contigo por WhatsApp para confirmar los datos y coordinar la entrega.\n\nReferencia: '+reference);
  }
});

/* ---------- WhatsApp, políticas y detalles ---------- */
$('#whatsapp').addEventListener('click',()=>{
  window.open('https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent('Hola, quiero información sobre el desodorante vainilla y pistacho con pago contra entrega'),'_blank','noopener,noreferrer');
});
const POLICIES={
  retracto:['Derecho de retracto','Para compras a distancia, cuando resulte aplicable, puedes ejercer el derecho de retracto dentro de los cinco (5) días hábiles siguientes a la entrega, conforme al artículo 47 de la Ley 1480 de 2011.\n\nEscríbenos por WhatsApp al 316 095 8557 o al correo soporteauratienda@gmail.com para iniciar la solicitud. Aplican las condiciones y excepciones legales.'],
  garantia:['Garantía','Tienes 10 días de garantía por cualquier causa a partir de la entrega. Escríbenos por WhatsApp al 316 095 8557 con tu referencia de pedido y te indicamos el procedimiento.']
};
document.querySelectorAll('[data-policy]').forEach(b=>b.addEventListener('click',()=>showMessage(...POLICIES[b.dataset.policy])));
$('#year').textContent=new Date().getFullYear();

/* ---------- CTA fijo móvil: oculto en el primer pliegue y en las ofertas ---------- */
const visible={hero:true,ofertas:false};
function sticky(){$('#sticky-buy').hidden=visible.hero||visible.ofertas;document.body.classList.toggle('has-sticky',!$('#sticky-buy').hidden);}
const stickyObserver=new IntersectionObserver(entries=>{for(const e of entries)visible[e.target.id==='ofertas'?'ofertas':'hero']=e.isIntersecting;sticky();},{threshold:0});
stickyObserver.observe($('.hero'));stickyObserver.observe($('#ofertas'));
