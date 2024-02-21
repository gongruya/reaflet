/** 
 * Props for Leaflet interaction events.
 * https://leafletjs.com/reference.html#map-click.
 */
export interface LeafletInteractionEventProps {
  onClick?: (e: L.LeafletMouseEvent) => void;
  onDoubleClick?: (e: L.LeafletMouseEvent) => void;
  onPreClick?: (e: L.LeafletMouseEvent) => void;
  onMouseDown?: (e: L.LeafletMouseEvent) => void;
  onMouseUp?: (e: L.LeafletMouseEvent) => void;
  onMouseOver?: (e: L.LeafletMouseEvent) => void;
  onMouseOut?: (e: L.LeafletMouseEvent) => void;
  onMouseMove?: (e: L.LeafletMouseEvent) => void;
  onContextMenu?: (e: L.LeafletMouseEvent) => void;
  onKeyPress?: (e: L.LeafletKeyboardEvent) => void;
  onKeyDown?: (e: L.LeafletKeyboardEvent) => void;
  onKeyUp?: (e: L.LeafletKeyboardEvent) => void;
}

export function registerInteractionEvents(map: L.Map, props: LeafletInteractionEventProps) {
  // Mouse events.
  const {onClick, onDoubleClick, onPreClick, onMouseDown, onMouseUp,
    onMouseOver, onMouseOut, onMouseMove, onContextMenu} = props;
  if (onClick) {
    map.addEventListener('click', onClick);
  }
  if (onDoubleClick) {
    map.addEventListener('dblclick', onDoubleClick);
  }
  if (onPreClick) {
    map.addEventListener('preclick', onPreClick);
  }
  if (onMouseDown) {
    map.addEventListener('mousedown', onMouseDown);
  }
  if (onMouseUp) {
    map.addEventListener('mouseup', onMouseUp);
  }
  if (onMouseOver) {
    map.addEventListener('mouseover', onMouseOver);
  }
  if (onMouseOut) {
    map.addEventListener('mouseout', onMouseOut);
  }
  if (onMouseMove) {
    map.addEventListener('mousemove', onMouseMove);
  }
  if (onContextMenu) {
    map.addEventListener('contextmenu', onContextMenu);
  }

  // Key events.
  const {onKeyPress, onKeyDown, onKeyUp} = props;
  if (onKeyPress) {
    map.addEventListener('keypress', onKeyPress);
  }
  if (onKeyDown) {
    map.addEventListener('keypress', onKeyDown);
  }
  if (onKeyUp) {
    map.addEventListener('keypress', onKeyUp);
  }
}
