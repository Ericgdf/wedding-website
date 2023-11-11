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
            origin: { x: 0, y:0.7 },
            colors: colors,
            zIndex: 2500,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1, y:0.7 },
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
          <div className="parent_name_container">
            <p className="parent left">Marynoel et Jacques Séval</p>
            <p className="parent right">Dominique et Luc Egnell</p>
          </div>
        </div>
        <img
          className="home_img"
          src={arbreImg}
          alt="Théo et Hortense tienne un arbre"
          id="RSVP"
        />
      </div>
      <p className="wedding_date"> vous invitent à leur mariage le</p>
      <p className="wedding_date_number"> 10 Mai 2024</p>
      <a href="https://forms.gle/weB1wzceaKwbr8t98" target="_blank">
        <button>RSVP avant le 20 Janvier</button>
      </a>
      <p className="text_welcome_section">
      Nous serions heureux de partager ce moment important avec vous. Ici, vous trouverez quelques informations pour vous joindre à notre cérémonie. Nous sommes impatients de vous y retrouver. 
      </p>
    </div>
  );
};

export default Welcome_section;
