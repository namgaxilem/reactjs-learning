import { KeyOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
  Layout,
  notification,
  Typography,
} from "antd";
import MS_LOGO from "assets/ms_logo.png";
import styles from "./Login.module.less";
import { PublicClientApplication } from "@azure/msal-browser";
import { AADConfig, config } from "config/config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store/user/userSlice";
import User from "types/User";

const { Text } = Typography;

const Login = () => {
  const user: User = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [publicClientApplication] = useState<PublicClientApplication>(
    new PublicClientApplication({
      auth: {
        clientId: AADConfig.appId,
        redirectUri: AADConfig.redirectUri,
        authority: AADConfig.authority,
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
      },
    })
  );

  useEffect(() => {
    localStorage.setItem(config.localStorage.userKey, JSON.stringify(user))
    if (user) {
      window.location.reload();
    }
  }, [user]);

  const onFinish = () => {
    const args = {
      message: "Notification",
      description:
        "Currently only support AAD authentication",
    };
    notification.open(args);
  };

  const onAADLoginClick = async () => {
    try {
      const loginResponse = await publicClientApplication.loginPopup({
        scopes: AADConfig.scopes,
      });
      loginResponse &&
        dispatch(
          setUser({
            email: loginResponse.account && loginResponse.account.username,
            name: loginResponse.account && loginResponse.account.name,
            tokenType: loginResponse.tokenType,
            token: loginResponse.accessToken,
            expiresOn: loginResponse.expiresOn && loginResponse.expiresOn.getTime(),
          })
        );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout className={styles.layout}>
      <Card
        className={styles.loginForm}
        title={
          <div style={{ textAlign: "center" }}>
            <Text strong className={styles.logoText}>
              DHP EventProc
            </Text>
          </div>
        }
      >
        <Form
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input
              placeholder="Username"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a
              className="login-form-forgot"
              href="/reset-password"
              style={{ float: "right" }}
            >
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              icon={<KeyOutlined />}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>

        <Divider orientation="center" plain>
          Or
        </Divider>

        <Button
          type="dashed"
          block
          className={styles.OptionalLoginButton}
          onClick={onAADLoginClick}
        >
          <img src={MS_LOGO} alt="MS Logo" className={styles.ms_logo} />
          <Text style={{ width: "100%" }}>Login with AAD</Text>
        </Button>
      </Card>
    </Layout>
  );
};

export default Login;
