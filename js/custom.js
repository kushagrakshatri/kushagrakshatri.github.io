const aboutTitle = document.getElementById('about-title');
const phrases = ['Freelance DA', 'Editor', 'Independent Filmmaker'];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;

function type() {
  if (currentLetterIndex < phrases[currentPhraseIndex].length) {
    aboutTitle.textContent += phrases[currentPhraseIndex].charAt(currentLetterIndex);
    currentLetterIndex++;
    setTimeout(type, 150); // Adjust the typing speed (100ms)
  } else {
    currentPhraseIndex++;

    if (currentPhraseIndex < phrases.length) {
      currentLetterIndex = 0;
      aboutTitle.textContent = ""
      setTimeout(type, 1000); // Adjust the delay between phrases (500ms)
    }else{
        // Check if the user is on the 'About' section
      if (window.location.pathname.includes("about")) {
        return;
      }
      // Start typing from the first phrase
      currentPhraseIndex = 0;
      currentLetterIndex = 0;
      aboutTitle.textContent = "";
      setTimeout(type, 500);
    }
  }
}

type();