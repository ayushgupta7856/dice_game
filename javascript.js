function play() {
    var x=Math.random();
    x=Math.floor(x*6)+1;
    var y=Math.random();
    y=Math.floor(y*6)+1;
    document.querySelector('.img1').innerHTML="<img src='images/dice"+x+".png'></img>";
    document.querySelector('.img2').innerHTML="<img src='images/dice"+y+".png'></img>";
    if(x==y){
        document.getElementsByClassName('heading')[0].textContent='Its A Draw';
    }
    if(x>y){
        document.getElementsByClassName('heading')[0].innerHTML='<img class="smile" src="images/smile.png"></img>  Player 1 Wins';
    }
    if(y>x){
        document.getElementsByClassName('heading')[0].innerHTML='Player 2 Wins  <img class="smile" src="images/smile.png"></img>';
    }
}