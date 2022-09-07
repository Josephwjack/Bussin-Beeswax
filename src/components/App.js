import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import MerchControl from './MerchControl'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MerchControl />
    </React.Fragment>
  );
}

export default App;
