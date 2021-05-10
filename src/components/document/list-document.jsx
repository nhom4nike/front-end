import React from 'react';
import ButtonFilter from '@/components/document/button_filter';
import { Table, Empty } from 'antd';
import '@/styles/document.scss';
import PropTypes from 'prop-types';

const menuList = [
  {
    atributeValue: 'used',
    value: 'Sử dụng',
  },
  {
    atributeValue: 'review',
    value: 'Xem lại',
  },
  {
    atributeValue: 'update',
    value: 'Chỉnh sửa',
  },
  {
    atributeValue: 'delete',
    value: 'Xóa',
  },
  {
    atributeValue: 'dowload',
    value: 'Tải xuống',
  },
];
const columns = [
  { title: 'Tên bản mẫu', dataIndex: 'name', key: 'name' },
  { title: 'Người tạo', dataIndex: 'author', key: 'author' },
  { title: 'Ngày tạo', dataIndex: 'datacreate', key: 'datacreate' },
  { title: 'Ngày đổi cuối', dataIndex: 'datechange', key: 'datechange' },
  {
    title: 'Thao tác',
    key: 'operation',
    render: () => (
      <ButtonFilter title="Chọn thao tác" menu={menuList} isDisabled />
    ),
  },
];

const ListDocument = ({ data }) => (
  <div className="list-document">
    {data.length > 0 ? (
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={data}
        scroll={{ y: 240 }}
      />
    ) : (
      <Empty />
    )}
  </div>
);

ListDocument.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
export default ListDocument;
