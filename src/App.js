import Nabvar from "./Components/Navbar/Nabvar.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Cards from "./Components/Blog/Cards.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nabvar />
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="blog" element={<Cards/>} />
      </Routes>     
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

