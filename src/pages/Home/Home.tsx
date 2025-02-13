import { AiAgentsForBusiness } from "../../components/AiAgentsForBusiness/AiAgentsForBusiness";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { OurMissionAndValues } from "../../components/OurMissionAndValues/OurMissionAndValues";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Головний банер */}
      <HeroSection />
      <OurMissionAndValues />
      <AiAgentsForBusiness />
      <ContactForm />
    </div>
  );
}

export default Home;
