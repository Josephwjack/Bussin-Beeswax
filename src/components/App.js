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
    <div className="container d-flex flex-row justify-content-center my-4">
      <MerchControl />
    </div>
    </React.Fragment>
  );
}

export default App;
