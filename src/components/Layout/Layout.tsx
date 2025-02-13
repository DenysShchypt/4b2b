import { Suspense } from "react";
import { Header } from "../Header/Header";
import styles from "./Layout.module.css";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Suspense fallback={<Loader />}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </Suspense>

      <Footer />
    </div>
  );
};

export default Layout;
