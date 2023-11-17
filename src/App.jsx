import Explore from "./components/Explore";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Provide } from "./components/Provide";
import { Subscription } from "./components/Subscription";
import { TrialCard } from "./components/TrialCard";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <Explore />
      <Provide />
      <Faq />
      <Subscription />
      <TrialCard />
      <Footer />
    </>
  );
}

export default App;
