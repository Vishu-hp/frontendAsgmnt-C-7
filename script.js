let button = document.getElementById("button")
let para = document.getElementById("para")

button.addEventListener("click", () => {
    if(para.style.display == 'block'){
        para.style.display = 'none'
    }
    else{
        para.style.display = 'block'
    }
})