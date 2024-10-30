/*jshint esversion:6*/

/*
	Box封装
	2020/02/21
	Qiwi
*/
import Base64Help from "./Base64Help.js";

export default class BoxSerializer {

  constructor() {
    this.MAGIC = 2037952207;

    //数据类型的长度
    this.INT_SIZE = 4;
    this.SHORT_SZIE = 2;
  }

  /**
   * 初始化header
   *
   * @returns
   */
  function

  initHeader() {
    var header = {};
    header.magic = {value: this.MAGIC, length: this.INT_SIZE};
    header.version = {value: 0, length: this.SHORT_SZIE};
    header.flag = {value: 0, length: this.SHORT_SZIE};
    header.boxSize = {value: 0, length: this.INT_SIZE};
    header.cmd = {value: 0, length: this.INT_SIZE};
    header.ret = {value: 0, length: this.INT_SIZE};
    header.sn = {value: 0, length: this.INT_SIZE};

    return header;
  }


  /**
   * 获取header的属性列表，由于在浏览器中并不一定保证对象的属性遍历顺序
   * 因此需要用数组来确保属性遍历的顺序
   *
   * @returns
   */


  getHeaderPropertyList() {
    return ["magic", "version", "flag", "boxSize", "cmd", "ret", "sn"];
  }

  transformArrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    for (var len = bytes.byteLength, i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  // 字符串转为ArrayBuffer对象，参数为字符串
  str2ab(str) {
    var buf = new ArrayBuffer(str.length); // 每个字符占用1个字节
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }


  //Use for ensure whether the code decode by base64 is correct!
  buf2hex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
  }

  ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }


  /**
   * 封装box
   *
   * @param {Number} cmd
   * @param {Number} sn
   * @param {ArrayBuffer} bodyArrayBuffer
   * @returns
   */
  packBox(cmd, sn, bodyArrayBuffer, ret) {
    var header = this.initHeader();
    var ab2Str = this.ab2str(bodyArrayBuffer);
    let str_base64 = this.transformArrayBufferToBase64(bodyArrayBuffer);
    // let str_base64 = ByteBuffer.btoa(ab2Str);
    // loge(" packBox ============str_base64: " + str_base64);
    let bodyBufferBase64 = this.str2ab(str_base64);
    header.ret.value = 0;
    header.cmd.value = cmd;
    header.sn.value = sn;
    //从500版本开始增加协议签名，flag使用二进制第二位
    header.flag.value = 0x02;
    var boxSize = this.getBoxSize(header, bodyBufferBase64);
    header.boxSize.value = boxSize;

    //偏移量
    var pos = 0;
    var boxArrayBuffer = new ArrayBuffer(boxSize);
    var boxDataView = new DataView(boxArrayBuffer);

    //写入header
    var headerPropertyList = this.getHeaderPropertyList();
    var propLen = headerPropertyList.length;
    for (var i = 0; i < propLen; i++) {
      var propObj = header[headerPropertyList[i]];
      if (propObj.length === this.INT_SIZE) {
        boxDataView.setInt32(pos, propObj.value);
      } else if (propObj.length === this.SHORT_SZIE) {
        boxDataView.setInt16(pos, propObj.value);
      }
      pos += propObj.length;
    }

    //写入body
    let bodyBytes = new Uint8Array(bodyBufferBase64);
    let bodyLength = bodyBufferBase64.byteLength;
    for (i = 0; i < bodyLength; i++) {
      boxDataView.setUint8(pos, bodyBytes[i]);
      pos += 1;
    }

    return boxArrayBuffer;
  }

  /**
   * 解包box
   *
   * @param {ArrayBuffer} boxArrayBuffer
   * @returns
   */
  unpackBox(boxArrayBuffer) {
    var header = this.initHeader();

    //偏移量
    var pos = 0;
    var headerPropertyList = this.getHeaderPropertyList();

    //先解码header
    var boxDataView = new DataView(boxArrayBuffer);
    var propLen = headerPropertyList.length;
    for (var i = 0; i < propLen; i++) {
      var propObj = header[headerPropertyList[i]];
      if (propObj.length === this.INT_SIZE) {
        propObj.value = boxDataView.getInt32(pos);
      } else if (propObj.length === this.SHORT_SZIE) {
        propObj.value = boxDataView.getInt16(pos);
      }
      pos += propObj.length;
    }

    //获取body
    var boxSize = header.boxSize.value;
    var headerSize = this.getHeaderSize(header);
    // logd("qiwi receive hex-1:" + JSON.stringify(boxSize) + " headerSize: " + headerSize);
    var bodyArrayBase64Buffer = boxArrayBuffer.slice(headerSize, boxSize);
    // logd("qiwi receive hex00:" + bodyArrayBase64Buffer);
    var str_base64 = this.ab2str(bodyArrayBase64Buffer);
    // logd("qiwi receive hex0:" + JSON.stringify(str_base64));
    var str_body = Base64Help.decode(str_base64);
    // logd("qiwi receive hex1:" + JSON.stringify(str_body));
    var bodyArrayBuffer = this.str2ab(str_body);
    // logd("qiwi receive hex:" + bodyArrayBuffer);


    var ret = {};
    ret.cmd = header.cmd.value;
    ret.ret = header.ret.value;
    ret.sn = header.sn.value;
    ret.body = bodyArrayBuffer;
    // logd("qiwi receive hex2:" + JSON.stringify(ret));

    return ret;
  }

  /**
   * 获取box的大小
   *
   * @param {Object} header
   * @param {ArrayBuffer} bodyArrayBuffer
   * @returns
   */
  getBoxSize(header, bodyArrayBuffer) {
    var self = this;
    var boxSize = self.getHeaderSize(header);

    if (bodyArrayBuffer) {
      boxSize += bodyArrayBuffer.byteLength;
    }

    return boxSize;
  }

  /**
   * 获取header大小
   *
   * @param {Object} header
   * @returns
   */
  getHeaderSize(header) {
    var headerSize = 0;
    for (var prop in header) {
      headerSize += header[prop].length;
    }
    return headerSize;
  }
}
