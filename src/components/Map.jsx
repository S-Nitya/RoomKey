import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Navbar from "./Navbar";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current, {
        center: [19.076, 72.8777], // Mumbai center
        zoom: 2, // Initial zoom level (world view)
        zoomControl: true,
      });

      // Tile layer from OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Dormitory icon (working example)
      const dormitoryIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const dormitories = [
        {
          name: "Sadguru Sharanam",
          lat: 19.076,
          lon: 72.8777,
          price: "₹5000",
          available: true,
          address: "Mumbai, Maharashtra",
        },
        {
          name: "Ajanta",
          lat: 19.08,
          lon: 72.885,
          price: "₹4500",
          available: false,
          address: "Mumbai, Maharashtra",
        },
        {
          name: "Kedarnath",
          lat: 19.07,
          lon: 72.87,
          price: "₹4750",
          available: true,
          address: "Mumbai, Maharashtra",
        },
      ];

      // Landmarks data
      const landmarks = [
        { name: "Gateway of India", lat: 18.922, lon: 72.8347 },
        { name: "Marine Drive", lat: 18.943, lon: 72.823 },
        { name: "Chhatrapati Shivaji Terminus", lat: 18.94, lon: 72.835 },
      ];

      // Simple black transport icons
      const busIcon = L.icon({
        iconUrl:
          "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f68c.svg", // Black bus icon SVG
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28],
        className: "leaflet-black-icon",
      });

      const trainIcon = L.icon({
        iconUrl:
          "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f686.svg", // Black train icon SVG
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28],
        className: "leaflet-black-icon",
      });

      const metroIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61220.png", // Metro icon
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      const transportOptions = [
        {
          name: "Chhatrapati Shivaji Maharaj Terminus (CST)",
          lat: 18.94,
          lon: 72.835,
          icon: trainIcon,
        },
        {
          name: "Mumbai Central Railway Station",
          lat: 18.975,
          lon: 72.83,
          icon: trainIcon,
        },
        {
          name: "Andheri Railway Station",
          lat: 19.119,
          lon: 72.846,
          icon: trainIcon,
        },
        {
          name: "Dadar Railway Station",
          lat: 19.018,
          lon: 72.842,
          icon: trainIcon,
        },
        {
          name: "Versova Metro Station",
          lat: 19.117,
          lon: 72.825,
          icon: metroIcon,
        },
        {
          name: "Andheri Metro Station",
          lat: 19.129,
          lon: 72.832,
          icon: metroIcon,
        },
        {
          name: "Churchgate Metro Station",
          lat: 18.936,
          lon: 72.819,
          icon: metroIcon,
        },
        {
          name: "Shivaji Park Bus Stop",
          lat: 19.016,
          lon: 72.846,
          icon: busIcon,
        },
        { name: "Bandra Bus Depot", lat: 19.058, lon: 72.832, icon: busIcon },
        {
          name: "Ghatkopar Bus Station",
          lat: 19.09,
          lon: 72.918,
          icon: busIcon,
        },
        {
          name: "Lower Parel Bus Stop",
          lat: 18.993,
          lon: 72.827,
          icon: busIcon,
        },
      ];

      // Create markers for dormitories
      dormitories.forEach((d) => {
        const marker = L.marker([d.lat, d.lon], { icon: dormitoryIcon }).addTo(
          map
        );
        marker.bindPopup(
          `<b>${d.name}</b><br>Price: ${d.price}<br>Status: ${
            d.available ? "Available ✅" : "Booked ❌"
          }<br>Address: ${d.address}`
        );
        marker.bindTooltip(
          `${d.name}<br>Price: ${d.price}<br>Address: ${d.address}`,
          {
            permanent: false,
            direction: "top",
            offset: [0, -30],
          }
        );
        marker.on("mouseover", () => {
          marker.openTooltip();
          marker.openPopup();
        });
        marker.on("mouseout", () => {
          marker.closeTooltip();
          marker.closePopup();
        });
      });

      // Create markers for landmarks
      landmarks.forEach((l) => {
        L.marker([l.lat, l.lon]).addTo(map).bindPopup(`<b>${l.name}</b>`);
      });

      // Create markers for transport options with tooltips on hover
      transportOptions.forEach((t) => {
        const marker = L.marker([t.lat, t.lon], { icon: t.icon }).addTo(map);
        marker.bindPopup(`<b>${t.name}</b>`);
        marker.bindTooltip(`${t.name}`, {
          permanent: false,
          direction: "top",
          offset: [0, -24],
        });
        marker.on("mouseover", () => {
          marker.openTooltip();
        });
        marker.on("mouseout", () => {
          marker.closeTooltip();
        });
      });

      // Animation - Fly to Mumbai (initial world view to Mumbai zoom)
      setTimeout(() => {
        map.flyTo([19.076, 72.8777], 12, {
          duration: 4, // Duration of the zoom animation
          easeLinearity: 0.25, // The speed curve of the animation
        });
      }, 500); // Delay the animation so the map can load first

      // Routing Dormitory 1 → Gateway of India
      L.Routing.control({
        waypoints: [
          L.latLng(dormitories[0].lat, dormitories[0].lon),
          L.latLng(landmarks[0].lat, landmarks[0].lon),
        ],
        routeWhileDragging: true,
        lineOptions: { styles: [{ color: "#6FA1EC", weight: 4 }] },
      }).addTo(map);
    }
  }, []); // <-- added empty dependency array

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingTop: "5.5rem",
      }}
    >
      <Navbar />
      <div
        ref={mapRef}
        style={{
          height: "100vh", // Fullscreen height
          width: "100%", // Full width
          borderRadius: "0", // Optional: if you want sharp edges
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default Map;
