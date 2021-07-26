import Service from "../../components/Service";
import Hortela from '../../img/hortela.jpeg';
import Capim from '../../img/Capim.jpg';
import Erva from '../../img/erva.jpeg';
import Ambience from '../../img/ambience.jpeg';
import Laranja from '../../img/laranja.jpg';

import "./styles.css";

const Services = () => {
  return (
    <div className="container-services">
      <Service name="Capim Limão" />
      <img src= { Capim }/>
      <Service name="Hortelã" />
      <img src= { Hortela }/>
      <Service name="Ambience" />
      <img src= { Ambience }/>
      <Service name="Calêndula" />
      <img src= { Laranja }/>
      <Service name="Erva Doce"/>
      <img src= { Erva }/>
      
    </div>
  );
};

export default Services;
