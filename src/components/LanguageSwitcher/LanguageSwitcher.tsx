import React, { useState, useRef, useCallback, useEffect } from "react";
import i18n from "i18next";
import Deutsch from "../../assets/germany.png";
import Ukraine from "../../assets/ukraine.png";
import English from "../../assets/united-kingdom.png";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Закриваємо випадаюче меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = useCallback(() => {
    setIsLanguageDropdownOpen((prev) => !prev);
  }, []);

  // Змінюємо мову
  const changeLanguage = useCallback(
    async (language: string) => {
      i18n.changeLanguage(language);
      setIsLanguageDropdownOpen(false);
    },
    [i18n]
  );

  return (
    <div ref={menuRef} className={styles.languageSwitcher}>
      {/* Кнопка перемикача мов */}
      <button
        className={styles.languageButton}
        onClick={toggleLanguageDropdown}
        aria-haspopup="true"
        aria-expanded={isLanguageDropdownOpen}
      >
        {/* Показуємо флаг поточної мови */}
        {i18n.language === "en" && (
          <img src={English} alt="English" className={styles.flagIcon} />
        )}
        {i18n.language === "de" && (
          <img src={Deutsch} alt="Deutsch" className={styles.flagIcon} />
        )}
        {i18n.language === "uk" && (
          <img src={Ukraine} alt="Українська" className={styles.flagIcon} />
        )}
        {/* Назва поточної мови */}
        {i18n.language === "en" && "EN"}
        {i18n.language === "de" && "DE"}
        {i18n.language === "uk" && "UA"}
      </button>

      {/* Випадаюче меню з мовами */}
      {isLanguageDropdownOpen && (
        <div className={styles.menu} role="menu">
          <ul className={styles.dropdown}>
            {["en", "de", "uk"].map((lang) => (
              <li key={lang}>
                <button
                  onClick={() => changeLanguage(lang)}
                  className={styles.user_chose}
                  role="menuitem"
                >
                  {/* Флаг та назва мови */}
                  {lang === "en" && (
                    <>
                      <img
                        src={English}
                        alt="English"
                        className={styles.flagIcon}
                      />
                      English
                    </>
                  )}
                  {lang === "de" && (
                    <>
                      <img
                        src={Deutsch}
                        alt="Deutsch"
                        className={styles.flagIcon}
                      />
                      Deutsch
                    </>
                  )}
                  {lang === "uk" && (
                    <>
                      <img
                        src={Ukraine}
                        alt="Українська"
                        className={styles.flagIcon}
                      />
                      Українська
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
