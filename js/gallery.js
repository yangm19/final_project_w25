// inspired by GreatStack on YouTube, with StackOverflow and GPT for issues with mouse wheel vs trackpad scrolling

// conferences (gallery1)
let scrollContainer = document.querySelector(".gallery1");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Handle scrolling with mouse wheel
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();

    if (evt.deltaY === 0) return; // Do nothing if no vertical scroll
    
    // Detect the direction of scrolling (up/down for vertical trackpad, left/right for horizontal)
    if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
        scrollContainer.scrollLeft += evt.deltaY; // Scroll horizontally using vertical scroll
    } else {
        scrollContainer.scrollLeft += evt.deltaX; // Handle horizontal scrolling with trackpad
    }
    
    scrollContainer.style.scrollBehavior = "auto";
});

// Scroll gallery to the right
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 300; // Adjust scroll distance here if needed
});

// Scroll gallery to the left
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 300; // Adjust scroll distance here if needed
});

// workshops (gallery2)
let scrollContainer2 = document.querySelector(".gallery2");
let backBtn2 = document.getElementById("backBtn2");
let nextBtn2 = document.getElementById("nextBtn2");

// Handle scrolling with mouse wheel
scrollContainer2.addEventListener("wheel", (evt) => {
    evt.preventDefault();

    if (evt.deltaY === 0) return; // Do nothing if no vertical scroll
    
    // Detect the direction of scrolling (up/down for vertical trackpad, left/right for horizontal)
    if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
        scrollContainer2.scrollLeft += evt.deltaY; // Scroll horizontally using vertical scroll
    } else {
        scrollContainer2.scrollLeft += evt.deltaX; // Handle horizontal scrolling with trackpad
    }
    
    scrollContainer2.style.scrollBehavior = "auto";
});

// Ditto for other right button
nextBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 300; // Adjust scroll distance here if needed
});

// Ditto for other left button
backBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 300; // Adjust scroll distance here if needed
});