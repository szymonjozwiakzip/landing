import "./App.css";
import React, { useEffect } from "react";
import profilepic from "./assets/profilepic.jpg";
import cv from "./assets/cv.pdf";
import github from "./assets/github.svg";
import linkedin from "./assets/LinkedIn.svg";
import linktree from "./assets/linktree.svg";
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

      <div id="o-mnie" className="interactive-text"></div>

      {showOtherSections && (
        <div className="other-sections animate__animated animate__fadeInUp">
          <div className="about">
            <div class="img-hover-zoom">
              <img className="profilepic" src={profilepic} alt="portret" />
            </div>
            <div className="about-text">
              <p>
                Cześć, jestem Szymon,<br></br>informatyką interesuję się od
                gimnazjum, które zakończyłem z tytułem laureata z konkursu
                przedmiotowego z informatyki. Aktualnie jestem studentem
                drugiego roku Informatyki na UAM w Poznaniu. Dodatkowo prowadzę
                kursy programowania dla dzieci i młodzieży z kilku języków i
                środowisk (głównie JS, HTML, CSS, C++, Python). Jestem osobą
                otwartą i chętną do działania. Prywatnie miłośnik podróży,
                koszykówki i Hackathonów. Swoją przyszłośc wiążę z Web
                Developementem.
              </p>
            </div>
            <div className="about-cv">
              <div className="cv-container">
                <object
                  data={cv}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>
                    Twoja przeglądarka nie obsługuje plików PDF. Możesz pobrać
                    plik <a href={cv}>tutaj</a>.
                  </p>
                </object>
                <button>
                  <a href={cv} download="cv.pdf">
                    Pobierz CV
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="social-media-item">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" class="icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" class="icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a
                href="https://linktr.ee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linktree} alt="Linktree" class="icon" />
              </a>
            </div>
          </div>
        </div>
      )}
      {showOtherSections && (
        <div
          className="other-sections2 wow animate__animated animate__slideInLeft"
          data-wow-delat="2.5s"
        >
          <div className="projects">Moje Projekty</div>
          <div className="projects-container">
            <div className="project">
              <div className="project-images">
                {/* Zdjęcia projektu */}
                <img src={github} alt="Zdjęcie projektu" />
                <img src={github} alt="Zdjęcie projektu" />
                <img src={github} alt="Zdjęcie projektu" />
                <img src={github} alt="Zdjęcie projektu" />
              </div>
              <p className="project-description">Krótki opis projektu 1</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
