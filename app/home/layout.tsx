import { ReactNode } from "react";
import styles from "./layout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AboutPage from "./About";
import BaseFooter from "./BaseFooter";
import Contribute from "./Contribution";
import PopupAnimation from "./PopupAnimation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.layout}>
        <div>
          <Navigation />
        </div>
        <PopupAnimation>
          <div className={styles.plant_layout}>{children}</div>
        </PopupAnimation>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>

      <div className={styles.about_page}>
        <AboutPage />
      </div>

      <div className={styles.contribute}>
        <Contribute />
      </div>
      <BaseFooter />
    </>
  );
};

export default Layout;
