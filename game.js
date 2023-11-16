// Iteration 2: Generate 2 random number and display it on the screen

let number1box = document.getElementById('number1')
let number2box = document.getElementById('number2')

let num1 = Math.round(Math.random()*100)
console.log(num1)

let num2 = Math.round(Math.random()*100)
console.log(num2)

number1box.innerText=num1
number2box.innerText=num2


let score = 0

// Iteration 3: Make the options button functional

let gt = document.getElementById('greater-than');
let lt = document.getElementById('lesser-than');
let et = document.getElementById('equal-to');


gt.onclick=function(){
    if(num1>num2){
        score++
        reset(timerId);
        
num1=Math.round(Math.random()*100)
num2=Math.round(Math.random()*100)

number1box.innerText=num1
number2box.innerText=num2
    }
    
    else{
        location.href='./gameover.html'
    }



}

et.onclick=function(){
    if(num1==num2){
        score++
        reset(timerId);

num1=Math.round(Math.random()*100)
num2=Math.round(Math.random()*100)

number1box.innerText=num1
number2box.innerText=num2
    }

    else{
        location.href='./gameover.html'
    }


}


lt.onclick=function(){
    if(num1<num2){
        score++
        reset(timerId);

num1=Math.round(Math.random()*100)
num2=Math.round(Math.random()*100)

number1box.innerText=num1
number2box.innerText=num2
       
    }
    else{
        location.href='./gameover.html'
    }


// num1=Math.round(Math.random()*100)
// num2=Math.round(Math.random()*100)

// number1box.innerText=num1
// number2box.innerText=num2
}


// Iteration 4: Build a timer for the game

var time = 5;

let timer = document.getElementById('timer')

var timerId;

function showTimer(){
    time = 5;
    timer.innerText = time;
    timerId = setInterval(()=>{
        time--
        if(time==0){
            location.href='./gameover.html'
        }

        timer.innerText=time;
    },1000);

        localStorage.setItem('score',score)
    
}

function reset(timerId){
    clearInterval(timerId)
    showTimer();
}

showTimer();