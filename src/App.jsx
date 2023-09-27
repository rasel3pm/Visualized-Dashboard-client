import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { Fragment } from "react";
import IntensityPage from "./pages/IntensityPage";
import LikelihoodPage from "./pages/LikelihoodPage";
import RelevancePage from "./pages/RelevancePage";
import YearPage from "./pages/YearPage";
import CountryPage from "./pages/CountryPage";
import TopicsPage from "./pages/TopicsPage";
import RegionPage from "./pages/RegionPage";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/intensity" element={<IntensityPage />} />
          <Route path="/likelihood" element={<LikelihoodPage />} />
          <Route path="/relevance" element={<RelevancePage />} />
          <Route path="/year" element={<YearPage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/region" element={<RegionPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
