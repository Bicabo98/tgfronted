/* jshint esversion:6 */


import BoxSerializer from './BoxSerializer.js';
import PBHelper from './PBHelper.js';
import PBAdapter from "@/net/PBAdapter.js";

export default class NetSerializer {

  constructor() {

    this.TAG = "NetSerializer";
    this.sn = 0;

    this.uid = 0;
    this.version = 0;
    this.channel = "";

    this.pbAdapter = new PBAdapter();
    this.boxSerializer = new BoxSerializer();
    this.pbHelper = new PBHelper();
    // this.pbHelper.setPackage("./texas_net.proto");

    this.event_id = 0; //赛事ID/牌桌ID，如果有MTT赛事ID优先给赛事ID

  }

  /**
   * 设置uid, 用于构造包头
   *
   * @param {Number} uid
   */
  setUid(uid) {
    let self = this;
    self.uid = uid;
  }

  /**
   * 设置版本号, 用于构造包头
   *
   * @param {Number} version
   */
  setVersion(version) {
    let self = this;
    self.version = version;
  }

  /**
   * 设置渠道号, 用于构造包头
   *
   * @param {String} channel
   */
  setChannel(channel) {
    let self = this;
    self.channel = channel;
  }

  /**
   * 设置pb适配器
   *
   * @param {Object} pbAdapter
   */
  setPBAdapter(pbAdapter) {
    let self = this;
    self.pbAdapter = pbAdapter;
  }

  /**
   * 加载proto文件
   *
   * @param {Function} callBack
   */
  loadProto(filepath, callBack) {//"en/proto/texas_net"
    let self = this;
    self.pbHelper.loadProtoFile(filepath, function () {
      if (callBack) callBack();
    });
  }

  haveLoadProto() {
    let self = this;
    if (self.pbHelper.builder) {
      return true
    }
    return false
  }

  /**
   * 封包接口
   * @param {*} cmd
   * @param {*} body
   * @returns
   */

  //字符串转base64
  base64Encode(str) {
    // 对字符串进行编码
    let encode = encodeURI(str);
    // 对编码的字符串转化base64
    let base64 = btoa(encode);
    return base64;
  }

