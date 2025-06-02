import { Layout } from "antd";

const { Footer } = Layout;

function FooterLayout() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
}

export default FooterLayout;
