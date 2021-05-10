import React, { useState } from 'react';

import Header from '@/components/header/header';
import MenuDocument from '@/components/document/menu_document';
import ContentDocument from '@/components/document/content_document';
import Footer from '../components/footer';
import '@/styles/document.scss';

const dataComplete = [
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
const dataNeedSign = [];
const dataWaitSign = [];
const dataInTrash = [];

const headerTitle = [
  {
    title: 'Bản Mẫu Của Tôi',
    desciption: 'Quản lý các bản mẫu đã tạo. Có thể thêm xóa sửa bản mẫu',
  },
  {
    title: 'Bản Mẫu Cần Kí',
    desciption: 'Quản lý các bản mẫu cần kí. Có thể thêm xóa sửa bản mẫu',
  },
  {
    title: 'Bản Mẫu Chờ Kí',
    desciption: 'Quản lý các bản mẫu chờ kí. Có thể thêm xóa sửa bản mẫu',
  },

  {
    title: 'Thùng Rác',
    desciption: 'Quản lý các bản mẫu đã xóa. Có thể thêm xóa sửa bản mẫu',
  },
];

const document = () => {
  // set active chuyển menu
  // 1: Đã hoàn thành
  // 2: Cần kí
  // 3: Chờ kí
  // 4: Đã xóa
  const [activeDocument, setactiveDocument] = useState(1);
  // Xét đang ở hành động nào vào set data để truyền vào table hiển thị
  const [mainData, setmainData] = useState(dataComplete);
  const changeData = (activedocument) => {
    switch (activedocument) {
      case 1:
        return dataComplete;
      case 2:
        return dataNeedSign;
      case 3:
        return dataWaitSign;
      default:
        return dataInTrash;
    }
  };

  // Khi người dùng onClick menu hành động này sẽ diễn ra
  const changeActiceManagementDocument = (numberActiveDocument) => {
    setactiveDocument(numberActiveDocument);
    setmainData(changeData(numberActiveDocument));
  };

  return (
    <div className="document">
      <Header />
      <div className="document__content">
        <div className="content__left">
          <MenuDocument onChangeActive={changeActiceManagementDocument} />
        </div>
        <div className="content__right">
          <ContentDocument
            headerTitle={headerTitle[activeDocument - 1]}
            data={mainData}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default document;
