(function(){var h=document.documentElement,k='lg-lang',b=document.getElementById('lang');
function set(l){h.dataset.lang=l;h.lang=l;if(b)b.setAttribute('aria-pressed',l==='es'?'true':'false');try{localStorage.setItem(k,l)}catch(e){}}
var s=null;try{s=localStorage.getItem(k)}catch(e){}
if(!s&&navigator.language&&/^es\b/i.test(navigator.language))s='es';
if(s==='es'||s==='en')set(s);
if(b)b.onclick=function(){set(h.dataset.lang==='en'?'es':'en')};
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();})();
