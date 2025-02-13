import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./OurMissionAndValues.module.css";
import Mission from "../../assets/Mission.webp";

export const OurMissionAndValues: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.missionSection}>
      {/* Контейнер для контенту */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>{t("mission_title")}</h2>
        <div className={styles.textAndImageContainer}>
          <div className={styles.textContainer}>
            <p className={styles.sectionText}>{t("mission_text_1")}</p>
            <p className={styles.sectionText}>{t("mission_text_2")}</p>
            <p className={styles.sectionText}>{t("mission_text_3")}</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={Mission}
              alt={t("mission_image_alt")}
              className={styles.missionImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
