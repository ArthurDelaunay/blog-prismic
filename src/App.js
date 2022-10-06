import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Article from "./pages/Article"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
