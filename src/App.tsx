import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery";
import LadingPage from "./components/LandingPage";
import Navigation from "./components/Navbar";

const App = () => {
  const x = 1;

  return (
    <>
      <Navigation />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset="0"
        tabIndex={0}
      >
        <div className="landingPageBG"></div>

        <LadingPage />
        <AboutUs />
        <Gallery />
        <Contacts />
      </div>
    </>
  );
};
export default App;
