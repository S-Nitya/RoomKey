import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current).setView([19.076, 72.8777], 12); // Mumbai center

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
          name: "Pratibha Patil ",
          lat: 19.076,
          lon: 72.8777,
          price: "₹5000",
          available: true,
          address: "Mumbai, Maharashtra",
        },
        {
          name: "Dormitory 2",
          lat: 19.08,
          lon: 72.885,
          price: "₹4500",
          available: false,
          address: "Mumbai, Maharashtra",
        },
        {
          name: "Dormitory 3",
          lat: 19.07,
          lon: 72.87,
          price: "₹4750",
          available: true,
          address: "Mumbai, Maharashtra",
        },
      ];

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

        marker.on("mouseover", () => marker.openTooltip());
        marker.on("mouseout", () => marker.closeTooltip());
      });

      // Landmarks strictly in Mumbai
      const landmarks = [
        { name: "Gateway of India", lat: 18.922, lon: 72.8347 },
        { name: "Marine Drive", lat: 18.943, lon: 72.823 },
        { name: "Chhatrapati Shivaji Terminus", lat: 18.94, lon: 72.835 },
      ];

      landmarks.forEach((l) => {
        L.marker([l.lat, l.lon]).addTo(map).bindPopup(`<b>${l.name}</b>`);
      });

      // Transport icons with reliable URLs
      const busIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61456.png", // cleaner bus icon
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      const trainIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61222.png",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      const metroIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61220.png",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      // Transport options strictly in Mumbai
      const transportOptions = [
        // Train stations
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

        // Metro stations
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

        // Bus stops
        {
          name: "Shivaji Park Bus Stop",
          lat: 19.016,
          lon: 72.846,
          icon: busIcon,
        },
        {
          name: "Bandra Bus Depot",
          lat: 19.058,
          lon: 72.832,
          icon: busIcon,
        },
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

      transportOptions.forEach((t) => {
        L.marker([t.lat, t.lon], { icon: t.icon })
          .addTo(map)
          .bindPopup(`<b>${t.name}</b>`);
      });

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
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    />
  );
};

export default Map;