  // 字符串转2进制
  strToBinary(str) {
    let result = [];
    let list = str.split("");
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      let binartStr = item.charCodeAt().toString(2);
      result.push(binartStr);
    }
    return result.join("");
  }


  

  /**
   * 封包接口
   *
   * @param {Number} cmd
   * @param {Object} body
   * @returns
   */
  packMsg(cmd, body, ret,id) {
    let self = this;

    let serializedBody = "";
    //判空以兼容心跳等body无结构的消息
    if (body) {
      let pbName = this.pbAdapter.findPBNameByCmd("req", cmd);
      if (pbName) {
        //序列化业务逻辑body
        console.log("------------sign--body:" + JSON.stringify(body));
        serializedBody = self.pbHelper.encode(pbName, body);
      }
    }
    if (cmd == 140) {
      console.log(serializedBody);
    }


    // 从缓存拿到uid进行登陆后消息通信
    let userId = id;
    console.log("userid = ",userId)

    // TODO: net userid
    // if (qf.cache && qf.cache.user && qf.cache.user.uin) {
    //   userId = qf.cache.user.uin;
    // }
    //封装safeShell
    let safeShellObj = {
      sign_type: 0,                                           //目前使用md5签名校验
      encrypt_type: 0,                                        //默认不对body加密
      uid: userId,                                            //登录填0，其他填uin(待修改)
      random: Math.floor(Math.random() * 100000000),          //随机数(int32)
      time: Date.parse(new Date()) / 1000,                    //本地时间
      time_zone: 8,                                           //本地时区(待修改)
      version: 0,//self.version,       //版本号
      channel: "WP_H5_001",//self.channel,       //渠道号
      extra: "",                                              //附加信息
      body: serializedBody,                                   //业务body序列化
      sign: ""                                                //签名，暂时不填写
    };

    let obj = {cmd: cmd, desk_id: self.getEventOrDeskID()};
    let jsonstr = JSON.stringify(obj);
    safeShellObj.extra = self.str2ab(jsonstr);

    let md5Secret = ")al#aKyjA*M~BJ(*H5^ypNZ7dNQw6wdR";
    //构造签名原始字符串
    let signOrigin = md5Secret + "|" +
      safeShellObj.sign_type + "|" +
      safeShellObj.encrypt_type + "|" +
      safeShellObj.uid + "|" +
      safeShellObj.random + "|" +
      safeShellObj.time + "|" +
      safeShellObj.time_zone + "|" +
      safeShellObj.version + "|" +
      safeShellObj.channel + "|" +
      jsonstr + "|" +
      self.ab2str(safeShellObj.body);
    // logd("------------sign--md5Secret:" + md5Secret);
    // logd("------------sign--sign_type:" + safeShellObj.sign_type);
    // logd("------------sign--encrypt_type:" + safeShellObj.encrypt_type);
    // logd("------------sign--uid:" + safeShellObj.uid);
    // logd("------------sign--random:" + safeShellObj.random);
    // logd("------------sign--time:" + safeShellObj.time);
    // logd("------------sign--time_zone:" + safeShellObj.time_zone);
    // logd("------------sign--version:" + safeShellObj.version);
    // logd("------------sign--channel:" + safeShellObj.channel);
    // logd("------------sign--serializedBody:" + serializedBody);
    // logd("------------sign--extra:" + safeShellObj.extra);
    // logd("------------sign--signOrigin:" + signOrigin);

    console.log(signOrigin)
    safeShellObj.sign = hex_md5(signOrigin);
    // logd("------------hex_md5:" + safeShellObj.sign)

    //编码safeShell
    let safeShellPbName = self.pbAdapter.getSafeShellPbName();
    let pbArrayBuffer = self.pbHelper.encode(safeShellPbName, safeShellObj);
    // loge(pbArrayBuffer);

    //封装box
    let boxArrayBuffer = self.boxSerializer.packBox(cmd, ++self.sn, pbArrayBuffer, ret);

    return boxArrayBuffer;
  }

  //ArrayBuffer转为字符串，参数为ArrayBuffer对象
  ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }

  // 字符串转为ArrayBuffer对象，参数为字符串
  str2ab(str) {
    let buf = new ArrayBuffer(str.length); // 每个字符占用1个字节
    let bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  /**
   * 解包接口
   *
   * @param {Object} data
   * @returns
   */
  unpackMsg(data) {
    let self = this;
    // loge("message unpackMsg decode 1"+ data);
    //先解包box
    let boxData = self.boxSerializer.unpackBox(data);
    // loge("message unpackMsg decode 2"+ JSON.stringify(boxData));
    // loge("message unpackMsg decode 22"+ JSON.stringify(boxData.body));
    //再解包safeShell
    let safeShellPbName = self.pbAdapter.getSafeShellPbName();
    let formatData = self.pbHelper.formatData(boxData.body);
    // loge("message unpackMsg decode 3"+ formatData + " safeShellPbName: " +safeShellPbName);
    let safeShellObj = self.pbHelper.decode(safeShellPbName, formatData);
    // loge("message unpackMsg decode 4"+ JSON.stringify(safeShellObj));
    if (!safeShellObj) {
      console.log("message unpackMsg decode error!!!", self.TAG);
      return null;
    }

    let ret = {};
    let desk_id = 0;

    ret.cmd = boxData.cmd;
    ret.ret = boxData.ret;
    ret.sn = boxData.sn;
    if (ret.ret === 0) {
      //解包业务body, 加判断兼容空包
      // logd("message  unpackMsg--------safeShellObj.body:"  , safeShellObj.body);
      if (safeShellObj.body) {
        let pbName = self.pbAdapter.findPBNameByCmd("rsp", ret.cmd);
        console.log(pbName)
        if (pbName) {
          let body = self.pbHelper.decode(pbName, safeShellObj.body);
          ret.model = body;
        }
      }
      if (safeShellObj.extra) {
        let jsonstr = safeShellObj.extra.toString('binary');
        if (jsonstr != "") {
          let extraData = JSON.parse(jsonstr);
          desk_id = extraData.desk_id;
        }
        console.log("---------desk_id:" + desk_id + "------cmd:" + ret.cmd);
      }
    }
    return {ret: ret, desk_id: desk_id};
  }

  /**
   * 解包带签名的部分
   *
   * @param {*} signedbody
   * @param {*} cmd
   * @returns
   */
  getDataBySignedBody(signedbody, cmd) {
    let self = this;

    let body = signedbody.body;

    let pbName = self.pbAdapter.findPBNameByCmd("rsp", cmd);
    if (!pbName) return null;
    let obj = self.pbHelper.decode(pbName, body);
    return obj;
  }

  /**
   * 获取消息序列号
   *
   * @returns
   */
  getSn() {
    let self = this;
    return self.sn;
  }

  setEventOrDeskID(id) {
    this.event_id = id || 0;
  }

  getEventOrDeskID() {
    return this.event_id;
  }

  setRetID(retID) {
    this.retID = retID || 0;
  }

  getRetID() {
    return this.retID;
  }
}
