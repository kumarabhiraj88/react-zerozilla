import React from "react";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route exact path="/" element="" />
              <Route exact path="/products" element="" />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
