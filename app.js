(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


     buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(screen.value === "Invalid input" || screen.value === "Please enter")
                screen.value = "";
            let value = e.target.dataset.num;
            screen.value += value;
        })
     });
    
     equal.addEventListener('click',function(e){
        console.log(screen.value)

        if(screen.value === ""){
            screen.value = "Please enter";
        }
        else{
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Invalid input";
            }
        }
     })

     clear.addEventListener('click',function(e){
        screen.value = "";
     })
    
})();