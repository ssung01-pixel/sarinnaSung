import sarinnaSung from "../src/sarinnaSung.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="py-40 px-72">
        <p className="font-bold text-3xl pb-10">Hi, I'm Sarinna.</p>

        <p className="pb-10">
          I'm currently working for{" "}
          <a
            target="_blank"
            href="https://www.neweratech.com/us/"
            rel="noreferrer"
            style={{ color: "royalblue" }}
          >
            New Era Technology
          </a>{" "}
          as a Software Engineer and am under contract with Liberty Mutual. I
          work on building features and improving efficiency in the Crest Center
          Section to provide Safeco and Liberty Mutual customer service agents
          with information about customers' home and auto policies. Apart from
          coding, our team also focuses on creating threat models, conducting
          spikes, developing Datadog dashboards, and collaborating to enhance
          our team's efficiency.
          <p>
            As a Software Engineer at New Era Technology, my Computer Science
            and Statistics foundation from Boston University is critical in
            developing innovative software solutions. Agile methodologies guide
            our team's approach, ensuring adaptability and efficiency in our
            projects. Bridging my academic knowledge with professional
            expertise, I excel in strategic problem-solving and Microsoft Excel.
            These competencies, honed through my past role as a Data Architect
            and experience in project management, drive the success of our
            team's endeavors at New Era.
          </p>
        </p>
        <p className="pb-10">
          I have a strong interest in full-stack development. Along with my
          colleagues, I work to develop microfrontend applications using tools
          like Javascript, React, Node.js, GraphQl and Apollo GraphQL
        </p>
        <p className="pb-10">
          {/* <label>
            Feel free to check out a copy of my most up-to-date resume{" "}
            <a className="text-blue" href="/">
              here
            </a>
            .
          </label> */}
          My hobbies range from the adrenaline rush of weightlifting and rock
          climbing to the thrill of exploring new destinations. I savor diverse
          culinary experiences, revel in the world of music, and express my
          creativity through makeup. Additionally, I have a keen passion for
          collecting unique dinnerware and mugs, each piece adding a story to my
          collection.
          <p>
            I love to learn about anything and everything so please reach out!
          </p>
        </p>
        <p className="pb-10 pl-20">
          <img src={sarinnaSung} alt="sarinnaSung" />
        </p>
      </div>
    </div>
  );
};
export default Home;
