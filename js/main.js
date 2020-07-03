"use strict"

let btn = document.getElementById('switch')
let body = document.getElementsByTagName('body')

btn.onclick = function() {
    body[0].classList.toggle('dark')
}
