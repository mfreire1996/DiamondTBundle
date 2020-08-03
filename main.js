// function animationImage(resize) {
//     document.body.style.background = color;
// }

var textWrapper = document.querySelector('#title-anime');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#title-anime .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '#title-anime',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// var favAnime = ["dragon ball", "naruto", "bleach", "black clover"];
// favAnime.push("Jojo");
// var text = " ";
// var i;
// for (i = 0; i < favAnime.length; i++) {
//     text += favAnime[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// var dragonBallFigure = 90;
// var narutoFigure = 50;
// var bleachFigure = 70;

// var myWallet = 300;

// function buyFigure(){
//     myWallet = myWallet - dragonBallFigure;
//     console.log(myWallet);
// }

// function buyFigure2(){
//     myWallet = myWallet - narutoFigure;
//     console.log(myWallet);
// }

// function buyFigure3(){
//     myWallet = myWallet - bleachFigure;
//     console.log(myWallet);
// }

// var animeList = [buyFigure, buyFigure2, buyFigure3, buyFigure2, buyFigure3]
// function buyingStuff(aList){
//     for(i=0, num=aList.length; i<num; i++){
//         aList[i]();
//     }
// }
// buyingStuff(animeList);