// This is to handle the theme toggle functionality for a web page.

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

function handleThemeChange() {
  body.classList.toggle("dark-theme");
}

toggleButton.addEventListener("click", handleThemeChange);

// This is to hide the 'back-to-top' button when the page is at the top and bottom.

const scrollBtn = document.getElementById("bottom-right-button");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Current vertical scroll position starting at 0
  const footerTop = footer.offsetTop; // Distance to the top position of the footer relative to the document
  const windowHeight = window.innerHeight; // Height of the viewport

  //   Show button if scrolled down and not at footer
  //   Checks of 2 conditions:
  //   1. scrolled down more than 300px
  //   2. scrolled down less than the footer's top position minus a buffer
  //   If both are met, that means the button should be visible.
  //   Else, it should be hidden.

  if (scrollY > 300 && scrollY + windowHeight < footerTop) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});
