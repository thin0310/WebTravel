import { Routes, Route } from "react-router-dom";
import Header from "./Nav/Header";
import Footer from "./Nav/Footer";
import Destination from "./Destination/Destination";
import Gallery from "./Gallery/Gallery";
import Blogs from "./Blogs/Blogs";
import Home from "./Home/Home";
import Productdetail from "./product/product_detail";
import Register from "./Register/Register";
function App() {
  return (
    <div>
         <Header />
          <Routes>
            <Route path="/" element={<Home />} exact="true" />
            <Route path="/Destination" element={<Destination />}/>
            <Route path="Product-detail" element = {<Productdetail/>}>
              <Route path=":id" element = {<Productdetail/>}/>
            </Route>
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Register" element = {<Register />} />
          </Routes>
        <Footer /> 
    </div>
  );
}

export default App;
