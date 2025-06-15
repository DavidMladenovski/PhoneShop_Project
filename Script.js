  // Simulate loading time
  setTimeout(() => {
    // Fade out the spinner
    document.getElementById("spinner").style.opacity = "0";
    
    // Wait for fade-out animation, then hide spinner & show content
    setTimeout(() => {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("content").style.display = "block";

        // Fade in the content
        setTimeout(() => {
            document.getElementById("content").style.opacity = "1";
        }, 0);
    }, 1000); // Matches transition duration
}, 3000); // 3 seconds delay before fade-out starts

const hamMenu= document.querySelector('.burger-menu');
const offHamMenu= document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click',()=>{
hamMenu.classList.toggle('active');
offHamMenu.classList.toggle('active');
})