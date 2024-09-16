const text = "It remembers every part of content, and make it";
let index = 0;
let MyText = document.getElementById("text");
function type() {
 MyText.textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(type, 100); 
  }
}

type();



 
