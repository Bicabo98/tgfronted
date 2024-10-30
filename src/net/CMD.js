/* jshint esversion:6 */

let CMD = {};
// ----------------------游戏内逻辑 start---------------------------
// 游戏内逻辑 start
CMD.INPUT = 1010;                                                   // 进入
CMD.INPUT_GAME_EVT = 1020;                                          // 进入（服务端会将当前所有用户的信息推送过来）
CMD.EXIT = 1030;                                                    // 退出
CMD.EXIT_RESPONSE_EVT = 1040;                                       // 退出
CMD.CMD_HALL_GAME_EXIT_CHIPS_TEXAS_REQ = 25301;                        // 大厅牌局退桌时 玩家剩余筹码
CMD.GAME_OVER_COUNT_DOWN_EVT = 25115;                               // 牌桌解散 倒计时通知
CMD.BACK_GROUND_REQ = 1034
CMD.GAME_DESK_SHARE = 1035                                          // 牌桌玩家分享 生成短链

CMD.CMD_GAME_USER_SIT_DOWN = 170;                                   // 坐下
CMD.SIT_DOWN_EVT = 1025;                                            // 获取服务端通知坐下
CMD.STAND_UP = 135;                                                 // 请求站起
CMD.STAND_UP_RESPONSE_EVT = 137;                                    // 获取服务端通知站起

CMD.GAME_STAR_EVT = 1100;                                           // 游戏开始 发牌
CMD.RESULT_EVT = 1110;                                              // 结果

CMD.FOLLOW = 120;                                                   // 跟住
CMD.FOLLOW_RESPONSE_EVT = 121;                                      // 跟住（现在自己的响应也在这里）
CMD.GIVEUP = 128;                                                   // 弃牌
CMD.GIVEUP_RESPONSE_EVT = 129;                                      // 弃牌（所有人弃牌的响应）


CMD.CMD_GAME_BEGIN_NOTIFY = 367;                                    // 房主开始游戏请求
CMD.USER_CONFIRM_GAME_START = 1767;                                 // 房主点击开始游戏后的通知

CMD.CHECK_CHIP_TO_SET_DOWN = 173;                                   // 大场坐下时要先检查所下的筹码数
CMD.CMD_GET_SUPPLY_CHIPS_INFO = 360;                                // 获取补充记分牌信息
CMD.EXCAHNGE_CHIPS = 140;                                           // 用户更改携带量

CMD.OPEN_SHARE_CARDS_EVT = 1105;                                    // 公共牌
CMD.EVENT_BEFORE_OPEN_SHARE_CARDS = 1106;                           // 派发公共牌 前 玩家allin 胜率显示

CMD.QUERY_DESK_ON_SHOW = 1031;                                      // 查询牌桌
CMD.CMD_QUERY_DESK_REQ = 351;                                       // 根据桌子号查询桌子信息

CMD.CMD_DISBAND_PYQ_DESK = 306;                                     // 解散牌桌
CMD.CMD_NOTIFY_SERVER_START = 313;                                  // 通知服务器可以提前开始游戏

// 游戏内逻辑 end

// 战绩 start
CMD.PERIOD_STAT = 5012;                                             // 查看实时战绩

// 战绩 end

// 记录 start
CMD.CMD_GAME_LAST_RECORD = 5508;                                    // 上局牌局记录
CMD.CMD_QUERY_ENCRYPTION_CARD_HISTORY = 5520                           // 查询牌局加密历史数据
CMD.CMD_HANDS_CARD_COLLECT_REQ = 365;                               // 收藏某一手牌（收藏牌局回顾中的某一手牌）
CMD.CMD_DESK_HANDS_INDEX_NOTIFY = 366;                              // 牌局当前最新手数通知
// 记录 end

// 其他操作 start
CMD.CMD_USER_CALL_TIME = 315;                                       // 玩家请求花时操作
CMD.CMD_USER_USE_CALL_TIME_EVT = 316;                               // 玩广播给所有人，某人使用了call time，剩余时间是多少
CMD.CMD_USER_UPDATE_CALL_TIME = 317;                                // 通知客户端更新call time时间

CMD.CMD_OPENREST_SHARECARDS_REQ = 361;                              // 请求翻开剩余公共牌
CMD.CMD_OPENREST_SHARECARDS_NOTIFY = 362;                           // 请求显示剩余公共牌通知

CMD.CMD_FORCE_SHOW_PLAYER_CARDS = 5510                              //强制查看玩家的手牌
CMD.CMD_EVT_FORCE_SHOW_PLAYER_CARDS = 5511                          //强制查看玩家手牌响应
CMD.CMD_UPDATE_CHAT_DISPLAY_REQ = 5513                              //修改聊天框显示模式

CMD.CMD_OCCUPY_SEAT_REQ = 508;                                      // 占座请求
CMD.CMD_OCCUPY_SEAT_NOTIFY = 509;                                   // 保卫离桌的通知

CMD.CMD_NOVICE_JOIN_TYPE_REQ = 368;                                 // 新手盲设置
CMD.CMD_SET_SHORTCUT_REQ = 369;                                     // 经典场、SNG设置快捷操作类型

CMD.SHOW_CARDS_REQ = 1120;                                          // 请求显示自己的牌
CMD.SHOW_CARDS_EVT = 1122;                                          // 通知显示某个玩家的牌

// 其他操作 end

// 房主 start

CMD.CMD_SETTING_DESK_REQ = 355;                                     // 房主设置房间属性
CMD.CMD_SETTING_DESK_NOTIFY = 356;                                  // 房间设置通知

CMD.CMD_RISKCONTROLTIMEOUT_NOTIFY = 359;                            // 服务器风险控制超时通知
CMD.CMD_MASTER_CHANGE_NOTIFY = 372;                                 // 房主改了

CMD.CMD_GET_USER_PERMS_LIST_REQ = 700;                              // 获取人员管理信息列表
CMD.CMD_EDIT_USER_PERMS_REQ = 701;                                  // 人员管理修改人员权限
CMD.CMD_GET_ONEUSER_PERMS_REQ = 702;                                // 获取某个人的权限信息
CMD.CMD_EDIT_USER_PERMS_NOTIFY = 703;                               // 房主修改权限，通知

CMD.CMD_MTT_EDIT_USER_PERMS_REQ = 6098; // 更新玩家权限  注意每个类型的mtt都需要加对应的命令 但只生效 协议里的chat字段
CMD.CMD_MTTOMAHA_EDIT_USER_PERMS_REQ = 106098;
CMD.CMD_MTTPLOFIVE_EDIT_USER_PERMS_REQ = 306098;
CMD.CMD_MTTPLOSIX_EDIT_USER_PERMS_REQ = 506098;

CMD.CMD_MTT_USER_PERMS_REQ = 6099; // 查看玩家相互聊天权限  注意每个类型的mtt都需要加对应的命令 但只生效 协议里的chat字段
CMD.CMD_MTTOMAHA_USER_PERMS_REQ = 106099;
CMD.CMD_MTTPLOFIVE_USER_PERMS_REQ = 306099;
CMD.CMD_MTTPLOSIX_USER_PERMS_REQ = 506099;
// 房主 end

CMD.PRIVATE_DESK_TIME_TIP = 501;                                    // 私有房间牌局剩余时间提示

CMD.CMD_USERSTATUS_CHANGE_NOTIFY = 363;                             // 单独广播玩家的状态变化

CMD.CMD_INVALID_POOL_NTF = 7001;                                    // 无效底池通知
CMD.CMD_FORBID_LOGIN = 22100;                                       // 禁止登陆

CMD.CMD_OCCUPY_GAME_PAUSE_EVT = 12067;                              // 牌局留座离桌暂停

// 自动买入 START---
CMD.CMD_GAME_USER_AUTO_BUY_IN_CFG = 510;                            // 自动买入
CMD.CMD_OMAHA_USER_AUTO_BUY_IN_CFG = 6856;
CMD.CMD_DRAWMAHA_USER_AUTO_BUY_IN_CFG = 11068;
CMD.CMD_PINEAPPLE_USER_AUTO_BUY_IN_CFG = 12068;

CMD.CMD_EVENT_AUTO_BUY_IN = 10027;                                  // 玩家自动买入后广播事件
CMD.CMD_EVENT_AUTO_BUY_INVALID = 10028;                             // 自动买入设置失效通知

CMD.CMD_CHECK_VERIFICATION_CODE_TEXAS = 15020;                      // 密码桌校验密码
CMD.CMD_TEXAS_VPIP_LIMIT_CHECK_AUTH = 26001;                        // vpip限制
CMD.CMD_QUERY_BUY_IN_STATUS_TOKEN = 25103;
CMD.CMD_CANCEL_BUY_IN_TOKEN = 25098;
// 自动买入 END---
//
CMD.CMD_MESSAGE_BLOCK_SET = 705; // #emoji 设置

// ----------------------游戏内逻辑 end---------------------------

// ------------------------------------------SNG相关 start--------------------------------------------
CMD.SNG_INPUT = 1213;                                               // 进入
CMD.CMD_RAISE_BLIND = 1202;	                                        // 升盲通知，SNG专用

CMD.CMD_SNG_START_AUTOPlAY = 1211;                                  // 托管请求
CMD.CMD_SNG_EXIT_AUTOPlAY = 1206;                                   // 退出托管请求
CMD.CMD_SNG_AUTOPlAY_NOTIFY = 1207;                                 // 进入托管通知
CMD.CMD_SNG_EXIT_AUTOPlAY_NOTIFY = 1208;                            //退出托管通知

CMD.CMD_SNG_CONTEST_OVER_NOTIFY = 1205;                             // 赛事结束的通知
CMD.CMD_SNG_PERIOD_STAT_REQ = 5509;	                                // sng查看战绩
CMD.SNG_DESK_INFO_REQ = 1203;                                       // sng赛事信息请求
CMD.CMD_SNG_MESSAGE_BLOCK_SET = 705;

// ------------------------------------------SNG相关 end--------------------------------------------

// ------------------------------------------MTT相关 start--------------------------------------------
CMD.CMD_MTT_CONTEST_INFO_REQ = 6002;                                // MTT赛况(赛事信息)

// MTT单独的进桌协议
CMD.CMD_MTT_ENTER_DESK_REQ = 6011;

CMD.CMD_EVT_MTT_WILL_RAISE_BLIND = 6001;                            // 升盲通知
CMD.CMD_MTT_EXIT_DESK_REQ = 6012;                                   // 离开牌桌/弃赛
CMD.CMD_MTT_QUERY_PLAYER_DESK_REQ = 6013;                           // 查询牌桌
CMD.CMD_MTT_USER_GIVE_UP_REQ = 6014;                                // 用户弃牌
CMD.CMD_MTT_FOLLOW_BET_REQ = 6015;                                  // 跟注
CMD.CMD_MTT_SHOW_CARDS_REQ = 6016;                                  // 亮牌请求
CMD.CMD_MTT_CLIENT_START_GAME_REQ = 6018;                           // 通知结算动画播放完毕, 可立即开始游戏

CMD.CMD_MTT_START_AUTO_PLAY_REQ = 8001;                             // 进入托管状态
CMD.CMD_MTT_CANCEL_AUTO_PLAY_REQ = 6004;                            // 退出托管状态
CMD.CMD_EVT_MTT_AUTO_PLAY = 6005;                                   // 进入托管状态通知
CMD.CMD_EVT_MTT_CANCEL_AUTO_PLAY = 8002;                            // 取消托管状态通知

CMD.CMD_MTT_REBUY_REQ = 6006;                                       // 重构请求
CMD.CMD_MTT_ADDON_REQ = 6007;                                       // 增购请求
CMD.CMD_MTT_REBUY_OR_ADDON_TOKEN_REQ = 6097;                       //代币增购重构请求

CMD.CMD_MTT_CANCEL_REBUY_REQ = 6025;                                // 取消重购请求

CMD.CMD_EVT_MTT_LATE_REG_FINISH_NTF = 6100;                        //延时报名提前结束通知
CMD.CMD_EVT_MTT_FINAL_RESULT_NTF = 6019;                            // 最终排名通知，玩家的名次最终被确认下来后通知用户（玩家被淘汰后或者决赛桌结束）

CMD.CMD_MTT_ENTER_GROUND_NTF = 6020;                                // 进场通知
CMD.CMD_MTT_EVENT_EXPIRED_NTF = 6028;                               // 超时没进入比赛,被退赛了
CMD.CMD_MTT_USER_OP_NTF = 6031;                                     // 淘汰,加入,并桌,退赛 提示
CMD.CMD_MTT_IN_THE_MONEY_EVT = 6034;                                // 通知玩家进入了钱圈
CMD.CMD_MTT_PERIODSTAT_REQ = 6084; 				                    // MTT实时战绩请求

