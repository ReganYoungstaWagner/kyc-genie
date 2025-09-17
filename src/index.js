import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingScreen from './screens/LandingScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import VerificationScreen from './screens/VerificationScreen';
import DashboardScreen from './screens/DashboardScreen';
import ShareProfileScreen from './screens/ShareProfileScreen';
import InstitutionLoginScreen from './screens/InstitutionLoginScreen';
import InstitutionRequestScreen from './screens/InstitutionRequestScreen';
import InstitutionProfileViewScreen from './screens/InstitutionProfileViewScreen';
import InstitutionIntegrationScreen from './screens/InstitutionIntegrationScreen';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/register" element={<RegistrationScreen />} />
      <Route path="/verify" element={<VerificationScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/share" element={<ShareProfileScreen />} />
      <Route path="/institution/login" element={<InstitutionLoginScreen />} />
      <Route path="/institution/request" element={<InstitutionRequestScreen />} />
      <Route path="/institution/profile" element={<InstitutionProfileViewScreen />} />
      <Route path="/institution/integration" element={<InstitutionIntegrationScreen />} />
    </Routes>
  </BrowserRouter>
);