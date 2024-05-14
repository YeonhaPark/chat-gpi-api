import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ChatList from "./pages/ChatList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat-list" element={<ChatList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