CMD.CMD_MTT_PERIOD_SELF_CURRENT_RANK_REQ = 6087;                    // MTT实时战绩自己当前排名
CMD.CMD_MTT_PERIOD_EVENT_RANK_REQ = 6088;                           // MTT实时战绩赛事总排名请求
CMD.CMD_MTT_PERIOD_DESK_RANK_REQ = 6091;                            // MTT实时战绩本桌排名请求

CMD.CMD_MTT_PERIOD_OBSERVER_REQ = 6082;                             // MTT实时战绩奖励请求
CMD.CMD_MTT_PERIOD_AWARD_REQ = 6081;                                // MTT实时战绩奖励请求
CMD.CMD_MTT_PERIOD_DESK_REQ = 6079;                                 // MTT实时战绩桌子请求
CMD.CMD_MTT_PERIOD_BLIND_REQ = 6080;                                // MTT实时战绩盲注请求
CMD.CMD_MTT_EVENT_STATUS_NTF = 6010;                                // 赛事状态变更
CMD.CMD_MTT_RESULT_REQ = 6074;                                      // mtt赛事结算请求  用于错过结算的再接受


// 并桌通知, 并桌后通知并桌成功的玩家
CMD.CMD_MTT_EVENT_MERGE_TO_MERGE_USER = 6008;


// 排名变更通知广播
CMD.CMD_MTT_EVENT_RANK_CHANGED_NTF = 6009;

// 请求使用call time
CMD.CMD_MTT_USE_CALL_TIME_REQ = 6066;

// MTT弃牌弹出二次确认框统计
CMD.CMD_MTT_STAT_POP_CONFIRM_FOLD_REQ = 10364;

// MTT收藏手牌请求
CMD.CMD_MTT_HANDS_CARD_COLLECT_REQ = 10365;

// MTT中场休息
CMD.CMD_MTT_MIDDLE_REST_NTF = 6094;
// MTTD中场休息涨盲倒计时停止单独通知
CMD.CMD_MTT_STOP_BLIND_TIME_NTF = 6069;

// 用户不可重购增购的通知
CMD.CMD_MTT_LOSE_REBUY_ADDON_NOTIFY = 6068;

// MTT请求牌局记录
CMD.CMD_MTT_GAME_LAST_RECORD = 6070;

// cmd: 6071, 赛事开始,通知桌子号码
CMD.CMD_MTT_GAME_DESK_NUM_NOTIFY = 6071;


// cmd: 6072, 重购增购剩余次数的通知
CMD.CMD_MTT_REBUY_ADDON_REMAIN_NTF = 6072;

// 测试网络速度
CMD.CMD_NETWORK_SPEED_TEST = 101;


CMD.CMD_MTT_SET_SHORTCUT_REQ = 6078;                                // MTT设置快捷操作类型

CMD.CMD_MTT_OPENREST_SHARECARDS_REQ = 6086;

CMD.CMD_MTT_GO_TO_EVENT_REQ = 6088;                                 // 跳转到赛事

CMD.CMD_MTT_REFRESH_ADDON_NTF = 6092;                               // 刷新addon弹窗阶段显示的信息
CMD.CMD_MTT_QUERY_ADDON_INFO = 6093;                                // 查询addon弹窗阶段显示的信息
CMD.CMD_MTT_MESSAGE_BLOCK_SET = 24010;

// ------------------------------------------MTT相关 end--------------------------------------------0

// ------------------------------------------OMAHA start--------------------------------------------

CMD.CMD_OMAHA_USER_ENTER_DESK = 6801;                               // 用户进桌请求
CMD.CMD_OMAHA_QUERY_PLAYER_DESK = 6803;                             // 客户端从后台切换前台重新进桌
CMD.CMD_OMAHA_GAME_EXIT_DESK = 6804;                                // 用户主动发起进桌
CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO4_REQ = 25303;                    // 大厅牌局退桌时 玩家剩余筹码
CMD.CMD_OMAHA_GAME_USER_GIVE_UP = 6805;                             // 用户进桌
CMD.CMD_OMAHA_GAME_FOLLOW_BET = 6806;                               // 用户跟住
CMD.CMD_OMAHA_GAME_USER_STAND_UP = 6807;                            // 用户站起
CMD.CMD_OMAHA_GAME_USER_SIT_DOWN = 6808;                            // 用户坐下

CMD.CMD_OMAHA_USER_START_GAME = 6825;                               // 用户开始游戏
CMD.CMD_OMAHA_CLIENT_NTF_START_GAME = 6815;                         // 客户端通知服务器立即开始游戏

CMD.CMD_OMAHA_QUERY_EXCHANGE_CHIPS = 6833;                          // 玩家检查是否能坐下  查询记分牌
CMD.CMD_OMAHA_SUPPLEMENT_CHIPS_INFO_REQ = 6820;                     // 计分牌补充
CMD.CMD_OMAHA_GAME_EXCHANGE_CHIPS_CONFIG = 6809;                    // 用户请求兑换筹码

CMD.CMD_OMAHA_QUERY_DESK_REQ = 6802;                                // 查询房间信息
CMD.CMD_OMAHA_USER_DISBAND_DESK_REQ = 6811;                         // 解散桌子

// 战绩 start
CMD.CMD_OMAHA_PERIOD_STAT_REQ = 6831;                               // 请求实时战绩

// 战绩 end

// 记录 start
CMD.CMD_OMAHA_QUERY_LAST_RECORD_DETAIL = 6832;                      // 牌局详情
CMD.CMD_OMAHA_HANDS_CARD_COLLECT_REQ = 6824;                        // 手牌收藏
// 记录 end

// 房主 start
CMD.CMD_OMAHA_SETTING_DESK_REQ = 6819;                              // 房间设置
CMD.CMD_OMAHA_USERS_PERMS_LIST_REQ = 6826;                          // 获取用户权限信息列表
CMD.CMD_OMAHA_EDIT_USER_PERMS_REQ = 6827;                           // 更新用户权限信息
CMD.CMD_OMAHA_USER_PERMS_REQ = 6828;                                // 获取用户权限信息

// 房主 end

// other start
CMD.CMD_OMAHA_USE_CALL_TIME_REQ = 6816;                             // 玩家请求使用call time
CMD.CMD_OMAHA_OCCUPY_SEAT_REQ = 6821;                               // 占位请求
CMD.CMD_OMAHA_SHOW_CARDS_REQ = 6810;                                // 玩家亮牌
CMD.CMD_OMAHA_SHOW_REST_SHARE_CARDS_REQ = 6822;                     // 查看剩余公共牌
CMD.CMD_OMAHA_FORCE_SHOW_PLAYER_CARDS = 6885                        // 查看玩家手牌
CMD.CMD_OMAHA_NOVICE_JOIN_TYPE_REQ = 6829;                          // 设置新手入局方式
CMD.CMD_OMAHA_SET_SHORTCUT_ACTION_REQ = 6830;                       // 设置快捷方式
// other end

// 奥马哈风险控制
CMD.CMD_OMAHA_BUY_INSURANCE_REQ = 6836;                             // 买保险请求
CMD.CMD_OMAHA_USER_AGREED_DIVIDE_REQ = 6855;                        // 落后玩家是否同意保险
CMD.CMD_OMAHA_USER_INSURANCE_TYPE_REQ = 6842;                       // 买保险玩家通知当前正在买哪种类型的保险
CMD.CMD_OMAHA_USER_INSURANCE_MAIN_REQ = 6849;                       // 领先玩家重新进入到保险的主控界面
CMD.CMD_CHECK_VERIFICATION_CODE_OMAHA = 15021;                      // 密码桌校验密码
CMD.CMD_OMAHA_VPIP_LIMIT_CHECK_AUTH = 26002;                        // 奥马哈坐下的时候检测vpip
CMD.CMD_OMAHA_MESSAGE_BLOCK_SET = 6884;
CMD.CMD_OMAHA_QUERY_BUY_IN_STATUS_TOKEN = 25104;
CMD.CMD_OMAHA_CANCEL_BUY_IN_TOKEN = 25099;
// ------------------------------------------OMAHA相关 END--------------------------------------------

// ------------------------------------------MTT_OMAHA start--------------------------------------------


CMD.CMD_EVT_MTTOMAHA_WILL_RAISE_BLIND = 106001;                    // 升盲通知


CMD.CMD_EVT_MTTOMAHA_AUTO_PLAY = 106005;                           // 进入托管状态通知
CMD.CMD_EVT_MTTOMAHA_CANCEL_AUTO_PLAY = 108002;                    // 取消托管状态通知


CMD.CMD_EVT_MTTOMAHA_FINAL_RESULT_NTF = 106019;                    // 最终排名通知，玩家的名次最终被确认下来后通知用户（玩家被淘汰后或者决赛桌结束）

CMD.CMD_MTTOMAHA_ENTER_GROUND_NTF = 106020;                         // 进场通知
CMD.CMD_MTTOMAHA_EVENT_EXPIRED_NTF = 106028;                        // 超时没进入比赛,被退赛了
CMD.CMD_MTTOMAHA_USER_OP_NTF = 106031;                              // 淘汰,加入,并桌,退赛 提示
CMD.CMD_MTTOMAHA_IN_THE_MONEY_EVT = 106034;                         // 通知玩家进入了钱圈

CMD.CMD_MTTOMAHA_EVENT_STATUS_NTF = 106010;                         // 赛事状态变更


// 并桌通知, 并桌后通知并桌成功的玩家
CMD.CMD_MTTOMAHA_EVENT_MERGE_TO_MERGE_USER = 106008;

// 排名变更通知广播
CMD.CMD_MTTOMAHA_EVENT_RANK_CHANGED_NTF = 106009;

// MTT中场休息
CMD.CMD_MTTOMAHA_MIDDLE_REST_NTF = 106067;
// MTTD中场休息涨盲倒计时停止单独通知
CMD.CMD_MTTOMAHA_STOP_BLIND_TIME_NTF = 106069;

// 用户不可重购增购的通知
CMD.CMD_MTTOMAHA_LOSE_REBUY_ADDON_NOTIFY = 106068;


// cmd: 6071, 赛事开始,通知桌子号码
CMD.CMD_MTTOMAHA_GAME_DESK_NUM_NOTIFY = 106071;

// cmd: 6072, 重购增购剩余次数的通知
CMD.CMD_MTTOMAHA_REBUY_ADDON_REMAIN_NTF = 106072;


CMD.CMD_MTTOMAHA_REFRESH_ADDON_NTF = 106092;                        // 刷新addon弹窗阶段显示的信息

// ---------------已经确认有修改的部分----------------------------------

// MTT单独的进桌协议
CMD.CMD_MTTOMAHA_ENTER_DESK_REQ = 106011;

CMD.CMD_MTTOMAHA_CONTEST_INFO_REQ = 106002;                         // MTT赛况(赛事信息)

CMD.CMD_MTTOMAHA_EXIT_DESK_REQ = 106012;                            // 离开牌桌/弃赛
CMD.CMD_MTTOMAHA_QUERY_PLAYER_DESK_REQ = 106013;                    // 查询牌桌

CMD.CMD_MTTOMAHA_START_AUTO_PLAY_REQ = 108001;                      // 进入托管状态
CMD.CMD_MTTOMAHA_CANCEL_AUTO_PLAY_REQ = 106004;                     // 退出托管状态

CMD.CMD_MTTOMAHA_USER_GIVE_UP_REQ = 106014;                         // 用户弃牌
CMD.CMD_MTTOMAHA_FOLLOW_BET_REQ = 106015;                           // 跟注

CMD.CMD_MTTOMAHA_SHOW_CARDS_REQ = 106016;                           // 亮牌请求
CMD.CMD_MTTOMAHA_CLIENT_START_GAME_REQ = 106018;                    // 通知结算动画播放完毕, 可立即开始游戏

CMD.CMD_MTTOMAHA_RESULT_REQ = 106074;                               // mtt赛事结算请求  用于错过结算的再接受

CMD.CMD_MTTOMAHA_CANCEL_REBUY_REQ = 106025;                         // 取消重购请求

CMD.CMD_MTTOMAHA_REBUY_REQ = 106006;                                // 重构请求
CMD.CMD_MTTOMAHA_ADDON_REQ = 106007;                                // 增购请求
CMD.CMD_MTTOMAHA_REBUY_OR_ADDON_TOKEN_REQ = 106097;                                       //代币 增购重构请求

// 请求使用call time
CMD.CMD_MTTOMAHA_USE_CALL_TIME_REQ = 106066;

// MTT弃牌弹出二次确认框统计
CMD.CMD_MTTOMAHA_STAT_POP_CONFIRM_FOLD_REQ = 110364;

// MTT收藏手牌请球
CMD.CMD_MTTOMAHA_HANDS_CARD_COLLECT_REQ = 110365;

