import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./TermsAndConditions.module.css";

const TermsAndConditions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.termsContainer}>
      <header className={styles.header}>
        <h1>{t("terms.title")}</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>{t("terms.introduction.title")}</h2>
          <p>{t("terms.introduction.description")}</p>
        </section>

        <section className={styles.section}>
          <h2>{t("terms.dataCollection.title")}</h2>
          <p>{t("terms.dataCollection.description")}</p>
          <ul className={styles.list}>
            <li>{t("terms.dataCollection.point1")}</li>
            <li>{t("terms.dataCollection.point2")}</li>
            <li>{t("terms.dataCollection.point3")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t("terms.dataSecurity.title")}</h2>
          <p>{t("terms.dataSecurity.description")}</p>
          <ul className={styles.list}>
            <li>{t("terms.dataSecurity.point1")}</li>
            <li>{t("terms.dataSecurity.point2")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t("terms.userResponsibilities.title")}</h2>
          <p>{t("terms.userResponsibilities.description")}</p>
          <ul className={styles.list}>
            <li>{t("terms.userResponsibilities.point1")}</li>
            <li>{t("terms.userResponsibilities.point2")}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t("terms.thirdPartyServices.title")}</h2>
          <p>{t("terms.thirdPartyServices.description")}</p>
        </section>

        <section className={styles.section}>
          <h2>{t("terms.cookies.title")}</h2>
          <p>{t("terms.cookies.description")}</p>
        </section>

        <section className={styles.section}>
          <h2>{t("terms.rightToModify.title")}</h2>
          <p>{t("terms.rightToModify.description")}</p>
        </section>

        <section className={styles.section}>
          <h2>{t("terms.contactInformation.title")}</h2>
          <p>
            {t("terms.contactInformation.description", {
              email: "support@4b2b.ai",
            })}
          </p>
        </section>

        <footer className={styles.footer}>
          <p>{t("terms.agreement")}</p>
        </footer>
      </main>
    </div>
  );
};

export default TermsAndConditions;
