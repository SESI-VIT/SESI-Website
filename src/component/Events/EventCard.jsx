

import React, { forwardRef } from 'react';
import ScrambledText from './ScrambledText/ScrambledText';
import ElectricBorder from './Electric border/ElectricBorder';

const formatTime = (dateString) => {
  if (!dateString) return "N/A";

  return new Date(dateString).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};


const EventCard = forwardRef(({ event, status, onClick, side, scrambleProps }, ref) => {



  const startDate = formatTime(event.start);
  const endDate = formatTime(event.end);
  const isOngoing = status === 'ongoing';


  const timeEndPart = endDate.includes(', ') ? endDate.split(', ')[1] : endDate;

  const imageUrl = event.images && event.images.length > 0
    ? event.images[0]
    : "https://via.placeholder.com/150x150?text=No+Image";

  const borderColor = '#CDA42A';

  return (

    <div className={`timeline-item ${side} ${status}`} onClick={onClick} ref={ref}>


      <div className="timeline-dot"></div>

      <ElectricBorder
        color={borderColor}
        speed={1}
        chaos={0.5}
        thickness={0.5}
        style={{ borderRadius: 8 }}
      >

        <div className="timeline-content">
          <div className="event-header">
            <ScrambledText {...scrambleProps} as='h3' className="event-title">
              {event.title}
            </ScrambledText>
            <span className={`status-tag ${status}`}>{isOngoing ? '🔴 LIVE' : status.toUpperCase()}</span>
          </div>

          <ScrambledText {...scrambleProps} as='p' className="event-date">
            <time>
              {startDate} to {timeEndPart}
            </time>
          </ScrambledText>

          <ScrambledText {...scrambleProps} as='p' className="event-description">
            {event.description.substring(0, 100)}...
          </ScrambledText>

          <img
            src={imageUrl}
            alt={event.title}
            className="event-image-thumb"
          />


          <button className="details-button">
            <ScrambledText {...scrambleProps} as='span'>
              View Details & Pictures
            </ScrambledText>
          </button>
        </div>
      </ElectricBorder>
    </div>
  );
});

export default EventCard;