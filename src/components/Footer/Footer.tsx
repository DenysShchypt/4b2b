import React from "react";
import { useTranslation } from "react-i18next";
import logo4B2B from "../../assets/BBlogo.png";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
//   FaTelegramPlane,
//   FaSnapchat,
// } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Ліва частина - Навігація */}
        {/* <nav className={styles.nav}>
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
            <li className={styles.navItem}>
              <a href="/our-works" className={styles.navLink}>
                {t("our_works")}
              </a>
            </li>
          </ul>
        </nav> */}

        {/* Центральна частина - Логотип та Copyright */}
        <div className={styles.logoContainer}>
          <img src={logo4B2B} alt="Company Logo" className={styles.logo} />
          <p className={styles.copyright}>{t("copyright")}</p>
        </div>

        {/* Права частина - Іконки соцмереж */}
        {/* <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://twitter.com"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://linkedin.com"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://instagram.com"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://youtube.com"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://tiktok.com"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <FaTiktok size={28} />
          </a>
          <a
            href="https://telegram.org"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <FaTelegramPlane size={28} />
          </a>
          <a
            href="https://snapchat.com"
            className={styles.socialIcon}
            target="_blank"
            rel="noopener noreferrer"
            title="Snapchat"
          >
            <FaSnapchat size={28} />
          </a>
        </div> */}
      </div>
    </footer>
  );
};
