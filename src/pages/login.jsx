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
  useEffect(() => {
    /* -- turn off login feature--
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('email', 'nike@gmail.com');
    handleDecryptPK(
      '12345678zZ@',
      'U2FsdGVkX183E5jD9xFq9pTTDZQqQLuCMCDpG9n7qC+6aYoPDlRFzva/3h1hjNFJ12PqhZtmzBCEa3lNvk2rlRUEMg556+pVkZAJqjeRP8kId67w6XQLTZc5K76zqwLS'
    );
    history.push('/');
  */

    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('privateKey', '');
    localStorage.setItem('publicKey', '');
  });
  function handleSubmitClick() {
    const fetchPostUser = async () => {
      const data = { email, password: crypt.hash(password) };
      try {
        const url = '/login';
        const response = await UserApi.post(url, data);
        if (response.status) {
          switch (response.status) {
            case 200:
              
              console.log(response);
              localStorage.setItem('accessToken', response.data.accessToken);
              localStorage.setItem('refreshToken', response.data.refreshToken);
              handleDecryptPK(password, response.data.user.crypt);
              localStorage.setItem('email', response.data.user.email);
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
              message = 'Email ho???c m???t kh???u kh??ng ????ng!';
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
          <h1 className="login-labelLogin">????ng Nh???p</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'H??y nh???p t??n ????ng nh???p!' }]}
            onChange={handleOnChangeEmail}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="T??n ????ng nh???p"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'H??y nh???p m???t kh???u!' }]}
            onChange={handleOnChangePassword}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="M???t kh???u"
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
              ????ng nh???p
            </Button>

            <p className="login-form-forgot">B???n ???? qu??n m???t kh???u ?</p>
            <p className="login-regitser">
              B???n ch??a c?? t??i kho???n ?<Link to="/register"> ????ng k?? </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
