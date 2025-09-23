//function for when button pressed
function buttonPress(){
    //go through numbers 1-100
    for(i = 1; i < 101; i++){
        //string to store if it is fizz, buzz, or neither
        let text=''
        //see if it is fizz, buzz, or neither
        if ((i % 5 == 0)&&(i % 3 == 0)){
            text = "FizzBuzz";
        } else if(i % 5 == 0){
            text = "Buzz";
        } else if(i % 3 == 0){
            text = "Fizz";
        }else {
            text = i;
        }

        // create li in the ul
        const parent = document.getElementById("list");
        let answer = document.createElement('li');
        //add answer to the list
        answer.innerHTML = text;
        parent.appendChild(answer);
    }
}

//set button 
const btn = document.querySelector("button");
//when button pressed do function
btn.addEventListener("click", buttonPress);