var clickamount=-1
var btn=document.getElementById("btn");
clicked()
function clicked(){
    clickamount+=1;
    btn.innerHTML=clickamount.toString();
}