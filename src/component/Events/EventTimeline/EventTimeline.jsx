

import React, { useState, useMemo } from 'react';
import eventsData from '../data';
import EventCard from '../EventCard';
import Modal from '../Modal/Modal';
import ScrambledText from '../ScrambledText/ScrambledText';
import './EventTimeline.css';

const STATUS = {
  ALL: 'all',
  ONGOING: 'ongoing',
  UPCOMING: 'upcoming',
  PAST: 'past',
};


const SYMBOLS = '01#@%&^*()_-+=[]{}|\\;:"<>,./?';


const getEventStatus = (event) => {
  const now = new Date();
  const start = new Date(event.start);
  const end = new Date(event.end);

  if (now >= start && now <= end) return STATUS.ONGOING;
  if (now < start) return STATUS.UPCOMING;
  return STATUS.PAST;
};

function EventTimeline() {
  const [filter, setFilter] = useState(STATUS.ALL);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = useMemo(() => {

    const sortedEvents = [...eventsData].sort((a, b) => new Date(a.start) - new Date(b.start));

    if (filter === STATUS.ALL) return sortedEvents;

    return sortedEvents.filter(event => getEventStatus(event) === filter);
  }, [filter]);

  const handleFilterChange = (status) => {

    setSelectedEvent(null);
    setFilter(status);
  };

  const defaultScrambleProps = {
    radius: 40,
    speed: 0.15,
    duration: 1.8,
    scrambleChars: SYMBOLS,
  };

  return (
    <div className="timeline-container">


      <ScrambledText
        {...defaultScrambleProps}
        radius={80}
        as='h1'
        className="timeline-header-scramble"
      >
        SESI Interactive Event Timeline
      </ScrambledText>


      <div className="filter-controls">
        {Object.values(STATUS).map((status) => (
          <button
            key={status}
            className={`filter-button ${filter === status ? 'active' : ''}`}
            onClick={() => handleFilterChange(status)}
          >

            <ScrambledText {...defaultScrambleProps} radius={30} as='span'>
              {status.charAt(0).toUpperCase() + status.slice(1)} Events
            </ScrambledText>
          </button>
        ))}
      </div>


      <div className="timeline">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              status={getEventStatus(event)}
              onClick={() => setSelectedEvent(event)}
              side={index % 2 === 0 ? 'left' : 'right'}
              scrambleProps={defaultScrambleProps}
            />
          ))
        ) : (
          <p className="no-events">No events found for the selected filter.</p>
        )}
      </div>


      {selectedEvent && (
        <Modal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          scrambleProps={defaultScrambleProps}
        />
      )}
    </div>
  );
}

export default EventTimeline;