import React from "react";
import "./program_section.css";

const Program_section = () => {
  return (
    <div className="program_section_background">
      <h2 className="section_title" id="program">
        Programme
      </h2>
      <div className="timeline_background">
        <div className="timeline_container">
          <div className="text_right">
            <div className="text">
              <p className="timeAndDate_text">
                Vendredi 10 mai <br />
                16h00 :
              </p>
              <p className="event_text">Cérémonie laïque au Château Bone</p>
            </div>
            <div className="ring"></div>
          </div>
          <div className="text_left">
            <div className="text">
              <p className="timeAndDate_text">
                Vendredi 10 mai <br />
                18h30 :
              </p>
              <p className="event_text">Cocktail dans le parc du Château</p>
            </div>
            <div className="ring"></div>
          </div>
        </div>

        <div className="line"></div>
        <div className="timeline_container">
          <div className="text_right">
            <div className="text">
              <p className="timeAndDate_text">
                Vendredi 10 mai <br />
                20h30 :
              </p>
              <p className="event_text">Dîner</p>
            </div>
            <div className="ring"></div>
          </div>
          <div className="text_left">
            <div className="text">
              <p className="timeAndDate_text">
                Vendredi 10 mai <br />
                23h30 :
              </p>
              <p className="event_text">
                Ouverture du bal par nos deux amoureux
              </p>
            </div>
            <div className="ring"></div>
          </div>
        </div>
        <div className="line"></div>
        <div className="timeline_container">
          <div className="text_right">
            <div className="text">
              <p className="timeAndDate_text">
                Samedi 11 Mai <br />
                6h00
              </p>
              <p className="event_text">Coucher des vikings</p>
            </div>
            <div className="ring"></div>
          </div>
          <div className="text_left">
            <div className="text">
              <p className="timeAndDate_text">
                Samedi 11 Mai <br />
                10h30 :
              </p>
              <p className="event_text">Brunch au Château</p>
            </div>
            <div className="ring"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program_section;
