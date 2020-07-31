document.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementsByTagName('button');
    button[0].addEventListener('click', function(){
        let ripple1 = document.createElement('div');
        let x = event.clientX - button[0].offsetLeft;
        let y = event.clientY - button[0].offsetTop;
        ripple1.classList.add('ripple_1');
        ripple1.style.left = x + 'px';
        ripple1.style.top = y + 'px';
        button[0].appendChild(ripple1);
    })
})