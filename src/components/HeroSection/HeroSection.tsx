import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeroSection.module.css";
import heroSection from "../../assets/heroSection.webp";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      {/* Зображення зліва */}
      <div className={styles.imageContainer}>
        <img src={heroSection} alt="AI Agents" className={styles.heroImage} />
      </div>

      {/* Контент справа */}
      <div className={styles.contentContainer}>
        {/* Заголовок зверху */}
        <h1 className={styles.sectionTitle}>{t("hero_title")}</h1>

        {/* Опис посередині */}
        <p className={styles.sectionSubtitle}>{t("hero_subtitle")}</p>

        {/* Кнопка знизу */}
        <a href="#contactSection" className={styles.contactButton}>
          {t("contact_button")}
        </a>
      </div>
    </section>
  );
};
