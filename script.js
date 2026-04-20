const text = "Olivera Tancheva";
const typingElement = document.getElementById("typing-name");

let index = 0;

function typeLetter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 100);
  }
}

window.onload = function () {
  typeLetter();
};
