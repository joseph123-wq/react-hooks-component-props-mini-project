import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About
        imageSrc={blogData.image || "https://via.placeholder.com/215"}
        aboutText={blogData.about}
      />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
