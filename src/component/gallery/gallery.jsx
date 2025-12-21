import React, { useState, useEffect } from 'react';
import CircularGallery from './CircularGallery';
import './Gallery.css';

const SESI_BLACK = '#111111';
const SESI_YELLOW = '#F0E68C';

function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const API_BASE = 'https://backendsesi.vercel.app';
        const foldersRes = await fetch(`${API_BASE}/api/folders`);
        const folders = await foldersRes.json();
        const promises = folders.map(async (folderName) => {
        const imgRes = await fetch(`${API_BASE}/api/images/${folderName}`);
        const imagesData = await imgRes.json();
        
        const imageUrls = imagesData.map(img => img.url);
        const originalString = folderName;
        const transformedString = originalString.replaceAll('_', ' ');
          return {
            text: transformedString, 
            image: imageUrls[0] || 'https://via.placeholder.com/800x600?text=No+Image',
            images: imageUrls 
          };
        });

        const galleryData = await Promise.all(promises);
        setItems(galleryData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const handleItemClick = (index) => {

    if (!items.length) return;
    const realIndex = index % items.length;
    setSelectedEvent(items[realIndex]);
  };

  return (
    <div className="gallery-page" style={{ backgroundColor: SESI_BLACK, color: SESI_YELLOW }}>
      <main className="gallery-container">
        {loading ? (

          <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%', 
            color: SESI_YELLOW, 
            fontSize: '2rem'
          }}>
            Loading Gallery...
          </div>
        ) : (
          <CircularGallery
            items={items}
            textColor={SESI_YELLOW}
            bend={3}
            borderRadius={0.05}
            font={`bold 60px Arial, sans-serif`} 
            onItemClick={handleItemClick}
          />
        )}
      </main>

      {/* MODAL OVERLAY */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>×</button>
            
            <div className="modal-header">
              <h2>{selectedEvent.text}</h2>
            </div>

            <div className="modal-grid">
              {selectedEvent.images && selectedEvent.images.length > 0 ? (
                selectedEvent.images.map((img, i) => (
                  <div key={i} className="modal-image-wrapper">
                    <img src={img} alt={`${selectedEvent.text} ${i}`} loading="lazy" />
                  </div>
                ))
              ) : (
                <p style={{color: 'white', gridColumn: '1/-1'}}>No additional images available.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;