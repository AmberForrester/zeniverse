import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";


const App = () => {
  return (
    <main className="max-width">

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />

    </main>
  );
}

export default App;