import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
 //import pages
 import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <h1>film</h1>
      <AboutUs/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