CMD.CMD_MTTOMAHA_SET_SHORTCUT_REQ = 106078;                         // MTT设置快捷操作类型

CMD.CMD_MTTOMAHA_OPENREST_SHARECARDS_REQ = 106086;

CMD.CMD_MTTOMAHA_QUERY_ADDON_INFO = 106093;                         // 查询addon弹窗阶段显示的信息
CMD.CMD_MTTOMAHA_MESSAGE_BLOCK_SET = 124010;

// ------------------------------------------MTT_OMAHA相关 END--------------------------------------------

// --------------------------------------------新的胜率风险控制  start-----------------------------------------
CMD.TRIGGER_RISK_NTF = 8100;                                       // old:322 触发风险控制通知 给领先玩家
CMD.TRIGGER_RISK_MULTICARDS = 9100;                                // old:322 触发多次牌保险通知 给领先玩家
CMD.TRIGGER_RISK_TO_OTHER_NTF = 8101;                               // old:323 通知非领先玩家 风险控制触发通知
CMD.RISK_BUY_REQ = 8102;                                            // old:324 风险控制请求(cmd: 8003, omaha保险)
CMD.RISK_MULTICARDS_BUY_REQ = 9101;                                 // old:324 多次牌风险控制请求
CMD.WHO_BUY_INSURANCE_EVT = 8103;                                   // old:328 通知给其他人，谁买了多少保险
CMD.OMAHA_RISK_BUY_REQ = 8104;                                      // old:324 风险控制请求(cmd: 8003, omaha保险)
CMD.OMAHA_RISK_MULTICARDS_BUY_REQ = 9102;                           // old:324 多次牌风险控制请求 omaha
CMD.CMD_RISK_DETAIL_REQ = 370;                                      // 获取风险系统详情
CMD.CMD_GET_INSURANCE_ORDER_REQ = 8105;
CMD.CMD_USER_INSURANCE_DELAY_REQ = 341;                             // cmd: 341 玩家请求保险延时(OMAHA: CMD:6844)
CMD.CMD_PLO_FOUR_USER_INSURANCE_DELAY_REQ = 6844;                   // cmd: 341 玩家请求保险延时(OMAHA: CMD:6844)
CMD.CMD_PLO_FIVE_USER_INSURANCE_DELAY_REQ = 13036;                 // cmd: 341 玩家请求保险延时(OMAHA: CMD:6844)
CMD.CMD_PLO_SIX_USER_INSURANCE_DELAY_REQ = 450036;                 // cmd: 341 玩家请求保险延时(OMAHA: CMD:6844)
CMD.TRIGGER_NO_RISK_NTF = 26100  //玩家allin后当服务器判定不触发风险控制时（多人allin，落后玩家没有反超牌等情况
// cmd: 340 广播玩家正在选择哪种保险
// cmd: 345 广播当前不需要购买保险
// cmd: 346 领先玩家重新进入到保险的主控界面 (OMAHA CMD:6849)

// 保险
CMD.CMD_INRSURANCE_ORDER_INFO = 322;                                // 达到条件后，服务器通知给客户端弹出保险单
CMD.CMD_BUY_INSURANCE = 324;                                        // 买保险
CMD.CMD_INVALID_INSURANCE_INFO = 325;                               // 保险池失效后,如果他还在牌局里面,则通知客户端
CMD.CMD_LING_XIAN_INSURANCE = 323;                                  // 通知非领先玩家，领先玩家正在购买保险
CMD.CMD_SUPPLY_INSURANCE = 326;                                     // 补充保险筹码
CMD.CMD_GET_INSURANCE_INFO = 327;                                   // 有人接保险的通知
CMD.CMD_NOTIFY_BUY_INSURANCE = 328;                                 // 通知给其他人，谁买了多少保险
CMD.CMD_CLAIM_INSURANCE = 329;                                      // 通知给买保险的玩家，保险的赔付情况


// 风险控制
CMD.CMD_USER_INSURANCE_TYPE_REQ = 339;                              // 买保险玩家通知当前正在买哪种类型的保险
CMD.CMD_USER_INSURANCE_TYPE_NOTIFY = 340;                           // 广播玩家正在选择哪种保险
CMD.CMD_USER_DIVIDE_OR_MULTICARD_NOTIFY = 336;                      // 通知落后玩家 领先玩家发起协议分池或者多次发牌请求
CMD.CMD_USER_AGREED_DIVIDE_REQ = 337;                               // 落后玩家 是否同意协议分池或者多次发牌
CMD.CMD_USER_AGREED_DIVIDE_NOTIFY = 338;                            // 通知领先玩家 落后玩家是否同意协议分池或者多次发牌
CMD.CMD_USER_INSURANCE_DELAY_NOTIFY = 342;                          // 广播玩家请求保险延时
CMD.CMD_USER_INSURANCE_ACTION_NOTIFY = 344;                         // 广播玩家保险动作
CMD.CMD_NO_NEED_BUY_INSURANCE_NOTIFY = 345;                         // 广播当前不需要购买保险
CMD.CMD_USER_INSURANCE_MAIN_REQ = 346;                              // 领先玩家重新进入到保险的主控界面
CMD.CMD_USER_INSURANCE_MAIN_NOTIFY = 347;                           // 广播领先玩家重新进入到保险的主控界面
CMD.CMD_TOTALCHIPS_DETAIL_NOTIFY = 348;                             // 单独通知筹码堆信息
CMD.CMD_ASYNC_BUYINSURANCE_TIME_NOTIFY = 349;                       // 同步风控期间的定时器时间
CMD.CMD_DESK_RESET_NOTIFY = 350;                                    // 桌子已经重置  因为多次发牌和协议分池延迟清桌

CMD.CMD_OUTS_INSURANCE_MENU_NTF = 25200  //新的outs 保险
CMD.CMD_OUTS_INSURANCE_BUY_TEXAS_REQ = 25201
CMD.CMD_OUTS_INSURANCE_BUY_SHORT_REQ = 25202
CMD.CMD_OUTS_INSURANCE_BUY_PLO4_REQ = 25203
CMD.CMD_OUTS_INSURANCE_BUY_PLO5_REQ = 25204
CMD.CMD_OUTS_INSURANCE_BUY_PLO6_REQ = 25205
CMD.CMD_OUTS_INSURANCE_BUY_NTF = 25206  //保险买入通知
// ---------------------------------------------新的胜率风险控制  end-----------------------------------------


// ------------------------------------------DRAWMAHA start--------------------------------------------

CMD.CMD_DRAWMAHA_USER_ENTER_DESK = 11001;                          // 用户进桌请求
CMD.CMD_DRAWMAHA_GAME_EXIT_DESK = 11004;                            // 用户主动发起进桌

CMD.CMD_DRAWMAHA_QUERY_DESK_REQ = 11002;                            // 查询房间信息
CMD.CMD_DRAWMAHA_QUERY_PLAYER_DESK = 11003;                         // 客户端从后台切换前台重新进桌

CMD.CMD_DRAWMAHA_GAME_USER_GIVE_UP = 11005;                         // 用户进桌
CMD.CMD_DRAWMAHA_GAME_FOLLOW_BET = 11006;                           // 用户跟住

CMD.CMD_DRAWMAHA_GAME_USER_STAND_UP = 11007;                        // 用户站起
CMD.CMD_DRAWMAHA_GAME_USER_SIT_DOWN = 11008;                        // 用户坐下

CMD.CMD_DRAWMAHA_USER_START_GAME = 11025;                           // 用户开始游戏

CMD.CMD_DRAWMAHA_QUERY_EXCHANGE_CHIPS = 11033;                      // 玩家检查是否能坐下  查询记分牌
CMD.CMD_DRAWMAHA_SUPPLEMENT_CHIPS_INFO_REQ = 11020;                 // 计分牌补充
CMD.CMD_DRAWMAHA_GAME_EXCHANGE_CHIPS_CONFIG = 11009;                // 用户请求兑换筹码

CMD.CMD_DRAWMAHA_SHOW_CARDS_REQ = 11010;                            // 玩家亮牌
CMD.CMD_DRAWMAHA_USER_DISBAND_DESK_REQ = 11011;                     // 解散桌子

CMD.CMD_DRAWMAHA_CLIENT_NTF_START_GAME = 11015;                     // 客户端通知服务器立即开始游戏

// 战绩 start
CMD.CMD_DRAWMAHA_PERIOD_STAT_REQ = 11031;                           // 请求实时战绩

// 战绩 end

// 记录 start
CMD.CMD_DRAWMAHA_QUERY_LAST_RECORD_DETAIL = 11032;                  // 牌局详情
CMD.CMD_DRAWMAHA_HANDS_CARD_COLLECT_REQ = 11024;                    // 手牌收藏
// 记录 end

// 房主 start
CMD.CMD_DRAWMAHA_SETTING_DESK_REQ = 11019;                          // 房间设置

CMD.CMD_DRAWMAHA_USERS_PERMS_LIST_REQ = 11026;                      // 获取用户权限信息列表
CMD.CMD_DRAWMAHA_EDIT_USER_PERMS_REQ = 11027;                       // 更新用户权限信息
CMD.CMD_DRAWMAHA_USER_PERMS_REQ = 11028;                            // 获取用户权限信息

// 房主 end

// other start
CMD.CMD_DRAWMAHA_USE_CALL_TIME_REQ = 11016;                         // 玩家请求使用call time
CMD.CMD_DRAWMAHA_OCCUPY_SEAT_REQ = 11021;                           // 占位请求
CMD.CMD_DRAWMAHA_SHOW_REST_SHARE_CARDS_REQ = 11022;                 // 查看剩余公共牌
CMD.CMD_DRAWMAHA_NOVICE_JOIN_TYPE_REQ = 11029;                      // 设置新手入局方式
CMD.CMD_DRAWMAHA_SET_SHORTCUT_ACTION_REQ = 11030;                   // 设置快捷方式
// other end

// special start
CMD.CMD_DRAWMAHA_EXCHANGE_START_NOTIFICATION = 11061;               // 用户换牌开始通知
CMD.CMD_DRAWMAHA_EXCHANGE_CARD_REQ = 11062;                         // 用户换牌请求
CMD.CMD_DRAWMAHA_EXCHANGE_ASSIGN_CARD_NOTIFICATION = 11063;         // 用户换牌后发卡通知
CMD.CMD_DRAWMAHA_PROCESS_SHOW_CARD_REQ = 11064;                     // 换卡时，用户是否接收亮牌
CMD.CMD_DRAWMAHA_EXCHANGE_OVER_REQ = 11066;                         // 换牌动画播放完毕
CMD.CMD_DRAWMAHA_EXCHANGE_REPLY_NTF = 11067;                        // 接收还是拒绝 明牌通知
CMD.CMD_CHECK_VERIFICATION_CODE_DRAWMAHA = 15022;                   // 密码桌校验密码
CMD.CMD_DRAWMAHA_VPIP_LIMIT_CHECK_AUTH = 26004;                     // 叫马哈坐下的时候检测vpip

// special end
CMD.CMD_DRAWMAHA_MESSAGE_BLOCK_SET = 11084;

// ------------------------------------------DRAWMAHA相关 END--------------------------------------------


// ------------------------------------------大菠萝 start--------------------------------------------

CMD.CMD_AC_USER_ENTER_DESK = 12001;                                 // 用户进桌请求
CMD.CMD_AC_GAME_EXIT_DESK = 12004;                                  // 用户主动离开牌桌

CMD.CMD_AC_GAME_USER_GIVE_UP = 12005;                               // 弃牌
CMD.CMD_AC_GAME_FOLLOW_BET = 12006;                                 // 跟住

CMD.CMD_AC_GAME_USER_STAND_UP = 12007;                              // 站起
CMD.CMD_AC_GAME_USER_SIT_DOWN = 12008;                              // 坐下

CMD.CMD_AC_QUERY_DESK_REQ = 12002;                                  // 查询桌子信息
CMD.CMD_AC_QUERY_PLAYER_DESK = 12003;                               // 客户端从后台切换前台重新进桌

CMD.CMD_AC_SUPPLEMENT_CHIPS_INFO_REQ = 12020;                       // 计分牌补充
CMD.CMD_AC_QUERY_EXCHANGE_CHIPS = 12033;                            // 查询坐下将要兑换的筹码
CMD.CMD_AC_GAME_EXCHANGE_CHIPS_CONFIG = 12009;                      // 用户请求兑换筹码

CMD.CMD_AC_USER_DISBAND_DESK_REQ = 12011;                           // 解散桌子

CMD.CMD_AC_USER_START_GAME = 12025;                                 // 用户开始游戏
CMD.CMD_AC_CLIENT_NTF_START_GAME = 12015;                           // 客户端通知服务器立即开始游戏


