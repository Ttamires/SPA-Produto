
import "./styles.css";


const Home = ({ history }) => {
  return (
    <main className="container-home">
      
      <div>
        <div>     
        <video width="350" height="200" controls >
          <source src="../src/video/video1.mp4" type="video/mp4"/>
        </video>
        </div> 
        <h1>Amor e Saboaria aproximando sua pele do seu coração</h1>
        <p>
        Tudo o que você precisava para deixar sua pele como nunca.
        </p>
        <button onClick={() => history.push("/service")}>
          Acessar Produtos
        </button>
      </div>
    </main>
  );
};

export default Home;