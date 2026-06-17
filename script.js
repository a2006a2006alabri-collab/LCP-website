function toggleMenu(){document.getElementById('navlinks').classList.toggle('active')}
document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const id=link.getAttribute('href');const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});document.getElementById('navlinks').classList.remove('active')}})})
