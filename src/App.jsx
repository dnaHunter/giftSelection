import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import FinderPage from "./pages/FinderPage/FinderPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage"
import Header from "./components/Header/Header";
import footer from "./assets/footer.png"
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/giftFinder/*" element={<FinderPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <img src={footer} alt="" className="footer" />
    </BrowserRouter>
  );
}

export default App;
