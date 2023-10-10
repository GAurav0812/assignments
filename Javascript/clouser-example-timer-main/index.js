function counter(){
    var count = 0;
    return function(){
        count++;
        return count;
    }
}
var player1Timer = counter();
var player2Timer = counter();
var player1_interval;
var player2_interval;
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');

function player1CounterStart(){
    player1_interval = setInterval(() => {
        document.getElementById('counter1').innerHTML = player1Timer()
    
    }, 1000);
    player1.innerHTML = 'Stop 1';
    player1.removeEventListener('click',player1CounterStart);
    player1.addEventListener('click',()=>{clearInterval(player1_interval)})

}
function player2CounterStart(){
    player2_interval = setInterval(() => {
        document.getElementById('counter2').innerHTML = player2Timer()
    }, 1000);
    player2.innerHTML = 'Stop 2';
    player2.removeEventListener('click',player2CounterStart);
    player2.addEventListener('click',()=>{clearInterval(player2_interval)})
}
player1.addEventListener('click',player1CounterStart)
player2.addEventListener('click',player2CounterStart)

