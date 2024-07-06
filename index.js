// document.getElementById("count-el").innerText= 10

let countEL = document.getElementById("count-el")

let Entries = document.getElementById("entry-el")


let count =0
function increment(){
    count += 1
    countEL.innerText = count
}

function decrease(){
    count-=1;
    countEL.innerText = count
}

function save(){
    
    let dashSeparator = count + '-'
    Entries.innerText += dashSeparator
    countEL.innerText = 0
    count = 0
    
}
