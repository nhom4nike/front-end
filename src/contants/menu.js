import contract from '../assets/png/contract.png';
import operation from '../assets/png/operation.png';
import research from '../assets/png/research.png';

const dataFeatures = [
  {
    route: '/document/create',
    url: contract,
    title: 'Gửi tài liệu',
    features: [
      'Chọn file cần ký (PDF, Word,...)',
      'Đặt chữ ký và các thông tin liên quan',
      'Thêm thông tin người nhận và các thiêt lập',
      'Kiểm tra và gửi chữ ký',
    ],
  },
  {
    route: '/document/list',
    url: research,
    title: 'Quản lý tài liệu',
    features: [
      'Phân loại danh sách tài liệu',
      'Hỗ trợ thao tác nhanh',
      'Tạo mới, chỉnh sửa, gửi lại, xóa tài liệu',
    ],
  },
  {
    route: '/template/list',
    url: operation,
    title: 'Quản lý bản mẫu',
    features: [
      'Tạo mới, chỉnh sửa, gửi lại, xóa bản mẫu',
      'Quản lý các bản mẫu đã tạo',
    ],
  },
];

export default dataFeatures;
