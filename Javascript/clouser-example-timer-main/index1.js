function counter(){
    var c = 0;
    return function(flag){
        if(flag){
            c=1;
        }
        else{
            c++;
        }
        return c;
    }
}
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var p1Counter = counter();
var p2Counter = counter();
var p1Interval;
var p2Interval;
function stop1(){clearInterval(p1Interval);}
function stop2(){clearInterval(p2Interval);}
function startCounter1(flag){
    p1Interval = setInterval(()=>{
        if(flag){
            document.getElementById('counter1').innerHTML= p1Counter(flag);
            flag= false;
        }
        else{
            document.getElementById('counter1').innerHTML= p1Counter();
        }
     },1000);
     player1.innerHTML= 'Stop 1';
     player1.removeEventListener('click',startCounter1);
     player1.addEventListener('click',()=>{clearInterval(p1Interval);})
}
function startCounter2(flag){
    p2Interval = setInterval(()=>{
        if(flag){
            document.getElementById('counter2').innerHTML= p2Counter(flag);
            flag = false;
        }
        else{
            document.getElementById('counter2').innerHTML= p2Counter();
        }
        
     },1000);
     player2.innerHTML= 'Stop 2';
     player2.removeEventListener('click',startCounter2);
     player2.addEventListener('click',()=>{clearInterval(p2Interval);})
}
 
player1.addEventListener('click',startCounter1)
player2.addEventListener('click',startCounter2)

/////////////// this is the reset part
function reset(){
        stop1();
        stop2();
    document.getElementById('counter1').innerHTML = '0';
    document.getElementById('counter2').innerHTML = '0';
    player1.innerHTML= 'Start 1';
    player2.innerHTML= 'Start 2';
    player2.removeEventListener('click',stop2);
    player1.removeEventListener('click',stop1);
    player1.addEventListener('click',startCounter1,true)
    player2.addEventListener('click',startCounter2, true)
}
document.getElementById('reset').addEventListener('click',reset);