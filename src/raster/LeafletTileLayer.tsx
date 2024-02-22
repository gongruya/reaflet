import {TileLayer, TileLayerOptions} from 'leaflet';
import {useEffect, useState} from 'react';
import {useLeafletMap} from '../hooks/useLeafletMap';

export interface LeafletTileLayerProps {
  url: string;
  options?: TileLayerOptions;
}

export function LeafletTileLayer({url, options}: LeafletTileLayerProps) {
  const maybeMap = useLeafletMap();
  const [tile] = useState(new TileLayer(url, options));

  useEffect(() => {
    maybeMap?.addLayer(tile);
    return () => {
      maybeMap?.removeLayer(tile);
    };
  }, [maybeMap]);

  return null;
}

export default LeafletTileLayer;
