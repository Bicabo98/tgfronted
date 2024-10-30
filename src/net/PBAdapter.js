/*jshint esversion:6*/

import CMD from './CMD.js'

export default class PBAdapter {

  constructor() {
    const self = this;

    self.TAG = "PBAdapter";
    self._reqtable = {};
    self._rsptable = {};

    self.bindTexasCmdPb();
    self.bindOmahaCmdPb();
    self.bindDrawmahaCmdPb();
    self.bindPineappleCmdPb();
    self.bindPloFiveCmdPb();
    self.bindMixedCmdPb();
    self.bindGuestCmdPb();
    self.bindAOFCmdPb();
    self.bindZoomCmdPb();

    self.bindPloSixCmdPb();
    self.bindMTTPLOSixCmdPb();
    self.bindNLH6CmdPb();
    self.bindSquidGameCmdPb();
  }


  bindTexasCmdPb() {
    const self = this;

    // game proto start
    self._reqtable[CMD.CMD_QUERY_USER_DESKS] = "QueryUserDesksReq";
    self._rsptable[CMD.CMD_QUERY_USER_DESKS] = "QueryUserDesksRsp";


    self._reqtable[CMD.INPUT] = "GameEnterDeskReq";
    self._rsptable[CMD.INPUT] = "GameEnterDeskRsp";

    self._reqtable[CMD.SNG_INPUT] = "GameEnterDeskReq";
    self._rsptable[CMD.SNG_INPUT] = "GameEnterDeskRsp";

    self._reqtable[CMD.GAME_DESK_SHARE] = "DeskShareLinkReq"; // 分享得到短链接
    self._rsptable[CMD.GAME_DESK_SHARE] = "DeskShareLinkRsp"; // 分享得到短链接

    self._rsptable[CMD.INPUT_GAME_EVT] = "EvtDeskUserEnter";

    self._reqtable[CMD.EXIT] = "GameExitDeskReq";
    self._rsptable[CMD.EXIT] = "GameExitDeskRsp";

    self._rsptable[CMD.SIT_DOWN_EVT] = "EvtDeskUserSitDown";
    self._rsptable[CMD.EXIT_RESPONSE_EVT] = "EvtUserExit";
    self._rsptable[CMD.GAME_OVER_COUNT_DOWN_EVT] = "DeskCountDownNtf";
    self._rsptable[CMD.GAME_STAR_EVT] = "EvtGameStart";
    self._rsptable[CMD.OPEN_SHARE_CARDS_EVT] = "EvtOpenShareCards";
    self._rsptable[CMD.EVENT_BEFORE_OPEN_SHARE_CARDS] = "EvtBeforeOpenShareCards";
    self._rsptable[CMD.RESULT_EVT] = "EvtGameOver";
    self._rsptable[CMD.EVENT_USER_CHIPS_CHANGE] = "EvtUserChipsChange";

    self._reqtable[CMD.FOLLOW] = "GameFollowBetReq";
    self._rsptable[CMD.FOLLOW_RESPONSE_EVT] = "EvtUserFollowBet";
    self._rsptable[CMD.GIVEUP_RESPONSE_EVT] = "EvtUserGiveUp";


    self._reqtable[CMD.EXCAHNGE_CHIPS] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.EXCAHNGE_CHIPS] = "GameUserExchangeChipsRsp";
    self._rsptable[CMD.CMD_BUY_IN_CHIP_NTF] = "GameBuyInChipsNtf";
    self._rsptable[CMD.CMD_BUY_IN_TOKEN_NTF] = "ContractBuyinNtf";
    self._reqtable[CMD.CMD_CANCEL_BUY_IN_TOKEN] = "RejectContractBuyin";
    self._reqtable[CMD.CMD_QUERY_BUY_IN_STATUS_TOKEN] = "ReqContractBuyinStatus";
    self._rsptable[CMD.CMD_QUERY_BUY_IN_STATUS_TOKEN] = "TokenDeskInfo";

