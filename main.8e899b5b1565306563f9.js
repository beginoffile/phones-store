(()=>{var A={147:()=>{!function(A){var e=0,o=!1;function a(a,n){e++,2==a?(o=!0,A.documentElement.className+=" "+n):(A.documentElement.className+=" not"+n,4!=e||o||(A.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")?A.documentElement.className+=" svg":A.documentElement.className+=" notsvg png"))}var n=new Image;n.onload=n.onerror=function(){a(n.height,"jxl")},n.src="data:image/jxl;base64,/woIELASCAgQAFwASxLFgkWAHL0xqnCBCV0qDp901Te/5QM=";var r=new Image;r.onload=r.onerror=function(){a(r.height,"avif")},r.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";var t=new Image;t.onload=t.onerror=function(){a(t.height,"webp")},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var g=new Image;g.onload=g.onerror=function(){a(g.height,"jpx")},g.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAgAAAMC8BAABAAAAWgAAAMG8BAABAAAARgAAAAAAAAAkw91vA07+S7GFPXd2jckQV01QSE9UTwAZAMFxAAAAATAAoAAKAACgAAAQgCAIAAAEb/8AAQAAAQDCPwCAAAAAAAAAAAAAAAAAjkI/AIAAAAAAAAABIAA=";var i=new Image;i.onload=i.onerror=function(){a(i.height,"jp2")},i.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}(window.sandboxApi&&window.sandboxApi.parentWindow&&window.sandboxApi.parentWindow.document||document)}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return A[a](r,r.exports,o),r.exports}o.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return o.d(e,{a:e}),e},o.d=(A,e)=>{for(var a in e)o.o(e,a)&&!o.o(A,a)&&Object.defineProperty(A,a,{enumerable:!0,get:e[a]})},o.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),(()=>{"use strict";o(147);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(A){console.log("SW registered",A)})).catch((function(A){console.log("Sw Registration failed",A)}))}))})()})();