import Nabvar from "./Components/Navbar/Nabvar.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import FormCheckout from "./Components/FormCheckout/FormCheckout.jsx";
import PostDetailContainer from "./Components/PostDetail/PostDetailContainer.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nabvar />
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/postDetail/:id" element={<PostDetailContainer />} />
      <Route path="/postearEnBlog" element={<FormCheckout/>} />
      </Routes>     
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

