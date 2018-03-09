
function startAnimate(){
    let red = document.getElementById("red");
    red.classList.add('removed');
    setTimeout(function(){
        red.remove();
    },3000);
}
