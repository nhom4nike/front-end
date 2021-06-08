const CryptoJS = require('crypto-js');
const Elliptic = require('elliptic').ec;

const EC = new Elliptic('secp256k1');
const SECRET_KEY_PASSWORD = '*NIKE_SIGN_MY_APP*';

const crypt = {
  generateKey: () => {
    const key = EC.genKeyPair();
    return {
      privateKey: key.getPrivate('hex'),
      publicKey: key.getPublic('hex'),
    };
  },

  keyFromPrivate: (privateKey) => {
    const key = EC.keyFromPrivate(privateKey);
    return {
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    };
  },

  signature: (privateKey, data) => {
    const hashData = CryptoJS.SHA256(data).toString();
    const key = EC.keyFromPrivate(privateKey);
    return key.sign(hashData).toDER('hex');
  },

  verify: (publicKey, data, signature) => {
    const hashData = CryptoJS.SHA256(data).toString();
    const key = EC.keyFromPublic(publicKey, 'hex');
    return key.verify(hashData, signature);
  },

  encrypt: (data, key) => {
    const cipher = CryptoJS.enc.Hex.parse(key + SECRET_KEY_PASSWORD).toString();
    return CryptoJS.AES.encrypt(data, cipher).toString();
  },

  decrypt: (encrypt, key) => {
    const cipher = CryptoJS.enc.Hex.parse(key + SECRET_KEY_PASSWORD).toString();
    return CryptoJS.AES.decrypt(encrypt, cipher).toString(CryptoJS.enc.Utf8);
  },

  hash: (data) => CryptoJS.SHA256(data).toString(),
};

export default crypt;
