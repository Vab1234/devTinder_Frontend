import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Main layout route with header/footer */}
          <Route element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
          
          {/* Full-page routes without header/footer */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;