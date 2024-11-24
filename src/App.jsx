import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <main className="max-width">

      <Navbar />
      <Hero />
      <About />

    </main>
  );
}

export default App;