// 战绩 start
CMD.CMD_AC_PERIOD_STAT_REQ = 12031;                                 // 请求实时战绩
// 战绩 end

// 记录 start
CMD.CMD_AC_QUERY_LAST_RECORD_DETAIL = 12032;                        // 牌局详情
// 记录 end


// 房主 start
CMD.CMD_AC_SETTING_DESK_REQ = 12019;                                // 房间设置
CMD.CMD_AC_USERS_PERMS_LIST_REQ = 12026;                            // 获取用户权限信息列表
CMD.CMD_AC_EDIT_USER_PERMS_REQ = 12027;                             // 更新用户权限信息
CMD.CMD_AC_USER_PERMS_REQ = 12028;                                  // 获取用户权限信息
// 房主 end

// other start
CMD.CMD_AC_USE_CALL_TIME_REQ = 12016;                               // 玩家请求使用call time

// other end


CMD.CMD_AC_OCCUPY_SEAT_REQ = 12021;                                 // 占位请求
CMD.CMD_AC_HANDS_CARD_COLLECT_REQ = 12024;                          // 手牌收藏


CMD.CMD_AC_NOVICE_JOIN_TYPE_REQ = 12029;                            // 设置新手入局方式
CMD.CMD_AC_SET_SHORTCUT_ACTION_REQ = 12030;                         // 设置快捷方式


CMD.INPUT_PINEAPPLE_GAME_EVT = 12060;                               // 大菠萝进桌通知
CMD.CMD_AC_SET_CARD_REQ = 12061;                                    // 大菠萝请求摆牌
CMD.CMD_AC_LAST_CARD_REQ = 12062;                                   // 大菠萝最后一张摆的牌
CMD.CMD_AC_SHOW_CARDS_EVT = 12063;                                  // 大菠萝亮牌广播
CMD.CMD_AC_ASSIGN_EVT = 12064;                                      // 大菠萝发牌广播

CMD.CMD_AC_CANCEL_AUTO_PLAY_REQ = 12065;                            // 大菠萝请求退出托管  没有主动请求进入托管的命令
CMD.CMD_AC_GAMEOVER_EVT = 12066;                                    // 大菠萝结算

CMD.CMD_AC_READY_STATUS_REQ = 12069;                                // 用户准备请求
CMD.CMD_AC_READY_STATUS_EVT = 12070;                                // 用户准备通知
CMD.CMD_AC_NEXT_LEAVE_REQ = 12071;                                  // 下局离桌
CMD.CMD_AC_NEXT_STAND_REQ = 12072;                                  // 下局站起
CMD.CMD_CHECK_VERIFICATION_CODE_OFC = 15023;                        // 密码桌校验密码
CMD.CMD_AC_MESSAGE_BLOCK_SET = 12084;

// ------------------------------------------大菠萝 END--------------------------------------------


// ------------------------------------------plo5 start--------------------------------------------
CMD.CMD_PLOFIVE_USER_ENTER_DESK = 13001;                            // 用户进桌请求
CMD.CMD_PLOFIVE_QUERY_DESK_REQ = 13002;                             // 查询房间信息
CMD.CMD_PLOFIVE_QUERY_PLAYER_DESK = 13003;                          // 客户端从后台切换前台重新进桌
CMD.CMD_PLOFIVE_GAME_EXIT_DESK = 13004;                             // 用户主动发起进桌
CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO5_REQ = 25304;                    // 大厅牌局退桌时 玩家剩余筹码
CMD.CMD_PLOFIVE_GAME_USER_GIVE_UP = 13005;                          // 用户进桌
CMD.CMD_PLOFIVE_GAME_FOLLOW_BET = 13006;                            // 用户跟住
CMD.CMD_PLOFIVE_GAME_USER_STAND_UP = 13007;                         // 用户站起
CMD.CMD_PLOFIVE_GAME_USER_SIT_DOWN = 13008;                         // 用户坐下
CMD.CMD_PLOFIVE_GAME_EXCHANGE_CHIPS_CONFIG = 13009;                 // 用户请求兑换筹码
CMD.CMD_PLOFIVE_SHOW_CARDS_REQ = 13010;                             // 玩家亮牌
CMD.CMD_PLOFIVE_USER_DISBAND_DESK_REQ = 13011;                      // 解散桌子
CMD.CMD_PLOFIVE_INTERACT_PHIZ = 13012;                              // 互动表情
CMD.CMD_PLOFIVE_GAME_DESK_CHAT = 13013;                             // 桌子内聊天
CMD.CMD_PLOFIVE_CLIENT_NTF_START_GAME = 13015;                      // 客户端通知服务器立即开始游戏
CMD.CMD_PLOFIVE_USE_CALL_TIME_REQ = 13016;                          // 玩家请求使用call time
CMD.CMD_PLOFIVE_SETTING_DESK_REQ = 13019;                           // 房间设置
CMD.CMD_PLOFIVE_SUPPLEMENT_CHIPS_INFO_REQ = 13020;                  // 计分牌补充
CMD.CMD_PLOFIVE_OCCUPY_SEAT_REQ = 13021;                            // 占位请求
CMD.CMD_PLOFIVE_SHOW_REST_SHARE_CARDS_REQ = 13022;                  // 查看剩余公共牌
CMD.CMD_PLO_FIVE_FORCE_SHOW_PLAYER_CARDS = 13050                    // 查看玩家手牌
CMD.CMD_PLOFIVE_STAT_POP_CONFIRM_FOLD_REQ = 13023;                  // 统计弃牌时弹出二次确认框
CMD.CMD_PLOFIVE_HANDS_CARD_COLLECT_REQ = 13024;                     // 手牌收藏
CMD.CMD_PLOFIVE_USER_START_GAME = 13025;                            // 用户开始游戏
CMD.CMD_PLOFIVE_USERS_PERMS_LIST_REQ = 13026;                       // 获取用户权限信息列表
CMD.CMD_PLOFIVE_EDIT_USER_PERMS_REQ = 13027;                        // 更新用户权限信息
CMD.CMD_PLOFIVE_USER_PERMS_REQ = 13028;                             // 获取用户权限信息
CMD.CMD_PLOFIVE_NOVICE_JOIN_TYPE_REQ = 13029;                       // 设置新手入局方式
CMD.CMD_PLOFIVE_SET_SHORTCUT_ACTION_REQ = 13030;                    // 设置快捷方式
CMD.CMD_PLOFIVE_PERIOD_STAT_REQ = 13031;                            // 请求实时战绩
CMD.CMD_PLOFIVE_QUERY_LAST_RECORD_DETAIL = 13032;                   // 牌局详情
CMD.CMD_PLOFIVE_QUERY_EXCHANGE_CHIPS = 13033;                       // 玩家检查是否能坐下  查询记分牌
// plo5风险控制
CMD.CMD_PLOFIVE_BUY_INSURANCE_REQ = 13034;                          // 风险控制请求
CMD.CMD_PLOFIVE_USER_INSURANCE_TYPE_REQ = 13035;                    // 买保险玩家通知当前正在买哪种类型的保险
CMD.CMD_PLOFIVE_USER_INSURANCE_MAIN_REQ = 13038;                    // 领先玩家重新进入到保险的主控界面
CMD.CMD_PLOFIVE_USER_AGREED_DIVIDE_REQ = 13040;                     // 落后玩家是否同意保险

CMD.PLOFIVE_RISK_BUY_REQ = 13045;                                   // 风险控制请求
CMD.PLOFIVE_RISK_MULTICARDS_BUY_REQ = 9103;                         // old:324 多次牌风险控制请求 PLOFIVE
CMD.CMD_PLOFIVE_USER_AUTO_BUY_IN_CFG = 13046;                       // 自动买入

CMD.BROADCAST_POPUP_NOTIFY = 512;                                   // 通用广播弹窗
CMD.CMD_CHECK_VERIFICATION_CODE_PLO5 = 15024;                       // 密码桌校验密码
CMD.CMD_PLO_FIVE_VPIP_LIMIT_CHECK_AUTH = 26003;                     // plo5坐下的时候检测vpip
CMD.CMD_PLO_FIVE_MESSAGE_BLOCK_SET = 15084;                         // 消息屏蔽请求
CMD.CMD_PLOFIVE_QUERY_BUY_IN_STATUS_TOKEN = 25105;
CMD.CMD_PLOFIVE_CANCEL_BUY_IN_TOKEN = 25100;
// ------------------------------------------plo5 end------------------------------------------------------


// ------------------------------------------mixed start--------------------------------------------
CMD.CMD_MIXED_USER_ENTER_DESK = 200046;                             // 用户进桌请求
CMD.CMD_MIXED_QUERY_DESK_REQ = 200021;                              // 查询房间信息
CMD.CMD_MIXED_QUERY_PLAYER_DESK = 200035;                           // 客户端从后台切换前台重新进桌
CMD.CMD_MIXED_GAME_EXIT_DESK = 200034;                              // 用户主动发起进桌

CMD.CMD_MIXED_GAME_FOLLOW_BET = 200001;                             // 用户跟住
CMD.CMD_MIXED_GAME_USER_GIVE_UP = 200002;                           // 用户弃牌
CMD.CMD_MIXED_GAME_USER_STAND_UP = 200007;                          // 用户站起
CMD.CMD_MIXED_GAME_USER_SIT_DOWN = 200010;                          // 用户坐下
CMD.CMD_MIXED_QUERY_EXCHANGE_CHIPS = 200011;                        // 玩家检查是否能坐下  查询记分牌
CMD.CMD_MIXED_GAME_EXCHANGE_CHIPS_CONFIG = 200008;                  // 用户请求兑换筹码

CMD.CMD_MIXED_SHOW_CARDS_REQ = 200036;                              // 玩家亮牌
CMD.CMD_MIXED_USER_DISBAND_DESK_REQ = 200012;                       // 解散桌子
CMD.CMD_MIXED_INTERACT_PHIZ = 200013;                               // 互动表情
CMD.CMD_MIXED_GAME_DESK_CHAT = 200009;                              // 桌子内聊天
CMD.CMD_MIXED_CLIENT_NTF_START_GAME = 200014;                       // 客户端通知服务器立即开始游戏
CMD.CMD_MIXED_USE_CALL_TIME_REQ = 200015;                           // 玩家请求使用call time
CMD.CMD_MIXED_SETTING_DESK_REQ = 200022;                            // 房间设置
CMD.CMD_MIXED_SUPPLEMENT_CHIPS_INFO_REQ = 200023;                   // 计分牌补充
CMD.CMD_MIXED_OCCUPY_SEAT_REQ = 200033;                             // 占位请求
CMD.CMD_MIXED_SHOW_REST_SHARE_CARDS_REQ = 200024;                   // 查看剩余公共牌
CMD.CMD_MIXED_STAT_POP_CONFIRM_FOLD_REQ = 200025;                   // 统计弃牌时弹出二次确认框
CMD.CMD_MIXED_HANDS_CARD_COLLECT_REQ = 200026;                      // 手牌收藏
CMD.CMD_MIXED_USER_START_GAME = 200027;                             // 用户开始游戏
CMD.CMD_MIXED_USERS_PERMS_LIST_REQ = 200030;                        // 获取用户权限信息列表
CMD.CMD_MIXED_EDIT_USER_PERMS_REQ = 200031;                         // 更新用户权限信息
CMD.CMD_MIXED_USER_PERMS_REQ = 200032;                              // 获取用户权限信息
CMD.CMD_MIXED_NOVICE_JOIN_TYPE_REQ = 200028;                        // 设置新手入局方式
CMD.CMD_MIXED_SET_SHORTCUT_ACTION_REQ = 200029;                     // 设置快捷方式

CMD.CMD_MIXED_PERIOD_STAT_REQ = 200047;                             // 请求实时战绩
CMD.CMD_MIXED_QUERY_LAST_RECORD_DETAIL = 200048;                    // 牌局回顾记录

CMD.CMD_MIXED_USER_AUTO_BUY_IN_CFG = 200038;                         // 自动买入

// mixed风险控制
CMD.CMD_MIXED_BUY_INSURANCE_REQ = 200004;                           // 风险控制请求
CMD.CMD_MIXED_USER_INSURANCE_TYPE_REQ = 200017;                     // 领先玩家通知当前正在买哪种类型的保险
CMD.CMD_MIXED_USER_INSURANCE_MAIN_REQ = 200020;                     // 领先玩家重新进入到保险的主控界面
CMD.CMD_MIXED_USER_AGREED_DIVIDE_REQ = 200016;                      // 落后玩家是否同意保险
CMD.MIXED_RISK_BUY_REQ = 200004;                                    // 风险控制请求


