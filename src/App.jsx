import "./App.css";
import "./index.css";
import Offers from "./Offers.jsx";
import Parscel from "./Parscel.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

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
      <div className=" px-6 py-6 mt-[16px]">
        <Footer />
      </div>
    </>
  );
}

export default App;
