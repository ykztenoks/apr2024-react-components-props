import "./App.css";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App" id="app-container">
      <Navbar />
      <Greeting firstName="Abner" />
      <hr />
      <Greeting firstName="Alexis" />
      <hr />

      <StudentList>
        <StudentCard
          name=""
          week={4}
          info={{ city: "Miami", course: "Web Dev" }}
        />
        <StudentCard
          name="Yves"
          week={4}
          info={{ city: "Miami", course: "Web Dev" }}
        />
        <StudentCard
          name="Rachel"
          week={4}
          info={{ city: "Miami", course: "Web Dev" }}
        />
      </StudentList>

      <ReactPlayer url="" playing={true} muted={true} controls />
      {/* <Greeting firstName="Frankie" />
      <hr />
      <Greeting firstName="Yves" />
      <hr />
      <Greeting firstName="Rachel" />
      <hr />
      <Greeting firstName="Luis" />
      <hr />
      <Greeting firstName="Anna" />
      <hr />
      <Greeting firstName="Claudia" />
      <hr />
      <Greeting firstName="Renmy" />
      <hr />
      <Greeting firstName="Shamil" />
      <hr />
      <Greeting firstName="Yamil" />
      <hr />
      <Greeting firstName="Victor" />
      <hr />
      <Greeting firstName="JD" />
      <hr />
      <Greeting firstName="Espedro" />
      <hr />
      <Greeting firstName="David" />
      <hr />
      <Greeting firstName="Alexander" />
      <hr />

      <Greeting firstName="Alejandro" /> */}
    </div>
  );
}

export default App;
