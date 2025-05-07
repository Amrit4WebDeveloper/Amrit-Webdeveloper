const sentences = [
    "Web Developer Amrit",
    "Building cool websites",
    "Let's code something great!"
  ];
  
  let index = 0;
  let charIndex = 0;
  const element = document.getElementById("typewriter");
  
  function typeSentence() {
    if (charIndex < sentences[index].length) {
      element.textContent += sentences[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeSentence, 100); // Typing speed
    } else {
      setTimeout(eraseSentence, 2000); // Pause before erasing
    }
  }
  
  function eraseSentence() {
    if (charIndex > 0) {
      element.textContent = sentences[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseSentence, 50); // Erase speed
    } else {
      index = (index + 1) % sentences.length;
      setTimeout(typeSentence, 500); // Pause before typing next
    }
  }
  
  typeSentence(); // Start typing
