import { Route } from "react-router";
import { Header, Container } from "./components";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";

import "./scss/app.scss";

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Container>
          <Route exact path='/'>
            <Menu />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Container>
      </div>
    </div>
  );
}
