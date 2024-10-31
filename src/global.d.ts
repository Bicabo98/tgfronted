interface TelegramWebViewInitParams {
    tgWebAppData: any; // 根据实际数据结构定义类型
}

interface TelegramWebView {
    initParams: TelegramWebViewInitParams;
}

interface Window {
    Telegram: {
        WebView: TelegramWebView;
    };
}
