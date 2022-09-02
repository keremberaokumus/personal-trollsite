import React from "react";
import "../styles/About.css";
import BannerImage from "../assets/about.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Kerem</h1>
        <p>
          Kerem Bera Okumuş is a 15-year-old teenager who enjoys helping old
          ladies across the road, listening to music and golf. He is kind and
          friendly, but can also be very quick-tempered and a bit impatient. He
          is a Turkish Muslim. He is currently at school. Physically, Kerem is
          in good shape. He is average for his age with white skin, brown hair
          and green eyes. He lives in a middle class neighbourhood. Kerem goes
          to Pertevniyal Highschool, where his favourite subjects are chemistry
          and P.E. He loves his teacher Mr Remzi but hates Ms Idil whose
          interests include speaking in a really annoying voice. Kerem's best
          friend is a teenager Harun Efe Şahbaz. They are inseparable. He also
          hangs around with Kayahan Şahap and Mehmet Kağan Tutkun. They enjoy
          hanging together.
        </p>
      </div>
    </div>
  );
}

export default About;
