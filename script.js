let count = 0;
const buttons = document.querySelectorAll('button')
const counterValue = document.getElementById('counterValue')

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const id = e.target.id

        if(id === 'decrease'){
            count --;
        }else if(id === 'increase'){
            count ++;
        }else count = 0;

        if(count < 0){
            counterValue.style.color = 'red'
        }else if(count > 0){
            counterValue.style.color = 'green'
        }else{
            counterValue.style.color = 'black'
        }

        counterValue.innerText = count;
    })
})