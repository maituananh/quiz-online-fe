import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;

function Home() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: "User" }, { title: "Bill" }]}
      />
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
          borderRadius: "",
        }}
      >
        Bill is a cat.
      </div>
    </Content>
  );
}

export default Home;
