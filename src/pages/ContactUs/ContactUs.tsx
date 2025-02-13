import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import styles from "./ContactUs.module.css"; // Стилі для сторінки

export const ContactUs = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Валідація email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Валідація імені
  const validateName = (name: string): boolean => {
    return name.trim() !== "";
  };

  // Валідація повідомлення
  const validateMessage = (message: string): boolean => {
    return message.trim() !== "";
  };

  // Відправка форми
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!validateName(name)) {
      setFormMessage(t("invalid_name"));
      isValid = false;
    } else if (!validateEmail(email)) {
      setFormMessage(t("invalid_email"));
      isValid = false;
    } else if (!validateMessage(messageText)) {
      setFormMessage(t("invalid_message"));
      isValid = false;
    } else if (!termsAccepted) {
      setFormMessage(t("terms_not_accepted"));
      isValid = false;
    }

    if (!isValid) {
      setIsSuccess(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://4b2bai.eon.plus/message",
        { name, email, message: messageText },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setFormMessage(t("success_message"));
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessageText("");
        setTermsAccepted(false);
      } else {
        setFormMessage(t("error_message"));
        setIsSuccess(false);
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        console.error("Server error response:", axiosError.response?.data);
        setFormMessage(t("error_message"));
      } else if (axiosError.request) {
        console.error("No response from server:", axiosError.request);
        setFormMessage(t("server_unavailable"));
      } else {
        console.error("Error sending message:", error);
        setFormMessage(t("error_message"));
      }

      setIsSuccess(false);
    }
  };

  return (
    <div className={styles.contactUs}>
      {/* Заголовок секції */}
      <h1>{t("contact_us")}</h1>

      {/* Контейнер для контактної інформації та форми */}
      <div className={styles.container}>
        {/* Контактна інформація */}
        <div className={styles.contactInfo}>
          <h2>{t("contact_info")}</h2>
          <p>{t("address")}</p>
          {/* <p>{t("phone")}</p> */}
          <p>{t("email")}</p>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          {/* Поле для імені */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              {t("form_name_label")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("form_name_placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          {/* Поле для email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              {t("form_email_label")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("form_email_placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          {/* Поле для повідомлення */}
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              {t("form_message_label")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t("form_message_placeholder")}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className={styles.textarea}
              required
            />
          </div>

          {/* Чекбокс для умов */}
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className={styles.customCheckbox}
                required
              />
              <span className={styles.checkboxText}>
                {t("i_accept")}{" "}
                <a href="/terms" className={styles.noUnderlineLink}>
                  {t("terms_link")}
                </a>
              </span>
            </label>
          </div>

          {/* Кнопка відправлення */}
          <button type="submit" className={styles.submitButton}>
            {t("form_submit_button")}
          </button>

          {/* Повідомлення про результат */}
          {formMessage && (
            <p
              className={
                isSuccess ? styles.successMessage : styles.errorMessage
              }
            >
              {formMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
