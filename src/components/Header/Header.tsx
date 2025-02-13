import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styles from "./Header.module.css";
import logo4B2B from "../../assets/BBlogo.png";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTopRow}>
          <div className={styles.logo}>
            <a href="/" className={styles.logoLink}>
              <img
                src={logo4B2B}
                alt="4B2B Logo"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>4b2b</span>
            </a>
          </div>
          {isMobile && <LanguageSwitcher />}
        </div>

        {/* Навігація */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/about-us" className={styles.navLink}>
                {t("about_us")}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/ai-agents" className={styles.navLink}>
                {t("ai_agents")}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact-us" className={styles.navLink}>
                {t("contact_us")}
              </a>
            </li>
            {/* <li className={styles.navItem}>
              <a href="/our-works" className={styles.navLink}>
                {t("our_works")}
              </a>
            </li> */}
          </ul>
        </nav>
        {!isMobile && <LanguageSwitcher />}
      </div>
    </header>
  );
};
