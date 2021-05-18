import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import '@/styles/login.scss';

import { Link, useHistory } from 'react-router-dom';
import Footer from '@/components/footer';
import Logo from '@/components/logo';
import UserApi from '../api/useAPI';
import crypt from '../contants/crypt';

export default function LoginPage() {
  useEffect(() => {
    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('privateKey', '');
    localStorage.setItem('publicKey', '');
  });
  const history = useHistory();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDecryptPK = (secretKey, encrypted) => {
    const decrypt = crypt.decrypt(encrypted, secretKey);
    const key = crypt.keyFromPrivate(decrypt);
    localStorage.setItem('privateKey', `${key.privateKey}`);
    localStorage.setItem('publicKey', `${key.publicKey}`);
  };

  function handleSubmitClick() {
    const fetchPostUser = async () => {
      const data = { email, hash: crypt.hash(password) };
      try {
        const url = '/login';
        const response = await UserApi.post(url, data);
        if (response.status) {
          switch (response.status) {
            case 200:
              handleDecryptPK(password, response.data.crypt);
              localStorage.setItem('isLogin', 'true');
              history.push('/');
              break;
            default:
              return;
          }
        }
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
          let message = '';
          switch (status) {
            case 400:
              message = 'Email hoặc mật khẩu không đúng!';
              setErrorMessage(message);
              setShowErrorMessage(true);
              break;
            case 500:
              break;
            default:
          }
        }
      }
    };
    fetchPostUser();
  }

  function handleOnChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleOnChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <span className="logo">
        <Logo />
      </span>

      <div className="login-form">
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={handleSubmitClick}
        >
          <h1 className="login-labelLogin">Đăng Nhập</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Hãy nhập tên đăng nhập!' }]}
            onChange={handleOnChangeEmail}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
            onChange={handleOnChangePassword}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          {showErrorMessage && (
            <p className="login__errorMessage">{errorMessage}</p>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>

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
