import React from "react";
import styles from "./ContactUs.module.css";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function ContactUs() {
  return (
    <div className={styles.contactUsMainDiv}>
      <div className={styles.contactUsHeadingDiv}>
        <div className={styles.contactUsSubHeadingDiv}>
          <h1>Get In Touch</h1>
          <p>
            Reach out to us for personalized random advice and random assistance
          </p>
        </div>
      </div>
      <div className={styles.contactUsFormDiv}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactSection}>
                <h2>Address</h2>
                <div className={styles.contactInfo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p>A-102, Janaki Bhawan, 3rd Floor,Nayapalli,Bhubaneswar</p>
                </div>
              </div>

              <div className={styles.contactSection}>
                <h2>Mobile</h2>
                <div className={styles.contactInfo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+919178017011">+91 9178017011</a>
                </div>
              </div>

              <div className={styles.contactSection}>
                <h2>Email</h2>
                <div className={styles.contactInfo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:mainstayorg.info@gmail.com">
                    mainstayorg.info@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.formContainer}>
              <h1>Contact us</h1>
              <form>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    className={styles.formInput}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Email Id"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    className={styles.formInput}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    className={styles.formInput}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="Message"
                    required
                  />
                </div>
                <div className={styles.btnDiv}>
                  <button type="submit" className={styles.submitButton}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
