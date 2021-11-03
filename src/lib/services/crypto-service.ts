import * as CryptoJS from 'crypto-ts';
export class CryptoService {
  public size = 256;
  public encryptAES(message: string, iCompleteEncodedKey: string) {
    const aesKeys = new AESKey(iCompleteEncodedKey);
    const options = {
      iv: aesKeys.iv,
      keySize: this.size / 8,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.PKCS7,
    };
    return CryptoJS.AES.encrypt(message, aesKeys.key, options).toString();
  }
  public decryptAES(ciphertext: string, iCompleteEncodedKey: string) {
    const aesKeys = new AESKey(iCompleteEncodedKey);
    const options = {
      iv: aesKeys.iv,
      keySize: this.size / 8,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.PKCS7,
    };
    const decrypted = CryptoJS.AES.decrypt(ciphertext, aesKeys.key, options);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}

export class AESKey {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public iv?: any;
  public key: string;
  /**
   *
   */
  constructor(encryptedKeys: string) {
    const keyStrings = CryptoJS.enc.Utf8.stringify(
      CryptoJS.enc.Hex.parse(encryptedKeys)
    ).split(',');
    this.iv = CryptoJS.enc.Hex.parse(keyStrings[0]);
    this.key = CryptoJS.enc.Hex.parse(keyStrings[1]).toString();
  }
}

export const cryptoService = new CryptoService();
