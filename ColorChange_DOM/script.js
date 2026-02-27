let buttons = document.querySelectorAll('button');
let body = document.querySelector('body');


buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        // console.log (e.target.id);
        // console.log(e);

        body.style.backgroundColor = e.target.id;
    })
})