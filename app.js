alert("hello madridesta")

var real = prompt("how old are u")
if(real > 18 ){alert("welcom")}
else if (real < 18){alert("get out")}
else{alert("plese answer")}

var real = prompt('how old are u ');
var message= '';
console.log(message);
if(real > 18 && real < 30 ){message = 'welcome young fan';}
else if(real < 18 && real > 12) {message = 'welcome kid';}
else if(real > 30 && real < 75 ){message = 'thanks for support';}
else{
    alert('Welcome ');
}
document.write('<h2>' + message + '</h2>'); 

var match = prompt('wolud u like to bay a ticket or watch online');
while(match !== 'bay a ticket' && match !== "watch online"){
match = prompt('please make a choise')}


var ticket = prompt('how many matches');
var imege = ' ';
console.log(ticket)
for(var i = 0; i < ticket; i++){
if(match == 'bay a ticket'){
    imege = imege + '<img src="https://i.pinimg.com/originals/7f/da/84/7fda84bea5f3dac77bc7e0c1f3c78aa0.jpg" >';
    console.log(imege);
    
}
else if(match == 'watch online'){
    imege = imege + '<img src="https://assets.pinshape.com/uploads/image/file/278790/small_watch-this-is-us-season-4-episode-10-online-3d-printing-278790.jpg">'
    
}


}
document.write(imege);

function calcolut(a,x){
    alert('calcolut');

    return a * x  
   
}
var cal=window.prompt('enter the first number')
var cal2=window.prompt('enter the secand number')
var calcolut1= calcolut(cal , cal2)
document.write(calcolut1) 



function greeting(message){
    alert(message);
 }
 greeting('welcome to my webPage')





    





