import "./App.css";
import React, { useEffect } from "react";
import profilepic from "./assets/profilepic.jpg";
import "animate.css";

function App() {
  const [lettersAdded, setLettersAdded] = React.useState(false);
  const [showOtherSections, setShowOtherSections] = React.useState(false);

  useEffect(() => {
    if (!lettersAdded) {
      typeWriter();
      setLettersAdded(true);
    }
  }, [lettersAdded]);

  function typeWriter() {
    const text = "Poznajmy się lepiej!"; // Twój tekst
    let index = 0;
    const nameContainer = document.querySelector(".interactive-text");

    function addNextLetter() {
      if (index < text.length) {
        const letter = text.charAt(index);
        // Sprawdź, czy litera już istnieje w kontenerze
        if (nameContainer.textContent.charAt(index) !== letter) {
          const letterSpan = document.createElement("span");
          letterSpan.textContent = letter;
          nameContainer.appendChild(letterSpan);
        }
        index++;
      } else {
        nameContainer.classList.remove("typing");
        clearInterval(intervalId); // Zatrzymaj interwał po dodaniu wszystkich liter
        setShowOtherSections(true);
      }
    }

    const intervalId = setInterval(addNextLetter, 150); // Czas opóźnienia między dodawaniem kolejnych liter
    nameContainer.classList.add("typing");
  }
  return (
    <div className="page-container">
      <header className="header">
        <div className="name-container">
          <span>Szymon Jóźwiak</span>
        </div>

        <nav className="nav-container">
          <a href="#o-mnie" className="nav-link">
            O mnie
          </a>
          <a href="#" className="nav-link">
            Projekty
          </a>
          <a href="#" className="nav-link">
            Kontakt
          </a>
        </nav>
      </header>

      <div className="interactive-text"></div>

      {showOtherSections && (
        <div
          id="o-mnie"
          className="other-sections animate__animated animate__fadeInUp"
        >
          <div className="about">
            <div class="img-hover-zoom">
              <img className="profilepic" src={profilepic} alt="portret" />
            </div>
            <div className="about-text">
              <p>
                Cześć, jestem Szymon,<br></br>informatyką interesuję się już od
                dobrych kilku lat.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
