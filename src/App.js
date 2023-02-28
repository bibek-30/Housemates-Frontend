import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Login from "./components/Login/Login";
import AddRooms from "./components/Rooms/AddRooms";
import Landing from "./components/Pages/Landing";
import Registration from "./components/Login/Registration";
import Rooms from "./components/Rooms/Rooms";
import Details from "./components/Rooms/Details";
import Booking from "./components/Rooms/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/add-room" element={<AddRooms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<Details />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