CMD.CMD_MIXED_EXCHANGE_CARD_REQ = 200005;                           // 用户换牌请求
CMD.CMD_MIXED_PROCESS_SHOW_CARD_REQ = 200006;                       // 换1张牌时，用户接收还是拒绝 这张牌


CMD.MIXED_GUEST_INPUT = 200049;
CMD.MIXED_GUEST_EXIT = 200050;

CMD.CMD_MIXIN_SET_DEALER_GAME_TYPE = 201002;                        // 设置庄家玩法


CMD.CMD_MIXIN_ENQUEUE_WAITING_LIST = 201101;                        // 玩家排队
CMD.CMD_MIXIN_REJECT_WAITING_SEAT = 201102;                         // 拒绝坐下排队的座位
CMD.CMD_MIXIN_DEQUEUE_WAITING_LIST = 201103;                        // 从排队列表出队

CMD.CMD_CHECK_VERIFICATION_CODE_MIXIN = 201205;                     // 检查密码

CMD.CMD_MIXIN_MESSAGE_BLOCK_SET = 201302;
// ------------------------------------------mixed end------------------------------------------------------


// ------------------------------------------MTT_PLO5 start--------------------------------------------


CMD.CMD_EVT_MTTPLOFIVE_WILL_RAISE_BLIND = 306001;                   // 升盲通知


CMD.CMD_EVT_MTTPLOFIVE_AUTO_PLAY = 306005;                          // 进入托管状态通知
CMD.CMD_EVT_MTTPLOFIVE_CANCEL_AUTO_PLAY = 308002;                   // 取消托管状态通知


CMD.CMD_EVT_MTTPLOFIVE_FINAL_RESULT_NTF = 306019;                   // 最终排名通知，玩家的名次最终被确认下来后通知用户（玩家被淘汰后或者决赛桌结束）

CMD.CMD_MTTPLOFIVE_ENTER_GROUND_NTF = 306020;                       // 进场通知
CMD.CMD_MTTPLOFIVE_EVENT_EXPIRED_NTF = 306028;                      // 超时没进入比赛,被退赛了
CMD.CMD_MTTPLOFIVE_USER_OP_NTF = 306031;                            // 淘汰,加入,并桌,退赛 提示
CMD.CMD_MTTPLOFIVE_IN_THE_MONEY_EVT = 306034;                       // 通知玩家进入了钱圈

CMD.CMD_MTTPLOFIVE_EVENT_STATUS_NTF = 306010;                       // 赛事状态变更


// 并桌通知, 并桌后通知并桌成功的玩家
CMD.CMD_MTTPLOFIVE_EVENT_MERGE_TO_MERGE_USER = 306008;

// 排名变更通知广播
CMD.CMD_MTTPLOFIVE_EVENT_RANK_CHANGED_NTF = 306009;

// MTT中场休息
CMD.CMD_MTTPLOFIVE_MIDDLE_REST_NTF = 306067;
// MTTD中场休息涨盲倒计时停止单独通知
CMD.CMD_MTTPLOFIVE_STOP_BLIND_TIME_NTF = 306069;

// 用户不可重购增购的通知
CMD.CMD_MTTPLOFIVE_LOSE_REBUY_ADDON_NOTIFY = 306068;


// cmd: 6071, 赛事开始,通知桌子号码
CMD.CMD_MTTPLOFIVE_GAME_DESK_NUM_NOTIFY = 306071;

// cmd: 6072, 重购增购剩余次数的通知
CMD.CMD_MTTPLOFIVE_REBUY_ADDON_REMAIN_NTF = 306072;


CMD.CMD_MTTPLOFIVE_REFRESH_ADDON_NTF = 306092;                      // 刷新addon弹窗阶段显示的信息

// ---------------已经确认有修改的部分----------------------------------

// MTT单独的进桌协议
CMD.CMD_MTTPLOFIVE_ENTER_DESK_REQ = 306011;

CMD.CMD_MTTPLOFIVE_CONTEST_INFO_REQ = 306002;                       // MTT赛况(赛事信息)

CMD.CMD_MTTPLOFIVE_EXIT_DESK_REQ = 306012;                          // 离开牌桌/弃赛
CMD.CMD_MTTPLOFIVE_QUERY_PLAYER_DESK_REQ = 306013;                  // 查询牌桌

CMD.CMD_MTTPLOFIVE_START_AUTO_PLAY_REQ = 308001;                    // 进入托管状态
CMD.CMD_MTTPLOFIVE_CANCEL_AUTO_PLAY_REQ = 306004;                   // 退出托管状态

CMD.CMD_MTTPLOFIVE_USER_GIVE_UP_REQ = 306014;                       // 用户弃牌
CMD.CMD_MTTPLOFIVE_FOLLOW_BET_REQ = 306015;                         // 跟注

CMD.CMD_MTTPLOFIVE_SHOW_CARDS_REQ = 306016;                         // 亮牌请求
CMD.CMD_MTTPLOFIVE_CLIENT_START_GAME_REQ = 306018;                  // 通知结算动画播放完毕, 可立即开始游戏

CMD.CMD_MTTPLOFIVE_RESULT_REQ = 306074;                             // mtt赛事结算请求  用于错过结算的再接受

CMD.CMD_MTTPLOFIVE_CANCEL_REBUY_REQ = 306025;                       // 取消重购请求

CMD.CMD_MTTPLOFIVE_REBUY_REQ = 306006;                              // 重构请求
CMD.CMD_MTTPLOFIVE_ADDON_REQ = 306007;                              // 增购请求
CMD.CMD_MTTPLOFIVE_REBUY_OR_ADDON_TOKEN_REQ = 306097;                                       //代币 增购重构请求

// 请求使用call time
CMD.CMD_MTTPLOFIVE_USE_CALL_TIME_REQ = 306066;

// MTT弃牌弹出二次确认框统计
CMD.CMD_MTTPLOFIVE_STAT_POP_CONFIRM_FOLD_REQ = 310364;

// MTT收藏手牌请球
CMD.CMD_MTTPLOFIVE_HANDS_CARD_COLLECT_REQ = 310365;

CMD.CMD_MTTPLOFIVE_SET_SHORTCUT_REQ = 306078;                       // MTT设置快捷操作类型

CMD.CMD_MTTPLOFIVE_OPENREST_SHARECARDS_REQ = 306086;

CMD.CMD_MTTPLOFIVE_QUERY_ADDON_INFO = 306093;                       // 查询addon弹窗阶段显示的信息

CMD.CMD_MTTPLOFIVE_MESSAGE_BLOCK_SET = 324010;
// ------------------------------------------MTT_PLO5 相关 END--------------------------------------------


// ------------------------------------------其他 start------------------------------------------------------
CMD.CMD_MULTI_CARD_EVT = 1770;                                      // 牌局留座离桌暂停
CMD.CMD_BUY_IN_CHIP_NTF = 10029;                                    // 买入筹码结果通知
CMD.CMD_BUY_IN_TOKEN_NTF = 25097;


// ------- 服务器 推送跳转赛事通知
CMD.SERVER_PUSH_GO_TO_EVENT_EVT = 150;
CMD.SERVER_PUSH_JOINED_EVENT_NTF = 511;

// 应用逻辑协议 start
CMD.CONNECT = 1;
CMD.LOADICON_EVT = 4;                                               // 更新用户头像通知
CMD.HEARTBEAT = 7;
CMD.KEEPUPDATE_EVT = 8;                                             // 刷新 客户端显示的在线人数
CMD.CHANGEGOLD_EVT = 9;
CMD.RECEIVE_GIFT_EVT = 10;
CMD.LOGOUT = 11;                                                    // 注销
CMD.CMD_PYQ_USER_REG = 19;                                          // 牌友圈用户注册

// 牌桌内聊天 start
CMD.CHAT = 145;
CMD.CHAT_NOTICE_EVT = 146;
CMD.CMD_OMAHA_GAME_DESK_CHAT = 6813;                                // 桌子内聊天
CMD.CMD_DRAWMAHA_GAME_DESK_CHAT = 11013;                            // 桌子内聊天
CMD.CMD_AC_GAME_DESK_CHAT = 12013;                                  // 桌子内聊天

// 牌桌内聊天 end


CMD.BROADCAST_OTHER_EVT = 148;                                      // 跑马灯（广播）
CMD.USER_INFO = 160;

CMD.USER_PROP_CHANGE = 180;

CMD.UPDATA_GOLD_EVT = 190;
CMD.EVENT_USER_CHIPS_CHANGE = 191;                                  // 用户筹码变化

CMD.SERVER_PUSH_TOAST_EVT = 40;                                     // 服务器推送Toast消息

// 互动表情 start
CMD.CMD_INTERACT_PHIZ = 310;                                        // 互动表情
CMD.CMD_INTERACT_PHIZ_NTF = 311;                                    // 互动表情
CMD.CMD_AC_SEND_INTERACTIVE_EXPRESSION_REQ = 12012;                 // 发送互动表情

// 互动表情 end

CMD.SHARE_DESK_REQ = 1769;                                          // 分享内容和地址

CMD.CMD_ADDICT_GAME_TIPS_NOTIFY = 1768;	                            // 防沉迷通知


// -------------------好友新功能end --------------------------
CMD.CMD_EVENT_USER_LOGIN_ELSEWHERE = 10200;                         // 在其他设备上登录，确认登录

// ------------------------------------------其他 end------------------------------------------------------

// ------------------------------------------游客登录进桌退桌 start------------------------------------------------------
CMD.GUEST_LOGIN = 15000;                                           // 游客登录

CMD.GUEST_INPUT = 15001;                                           // 游客进桌
CMD.GUEST_EXIT = 15002;                                             // 游客退桌请求
CMD.OMAHA_GUEST_INPUT = 15003;
CMD.OMAHA_GUEST_EXIT = 15004;
CMD.DRAWMAHA_GUEST_INPUT = 15005;
CMD.DRAWMAHA_GUEST_EXIT = 15006;
CMD.PINEAPPLE_GUEST_INPUT = 15007;
CMD.PINEAPPLE_GUEST_EXIT = 15008;
CMD.PLO5_GUEST_INPUT = 15009;
CMD.PLO5_GUEST_EXIT = 15010;
CMD.MTT_GUEST_INPUT = 15011;
CMD.MTT_GUEST_EXIT = 15012;
CMD.MTTOMAHA_GUEST_INPUT = 115011;
CMD.MTTOMAHA_GUEST_EXIT = 115012;
CMD.MTTPLOFIVE_GUEST_INPUT = 315011;
CMD.MTTPLOFIVE_GUEST_EXIT = 315012;

// ------------------------------------------游客登录进桌退桌 end------------------------------------------------------


// ------------多桌----------------------------------------------------
CMD.CMD_QUERY_USER_DESKS = 704;                                    // (703被占用)获取用户在玩(旁观)牌桌列表
CMD.QUERY_DESK_LIST = 25000;


CMD.QUERY_LUCKY_DRAW_LIST = 800;                                    // 获取定时抽奖奖励列表
CMD.QUERY_WIN_LUCKY_DRAW_DETAIL = 801;                              // 获取定时抽奖奖励详情
CMD.WIN_LUCKY_DRAW_NOTIFY = 802;                                    // 通知桌上玩家中奖

// ---------------------------------------玩家排队begin--------------------------------------------
CMD.ENQUEUE_WAITING_LIST = 1780;                                    // 玩家排队
CMD.REJECT_WAITING_SIT_DOWN = 1781;                                 // 拒绝坐下排队的座位
CMD.DEQUEUE_WAITING_LIST = 1782;                                    // 从排队列表出队
CMD.BROADCAST_ACTIVE_WAITING_USERS = 25080;

CMD.PLO_FIVE_ENQUEUE_WAITING_LIST = 15080;                          // 玩家排队
CMD.PLO_FIVE_REJECT_WAITING_SEAT = 15081;                           // 拒绝坐下排队的座位
CMD.PLO_FIVE_DEQUEUE_WAITING_LIST = 15082;                          // 从排队列表出队

CMD.PINEAPPLE_ENQUEUE_WAITING_LIST = 12080;                         // 玩家排队
CMD.PINEAPPLE_REJECT_WAITING_SEAT = 12081;                          // 拒绝坐下排队的座位
CMD.PINEAPPLE_DEQUEUE_WAITING_LIST = 12082;                         // 从排队列表出队

CMD.DRAWMAHA_ENQUEUE_WAITING_LIST = 11080;                          // 玩家排队
CMD.DRAWMAHA_REJECT_WAITING_SEAT = 11081;                           // 拒绝坐下排队的座位
CMD.DRAWMAHA_DEQUEUE_WAITING_LIST = 11082;                          // 从排队列表出队

CMD.OMAHA_ENQUEUE_WAITING_LIST = 6880;                              // 玩家排队
CMD.OMAHA_REJECT_WAITING_SEAT = 6881;                               // 拒绝坐下排队的座位
CMD.OMAHA_DEQUEUE_WAITING_LIST = 6882;                              // 从排队列表出队
// ---------------------------------------玩家排队end--------------------------------------------

