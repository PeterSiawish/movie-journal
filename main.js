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
  const footerTop = footer.offsetTop; // Distance to the top position of the footer
  const windowHeight = window.innerHeight; // Height of the viewport

  //   Show button if scrolled down and not at footer
  //   Checks of 2 conditions:
  //   1. scrolled down more than 300px
  //   2. scrolled down less than the footer's top position minus a buffer
  //   If both are met, that means the button should be visible since we are in the middle of the page.
  //   If not, it means we are either at the top or bottom of the page.

  if (scrollY > 300 && scrollY + windowHeight < footerTop) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

// The following code handles the modal functionality for reading reviews on a webpage.

const modal = document.getElementById("review-modal");
const modalText = document.getElementById("modal-review-text");
const modalClose = document.getElementById("modal-close");
const trailerLink = document.getElementById("modal-trailer-link");

document.querySelectorAll(".read-review-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const review = button.getAttribute("data-review");
    const trailer = button.dataset.trailer;

    modalText.textContent = review;
    trailerLink.href = trailer;
    trailerLink.style.display = trailer ? "inline-block" : "none";

    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside modal content

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
