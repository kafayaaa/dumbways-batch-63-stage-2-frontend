import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex justify-center items-center gap-4 p-8 mb-8 border-b fixed z-10">
        <Button asChild variant={"default"}>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant={"default"}>
          <Link to="/about">About</Link>
        </Button>
        <Button asChild variant={"default"}>
          <Link to="/posts">Posts</Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
