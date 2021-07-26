import "./styles.css";

const Contato = () => {
  return (
    <div className="container-contato"> 
      <div className="contato">
        <h1 > Entre em contato e receba as novidades!</h1>
      </div>

        <form>
          <input placeholder="Nome Completo" />
          <input placeholder="Email" />
          <input placeholder="Telefone" />
          <input type="submit" placeholder="Telefone" />
        </form>     
    </div>
    
  );
};

export default Contato;