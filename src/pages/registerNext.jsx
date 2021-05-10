import React, { useEffect, useState } from 'react';
import Logo from '@/components/logo';
import { Form, Input, Button } from 'antd';
import '@/styles/register.css';
import { Link , useHistory } from 'react-router-dom';
import Footer from '@/components/footer';
import UserApi from '../api/useAPI';


const RegisterNext = () => {
  useEffect(() => {
    localStorage.setItem('isRegisterPassword', 'false');
  });
  const history = useHistory();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmitClick() {
    const dataSend = {
      password,
      email: localStorage.getItem('email'),
      username: localStorage.getItem('username'),
    };
    const fetchPostUser = async () => {
      try {
        const url = '/register';
        const response = await UserApi.post(url, dataSend);
        if (response.status) {
          switch (response.status) {
            case 201:
              localStorage.clear();
              history.push('/login');
              break;
            default:
              return;
          }
        }
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          let message = '';
          switch (status) {
            case 400:
              switch (data.error.code) {
                case 'users/duplicate-email':
                  message = 'Email đã tồn tại';
                  break;
                case 'users/duplicate-username':
                  message = 'User đã tồn tại';
                  break;
                case 'users/invalid-email':
                  message = 'Email không hợp lệ';
                  break;
                case 'req/invalid-email':
                  message = 'Email không hợp lệ';
                  break;
                case 'users/weak-password':
                  message = 'Password quá yếu';
                  break;
                case 'req/missing-param':
                  message = 'Vui lòng nhập đầy đủ thông tin';
                  break;
                case 'req/type-mismatch':
                  message = 'Kiểu dữ liệu không đúng';
                  break;
                default:
                  return;
              }
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

  function handleOnChange(e) {
    setPassword(e.target.value);
    localStorage.setItem('password', e.target.value);
  }
  return (
    <div className="register">
      <Logo />
      <div className="register__form">
        <Form onFinish={handleSubmitClick}>
          <h1 className="register__labelRegister">Xác thực mật khẩu</h1>
          <p className="register__labelInput">Mật khẩu</p>
          <Form.Item
            name="password"
            rules={[
              {
                pattern: /(?=.*[a-z][A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,16})/,
                message: 'Mật khẩu không đủ mạnh!',
              },
              {
                required: true,
                message: 'Hãy nhập mật khẩu!',
              },
            ]}
            onChange={handleOnChange}
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
          {showErrorMessage && (
            <p className="register__errorMessage">{errorMessage}</p>
          )}
          <p className="register__labelInput">
            * Mật khẩu có độ dài từ 8-16 ký tự
          </p>
          <p className="register__labelInput">
            * Mật khẩu có các ký tự [a-zA-Z][0-9]
          </p>
          <p className="register__labelInput">
            * Mật khẩu có các ký tự đặc biệt @,#,...
          </p>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register__button"
            >
              Đăng kí
            </Button>
            <p className="register__login">
              Bạn đã có tài khoản ?<Link to="/login"> Đăng nhập </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterNext;
