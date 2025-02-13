import React from "react";
import styles from "./AiAgentsForBusiness.module.css";
import { useTranslation } from "react-i18next";
import Agent from "../../assets/Agents.webp";
import Driven from "../../assets/Driven.webp";
import Customer from "../../assets/Customer.webp";

export const AiAgentsForBusiness: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aiAgentsSection}>
      {/* Головний блок з заголовком і описом */}
      <div className={styles.headerContainer}>
        <h2 className={styles.sectionTitle}>{t("ai_agents_title")}</h2>
        <p className={styles.sectionDescription}>
          {t("ai_agents_description")}
        </p>
      </div>

      {/* Блоки з описом функціональності AI агентів */}
      <div className={styles.featuresContainer}>
        {/* Перший блок: AI Business Agents in Action */}
        <div className={styles.featureItem}>
          <img
            src={Agent}
            alt={t("ai_agent_in_action_alt")}
            className={styles.featureImage}
          />
          <div className={styles.descriptionContainer}>
            <h3 className={styles.featureTitle}>
              {t("ai_agent_in_action_title")}
            </h3>
            <p className={styles.featureText}>{t("ai_agent_in_action_text")}</p>
            {/* <button className={styles.learnMoreButton}>
              {t("learn_more_button")}
            </button> */}
          </div>
        </div>

        {/* Другий блок: Data-Driven Insights */}
        <div className={styles.featureItem}>
          <img
            src={Driven}
            alt={t("data_driven_insights_alt")}
            className={styles.featureImage}
          />
          <div className={styles.descriptionContainer}>
            <h3 className={styles.featureTitle}>
              {t("data_driven_insights_title")}
            </h3>
            <p className={styles.featureText}>
              {t("data_driven_insights_text")}
            </p>
            {/* <button className={styles.learnMoreButton}>
              {t("learn_more_button")}
            </button> */}
          </div>
        </div>

        {/* Третій блок: Enhanced Customer Support */}
        <div className={styles.featureItem}>
          <img
            src={Customer}
            alt={t("enhanced_customer_support_alt")}
            className={styles.featureImage}
          />
          <div className={styles.descriptionContainer}>
            <h3 className={styles.featureTitle}>
              {t("enhanced_customer_support_title")}
            </h3>
            <p className={styles.featureText}>
              {t("enhanced_customer_support_text")}
            </p>
            {/* <button className={styles.learnMoreButton}>
              {t("learn_more_button")}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
