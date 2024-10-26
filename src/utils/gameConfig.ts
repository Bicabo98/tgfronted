import CryptoJS from 'crypto-js';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';


const CHANNEL = "WP_PC_001";
const VERSION = 2700;
const PACKID = 200;
const LANG = "en";
const TZ_NAME = "Asia/Shanghai";
const TZ_DELTA = "GMT+8";
const NET = "wifi";
const DEVICE = "huaweiP10";
const MACID = "421f53511ebad735dac0123967ad6a72";
const KEY_SECRET3 = "E6RA4#b9sQkld8sz$qJh^BWjzsGbhM62";



export const callBackendAPI = async () => {
    var test = {
        // method:"userallrecord#get_user_stats",
        uid:"10000000",
        method:"sysversion#getsysversion",
        
      }
    const postdata = getRequestData(test);

    let data = {
        // postdata:"postdata=" + urlEncodeString(JSON.stringify(postData))
        // postdata:postData
        postdata:postdata
    }

    console.log("data:",data)

    
     
    try {
        const response = await axios.post('http://192.168.100.201:8109', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log("Response data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error calling backend API:", error);
    }
};


export const getRequestData = (req: any) => {
    const pub = getRequestPublic()
    const ext = getRequestExtend();
    const sig = getRequestSign(getRequestSignMap2(req));
    // let token = localStorage.getItem('authorization');
    // let token = "960234efdd27a217cc4e816b36f86926";
    let token = "";

    let postdata =
    {
        sig: sig,
        accesstoken: token,
        extend: ext,
        request: req,
        public: pub
    };

    console.log("参数：",postdata)

    return {
        "sig": "6db91ac9c24e5f522e6632d57f3c4eaa",
        "accesstoken": "",
        "extend": {
          "net": "wifi",
          "device": "huaweiP10",
          "macid": "770738c7ba6834c6c2f578783718d416",
          "tz_name": "Asia/Shanghai",
          "tz_delta": "GMT+8"
        },
        "request": {
          "uid": "10000000",
          "method": "sysversion#getsysversion"
        },
        "public": {
          "channel": "WP_PC_001",
          "version": 2700,
          "packid": 200,
          "lang": "en"
        }
      }

    return postdata;
}



export const getRequestPublic = () => {
    let dic = {
        channel: CHANNEL,
        version: VERSION,
        packid: PACKID,
        lang: LANG,
    }
    return dic;
}


export const getRequestExtend = () => {
    let dic = {
        net: NET,
        device: DEVICE,
        macid: MACID,
        tz_name: TZ_NAME,
        tz_delta: TZ_DELTA
    }
    return dic;
}


function getRequestSign(signDic: any) {
    let signOrder: any = {};
    Object.keys(signDic).sort().forEach(function (key) {
        signOrder[key] = signDic[key];
    });
    let strBuffer = "";
    for (let k in signOrder) {
        let v = makeFormat(signDic[k]);
        if (null === v) {
            v = "null";
        }
        strBuffer = strBuffer + k + "=" + v;
    }

    strBuffer = strBuffer + KEY_SECRET3;
    console.log("getRequestSign ======= strBuffer: " + strBuffer)
    // let sign = crypto.createHash('md5').update(strBuffer, "utf-8").digest('hex');
    let sign = CryptoJS.MD5(strBuffer).toString();
    return sign;
}

function makeFormat(obj: any) {
    if (obj instanceof Array || obj instanceof Object) {
        obj = JSON.stringify(obj);
    }
    return obj;
}




function getRequestSignMap2(request: any) {
    let dic: any = {}
    let pub: any = getRequestPublic()
    for (let k in pub) {
        let v = pub[k];
        dic[k] = v;
    }

    let ext: any = getRequestExtend()
    for (let k in ext) {
        let v = ext[k];
        dic[k] = v;
    }

    for (let k in request) {
        let v = null;
        if ((request[k] instanceof Array) || request[k] instanceof Object) {
            v = JSON.stringify(request[k]);
            v = v.replace(/\//g, "\\/");
        }
        else {
            v = request[k];
        }

        dic[k] = v;
    }
    return objKeySort(dic)
}


function objKeySort(arys: any) {
    let newkey = Object.keys(arys).sort();
    let newObj: any = {};
    for (let i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = arys[newkey[i]];
    }

    return newObj;
}



function urlEncodeString(data:any) {
    let str = data;
        if (data.indexOf('#') != -1 || data.indexOf('+') != -1 || data.indexOf('/') != -1 || data.indexOf('?') != -1 || 
            data.indexOf('%') != -1 || data.indexOf('&') != -1 || data.indexOf('=') != -1)
        {
            str = data.replace(/([\#|\+|\/|\?|\%|\#|\&|\=])/g, ($1:any) =>
            {
                return encodeURIComponent($1);
            });
        }

        return str;
}