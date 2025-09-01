import "./css/card.css";

const Card = ({ title, body, link }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{body}</p>
      <a href={link}>View Code</a>
    </div>
  );
};
export default Card;
