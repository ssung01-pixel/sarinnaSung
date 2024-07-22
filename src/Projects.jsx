import React from "react";
import Card from "./card";
const Projects = () => {
  return (
    <div className="py-40 flex flex-col">
      <Card
        title="Munchies"
        body="Developed a web application that allows users to select their preferred restaurants and receive recommended activities in the surrounding area by utilizing Yelp Restaurant API and Decathlon API. Created wireframes, planned use cases, and conducted user testing to ensure a seamless user experience"
        link="https://github.com/ssung01-pixel/CS411project"
      />

      <Card
        title="Asian Impact Equity"
        body="This is the body of the card. It contains some text and provides information about the card."
        link="https://github.com/ssung01-pixel/BCNC---Asian-Impact-Equity"
      />

      <Card
        title="Mini Facebook"
        body="This is the body of the card. It contains some text and provides information about the card."
        link="https://github.com/ssung01-pixel/cs108-examples"
      />
    </div>
  );
};

export default Projects;
