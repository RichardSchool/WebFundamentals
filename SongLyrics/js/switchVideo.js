var index = 0;
function switchVideo(){
let element = document.getElementById("videoembed");
let code = [
`<iframe width="806" height="453" float="middle" src="https://www.youtube.com/embed/dgha9S39Y6M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser needs to support inline frames inorder of this video to load.</iframe>`,
`<video width="806" height="453" float="middle" controls><source src="assets/video.mp4" type="video/mp4">Your browser does not support the video tag.</video>`
];

if(index == 0){
  index = 1;
return element.innerHTML = `${code[1]}`;

}
if(index == 1){
index = 0;
 return element.innerHTML = `${code[0]}`;
}
}
