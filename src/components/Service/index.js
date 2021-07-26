
import "./styles.css";

const Service = ({ name = "Sabonete Artesanal" }) => {
  return (
    <div className="container-service">
      
      <p>{name}</p>
    </div>
  );
};

export default Service;
