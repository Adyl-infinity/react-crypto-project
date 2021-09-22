import Login from "./Login";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Views/Home";
import Tasks from "./Views/Tasks";
import Orders from "./Views/Orders";
import Calendar from "./Views/Calendar";
import Layout from "./Components/Layout";
import Modal from "./Components/Modals";

function App() {
  return (
    <BrowserRouter>
     <Layout>
         <Route exact path="/"><Home /></Route>
         <Route exact path="/tasks"><Tasks /></Route>
         <Route exact path="/projects"><Home /></Route>
         <Route exact path="/calendar"><Calendar /></Route>
         <Route exact path="/orders"><Orders /></Route>
     </Layout>
    </BrowserRouter>
  );
}

export default App;
