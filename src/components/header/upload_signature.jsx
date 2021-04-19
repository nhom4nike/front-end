import React, { useState } from 'react';

import { UploadIcon } from '@/components/icons/icon';

const UploadSignature = () => {
  const [signatureName, setSignatureName] = useState(null);
  const [signatureInitial, setSignatureInitial] = useState(null);

  const getFileName = (e) => {
    setSignatureName(e.target.files[0]);
  };

  const getFileInitial = (e) => {
    setSignatureInitial(e.target.files[0]);
  };

  return (
    <div className="upload-signature">
      <div className="upload-signature-name">
        <input
          type="file"
          id="btn-upload-name"
          hidden
          onChange={(e) => getFileName(e)}
        />
        <label htmlFor="btn-upload-name">
          {signatureName ? (
            <img src={URL.createObjectURL(signatureName)} alt="name" />
          ) : (
            <>
              <UploadIcon width="64" />
              <p>Chữ ký chính</p>
            </>
          )}
        </label>
      </div>
      <div className="upload-signature-initial">
        <input
          type="file"
          id="btn-upload-initial"
          hidden
          onChange={(e) => getFileInitial(e)}
        />
        <label htmlFor="btn-upload-initial">
          {signatureInitial ? (
            <img src={URL.createObjectURL(signatureInitial)} alt="initial" />
          ) : (
            <>
              <UploadIcon width="64" />
              <p>Chữ ký tắt</p>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default UploadSignature;
