import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
 //import pages
 import AboutUs from "./pages/AboutUs";
 import Nav from './components/Nav';
 import ContactUs from './pages/ContactUs';
 import Paintings from './pages/Paintings';

 //router

 import {Switch, Route} from 'react-router-dom';


 function App() {
  return (
 <div className="App">
     <GlobalStyle/>
       <Nav />
    <Switch>
      
         <Route path = "/" exact>
             <AboutUs/>
        </Route>
         
        <Route path = "/contact">
           <ContactUs />
       </Route>
       <Route path ="/Paintings">
           <Paintings />
       </Route>
     </Switch>
 </div>
  );
}

export default App;
