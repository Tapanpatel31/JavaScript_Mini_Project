let box = document.getElementById('box');
let x = 0;
let y = 0;
let movement = 10;

document.addEventListener('keydown',function(e){
    box.textContent = '😨';
    box.style.background = 'tomato';
})

document.addEventListener('keyup',function(e){
    box.textContent = '😊';
    box.style.background = 'lightblue';
})

document.addEventListener('keydown',function(e){
    if(e.key.startsWith('Arrow'))
        {
                switch (e.key) {
                    case "ArrowUp":
                        y -= movement
                        break;
                    case "ArrowDown":
                        y += movement
                        break;
                    case "ArrowLeft":
                        x -= movement
                        break;
                    case "ArrowRight":
                        x += movement
                        break;  
                }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
        }
})