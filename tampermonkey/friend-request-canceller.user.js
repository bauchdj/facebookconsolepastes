// ==UserScript==
// @name         Friend Request Canceller
// @namespace    https://pgattic.github.io
// @version      1
// @description  Press the minus ("-") key to cancel the bottom friend request loaded in the list after clicking "View Sent Requests"
// @author       pgattic, bauchdj
// @match        https://www.facebook.com/friends/requests
// @icon         https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico
// @grant        none
// ==/UserScript==

document.addEventListener("keydown",e=>{
  if(e.key=="-"){
    document.querySelectorAll('[aria-label="Cancel Request"]')[document.querySelectorAll('[aria-label="Cancel Request"]').length-1].click()
  }
});
