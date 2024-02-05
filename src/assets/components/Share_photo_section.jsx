import { useState } from "react";
import pictureIcon from "../../assets/img/polaroid1.png";
import pictureIcon2 from "../../assets/img/polaroid2.png";
import "./share_photo_section.css";

const SharePhotoSection = () => {
  const [boutonIsOver, setBoutonIsOver] = useState(false);

  function handleBouton() {
    setBoutonIsOver(!boutonIsOver);
  }

  boutonIsOver ? console.log('oui') : console.log("non");

  return (
    <div className="partage_photo_section">
      <h2 className="section_title" id="share_photo">
        Partagez vos photos
      </h2>
      <p className="prez_photo_share">
        Vous trouverez ici, un dossier pour nous partager vos photo du mariage.
      </p>
      <div className="add_picture_container">
        <img className="main_picture" src={pictureIcon} alt="" />
        <img className={boutonIsOver ? "background_picture diag" : "background_picture straight"} src={pictureIcon2} alt="" />
      </div>
      <a
        href="https://forms.gle/9h9LPBe9R8HvL8LL7"
        target="_blank" rel="noreferrer"
      >
        <button
          className="add_picture_button"
          onMouseEnter={handleBouton}
          onMouseLeave={handleBouton}
        >
          Ajouter mes photos
        </button>
      </a>
    </div>
  );
};

export default SharePhotoSection;
