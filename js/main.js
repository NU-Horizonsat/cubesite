window.onload = init;

function init() {// Get the button
    let mybutton = document.getElementById("myBtn");
    let content = document.getElementById("content");


    // When the user scrolls down 20px from the top of the document, show the button
    content.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (content.scrollTop > 20) {
            mybutton.style.bottom = "1%";
            console.log("show");
        } else {
            mybutton.style.bottom = "-5%";
            console.log("hide");
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