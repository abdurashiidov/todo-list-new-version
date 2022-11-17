const input = document.querySelector(".input")
const input2 = document.querySelector(".input2")
const btn = document.querySelector(".btn")
const list = document.querySelector(".list")

let newArr = [];

btn.addEventListener("click", ()=>{
    const li = document.createElement("li")
    const span = document.createElement("span")

    list.appendChild(span)
    list.appendChild(li)
    
    li.textContent = input.value
    li.classList = "lii"

    let neww = Date.now()
    span.textContent = neww

    newArr.push(input.value)

    input.value = ""
})
