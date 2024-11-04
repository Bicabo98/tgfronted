import CryptoJS from 'crypto-js';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { initInitData } from '@telegram-apps/sdk';


const CHANNEL = "WP_PC_001";
const VERSION = 2700;
const PACKID = 200;
const LANG = "en";
const TZ_NAME = "Asia/Shanghai";
const TZ_DELTA = "GMT+8";
const NET = "wifi";
const DEVICE = "huaweiP10";
const MACID = "c45804c73b5d4ca21f6644a3a2d6ffb6";
const KEY_SECRET3 = "E6RA4#b9sQkld8sz$qJh^BWjzsGbhM62";



const game_server_etwork = 'http://192.168.100.201:8109/vpoker/service.php';        // 内网
//const game_server_etwork = "https://122.248.197.217:8109/vpoker/service.php";       // 外网




// 获取玩家正在房间列表
export const getHallCashGameList = async () => {
    const _userId = localStorage.getItem('id')
    var requestData = {
        game_type:-1,
        blid_li:[],
        straddle:0,
        hide_player_stats:0,
        hide_table_stats:0,
        restrict_gps_ip:0,
        hide_full_desk:0,
        password:0,
        ofc_blind_li:[],
        is_only_show_single_table:0,
        is_token_only:0,
        token_switch:1,
        from_index:0,
        method: "pokerabout#get_hall_cash_desk_list",
        uid: _userId,
    }
    const postdata: any = getRequestData(requestData);
    const postdata1: any = JSON.stringify(postdata)
    const data = new FormData();
    data.set("postdata", postdata1)
    try {
        const response = await axios.post(game_server_etwork, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        console.log("获取玩家最近房间数据config：", response)
        return response.data;

    } catch (error) {
        console.error("Error calling backend API:", error);
    }
}




// 获取创建房间参数接口
export const getPokerCustomConf = async () => {
    const _userId = localStorage.getItem('id')
    var requestData = {
        method: "pokerabout#poker_customconf",
        uid: _userId,
    }
    const postdata: any = getRequestData(requestData);
    const postdata1: any = JSON.stringify(postdata)
    const data = new FormData();
    data.set("postdata", postdata1)

    try {
        const response = await axios.post(game_server_etwork, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        // const response = await axios.post('https://122.248.197.217:8109/vpoker/service.php', data, {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        // });

        console.log("创建游戏数据config：", response)
        return response.data;

    } catch (error) {
        console.error("Error calling backend API:", error);
    }
}

// 获取用户生涯接口
export const getUserAllRecord = async () => {
    const _userId = localStorage.getItem('id')
    var requestData = {
        method: "userallrecord#get_user_stats",
        uid: _userId,
        game_type: "0",
        desk_currency: 1
    }
    const postdata: any = getRequestData(requestData);
    const postdata1: any = JSON.stringify(postdata)
    const data = new FormData();
    data.set("postdata", postdata1)

    try {
        const response = await axios.post(game_server_etwork, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        console.log("用户生涯数据config：", response)
        return response.data;

    } catch (error) {
        console.error("Error calling backend API:", error);
    }

}


// 加入房间接口
export const callBackendAPI = async (deskId: any) => {
    const _userId = localStorage.getItem('id')
    var requestData = {
        method: "pokerabout#get_enter_desk_info",
        desk_id: deskId,
        uid: _userId,
        get_type: 1,
    }
    const postdata: any = getRequestData(requestData);
    const postdata1: any = JSON.stringify(postdata)
    const data = new FormData();
    data.set("postdata", postdata1)
    try {
        const response = await axios.post(game_server_etwork, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        console.log("加入房间回调response=", response)
        // If table is not exist or get error code .. 
        // Return error
        if (response.data.code == -11056 || response.data.data == 'Table is not exist') {
            return response.data.code
        }

        const initData = initInitData() as any;
        const server_info = localStorage.getItem("server_info")
        let info = JSON.parse(server_info as string)
        const mergeData = {
            serverinfo: info,
            token: localStorage.getItem('authorization'),
            user_id: _userId,
            game_type: 0,
            //first_name: initData.user.firstName,
            desk_id: deskId,
            // share_url: "http://192.168.100.201:23456"
            share_url: info.desk_share_url
        }
        const mergedata = JSON.stringify(mergeData);
        const params = JSON.parse(mergedata);
        return mergedata;

    } catch (error) {
        console.error("Error calling backend API:", error);
    }
};


export const getRequestData = (req: any) => {
    const pub = getRequestPublic()
    const ext = getRequestExtend();
    const sig = getRequestSign(getRequestSignMap2(req));
    let token = localStorage.getItem('authorization');
    let postdata =
    {
        sig: sig,
        accesstoken: token,
        extend: ext,
        request: req,
        public: pub
    };

    console.log("参数：", postdata)

    // return {
    //     "sig": "4cc40dec187d396c74630995d5ff6621",
    //     "accesstoken": "3f3ad3cbd5a26e47513e917fcd3a1993",
    //     "extend": {
    //         "net": "wifi",
    //         "device": "huaweiP10",
    //         "macid": "c45804c73b5d4ca21f6644a3a2d6ffb6",
    //         "tz_name": "Asia/Shanghai",
    //         "tz_delta": "GMT+8"
    //     },
    //     "request": {
    //         "method": "pokerabout#get_enter_desk_info",
    //         "desk_id": "880524",
    //         "uid": "10000021",     
    //         "get_type": 1,
    //     },
    //     "public": {
    //         "channel": "WP_PC_001",
    //         "version": 2700,
    //         "packid": 200,
    //         "lang": "en"
    //     }
    // }

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
function urlEncodeString(data: any) {
    let str = data;
    if (data.indexOf('#') != -1 || data.indexOf('+') != -1 || data.indexOf('/') != -1 || data.indexOf('?') != -1 ||
        data.indexOf('%') != -1 || data.indexOf('&') != -1 || data.indexOf('=') != -1) {
        str = data.replace(/([\#|\+|\/|\?|\%|\#|\&|\=])/g, ($1: any) => {
            return encodeURIComponent($1);
        });
    }

    return str;
}