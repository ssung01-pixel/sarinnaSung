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
          as a software engineer, where I work on the customer service
          enviorment which allows customers service representivies console
          issues with customers.
        </p>
        <p className="pb-10">
          My interests lie in full stack software engineer. Along with my
          collegues I work to develop frontend applications using tools like
          React and Javascript for the frontend and GraphQL, Django and SQL for
          the backend
        </p>
        <p>
          <label>
            Feel free to check out a copy of my most up-to-date resume{" "}
            <a className="text-blue" href="/">
              here
            </a>
            .
          </label>
        </p>
        <p className="pb-10 pl-20">
          <img src={sarinnaSung} alt="sarinnaSung" />
        </p>
      </div>
    </div>
  );
};
export default Home;
