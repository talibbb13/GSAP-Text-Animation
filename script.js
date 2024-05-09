var h1 = document.querySelector(".container h1");
function breakingLetters() {
    var clutter = "";
    var firstHalfLetters = h1.textContent.split("").length / 2;

  h1.textContent.split("").forEach(function (letter, ind) {
    if (ind < firstHalfLetters) {
        clutter += `<span class=first-half-letter>${letter}</span>`;
    } else {
        clutter += `<span class=second-half-letter>${letter}</span>`;
    }
  });
    h1.innerHTML = clutter
}

function animateText() {
    gsap.from(".container h1 .first-half-letter", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
    gsap.from(".container h1 .second-half-letter", {
        y: 100,
        opacity: 0,
        duration: .5,
        delay: .5,
        stagger: -.1,
    });
}

breakingLetters();
animateText();