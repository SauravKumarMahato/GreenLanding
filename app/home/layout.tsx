import { ReactNode } from "react";
import styles from "./layout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AboutPage from "./About";
import BaseFooter from "./BaseFooter";
import Contribute from "./Contribution";
import NewsUpdate from "./NewsUpdate";

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
        <div className={styles.plant_layout}>{children}</div>

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

      <div className={styles.news_update}>
        <NewsUpdate />
      </div>
      <BaseFooter />
    </>
  );
};

export default Layout;
