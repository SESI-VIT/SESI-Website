import React from "react";
import EventTimeline from "../component/Events/EventTimeline/EventTimeline";
import HexGridBackground from "../component/Events/HexGridBackground/HexGridBackground";

const Events = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background */}
      <HexGridBackground />

      {/* Foreground content */}
      <EventTimeline />
    </div>
  );
};

export default Events;
