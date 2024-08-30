let x = document.getElementById('button').outerHTML
let s =x
// document.write()
// document.write(x) 
function forloop(s) {
    
    for (let i =0; i<4; i++){
    document.write(s);
}
}

function gg(){

}
x.addEventListener('click' , forloop(s));


