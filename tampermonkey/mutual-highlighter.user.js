// ==UserScript==
// @name         Mutual Friends Highlighter
// @namespace    https://pgattic.github.io
// @version      1
// @description  Highlights people with specified mutual friends or more
// @author       pgattic, bauchdj
// @match        https://www.facebook.com/*/friends_current_city
// @icon         https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico
// @grant        none
// ==/UserScript==

(function() {
    var h=prompt("Mutual Friends Threshold?")||Infinity;
    setInterval(()=>{for(var i of Array.from(document.querySelectorAll('[class="'+document.querySelector('[role="banner"]').firstChild.firstChild.firstChild.classList.value+'"]')).filter(out=>out.innerText.contains("mutual friends"))){var t=i.innerText;if(Number(t.slice(0,t.length-14))>=h){i.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.background="#7b7"}}},300);
})();
