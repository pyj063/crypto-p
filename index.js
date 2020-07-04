// 引入crypto-js模块
var CryptoJS = require('crypto-js');
var Crypto = {
    // 加密函数
    encryptByDES: (message) => {
        var keyHex = CryptoJS.enc.Utf8.parse('CESTC$#!'); // 加密秘钥
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
    // 解密函数
    decryptByDES: (ciphertext) => {
        var keyHex = CryptoJS.enc.Utf8.parse('CESTC$#!'); // 解密秘钥
        var decrypted = CryptoJS.DES.decrypt({
                ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
            },
            keyHex, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            }
        );
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}

module.exports = Crypto;