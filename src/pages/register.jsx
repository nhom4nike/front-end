import React from 'react';
import '@/styles/register.scss';
import { Form, Input, Button } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import Footer from '../components/footer';
import Logo from '../components/logo';

export default function RegisterPage() {
  const history = useHistory();

  function handleOnChange(key, value) {
    localStorage.setItem(key, value);
  }
  function handleOnClick() {
    localStorage.setItem('isRegisterPassword', 'true');
    history.push('/registerNext');
  }

  return (
    <div className="register">
      <div>
        <Logo />
      </div>
      <div className="register__form">
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={handleOnClick}
        >
          <h1 className="register__labelRegister">Đăng kí</h1>
          <p className="register__labelInput">Họ và tên đệm</p>
          <p className="register__labelInput">Tên</p>

          <Form.Item style={{ marginBottom: 24 }}>
            <Form.Item
              name="FisrtName"
              rules={[{ required: true, message: 'Hãy nhập họ và tên đệm!' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
              onChange={(e) => handleOnChange('FisrtName', e.target.value)}
              initialValue={localStorage.getItem('FisrtName') || ''}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="LastName"
              rules={[{ required: true, message: 'Hãy nhập tên!' }]}
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
              }}
              onChange={(e) => handleOnChange('LastName', e.target.value)}
              initialValue={localStorage.getItem('LastName') || ''}
            >
              <Input />
            </Form.Item>
          </Form.Item>
          <p className="register__labelInput">Tên đăng nhập</p>
          <Form.Item
            name="UserName"
            rules={[
              {
                required: true,
                message: 'Hãy nhập tên đăng nhập',
              },
            ]}
            onChange={(e) => handleOnChange('username', e.target.value)}
            initialValue={localStorage.getItem('username') || ''}
          >
            <Input />
          </Form.Item>
          <p className="register__labelInput">Địa chỉ email</p>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Địa chỉ email không đúng!',
              },
              {
                required: true,
                message: 'Hãy nhập email!',
              },
            ]}
            onChange={(e) => handleOnChange('email', e.target.value)}
            initialValue={localStorage.getItem('email') || ''}
          >
            <Input />
          </Form.Item>
          <p className="register__labelInput">Số điện thoại</p>
          <p className="register__labelInput">Chức vụ</p>
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              name="Telephone"
              rules={[
                {
                  pattern: /[0-9]{10,12}/,
                  message: 'Số điện thoại không hợp lệ!',
                },
                {
                  required: true,
                  message: 'Hãy nhập số điện thoại!',
                },
              ]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
              onChange={(e) => handleOnChange('Telephone', e.target.value)}
              initialValue={localStorage.getItem('Telephone') || ''}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Position"
              rules={[{ required: true, message: 'Hãy nhập chức vụ!' }]}
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
              }}
              onChange={(e) => handleOnChange('Position', e.target.value)}
              initialValue={localStorage.getItem('Position') || ''}
            >
              <Input />
            </Form.Item>
          </Form.Item>
          {/* <p className="register__labelInput">Ngành nghề</p> */}
          {/* <Form.Item
            name="job"
            rules={[{ required: true, message: 'Hãy chọn ngành nghề!' }]}
          >
            <Select
              onChange={(value) => handleOnChange("job",value)}
              allowClear
            >
              <Option value="IT">IT</Option>
              <Option value="SALE">Sale</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register__button"
            >
              Tiếp theo
            </Button>
          </Form.Item>
          <p className="register__login">
            Bạn đã có tài khoản ?<Link to="/login"> Đăng nhập </Link>
          </p>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
