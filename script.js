var h1Text = document.querySelector("#firsth1").textContent;

var splittedText = h1Text.split("");

var clutter = "";

splittedText.forEach(function (elem) {
  clutter += `<span>${elem}</span>`;
});
