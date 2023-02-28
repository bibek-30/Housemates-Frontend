import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Booking from "./Booking";

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [room, setRoom] = useState();

  useEffect(() => {
    async function fetchRoomData() {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/getroom/${id}`
      );
      setRoom(response.data);
      console.log(response);
    }
    fetchRoomData();
  }, [id]);

  // const handleBook = () => {
  //   navigate({ pathname: "/booking", state: { title: room.title } });
  // };

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="md:flex md:justify-center md:items-center">
        <div className="md:w-2/3 lg:w-1/2 xl:w-2/5">
          <h1 className="text-3xl font-bold mb-4">{room.title}</h1>
          <div className="content">
            <img
              src={room.image}
              alt={room.title}
              className="rounded-md shadow-lg"
            />
          </div>
          <p className="text-lg mt-4">
            Location: {room.country}, {room.state}, {room.city}
          </p>
          <p className="text-2xl font-bold my-4">${room.price}</p>
          <p className="text-lg">{room.desc}</p>
          <div className="flex justify-center mt-6">
            <Booking roomId={room.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
