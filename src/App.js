import react, { useState } from "react";
import "./css/style.css";
import { Route, Switch } from "react-router";
import About from "./Components/About";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Subheader from "./Components/Subheader";
import PageNotFound from "./Components/PageNotFound";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";

function App() {
  // const [signup,setSignup] = useState(false)

  //add
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cast, setCast] = useState("");


 

  return (
    <div className="app">
      <Header />
      <Subheader />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/adduser">
          <AddUser auName={name} setauName={setName} auEmail={email} setauEmail={setEmail} auCast={cast} setauCast={setCast} />
        </Route>
        <Route path="/edituser">
          <EditUser name={name} setauName={setName} email={email} setauEmail={setEmail}  cast={cast} setauCast={setCast} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
