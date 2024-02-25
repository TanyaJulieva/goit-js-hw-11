import{i as u,S as m}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader")};function d(){const o="42470360-53d39d66a700555aa13e5c54c",r="https://pixabay.com/api/",s=l.input.value,n=`${r}?key=${o}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Image error!");return e.json()}).catch(e=>{alert("Error while fetching images from pixabay!")}).finally(()=>l.loader.remove())}document.querySelector(".input-js"),document.querySelector(".form-js"),document.querySelector(".gallery-js");function f(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:a,downloads:c})=>`<li>
        <a href="${s}">
          <img src="${r}" alt="${n}" width="360" hight="200" />
        </a>
        <ul class="actions">
            <li class="action">
              <h2 class="actions-name">Likes</h2>
              <p class="quantity">${e}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Views</h2>
              <p class="quantity">${t}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Comments</h2>
              <p class="quantity">${a}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${c}</p>
            </li>
          </ul>
      </li>`).join("")}const i={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader")};i.loader.classList.add("hidden");i.form.addEventListener("submit",y);function y(o){i.loader.classList.remove("hidden"),o.preventDefault(),console.dir(o.currentTarget),d().then(r=>{const s=r.hits;if(s.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB"});return}i.list.innerHTML=f(s),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),o.currentTarget.reset()}
//# sourceMappingURL=commonHelpers.js.map
