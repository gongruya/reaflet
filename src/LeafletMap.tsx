import 'leaflet/dist/leaflet.css';
import React, {useEffect, CSSProperties, useState, useCallback} from 'react';
import L from 'leaflet';
import {LeafletContext} from './hooks/useLeafletMap';

export interface LeafletMapProps {
  style: CSSProperties;
  center: L.LatLngExpression;
  zoom?: number;
  options?: L.MapOptions;
  onClick?: (latlng: L.LatLng) => void;
  onMoveEnd?: (bounds: L.LatLngBounds) => void;
  children?: React.ReactNode;
}

export function LeafletMap(props: LeafletMapProps) {
  const {style, center, zoom, options, onClick, onMoveEnd, children} = props;
  const [map, setMap] = useState<L.Map>();

  const mapRef = useCallback((container: HTMLDivElement) => {
    const leafletMap = L.map(container, options);

    leafletMap.addEventListener('moveend', () => {
      if (onMoveEnd) {
        onMoveEnd(leafletMap.getBounds());
      }
    });

    leafletMap.addEventListener('click', ({latlng}) => {
      if (onClick) {
        onClick(latlng);
      }
    });

    setMap(leafletMap);
  }, []);

  useEffect(() => {
    map?.setView(center, zoom);
  }, [map, center, zoom]);

  return (
    <div ref={mapRef} style={style}>
      <LeafletContext.Provider value={map}>
        {children}
      </LeafletContext.Provider>
    </div>
  );
};

export default LeafletMap;
