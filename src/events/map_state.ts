/** 
 * Props for Leaflet map state events.
 * https://leafletjs.com/reference.html#map-zoomlevelschange.
 */
export interface LeafletMapStateEventProps {
  // TODO: The list is incomplete.
  onMoveStart?: (e: L.LeafletEvent, map: L.Map) => void;
  onMove?: (e: L.LeafletEvent, map: L.Map) => void;
  onMoveEnd?: (e: L.LeafletEvent, map: L.Map) => void;
  onZoomStart?: (e: L.LeafletEvent, map: L.Map) => void;
  onZoom?: (e: L.LeafletEvent, map: L.Map) => void;
  onZoomEnd?: (e: L.LeafletEvent, map: L.Map) => void;
}

export function registerMapStateEvents(map: L.Map, props: LeafletMapStateEventProps) {
  const {onMoveStart, onMove, onMoveEnd, onZoomStart, onZoom, onZoomEnd} = props;
  if (onMoveStart) {
    map.addEventListener('movestart', (e) => {
      onMoveStart(e, map);
    });
  }
  if (onMove) {
    map.addEventListener('move', (e) => {
      onMove(e, map);
    });
  }
  if (onMoveEnd) {
    map.addEventListener('moveend', (e) => {
      onMoveEnd(e, map);
    });
  }
  if (onZoomStart) {
    map.addEventListener('zoomstart', (e) => {
      onZoomStart(e, map);
    });
  }
  if (onZoom) {
    map.addEventListener('zoom', (e) => {
      onZoom(e, map);
    });
  }
  if (onZoomEnd) {
    map.addEventListener('zoomend', (e) => {
      onZoomEnd(e, map);
    });
  }
}
