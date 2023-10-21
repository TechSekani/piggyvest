import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Investment from "./components/Investment";
import Navbar from "./components/Navbar";
import Savings from "./components/Savings";
import Security from "./components/Security";
import Spotlight from "./components/Spotlight";
import Stories from "./components/Stories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Security />
      <Savings />
      <Investment />
      <Spotlight />
      <Stories />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
