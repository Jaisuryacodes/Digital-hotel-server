import "./App.css";
import "./index.css";
import Offers from "./Offers.jsx";
import Parscel from "./Parscel.jsx";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <div>
        <Offers />
      </div>
      <Parscel />
      <div className=" px-6 flex  gap-6 mt-[50px] justify-evenly">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
