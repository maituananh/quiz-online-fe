import FooterLayout from "@layouts/Default/Footer";
import HeaderLayout from "@layouts/Default/Header";
import SiderLayout from "@layouts/Default/Sider";
import { Layout } from "antd";

function DefaultLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderLayout />

      <Layout>
        <HeaderLayout />

        {children}

        <FooterLayout />
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
