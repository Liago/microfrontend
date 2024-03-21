import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

interface Props {
  onSubmitHandler: () => void;
  otherProp: string;
}
const LoginForm = ({ onSubmitHandler, otherProp }: Props) => {
  console.log("Props", {
    fn: onSubmitHandler,
    string: otherProp,
  });
  return (
    <>
      <Form name="login-form" initialValues={{ remember: true }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
