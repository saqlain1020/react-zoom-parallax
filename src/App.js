import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./lib";
import Im1 from "./assets/images/cloudbg.jpg";
import Im2 from "./assets/images/birds.png";
import Im3 from "./assets/images/mountains.jpg";
import Im5 from "./assets/images/hill.jpg";

function App() {
  return (
    <div className="App" style={{width:"100vw",height:"100vh"}}>
      <MainContainer
        images={[
          { front: Im2, back: Im1 },
          { front: Im2, back: Im3 },
          { front: Im2, back: Im5 },
        ]}
      />
    </div>
  );
}

export default App;
