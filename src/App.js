import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import Contato from "./pages/contato/index";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles.css";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" component={Services} />
        <Route path="/contato" component={Contato} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};


export default Routes;
