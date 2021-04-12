import React from 'react';
import '@/styles/register.css';
import { Form, Input, Select, Button } from 'antd';
import Footer from '../components/footer';
import Logo from '../components/logo';

export default function RegisterPage() {
  const { Option } = Select;
  return (
    <div className="register">
      <Logo />
      <Form
        name="normal_login"
        className="register__form"
        initialValues={{ remember: true }}
      >
        <h1 className="register__labelRegister">Đăng kí</h1>
        <p className="register__labelInput">Họ và tên đệm</p>
        <p className="register__labelInput">Tên</p>

        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="FisrtName"
            rules={[{ required: true, message: 'Hãy nhập họ và tên đệm!' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="LastName"
            rules={[{ required: true, message: 'Hãy nhập tên!' }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}
          >
            <Input />
          </Form.Item>
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
        >
          <Input />
        </Form.Item>
        <p className="register__labelInput">Số điện thoại</p>
        <p className="register__labelInput">Chức vụ</p>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="Telephone"
            rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Position"
            rules={[{ required: true, message: 'Hãy nhập chức vụ!' }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <p className="register__labelInput">Ngành nghề</p>
        <Form.Item
          name="position"
          rules={[{ required: true, message: 'Hãy chọn ngành nghề!' }]}
        >
          <Select placeholder="Chọn ngành nghề" allowClear>
            <Option value="IT">IT</Option>
            <Option value="SALE">Sale</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register__button">
            Tiếp theo
          </Button>
        </Form.Item>
      </Form>
      <Footer />
    </div>
  );
}
