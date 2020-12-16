/* tslint:disable:no-console */
export namespace Utils {

    export const HTTP_STATUS = require('http-status-codes');

    export function log(text:object|string, object?:object) {

        if(typeof text === 'object'){
            console.log(JSON.stringify(text,null,2));
        } else {
            console.log(text);
        }

        if(object){
            console.log(JSON.stringify(object,null,2));
        }
    }

    export function logError(key: string, object?: object) {
        let e = '';
        console.log('===Start===');
        log(key, object);
        console.log('====End===');
        if(object)
            e = JSON.stringify(object,null,2);
        return e;
    }

    export function encryptString(text: string, secretKey: string) {
        const CryptoJS = require('crypto-js');
        const hash = CryptoJS.HmacSHA256(text, secretKey);
        const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        return hashInBase64;
    }

    export function encryptJson(data: {}, secretKey: string) {
        const CryptoJS = require('crypto-js');
        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
        return urlEncode(ciphertext.toString())
    }

    export function decryptJson(data: string, secretKey: string) {
        const CryptoJS = require('crypto-js');
        const bytes = CryptoJS.AES.decrypt(urlDecode(data), secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    }

    export function urlEncode(url: string) {
       return encodeURIComponent(url);
    }

    export function urlDecode(url: string) {
       return decodeURIComponent(url);
    }

    export function convertToSHA(data: string) {
        const crypto = require('crypto')
        const shasum = crypto.createHash('sha1');
              shasum.update(data);

        return shasum.digest('hex');
    }

}
