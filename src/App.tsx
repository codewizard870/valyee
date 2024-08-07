import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Header from "./components/header";
import Footer from "./components/footer";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import JoinWaitList from "./components/modal/waitList";
import MobileMenu from "./components/modal/mobileMenu";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/privacy" element = {<Privacy />} />
        <Route path="/terms" element = {<Terms />} />
      </Routes>
      <Footer />

      <JoinWaitList />
      {/* <MobileMenu /> */}
    </div>
  );
}

export default App;
