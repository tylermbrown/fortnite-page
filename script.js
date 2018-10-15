/*
*******************************
*******************************
    Show the youtube video
    expand the grid
*******************************
*******************************
*/


var image1 = document.querySelector(".image-1");
var isExpanded = false;
var videoPlayer = document.querySelector(".videoplayer");

image1.addEventListener("click", function(){

    // Add the expanded class if not expanded
    if(isExpanded === false) {
        this.classList.add("expanded");
        videoPlayer.classList.add("videoplayer--active");
        videoPlayer.addEventListener("click",function(){
            this.classList.remove("videoplayer--active");
        });
        isExpanded = true;
    }

    // Remove the expanded class if expanded
    else {
        this.classList.remove("expanded");
        isExpanded = false;
    }

});

/*
*******************************
*******************************
    Adding the toggle for the
    logo to grow and shrink
*******************************
*******************************
*/

var logoExpanded = false;
var logo = document.querySelector(".logo");

logo.addEventListener("click",function(){

    if(!logoExpanded) {
        this.classList.add("logo--expanded");
        logoExpanded = true;
    }

    else {
        this.classList.remove("logo--expanded");
        logoExpanded = false;
    }

});