// Smooth scroll + simple modal system
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null, '', '#'+id);
    }
  });
});

document.querySelectorAll('.open-modal').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.modal;
    const modal = document.getElementById(id);
    if(modal){ modal.classList.add('open'); }
  });
});
document.querySelectorAll('.modal .close').forEach(btn=>{
  btn.addEventListener('click', ()=> btn.closest('.modal').classList.remove('open'));
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open')); }
});
