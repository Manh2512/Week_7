import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Jobs from "./pages/Jobs";
import Music from "./pages/Music";
import ApplicationReceived from "./pages/ApplicationReceived";
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/music" element={<Music />} />
        <Route path="/application-received" element={<ApplicationReceived />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;