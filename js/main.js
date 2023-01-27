window.onload = init;

function init() {// Get the button
    let mybutton = document.getElementById("myBtn");
    let content = document.getElementById("content");
    let model = document.getElementById("model");


    // When the user scrolls down 20px from the top of the document, show the button
    content.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (content.scrollTop > 4500) {
            model.style.opacity = 0;
            model.style.filter = "blur(4px)"
            mybutton.style.bottom = "1%";
            //console.log("show");
        }
        else if (content.scrollTop > 20 && content.scrollTop < 4500) {
            model.style.opacity = 1;
            model.style.filter = "blur(4px)"
            mybutton.style.bottom = "1%";
            //console.log("show");
        } else {
            model.style.opacity = 1;
            model.style.filter = "blur(0px)"
            mybutton.style.bottom = "-5%";
            //console.log("hide");
        }
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    content.scrollTo({ top: 0, behavior: 'smooth' });
}

function slideOne() {
    content.scrollTo({ top: 1000, behavior: 'smooth' });
    console.log("done");
}

function slideTwo() {
    content.scrollTo({ top: 2000, behavior: 'smooth' });
    console.log("done");
}