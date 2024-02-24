import{i as l}from"./assets/vendor-38388549.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js")};function m(){const s="42470360-53d39d66a700555aa13e5c54c",r="https://pixabay.com/api/",o=u.input.value,n=`${r}?key=${s}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Image error!");return e.json()}).catch(e=>{alert("Error while fetching images from pixabay!")})}document.querySelector(".input-js"),document.querySelector(".form-js"),document.querySelector(".gallery-js");function d(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:a})=>`<li>
          <a href="${o}">
            <img src="${r}" alt="${n}" width="360">
          </a>
          <div class="actions">
            <div>
              <h2 class="actions-name">Likes</h2>
              <p class="quantity">${e}</p>
            </div>
            <div>
              <h2 class="actions-name">Views</h2>
              <p class="quantity">${t}</p>
            </div>
            <div>
              <h2 class="actions-name">Comments</h2>
              <p class="quantity">${i}</p>
            </div>
            <div>
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${a}</p>
            </div>
          </div>
        </li>`).join("")}const c={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js")};c.form.addEventListener("submit",f);function f(s){s.preventDefault(),m().then(r=>{const o=r.hits;if(console.log(o),o.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB"});return}c.list.insertAdjacentHTML("beforeend",d(o))}),s.currentTarget.reset()}
//# sourceMappingURL=commonHelpers.js.map
