import { useTranslation } from "react-i18next";
import Bots from "../../assets/AboutUs/Bots.png";
import Meeting from "../../assets/AboutUs/Meeting.png";
import Integration from "../../assets/AboutUs/Integration.png";
import Analytics from "../../assets/AboutUs/Analytics.png";
import Automation from "../../assets/AboutUs/Automation.png"; // Нове зображення для автоматизації
import Predictive from "../../assets/AboutUs/Predictive.png"; // Нове зображення для передбачувальних технологій
import styles from "./AboutUs.module.css";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutUsContainer}>
      {/* Заголовок сторінки */}
      <header className={styles.header}>
        <h1>{t("aboutUs.title")}</h1>
        <p>{t("aboutUs.description")}</p>
      </header>

      {/* Секція "What We Do" */}
      <section className={styles.section}>
        <h2>{t("aboutUs.whatWeDo")}</h2>
        <p>{t("aboutUs.whatWeDoDescription")}</p>
      </section>

      {/* Секція послуг з зображеннями */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {/* AI Боти */}
          <div className={styles.serviceItem}>
            <img
              src={Bots}
              alt={t("aboutUs.aiBotsAlt")}
              className={styles.serviceImage}
            />
            <div className={styles.serviceContent}>
              <h3>{t("aboutUs.aiBots")}</h3>
              <p>{t("aboutUs.aiBotsDescription")}</p>
            </div>
          </div>

          {/* Запис зустрічей */}
          <div className={styles.serviceItem}>
            <img
              src={Meeting}
              alt={t("aboutUs.meetingRecordingAlt")}
              className={styles.serviceImage}
            />
            <div className={styles.serviceContent}>
              <h3>{t("aboutUs.meetingRecording")}</h3>
              <p>{t("aboutUs.meetingRecordingDescription")}</p>
            </div>
          </div>

          {/* Інтеграція ботів */}
          <div className={styles.serviceItem}>
            <img
              src={Integration}
              alt={t("aboutUs.botIntegrationAlt")}
              className={styles.serviceImage}
            />
            <div className={styles.serviceContent}>
              <h3>{t("aboutUs.botIntegration")}</h3>
              <p>{t("aboutUs.botIntegrationDescription")}</p>
            </div>
          </div>

          {/* Аналітика даних */}
          <div className={styles.serviceItem}>
            <img
              src={Analytics}
              alt={t("aboutUs.dataAnalyticsAlt")}
              className={styles.serviceImage}
            />
            <div className={styles.serviceContent}>
              <h3>{t("aboutUs.dataAnalytics")}</h3>
              <p>{t("aboutUs.dataAnalyticsDescription")}</p>
            </div>
          </div>

          {/* Автоматизація процесів */}
          <div className={styles.serviceItem}>
            <img
              src={Automation} // Нове зображення
              alt={t("aboutUs.automationAlt")}
              className={styles.serviceImage}
            />
            <div className={styles.serviceContent}>
              <h3>{t("aboutUs.automation")}</h3>
              <p>{t("aboutUs.automationDescription")}</p>
            </div>
          </div>

          {/* Передбачувальні технології */}
          <div className={styles.serviceItem}>
            <img
              src={Predictive} // Нове зображення
              alt={t("aboutUs.predictiveAlt")}
              className={styles.serviceImage}
            />
            <div className={styles.serviceContent}>
              <h3>{t("aboutUs.predictive")}</h3>
              <p>{t("aboutUs.predictiveDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Секція "Why Us" */}
      <section className={styles.section}>
        <h2>{t("aboutUs.whyUs")}</h2>
        <ul className={styles.reasonsList}>
          {(t("aboutUs.reasons", { returnObjects: true }) as string[]).map(
            (reason: string, index: number) => (
              <li key={index} className={styles.reasonItem}>
                {reason}
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