CMD.DISCONNECT_PROTECTION_QUERY_REQ = 15101;                        // 操作超时 掉线查询玩家是否在线 请求
CMD.DISCONNECT_PROTECTION_QUERY_RSP = 15102;                        // 操作超时 掉线查询玩家是否在线 回复
CMD.USR_IN_DISCONNECT_PROTECTION_NTF = 15103;                       // 用户正在进行掉线保护 通知

// 密码桌查询
CMD.CHECK_QUERY_VERIFY_INFO_TEXAS = 15025;
CMD.CHECK_QUERY_VERIFY_INFO_OMAHA = 15026;
CMD.CHECK_QUERY_VERIFY_INFO_DRAWMAHA = 15027;
CMD.CHECK_QUERY_VERIFY_INFO_OFC = 15028;
CMD.CHECK_QUERY_VERIFY_INFO_PLO5 = 15029;
CMD.CHECK_QUERY_VERIFY_INFO_MIXIN = 15030;


// -------------------------------------------------aof begin---------------

CMD.CMD_AOF_USER_ENTER_DESK = 300001;                               // 用户进桌请求
CMD.CMD_AOF_QUERY_DESK_REQ = 300002;                                // 查询桌子信息
CMD.CMD_AOF_QUERY_PLAYER_DESK = 300003;                             // 客户端从后台切换前台重新进桌
CMD.CMD_AOF_GAME_EXIT_DESK = 300004;                                // 用户主动离开牌桌
CMD.CMD_AOF_GAME_USER_GIVE_UP = 300005;                             // 弃牌
CMD.CMD_AOF_GAME_FOLLOW_BET = 300006;                               // 跟住
CMD.CMD_AOF_GAME_USER_STAND_UP = 300007;                            // 站起
CMD.CMD_AOF_GAME_USER_SIT_DOWN = 300008;                            // 坐下
CMD.CMD_AOF_GAME_EXCHANGE_CHIPS_CONFIG = 300009;                    // 用户请求兑换筹码
CMD.CMD_AOF_SHOW_CARDS_REQ = 300010;                                // 玩家亮牌
CMD.CMD_AOF_USER_DISBAND_DESK_REQ = 300011;                         // 解散桌子
CMD.CMD_AOF_SEND_INTERACTIVE_EXPRESSION_REQ = 300012;               // 发送互动表情
CMD.CMD_AOF_GAME_DESK_CHAT = 300013;                                // 桌子内聊天
CMD.CMD_AOF_RELATIVE_OPENID_LIST_REQ = 300014;                      // 告诉服务器相关的人的openid
CMD.CMD_AOF_CLIENT_NTF_START_GAME = 300015;                         // 客户端通知服务器立即开始游戏
CMD.CMD_AOF_USE_CALL_TIME_REQ = 300016;                             // 玩家请求使用call time         废弃使用
CMD.CMD_AOF_SETTING_DESK_REQ = 300017;                              // 房间设置
CMD.CMD_AOF_SUPPLEMENT_CHIPS_INFO_REQ = 300018;                     // 计分牌补充
CMD.CMD_AOF_OCCUPY_SEAT_REQ = 300019;                               // 占位请求
CMD.CMD_AOF_SHOW_REST_SHARE_CARDS_REQ = 300020;                     // 查看剩余公共牌
CMD.CMD_AOF_STAT_POP_CONFIRM_FOLD_REQ = 300021;                     // 统计弃牌时弹出二次确认框
CMD.CMD_AOF_HANDS_CARD_COLLECT_REQ = 300022;                        // 手牌收藏
CMD.CMD_AOF_USER_START_GAME = 300023;                               // 用户开始游戏
CMD.CMD_AOF_USERS_PERMS_LIST_REQ = 300024;                          // 获取用户权限信息列表
CMD.CMD_AOF_EDIT_USER_PERMS_REQ = 300025;                           // 更新用户权限信息
CMD.CMD_AOF_USER_PERMS_REQ = 300026;                                // 获取用户权限信息
CMD.CMD_AOF_NOVICE_JOIN_TYPE_REQ = 300027;                          // 设置新手入局方式
CMD.CMD_AOF_SET_SHORTCUT_ACTION_REQ = 300028;                       // 设置快捷方式
CMD.CMD_AOF_PERIOD_STAT_REQ = 300029;                               // 请求实时战绩
CMD.CMD_AOF_QUERY_LAST_RECORD_DETAIL = 300030;                      // 牌局详情
CMD.CMD_AOF_QUERY_EXCHANGE_CHIPS = 300031;                          // 查询坐下将要兑换的筹码

// --- gust begin ---
CMD.CMD_GUEST_ENTER_DESK_AOF = 300032;                              // 游客进桌
CMD.CMD_GUEST_EXIT_DESK_AOF = 300033;                               // 游客退桌
// --- gust end ---

CMD.CMD_REDIRECT_AOF_ENTER_DESK = 300034;                           // 重定向进桌
CMD.CMD_REDIRECT_AOF_SHORTCUT_TIMEOUT = 300035;                     // 设置快捷方式
CMD.CMD_REDIRECT_AOF_MSG_BY_DESK_ID = 300036;                       // 重定向分发消息
CMD.CMD_DISPATCH_AOF_MSG_BY_DESK_ID = 300037;                       // 根据桌子id分发消息

CMD.CMD_HW_INSURANCE_AOF_REQ = 300038;                              // AOF买保险请求           # 废弃使用

CMD.CMD_AOF_USER_AUTO_BUY_IN_CFG = 300039;                          // 玩家自动买入设置           废弃使用
CMD.CMD_AOF_CLONE_TABLE = 300040;                                   // 克隆牌桌
CMD.CMD_AOF_GM_DISBAND_DESK = 300041;                               // 管理员解散牌桌

CMD.CMD_AOF_ENQUEUE_WAITING_LIST = 300042;                          // 玩家排队
CMD.CMD_AOF_REJECT_WAITING_SEAT = 300043;                           // 拒绝坐下排队的座位
CMD.CMD_AOF_DEQUEUE_WAITING_LIST = 300044;                          // 从排队列表出队
CMD.CMD_AOF_INNER_REJECT_WAITING_SEAT = 300045;                     // 玩家排队等待入座
CMD.CMD_AOF_MESSAGE_BLOCK_SET = 300046;                             // 消息屏蔽请求

CMD.CMD_DISCONNECT_PROTECTION_RSP_REDIRECT_TO_AOF = 300047;         // 用户在线请求回复
CMD.CMD_CHECK_VERIFICATION_CODE_AOF = 300048;                       // 检测密码桌密码
CMD.CMD_CHECK_QUERY_VERIFY_INFO_AOF = 300049;                       // 检测密码桌密码

CMD.CMD_AOF_USER_INSURANCE_MAIN_REQ = 300050;                       // 领先玩家重新进入到保险的主控界面
CMD.CMD_AOF_USER_INSURANCE_TYPE_REQ = 300054;                       // 领先玩家通知当前正在买哪种类型的保险
CMD.CMD_AOF_USER_AGREED_DIVIDE_REQ = 300055;                        // 落后玩家是否同意保险
CMD.AOF_RISK_BUY_REQ = 300056;                                      // 风险控制请求


CMD.SET_AUTO_RECYCLE_CHIPS_REQ = 300057;                            // 玩家回收筹码设置
CMD.AUTO_RECYCLE_CHIPS_EVT = 300058;                                // 玩家回收筹码后广播事件
CMD.CMD_AOF_VPIP_LIMIT_CHECK_AUTH = 26005;                          // aof坐下的时候检测vpip

// -------------------------------------------------aof end---------------


// -------------------------------------------------ZOOM begin---------------

CMD.CMD_ZOOM_USER_ENTER_DESK = 400001;                              // 用户进桌请求
CMD.CMD_ZOOM_QUERY_DESK_REQ = 400002;                               // 查询桌子信息
CMD.CMD_ZOOM_QUERY_PLAYER_DESK = 400003;                            // 客户端从后台切换前台重新进桌
CMD.CMD_ZOOM_GAME_EXIT_DESK = 400004;                               // 用户主动离开牌桌
CMD.CMD_ZOOM_GAME_USER_GIVE_UP = 400005;                            // 弃牌
CMD.CMD_ZOOM_GAME_FOLLOW_BET = 400006;                              // 跟住
CMD.CMD_ZOOM_GAME_USER_STAND_UP = 400007;                           // 站起
CMD.CMD_ZOOM_GAME_USER_SIT_DOWN = 400008;                           // 坐下
CMD.CMD_ZOOM_GAME_EXCHANGE_CHIPS_CONFIG = 400009;                   // 用户请求兑换筹码
CMD.CMD_ZOOM_SHOW_CARDS_REQ = 400010;                               // 玩家亮牌
CMD.CMD_ZOOM_USER_DISBAND_DESK_REQ = 400011;                        // 解散桌子
CMD.CMD_ZOOM_SEND_INTERACTIVE_EXPRESSION_REQ = 400012;              // 发送互动表情
CMD.CMD_ZOOM_GAME_DESK_CHAT = 400013;                               // 桌子内聊天
CMD.CMD_ZOOM_RELATIVE_OPENID_LIST_REQ = 400014;                     // 告诉服务器相关的人的openid
CMD.CMD_ZOOM_CLIENT_NTF_START_GAME = 400015;                        // 客户端通知服务器立即开始游戏
CMD.CMD_ZOOM_USE_CALL_TIME_REQ = 400016;                            // 玩家请求使用call time         废弃使用
CMD.CMD_ZOOM_SETTING_DESK_REQ = 400017;                             // 房间设置
CMD.CMD_ZOOM_SUPPLEMENT_CHIPS_INFO_REQ = 400018;                    // 计分牌补充
CMD.CMD_ZOOM_OCCUPY_SEAT_REQ = 400019;                              // 占位请求
CMD.CMD_ZOOM_SHOW_REST_SHARE_CARDS_REQ = 400020;                    // 查看剩余公共牌
CMD.CMD_ZOOM_STAT_POP_CONFIRM_FOLD_REQ = 400021;                    // 统计弃牌时弹出二次确认框
CMD.CMD_ZOOM_HANDS_CARD_COLLECT_REQ = 400022;                       // 手牌收藏
CMD.CMD_ZOOM_USER_START_GAME = 400023;                              // 用户开始游戏
CMD.CMD_ZOOM_USERS_PERMS_LIST_REQ = 400024;                         // 获取用户权限信息列表
CMD.CMD_ZOOM_EDIT_USER_PERMS_REQ = 400025;                          // 更新用户权限信息
CMD.CMD_ZOOM_USER_PERMS_REQ = 400026;                               // 获取用户权限信息
CMD.CMD_ZOOM_NOVICE_JOIN_TYPE_REQ = 400027;                         // 设置新手入局方式
CMD.CMD_ZOOM_SET_SHORTCUT_ACTION_REQ = 400028;                      // 设置快捷方式
CMD.CMD_ZOOM_PERIOD_STAT_REQ = 400029;                              // 请求实时战绩
CMD.CMD_ZOOM_QUERY_LAST_RECORD_DETAIL = 400030;                     // 牌局详情
CMD.CMD_ZOOM_QUERY_EXCHANGE_CHIPS = 400031;                         // 查询坐下将要兑换的筹码

// --- gust begin ---
CMD.CMD_GUEST_ENTER_DESK_ZOOM = 400032;                             // 游客进桌
CMD.CMD_GUEST_EXIT_DESK_ZOOM = 400033;                              // 游客退桌
// --- gust end ---

CMD.CMD_REDIRECT_ZOOM_ENTER_DESK = 400034;                          // 重定向进桌
CMD.CMD_REDIRECT_ZOOM_SHORTCUT_TIMEOUT = 400035;                    // 设置快捷方式
CMD.CMD_REDIRECT_ZOOM_MSG_BY_DESK_ID = 400036;                      // 重定向分发消息
CMD.CMD_DISPATCH_ZOOM_MSG_BY_DESK_ID = 400037;                      // 根据桌子id分发消息

CMD.CMD_HW_INSURANCE_ZOOM_REQ = 400038;                             // AOF买保险请求           # 废弃使用

CMD.CMD_ZOOM_USER_AUTO_BUY_IN_CFG = 400039;                         // 玩家自动买入设置           废弃使用
CMD.CMD_ZOOM_CLONE_TABLE = 400040;                                  // 克隆牌桌
CMD.CMD_ZOOM_GM_DISBAND_DESK = 400041;                              // 管理员解散牌桌

