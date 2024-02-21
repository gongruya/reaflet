import 'leaflet/dist/leaflet.css';
import React, {useEffect, CSSProperties, useState, useCallback} from 'react';
import L from 'leaflet';
import {LeafletContext} from './hooks/useLeafletMap';
import {LeafletEventProps, registerLeafletEvents} from './events';

export interface LeafletMapProps extends LeafletEventProps {
  style: CSSProperties;
  center: L.LatLngExpression;
  zoom?: number;
  options?: L.MapOptions;
  children?: React.ReactNode;
}

export function LeafletMap(props: LeafletMapProps) {
  const {style, center, zoom, options, children} = props;
  const [map, setMap] = useState<L.Map>();

  const mapRef = useCallback((container: HTMLDivElement) => {
    const leafletMap = L.map(container, options);
    registerLeafletEvents(leafletMap, props);
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
