import '@/styles/sendDocument.scss';

import React, { useState } from 'react';
import { Button } from '@/components/sendDocument/input/button/button';
import { PeriodForm } from '@/components/sendDocument/form/periodForm/periodForm';
import { SelectFileForm } from '@/components/sendDocument/form/selectFileForm/SelectFileForm';
import { SelectPartnerForm } from '@/components/sendDocument/form/selectPartnerForm/selectPartnerForm';
import { SendMailForm } from '@/components/sendDocument/form/sendMailForm/sendMailForm';
import { EditDocForm } from '@/components/sendDocument/form/editDocForm/EditDocForm';

import ResultSend from '@/components/sendDocument/form/resultSend/resultSend';
import Footer from '../components/footer';
import Header from '../components/header/header';

const stepData = [
  'Thêm tài liệu (PDF, Word, PNG, . . .)',
  'Chọn người nhận và cài đặt',
  'Ký tên và các thông tin khác',
  'Kiểm tra và gửi file',
  'Kết quả gửi Email',
];

export const SendDocument = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const sendMail = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <div className="send-document">
        <Header />
        <div className="send-document__content">
          <div className="left-block">
            <div className="go-back">
              <div className="go-back__icon">
                <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
              </div>
              <p className="go-back__text">Tiến trình tạo chữ ký</p>
            </div>
            <div className="left-block__period">
              <PeriodForm active={activeStep} steps={stepData} />
            </div>
          </div>
          <div className="right-block">
            <div className="main-step">
              <p className="main-step__step-name">{stepData[activeStep - 1]}</p>
              <div className="main-step__step-content">
                {(() => {
                  switch (activeStep) {
                    case 1:
                      return <SelectFileForm />;
                    case 2:
                      return <SelectPartnerForm />;
                    case 3:
                      return <EditDocForm />;
                    case 4:
                      return <SendMailForm />;
                    case 5:
                      return <ResultSend />;
                    default:
                      return <></>;
                  }
                })()}
              </div>
            </div>

            <div className="right-block__control-btn">
              {activeStep !== 1 && (
                <Button onClick={prevStep} className="btn--secondary">
                  Quay lại
                </Button>
              )}
              {activeStep !== 4 && <Button onClick={nextStep}>Tiếp tục</Button>}
              {activeStep === 4 && (
                <Button onClick={sendMail}>Gửi Email</Button>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
