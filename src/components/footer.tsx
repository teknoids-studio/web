import Image from "next/image";
import styles from "./footer.module.scss";
import config from "@/config";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexGrid}>
        <div className={`${styles.column} ${styles.about}`}>
          <h3>About Me</h3>
          <p>
            Dedicated to providing the best services and
            products to customers. The mission is to create value, make a
            difference and have fun doing it.
          </p>
        </div>

        {/* <div className={`${styles.column} ${styles.links}`}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#top">Home</a>
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
        </div> */}
        

        <div className={`${styles.column} ${styles.social}`}>
          <h3>Follow Me</h3>
          <a href="https://www.linkedin.com/company/teknoids.se/about/" target="_blank">
            Linked in
          </a>{" "}
          <span>|</span>
          <a href="https://github.com/teknoids-studio" target="_blank">
            GitHub
          </a>{" "}          
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; 2024 {config.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
