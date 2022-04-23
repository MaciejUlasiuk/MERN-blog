import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import request from "./helpers/request";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await request.get("/api/posts");
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <p>hahadsafsaf</p>
    </div>
  );
}

export default App;
