// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import reportWebVitals from './reportWebVitals'; // Corrected import

const root = ReactDOM.createRoot(document.getElementById('root'));

const sendToServer = (metric) => {
  const url = "http://localhost:3001/metrics";

  const payload = {
    metricName: metric.name,
    metricValue: metric.value,
  };

  axios.post(url, payload)
    .then(response => {
      console.log('Metric sent successfully', response.data);
    })
    .catch(error => {
      console.error('Error sending metric:', error);
    });
};

// Report web vitals to your server
reportWebVitals(sendToServer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
