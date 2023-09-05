import "./App.scss";
import { Header } from "./components/Header/header";
import { Container } from "@mui/material";
import { Home } from "./pages/Home/home";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home></Home>
      </Container>
    </>
  );
}

export default App;
