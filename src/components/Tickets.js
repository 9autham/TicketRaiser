import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CardForTicket from "./CardForTicket";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);

  const fetchTickets = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Ticket"));
      const ticketData = [];

      querySnapshot.forEach((doc) => {
        const ticket = doc.data();
        ticketData.push({
          ticketId: doc.id,
          image_url: ticket.image_url,
          problem_description: ticket.problem_description,
          user_message_id: ticket.message_id,
          username: ticket.username,
          timestamp: ticket.timestamp,
          chat_id: ticket.chat_id,
          user_id: ticket.user_id,
        });
      });

      setTickets(ticketData);
      console.log(ticketData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="d-flex flex-wrap container justify-content-center align-content-center">
        {tickets.map((ticket, index) => (
          <CardForTicket key={index} props={ticket} /> // Pass ticket as props to CardPrinterComponent
        ))}
      </div>
    </>
  );
};

export default TicketList;
