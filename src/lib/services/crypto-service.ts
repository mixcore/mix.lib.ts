import * as CryptoJS from 'crypto-js';
export class CryptoService {
  public size: number = 256;
  public encryptAES(message: string, iCompleteEncodedKey: string) {
    let aesKeys = new AESKey(iCompleteEncodedKey);
    var options = {
      iv: aesKeys.iv,
      keySize: this.size / 8,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    };
    return CryptoJS.AES.encrypt(message, aesKeys.key, options).toString();
  }
  public decryptAES(ciphertext: string, iCompleteEncodedKey: string) {
    let aesKeys = new AESKey(iCompleteEncodedKey);
    var options = {
      iv: aesKeys.iv,
      keySize: this.size / 8,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    };
    var decrypted = CryptoJS.AES.decrypt(ciphertext, aesKeys.key, options);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}

export class AESKey {
  public iv?: any;
  public key: string;
  /**
   *
   */
  constructor(encryptedKeys: string) {
    var keyStrings = CryptoJS.enc.Utf8.stringify(
      CryptoJS.enc.Base64.parse(encryptedKeys)
    ).split(',');
    this.iv = CryptoJS.enc.Base64.parse(keyStrings[0]);
    this.key = CryptoJS.enc.Base64.parse(keyStrings[1]).toString();
  }
}

export const cryptoService = new CryptoService();
