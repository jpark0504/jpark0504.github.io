import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import './ExperienceMap.css';

const createMarkerIcon = (isActive) => {
  return L.divIcon({
    className: `custom-marker ${isActive ? 'active' : ''}`,
    html: `<div class="marker-dot"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

const MapBoundsHandler = ({ experiences }) => {
  const map = useMap();

  useEffect(() => {
    if (experiences.length > 0) {
      const bounds = L.latLngBounds(
        experiences.map(exp => [exp.lat, exp.lng])
      );
      map.fitBounds(bounds, { padding: [100, 100], maxZoom: 6 });
    }
  }, [map, experiences]);

  return null;
};

const PopupOpener = ({ selectedExperienceId, experiences, markerRefs }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedExperienceId && markerRefs.current[selectedExperienceId]) {
      const marker = markerRefs.current[selectedExperienceId];
      marker.openPopup();
    }
  }, [selectedExperienceId, markerRefs, map]);

  return null;
};

const ExperienceMap = () => {
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const markerRefs = React.useRef({});

  const experiences = [
    {
      id: 1,
      company: 'University of Virginia',
      title: 'Student + UTA',
      location: 'Charlottesville, VA',
      lat: 38.0324,
      lng: -78.4852,
      startDate: 'Aug 2022',
      endDate: 'May 2025',
    },
    {
      id: 2,
      company: 'CACI',
      title: 'SWE Intern',
      location: 'Ashburn, VA',
      lat: 39.0438,
      lng: -77.5015,
      startDate: 'May 2023',
      endDate: 'Jan 2025',
    },
    {
      id: 3,
      company: 'Meta',
      title: 'Software Engineer',
      location: 'Menlo Park, CA',
      lat: 37.4847,
      lng: -122.1477,
      startDate: 'Aug 2025',
      endDate: 'Present',
    },
    
  ];

  const usCenter = [39.8283, -98.5795];

  const selectedIndex = experiences.findIndex(exp => exp.id === selectedExperienceId);

  const goToPrevious = () => {
    const prevIndex = (selectedIndex - 1 + experiences.length) % experiences.length;
    setSelectedExperienceId(experiences[prevIndex].id);
  };

  const goToNext = () => {
    const nextIndex = (selectedIndex + 1) % experiences.length;
    setSelectedExperienceId(experiences[nextIndex].id);
  };

  const closePopup = () => {
    setSelectedExperienceId(null);
  };

  return (
    <div className="experience-map-container">
      <h2 className="experience-map-title">Across the US</h2>
      
      <div className="map-wrapper">
        <MapContainer 
          center={usCenter} 
          zoom={4} 
          className="map-leaflet"
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          dragging={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            maxZoom={18}
          />

          <MapBoundsHandler experiences={experiences} />
          <PopupOpener selectedExperienceId={selectedExperienceId} experiences={experiences} markerRefs={markerRefs} />

          {experiences.map((exp) => (
            <Marker
              key={exp.id}
              ref={(el) => {
                if (el && el.leafletElement) {
                  markerRefs.current[exp.id] = el.leafletElement;
                } else if (el) {
                  markerRefs.current[exp.id] = el;
                }
              }}
              position={[exp.lat, exp.lng]}
              icon={createMarkerIcon(selectedExperienceId === exp.id)}
              eventHandlers={{
                click: () => setSelectedExperienceId(exp.id),
                popupclose: () => setSelectedExperienceId(null),
              }}
            >
              <Popup>
                <div className="popup-content">
                  <h4>{exp.company}</h4>
                  <p>{exp.title}</p>
                  <small>{exp.startDate} — {exp.endDate}</small>
                  <div className="popup-nav">
                    <button className="popup-nav-btn" onClick={goToPrevious}>
                      ←
                    </button>
                    <span className="popup-counter">{experiences.findIndex(e => e.id === exp.id) + 1} / {experiences.length}</span>
                    <button className="popup-nav-btn" onClick={goToNext}>
                      →
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ExperienceMap;
