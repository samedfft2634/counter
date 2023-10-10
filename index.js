let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let currentEl = document.getElementById("current-temp")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " "
    currentEl.textContent += countStr
    countEl.textContent = 0
    currentEl.innerText = ""
    currentEl.innerText = count
    count = 0
}