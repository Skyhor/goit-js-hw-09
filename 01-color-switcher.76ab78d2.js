const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.startBtn.addEventListener("click",(()=>{timer=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(()=>{clearInterval(timer),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.76ab78d2.js.map
