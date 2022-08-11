canvas = document.getElementById("myCanvas");
cntx = canvas.getContext("2d");

MouseEvent = "";
var last_pos_x, last_pos_y;
var last_position_of_x,last_position_of_y;
color = "black";
cntx.strokeStyle = color;
cntx.lineWidth = 2;

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    MouseEvent = "mouseup";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    MouseEvent = "mouseleave";

}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    MouseEvent = "mousedown";

}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mousedown") {
        cntx.beginPath();
        cntx.strokeStyle = color;
        cntx.lineWidth = 2;
        cntx.moveTo(last_pos_x,last_pos_y);
        cntx.lineTo(current_pos_x,current_pos_y);
        cntx.stroke(); 
    }
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
} 
var width=screen.width;
    canvas_width=width-70;
    canvas_height=screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width=canvas_width;
        document.getElementById("myCanvas").height=canvas_height;
    }

    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e)
    {
        //Addictonal Activity start

        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }



    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;


        cntx.beginPath();


        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        cntx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        cntx.lineTo(current_position_of_x, current_position_of_y);
        cntx.stroke();


        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
