/*
	protobuf.js 5.x版本编解码代理
	2018/1/26
	raintian
*/

import protobuf from 'protobufjs'

export default class PBHelper {
  constructor() {
    this.TAG = "PBHelper";
    this.builder = null;
    this.package = "texas.net.proto";
  }

  /**
   * 异步加载proto文件
   *
   * @param {Function} callBack
   */
  loadProtoFile(filepath, callBack) {
    let self = this;
    protobuf.loadProtoFile(filepath, function (err, builder) {
      if (err) {
        console.log("load protobuf failed", err)
        return;
      }
      self.builder = builder.build(self.package);
      //proto文件异步加载执行的回调
      if (callBack) callBack();

    });
  }

  /**
   * 查找pbName对应的pb类
   *
   * @param {String} pbName
   * @returns
   */
  findPbClass(pbName) {
    let self = this;
    if (this.builder && pbName) {
      return self.builder[pbName];
    }
    return null;
  }

  /**
   * pb编码
   *
   * @param {String} pbName
   * @param {Object} obj
   * @returns
   */
  encode(pbName, obj) {
    let self = this;
    let pbClass = this.findPbClass(pbName);
    if (pbClass) {
      //调用protobuf.js的编码接口
      let msgObj = new pbClass(obj);
      //msgObj.set(obj);
      let buffer = msgObj.encode().toBuffer();
      return buffer;
    }
    return null;
  }

  /**
   * pb解码
   *
   * @param {String} pbName
   * @param {ArrayBuffer} buffer
   * @returns
   */
  decode(pbName, buffer) {
    let pbClass = this.findPbClass(pbName);
    if (pbClass) {
      //调用protobuf.js的解码接口
      let msgObj = pbClass.decode(buffer);
      return msgObj;
    }
    return null;
  }

  //数据类型转换
  formatData(arrayBuffer) {
    //protobuf 5.x版本不需转换数据类型，使用ArrayBuffer即可
    return arrayBuffer;
  }

  //手动设置包名
  setPackage(pkgName) {
    this.package = pkgName;
  }
}
