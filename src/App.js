import Layout from './Components/Layout';
import RiskIdentification from './Components/RiskIdentification';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RiskAnalysis from './Components/RiskAnalysis';
import RiskPlanning from './Components/RiskPlanning';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RiskIdentification />} />
            <Route path="analysis" element={<RiskAnalysis />} />
            <Route path="planning" element={<RiskPlanning />} />
            <Route path="monitoring" element={<RiskAnalysis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
