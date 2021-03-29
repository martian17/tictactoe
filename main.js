var TicTacToe = function(canvas,fieldWidth){
    var width = canvas.width;
    var height = canvas.height;
    var ctx = canvas.getContext("2d");
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
          ctx.strokeRect(20+i*50, 20+j*50, 50, 50);

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

    var initiateData = function(){

    }

    var place = function(xid,yid,user){

    }
};


var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 500;
canvas.height = 500;
var ttt = new TicTacToe(canvas,3);
