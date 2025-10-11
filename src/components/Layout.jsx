import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layoutcontainer}>
      <main className={styles.maincontent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import FooterHeader from "./FooterHeader";
// import "./Layout.css"; // For sticky footer

// const Layout = ({ children }) => {
//   return (
//     <div className="layout-container">
//       <FooterHeader />
//       <main className="main-content">{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
