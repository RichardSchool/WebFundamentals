var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var index = 0;
function changeColor(){
$('.rainbow').each(element=>{
element.style.color = color[index];
index++;
if(index>colors.length){
index = 0;
}
});
}

var changeMeColor = setInterval(()=>{
changeColor();
}, 1000);
