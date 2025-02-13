import { useTranslation } from "react-i18next";
import styles from "./AiAgents.module.css";
import Process from "../../assets/AIAgents/Process.png";
import Customer from "../../assets/AIAgents/Customer.png";
import Personalized from "../../assets/AIAgents/Personalized.png";
import Adaptive from "../../assets/AIAgents/Adaptive.png";
import Automatic from "../../assets/AIAgents/Automatic.png";
import Skill from "../../assets/AIAgents/Interactive.png";
import Chatbot from "../../assets/AIAgents/Chatbot.png";
import Sales from "../../assets/AIAgents/Sales.png";
import Learning from "../../assets/AIAgents/Learning.png";

function AiAgents() {
  const { t } = useTranslation();

  return (
    <div className={styles.aiAgentsContainer}>
      {/* Головний банер */}
      <section className={styles.heroSection}>
        <h1>{t("aiAgents.heroTitle")}</h1>
        <p>{t("aiAgents.heroDescription")}</p>
      </section>

      {/* Як AI допомагає в бізнесі */}
      <section className={styles.businessSection}>
        <h2>{t("aiAgents.businessTitle")}</h2>
        <div className={styles.businessGrid}>
          {/* Перший елемент */}
          <div className={styles.businessItem}>
            <img src={Process} className={styles.itemImage} />
            <h3>{t("aiAgents.businessItems.0.title")}</h3>
            <p>{t("aiAgents.businessItems.0.description")}</p>
          </div>

          {/* Другий елемент */}
          <div className={styles.businessItem}>
            <img
              src={Customer}
              alt="Customer Service Improvement"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.businessItems.1.title")}</h3>
            <p>{t("aiAgents.businessItems.1.description")}</p>
          </div>

          {/* Третій елемент */}
          <div className={styles.businessItem}>
            <img
              src={Personalized}
              alt="Personalized User Experience"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.businessItems.2.title")}</h3>
            <p>{t("aiAgents.businessItems.2.description")}</p>
          </div>
        </div>
      </section>

      {/* Як AI допомагає в навчанні */}
      <section className={styles.educationSection}>
        <h2>{t("aiAgents.educationTitle")}</h2>
        <div className={styles.educationGrid}>
          {/* Перший елемент */}
          <div className={styles.educationItem}>
            <img
              src={Adaptive}
              alt="Adaptive Learning"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.educationItems.0.title")}</h3>
            <p>{t("aiAgents.educationItems.0.description")}</p>
          </div>

          {/* Другий елемент */}
          <div className={styles.educationItem}>
            <img
              src={Automatic}
              alt="Automatic Grading"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.educationItems.1.title")}</h3>
            <p>{t("aiAgents.educationItems.1.description")}</p>
          </div>

          {/* Третій елемент */}
          <div className={styles.educationItem}>
            <img
              src={Skill}
              alt="Skill Development"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.educationItems.2.title")}</h3>
            <p>{t("aiAgents.educationItems.2.description")}</p>
          </div>
        </div>
      </section>

      {/* Приклади додатків від нашої компанії */}
      <section className={styles.applicationsSection}>
        <h2>{t("aiAgents.applicationsTitle")}</h2>
        <div className={styles.applicationsGrid}>
          {/* Перший елемент */}
          <div className={styles.applicationItem}>
            <img
              src={Chatbot}
              alt="Chatbot for Online Store"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.applicationsItems.0.title")}</h3>
            <p>{t("aiAgents.applicationsItems.0.description")}</p>
          </div>

          {/* Другий елемент */}
          <div className={styles.applicationItem}>
            <img
              src={Sales}
              alt="Sales Forecasting System"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.applicationsItems.1.title")}</h3>
            <p>{t("aiAgents.applicationsItems.1.description")}</p>
          </div>

          {/* Третій елемент */}
          <div className={styles.applicationItem}>
            <img
              src={Learning}
              alt="Learning Platform with AI Trainer"
              className={styles.itemImage}
            />
            <h3>{t("aiAgents.applicationsItems.2.title")}</h3>
            <p>{t("aiAgents.applicationsItems.2.description")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiAgents;
