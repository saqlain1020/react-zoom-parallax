# react-zoom-parallax
This react component is a cool image zoom slider

###This is how to use it
####Example Code

```
import ZoomSlider from "react-zoom-parallax";

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

```