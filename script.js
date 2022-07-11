console.clear()
const showMoreBtn = document.getElementById("show-more");
const logoButton = document.querySelector(".youtube-logo")
console.log(logoButton);


function  menuBtnFun() {
    const sideBar = document.getElementById("sideBar")
 const menuBtn = document.getElementById("menu-btn").addEventListener("click", () => {
// console.log(sideBar);
sideBar.style.visibility = "visible"
    // if( sideBar.style.visibility = "hidden")
  });
}; 
menuBtnFun()

showMoreBtn.addEventListener("click", (e) => {});
logoButton.addEventListener("click", showVideos());
//  fetch("AIzaSyCQBXBxNgyjb5HbZHevzitqok5imztsbpo")

function showVideos(){
   
}
// function allVideos(videoSrc){
//     const videoCard = document.querySelector("#video-card")
//     const video = document.createElement('video')
//     video.src = videoSrc
//     video.style.width = '200px'
//     video.style.height = '200px'
//      videoCard.appendChild(video)
//     console.log(videoCard)
//   }

