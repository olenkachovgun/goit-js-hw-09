import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l="feedback-form-state",o=document.querySelector(".feedback-form"),e=document.querySelector("#email-input"),r=o.querySelector("textarea"),t={email:"",message:""};e.addEventListener("focus",()=>{e.setAttribute("placeholder","Type area")});e.addEventListener("blur",()=>{e.setAttribute("placeholder","")});o.addEventListener("submit",n);o.addEventListener("input",()=>{t.email=e.value,t.message=r.value,localStorage.setItem(l,JSON.stringify(t))});function u(){const a=localStorage.getItem(l);if(a){const s=JSON.parse(a);e.value=s.email,r.value=s.message}}u();function n(a){if(a.preventDefault(),!e.value||!r.value){alert("Fill please all fields");return}t.email=e.value,t.message=r.value,console.log(t),localStorage.removeItem(l),a.currentTarget.reset()}
//# sourceMappingURL=2-form.js.map