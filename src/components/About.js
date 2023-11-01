import React from "react";

function About({ imageSrc, aboutText }) {
  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
