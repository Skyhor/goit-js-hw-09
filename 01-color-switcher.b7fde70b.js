const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{timer=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(timer),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.b7fde70b.js.map
