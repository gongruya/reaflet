import {Circle, CircleOptions, LatLngExpression} from 'leaflet';
import {useLeafletMap} from '../hooks/useLeafletMap';
import {useEffect, useState} from 'react';

export interface LeafletCircleProps {
  latlng: LatLngExpression;
  options?: CircleOptions;
}

export function LeafletCircle({latlng, options}: LeafletCircleProps) {
  const maybeMap = useLeafletMap();
  const [circle] = useState(new Circle(latlng, options));

  useEffect(() => {
    maybeMap?.addLayer(circle);
    return () => {
      maybeMap?.removeLayer(circle);
    };
  }, [maybeMap]);

  useEffect(() => {
    circle.setLatLng(latlng);
  }, [latlng]);

  return null;
}

export default LeafletCircle;
