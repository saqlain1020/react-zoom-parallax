import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./lib";
import Im1 from "./assets/images/cloudbg.jpg";
import Im2 from "./assets/images/birds.png";
import Im3 from "./assets/images/mountains.jpg";
import Im5 from "./assets/images/hill.jpg";
import Im6 from "./assets/images/glitter.jpg";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <MainContainer
        images={[
          { front: Im2, back: Im1, title: "yellow",subTitle: "subtitle" },
          { front: Im2, back: Im3, title: "red",subTitle: "subtitle" },
          { front: Im2, back: Im5, title: "3",subTitle: "subtitle" },
          { front: Im2, back: Im6, title: "blue",subTitle: "subtitle" },
        ]}
      />
    </div>
  );
}

export default App;
