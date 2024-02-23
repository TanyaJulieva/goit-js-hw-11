import"./assets/vendor-60237e46.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js")};function u(){const o="42470360-53d39d66a700555aa13e5c54c",r="https://pixabay.com/api/",i=c.input.value,n=`${r}?key=${o}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(console.log(e),!e.ok)throw new Error("Image error!");return e.json()}).catch(e=>{iziToast.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB"})})}const l={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js")};function a(){u().then(o=>{l.list.innerHTML=o.hits.map(({webformatURL:r,tags:i,likes:n,views:e,comments:t,downloads:s})=>`<li>
             <img src="${r}" alt="${i}">
             <div>
               <h2>Likes</h2>
               <p>${n}</p>
             </div>
             <div>
               <h2>Views</h2>
               <p>${e}</p>
             </div>
             <div>
               <h2>Comments</h2>
               <p>${t}</p>
             </div>
             <div>
               <h2>Downloads</h2>
               <p>${s}</p>
             </div>
           </li>`).join()})}const d={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js")};d.form.addEventListener("submit",m);function m(o){o.preventDefault(),a()}
//# sourceMappingURL=commonHelpers.js.map
