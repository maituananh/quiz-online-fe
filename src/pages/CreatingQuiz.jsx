import { Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";

function CreatingQuiz() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: "User" }, { title: "Bill" }]}
      />
      <div className="grid grid-cols-12 gap-4 bg-slate-500 h-7">
        <div>
          <p>Question 1</p>
        </div>
      </div>
    </Content>
  );
}

export default CreatingQuiz;
