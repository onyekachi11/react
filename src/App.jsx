import "./App.css";
import "./red.css";
import Name from "./components/name";
import Button from "./components/button";
import { useState } from "react";
import Header from "./website/header";
import MainView from './website/mainView'
import Footer from './website/footer'

function App() {
  // const [location, setLocation] = useState('Anambra');
  // const [age, setAge] = useState(50);

  // const submit = () => {
  //   console.log("submitted");
  // };
  // const clear = () => {
  //   console.log("cleared");
  // };

  // const edit = () => {
  //   // console.log("editted");
  //   setLocation('enugu')
  //   setAge(10)
  // };

  return (
    // <div>
    //   <p className="red-color">welcome to my app</p>
    //   <Name name="Onyeka" age={age} location={location} />

    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       width: "50%",
    //       gap: 10,
    //     }}
    //   >
    //     {/* <Button name="submit" onClick={submit} />
    //     <Button name="clear" onClick={clear} /> */}
    //     <Button name="edit" onClick={edit} />
    //   </div>
    // </div>
    <div style={{height: '100vh'}}>
      <Header/>
      <MainView/>
      <Footer/>
    </div>
  );
}

export default App;
