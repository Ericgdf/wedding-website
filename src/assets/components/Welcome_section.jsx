import React, { useEffect } from "react";
import arbreImg from "../img/mariage_arbre.jpg";
import "../components/welcome_section.css";
import confetti from "canvas-confetti";

const Welcome_section = () => {
  const size = window.innerWidth;
  console.log(size);

  useEffect(() => {
    const size = window.innerWidth;
    var end = Date.now() + 5 * 1000;

    var colors = ["#e4c7b4", "#fcf7ee"];

    size > 600
      ? (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
            zIndex: 2500,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
            zIndex: 2500,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })()
      : (function frame() {
          confetti({
            spread: 180,
            particleCount: 3,
            origin: { y: -0.1 },
            startVelocity: -15,
            colors: colors,
            zIndex: 2500,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();
  }, []);

  return (
    <div className="welcome_background">
      <div className="img_container">
        <div className="overlay">
          <p className="welcome_text">Hortense & Théo </p>
        </div>
        <img
          className="home_img"
          src={arbreImg}
          alt="Théo et Hortense tienne un arbre"
          id="RSVP"
        />
      </div>
      <p className="wedding_date">Vous invitent à leur mariage le</p>
      <p className="wedding_date_number"> 10 et 11 Mai 2024</p>
      <a href="https://forms.gle/weB1wzceaKwbr8t98" target="_blank">
        <button>RSVP avant le 3 Janvier</button>
      </a>
      <p className="text_welcome_section">
        Nous sommes ravis de partager ce moment spécial avec vous. Ici, vous
        trouverez toutes les informations dont vous avez besoin pour vous
        joindre à notre célébration. Nous sommes impatients de créer des
        souvenirs inoubliables ensemble. Merci pour votre amour et votre
        soutien.
      </p>
    </div>
  );
};

export default Welcome_section;
