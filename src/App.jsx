import "./App.css";
import Atir from "./components/Atir";
import Bonus from "./components/Bonus";
import Footer from "./components/Footer";
import Hedaer from "./components/Header";
import Mushfig from "./components/Mushfig";
import Navbar from "./components/Navbar";
import Navcontent from "./components/Navcontent";

function App() {
  return (
    <>
      <Navbar />
      <Navcontent />
      <Hedaer />
      <Atir />
      <Bonus />
      <Mushfig />
      <Footer />
    </>
  );
}

export default App;
