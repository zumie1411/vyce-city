const toast=document.getElementById('toast');let toastTimer;function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400)}
const modal=document.getElementById('modal'),modalTitle=document.getElementById('modalTitle'),modalText=document.getElementById('modalText');function openModal(title='CITY MAP',text='Pick a location on the map.'){modalTitle.textContent=title;modalText.textContent=text;modal.classList.add('open');document.body.classList.add('modal-open')}function closeModal(){modal.classList.remove('open');document.body.classList.remove('modal-open')}
document.getElementById('mapBtn').addEventListener('click',()=>openModal());document.getElementById('closeModal').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{const name=b.dataset.open;const descriptions={'Neon Mile':'Music leaking out of every doorway. Neon Mile never clocks out. Entry is easy; leaving is another story.','Glass Coast':'Private rooftops, expensive drinks, and a view you will pretend is worth it.','Dead Signal':'The streetlights flicker. Your phone has no bars. You might be exactly where you meant to be.'};openModal(name.toUpperCase(),descriptions[name])}));document.querySelectorAll('[data-pin]').forEach(p=>p.addEventListener('click',()=>{const name=p.dataset.pin;const b=document.querySelector(`[data-open="${name}"]`);if(b)b.click()}));
document.getElementById('glitchBtn').addEventListener('click',()=>{document.body.classList.toggle('signal-disturbed');document.querySelector('h1').classList.add('glitch');showToast('SIGNAL DISTURBANCE DETECTED');setTimeout(()=>document.querySelector('h1').classList.remove('glitch'),700)});
const terminal=document.getElementById('terminal');document.getElementById('secretBtn').addEventListener('click',()=>terminal.classList.toggle('open'));document.getElementById('closeTerminal').addEventListener('click',()=>terminal.classList.remove('open'));document.getElementById('termForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('termInput'),out=document.getElementById('termOutput'),cmd=input.value.trim().toLowerCase();const commands={'help':'Commands: help / whoami / districts / clear / exit','whoami':'A visitor with questionable sleep habits. Session logged.','districts':'NEON MILE :: GLASS COAST :: DEAD SIGNAL','clear':'','exit':'Closing session...'};if(cmd==='clear')out.innerHTML='';else if(cmd==='exit'){terminal.classList.remove('open');showToast('SESSION CLOSED')}else out.innerHTML=(commands[cmd]||'Command not recognized. Try <b>help</b>.');input.value=''});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();terminal.classList.remove('open')}if(e.key==='/'&&!modal.classList.contains('open')){e.preventDefault();terminal.classList.add('open');document.getElementById('termInput').focus()}});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}}),{threshold:.14});document.querySelectorAll('.district-card,.manifesto-copy,.signal-line,.section-head').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
/* ==============================
   VYCE//CITY CAR INTERACTIONS
============================== */

document.querySelectorAll('[data-drive]').forEach(button => {
  button.addEventListener('click', () => {

    const card = button.closest('.car-card');
    const carNames = [
      'VORTEX GT',
      'SAINT 86',
      'REAPER X'
    ];

    card.classList.remove('driving');

    // Restart the animation
    void card.offsetWidth;

    card.classList.add('driving');

    showToast(
      carNames[Number(button.dataset.drive)] +
      ' // ENGINE STARTED'
    );

    setTimeout(() => {
      card.classList.remove('driving');
    }, 2000);

  });
});
