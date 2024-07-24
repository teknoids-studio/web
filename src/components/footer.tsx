import Image from "next/image";
import styles from "./footer.module.scss";
import config from "@/config";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={`${styles.footer_section} ${styles.about}`}>
          <h3>About Us</h3>
          <p>
            We are a company dedicated to providing the best services and
            products to our customers. Our mission is to create value and make a
            difference.
          </p>
        </div>

        <div className={`${styles.footer_section} ${styles.links}`}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={`${styles.footer_section} ${styles.contact}`}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>

        <div className={`${styles.footer_section} ${styles.social}`}>
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>{" "}
          |
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>{" "}
          |
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; 2024 {config.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
