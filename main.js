var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext("2d");


var TicTacToe = function(){
    var fieldWidth = 3;
    //rendering

    /*
    -1 x
    1  o
    var data = [
        -1,1,0,
        1,0,1,
        0,1,0
    ];*/
    render(data){
      for (i=0; i < data.length; i++){
        for (j=0; j < data[0].length; j++){
          ctx.strokeRect();
          
        }
      }
    }

    //user input
    var currentUser = -1;
    var placeable = false;

    canvas.addEventListener("click",function(e){
      var x = e.clientX-window.scrollX+this.offsetLeft;
      var y = e.clientY-window.scrollY+this.offsetTop;
      var xid = Math.floor(x/fieldWidth);
      var yid = Math.floor(y/fieldWidth);
      chooseAction(xid,yid);
    });

    var chooseAction = function(xid,yid){
      if(placeable)place(xid,yid,currentUser);
    };

    //mechanics

    var data = [];

    var place = function(xid,yid,user){
      
    }
}


/*

<div id="parent">
    <div id="cell">O</div>
    <div id="cell">X</div>
    <div id="cell">-</div>
    <div id="cell"></div>
</div>

document.getElementById("parent").children[5];
*/



var a = "asdfasd";

