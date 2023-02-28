// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Booking = () => {
//   const { state } = useLocation();
//   const { id } = useParams();
//   const [roomDetails, setRoomDetails] = useState({});
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [bookingStatus, setBookingStatus] = useState("");

//   useEffect(() => {
//     const fetchRoomDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8000/api/getroom/${id}`
//         );
//         console.log("response", response);
//         setRoomDetails(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchRoomDetails();
//   }, [id]);

//   const handleStartDateChange = (event) => {
//     setStartDate(event.target.value);
//   };

//   const handleEndDateChange = (event) => {
//     setEndDate(event.target.value);
//   };
//   console.log(state);

//   const handleBookingSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/booking",
//         {
//           title: state.title,
//           start_date: startDate,
//           end_date: endDate,
//         },
//         {
//           headers: {
//             Authorization: "Bearer t2M4mh786694I5v6ymeyiKq8iQWjMSWToSZtOjnl",
//           },
//         }
//       );
//       setBookingStatus(response.data.message);
//     } catch (error) {
//       console.log(error);
//       setBookingStatus("Error placing booking. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>{state.title}</h2>
//       <p>ID: {roomDetails.id}</p>
//       <p>Price: {roomDetails.price}</p>
//       <form onSubmit={handleBookingSubmit}>
//         <div>
//           <label htmlFor="start-date">Start Date</label>
//           <input
//             type="date"
//             id="start-date"
//             name="start-date"
//             value={startDate}
//             onChange={handleStartDateChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="end-date">End Date</label>
//           <input
//             type="date"
//             id="end-date"
//             name="end-date"
//             value={endDate}
//             onChange={handleEndDateChange}
//             required
//           />
//         </div>
//         <button type="submit">Book Room</button>
//       </form>
//       {bookingStatus && <p>{bookingStatus}</p>}
//     </div>
//   );
// };

// export default Booking;

import React, { useState } from "react";
import axios from "axios";

const Booking = ({ roomId }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/booking/${roomId}`,
        {
          start_date: startDate,
          end_date: endDate,
        }
        // {
        //   headers: {
        //     Authorization: "Bearer t2M4mh786694I5v6ymeyiKq8iQWjMSWToSZtOjnl",
        //   },
        // }
      );
      console.log(response);

      if (response.status === 200) {
        // Booking was successful
        setSuccessMessage("Room booked successfully!");
        setErrorMessage("");
        setStartDate("");
        setEndDate("");
      }
    } catch (error) {
      // Booking failed
      console.error(error);
      setErrorMessage(error.response.data.error);
      setSuccessMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <label htmlFor="start_date">Start date:</label>
      <input
        type="date"
        id="start_date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        required
      />
      <br />
      <label htmlFor="end_date">End date:</label>
      <input
        type="date"
        id="end_date"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        required
      />
      <br />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
      rounded-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Book room
      </button>
    </form>
  );
};

export default Booking;