    self._rsptable[CMD.CHECK_CHIP_TO_SET_DOWN] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_HALL_GAME_EXIT_CHIPS_TEXAS_REQ] = "HallGameUserChipsInfoReq";
    self._rsptable[CMD.CMD_HALL_GAME_EXIT_CHIPS_TEXAS_REQ] = "HallGameUserChipsInfoRsp";

    // game proto end

    // other proto start
    self._reqtable[CMD.CHAT] = "DeskChatReq";
    self._rsptable[CMD.CHAT] = "DeskChatRsp";
    self._rsptable[CMD.CHAT_NOTICE_EVT] = "EvtDeskChat";


    self._rsptable[CMD.BROADCAST_OTHER_EVT] = "EvtBroadCast";


    self._reqtable[CMD.USER_INFO] = "OtherUserInfoReq";
    self._rsptable[CMD.USER_INFO] = "OtherUserInfoRsp";

    self._rsptable[CMD.UPDATA_GOLD_EVT] = "EvtUserGoldChange";


    self._reqtable[CMD.STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.STAND_UP] = "GameUserStandUpRsp";

    self._rsptable[CMD.STAND_UP_RESPONSE_EVT] = "EvtDeskUserStandUp";
    // other proto end

    // for key, var in pairs(self._reqtable) do
    //     logd(key .. "=" .. var , "FBAdapter")
    // end

    self._reqtable[CMD.QUERY_DESK_ON_SHOW] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.QUERY_DESK_ON_SHOW] = "EvtDeskUserEnter"; // 桌子信息


    self._reqtable[CMD.CMD_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._reqtable[CMD.SHOW_CARDS_REQ] = "ShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌
    self._rsptable[CMD.SHOW_CARDS_EVT] = "ShowCardsEvt"; // 通知用户显示牌

    self._rsptable[CMD.CMD_EVENT_USER_LOGIN_ELSEWHERE] = "EventUserLoginElsewhere"; // 在其他设备上登录，断线重连判断


    self._reqtable[CMD.PERIOD_STAT] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.PERIOD_STAT] = "PeriodStatRsp"; // 私人房间实时战绩回复  PERIOD_STAT_NOTIFY//>PERIOD_STAT....
    self._rsptable[CMD.PRIVATE_DESK_TIME_TIP] = "CountDownPromptEvt"; // 私有房间牌局剩余时间提示


    self._reqtable[CMD.SNG_DESK_INFO_REQ] = "QueryDeskReq"; // SNG赛事信息请求
    self._rsptable[CMD.SNG_DESK_INFO_REQ] = "SNGDeskInfoRsp"; // SNG赛事信息请求回复


    self._reqtable[CMD.CMD_PYQ_USER_REG] = "PYQUserRegReq"; // 牌友圈用户注册
    self._rsptable[CMD.CMD_PYQ_USER_REG] = "UserLoginRsp";
    self._reqtable[CMD.CMD_GAME_LAST_RECORD] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_GAME_LAST_RECORD] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_QUERY_ENCRYPTION_CARD_HISTORY] = "EncryptionCardHistoryReq"; // 加密历史数据查询
    self._rsptable[CMD.CMD_QUERY_ENCRYPTION_CARD_HISTORY] = "EncryptionCardHistoryRsp";
    self._reqtable[CMD.CMD_DISBAND_PYQ_DESK] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_DISBAND_PYQ_DESK] = "UserDisbankDeskRsp";

    self._reqtable[CMD.CMD_INTERACT_PHIZ] = "InteractiveExpressionReq"; // 发送互动表情
    self._rsptable[CMD.CMD_INTERACT_PHIZ] = "InteractiveExpressionRsp";
    self._rsptable[CMD.CMD_INTERACT_PHIZ_NTF] = "InteractiveExpressionNtf"; // 下发互动表情
    self._reqtable[CMD.CMD_NOTIFY_SERVER_START] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_NOTIFY_SERVER_START] = "ClientNotifyStartGameRsp";

    // calltime
    self._reqtable[CMD.CMD_USER_CALL_TIME] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_USER_CALL_TIME] = "UserUseCallTimeRsp"; // calltime 接收
    self._rsptable[CMD.CMD_USER_USE_CALL_TIME_EVT] = "UserUseCallTimeEvt"; // 广播某人使用了call time，剩余时间是多少
    self._rsptable[CMD.CMD_USER_UPDATE_CALL_TIME] = "UserCallTimeNtf"; // 更新calltime状态

    self._reqtable[CMD.GIVEUP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.GIVEUP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    // 保险
    self._rsptable[CMD.CMD_INRSURANCE_ORDER_INFO] = "InsuranceOrderInfoNtf"; // 达到条件后，服务器通知给客户端弹出保险单
    self._reqtable[CMD.CMD_BUY_INSURANCE] = "BuyInsuranceReq"; // 买保险的请求
    self._rsptable[CMD.CMD_BUY_INSURANCE] = "BuyInsuranceRsp"; // 买保险回调
    self._rsptable[CMD.CMD_INVALID_INSURANCE_INFO] = "InsurancePoolChangeNtf"; // 保险池失效后,如果他还在牌局里面,则通知客户端
    self._rsptable[CMD.CMD_LING_XIAN_INSURANCE] = "InsuranceBuyingNtf"; // 通知非领先玩家，领先玩家正在购买保险
    self._reqtable[CMD.CMD_SUPPLY_INSURANCE] = "InsuranceSupplyReq"; // 补充保险筹码
    self._rsptable[CMD.CMD_SUPPLY_INSURANCE] = "InsuranceSupplyRsp"; // 补充保险筹码回调
    self._rsptable[CMD.CMD_GET_INSURANCE_INFO] = "InsuranceSoldNtf"; // 有人接保险的通知
    self._rsptable[CMD.CMD_NOTIFY_BUY_INSURANCE] = "BuyInsuranceEvt"; // 通知给其他人，谁买了多少保险
    self._rsptable[CMD.CMD_CLAIM_INSURANCE] = "ClaimInsuranceNtf"; // 通知给买保险的玩家，保险的赔付情况


    // 风险控制
    self._reqtable[CMD.CMD_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"; // 买保险玩家通知当前正在买哪种类型的保险
    self._rsptable[CMD.CMD_USER_INSURANCE_TYPE_NOTIFY] = "UserInsuranceTypeNtf"; // 广播玩家正在选择哪种保险

    self._rsptable[CMD.CMD_USER_DIVIDE_OR_MULTICARD_NOTIFY] = "UserDivide_multicardNtf"; // 通知落后玩家 领先玩家发起协议分池或者多次发牌请求

    self._reqtable[CMD.CMD_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"; // 落后玩家 是否同意协议分池或者多次发牌
    self._rsptable[CMD.CMD_USER_AGREED_DIVIDE_NOTIFY] = "UserAgreeDivide_multicardNtf"; // 通知领先玩家 落后玩家是否同意协议分池或者多次发牌

    self._rsptable[CMD.CMD_USER_INSURANCE_DELAY_NOTIFY] = "UserInsuranceDelayNtf"; // 广播玩家请求保险延时

    self._rsptable[CMD.CMD_USER_INSURANCE_ACTION_NOTIFY] = "UserInsuranceActionNtf"; // 广播玩家保险动作
    self._rsptable[CMD.CMD_NO_NEED_BUY_INSURANCE_NOTIFY] = "NoNeedToBuyInsuranceNtf"; // 广播当前不需要购买保险

    self._reqtable[CMD.CMD_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"; // 领先玩家重新进入到保险的主控界面
    self._rsptable[CMD.CMD_USER_INSURANCE_MAIN_NOTIFY] = "UserInsuranceMainUINtf"; // 广播领先玩家重新进入到保险的主控界面

    self._rsptable[CMD.CMD_TOTALCHIPS_DETAIL_NOTIFY] = "TotalChipsDetailNtf"; // 单独通知筹码堆信息

    self._rsptable[CMD.CMD_ASYNC_BUYINSURANCE_TIME_NOTIFY] = "AsyncBuyInsuranceTime"; // 同步风控期间的定时器时间

    self._rsptable[CMD.CMD_DESK_RESET_NOTIFY] = "DeskResetNtf"; // 服务器重置桌子通知
    self._rsptable[CMD.CMD_RISKCONTROLTIMEOUT_NOTIFY] = "RiskControlTimeoutNtf"; // 服务器风险控制超时通知

    self._reqtable[CMD.CMD_USER_INSURANCE_DELAY_REQ] = "UserInsuranceDelayReq"; //


    //--------------------------------------------------outs保险---------------------------------
    self._rsptable[CMD.CMD_OUTS_INSURANCE_MENU_NTF] = "InsuranceMenuNtf"; //新的outs 保险 通知
    self._reqtable[CMD.CMD_OUTS_INSURANCE_BUY_TEXAS_REQ] = "InsuranceBuyReq";
    self._reqtable[CMD.CMD_OUTS_INSURANCE_BUY_SHORT_REQ] = "InsuranceBuyReq";
    self._reqtable[CMD.CMD_OUTS_INSURANCE_BUY_PLO4_REQ] = "InsuranceBuyReq";
    self._reqtable[CMD.CMD_OUTS_INSURANCE_BUY_PLO5_REQ] = "InsuranceBuyReq";
    self._reqtable[CMD.CMD_OUTS_INSURANCE_BUY_PLO6_REQ] = "InsuranceBuyReq";
    self._rsptable[CMD.CMD_OUTS_INSURANCE_BUY_NTF] = "InsuranceBuyNtf";
    //--------------------------------------------------outs保险---------------------


    // 房主功能
    self._reqtable[CMD.CMD_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息
    self._reqtable[CMD.CMD_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求
    self._rsptable[CMD.CMD_SETTING_DESK_NOTIFY] = "SettingDeskNtf"; // 房间设置通知
    self._rsptable[CMD.CMD_MASTER_CHANGE_NOTIFY] = "DeskCreatorChangeNtf"; // 房主变了


    self._reqtable[CMD.CMD_GET_SUPPLY_CHIPS_INFO] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_GET_SUPPLY_CHIPS_INFO] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    // 查看剩余公共牌组
    self._reqtable[CMD.CMD_OPENREST_SHARECARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_OPENREST_SHARECARDS_REQ] = "MyPlayRecordListRsp"; // 请求翻开剩余公共牌
    // 赛事查看剩余公共牌
    self._reqtable[CMD.CMD_MTT_OPENREST_SHARECARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_MTT_OPENREST_SHARECARDS_REQ] = "MyPlayRecordListRsp"; // 请求翻开剩余公共牌

    self._reqtable[CMD.CMD_MTTOMAHA_OPENREST_SHARECARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_MTTOMAHA_OPENREST_SHARECARDS_REQ] = "MyPlayRecordListRsp"; // 请求翻开剩余公共牌

    self._reqtable[CMD.CMD_MTTPLOFIVE_OPENREST_SHARECARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_MTTPLOFIVE_OPENREST_SHARECARDS_REQ] = "MyPlayRecordListRsp"; // 请求翻开剩余公共牌

    self._reqtable[CMD.CMD_MTTPLOSIX_OPENREST_SHARECARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_MTTPLOSIX_OPENREST_SHARECARDS_REQ] = "MyPlayRecordListRsp"; // 请求翻开剩余公共牌
    //
    self._rsptable[CMD.CMD_OPENREST_SHARECARDS_NOTIFY] = "EvtOpenRestShareCards"; // 请求显示剩余公共牌通知

    // 查看玩家手牌
    self._reqtable[CMD.CMD_FORCE_SHOW_PLAYER_CARDS] = "ShowPlayerCardsReq"; // 强制查看玩家的手牌
    self._rsptable[CMD.CMD_FORCE_SHOW_PLAYER_CARDS] = "MyPlayRecordListRsp"; // 强制查看玩家的手牌
    self._rsptable[CMD.CMD_EVT_FORCE_SHOW_PLAYER_CARDS] = "ShowPlayerCardsRsp"; // 强制查看玩家手牌响应
    self._reqtable[CMD.CMD_UPDATE_CHAT_DISPLAY_REQ] = "UserChatDisplayModeReq"; //修改聊天框显示模式

    // 授权申请占位
    self._rsptable[CMD.CMD_USERSTATUS_CHANGE_NOTIFY] = "UserStatusChangedNtf"; // 单独广播玩家的状态变化


    self._reqtable[CMD.CMD_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座
    self._rsptable[CMD.CMD_OCCUPY_SEAT_NOTIFY] = "OccupySeatNtf"; // 占座离桌的通知


    self._reqtable[CMD.CMD_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._rsptable[CMD.CMD_DESK_HANDS_INDEX_NOTIFY] = "DeskHandsIndexNtf"; // 牌局当前最新手数通知
    self._rsptable[CMD.USER_PROP_CHANGE] = "EvtUserPropChange"; // 道具变化

    // 牌局开始
    self._reqtable[CMD.CMD_GAME_BEGIN_NOTIFY] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_GAME_BEGIN_NOTIFY] = "UserStartGameRsp";

    self._rsptable[CMD.USER_CONFIRM_GAME_START] = "EvtUserStartGame"; // 牌局开始确认返回

    self._rsptable[CMD.CMD_RAISE_BLIND] = "EvtSNGRaiseBlind"; // 升盲通知


    // 托管请求
    self._reqtable[CMD.CMD_SNG_START_AUTOPlAY] = "SNGStartAutoPlayReq";
    self._rsptable[CMD.CMD_SNG_START_AUTOPlAY] = "SNGStartAutoPlayRsp";

    // 退出托管请求
    self._reqtable[CMD.CMD_SNG_EXIT_AUTOPlAY] = "SNGExitAutoPlayReq";
    self._rsptable[CMD.CMD_SNG_EXIT_AUTOPlAY] = "SNGExitAutoPlayRsp";

    // 托管通知
    self._rsptable[CMD.CMD_SNG_AUTOPlAY_NOTIFY] = "EvtSNGAutoPlay";
    // 退出托管通知
    self._rsptable[CMD.CMD_SNG_EXIT_AUTOPlAY_NOTIFY] = "EvtSNGExitAutoPlay";

    // 修改用户权限信息
    self._reqtable[CMD.CMD_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_GET_ONEUSER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_GET_ONEUSER_PERMS_REQ] = "UserPermsRsp";

    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_GET_USER_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_GET_USER_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 通知修改人员管理权限
    self._rsptable[CMD.CMD_EDIT_USER_PERMS_NOTIFY] = "EvtEditUserPerms"; // 修改权限的通知

    self._rsptable[CMD.CMD_SNG_CONTEST_OVER_NOTIFY] = "EvtSNGContestOver"; // sng赛事结束的通知

    // 368设置新手盲入座方式
    self._reqtable[CMD.CMD_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置

    // -------------------------//MTT-----------------------------
    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_MTT_USER_PERMS_REQ] = "UserPermsReq";    // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_MTT_USER_PERMS_REQ] = "UserPermsRsp";
    // 修改用户权限信息
    self._reqtable[CMD.CMD_MTT_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_MTT_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";
    // MTT进桌协议
    self._reqtable[CMD.CMD_MTT_ENTER_DESK_REQ] = "MTTEnterDeskReq";
    self._rsptable[CMD.CMD_MTT_ENTER_DESK_REQ] = "MTTEnterDeskRsp";

    // MTT升盲通知
    self._rsptable[CMD.CMD_EVT_MTT_WILL_RAISE_BLIND] = "MTTEventRaiseBlind";

    // MTT离开牌桌
    self._reqtable[CMD.CMD_MTT_EXIT_DESK_REQ] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_MTT_EXIT_DESK_REQ] = "GameExitDeskRsp";

    // MTT查询进桌
    self._reqtable[CMD.CMD_MTT_QUERY_PLAYER_DESK_REQ] = "RefreshDeskReq";
    self._rsptable[CMD.CMD_MTT_QUERY_PLAYER_DESK_REQ] = "EvtDeskUserEnter";

    // MTT弃牌请求
    self._reqtable[CMD.CMD_MTT_USER_GIVE_UP_REQ] = "GameUserGiveUpReq";
    self._rsptable[CMD.CMD_MTT_USER_GIVE_UP_REQ] = "GameUserGiveUpRsp";

    // MTT跟注请求
    self._reqtable[CMD.CMD_MTT_FOLLOW_BET_REQ] = "GameFollowBetReq";

    self._reqtable[CMD.CMD_MTT_CONTEST_INFO_REQ] = "MTTDeskInfoReq"; // MTT赛况信息请求
    self._rsptable[CMD.CMD_MTT_CONTEST_INFO_REQ] = "MTTDeskInfoRsp"; // MTT赛况信息返回

    // MTT亮牌请求
    self._reqtable[CMD.CMD_MTT_SHOW_CARDS_REQ] = "ShowCardsReq";
    self._rsptable[CMD.CMD_MTT_SHOW_CARDS_REQ] = "ShowCardsRsp";

    // MTT通知结算动画播放完毕, 可立即开始游戏
    self._reqtable[CMD.CMD_MTT_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameReq";
    self._rsptable[CMD.CMD_MTT_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameRsp";

    // MTT退出托管请求
    self._reqtable[CMD.CMD_MTT_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayReq";
    self._rsptable[CMD.CMD_MTT_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayRsp";

    // MTT启动托管请求
    self._reqtable[CMD.CMD_MTT_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayReq";
    self._rsptable[CMD.CMD_MTT_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayRsp";

    // MTT进入托管状态通知
    self._rsptable[CMD.CMD_EVT_MTT_AUTO_PLAY] = "MTTEventStartAutoPlay";

    // MTT取消托管状态通知
    self._rsptable[CMD.CMD_EVT_MTT_CANCEL_AUTO_PLAY] = "EvtMTTExitAutoPlay";

    // 6006 MTT重购
    self._reqtable[CMD.CMD_MTT_REBUY_REQ] = "MTTRebuyReq"; // 发送MTT重购请求
    self._rsptable[CMD.CMD_MTT_REBUY_REQ] = "MTTRebuyRsp"; // 返回MTT重购响应

    // 代币增购重构请求
    self._reqtable[CMD.CMD_MTT_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderReq"; // 发送MTT增购请求
    self._rsptable[CMD.CMD_MTT_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderRsp"; // 返回MTT增购响应

    // 6007 MTT增购
    self._reqtable[CMD.CMD_MTT_ADDON_REQ] = "MTTAddOnReq"; // 发送MTT增购请求
    self._rsptable[CMD.CMD_MTT_ADDON_REQ] = "MTTAddOnRsp"; // 返回MTT增购响应

    // 6025 取消重购
    self._reqtable[CMD.CMD_MTT_CANCEL_REBUY_REQ] = "MTTCancelRebuyReq"; // 发送取消MTT重购请求
    self._rsptable[CMD.CMD_MTT_CANCEL_REBUY_REQ] = "MTTCancelRebuyRsp"; // 返回取消MTT重购响应


    self._rsptable[CMD.CMD_EVT_MTT_FINAL_RESULT_NTF] = "MTTEventMyResult"; // 最终排名通知
    self._rsptable[CMD.CMD_EVT_MTT_LATE_REG_FINISH_NTF] = "LateRegFinishNtf";
    self._rsptable[CMD.CMD_MTT_ENTER_GROUND_NTF] = "MTTEnterGroundEvt"; // 进场通知
    self._rsptable[CMD.CMD_MTT_EVENT_EXPIRED_NTF] = "MTTEventExpiredEvt"; // 超时没进入比赛,被退赛了
    self._rsptable[CMD.CMD_MTT_USER_OP_NTF] = "MTTUserOpNtf"; // 淘汰,加入,并桌,退赛 提示
    self._rsptable[CMD.CMD_MTT_IN_THE_MONEY_EVT] = "MTTEvtInTheMoney"; // 通知玩家进入了钱圈

    // 6084 MTT实时战绩
    self._reqtable[CMD.CMD_MTT_PERIODSTAT_REQ] = "PeriodStatReq";
    self._rsptable[CMD.CMD_MTT_PERIODSTAT_REQ] = "MTTRealTimeRecordRsp"; // 6084 实时战绩变动通知

    self._reqtable[CMD.CMD_MTT_PERIOD_SELF_CURRENT_RANK_REQ] = "MTTRealTimeRecordPersonalReq";
    self._rsptable[CMD.CMD_MTT_PERIOD_SELF_CURRENT_RANK_REQ] = "MTTRealTimeRecordPersonalRsp"; // 6087 自己当前排名
    self._reqtable[CMD.CMD_MTT_PERIOD_EVENT_RANK_REQ] = "MTTEventRankListReq";
    self._rsptable[CMD.CMD_MTT_PERIOD_EVENT_RANK_REQ] = "MTTEventRankListRsp"; // 6088 赛事总排名
    self._reqtable[CMD.CMD_MTT_PERIOD_DESK_RANK_REQ] = "MTTDeskRankListReq";
    self._rsptable[CMD.CMD_MTT_PERIOD_DESK_RANK_REQ] = "MTTDeskRankListRsp"; // 6091 本桌排名

    self._reqtable[CMD.CMD_MTT_PERIOD_AWARD_REQ] = "MTTRankConfListReq";
    self._rsptable[CMD.CMD_MTT_PERIOD_AWARD_REQ] = "MTTRankConfListRsp"; // 6081 奖励
    self._reqtable[CMD.CMD_MTT_PERIOD_DESK_REQ] = "MTTPeriodStatDeskReq";
    self._rsptable[CMD.CMD_MTT_PERIOD_DESK_REQ] = "MTTPeriodStatDeskRsp"; // 6079 桌子
    self._reqtable[CMD.CMD_MTT_PERIOD_BLIND_REQ] = "MTTBlindsStructureReq";
    self._rsptable[CMD.CMD_MTT_PERIOD_BLIND_REQ] = "MTTBlindsStructureRsp"; // 6080 盲注
    self._reqtable[CMD.CMD_MTT_PERIOD_OBSERVER_REQ] = "MTTViewerListReq";
    self._rsptable[CMD.CMD_MTT_PERIOD_OBSERVER_REQ] = "MTTViewerListRsp"; // 6082 旁观玩家


    self._rsptable[CMD.CMD_MTT_EVENT_STATUS_NTF] = "MTTEventStatusNotify"; // 6010赛事状态通知

    self._rsptable[CMD.CMD_MTT_EVENT_RANK_CHANGED_NTF] = "MTTEventRankChanged"; // 6009 排名变更通知
    self._rsptable[CMD.CMD_MTT_EVENT_MERGE_TO_MERGE_USER] = "MTTEventMergeDesk"; // 6008并桌通知

    // MTT延时操作
    self._reqtable[CMD.CMD_MTT_USE_CALL_TIME_REQ] = "UserUseCallTimeReq";
    self._rsptable[CMD.CMD_MTT_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp";

    // MTT玩家弃牌后弹出二次弹框次数统计
    self._reqtable[CMD.CMD_MTT_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldReq";
    self._rsptable[CMD.CMD_MTT_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldRsp";

    // MTT收藏手牌
    self._reqtable[CMD.CMD_MTT_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq";
    self._rsptable[CMD.CMD_MTT_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp";

    // MTT中场休息通知
    self._rsptable[CMD.CMD_MTT_MIDDLE_REST_NTF] = "MTTRefreshBreakTimeInfo";
    // MTT中场休息牌局涨盲时间停止单独通知
    self._rsptable[CMD.CMD_MTT_STOP_BLIND_TIME_NTF] = "MTTStopBlindTimerNtf";

    // MTT用户不可重购增购的通知
    self._rsptable[CMD.CMD_MTT_LOSE_REBUY_ADDON_NOTIFY] = "MTTLoseRebuyAddonNtf";

    // MTT牌局记录
    self._reqtable[CMD.CMD_MTT_GAME_LAST_RECORD] = "MyPlayRecordListReq";
    self._rsptable[CMD.CMD_MTT_GAME_LAST_RECORD] = "MyPlayRecordListRsp";

    // cmd: 6071, 赛事开始,通知桌子号码
    self._rsptable[CMD.CMD_MTT_GAME_DESK_NUM_NOTIFY] = "MTTDeskNumNtf";

    // cmd: 6072, 重购增购剩余次数的通知
    self._rsptable[CMD.CMD_MTT_REBUY_ADDON_REMAIN_NTF] = "MTTRebuyAddonRemainNtf";

    // cmd: 6074,-mtt赛事结算请求  用于错过结算的再接受
    self._reqtable[CMD.CMD_MTT_RESULT_REQ] = "MTTSettleInfoReq";
    self._rsptable[CMD.CMD_MTT_RESULT_REQ] = "MTTSettleInfoRsp";

    // cmd: 6093，//mtt赛事请求addon弹窗显示的信息
    self._reqtable[CMD.CMD_MTT_QUERY_ADDON_INFO] = "MTTQueryAddInfo";
    self._rsptable[CMD.CMD_MTT_QUERY_ADDON_INFO] = "MTTRefreshAddonInfo";

    // cmd: 6092, //mtt赛事addon弹窗信息更新的通知
    self._rsptable[CMD.CMD_MTT_REFRESH_ADDON_NTF] = "MTTRefreshAddonInfo";


    // cmd: 101, 测试网络速度
    self._reqtable[CMD.CMD_NETWORK_SPEED_TEST] = "SpeedTestReq";
    self._rsptable[CMD.CMD_NETWORK_SPEED_TEST] = "SpeedTestRsp";


    // 防沉迷通知
    self._rsptable[CMD.CMD_ADDICT_GAME_TIPS_NOTIFY] = "PreventIndulgeNtf";

    // cmd: 369, 经典场、SNG设置快捷操作类型
    self._reqtable[CMD.CMD_SET_SHORTCUT_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_SET_SHORTCUT_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";

    // cmd: 6075, MTT设置快捷操作类型
    self._reqtable[CMD.CMD_MTT_SET_SHORTCUT_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_MTT_SET_SHORTCUT_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_MTT_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_MTT_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";

    // -------------------------//MTTOMAHA-----------------------------
    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_MTTOMAHA_USER_PERMS_REQ] = "UserPermsReq";    // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_MTTOMAHA_USER_PERMS_REQ] = "UserPermsRsp";
    // 修改用户权限信息
    self._reqtable[CMD.CMD_MTTOMAHA_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_MTTOMAHA_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";
    // MTT进桌协议
    self._reqtable[CMD.CMD_MTTOMAHA_ENTER_DESK_REQ] = "MTTEnterDeskReq";
    self._rsptable[CMD.CMD_MTTOMAHA_ENTER_DESK_REQ] = "MTTEnterDeskRsp";

    // MTT升盲通知
    self._rsptable[CMD.CMD_EVT_MTTOMAHA_WILL_RAISE_BLIND] = "MTTEventRaiseBlind";

    // MTT离开牌桌
    self._reqtable[CMD.CMD_MTTOMAHA_EXIT_DESK_REQ] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_MTTOMAHA_EXIT_DESK_REQ] = "GameExitDeskRsp";

    // MTT查询进桌
    self._reqtable[CMD.CMD_MTTOMAHA_QUERY_PLAYER_DESK_REQ] = "RefreshDeskReq";
    self._rsptable[CMD.CMD_MTTOMAHA_QUERY_PLAYER_DESK_REQ] = "EvtDeskUserEnter";

    // MTT弃牌请求
    self._reqtable[CMD.CMD_MTTOMAHA_USER_GIVE_UP_REQ] = "GameUserGiveUpReq";
    self._rsptable[CMD.CMD_MTTOMAHA_USER_GIVE_UP_REQ] = "GameUserGiveUpRsp";

    // MTT跟注请求
    self._reqtable[CMD.CMD_MTTOMAHA_FOLLOW_BET_REQ] = "GameFollowBetReq";

    self._reqtable[CMD.CMD_MTTOMAHA_CONTEST_INFO_REQ] = "MTTDeskInfoReq"; // MTT赛况信息请求
    self._rsptable[CMD.CMD_MTTOMAHA_CONTEST_INFO_REQ] = "MTTDeskInfoRsp"; // MTT赛况信息返回

    // MTT亮牌请求
    self._reqtable[CMD.CMD_MTTOMAHA_SHOW_CARDS_REQ] = "ShowCardsReq";
    self._rsptable[CMD.CMD_MTTOMAHA_SHOW_CARDS_REQ] = "ShowCardsRsp";

    // MTT通知结算动画播放完毕, 可立即开始游戏
    self._reqtable[CMD.CMD_MTTOMAHA_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameReq";
    self._rsptable[CMD.CMD_MTTOMAHA_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameRsp";

    // MTT退出托管请求
    self._reqtable[CMD.CMD_MTTOMAHA_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayReq";
    self._rsptable[CMD.CMD_MTTOMAHA_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayRsp";

    // MTT启动托管请求
    self._reqtable[CMD.CMD_MTTOMAHA_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayReq";
    self._rsptable[CMD.CMD_MTTOMAHA_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayRsp";

    // MTT进入托管状态通知
    self._rsptable[CMD.CMD_EVT_MTTOMAHA_AUTO_PLAY] = "MTTEventStartAutoPlay";

    // MTT取消托管状态通知
    self._rsptable[CMD.CMD_EVT_MTTOMAHA_CANCEL_AUTO_PLAY] = "EvtMTTExitAutoPlay";

    // 106006 MTT重购
    self._reqtable[CMD.CMD_MTTOMAHA_REBUY_REQ] = "MTTRebuyReq"; // 发送MTT重购请求
    self._rsptable[CMD.CMD_MTTOMAHA_REBUY_REQ] = "MTTRebuyRsp"; // 返回MTT重购响应

    // 106007 MTT增购
    self._reqtable[CMD.CMD_MTTOMAHA_ADDON_REQ] = "MTTAddOnReq"; // 发送MTT增购请求
    self._rsptable[CMD.CMD_MTTOMAHA_ADDON_REQ] = "MTTAddOnRsp"; // 返回MTT增购响应

    // 代币增购重构请求
    self._reqtable[CMD.CMD_MTTOMAHA_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderReq"; // 发送MTT增购请求
    self._rsptable[CMD.CMD_MTTOMAHA_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderRsp"; // 返回MTT增购响应

    // 106025 取消重购
    self._reqtable[CMD.CMD_MTTOMAHA_CANCEL_REBUY_REQ] = "MTTCancelRebuyReq"; // 发送取消MTT重购请求
    self._rsptable[CMD.CMD_MTTOMAHA_CANCEL_REBUY_REQ] = "MTTCancelRebuyRsp"; // 返回取消MTT重购响应


    self._rsptable[CMD.CMD_EVT_MTTOMAHA_FINAL_RESULT_NTF] = "MTTEventMyResult"; // 最终排名通知
    self._rsptable[CMD.CMD_MTTOMAHA_ENTER_GROUND_NTF] = "MTTEnterGroundEvt"; // 进场通知
    self._rsptable[CMD.CMD_MTTOMAHA_EVENT_EXPIRED_NTF] = "MTTEventExpiredEvt"; // 超时没进入比赛,被退赛了
    self._rsptable[CMD.CMD_MTTOMAHA_USER_OP_NTF] = "MTTUserOpNtf"; // 淘汰,加入,并桌,退赛 提示
    self._rsptable[CMD.CMD_MTTOMAHA_IN_THE_MONEY_EVT] = "MTTEvtInTheMoney"; // 通知玩家进入了钱圈

    self._rsptable[CMD.CMD_MTTOMAHA_EVENT_STATUS_NTF] = "MTTEventStatusNotify";  // 6010赛事状态通知

    self._rsptable[CMD.CMD_MTTOMAHA_EVENT_RANK_CHANGED_NTF] = "MTTEventRankChanged"; // 6009 排名变更通知
    self._rsptable[CMD.CMD_MTTOMAHA_EVENT_MERGE_TO_MERGE_USER] = "MTTEventMergeDesk"; // 6008并桌通知

    // MTT延时操作
    self._reqtable[CMD.CMD_MTTOMAHA_USE_CALL_TIME_REQ] = "UserUseCallTimeReq";
    self._rsptable[CMD.CMD_MTTOMAHA_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp";

    // MTT玩家弃牌后弹出二次弹框次数统计
    self._reqtable[CMD.CMD_MTTOMAHA_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldReq";
    self._rsptable[CMD.CMD_MTTOMAHA_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldRsp";

    // MTT收藏手牌
    self._reqtable[CMD.CMD_MTTOMAHA_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq";
    self._rsptable[CMD.CMD_MTTOMAHA_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp";

    // MTT中场休息通知
    self._rsptable[CMD.CMD_MTTOMAHA_MIDDLE_REST_NTF] = "MTTRestNtf";
    // MTT中场休息牌局涨盲时间停止单独通知
    self._rsptable[CMD.CMD_MTTOMAHA_STOP_BLIND_TIME_NTF] = "MTTStopBlindTimerNtf";

    // MTT用户不可重购增购的通知
    self._rsptable[CMD.CMD_MTTOMAHA_LOSE_REBUY_ADDON_NOTIFY] = "MTTLoseRebuyAddonNtf";


    // cmd: 106071, 赛事开始,通知桌子号码
    self._rsptable[CMD.CMD_MTTOMAHA_GAME_DESK_NUM_NOTIFY] = "MTTDeskNumNtf";

    // cmd: 106072, 重购增购剩余次数的通知
    self._rsptable[CMD.CMD_MTTOMAHA_REBUY_ADDON_REMAIN_NTF] = "MTTRebuyAddonRemainNtf";

    // cmd: 106074,-mtt赛事结算请求  用于错过结算的再接受
    self._reqtable[CMD.CMD_MTTOMAHA_RESULT_REQ] = "MTTSettleInfoReq";
    self._rsptable[CMD.CMD_MTTOMAHA_RESULT_REQ] = "MTTSettleInfoRsp";

    // cmd: 106093，//mtt赛事请求addon弹窗显示的信息
    self._reqtable[CMD.CMD_MTTOMAHA_QUERY_ADDON_INFO] = "MTTQueryAddInfo";
    self._rsptable[CMD.CMD_MTTOMAHA_QUERY_ADDON_INFO] = "MTTRefreshAddonInfo";

    // cmd: 106092, //mtt赛事addon弹窗信息更新的通知
    self._rsptable[CMD.CMD_MTTOMAHA_REFRESH_ADDON_NTF] = "MTTRefreshAddonInfo";


    // cmd: 106075, MTT设置快捷操作类型
    self._reqtable[CMD.CMD_MTTOMAHA_SET_SHORTCUT_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_MTTOMAHA_SET_SHORTCUT_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_MTTOMAHA_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_MTTOMAHA_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";
    // -------------------------//MTTOMAHA end-----------------------------


    // -------------------------//MTTPLOFIVE-----------------------------
    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_MTTPLOFIVE_USER_PERMS_REQ] = "UserPermsReq";    // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_MTTPLOFIVE_USER_PERMS_REQ] = "UserPermsRsp";
    // 修改用户权限信息
    self._reqtable[CMD.CMD_MTTPLOFIVE_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_MTTPLOFIVE_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";
    // MTT进桌协议
    self._reqtable[CMD.CMD_MTTPLOFIVE_ENTER_DESK_REQ] = "MTTEnterDeskReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_ENTER_DESK_REQ] = "MTTEnterDeskRsp";

    // MTT升盲通知
    self._rsptable[CMD.CMD_EVT_MTTPLOFIVE_WILL_RAISE_BLIND] = "MTTEventRaiseBlind";

    // MTT离开牌桌
    self._reqtable[CMD.CMD_MTTPLOFIVE_EXIT_DESK_REQ] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_EXIT_DESK_REQ] = "GameExitDeskRsp";

    // MTT查询进桌
    self._reqtable[CMD.CMD_MTTPLOFIVE_QUERY_PLAYER_DESK_REQ] = "RefreshDeskReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_QUERY_PLAYER_DESK_REQ] = "EvtDeskUserEnter";

    // MTT弃牌请求
    self._reqtable[CMD.CMD_MTTPLOFIVE_USER_GIVE_UP_REQ] = "GameUserGiveUpReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_USER_GIVE_UP_REQ] = "GameUserGiveUpRsp";

    // MTT跟注请求
    self._reqtable[CMD.CMD_MTTPLOFIVE_FOLLOW_BET_REQ] = "GameFollowBetReq";

    self._reqtable[CMD.CMD_MTTPLOFIVE_CONTEST_INFO_REQ] = "MTTDeskInfoReq"; // MTT赛况信息请求
    self._rsptable[CMD.CMD_MTTPLOFIVE_CONTEST_INFO_REQ] = "MTTDeskInfoRsp"; // MTT赛况信息返回

    // MTT亮牌请求
    self._reqtable[CMD.CMD_MTTPLOFIVE_SHOW_CARDS_REQ] = "ShowCardsReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_SHOW_CARDS_REQ] = "ShowCardsRsp";

    // MTT通知结算动画播放完毕, 可立即开始游戏
    self._reqtable[CMD.CMD_MTTPLOFIVE_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameRsp";

    // MTT退出托管请求
    self._reqtable[CMD.CMD_MTTPLOFIVE_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayRsp";

    // MTT启动托管请求
    self._reqtable[CMD.CMD_MTTPLOFIVE_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayRsp";

    // MTT进入托管状态通知
    self._rsptable[CMD.CMD_EVT_MTTPLOFIVE_AUTO_PLAY] = "MTTEventStartAutoPlay";

    // MTT取消托管状态通知
    self._rsptable[CMD.CMD_EVT_MTTPLOFIVE_CANCEL_AUTO_PLAY] = "EvtMTTExitAutoPlay";

    // 106006 MTT重购
    self._reqtable[CMD.CMD_MTTPLOFIVE_REBUY_REQ] = "MTTRebuyReq"; // 发送MTT重购请求
    self._rsptable[CMD.CMD_MTTPLOFIVE_REBUY_REQ] = "MTTRebuyRsp"; // 返回MTT重购响应

    // 106007 MTT增购
    self._reqtable[CMD.CMD_MTTPLOFIVE_ADDON_REQ] = "MTTAddOnReq"; // 发送MTT增购请求
    self._rsptable[CMD.CMD_MTTPLOFIVE_ADDON_REQ] = "MTTAddOnRsp"; // 返回MTT增购响应

    // 代币增购重构请求
    self._reqtable[CMD.CMD_MTTPLOFIVE_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderReq"; // 发送MTT增购请求
    self._rsptable[CMD.CMD_MTTPLOFIVE_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderRsp"; // 返回MTT增购响应

    // 106025 取消重购
    self._reqtable[CMD.CMD_MTTPLOFIVE_CANCEL_REBUY_REQ] = "MTTCancelRebuyReq"; // 发送取消MTT重购请求
    self._rsptable[CMD.CMD_MTTPLOFIVE_CANCEL_REBUY_REQ] = "MTTCancelRebuyRsp"; // 返回取消MTT重购响应


    self._rsptable[CMD.CMD_EVT_MTTPLOFIVE_FINAL_RESULT_NTF] = "MTTEventMyResult"; // 最终排名通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_ENTER_GROUND_NTF] = "MTTEnterGroundEvt"; // 进场通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_EVENT_EXPIRED_NTF] = "MTTEventExpiredEvt"; // 超时没进入比赛,被退赛了
    self._rsptable[CMD.CMD_MTTPLOFIVE_USER_OP_NTF] = "MTTUserOpNtf"; // 淘汰,加入,并桌,退赛 提示
    self._rsptable[CMD.CMD_MTTPLOFIVE_IN_THE_MONEY_EVT] = "MTTEvtInTheMoney"; // 通知玩家进入了钱圈

    self._rsptable[CMD.CMD_MTTPLOFIVE_EVENT_STATUS_NTF] = "MTTEventStatusNotify"; // 6010赛事状态通知

    self._rsptable[CMD.CMD_MTTPLOFIVE_EVENT_RANK_CHANGED_NTF] = "MTTEventRankChanged"; // 6009 排名变更通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_EVENT_MERGE_TO_MERGE_USER] = "MTTEventMergeDesk"; // 6008并桌通知

    // MTT延时操作
    self._reqtable[CMD.CMD_MTTPLOFIVE_USE_CALL_TIME_REQ] = "UserUseCallTimeReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp";

    // MTT玩家弃牌后弹出二次弹框次数统计
    self._reqtable[CMD.CMD_MTTPLOFIVE_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldRsp";

    // MTT收藏手牌
    self._reqtable[CMD.CMD_MTTPLOFIVE_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp";

    // MTT中场休息通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_MIDDLE_REST_NTF] = "MTTRestNtf";
    // MTT中场休息牌局涨盲时间停止单独通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_STOP_BLIND_TIME_NTF] = "MTTStopBlindTimerNtf";

    // MTT用户不可重购增购的通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_LOSE_REBUY_ADDON_NOTIFY] = "MTTLoseRebuyAddonNtf";


    // cmd: 106071, 赛事开始,通知桌子号码
    self._rsptable[CMD.CMD_MTTPLOFIVE_GAME_DESK_NUM_NOTIFY] = "MTTDeskNumNtf";

    // cmd: 106072, 重购增购剩余次数的通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_REBUY_ADDON_REMAIN_NTF] = "MTTRebuyAddonRemainNtf";

    // cmd: 106074,-mtt赛事结算请求  用于错过结算的再接受
    self._reqtable[CMD.CMD_MTTPLOFIVE_RESULT_REQ] = "MTTSettleInfoReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_RESULT_REQ] = "MTTSettleInfoRsp";

    //cmd: 106093，//mtt赛事请求addon弹窗显示的信息
    self._reqtable[CMD.CMD_MTTPLOFIVE_QUERY_ADDON_INFO] = "MTTQueryAddInfo";
    self._rsptable[CMD.CMD_MTTPLOFIVE_QUERY_ADDON_INFO] = "MTTRefreshAddonInfo";

    // cmd: 106092, //mtt赛事addon弹窗信息更新的通知
    self._rsptable[CMD.CMD_MTTPLOFIVE_REFRESH_ADDON_NTF] = "MTTRefreshAddonInfo";


    // cmd: 106075, MTT设置快捷操作类型
    self._reqtable[CMD.CMD_MTTPLOFIVE_SET_SHORTCUT_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_SET_SHORTCUT_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_MTTPLOFIVE_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_MTTPLOFIVE_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";
    // -------------------------//MTTPLOFIVE end-----------------------------

    // 获取牌局回顾  风险详情
    self._reqtable[CMD.CMD_RISK_DETAIL_REQ] = "RiskControlDetailReq";
    self._rsptable[CMD.CMD_RISK_DETAIL_REQ] = "RiskControlDetailRsp";

    // --//cmd:5509 --600之后 SNG实时战绩的变更---
    self._reqtable[CMD.CMD_SNG_PERIOD_STAT_REQ] = "PeriodStatReq";
    self._rsptable[CMD.CMD_SNG_PERIOD_STAT_REQ] = "SNGPeriodStatRsp";

    self._reqtable[CMD.CMD_SNG_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_SNG_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";
    // 7001 无效底池通知
    self._rsptable[CMD.CMD_INVALID_POOL_NTF] = "InvalidPoolNtf";


    self._reqtable[CMD.CMD_FORBID_LOGIN] = "UserForbidLogin"; // 用户被禁止登录
    // 胜率风险控制
    self._rsptable[CMD.TRIGGER_RISK_NTF] = "InsuranceDetailNtf";
    self._rsptable[CMD.TRIGGER_RISK_MULTICARDS] = "MultiCardsDetailNtf";
    self._rsptable[CMD.TRIGGER_RISK_TO_OTHER_NTF] = "InsuranceBuyNtf";
    self._reqtable[CMD.RISK_BUY_REQ] = "RiskReq";
    self._rsptable[CMD.RISK_BUY_REQ] = "RiskRsp";
    self._reqtable[CMD.RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsReq";
    self._rsptable[CMD.RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsRsp";
    self._rsptable[CMD.WHO_BUY_INSURANCE_EVT] = "InsuranceBuyEvt";

    self._reqtable[CMD.CMD_GET_INSURANCE_ORDER_REQ] = "GetInsuranceOrderReq";
    self._rsptable[CMD.CMD_GET_INSURANCE_ORDER_REQ] = "GetInsuranceOrderRsp";
    self._rsptable[CMD.TRIGGER_NO_RISK_NTF] = "NoRiskNtf";


    // 获取分享地址和内容
    self._reqtable[CMD.SHARE_DESK_REQ] = "ShareDeskReq";
    self._rsptable[CMD.SHARE_DESK_REQ] = "ShareDeskRsp";
    // 留座离桌 暂停
    self._rsptable[CMD.CMD_OCCUPY_GAME_PAUSE_EVT] = "EvtDeskPause";
    self._rsptable[CMD.CMD_MULTI_CARD_EVT] = "EvtMultiLastShareCard";

    self._reqtable[CMD.CMD_GAME_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_GAME_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";
    // 自动买入通知
    self._rsptable[CMD.CMD_EVENT_AUTO_BUY_IN] = "EvtAutoBuyIn";
    // 自动买入失效通知
    self._rsptable[CMD.CMD_EVENT_AUTO_BUY_INVALID] = "EvtAutoBuyInCancel";

    // 服务器推送 赛事跳转通知
    self._rsptable[CMD.SERVER_PUSH_GO_TO_EVENT_EVT] = "EvtWindowPopupBroadCast";
    self._rsptable[CMD.SERVER_PUSH_JOINED_EVENT_NTF] = "NotifyOtherEventMessage";

    self._reqtable[CMD.QUERY_LUCKY_DRAW_LIST] = "QueryLuckyDrawListReq";
    self._rsptable[CMD.QUERY_LUCKY_DRAW_LIST] = "QueryLuckyDrawListRsp";

    self._reqtable[CMD.QUERY_WIN_LUCKY_DRAW_DETAIL] = "QueryWinLuckyDrawDetailReq";
    self._rsptable[CMD.QUERY_WIN_LUCKY_DRAW_DETAIL] = "QueryWinLuckyDrawDetailRsp";

    self._rsptable[CMD.WIN_LUCKY_DRAW_NOTIFY] = "WinLuckyDrawNtf";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_TEXAS] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_TEXAS] = "VerificationCodeCheckRsp";

    self._rsptable[CMD.DISCONNECT_PROTECTION_QUERY_REQ] = "DisconnectionProtectionServerQueryOnline";
    self._reqtable[CMD.DISCONNECT_PROTECTION_QUERY_RSP] = "DisconnectionProtectionQueryRsp";
    self._rsptable[CMD.USR_IN_DISCONNECT_PROTECTION_NTF] = "UserInDisconnectProtectionNotify";


    self._reqtable[CMD.CHECK_QUERY_VERIFY_INFO_TEXAS] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CHECK_QUERY_VERIFY_INFO_TEXAS] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_TEXAS_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckReq";
    self._rsptable[CMD.CMD_TEXAS_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckRsp";

    self._reqtable[CMD.BACK_GROUND_REQ] = "PlayerSwitchTag"
    self._rsptable[CMD.BACK_GROUND_REQ] = "PlayerSwitchTagRsp";
    //web3
    self._rsptable[CMD.CMD_SHUFFLE_CARD_NTF] = "ShuffleCardNtf";
    self._rsptable[CMD.CMD_ENCRYPT_CARD_NTF] = "EncryptCardNtf";
    self._rsptable[CMD.CMD_PKE_NTF] = "UserPubKeyEncryptNtf";
    self._rsptable[CMD.CMD_COLLECT_SECRET_KEY_NTF] = "CollectDecryptInfoNtf";
    self._rsptable[CMD.CMD_COLLECT_SECRET_KEY_TIME_NTF] = "CollectSecretKeyTimeoutNtf";
    self._rsptable[CMD.CMD_SHUFFLE_TIMEOUT_NTF] = "ShuffleTimeoutNtf";
    self._rsptable[CMD.CMD_DESK_PAUSE_NTF] = "EvtDeskPause";


    self._reqtable[CMD.CMD_SHUFFLE_CARD_REQ] = "ShuffleCardReq";
    self._reqtable[CMD.CMD_ENCRYPT_CARD_REQ] = "EncryptCardReq";
    self._reqtable[CMD.CMD_PKE_REQ] = "UserPubKeyEncryptReq";
    self._reqtable[CMD.CMD_COLLECT_SECRET_KEY_REQ] = "CollectDecryptInfoReq";
    self._reqtable[CMD.CMD_DESK_PAUSE_REQ] = "UserPauseDeskReq";
    self._reqtable[CMD.CMD_USER_REPORT_SHARE_CARDS_REQ] = "UserShareCardsReportReq";

  }


  // 绑定奥马哈的命令字与事件
  bindOmahaCmdPb() {
    const self = this;
    // ---------------------------奥马哈------------------------------
    self._reqtable[CMD.CMD_OMAHA_USER_ENTER_DESK] = "GameEnterDeskReq";
    self._rsptable[CMD.CMD_OMAHA_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_OMAHA_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_OMAHA_QUERY_PLAYER_DESK] = "EvtDeskUserEnter";

    self._reqtable[CMD.CMD_OMAHA_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_OMAHA_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_OMAHA_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_OMAHA_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_OMAHA_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_OMAHA_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_OMAHA_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_OMAHA_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_OMAHA_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_OMAHA_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_OMAHA_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_OMAHA_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";

    self._reqtable[CMD.CMD_OMAHA_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_OMAHA_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收

    self._reqtable[CMD.CMD_OMAHA_SHOW_CARDS_REQ] = "ShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.CMD_OMAHA_SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌

    self._reqtable[CMD.CMD_OMAHA_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_OMAHA_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_OMAHA_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_OMAHA_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._reqtable[CMD.CMD_OMAHA_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_OMAHA_SHOW_REST_SHARE_CARDS_REQ] = "MyPlayRecordListRsp"; // 请求显示剩余公共牌通知

    // 查看玩家手牌
    self._reqtable[CMD.CMD_OMAHA_FORCE_SHOW_PLAYER_CARDS] = "ShowPlayerCardsReq"; // 强制查看玩家的手牌
    self._rsptable[CMD.CMD_OMAHA_FORCE_SHOW_PLAYER_CARDS] = "MyPlayRecordListRsp"; // 强制查看玩家的手牌

    self._rsptable[CMD.CMD_OMAHA_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_OMAHA_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_OMAHA_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_OMAHA_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_OMAHA_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_OMAHA_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_OMAHA_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_OMAHA_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_OMAHA_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置


    self._reqtable[CMD.CMD_OMAHA_PERIOD_STAT_REQ] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.CMD_OMAHA_PERIOD_STAT_REQ] = "PeriodStatRsp"; // 私人房间实时战绩请求

    self._reqtable[CMD.CMD_OMAHA_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_OMAHA_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_OMAHA_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_OMAHA_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息

    self._reqtable[CMD.CMD_OMAHA_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_OMAHA_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_OMAHA_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";

    // 牌局开始
    self._reqtable[CMD.CMD_OMAHA_USER_START_GAME] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_OMAHA_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_OMAHA_GAME_DESK_CHAT] = "DeskChatReq";


    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_OMAHA_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_OMAHA_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_OMAHA_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; //修改用户权限请求
    self._rsptable[CMD.CMD_OMAHA_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_OMAHA_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_OMAHA_USER_PERMS_REQ] = "UserPermsRsp";

    // 奥马哈风险控制
    self._reqtable[CMD.CMD_OMAHA_BUY_INSURANCE_REQ] = "BuyInsuranceReq"; // 买保险的请求
    self._rsptable[CMD.CMD_OMAHA_BUY_INSURANCE_REQ] = "BuyInsuranceRsp"; // 买保险回调
    self._reqtable[CMD.CMD_OMAHA_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"; // 买保险玩家通知当前正在买哪种类型的保险
    self._reqtable[CMD.CMD_OMAHA_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"; // 落后玩家 是否同意协议分池或者多次发牌
    self._reqtable[CMD.CMD_OMAHA_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"; // 领先玩家重新进入到保险的主控界面
    self._reqtable[CMD.CMD_PLO_FOUR_USER_INSURANCE_DELAY_REQ] = "UserInsuranceDelayReq"; //


    self._reqtable[CMD.OMAHA_RISK_BUY_REQ] = "RiskReq";
    self._rsptable[CMD.OMAHA_RISK_BUY_REQ] = "RiskRsp";

    self._reqtable[CMD.OMAHA_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsReq";
    self._rsptable[CMD.OMAHA_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsRsp";

    self._reqtable[CMD.CMD_OMAHA_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_OMAHA_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_OMAHA] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_OMAHA] = "VerificationCodeCheckRsp";


    self._reqtable[CMD.CHECK_QUERY_VERIFY_INFO_OMAHA] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CHECK_QUERY_VERIFY_INFO_OMAHA] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_OMAHA_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckReq";
    self._rsptable[CMD.CMD_OMAHA_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckRsp";

    self._reqtable[CMD.CMD_OMAHA_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_OMAHA_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";

    //web3
    self._rsptable[CMD.CMD_OMAHA_SHUFFLE_CARD_NTF] = "ShuffleCardNtf";
    self._rsptable[CMD.CMD_OMAHA_ENCRYPT_CARD_NTF] = "EncryptCardNtf";
    self._rsptable[CMD.CMD_OMAHA_PKE_NTF] = "UserPubKeyEncryptNtf";
    self._rsptable[CMD.CMD_OMAHA_COLLECT_SECRET_KEY_NTF] = "CollectDecryptInfoNtf";
    self._rsptable[CMD.CMD_OMAHA_DESK_PAUSE_NTF] = "EvtDeskPause";

    self._reqtable[CMD.CMD_OMAHA_SHUFFLE_CARD_REQ] = "ShuffleCardReq";
    self._reqtable[CMD.CMD_OMAHA_ENCRYPT_CARD_REQ] = "EncryptCardReq";
    self._reqtable[CMD.CMD_OMAHA_PKE_REQ] = "UserPubKeyEncryptReq";
    self._reqtable[CMD.CMD_OMAHA_COLLECT_SECRET_KEY_REQ] = "CollectDecryptInfoReq";
    self._reqtable[CMD.CMD_OMAHA_DESK_PAUSE_REQ] = "UserPauseDeskReq";
    self._reqtable[CMD.CMD_OMAHA_USER_REPORT_SHARE_CARDS_REQ] = "UserShareCardsReportReq";

    self._reqtable[CMD.CMD_OMAHA_CANCEL_BUY_IN_TOKEN] = "RejectContractBuyin";
    self._reqtable[CMD.CMD_OMAHA_QUERY_BUY_IN_STATUS_TOKEN] = "ReqContractBuyinStatus";
    self._rsptable[CMD.CMD_OMAHA_QUERY_BUY_IN_STATUS_TOKEN] = "TokenDeskInfo";

    self._reqtable[CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO4_REQ] = "HallGameUserChipsInfoReq";
    self._rsptable[CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO4_REQ] = "HallGameUserChipsInfoRsp";
  }

  // 奥马哈 end


  //绑定叫马哈的命令字与事件
  bindDrawmahaCmdPb() {
    const self = this;
    // ---------------------------叫马哈------------------------------
    self._reqtable[CMD.CMD_DRAWMAHA_USER_ENTER_DESK] = "GameEnterDeskReq";
    self._rsptable[CMD.CMD_DRAWMAHA_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_DRAWMAHA_QUERY_PLAYER_DESK] = "EvtDeskUserEnter";

    self._reqtable[CMD.CMD_DRAWMAHA_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_DRAWMAHA_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_DRAWMAHA_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_DRAWMAHA_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_DRAWMAHA_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_DRAWMAHA_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_DRAWMAHA_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_DRAWMAHA_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_DRAWMAHA_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_DRAWMAHA_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收


    self._reqtable[CMD.CMD_DRAWMAHA_SHOW_CARDS_REQ] = "ShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.CMD_DRAWMAHA_SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌

    self._reqtable[CMD.CMD_DRAWMAHA_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_DRAWMAHA_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_DRAWMAHA_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._reqtable[CMD.CMD_DRAWMAHA_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_DRAWMAHA_SHOW_REST_SHARE_CARDS_REQ] = "MyPlayRecordListRsp"; // 请求显示剩余公共牌通知

    self._rsptable[CMD.CMD_DRAWMAHA_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_DRAWMAHA_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_DRAWMAHA_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_DRAWMAHA_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_DRAWMAHA_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_DRAWMAHA_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_DRAWMAHA_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置


    self._reqtable[CMD.CMD_DRAWMAHA_PERIOD_STAT_REQ] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.CMD_DRAWMAHA_PERIOD_STAT_REQ] = "PeriodStatRsp"; // 私人房间实时战绩请求

    self._reqtable[CMD.CMD_DRAWMAHA_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_DRAWMAHA_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_DRAWMAHA_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息

    self._reqtable[CMD.CMD_DRAWMAHA_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_DRAWMAHA_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_DRAWMAHA_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";

    // 牌局开始
    self._reqtable[CMD.CMD_DRAWMAHA_USER_START_GAME] = "UserStartGameReq"; //请求牌局开始消息
    self._rsptable[CMD.CMD_DRAWMAHA_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_GAME_DESK_CHAT] = "DeskChatReq";


    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_DRAWMAHA_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_DRAWMAHA_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_DRAWMAHA_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_DRAWMAHA_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_DRAWMAHA_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_DRAWMAHA_USER_PERMS_REQ] = "UserPermsRsp";

    // 用户换牌开始通知
    self._rsptable[CMD.CMD_DRAWMAHA_EXCHANGE_START_NOTIFICATION] = "ExchangeCardRoundNtf";

    // 用户换牌请求
    self._reqtable[CMD.CMD_DRAWMAHA_EXCHANGE_CARD_REQ] = "ExchangeCardReq";
    self._rsptable[CMD.CMD_DRAWMAHA_EXCHANGE_CARD_REQ] = "ExchangeCardRsp";

    // 用户换牌后发牌通知
    self._rsptable[CMD.CMD_DRAWMAHA_EXCHANGE_ASSIGN_CARD_NOTIFICATION] = "ExchangeCardNtf";

    // 换牌时，用户是否接收亮牌
    self._reqtable[CMD.CMD_DRAWMAHA_PROCESS_SHOW_CARD_REQ] = "ExchangeCardReplyReq";
    self._rsptable[CMD.CMD_DRAWMAHA_PROCESS_SHOW_CARD_REQ] = "ExchangeCardReplyRsp";

    //
    self._reqtable[CMD.CMD_DRAWMAHA_EXCHANGE_OVER_REQ] = "ExchangeCardOverReq";
    self._rsptable[CMD.CMD_DRAWMAHA_EXCHANGE_OVER_REQ] = "ExchangeCardOverRsp";

    self._rsptable[CMD.CMD_DRAWMAHA_EXCHANGE_REPLY_NTF] = "ExchangeCardReplyNtf";

    self._reqtable[CMD.CMD_DRAWMAHA_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_DRAWMAHA_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_DRAWMAHA] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_DRAWMAHA] = "VerificationCodeCheckRsp";


    self._reqtable[CMD.CHECK_QUERY_VERIFY_INFO_DRAWMAHA] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CHECK_QUERY_VERIFY_INFO_DRAWMAHA] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckReq";
    self._rsptable[CMD.CMD_DRAWMAHA_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckRsp";

    self._reqtable[CMD.CMD_DRAWMAHA_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_DRAWMAHA_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";
  }


  // 绑定大菠萝的命令字与事件
  bindPineappleCmdPb() {
    const self = this;
    // ---------------------------大菠萝------------------------------
    self._reqtable[CMD.CMD_AC_USER_ENTER_DESK] = "GameEnterDeskReq";
    self._rsptable[CMD.CMD_AC_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_AC_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_AC_QUERY_PLAYER_DESK] = "EvtPineappleUserEnter";

    self._reqtable[CMD.CMD_AC_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_AC_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_AC_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_AC_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_AC_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_AC_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_AC_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_AC_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_AC_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_AC_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_AC_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_AC_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";

    self._reqtable[CMD.CMD_AC_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_AC_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收


    self._reqtable[CMD.CMD_AC_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_AC_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_AC_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_AC_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._rsptable[CMD.CMD_AC_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_AC_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_AC_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_AC_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_AC_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_AC_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_AC_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_AC_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_AC_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置


    self._reqtable[CMD.CMD_AC_PERIOD_STAT_REQ] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.CMD_AC_PERIOD_STAT_REQ] = "PeriodStatRsp"; // 私人房间实时战绩请求

    self._reqtable[CMD.CMD_AC_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_AC_QUERY_LAST_RECORD_DETAIL] = "PineapplePlayRecordListRsp";

    self._reqtable[CMD.CMD_AC_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_AC_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息

    self._reqtable[CMD.CMD_AC_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_AC_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_AC_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";

    // 牌局开始
    self._reqtable[CMD.CMD_AC_USER_START_GAME] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_AC_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_AC_GAME_DESK_CHAT] = "DeskChatReq";


    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_AC_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_AC_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_AC_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_AC_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_AC_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_AC_USER_PERMS_REQ] = "UserPermsRsp";

    self._reqtable[CMD.CMD_AC_SEND_INTERACTIVE_EXPRESSION_REQ] = "InteractiveExpressionReq"; // 发送互动表情
    self._rsptable[CMD.CMD_AC_SEND_INTERACTIVE_EXPRESSION_REQ] = "InteractiveExpressionRsp";

    self._rsptable[CMD.INPUT_PINEAPPLE_GAME_EVT] = "EvtPineappleUserEnter";


    self._reqtable[CMD.CMD_AC_SET_CARD_REQ] = "PineappleSetCardsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_AC_SET_CARD_REQ] = "PineappleSetCardsRsp";

    self._reqtable[CMD.CMD_AC_LAST_CARD_REQ] = "PineappleLastCardReq"; // 发送互动表情
    self._rsptable[CMD.CMD_AC_LAST_CARD_REQ] = "PineappleLastCardRsp";

    self._rsptable[CMD.CMD_AC_SHOW_CARDS_EVT] = "EvtPineappleShowCards";
    self._rsptable[CMD.CMD_AC_ASSIGN_EVT] = "EvtPineappleAssignCards";
    self._rsptable[CMD.CMD_AC_GAMEOVER_EVT] = "EvtPineappleGameOver";

    // 查询、设置、修改自动买入
    self._reqtable[CMD.CMD_PINEAPPLE_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_PINEAPPLE_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";

    self._reqtable[CMD.CMD_AC_READY_STATUS_REQ] = "UserReadyStatusReq"; // 用户准备
    self._rsptable[CMD.CMD_AC_READY_STATUS_REQ] = "UserReadyStatusRsp";

    self._rsptable[CMD.CMD_AC_READY_STATUS_EVT] = "EvtUserReadyStatus"; // 用户准备通知

    self._reqtable[CMD.CMD_AC_NEXT_LEAVE_REQ] = "GameUserLeaveNextHandReq"; // 用户下局离桌
    self._rsptable[CMD.CMD_AC_NEXT_LEAVE_REQ] = "GameUserLeaveNextHandRsp";

    self._reqtable[CMD.CMD_AC_NEXT_STAND_REQ] = "GameUserObserveNextHandReq"; // 下局站起
    self._rsptable[CMD.CMD_AC_NEXT_STAND_REQ] = "GameUserObserveNextHandRsp";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_OFC] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_OFC] = "VerificationCodeCheckRsp";


    self._reqtable[CMD.CHECK_QUERY_VERIFY_INFO_OFC] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CHECK_QUERY_VERIFY_INFO_OFC] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_AC_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_AC_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";
  }

  // 绑定plo5的命令字与事件
  bindPloFiveCmdPb() {
    const self = this;
    // ---------------------------plo5------------------------------
    self._reqtable[CMD.CMD_PLOFIVE_USER_ENTER_DESK] = "GameEnterDeskReq";
    self._rsptable[CMD.CMD_PLOFIVE_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_PLOFIVE_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_PLOFIVE_QUERY_PLAYER_DESK] = "EvtDeskUserEnter";

    self._reqtable[CMD.CMD_PLOFIVE_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_PLOFIVE_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_PLOFIVE_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_PLOFIVE_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_PLOFIVE_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_PLOFIVE_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_PLOFIVE_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_PLOFIVE_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_PLOFIVE_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_PLOFIVE_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_PLOFIVE_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_PLOFIVE_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";

    self._reqtable[CMD.CMD_PLOFIVE_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_PLOFIVE_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收

    self._reqtable[CMD.CMD_PLOFIVE_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldReq";
    self._rsptable[CMD.CMD_PLOFIVE_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldRsp";

    self._reqtable[CMD.CMD_PLOFIVE_SHOW_CARDS_REQ] = "ShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.CMD_PLOFIVE_SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌

    self._reqtable[CMD.CMD_PLOFIVE_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_PLOFIVE_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_PLOFIVE_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_PLOFIVE_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._reqtable[CMD.CMD_PLOFIVE_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_PLOFIVE_SHOW_REST_SHARE_CARDS_REQ] = "MyPlayRecordListRsp"; // 请求显示剩余公共牌通知

    // 查看玩家手牌
    self._reqtable[CMD.CMD_PLO_FIVE_FORCE_SHOW_PLAYER_CARDS] = "ShowPlayerCardsReq"; // 强制查看玩家的手牌
    self._rsptable[CMD.CMD_PLO_FIVE_FORCE_SHOW_PLAYER_CARDS] = "MyPlayRecordListRsp"; // 强制查看玩家的手牌

    self._rsptable[CMD.CMD_PLOFIVE_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_PLOFIVE_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_PLOFIVE_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_PLOFIVE_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_PLOFIVE_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_PLOFIVE_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_PLOFIVE_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_PLOFIVE_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_PLOFIVE_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置


    self._reqtable[CMD.CMD_PLOFIVE_PERIOD_STAT_REQ] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.CMD_PLOFIVE_PERIOD_STAT_REQ] = "PeriodStatRsp"; // 私人房间实时战绩请求

    self._reqtable[CMD.CMD_PLOFIVE_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_PLOFIVE_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_PLOFIVE_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_PLOFIVE_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息


    self._reqtable[CMD.CMD_PLOFIVE_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_PLOFIVE_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_PLOFIVE_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";

    // 牌局开始
    self._reqtable[CMD.CMD_PLOFIVE_USER_START_GAME] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_PLOFIVE_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_PLOFIVE_GAME_DESK_CHAT] = "DeskChatReq";


    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_PLOFIVE_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_PLOFIVE_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_PLOFIVE_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_PLOFIVE_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_PLOFIVE_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_PLOFIVE_USER_PERMS_REQ] = "UserPermsRsp";

    // 奥马哈风险控制
    self._reqtable[CMD.CMD_PLOFIVE_BUY_INSURANCE_REQ] = "BuyInsuranceReq"; // 买保险的请求
    self._rsptable[CMD.CMD_PLOFIVE_BUY_INSURANCE_REQ] = "BuyInsuranceRsp"; // 买保险回调
    self._reqtable[CMD.CMD_PLOFIVE_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"; // 买保险玩家通知当前正在买哪种类型的保险
    self._reqtable[CMD.CMD_PLOFIVE_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"; // 落后玩家 是否同意协议分池或者多次发牌
    self._reqtable[CMD.CMD_PLOFIVE_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"; // 领先玩家重新进入到保险的主控界面
    self._reqtable[CMD.CMD_PLO_FIVE_USER_INSURANCE_DELAY_REQ] = "UserInsuranceDelayReq"; //


    self._reqtable[CMD.PLOFIVE_RISK_BUY_REQ] = "RiskReq";
    self._rsptable[CMD.PLOFIVE_RISK_BUY_REQ] = "RiskRsp";

    self._reqtable[CMD.PLOFIVE_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsReq";
    self._rsptable[CMD.PLOFIVE_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsRsp";

    self._reqtable[CMD.CMD_PLOFIVE_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_PLOFIVE_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";

    self._rsptable[CMD.BROADCAST_POPUP_NOTIFY] = "PopupBroadCastNotifyMessage"; // 通用广播弹窗
    self._rsptable[CMD.SERVER_PUSH_TOAST_EVT] = "ToastNtf"; // 服务端推送toast

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_PLO5] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_PLO5] = "VerificationCodeCheckRsp";


    self._reqtable[CMD.CHECK_QUERY_VERIFY_INFO_PLO5] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CHECK_QUERY_VERIFY_INFO_PLO5] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_PLO_FIVE_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckReq";
    self._rsptable[CMD.CMD_PLO_FIVE_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckRsp";

    self._reqtable[CMD.CMD_PLO_FIVE_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_PLO_FIVE_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";

    //web3
    self._rsptable[CMD.CMD_PLO5_SHUFFLE_CARD_NTF] = "ShuffleCardNtf";
    self._rsptable[CMD.CMD_PLO5_ENCRYPT_CARD_NTF] = "EncryptCardNtf";
    self._rsptable[CMD.CMD_PLO5_PKE_NTF] = "UserPubKeyEncryptNtf";
    self._rsptable[CMD.CMD_PLO5_COLLECT_SECRET_KEY_NTF] = "CollectDecryptInfoNtf";
    self._rsptable[CMD.CMD_PLO5_DESK_PAUSE_NTF] = "EvtDeskPause";

    self._reqtable[CMD.CMD_PLO5_SHUFFLE_CARD_REQ] = "ShuffleCardReq";
    self._reqtable[CMD.CMD_PLO5_ENCRYPT_CARD_REQ] = "EncryptCardReq";
    self._reqtable[CMD.CMD_PLO5_PKE_REQ] = "UserPubKeyEncryptReq";
    self._reqtable[CMD.CMD_PLO5_COLLECT_SECRET_KEY_REQ] = "CollectDecryptInfoReq";
    self._reqtable[CMD.CMD_PLO5_DESK_PAUSE_REQ] = "UserPauseDeskReq";
    self._reqtable[CMD.CMD_PLO5_USER_REPORT_SHARE_CARDS_REQ] = "UserShareCardsReportReq";

    self._reqtable[CMD.CMD_PLOFIVE_CANCEL_BUY_IN_TOKEN] = "RejectContractBuyin";
    self._reqtable[CMD.CMD_PLOFIVE_QUERY_BUY_IN_STATUS_TOKEN] = "ReqContractBuyinStatus";
    self._rsptable[CMD.CMD_PLOFIVE_QUERY_BUY_IN_STATUS_TOKEN] = "TokenDeskInfo";

    self._reqtable[CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO5_REQ] = "HallGameUserChipsInfoReq";
    self._rsptable[CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO5_REQ] = "HallGameUserChipsInfoRsp";
  }


  // 绑定mixed的命令字与事件
  bindMixedCmdPb() {
    const self = this;
    // ---------------------------mixed------------------------------
    self._reqtable[CMD.CMD_MIXED_USER_ENTER_DESK] = "GameEnterDeskReq";
    self._rsptable[CMD.CMD_MIXED_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_MIXED_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_MIXED_QUERY_PLAYER_DESK] = "EvtDeskUserEnter";

    self._reqtable[CMD.CMD_MIXED_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_MIXED_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_MIXED_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_MIXED_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_MIXED_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_MIXED_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_MIXED_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_MIXED_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_MIXED_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_MIXED_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_MIXED_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_MIXED_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";

    self._reqtable[CMD.CMD_MIXED_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_MIXED_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收


    self._reqtable[CMD.CMD_MIXED_SHOW_CARDS_REQ] = "MixinShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.CMD_MIXED_SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌

    self._reqtable[CMD.CMD_MIXED_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_MIXED_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_MIXED_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_MIXED_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._reqtable[CMD.CMD_MIXED_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_MIXED_SHOW_REST_SHARE_CARDS_REQ] = "EvtOpenRestShareCards"; // 请求显示剩余公共牌通知

    self._rsptable[CMD.CMD_MIXED_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_MIXED_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_MIXED_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_MIXED_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_MIXED_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_MIXED_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_MIXED_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_MIXED_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_MIXED_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置


    self._reqtable[CMD.CMD_MIXED_PERIOD_STAT_REQ] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.CMD_MIXED_PERIOD_STAT_REQ] = "PeriodStatRsp"; // 私人房间实时战绩请求

    self._reqtable[CMD.CMD_MIXED_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_MIXED_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_MIXED_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_MIXED_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息

    self._reqtable[CMD.CMD_MIXED_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_MIXED_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_MIXED_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";

    // 牌局开始
    self._reqtable[CMD.CMD_MIXED_USER_START_GAME] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_MIXED_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_MIXED_GAME_DESK_CHAT] = "DeskChatReq";


    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_MIXED_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_MIXED_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_MIXED_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_MIXED_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_MIXED_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_MIXED_USER_PERMS_REQ] = "UserPermsRsp";

    // 奥马哈风险控制
    self._reqtable[CMD.CMD_MIXED_BUY_INSURANCE_REQ] = "BuyInsuranceReq"; // 买保险的请求
    self._rsptable[CMD.CMD_MIXED_BUY_INSURANCE_REQ] = "BuyInsuranceRsp"; // 买保险回调

    self._reqtable[CMD.CMD_MIXED_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"; // 买保险玩家通知当前正在买哪种类型的保险
    self._reqtable[CMD.CMD_MIXED_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"; // 落后玩家 是否同意协议分池或者多次发牌
    self._reqtable[CMD.CMD_MIXED_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"; // 领先玩家重新进入到保险的主控界面

    self._reqtable[CMD.MIXED_RISK_BUY_REQ] = "RiskReq";
    self._rsptable[CMD.MIXED_RISK_BUY_REQ] = "RiskRsp";


    // 用户换牌
    self._reqtable[CMD.CMD_MIXED_EXCHANGE_CARD_REQ] = "ExchangeCardReq";
    self._rsptable[CMD.CMD_MIXED_EXCHANGE_CARD_REQ] = "ExchangeCardRsp";
    // 换牌时，用户是否接收1张牌
    self._reqtable[CMD.CMD_MIXED_PROCESS_SHOW_CARD_REQ] = "ExchangeCardReplyReq";
    self._rsptable[CMD.CMD_MIXED_PROCESS_SHOW_CARD_REQ] = "ExchangeCardReplyRsp";
    // 用户换牌

    self._reqtable[CMD.CMD_MIXED_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_MIXED_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";


    self._reqtable[CMD.CMD_MIXIN_SET_DEALER_GAME_TYPE] = "MixinSetDealerGameTypeReq";
    self._rsptable[CMD.CMD_MIXIN_SET_DEALER_GAME_TYPE] = "MixinSetDealerGameTypeRsp";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_MIXIN] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_MIXIN] = "VerificationCodeCheckRsp";


    self._reqtable[CMD.CHECK_QUERY_VERIFY_INFO_MIXIN] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CHECK_QUERY_VERIFY_INFO_MIXIN] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_MIXIN_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_MIXIN_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";
  }

  // 绑定游客的命令字与事件
  bindGuestCmdPb() {
    const self = this;

    self._reqtable[CMD.GUEST_LOGIN] = "GuestLoginReq";
    self._rsptable[CMD.GUEST_LOGIN] = "GuestLoginRsp";
    self._reqtable[CMD.GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.MTT_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.MTT_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.MTTOMAHA_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.MTTOMAHA_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.MTTPLOFIVE_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.MTTPLOFIVE_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.OMAHA_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.OMAHA_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.DRAWMAHA_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.DRAWMAHA_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.PINEAPPLE_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.PINEAPPLE_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.PLO5_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.PLO5_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.MIXED_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.MIXED_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.CMD_GUEST_ENTER_DESK_AOF] = "GuestEnterDeskReq";
    self._rsptable[CMD.CMD_GUEST_ENTER_DESK_AOF] = "GuestEnterDeskRsp";
    self._reqtable[CMD.CMD_PLOSIX_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.CMD_PLOSIX_GUEST_INPUT] = "GuestEnterDeskRsp";
    self._reqtable[CMD.CMD_MTTPLOSIX_GUEST_INPUT] = "GuestEnterDeskReq";
    self._rsptable[CMD.CMD_MTTPLOSIX_GUEST_INPUT] = "GuestEnterDeskRsp";

    self._reqtable[CMD.GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.OMAHA_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.OMAHA_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.DRAWMAHA_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.DRAWMAHA_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.PINEAPPLE_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.PINEAPPLE_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.PLO5_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.PLO5_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.MTT_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.MTT_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.MTTPLOFIVE_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.MTTPLOFIVE_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.MTTOMAHA_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.MTTOMAHA_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.MIXED_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.MIXED_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.CMD_GUEST_EXIT_DESK_AOF] = "GuestExitDeskReq";
    self._rsptable[CMD.CMD_GUEST_EXIT_DESK_AOF] = "GuestExitDeskRsp";
    self._reqtable[CMD.CMD_PLOSIX_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.CMD_PLOSIX_GUEST_EXIT] = "GuestExitDeskRsp";
    self._reqtable[CMD.CMD_MTTPLOSIX_GUEST_EXIT] = "GuestExitDeskReq";
    self._rsptable[CMD.CMD_MTTPLOSIX_GUEST_EXIT] = "GuestExitDeskRsp";
  }

  // ---------------------------AOF BEGIN-----------------------------
  bindAOFCmdPb() {
    const self = this;

    self._reqtable[CMD.CMD_AOF_USER_ENTER_DESK] = "GameEnterDeskReq";
    self._rsptable[CMD.CMD_AOF_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_AOF_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_AOF_QUERY_PLAYER_DESK] = "EvtDeskUserEnter";

    self._reqtable[CMD.CMD_AOF_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_AOF_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_AOF_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_AOF_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_AOF_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_AOF_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_AOF_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_AOF_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_AOF_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_AOF_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_AOF_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_AOF_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";

    self._reqtable[CMD.CMD_AOF_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_AOF_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收


    self._reqtable[CMD.CMD_AOF_SHOW_CARDS_REQ] = "ShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.CMD_AOF_SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌

    self._reqtable[CMD.CMD_AOF_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_AOF_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_AOF_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_AOF_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._reqtable[CMD.CMD_AOF_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_AOF_SHOW_REST_SHARE_CARDS_REQ] = "EvtOpenRestShareCards"; // 请求显示剩余公共牌通知

    self._rsptable[CMD.CMD_AOF_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_AOF_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_AOF_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_AOF_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_AOF_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_AOF_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_AOF_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_AOF_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_AOF_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置


    self._reqtable[CMD.CMD_AOF_PERIOD_STAT_REQ] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.CMD_AOF_PERIOD_STAT_REQ] = "PeriodStatRsp"; // 私人房间实时战绩请求

    self._reqtable[CMD.CMD_AOF_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_AOF_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_AOF_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_AOF_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息

    self._reqtable[CMD.CMD_AOF_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_MIXED_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_MIXED_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";

    // 牌局开始
    self._reqtable[CMD.CMD_AOF_USER_START_GAME] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_AOF_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_AOF_GAME_DESK_CHAT] = "DeskChatReq";


    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_AOF_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_AOF_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_AOF_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_AOF_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_AOF_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_AOF_USER_PERMS_REQ] = "UserPermsRsp";


    self._reqtable[CMD.CMD_AOF_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"; // 买保险玩家通知当前正在买哪种类型的保险
    self._reqtable[CMD.CMD_AOF_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"; // 落后玩家 是否同意协议分池或者多次发牌
    self._reqtable[CMD.CMD_AOF_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"; // 领先玩家重新进入到保险的主控界面

    self._reqtable[CMD.AOF_RISK_BUY_REQ] = "RiskReq";
    self._rsptable[CMD.AOF_RISK_BUY_REQ] = "RiskRsp";


    self._reqtable[CMD.CMD_AOF_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_AOF_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_AOF] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_AOF] = "VerificationCodeCheckRsp";


    self._reqtable[CMD.CMD_CHECK_QUERY_VERIFY_INFO_AOF] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CMD_CHECK_QUERY_VERIFY_INFO_AOF] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_AOF_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_AOF_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";


    self._reqtable[CMD.SET_AUTO_RECYCLE_CHIPS_REQ] = "GameUserAutoRecycleChips";
    self._rsptable[CMD.SET_AUTO_RECYCLE_CHIPS_REQ] = "GameQueryAutoRecycleChipsRsp";

    self._rsptable[CMD.AUTO_RECYCLE_CHIPS_EVT] = "EvtAutoRecycleChips";
  }

  // ---------------------------AOF end-----------------------------

  //---------------------------Zoom BEGIN-----------------------------
  bindZoomCmdPb() {
    const self = this;

    self._reqtable[CMD.CMD_ZOOM_USER_ENTER_DESK] = "ZoomEnterDeskReq";
    self._rsptable[CMD.CMD_ZOOM_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_ZOOM_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_ZOOM_QUERY_PLAYER_DESK] = "EvtDeskUserEnter";

    self._reqtable[CMD.CMD_ZOOM_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_ZOOM_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_ZOOM_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_ZOOM_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_ZOOM_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_ZOOM_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_ZOOM_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_ZOOM_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_ZOOM_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_ZOOM_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_ZOOM_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_ZOOM_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";

    self._reqtable[CMD.CMD_ZOOM_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_ZOOM_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收


    self._reqtable[CMD.CMD_ZOOM_SHOW_CARDS_REQ] = "ShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.CMD_ZOOM_SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌

    self._reqtable[CMD.CMD_ZOOM_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_ZOOM_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_ZOOM_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_ZOOM_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._reqtable[CMD.CMD_ZOOM_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_ZOOM_SHOW_REST_SHARE_CARDS_REQ] = "EvtOpenRestShareCards"; // 请求显示剩余公共牌通知

    self._rsptable[CMD.CMD_ZOOM_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_ZOOM_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_ZOOM_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_ZOOM_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_ZOOM_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_ZOOM_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_ZOOM_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_ZOOM_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_ZOOM_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置


    self._reqtable[CMD.CMD_ZOOM_PERIOD_STAT_REQ] = "PeriodStatReq";	// 私人房间实时战绩请求
    self._rsptable[CMD.CMD_ZOOM_PERIOD_STAT_REQ] = "PeriodStatRsp";	// 私人房间实时战绩请求

    self._reqtable[CMD.CMD_ZOOM_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_ZOOM_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_ZOOM_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_ZOOM_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息

    self._reqtable[CMD.CMD_ZOOM_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_ZOOM_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_ZOOM_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";

    // 牌局开始
    self._reqtable[CMD.CMD_ZOOM_USER_START_GAME] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_ZOOM_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_ZOOM_GAME_DESK_CHAT] = "DeskChatReq";


    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_ZOOM_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_ZOOM_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_ZOOM_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_ZOOM_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_ZOOM_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_ZOOM_USER_PERMS_REQ] = "UserPermsRsp";


    self._reqtable[CMD.CMD_ZOOM_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"; // 买保险玩家通知当前正在买哪种类型的保险
    self._reqtable[CMD.CMD_ZOOM_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"; // 落后玩家 是否同意协议分池或者多次发牌
    self._reqtable[CMD.CMD_ZOOM_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"; // 领先玩家重新进入到保险的主控界面

    self._reqtable[CMD.ZOOM_RISK_BUY_REQ] = "RiskReq";
    self._rsptable[CMD.ZOOM_RISK_BUY_REQ] = "RiskRsp";


    self._reqtable[CMD.CMD_ZOOM_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_ZOOM_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_ZOOM] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_ZOOM] = "VerificationCodeCheckRsp";


    self._reqtable[CMD.CMD_CHECK_QUERY_VERIFY_INFO_ZOOM] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CMD_CHECK_QUERY_VERIFY_INFO_ZOOM] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_ZOOM_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_ZOOM_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";


    self._rsptable[CMD.CMD_ZOOM_PLAYER_NUMBER] = "ZoomBrocastPlayerNum";
    self._rsptable[CMD.CMD_ZOOM_GAME_USER_MATCHING] = "GameUserMatchingNtf";

    self._rsptable[CMD.ZOOM_EXIT_RESPONSE_EVT] = "ZoomGameExitDeskNtf";

    self._reqtable[CMD.CMD_ZOOM_USER_CANCEL_BUYIN] = "ZoomUserCancelBuyin";
    self._rsptable[CMD.CMD_ZOOM_USER_CANCEL_BUYIN] = "ZoomUserCancelBuyinRsp";

    self._reqtable[CMD.CMD_ZOOM_MY_HANDS_COUNT_REQ] = "ZoomMyHandsCountReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_ZOOM_MY_HANDS_COUNT_REQ] = "DeskHandsIndexNtf";

    self._reqtable[CMD.CMD_ZOOM_GAME_COME_BACK_REQ] = "ZoomGameComeBackReq";
    self._rsptable[CMD.CMD_ZOOM_GAME_COME_BACK_REQ] = "ZoomGameComeBackRsp";
  }

  //---------------------------Zoom end-----------------------------

  //绑定plo6的命令字与事件
  bindPloSixCmdPb() {
    //-------------------------plo6------------------------------
    const self = this;
    self._reqtable[CMD.CMD_PLOSIX_USER_ENTER_DESK] = "GameEnterDeskReq"
    self._rsptable[CMD.CMD_PLOSIX_USER_ENTER_DESK] = "GameEnterDeskRsp"

    self._reqtable[CMD.CMD_PLOSIX_QUERY_PLAYER_DESK] = "RefreshDeskReq"   // 后台恢复时请求
    self._rsptable[CMD.CMD_PLOSIX_QUERY_PLAYER_DESK] = "EvtDeskUserEnter" //

    self._reqtable[CMD.CMD_PLOFIVE_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq" //通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_PLOFIVE_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp"

    self._reqtable[CMD.CMD_PLOSIX_GAME_EXIT_DESK] = "GameExitDeskReq"
    self._rsptable[CMD.CMD_PLOSIX_GAME_EXIT_DESK] = "GameExitDeskRsp"

    self._reqtable[CMD.CMD_PLOSIX_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"   //发送玩家弃牌操作
    self._rsptable[CMD.CMD_PLOSIX_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"   //玩家弃牌接收

    self._reqtable[CMD.CMD_PLOSIX_GAME_FOLLOW_BET] = "GameFollowBetReq"
    self._rsptable[CMD.CMD_PLOSIX_GAME_FOLLOW_BET] = "GameFollowBetRsp"

    self._reqtable[CMD.CMD_PLOSIX_GAME_USER_STAND_UP] = "GameUserStandUpReq"
    self._rsptable[CMD.CMD_PLOSIX_GAME_USER_STAND_UP] = "GameUserStandUpRsp"

    self._reqtable[CMD.CMD_PLOSIX_GAME_USER_SIT_DOWN] = "GameUserSitDownReq"
    self._rsptable[CMD.CMD_PLOSIX_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp"

    self._reqtable[CMD.CMD_PLOSIX_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"   //发送calltime 花费时间操作
    self._rsptable[CMD.CMD_PLOSIX_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"   //calltime 接收

    self._reqtable[CMD.CMD_PLOSIX_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldReq"
    self._rsptable[CMD.CMD_PLOSIX_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldRsp"

    self._reqtable[CMD.CMD_PLOSIX_SHOW_CARDS_REQ] = "ShowCardsReq" //请求显示自己的牌
    self._rsptable[CMD.CMD_PLOSIX_SHOW_CARDS_REQ] = "ShowCardsRsp" //请求显示自己的牌

    self._reqtable[CMD.CMD_PLOSIX_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq"
    self._rsptable[CMD.CMD_PLOSIX_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp"

    self._reqtable[CMD.CMD_PLOSIX_OCCUPY_SEAT_REQ] = "OccupySeatReq"    //请求占座
    self._rsptable[CMD.CMD_PLOSIX_OCCUPY_SEAT_REQ] = "OccupySeatRsp"    //请求占座

    self._reqtable[CMD.CMD_PLOSIX_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"    //请求翻开剩余公共牌
    self._rsptable[CMD.CMD_PLOSIX_SHOW_REST_SHARE_CARDS_REQ] = "MyPlayRecordListRsp"    //请求显示剩余公共牌通知

    // 查看玩家手牌
    self._reqtable[CMD.CMD_PLO_SIX_FORCE_SHOW_PLAYER_CARDS] = "ShowPlayerCardsReq"; // 强制查看玩家的手牌
    self._rsptable[CMD.CMD_PLO_SIX_FORCE_SHOW_PLAYER_CARDS] = "MyPlayRecordListRsp"; // 强制查看玩家的手牌

    self._rsptable[CMD.CMD_PLOSIX_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp"

    self._reqtable[CMD.CMD_PLOSIX_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"    //获取记分牌信息
    self._rsptable[CMD.CMD_PLOSIX_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"    //获取记分牌信息

    self._reqtable[CMD.CMD_PLOSIX_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq"
    self._rsptable[CMD.CMD_PLOSIX_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp"

    self._reqtable[CMD.CMD_PLOSIX_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"  //收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_PLOSIX_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"  //收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_PLOSIX_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"    //发送新手盲设置请求
    self._rsptable[CMD.CMD_PLOSIX_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"    //返回新手盲设置


    self._reqtable[CMD.CMD_PLOSIX_PERIOD_STAT_REQ] = "PeriodStatReq"	//私人房间实时战绩请求
    self._rsptable[CMD.CMD_PLOSIX_PERIOD_STAT_REQ] = "PeriodStatRsp"	//私人房间实时战绩请求

    self._reqtable[CMD.CMD_PLOSIX_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq" //最近一次牌局记录
    self._rsptable[CMD.CMD_PLOSIX_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp"

    self._reqtable[CMD.CMD_PLOSIX_QUERY_DESK_REQ] = "QueryDeskReq"    //根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_PLOSIX_QUERY_DESK_REQ] = "QueryDeskRsp"    //桌子信息


    self._reqtable[CMD.CMD_PLOSIX_SETTING_DESK_REQ] = "SettingDeskReq"    //房主设置房间属性的请求

    self._reqtable[CMD.CMD_PLOSIX_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq" //解散牌桌
    self._rsptable[CMD.CMD_PLOSIX_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp"

    //牌局开始
    self._reqtable[CMD.CMD_PLOSIX_USER_START_GAME] = "UserStartGameReq"    //请求牌局开始消息
    self._rsptable[CMD.CMD_PLOSIX_USER_START_GAME] = "UserStartGameRsp"    //

    self._reqtable[CMD.CMD_PLOSIX_GAME_DESK_CHAT] = "DeskChatReq"

    //获取人员管理列表信息
    self._reqtable[CMD.CMD_PLOSIX_USERS_PERMS_LIST_REQ] = "UserPermsListReq"    //获取人员管理信息列表请求
    self._rsptable[CMD.CMD_PLOSIX_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"    //返回信息列表

    //修改用户权限信息
    self._reqtable[CMD.CMD_PLOSIX_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"    //修改用户权限请求
    self._rsptable[CMD.CMD_PLOSIX_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp"    //

    //获取某个人的权限信息
    self._reqtable[CMD.CMD_PLOSIX_USER_PERMS_REQ] = "UserPermsReq"    //获取某个人的权限信息请求
    self._rsptable[CMD.CMD_PLOSIX_USER_PERMS_REQ] = "UserPermsRsp"    //

    self._reqtable[CMD.CMD_PLOSIX_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"    //买保险玩家通知当前正在买哪种类型的保险
    self._reqtable[CMD.CMD_PLOSIX_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"    //落后玩家 是否同意协议分池或者多次发牌
    self._reqtable[CMD.CMD_PLOSIX_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"    //领先玩家重新进入到保险的主控界面
    self._reqtable[CMD.CMD_PLO_SIX_USER_INSURANCE_DELAY_REQ] = "UserInsuranceDelayReq"; //
    self._reqtable[CMD.CMD_PLOSIX_RISK_BUY_REQ] = "RiskReq"
    self._rsptable[CMD.CMD_PLOSIX_RISK_BUY_REQ] = "RiskRsp"
    self._reqtable[CMD.CMD_PLOSIX_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsReq";
    self._rsptable[CMD.CMD_PLOSIX_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsRsp";

    self._reqtable[CMD.CMD_PLOSIX_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg"
    self._rsptable[CMD.CMD_PLOSIX_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp"

    self._reqtable[CMD.CMD_PLOSIX_CHECK_VERIFICATION_CODE] = "VerificationCodeCheckReq"
    self._rsptable[CMD.CMD_PLOSIX_CHECK_VERIFICATION_CODE] = "VerificationCodeCheckRsp"


    self._reqtable[CMD.CMD_PLOSIX_CHECK_QUERY_VERIFY_INFO] = "QueryVerifyInfoReq"
    self._rsptable[CMD.CMD_PLOSIX_CHECK_QUERY_VERIFY_INFO] = "QueryVerifyInfoRsp"

    self._reqtable[CMD.CMD_PLOSIX_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckReq"
    self._rsptable[CMD.CMD_PLOSIX_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckRsp"

    self._reqtable[CMD.CMD_PLOSIX_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq"
    self._rsptable[CMD.CMD_PLOSIX_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp"

    //web3
    self._rsptable[CMD.CMD_PLO6_SHUFFLE_CARD_NTF] = "ShuffleCardNtf";
    self._rsptable[CMD.CMD_PLO6_ENCRYPT_CARD_NTF] = "EncryptCardNtf";
    self._rsptable[CMD.CMD_PLO6_PKE_NTF] = "UserPubKeyEncryptNtf";
    self._rsptable[CMD.CMD_PLO6_COLLECT_SECRET_KEY_NTF] = "CollectDecryptInfoNtf";
    self._rsptable[CMD.CMD_PLO6_DESK_PAUSE_NTF] = "EvtDeskPause";

    self._reqtable[CMD.CMD_PLO6_SHUFFLE_CARD_REQ] = "ShuffleCardReq";
    self._reqtable[CMD.CMD_PLO6_ENCRYPT_CARD_REQ] = "EncryptCardReq";
    self._reqtable[CMD.CMD_PLO6_PKE_REQ] = "UserPubKeyEncryptReq";
    self._reqtable[CMD.CMD_PLO6_COLLECT_SECRET_KEY_REQ] = "CollectDecryptInfoReq";
    self._reqtable[CMD.CMD_PLO6_DESK_PAUSE_REQ] = "UserPauseDeskReq";
    self._reqtable[CMD.CMD_PLO6_USER_REPORT_SHARE_CARDS_REQ] = "UserShareCardsReportReq";

    self._reqtable[CMD.CMD_PLOSIX_CANCEL_BUY_IN_TOKEN] = "RejectContractBuyin";
    self._reqtable[CMD.CMD_PLOSIX_QUERY_BUY_IN_STATUS_TOKEN] = "ReqContractBuyinStatus";
    self._rsptable[CMD.CMD_PLOSIX_QUERY_BUY_IN_STATUS_TOKEN] = "TokenDeskInfo";

    self._reqtable[CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO6_REQ] = "HallGameUserChipsInfoReq";
    self._rsptable[CMD.CMD_HALL_GAME_EXIT_CHIPS_PLO6_REQ] = "HallGameUserChipsInfoRsp";
  }

  bindMTTPLOSixCmdPb() {
    const self = this;
    //-----------------------MTTPLOSIX-----------------------------
    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_MTTPLOSIX_USER_PERMS_REQ] = "UserPermsReq";    // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_MTTPLOSIX_USER_PERMS_REQ] = "UserPermsRsp";
    // 修改用户权限信息
    self._reqtable[CMD.CMD_MTTPLOSIX_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_MTTPLOSIX_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";
    //MTT进桌协议
    self._reqtable[CMD.CMD_MTTPLOSIX_ENTER_DESK_REQ] = "MTTEnterDeskReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_ENTER_DESK_REQ] = "MTTEnterDeskRsp"

    //MTT离开牌桌
    self._reqtable[CMD.CMD_MTTPLOSIX_EXIT_DESK_REQ] = "GameExitDeskReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_EXIT_DESK_REQ] = "GameExitDeskRsp"

    //MTT查询进桌
    self._reqtable[CMD.CMD_MTTPLOSIX_QUERY_PLAYER_DESK_REQ] = "RefreshDeskReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_QUERY_PLAYER_DESK_REQ] = "EvtDeskUserEnter"

    //MTT弃牌请求
    self._reqtable[CMD.CMD_MTTPLOSIX_USER_GIVE_UP_REQ] = "GameUserGiveUpReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_USER_GIVE_UP_REQ] = "GameUserGiveUpRsp"

    //MTT跟注请求
    self._reqtable[CMD.CMD_MTTPLOSIX_FOLLOW_BET_REQ] = "GameFollowBetReq"

    self._reqtable[CMD.CMD_MTTPLOSIX_CONTEST_INFO_REQ] = "MTTDeskInfoReq"    //MTT赛况信息请求
    self._rsptable[CMD.CMD_MTTPLOSIX_CONTEST_INFO_REQ] = "MTTDeskInfoRsp"    //MTT赛况信息返回

    //MTT亮牌请求
    self._reqtable[CMD.CMD_MTTPLOSIX_SHOW_CARDS_REQ] = "ShowCardsReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_SHOW_CARDS_REQ] = "ShowCardsRsp"

    //MTT通知结算动画播放完毕, 可立即开始游戏
    self._reqtable[CMD.CMD_MTTPLOSIX_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_CLIENT_START_GAME_REQ] = "ClientNotifyStartGameRsp"

    //MTT退出托管请求
    self._reqtable[CMD.CMD_MTTPLOSIX_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_CANCEL_AUTO_PLAY_REQ] = "MTTExitAutoPlayRsp"

    //MTT启动托管请求
    self._reqtable[CMD.CMD_MTTPLOSIX_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_START_AUTO_PLAY_REQ] = "MTTStartAutoPlayRsp"


    //506006 MTT重购
    self._reqtable[CMD.CMD_MTTPLOSIX_REBUY_REQ] = "MTTRebuyReq"    //发送MTT重购请求
    self._rsptable[CMD.CMD_MTTPLOSIX_REBUY_REQ] = "MTTRebuyRsp"    //返回MTT重购响应

    //506007 MTT增购
    self._reqtable[CMD.CMD_MTTPLOSIX_ADDON_REQ] = "MTTAddOnReq"    //发送MTT增购请求
    self._rsptable[CMD.CMD_MTTPLOSIX_ADDON_REQ] = "MTTAddOnRsp"    //返回MTT增购响应

    // 代币增购重构请求
    self._reqtable[CMD.CMD_MTTPLOSIX_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderReq"; // 发送MTT增购请求
    self._rsptable[CMD.CMD_MTTPLOSIX_REBUY_OR_ADDON_TOKEN_REQ] = "TokenMttCreateOrderRsp"; // 返回MTT增购响应

    //506025 取消重购
    self._reqtable[CMD.CMD_MTTPLOSIX_CANCEL_REBUY_REQ] = "MTTCancelRebuyReq"    //发送取消MTT重购请求
    self._rsptable[CMD.CMD_MTTPLOSIX_CANCEL_REBUY_REQ] = "MTTCancelRebuyRsp"    //返回取消MTT重购响应

    //MTT延时操作
    self._reqtable[CMD.CMD_MTTPLOSIX_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"

    //MTT玩家弃牌后弹出二次弹框次数统计
    self._reqtable[CMD.CMD_MTTPLOSIX_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldRsp"

    //MTT收藏手牌
    self._reqtable[CMD.CMD_MTTPLOSIX_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"


    //cmd: 506074,-mtt赛事结算请求  用于错过结算的再接受
    self._reqtable[CMD.CMD_MTTPLOSIX_RESULT_REQ] = "MTTSettleInfoReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_RESULT_REQ] = "MTTSettleInfoRsp"

    //cmd: 506093，//MTT赛事请求addon弹窗显示的信息
    self._reqtable[CMD.CMD_MTTPLOSIX_QUERY_ADDON_INFO] = "MTTQueryAddInfo"
    self._rsptable[CMD.CMD_MTTPLOSIX_QUERY_ADDON_INFO] = "MTTRefreshAddonInfo"

    //cmd: 506075, MTT设置快捷操作类型
    self._reqtable[CMD.CMD_MTTPLOSIX_SET_SHORTCUT_REQ] = "SetShortcutActionReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_SET_SHORTCUT_REQ] = "SetShortcutActionRsp"

    self._reqtable[CMD.CMD_MTTPLOSIX_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq"
    self._rsptable[CMD.CMD_MTTPLOSIX_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp"

    //------------------------//MTTPLOSIX end-----------------------------
  }

  // 绑定NLH6的命令字与事件
  bindNLH6CmdPb() {
    const self = this;
    // ---------------------------NLH6------------------------------

    self._reqtable[CMD.CMD_NLH6_USER_ENTER_DESK] = "GameEnterDeskReq";
    self._rsptable[CMD.CMD_NLH6_USER_ENTER_DESK] = "GameEnterDeskRsp";

    self._reqtable[CMD.CMD_NLH6_QUERY_PLAYER_DESK] = "RefreshDeskReq"; // 后台恢复时请求
    self._rsptable[CMD.CMD_NLH6_QUERY_PLAYER_DESK] = "EvtDeskUserEnter";

    self._reqtable[CMD.CMD_NLH6_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameReq"; // 通知服务器可以提前开始游戏
    self._rsptable[CMD.CMD_NLH6_CLIENT_NTF_START_GAME] = "ClientNotifyStartGameRsp";

    self._reqtable[CMD.CMD_NLH6_GAME_EXIT_DESK] = "GameExitDeskReq";
    self._rsptable[CMD.CMD_NLH6_GAME_EXIT_DESK] = "GameExitDeskRsp";

    self._reqtable[CMD.CMD_NLH6_GAME_USER_GIVE_UP] = "GameUserGiveUpReq"; // 发送玩家弃牌操作
    self._rsptable[CMD.CMD_NLH6_GAME_USER_GIVE_UP] = "GameUserGiveUpRsp"; // 玩家弃牌接收

    self._reqtable[CMD.CMD_NLH6_GAME_FOLLOW_BET] = "GameFollowBetReq";
    self._rsptable[CMD.CMD_NLH6_GAME_FOLLOW_BET] = "GameFollowBetRsp";


    self._reqtable[CMD.CMD_NLH6_GAME_USER_STAND_UP] = "GameUserStandUpReq";
    self._rsptable[CMD.CMD_NLH6_GAME_USER_STAND_UP] = "GameUserStandUpRsp";

    self._reqtable[CMD.CMD_NLH6_GAME_USER_SIT_DOWN] = "GameUserSitDownReq";
    self._rsptable[CMD.CMD_NLH6_GAME_USER_SIT_DOWN] = "GameUserSitDownRsp";


    self._reqtable[CMD.CMD_NLH6_USE_CALL_TIME_REQ] = "UserUseCallTimeReq"; // 发送calltime 花费时间操作
    self._rsptable[CMD.CMD_NLH6_USE_CALL_TIME_REQ] = "UserUseCallTimeRsp"; // calltime 接收

    self._reqtable[CMD.CMD_NLH6_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldReq";
    self._rsptable[CMD.CMD_NLH6_STAT_POP_CONFIRM_FOLD_REQ] = "StatPopConfirmFoldRsp";

    self._reqtable[CMD.CMD_NLH6_SHOW_CARDS_REQ] = "ShowCardsReq"; // 请求显示自己的牌
    self._rsptable[CMD.CMD_NLH6_SHOW_CARDS_REQ] = "ShowCardsRsp"; // 请求显示自己的牌

    self._reqtable[CMD.CMD_NLH6_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionReq";
    self._rsptable[CMD.CMD_NLH6_SET_SHORTCUT_ACTION_REQ] = "SetShortcutActionRsp";

    self._reqtable[CMD.CMD_NLH6_OCCUPY_SEAT_REQ] = "OccupySeatReq"; // 请求占座
    self._rsptable[CMD.CMD_NLH6_OCCUPY_SEAT_REQ] = "OccupySeatRsp"; // 请求占座

    self._reqtable[CMD.CMD_NLH6_SHOW_REST_SHARE_CARDS_REQ] = "OpenRestShareCardsReq"; // 请求翻开剩余公共牌
    self._rsptable[CMD.CMD_NLH6_SHOW_REST_SHARE_CARDS_REQ] = "MyPlayRecordListRsp"; // 请求显示剩余公共牌通知
    // 查看玩家手牌
    self._reqtable[CMD.CMD_NLH6_FORCE_SHOW_PLAYER_CARDS] = "ShowPlayerCardsReq"; // 强制查看玩家的手牌
    self._rsptable[CMD.CMD_NLH6_FORCE_SHOW_PLAYER_CARDS] = "MyPlayRecordListRsp"; // 强制查看玩家的手牌

    self._rsptable[CMD.CMD_NLH6_QUERY_EXCHANGE_CHIPS] = "PullChipsExchangeCfgRsp";

    self._reqtable[CMD.CMD_NLH6_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoReq"; // 获取记分牌信息
    self._rsptable[CMD.CMD_NLH6_SUPPLEMENT_CHIPS_INFO_REQ] = "SupplementChipsInfoRsp"; // 获取记分牌信息

    self._reqtable[CMD.CMD_NLH6_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsReq";
    self._rsptable[CMD.CMD_NLH6_GAME_EXCHANGE_CHIPS_CONFIG] = "GameUserExchangeChipsRsp";

    self._reqtable[CMD.CMD_NLH6_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectReq"; // 收藏某一手牌(牌谱)
    self._rsptable[CMD.CMD_NLH6_HANDS_CARD_COLLECT_REQ] = "HandsCardCollectRsp"; // 收藏某一手牌(牌谱)

    self._reqtable[CMD.CMD_NLH6_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeReq"; // 发送新手盲设置请求
    self._rsptable[CMD.CMD_NLH6_NOVICE_JOIN_TYPE_REQ] = "NoviceJoinTypeRsp"; // 返回新手盲设置

    self._reqtable[CMD.CMD_NLH6_PERIOD_STAT_REQ] = "PeriodStatReq"; // 私人房间实时战绩请求
    self._rsptable[CMD.CMD_NLH6_PERIOD_STAT_REQ] = "PeriodStatRsp"; // 私人房间实时战绩请求

    self._reqtable[CMD.CMD_NLH6_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListReq"; // 最近一次牌局记录
    self._rsptable[CMD.CMD_NLH6_QUERY_LAST_RECORD_DETAIL] = "MyPlayRecordListRsp";

    self._reqtable[CMD.CMD_NLH6_QUERY_DESK_REQ] = "QueryDeskReq"; // 根据桌子号查询桌子信息
    self._rsptable[CMD.CMD_NLH6_QUERY_DESK_REQ] = "QueryDeskRsp"; // 桌子信息

    self._reqtable[CMD.CMD_NLH6_SETTING_DESK_REQ] = "SettingDeskReq"; // 房主设置房间属性的请求

    self._reqtable[CMD.CMD_NLH6_USER_DISBAND_DESK_REQ] = "UserDisbankDeskReq"; // 解散牌桌
    self._rsptable[CMD.CMD_NLH6_USER_DISBAND_DESK_REQ] = "UserDisbankDeskRsp";
    // 牌局开始
    self._reqtable[CMD.CMD_NLH6_USER_START_GAME] = "UserStartGameReq"; // 请求牌局开始消息
    self._rsptable[CMD.CMD_NLH6_USER_START_GAME] = "UserStartGameRsp";

    self._reqtable[CMD.CMD_NLH6_GAME_DESK_CHAT] = "DeskChatReq";

    // 获取人员管理列表信息
    self._reqtable[CMD.CMD_NLH6_USERS_PERMS_LIST_REQ] = "UserPermsListReq"; // 获取人员管理信息列表请求
    self._rsptable[CMD.CMD_NLH6_USERS_PERMS_LIST_REQ] = "UserPermsListRsp"; // 返回信息列表

    // 修改用户权限信息
    self._reqtable[CMD.CMD_NLH6_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsReq"; // 修改用户权限请求
    self._rsptable[CMD.CMD_NLH6_EDIT_USER_PERMS_REQ] = "BatchEditUserPermsRsp";

    // 获取某个人的权限信息
    self._reqtable[CMD.CMD_NLH6_USER_PERMS_REQ] = "UserPermsReq"; // 获取某个人的权限信息请求
    self._rsptable[CMD.CMD_NLH6_USER_PERMS_REQ] = "UserPermsRsp";

    //风险控制
    self._reqtable[CMD.CMD_NLH6_BUY_INSURANCE_REQ] = "BuyInsuranceReq"; // 买保险的请求
    self._rsptable[CMD.CMD_NLH6_BUY_INSURANCE_REQ] = "BuyInsuranceRsp"; // 买保险回调
    self._reqtable[CMD.CMD_NLH6_USER_INSURANCE_TYPE_REQ] = "UserInsuranceTypeReq"; // 买保险玩家通知当前正在买哪种类型的保险
    self._reqtable[CMD.CMD_NLH6_USER_AGREED_DIVIDE_REQ] = "UserAgreeDivide_multicardReq"; // 落后玩家 是否同意协议分池或者多次发牌
    self._reqtable[CMD.CMD_NLH6_USER_INSURANCE_MAIN_REQ] = "UserInsuranceMainUIReq"; // 领先玩家重新进入到保险的主控界面
    self._reqtable[CMD.CMD_NLH6_USER_INSURANCE_DELAY_REQ] = "UserInsuranceDelayReq"; //
    self._reqtable[CMD.CMD_NLH6_RISK_BUY_REQ] = "RiskReq";
    self._rsptable[CMD.CMD_NLH6_RISK_BUY_REQ] = "RiskRsp";
    self._reqtable[CMD.CMD_NLH6_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsReq";
    self._rsptable[CMD.CMD_NLH6_RISK_MULTICARDS_BUY_REQ] = "BuyMultiCardsRsp";
    self._reqtable[CMD.CMD_NLH6_USER_AUTO_BUY_IN_CFG] = "GameUserAutoBuyInCfg";
    self._rsptable[CMD.CMD_NLH6_USER_AUTO_BUY_IN_CFG] = "GameQueryAutoBuyInCfgRsp";

    self._reqtable[CMD.CMD_CHECK_VERIFICATION_CODE_NLH6] = "VerificationCodeCheckReq";
    self._rsptable[CMD.CMD_CHECK_VERIFICATION_CODE_NLH6] = "VerificationCodeCheckRsp";

    self._reqtable[CMD.CHECK_QUERY_VERIFY_INFO_NLH6] = "QueryVerifyInfoReq";
    self._rsptable[CMD.CHECK_QUERY_VERIFY_INFO_NLH6] = "QueryVerifyInfoRsp";

    self._reqtable[CMD.CMD_NLH6_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckReq";
    self._rsptable[CMD.CMD_NLH6_VPIP_LIMIT_CHECK_AUTH] = "UserVpipLimitAuthCheckRsp";

    self._reqtable[CMD.CMD_NLH6_MESSAGE_BLOCK_SET] = "EmojiBlockSetReq";
    self._rsptable[CMD.CMD_NLH6_MESSAGE_BLOCK_SET] = "EmojiBlockSetRsp";

    //web3
    self._rsptable[CMD.CMD_NLH6_SHUFFLE_CARD_NTF] = "ShuffleCardNtf";
    self._rsptable[CMD.CMD_NLH6_ENCRYPT_CARD_NTF] = "EncryptCardNtf";
    self._rsptable[CMD.CMD_NLH6_PKE_NTF] = "UserPubKeyEncryptNtf";
    self._rsptable[CMD.CMD_NLH6_COLLECT_SECRET_KEY_NTF] = "CollectDecryptInfoNtf";
    self._rsptable[CMD.CMD_NLH6_DESK_PAUSE_NTF] = "EvtDeskPause";

    self._reqtable[CMD.CMD_NLH6_SHUFFLE_CARD_REQ] = "ShuffleCardReq";
    self._reqtable[CMD.CMD_NLH6_ENCRYPT_CARD_REQ] = "EncryptCardReq";
    self._reqtable[CMD.CMD_NLH6_PKE_REQ] = "UserPubKeyEncryptReq";
    self._reqtable[CMD.CMD_NLH6_COLLECT_SECRET_KEY_REQ] = "CollectDecryptInfoReq";
    self._reqtable[CMD.CMD_NLH6_DESK_PAUSE_REQ] = "UserPauseDeskReq";
    self._reqtable[CMD.CMD_NLH6_USER_REPORT_SHARE_CARDS_REQ] = "UserShareCardsReportReq";

    self._reqtable[CMD.CMD_NLH6_CANCEL_BUY_IN_TOKEN] = "RejectContractBuyin";
    self._reqtable[CMD.CMD_NLH6_QUERY_BUY_IN_STATUS_TOKEN] = "ReqContractBuyinStatus";
    self._rsptable[CMD.CMD_NLH6_QUERY_BUY_IN_STATUS_TOKEN] = "TokenDeskInfo";

    self._reqtable[CMD.CMD_HALL_GAME_EXIT_CHIPS_SHORT_REQ] = "HallGameUserChipsInfoReq";
    self._rsptable[CMD.CMD_HALL_GAME_EXIT_CHIPS_SHORT_REQ] = "HallGameUserChipsInfoRsp";
  }

  bindSquidGameCmdPb() {
    const self = this;
    self._rsptable[CMD.CMD_SQUID_PROGRESS_SETTLE_NTF] = "SquidGameProgressNtf";
    self._rsptable[CMD.CMD_SQUID_GAME_OVER_SETTLE_NTF] = "SquidGameSettleNtf";
  }


  findPBNameByCmd(method, cmd) {
    const self = this;

    if (!method || !cmd) {
      loge("findPBNameByCmd paras error!!!", self.TAG);
      return null;
    }

    let pbName = self["_" + method + "table"][cmd];
    if (!pbName) {
      logd("cannot find pname by cmd=" + cmd + " on table=" + method, self.TAG);
      return null;
    }

    return pbName;
  }

  getSafeShellPbName() {
    return "SafeShell";
  }
}
