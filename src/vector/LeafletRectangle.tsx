import {LatLngBoundsExpression, PolylineOptions, Rectangle} from 'leaflet';
import {useLeafletMap} from '../hooks/useLeafletMap';
import {useEffect, useState} from 'react';

export interface LeafletRectangleProps {
  bounds: LatLngBoundsExpression;
  options?: PolylineOptions;
}

export function LeafletRectangle({bounds, options}: LeafletRectangleProps) {
  const maybeMap = useLeafletMap();
  const [rectangle] = useState(new Rectangle(bounds, options));

  useEffect(() => {
    maybeMap?.addLayer(rectangle);
    return () => {
      maybeMap?.removeLayer(rectangle);
    };
  }, [maybeMap]);

  useEffect(() => {
    rectangle.setBounds(bounds);
  }, [bounds]);

  return null;
}

export default LeafletRectangle;
