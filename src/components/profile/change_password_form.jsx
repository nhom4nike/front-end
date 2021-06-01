import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ChangePasswordForm = () => (
  <Form {...layout} className="change-password__form" name="basic">
    <Form.Item
      label="Mật khẩu cũ"
      name="newPassword"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Mật khẩu mới"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Xác thực mật khẩu"
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

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Đổi mật khẩu
      </Button>
    </Form.Item>
  </Form>
);

export default ChangePasswordForm;
