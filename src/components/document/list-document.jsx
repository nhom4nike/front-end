import React from 'react';
import ButtonFilter from '@/components/document/button_filter';
import { Table, Menu } from 'antd';
import '@/styles/document.css';

const data = [
  {
    key: '1',
    name: 'Untitled 3/25/2021 | 7:39:45 PM',
    author: 'Nguyễn Văn A',
    datacreate: '08:00 12-12-2021',
    datechange: '08:00 12-12-2021',
  },
  {
    key: '2',
    name: 'Untitled 3/25/2021 | 7:39:45 PM',
    author: 'Nguyễn Văn A',
    datacreate: '08:00 12-12-2021',
    datechange: '08:00 12-12-2021',
  },
  {
    key: '3',
    name: 'Untitled 3/25/2021 | 7:39:45 PM',
    author: 'Nguyễn Văn A',
    datacreate: '08:00 12-12-2021',
    datechange: '08:00 12-12-2021',
  },
];
const menu = (
  <Menu>
    <Menu.Item key="0">Sử dụng </Menu.Item>
    <Menu.Item key="1">Xem lại</Menu.Item>
    <Menu.Item key="2">Chỉnh sửa</Menu.Item>
    <Menu.Item key="3">Xóa</Menu.Item>
    <Menu.Item key="4">Tải xuống</Menu.Item>
  </Menu>
);
const columns = [
  { title: 'Tên bản mẫu', dataIndex: 'name', key: 'name' },
  { title: 'Người tạo', dataIndex: 'author', key: 'author' },
  { title: 'Ngày tạo', dataIndex: 'datacreate', key: 'datacreate' },
  { title: 'Ngày đổi cuối', dataIndex: 'datechange', key: 'datechange' },
  {
    title: 'Thao tác',
    key: 'operation',
    render: () => <ButtonFilter title="Chọn thao tác" menu={menu} />,
  },
];

const ListDocument = () => (
    <div className="list-document">
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={data}
        scroll={{ y: 240 }}
      />
    </div>
  );

export default ListDocument;
