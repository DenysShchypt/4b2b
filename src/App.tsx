import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const AiAgents = lazy(() => import("./pages/AiAgents/AiAgents"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Terms = lazy(
  () => import("./pages/TermsAndConditions/TermsAndConditions")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="ai-agents" element={<AiAgents />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}

export default App;
