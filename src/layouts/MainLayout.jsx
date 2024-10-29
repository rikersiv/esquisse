import styles from "./MainLayout.module.css";
import Footer from "./Footer";
import Header from "./Header";


function MainLayout({ children }) {
  return (
    <div className={styles.mainLayoutWrapper}>
      <div className={styles.contents}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
      
    </div>
  );
}

export default MainLayout;