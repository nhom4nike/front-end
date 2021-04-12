import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import '@/styles/login.css';
import { Link } from 'react-router-dom';
import Footer from '@/components/footer';
import Logo from '@/components/logo';

export default function LoginPage() {
  return (
    <div className="login">
      <Logo />
      <div className="login-form">
        <Form name="normal_login" initialValues={{ remember: true }}>
          <h1 className="login-labelLogin">Đăng Nhập</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Hãy nhập Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Hãy nhập Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Link to="/">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng nhập
              </Button>
            </Link>

            <p className="login-form-forgot">Bạn đã quên mật khẩu ?</p>
            <p className="login-regitser">
              Bạn chưa có tài khoản ?<Link to="/register"> Đăng kí </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
