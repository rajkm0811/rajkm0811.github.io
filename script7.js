// Typing roles
const roles=["Data Scientist","Data Engineer","Streaming Data Engineer","Cloud Data Engineer","ML Feature Engineer"];
let ri=0,ci=0,del=false;const el=document.getElementById("typing");
(function type(){const word=roles[ri];el.textContent=word.slice(0,ci);
 if(!del){ci++;if(ci>word.length){del=true;return setTimeout(type,1400)}}
 else{ci--;if(ci===0){del=false;ri=(ri+1)%roles.length}}
 setTimeout(type,del?38:78)})();
// Counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
 e.target.classList.add("in");
 e.target.querySelectorAll(".count").forEach(c=>{const to=+c.dataset.to;let n=0;const t=setInterval(()=>{n++;c.textContent=n;if(n>=to)clearInterval(t)},28)});
 io.unobserve(e.target)}),{threshold:.18});
document.querySelectorAll(".reveal").forEach(s=>io.observe(s));
// Skill filters
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 const f=b.dataset.f;document.querySelectorAll(".skill").forEach(s=>s.classList.toggle("hide",f!=="all"&&!s.dataset.cat.includes(f)))}));
// Mobile nav
document.getElementById("burger").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
// Particle background
const cv=document.getElementById("bg"),ctx=cv.getContext("2d");let W,H,ps=[];
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;ps=Array.from({length:Math.min(90,innerWidth/14)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,s:Math.random()*.35+.08,o:Math.random()*.6+.2}))}
size();addEventListener("resize",size);
(function draw(){ctx.clearRect(0,0,W,H);ps.forEach(p=>{p.y-=p.s;if(p.y<-4){p.y=H+4;p.x=Math.random()*W}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle=`rgba(120,180,255,${p.o})`;ctx.fill()});requestAnimationFrame(draw)})();
