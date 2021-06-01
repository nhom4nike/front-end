import React from 'react';
import { Typography } from 'antd';
import ButtonFilter from '@/components/document/button_filter';
import ListDocument from '@/components/document/list-document';
import PropTypes from 'prop-types';

const { Title } = Typography;
const menuHeader = [
  {
    atributeValue: 'all',
    value: 'Tất cả',
  },
  {
    atributeValue: 'createAt',
    value: 'Ngày tạo',
  },
  {
    atributeValue: 'createPeople',
    value: 'Người tạo',
  },
];

const ManagementDocument = ({ data }) => (
  <div>
    <Title level={4}>Danh sách bản mẫu</Title>
    <p style={{ opacity: '0.6', margin: '0' }}>Lọc theo</p>
    <ButtonFilter menu={menuHeader} isDisabled={data.length > 0} />
    <ListDocument data={data} />
  </div>
);

ManagementDocument.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
export default ManagementDocument;
