import Hero from "./components/Hero";
import Investment from "./components/Investment";
import Navbar from "./components/Navbar";
import Savings from "./components/Savings";
import Security from "./components/Security";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Security />
      <Savings />
      <Investment />
    </>
  );
}

export default App;
