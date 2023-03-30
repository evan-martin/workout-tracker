import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import polyline from '@mapbox/polyline';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ activity }) => {

    mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN
    const coordinates = polyline.decode(activity.map.summary_polyline);

    let geoJSON = {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": []
        }
    };

    for (let i = 0; i < coordinates.length; i++) {
        coordinates[i] = [
            coordinates[i][1],
            coordinates[i][0]
        ];
    }

    const map = useRef(null);
    const [lng, setLng] = useState(coordinates[0][0]);
    const [lat, setLat] = useState(coordinates[0][1]);
    const [zoom, setZoom] = useState(10);

    const boundaries = coordinates.reduce(function (boundaries, coord) {
        return boundaries.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

    geoJSON.geometry.coordinates = coordinates;

    useEffect(() => {

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: document.getElementById('map-container'),
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [lng, lat],
            zoom: zoom,
            cooperativeGestures: true
        });

        map.current.addControl(new mapboxgl.NavigationControl());

        map.current.on('load', () => {
            map.current.addSource('route', { type: 'geojson', data: geoJSON });
            map.current.addLayer({
                "id": "route",
                "type": "line",
                "source": "route",
                "paint": {
                    "line-color": "#373dad",
                    "line-opacity": 1,
                    "line-width": 5
                }
            });
            map.current.fitBounds(boundaries, {
                padding: 80
            });

            
        });
    }, []);

    return (
        <div id='map-container'> </div>
    )
}

export default Map;