CMD.CMD_ZOOM_ENQUEUE_WAITING_LIST = 400042;                         // 玩家排队
CMD.CMD_ZOOM_REJECT_WAITING_SEAT = 400043;                          // 拒绝坐下排队的座位
CMD.CMD_ZOOM_DEQUEUE_WAITING_LIST = 400044;                         // 从排队列表出队
CMD.CMD_ZOOM_INNER_REJECT_WAITING_SEAT = 400045;                    // 玩家排队等待入座
CMD.CMD_ZOOM_MESSAGE_BLOCK_SET = 400046;                            // 消息屏蔽请求

CMD.CMD_DISCONNECT_PROTECTION_RSP_REDIRECT_TO_ZOOM = 400047;        // 用户在线请求回复
CMD.CMD_CHECK_VERIFICATION_CODE_ZOOM = 400048;                      // 检测密码桌密码
CMD.CMD_CHECK_QUERY_VERIFY_INFO_ZOOM = 400049;                      // 检测密码桌密码

CMD.CMD_ZOOM_USER_INSURANCE_MAIN_REQ = 400050;                      // 领先玩家重新进入到保险的主控界面
CMD.CMD_ZOOM_USER_INSURANCE_TYPE_REQ = 400054;                      // 领先玩家通知当前正在买哪种类型的保险
CMD.CMD_ZOOM_USER_AGREED_DIVIDE_REQ = 400055;                       // 落后玩家是否同意保险
CMD.ZOOM_RISK_BUY_REQ = 400056;                                    // 风险控制请求

CMD.CMD_ZOOM_VPIP_LIMIT_CHECK_AUTH = 26005;                         // aof坐下的时候检测vpip

CMD.CMD_ZOOM_PLAYER_NUMBER = 400059;                                // zoom当前人数和状态
CMD.CMD_ZOOM_GAME_USER_MATCHING = 400061;                           // 玩家匹配通知

CMD.ZOOM_EXIT_RESPONSE_EVT = 400065;                                // 退出
CMD.CMD_ZOOM_USER_CANCEL_BUYIN = 400066;                            // 取消买入
CMD.CMD_ZOOM_MY_HANDS_COUNT_REQ = 400067;                           // 总手数请求
CMD.CMD_ZOOM_GAME_COME_BACK_REQ = 400068;
// -------------------------------------------------ZOOM end---------------


// ---------------------------------------废弃 start--------------------------------------------
CMD.CMD_HW_PLAYER_RESULT = 7000;                                    // 退桌结算
// ---------------------------------------废弃 end--------------------------------------------


//---------------------------------------plo6 start------------------------------------------------------

CMD.CMD_PLOSIX_USER_ENTER_DESK = 450001; // 用户进桌请求
CMD.CMD_PLOSIX_QUERY_DESK_REQ = 450002; // 查询房间信息
CMD.CMD_PLOSIX_QUERY_PLAYER_DESK = 450003; // 客户端从后台切换前台重新进桌
CMD.CMD_PLOSIX_GAME_EXIT_DESK = 450004; // 用户主动发起进桌
CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO6_REQ = 25305;                    // 大厅牌局退桌时 玩家剩余筹码
CMD.CMD_PLOSIX_GAME_USER_GIVE_UP = 450005; // 用户进桌
CMD.CMD_PLOSIX_GAME_FOLLOW_BET = 450006; // 用户跟住
CMD.CMD_PLOSIX_GAME_USER_STAND_UP = 450007; // 用户站起
CMD.CMD_PLOSIX_GAME_USER_SIT_DOWN = 450008; // 用户坐下
CMD.CMD_PLOSIX_GAME_EXCHANGE_CHIPS_CONFIG = 450009; // 用户请求兑换筹码
CMD.CMD_PLOSIX_SHOW_CARDS_REQ = 450010; // 玩家亮牌
CMD.CMD_PLOSIX_USER_DISBAND_DESK_REQ = 450011; // 解散桌子
CMD.CMD_PLOSIX_INTERACT_PHIZ = 450012; //互动表情
CMD.CMD_PLOSIX_GAME_DESK_CHAT = 450013; // 桌子内聊天
CMD.CMD_PLOSIX_CLIENT_NTF_START_GAME = 450015; // 客户端通知服务器立即开始游戏
CMD.CMD_PLOSIX_USE_CALL_TIME_REQ = 450016; //玩家请求使用call time
CMD.CMD_PLOSIX_SETTING_DESK_REQ = 450019; //房间设置
CMD.CMD_PLOSIX_SUPPLEMENT_CHIPS_INFO_REQ = 450020; // 计分牌补充
CMD.CMD_PLOSIX_OCCUPY_SEAT_REQ = 450021; //占位请求
CMD.CMD_PLOSIX_SHOW_REST_SHARE_CARDS_REQ = 450022; //查看剩余公共牌
CMD.CMD_PLO_SIX_FORCE_SHOW_PLAYER_CARDS = 450059; //查看玩家手牌
CMD.CMD_PLOSIX_STAT_POP_CONFIRM_FOLD_REQ = 450023;//统计弃牌时弹出二次确认框
CMD.CMD_PLOSIX_HANDS_CARD_COLLECT_REQ = 450024; //手牌收藏
CMD.CMD_PLOSIX_USER_START_GAME = 450025; //用户开始游戏
CMD.CMD_PLOSIX_USERS_PERMS_LIST_REQ = 450026; //获取用户权限信息列表
CMD.CMD_PLOSIX_EDIT_USER_PERMS_REQ = 450027; //更新用户权限信息
CMD.CMD_PLOSIX_USER_PERMS_REQ = 450028; //获取用户权限信息
CMD.CMD_PLOSIX_NOVICE_JOIN_TYPE_REQ = 450029; //设置新手入局方式
CMD.CMD_PLOSIX_SET_SHORTCUT_ACTION_REQ = 450030; //设置快捷方式
CMD.CMD_PLOSIX_PERIOD_STAT_REQ = 450031; //请求实时战绩
CMD.CMD_PLOSIX_QUERY_LAST_RECORD_DETAIL = 450032;  //牌局详情
CMD.CMD_PLOSIX_QUERY_EXCHANGE_CHIPS = 450033;    //玩家检查是否能坐下  查询记分牌

//plo6风险控制
CMD.CMD_PLOSIX_USER_INSURANCE_TYPE_REQ = 450035; //买保险玩家通知当前正在买哪种类型的保险
CMD.CMD_PLOSIX_USER_INSURANCE_MAIN_REQ = 450038;//领先玩家重新进入到保险的主控界面
CMD.CMD_PLOSIX_USER_AGREED_DIVIDE_REQ = 450040; //落后玩家是否同意保险
CMD.CMD_PLOSIX_RISK_BUY_REQ = 450045; //风险控制请求
CMD.CMD_PLOSIX_RISK_MULTICARDS_BUY_REQ = 450061; //多次牌风险控制请求 PLOSIX

CMD.CMD_PLOSIX_USER_AUTO_BUY_IN_CFG = 450046;  //自动买入
CMD.CMD_PLOSIX_CHECK_VERIFICATION_CODE = 450047; //密码桌校验密码
CMD.CMD_PLOSIX_CHECK_QUERY_VERIFY_INFO = 450048;              // # 检测密码桌密码
CMD.CMD_PLOSIX_DISCONNECT_PROTECTION_RSP_REDIRECT = 400049; //# 用户在线请求回复

CMD.CMD_PLOSIX_VPIP_LIMIT_CHECK_AUTH = 26007;   //plo6坐下的时候检测vpip

CMD.CMD_PLOSIX_GUEST_INPUT = 450052;  //游客进桌
CMD.CMD_PLOSIX_GUEST_EXIT = 450053;   //游客退桌
CMD.CMD_PLOSIX_ENQUEUE_WAITING_LIST = 450054;                  //# 玩家排队
CMD.CMD_PLOSIX_REJECT_WAITING_SEAT = 450055;                  // # 拒绝坐下排队的座位
CMD.CMD_PLOSIX_DEQUEUE_WAITING_LIST = 450056;                  //# 从排队列表出队
CMD.CMD_PLOSIX_INNER_REJECT_WAITING_SEAT = 450057;             //# 玩家排队等待入座
CMD.CMD_PLOSIX_MESSAGE_BLOCK_SET = 400058;                   //# 消息屏蔽请求
CMD.CMD_PLOSIX_QUERY_BUY_IN_STATUS_TOKEN = 25106;
CMD.CMD_PLOSIX_CANCEL_BUY_IN_TOKEN = 25101;
//---------------------------------------plo6 end------------------------------------------------------


//----------------------------------------MTT_PLO6 start--------------------------------------------

//MTT单独的进桌协议
CMD.CMD_MTTPLOSIX_ENTER_DESK_REQ = 506011

CMD.CMD_MTTPLOSIX_CONTEST_INFO_REQ = 506002  //MTT赛况(赛事信息)

CMD.CMD_MTTPLOSIX_EXIT_DESK_REQ = 506012                  //离开牌桌/弃赛
CMD.CMD_MTTPLOSIX_QUERY_PLAYER_DESK_REQ = 506013          //查询牌桌

CMD.CMD_MTTPLOSIX_START_AUTO_PLAY_REQ = 508001            //进入托管状态
CMD.CMD_MTTPLOSIX_CANCEL_AUTO_PLAY_REQ = 506004           //退出托管状态

CMD.CMD_MTTPLOSIX_USER_GIVE_UP_REQ = 506014               //用户弃牌
CMD.CMD_MTTPLOSIX_FOLLOW_BET_REQ = 506015                 //跟注

CMD.CMD_MTTPLOSIX_SHOW_CARDS_REQ = 506016                 //亮牌请求
CMD.CMD_MTTPLOSIX_CLIENT_START_GAME_REQ = 506018          //通知结算动画播放完毕, 可立即开始游戏

CMD.CMD_MTTPLOSIX_RESULT_REQ = 506074 //mtt赛事结算请求  用于错过结算的再接受

CMD.CMD_MTTPLOSIX_CANCEL_REBUY_REQ = 506025     //取消重购请求

CMD.CMD_MTTPLOSIX_REBUY_REQ = 506006 //重构请求
CMD.CMD_MTTPLOSIX_ADDON_REQ = 506007 //增购请求
CMD.CMD_MTTPLOSIX_REBUY_OR_ADDON_TOKEN_REQ = 506097;                                       //代币 增购重构请求

//请求使用call time
CMD.CMD_MTTPLOSIX_USE_CALL_TIME_REQ = 506066

//MTT弃牌弹出二次确认框统计
CMD.CMD_MTTPLOSIX_STAT_POP_CONFIRM_FOLD_REQ = 510364

//MTT收藏手牌请球
CMD.CMD_MTTPLOSIX_HANDS_CARD_COLLECT_REQ = 510365

CMD.CMD_MTTPLOSIX_SET_SHORTCUT_REQ = 506078 //MTT设置快捷操作类型

CMD.CMD_MTTPLOSIX_OPENREST_SHARECARDS_REQ = 506086

CMD.CMD_MTTPLOSIX_QUERY_ADDON_INFO = 506093           //查询addon弹窗阶段显示的信息
CMD.CMD_MTTPLOSIX_MESSAGE_BLOCK_SET = 524010

CMD.CMD_MTTPLOSIX_GUEST_INPUT = 515011   //游客进桌
CMD.CMD_MTTPLOSIX_GUEST_EXIT = 515012  //游客退桌

//---------------------------------------MTT_PLO6 相关 END--------------------------------------------


// WEB3新增-------------------------------------------------------------------------------------------begin

CMD.CMD_SHUFFLE_CARD_NTF = 16001;        // 服务器洗牌通知
CMD.CMD_SHUFFLE_CARD_REQ = 16002;        // 客户端洗牌请求
CMD.CMD_ENCRYPT_CARD_NTF = 16003;       // 服务器加密牌通知
CMD.CMD_ENCRYPT_CARD_REQ = 16004;      // 客户端加密牌请求
CMD.CMD_PKE_NTF = 16005;                // 服务器 公开密钥加密 通知
CMD.CMD_PKE_REQ = 16006;                // 客户端 公开密钥加密 请求
CMD.CMD_COLLECT_SECRET_KEY_NTF = 16007               // 服务器 收集密钥 通知
CMD.CMD_COLLECT_SECRET_KEY_REQ = 16008               // 客户端 收集密钥 请求
CMD.CMD_DESK_PAUSE_REQ = 16009                       // 桌子暂停请求
CMD.CMD_DESK_PAUSE_NTF = 16010                       // 桌子暂停通知
CMD.CMD_USER_REPORT_SHARE_CARDS_REQ = 16011          // 玩家上报公共牌请求
CMD.CMD_COLLECT_SECRET_KEY_TIME_NTF = 16012            // 收集密钥超时  通知不用区分游戏类型
CMD.CMD_SHUFFLE_TIMEOUT_NTF = 16013  //洗牌过程超时通知  通知不用区分游戏类型

CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA = 100
CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5 = 200
CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6 = 300

CMD.CMD_OMAHA_SHUFFLE_CARD_NTF = 16001 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA              // # 服务器洗牌通知
CMD.CMD_OMAHA_SHUFFLE_CARD_REQ = 16002 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA              // # 客户端洗牌请求
CMD.CMD_OMAHA_ENCRYPT_CARD_NTF = 16003 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA              // # 服务器加密牌通知
CMD.CMD_OMAHA_ENCRYPT_CARD_REQ = 16004 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA             //  # 客户端加密牌请求
CMD.CMD_OMAHA_PKE_NTF = 16005 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA              // # 服务器 公开密钥加密 通知  UserPubKeyEncryptNtf
CMD.CMD_OMAHA_PKE_REQ = 16006 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA              // # 客户端 公开密钥加密 请求  UserPubKeyEncryptReq
CMD.CMD_OMAHA_COLLECT_SECRET_KEY_NTF = 16007 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA              // # 服务器 收集密钥 通知  CollectDecryptInfoNtf
CMD.CMD_OMAHA_COLLECT_SECRET_KEY_REQ = 16008 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA              // # 客户端 收集密钥 请求  CollectDecryptInfoReq
CMD.CMD_OMAHA_DESK_PAUSE_REQ = 16009 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA                    //  # 桌子暂停请求
CMD.CMD_OMAHA_DESK_PAUSE_NTF = 16010 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA                   //  # 桌子暂停通知
CMD.CMD_OMAHA_USER_REPORT_SHARE_CARDS_REQ = 16011 + CMD.WEB3_SHUFFLE_CMD_OFFSET_OMAHA                   //  # 桌子暂停通知


CMD.CMD_PLO5_SHUFFLE_CARD_NTF = 16001 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 服务器洗牌通知
CMD.CMD_PLO5_SHUFFLE_CARD_REQ = 16002 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 客户端洗牌请求
CMD.CMD_PLO5_ENCRYPT_CARD_NTF = 16003 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 服务器加密牌通知
CMD.CMD_PLO5_ENCRYPT_CARD_REQ = 16004 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 客户端加密牌请求
CMD.CMD_PLO5_PKE_NTF = 16005 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 服务器 公开密钥加密 通知  UserPubKeyEncryptNtf
CMD.CMD_PLO5_PKE_REQ = 16006 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 客户端 公开密钥加密 请求  UserPubKeyEncryptReq
CMD.CMD_PLO5_COLLECT_SECRET_KEY_NTF = 16007 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 服务器 收集密钥 通知  CollectDecryptInfoNtf
CMD.CMD_PLO5_COLLECT_SECRET_KEY_REQ = 16008 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                // # 客户端 收集密钥 请求  CollectDecryptInfoReq
CMD.CMD_PLO5_DESK_PAUSE_REQ = 16009 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                    //  # 桌子暂停请求
CMD.CMD_PLO5_DESK_PAUSE_NTF = 16010 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                   //  # 桌子暂停通知
CMD.CMD_PLO5_USER_REPORT_SHARE_CARDS_REQ = 16011 + +CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO5                   //  # 桌子暂停通知

CMD.CMD_PLO6_SHUFFLE_CARD_NTF = 16001 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 服务器洗牌通知
CMD.CMD_PLO6_SHUFFLE_CARD_REQ = 16002 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 客户端洗牌请求
CMD.CMD_PLO6_ENCRYPT_CARD_NTF = 16003 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 服务器加密牌通知
CMD.CMD_PLO6_ENCRYPT_CARD_REQ = 16004 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 客户端加密牌请求
CMD.CMD_PLO6_PKE_NTF = 16005 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 服务器 公开密钥加密 通知  UserPubKeyEncryptNtf
CMD.CMD_PLO6_PKE_REQ = 16006 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 客户端 公开密钥加密 请求  UserPubKeyEncryptReq
CMD.CMD_PLO6_COLLECT_SECRET_KEY_NTF = 16007 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 服务器 收集密钥 通知  CollectDecryptInfoNtf
CMD.CMD_PLO6_COLLECT_SECRET_KEY_REQ = 16008 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                // # 客户端 收集密钥 请求  CollectDecryptInfoReq
CMD.CMD_PLO6_DESK_PAUSE_REQ = 16009 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                    //  # 桌子暂停请求
CMD.CMD_PLO6_DESK_PAUSE_NTF = 16010 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                   //  # 桌子暂停通知
CMD.CMD_PLO6_USER_REPORT_SHARE_CARDS_REQ = 16011 + CMD.WEB3_SHUFFLE_CMD_OFFSET_PLO6                   //  # 桌子暂停通知
// 游戏流程相关命令字 -------------------------------------------------------------------------------------------end


// ------------------------------------------NLH6 短牌shortcard start--------------------------------------------
CMD.CMD_NLH6_USER_ENTER_DESK = 600001;                            // 用户进桌请求
CMD.CMD_NLH6_QUERY_DESK_REQ = 600002;                             // 查询房间信息
CMD.CMD_NLH6_QUERY_PLAYER_DESK = 600003;                          // 客户端从后台切换前台重新进桌
CMD.CMD_NLH6_GAME_EXIT_DESK = 600004;                             // 用户主动发起进桌
CMD.CMD_HALL_GAME_EXIT_CHIPS_SHORT_REQ = 25302;                    // 大厅牌局退桌时 玩家剩余筹码
CMD.CMD_NLH6_GAME_USER_GIVE_UP = 600005;                          // 用户进桌
CMD.CMD_NLH6_GAME_FOLLOW_BET = 600006;                            // 用户跟住
CMD.CMD_NLH6_GAME_USER_STAND_UP = 600007;                         // 用户站起
CMD.CMD_NLH6_GAME_USER_SIT_DOWN = 600008;                         // 用户坐下
CMD.CMD_NLH6_GAME_EXCHANGE_CHIPS_CONFIG = 600009;                 // 用户请求兑换筹码
CMD.CMD_NLH6_SHOW_CARDS_REQ = 600010;                             // 玩家亮牌
CMD.CMD_NLH6_USER_DISBAND_DESK_REQ = 600011;                      // 解散桌子
CMD.CMD_NLH6_INTERACT_PHIZ = 600012;                              // 互动表情
CMD.CMD_NLH6_GAME_DESK_CHAT = 600013;                             // 桌子内聊天
CMD.CMD_NLH6_RELATIVE_OPENID_LIST_REQ = 600014                  // 告诉服务器相关的人的openid
CMD.CMD_NLH6_CLIENT_NTF_START_GAME = 600015;                      // 客户端通知服务器立即开始游戏
CMD.CMD_NLH6_USE_CALL_TIME_REQ = 600016;                          // 玩家请求使用call time
CMD.CMD_NLH6_SETTING_DESK_REQ = 600019;                           // 房间设置
CMD.CMD_NLH6_SUPPLEMENT_CHIPS_INFO_REQ = 600020;                  // 计分牌补充
CMD.CMD_NLH6_OCCUPY_SEAT_REQ = 600021;                            // 占位请求
CMD.CMD_NLH6_SHOW_REST_SHARE_CARDS_REQ = 600022;                  // 查看剩余公共牌
CMD.CMD_NLH6_STAT_POP_CONFIRM_FOLD_REQ = 600023;                  // 统计弃牌时弹出二次确认框
CMD.CMD_NLH6_HANDS_CARD_COLLECT_REQ = 600024;                     // 手牌收藏
CMD.CMD_NLH6_USER_START_GAME = 600025;                            // 用户开始游戏
CMD.CMD_NLH6_USERS_PERMS_LIST_REQ = 600026;                       // 获取用户权限信息列表
CMD.CMD_NLH6_EDIT_USER_PERMS_REQ = 600027;                        // 更新用户权限信息
CMD.CMD_NLH6_USER_PERMS_REQ = 600028;                             // 获取用户权限信息
CMD.CMD_NLH6_NOVICE_JOIN_TYPE_REQ = 600029;                       // 设置新手入局方式
CMD.CMD_NLH6_SET_SHORTCUT_ACTION_REQ = 600030;                    // 设置快捷方式
CMD.CMD_NLH6_PERIOD_STAT_REQ = 600031;                            // 请求实时战绩
CMD.CMD_NLH6_QUERY_LAST_RECORD_DETAIL = 600032;                   // 牌局详情
CMD.CMD_NLH6_QUERY_EXCHANGE_CHIPS = 600033;                       // 玩家检查是否能坐下  查询记分牌

// SHORT 风险控制
//CMD.CMD_NLH6_BUY_INSURANCE_REQ = 600062;                          // 风险控制请求
CMD.CMD_NLH6_USER_INSURANCE_TYPE_REQ = 600035;                    // 买保险玩家通知当前正在买哪种类型的保险
CMD.CMD_NLH6_USER_INSURANCE_DELAY_REQ = 600036                 // 玩家请求保险延时
CMD.CMD_SHORT_USER_INSURANCE_ACTION_REQ = 600037                // 玩家保险动作请求
CMD.CMD_NLH6_USER_INSURANCE_MAIN_REQ = 600038;                    // 领先玩家重新进入到保险的主控界面
CMD.CMD_SHORT_USER_RISK_CONTROL_REQ = 600039                     // 领先玩家发起 保险/多次发牌 请求
CMD.CMD_NLH6_USER_AGREED_DIVIDE_REQ = 600040;                     // 落后玩家是否同意保险
CMD.CMD_NLH6_RISK_BUY_REQ = 600062;                                   // 风险控制请求
CMD.CMD_NLH6_RISK_MULTICARDS_BUY_REQ = 600064;                   // old:324 NLH6

CMD.CMD_SHORT_DISPATCH_MSG_BY_DESK_ID = 600044           // 根据桌子id分发消息
CMD.CMD_NLH6_USER_AUTO_BUY_IN_CFG = 600046;                       // 玩家自动买入设置
CMD.CMD_CHECK_VERIFICATION_CODE_NLH6 = 600047;                       // 密码桌校验密码
CMD.CHECK_QUERY_VERIFY_INFO_NLH6 = 600048;                          //查询密码状态

CMD.CMD_NLH6_GUEST_INPUT = 600052;  //游客进桌
CMD.CMD_NLH6_GUEST_EXIT = 600053;   //游客退桌
CMD.CMD_NLH6_MESSAGE_BLOCK_SET = 600058;                         // 消息屏蔽请求
CMD.CMD_NLH6_FORCE_SHOW_PLAYER_CARDS = 600059                    // 查看玩家手牌
CMD.CMD_NLH6_VPIP_LIMIT_CHECK_AUTH = 600063;                     // 坐下的时候检测vpip


//洗牌相关
CMD.CMD_NLH6_SHUFFLE_CARD_NTF = 610001                       // # 服务器洗牌通知
CMD.CMD_NLH6_SHUFFLE_CARD_REQ = 610002                        // # 客户端洗牌请求
CMD.CMD_NLH6_ENCRYPT_CARD_NTF = 610003                        // # 服务器加密牌通知
CMD.CMD_NLH6_ENCRYPT_CARD_REQ = 610004                   // # 客户端加密牌请求
CMD.CMD_NLH6_PKE_NTF = 610005                                 // # 服务器 公开密钥加密 通知  UserPubKeyEncryptNtf
CMD.CMD_NLH6_PKE_REQ = 610006                // # 客户端 公开密钥加密 请求  UserPubKeyEncryptReq
CMD.CMD_NLH6_COLLECT_SECRET_KEY_NTF = 610007              // # 服务器 收集密钥 通知  CollectDecryptInfoNtf
CMD.CMD_NLH6_COLLECT_SECRET_KEY_REQ = 610008                 // # 客户端 收集密钥 请求  CollectDecryptInfoReq
CMD.CMD_NLH6_DESK_PAUSE_REQ = 610009                      //  # 桌子暂停请求
CMD.CMD_NLH6_DESK_PAUSE_NTF = 610010                     //  # 桌子暂停通知
CMD.CMD_NLH6_USER_REPORT_SHARE_CARDS_REQ = 610011           //  玩家上报公共牌请求
CMD.CMD_NLH6_QUERY_BUY_IN_STATUS_TOKEN = 25107;
CMD.CMD_NLH6_CANCEL_BUY_IN_TOKEN = 25102;
// ------------------------------------------shortcard end------------------------------------------------------


// ------------------------------------------鱿鱼游戏 start--------------------------------------------
CMD.CMD_SQUID_PROGRESS_SETTLE_NTF = 25108
CMD.CMD_SQUID_GAME_OVER_SETTLE_NTF = 25109
// ------------------------------------------鱿鱼游戏 end------------------------------------------------------

export default CMD;
