const p1=document.getElementById('page1'),l=document.getElementById('loading'),p2=document.getElementById('page2');const no=document.getElementById('no');
function move(){no.style.position='fixed';no.style.left=Math.random()*(innerWidth-120)+'px';no.style.top=Math.random()*(innerHeight-60)+'px';}
no.onmouseover=move;no.ontouchstart=(e)=>{e.preventDefault();move();};
yes.onclick=()=>{p1.classList.remove('active');l.classList.add('active');setTimeout(()=>{l.classList.remove('active');p2.classList.add('active');type();},2000);}
const text=`Dear Iman,

I hope this little surprise makes you smile. I wish you happiness, success, good health and beautiful memories. Keep shining and never stop believing in yourself.

Happy Birthday! ❤️`;let i=0;
function type(){const el=document.getElementById('msg');let t=setInterval(()=>{el.textContent+=text[i++]||'';if(i>=text.length)clearInterval(t)},30)}