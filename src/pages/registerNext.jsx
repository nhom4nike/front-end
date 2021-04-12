import React from 'react';
import Logo from '@/components/logo';
import { Form, Input, Button } from 'antd';
import '@/styles/register.css';
import { Link } from 'react-router-dom';
import Footer from '@/components/footer';

const RegisterNext = () => (
  <div className="register">
    <Logo />
    <div className="register__form">
      <Form>
        <h1 className="register__labelRegister">Xác thực mật khẩu</h1>
        <p className="register__labelInput">Mật khẩu</p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Hãy nhập mật khẩu!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <p className="register__labelInput">Xác thực mật khẩu</p>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Hãy nhập xác thực mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không khớp!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <p className="register__labelInput">
          * Mật khẩu có độ dài từ 8-16 ký tự
        </p>
        <p className="register__labelInput">
          * Mật khẩu có các ký tự [a-zA-Z][0-9]u
        </p>
        <p className="register__labelInput">
          * Mật khẩu có các ký tự đặc biệt @,#,...
        </p>
        <Form.Item>
          <Link to="/">
            <Button
              type="primary"
              htmlType="submit"
              className="register__button"
            >
              Đăng kí
            </Button>
          </Link>
          <p className="register__login">
            Bạn đã có tài khoản ?<Link to="/login"> Đăng nhập </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
    <Footer />
  </div>
);

export default RegisterNext;
