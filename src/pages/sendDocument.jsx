import '@/styles/sendDocument.scss';
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@/components/sendDocument/input/button/button';
import { PeriodForm } from '@/components/sendDocument/form/periodForm/periodForm';
import { SelectFileForm } from '@/components/sendDocument/form/selectFileForm/SelectFileForm';
import { SelectPartnerForm } from '@/components/sendDocument/form/selectPartnerForm/selectPartnerForm';
import { SendMailForm } from '@/components/sendDocument/form/sendMailForm/sendMailForm';
import { EditDocForm } from '@/components/sendDocument/form/editDocForm/EditDocForm';

import ResultSend from '@/components/sendDocument/form/resultSend/resultSend';
import Footer from '../components/footer';
import Header from '../components/header/header';

import { pdfDocListContext } from '../contants/contexts/pdfDocListContext';

const stepData = [
  'Thêm tài liệu (PDF, Word, PNG, . . .)',
  'Chọn người nhận và cài đặt',
  'Ký tên và các thông tin khác',
  'Kiểm tra và gửi file',
  'Kết quả gửi Email',
];

export const SendDocument = () => {
  const { updateListFieldDocs, handleSendDocument } = useContext(
    pdfDocListContext
  );
  const [activeStep, setActiveStep] = useState(1);
  const history = useHistory();
  useEffect(() => {
    if (activeStep === 6) {
      history.push('/');
    }
  }, [activeStep]);
  const nextStep = () => {
    localStorage.setItem('activeStepSendDoc', activeStep + 1);
    if (activeStep === 3) {
      updateListFieldDocs(+localStorage.getItem('currentDoc'));
    }
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    localStorage.setItem('activeStepSendDoc', activeStep + 1);
    if (activeStep === 3) {
      updateListFieldDocs(+localStorage.getItem('currentDoc'));
    }
    setActiveStep(activeStep - 1);
  };

  const sendMail = () => {
    (async () => {
      await handleSendDocument();
      setActiveStep(activeStep + 1);
    })();
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
              {activeStep !== 1 && activeStep !== 5 && (
                <Button onClick={prevStep} className="btn--secondary">
                  Quay lại
                </Button>
              )}
              {activeStep !== 4 && (
                <Button onClick={nextStep}>
                  {activeStep === 5 ? 'Kết thúc' : 'Tiếp tục'}
                </Button>
              )}
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
