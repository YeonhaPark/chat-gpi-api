import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ChatList from "./components/CardList";

export default function App() {
  return (
    <div className="bg-gray-900 ">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat-list" element={<ChatList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
