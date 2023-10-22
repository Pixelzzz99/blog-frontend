import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/header";
import { Container } from "@mui/material";
import { Home, Login, Registration, FullPost, AddPost } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
