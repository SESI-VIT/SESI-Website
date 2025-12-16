

import React, { useState, useEffect } from 'react';
import ScrambledText from '../ScrambledText/ScrambledText';
import './Modal.css';

const Modal = ({ event, onClose, scrambleProps }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);


    useEffect(() => {

        setIsFading(false);
        setCurrentImageIndex(0);
    }, [event.id]);

    if (!event) return null;

    const totalImages = event.images ? event.images.length : 0;


    const handleNavigation = (direction) => {
        if (totalImages <= 1) return;


        setIsFading(true);


        setTimeout(() => {


            if (direction === 'next') {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
            } else {
                setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
            }


            setIsFading(false);

        }, 200);
    };


    const handleNext = () => handleNavigation('next');
    const handlePrev = () => handleNavigation('prev');

    const currentImageUrl = totalImages > 0
        ? event.images[currentImageIndex]
        : "https://via.placeholder.com/800x450?text=No+Image+Available";

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>&times;</button>


                <ScrambledText {...scrambleProps} as='h2' className="modal-title">
                    {event.title}
                </ScrambledText>


                <div className="modal-dates">
                    <ScrambledText {...scrambleProps} as='span'>
                        **Starts:** {new Date(event.start).toLocaleString()}
                        <br />
                        **Ends:** {new Date(event.end).toLocaleString()}
                    </ScrambledText>
                </div>


                <ScrambledText {...scrambleProps} as='p' className="modal-description">
                    {event.description}
                </ScrambledText>


                <div className="image-gallery">
                    <h3 className="gallery-title">Picture Gallery ({currentImageIndex + 1} of {totalImages || 1})</h3>

                    <div className="gallery-main-image-container">
                        <img
                            src={currentImageUrl}
                            //alt={`${event.title} image ${currentImageIndex + 1}`}
                            alt={`${event.title} ${currentImageIndex + 1}`}

                            className={`gallery-main-image ${isFading ? 'fading-out' : ''}`}
                        />

                        {totalImages > 1 && (
                            <>
                                <button className="gallery-nav prev" onClick={handlePrev}>&lt;</button>
                                <button className="gallery-nav next" onClick={handleNext}>&gt;</button>
                            </>
                        )}
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="modal-action-button" onClick={onClose}>
                        <ScrambledText {...scrambleProps} as='span'>
                            Close
                        </ScrambledText>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;