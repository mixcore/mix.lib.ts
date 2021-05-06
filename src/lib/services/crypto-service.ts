import { AES, enc } from 'crypto-js';
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
    return AES.encrypt(message, aesKeys.key, options).toString();
  }
  public decryptAES(ciphertext: string, iCompleteEncodedKey: string) {
    let aesKeys = new AESKey(iCompleteEncodedKey);
    var cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
    });
    var options = {
      iv: aesKeys.iv,
      keySize: this.size / 8,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    };
    var decrypted = AES.decrypt(cipherParams, aesKeys.key, options);
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
    var keyStrings = enc.Utf8.stringify(enc.Base64.parse(encryptedKeys)).split(
      ','
    );
    this.iv = enc.Base64.parse(keyStrings[0]);
    this.key = enc.Base64.parse(keyStrings[1]).toString();
  }
}

export const cryptoService = new CryptoService();
