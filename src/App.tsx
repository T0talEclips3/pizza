import { Route } from "react-router";
import { Header, Container } from "./components";
import Menu from "./pages/Menu";

import "./scss/app.scss";

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Container>
          <Route path='/'>
            <Menu />
          </Route>
        </Container>
      </div>
    </div>
  );
}
