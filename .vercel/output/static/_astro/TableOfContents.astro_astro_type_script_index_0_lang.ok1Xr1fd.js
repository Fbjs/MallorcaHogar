const f="_top";class H extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],o=t=>{if(t instanceof HTMLHeadingElement){if(t.id===f)return!0;const s=t.tagName[1];if(s){const n=parseInt(s,10);if(n>=this.minH&&n<=this.maxH)return!0}}return!1},r=t=>{if(!t)return null;const s=t;for(;t;){if(o(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const n=r(t);if(n)return n}return r(s.parentElement)},c=t=>{for(const{isIntersecting:s,target:n}of t){if(!s)continue;const m=r(n);if(!m)continue;const l=e.find(g=>g.hash==="#"+encodeURIComponent(m.id));if(l){this.current=l;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const u=()=>{i&&i.disconnect(),i=new IntersectionObserver(c,{rootMargin:this.getRootMargin()}),a.forEach(t=>i.observe(t))};u();const d=window.requestIdleCallback||(t=>setTimeout(t,1));let h;window.addEventListener("resize",()=>{i&&i.disconnect(),clearTimeout(h),h=setTimeout(()=>d(u),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,o=this.querySelector("summary")?.getBoundingClientRect().height||0,r=e+o+32,c=r+53,a=document.documentElement.clientHeight;return`-${r}px 0% ${c-a}px`}}customElements.define("starlight-toc",H);export{H as S};