var t=new Promise(function(t,e){document.addEventListener("mousedown",function(e){0===e.button&&t("First promise was resolved")}),setTimeout(function(){e(Error("First promise was rejected"))},3e3)}),e=new Promise(function(t,e){document.addEventListener("mousedown",function(e){(0===e.button||2===e.button)&&t("Second promise was resolved")})}),n=new Promise(function(t,e){var n=!1,o=!1;document.addEventListener("mousedown",function(e){0===e.button?n=!0:2===e.button&&(o=!0),n&&o&&t("Third promise was resolved")})});function o(t){var e=document.createElement("div");e.setAttribute("data-qa","notification"),e.className="success",e.textContent=t,document.body.append(e)}function i(t){var e=document.createElement("div");e.setAttribute("data-qa","notification"),e.className="error",e.textContent=t,document.body.append(e)}t.then(o).catch(i),e.then(o).catch(i),n.then(o).catch(i);
//# sourceMappingURL=index.91e7eaa7.js.map