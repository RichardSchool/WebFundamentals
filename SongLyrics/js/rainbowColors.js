var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var index = 0;
var element = getElementById("rainbowheading")
function changeColor(){
element.style.color = colors[index];
index++;
if(index>colors.length){
index = 0;
}
});
}

var changeMeColor = setInterval(()=>{
changeColor();
}, 1000);
