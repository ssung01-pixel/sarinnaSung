import React from "react";
import Card from "./card";
const Projects = () => {
  return (
    <div className="py-40 flex flex-col">
      <Card
        title="Card Title"
        body="This is the body of the card. It contains some text and provides information about the card."
        link="https://github.com/ssung01-pixel/CS411project"
      />

      <Card
        title="Card Title"
        body="This is the body of the card. It contains some text and provides information about the card."
        link="https://github.com/ssung01-pixel/BCNC---Asian-Impact-Equity"
      />

      <Card
        title="Card Title"
        body="This is the body of the card. It contains some text and provides information about the card."
        link="https://github.com/ssung01-pixel/CS411project"
      />
    </div>
  );
};

export default Projects;
