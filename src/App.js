import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Content from "./components/content";
import Playlist from "./components/playlist";
import Features from "./components/features";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 5000);
  }, []);
  return (
    <div>
      <Navigation />
      <Banner />
      {animationComplete && (
        <>
          <Content />
          <Playlist />
          <Features />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
