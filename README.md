# Reaflet

[![npm version](https://img.shields.io/npm/v/reaflet-map.svg)](https://www.npmjs.com/package/reaflet-map)

Reaflet is a React wrapper for the popular [Leaflet map](https://github.com/Leaflet/Leaflet).

## Getting Started

Run `npm i reaflet-map`

And simply use it in your React component ([sandbox demo](https://codesandbox.io/p/devbox/9nw3jz?file=%2Fsrc%2FApp.jsx)):

```typescript
import React from 'react';
import { LeafletMap } from 'reaflet-map';
import { LeafletTileLayer } from 'reaflet-map/raster';

export default function App() {
  const [center] = useState([37.774546, -122.433523]);
  return (
    <LeafletMap
      center={center}
      zoom={8}
      options={{
        minZoom: 5,
        maxZoom: 10,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <LeafletTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        options={{
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }}
      />
    </LeafletMap>
  );
}
```

### next.js

You will have to [dynamically import](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr)
the components with no ssr when using reaflet in nextjs projects. The easiest way is to wrap your `<LeafletMap>`
implementation in another component and then dynamically import that component.

MyLeafletContainer.tsx

```typescript
export default function MyLeafletContainer() {
  return (
    <LeafletMap center={[37.774546, -122.433523]}>
      <LeafletTileLayer />
    </LeafletMap>
  );
}
```

page.tsx

```typescript
import dynamic from 'next/dynamic';
const MyLeafletContainer = dynamic(() => import('./MyLeafletContainer'), {
  ssr: false,
});

export default function Home() {
  return <MyLeafletContainer />;
}
```
