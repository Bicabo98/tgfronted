/*--
 Copyright 2009-2010 by Stefan Rusterholz.
 All rights reserved.
 You can choose between MIT and BSD-3-Clause license. License file will be added later.
 --*/

var BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var BASE64_VALUES = new Array(123); // max char code in base64Keys
for (let i = 0; i < 123; ++i) BASE64_VALUES[i] = 64; // fill with placeholder('=') index
for (let i = 0; i < 64; ++i) BASE64_VALUES[BASE64_KEYS.charCodeAt(i)] = i;

// decoded value indexed by base64 char code

var strValue = BASE64_VALUES;

/**
 * mixin cc.Codec.Base64
 */
var Base64Help = {name: 'Jacob__Codec__Base64'};

/**
 * <p>
 *    cc.Codec.Base64.decode(input[, unicode=false]) -> String (http://en.wikipedia.org/wiki/Base64).
 * </p>
 * @function
 * @param {String} input The base64 encoded string to decode
 * @return {String} Decodes a base64 encoded String
 * @example
 * //decode string
 * cc.Codec.Base64.decode("U29tZSBTdHJpbmc="); // => "Some String"
 */
Base64Help.decode = function Jacob__Codec__Base64__decode(input) {
  var output = [],
    chr1, chr2, chr3,
    enc1, enc2, enc3, enc4,
    i = 0;

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

  while (i < input.length) {
    enc1 = strValue[input.charCodeAt(i++)];
    enc2 = strValue[input.charCodeAt(i++)];
    enc3 = strValue[input.charCodeAt(i++)];
    enc4 = strValue[input.charCodeAt(i++)];

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output.push(String.fromCharCode(chr1));

    if (enc3 !== 64) {
      output.push(String.fromCharCode(chr2));
    }
    if (enc4 !== 64) {
      output.push(String.fromCharCode(chr3));
    }
  }

  output = output.join('');

  return output;
};

/**
 * <p>
 *    Converts an input string encoded in base64 to an array of integers whose<br/>
 *    values represent the decoded string's characters' bytes.
 * </p>
 * @function
 * @param {String} input The String to convert to an array of Integers
 * @param {Number} bytes
 * @return {Array}
 * @example
 * //decode string to array
 * var decodeArr = cc.Codec.Base64.decodeAsArray("U29tZSBTdHJpbmc=");
 */
Base64Help.decodeAsArray = function Jacob__Codec__Base64___decodeAsArray(input, bytes) {
  var dec = this.decode(input),
    ar = [], i, j, len;
  for (i = 0, len = dec.length / bytes; i < len; i++) {
    ar[i] = 0;
    for (j = bytes - 1; j >= 0; --j) {
      ar[i] += dec.charCodeAt((i * bytes) + j) << (j * 8);
    }
  }

  return ar;
};

export default Base64Help;
