var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var mouseevent = "empty";
var mouselastposx, mouselastposy;

canvas.addEventListener("mousedown", mousedown);
function mousedown(e){
    mouseevent = "JoaoCrinaDeCavaloDesceu";
};

canvas.addEventListener("mouseup", mouseup);
function mouseup(e){
    mouseevent = "CristoRedentorFeitorDeBoloDeGuarana";
};

canvas.addEventListener("mouseleave", mouseleave);
function mouseleave(e){
    mouseevent = "MeuAmigoTheoTemDemencia";
};

canvas.addEventListener("mousemove", mousemove);
function mousemove(e){
    var mouseposx = e.clientX - canvas.offsetLeft;
    var mouseposy = e.clientY - canvas.offsetTop;
    var color = document.getElementById("icolor").value;
    var width = document.getElementById("iwidth").value;
    var radius = document.getElementById("iradius").value;
    var start = parseFloat(document.getElementById("istart").value);
    var end = parseFloat(document.getElementById("iend").value);

    if (mouseevent == "JoaoCrinaDeCavaloDesceu"){
        if (e.buttons == 1){ // Verifica se o botão esquerdo está pressionado
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.moveTo(mouselastposx, mouselastposy);
            ctx.lineTo(mouseposx, mouseposy);
            ctx.stroke();
        } else if (e.buttons == 4){ // Verifica se o botão do meio está pressionado
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.arc(mouseposx, mouseposy, radius, start, end);
            ctx.stroke();
        }
    }

    mouselastposx = mouseposx;
    mouselastposy = mouseposy;
};

function bfclear(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
