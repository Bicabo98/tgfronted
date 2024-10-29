var loadSearchPaths = function () {
    let storagePathTemp = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'qygame-remote-asset');
    storagePathTemp = (storagePathTemp + '_temp');
    let isExistTempPath = jsb.fileUtils.isDirectoryExist(storagePathTemp);
    if (isExistTempPath) {
        cc.log("loadSearchPaths " + storagePathTemp);
        jsb.fileUtils.removeDirectory(storagePathTemp);
    }
    
    var hotUpdateSearchPaths = cc.sys.localStorage.getItem('HotUpdateSearchPaths');
	if (hotUpdateSearchPaths) {
		var paths = JSON.parse(hotUpdateSearchPaths);
		jsb.fileUtils.setSearchPaths(paths);

		var fileList = [];
		var storagePath = paths[0] || '';
		var tempPath = storagePath + '_temp/';
		var baseOffset = tempPath.length;

        var isExitTempPath = jsb.fileUtils.isDirectoryExist(tempPath);
        var isExitProjectPath = jsb.fileUtils.isFileExist(tempPath + 'project.manifest.temp');
        cc.log(" loadSearchPaths 0: " + tempPath + " isExitTempPath: " + isExitTempPath + " isExitProjectPath: " + isExitProjectPath);
		if (isExitTempPath && !isExitProjectPath) {
            cc.log(" loadSearchPaths 1: " + tempPath);
			jsb.fileUtils.listFilesRecursively(tempPath, fileList);
			fileList.forEach(srcPath => {
				var relativePath = srcPath.substr(baseOffset);
				var dstPath = storagePath + relativePath;

				if (srcPath[srcPath.length] == '/') {
					cc.fileUtils.createDirectory(dstPath);
				}
				else {
					if (cc.fileUtils.isFileExist(dstPath)) {
						cc.fileUtils.removeFile(dstPath);
					}
					cc.fileUtils.renameFile(srcPath, dstPath);
				}
			});
			cc.fileUtils.removeDirectory(tempPath);
		}
	}
};

// 覆盖安装后根据app version判断是否删除旧热更资源
let installAppCleanHotCache = function () {
    if(!jsb){
        return;
    }
    let new_appversion = null;
    if (cc.sys.platform == cc.sys.ANDROID) {
        new_appversion = jsb.reflection.callStaticMethod("JNI/JniHelper", "getAppVersionName", "()Ljava/lang/String;");
    }else if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD) {
        new_appversion = jsb.reflection.callStaticMethod("NativeOcClass", "getAppVersionName");
    }
    if(new_appversion == null){
        return;
    }
    let old_appversion = cc.sys.localStorage.getItem("CCC_APP_VERSION_NAME");
    cc.log(">>> installAppCleanHotCache AppVersion:" + new_appversion + " oldVersion:" + old_appversion);
    if(new_appversion == old_appversion){
        return;
    }
    let storageHotPath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'qygame-remote-asset');
    let isExistPath = jsb.fileUtils.isDirectoryExist(storageHotPath);
    if (isExistPath) {
        let result = jsb.fileUtils.removeDirectory(storageHotPath);
        cc.log(">>> installAppCleanHotCache Path:" + storageHotPath + "\n Clean Result: "+ result);
    }
    cc.sys.localStorage.setItem("CCC_APP_VERSION_NAME", new_appversion);
}

window.boot = function () {
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;
 
    var { RESOURCES, INTERNAL, MAIN, START_SCENE } = cc.AssetManager.BuiltinBundleName;
    function setLoadingDisplay () {
        // Loading splash scene
        var bg = document.getElementById('launch');
        var progressBar = bg.querySelector('.progress-bar span');
        bg.style.display = 'block';
        progressBar.style.width = '0%';
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            bg.style.display = 'none';
        });
        var totalPercent = 0;

        onProgress = function (finish, total) {
            var percent = 100 * finish / total;
            // console.log("finish =====" + finish  + " total: " + total + " percent: " + percent);
            if (progressBar && percent >= totalPercent) {
                totalPercent = percent;
                let currentPercent = percent.toFixed(2) + '%';
                progressBar.style.width = currentPercent;
                // console.log("finish =====width: " + currentPercent);
                var slowTips = document.getElementsByClassName('slowTips');
                // var WhalePokerTips = document.getElementsByClassName('WhalePokerTips');
                let str = "<p class='tips-box'><span>The first loading will be slow, please be patient, </span><span style='color:#FFD800;'>" + percent.toFixed(2) + '%</span></p>' + "<div class='typing_loader'></div>";
                // let str1 = "Web 3.0 encrypted card shuffling and card dealing technology"
                let language = cc.sys.localStorage.getItem("config_multi_language");
                if (language == "zh") {
                    str = "<p class='tips-box'><span>首次加载较慢，请耐心等候，</span><span style='color:#FFD800;'>" + percent.toFixed(2) + '%</span></p>' + "<div class='typing_loader'></div>";
                    // str1 = "Web 3.0 加密洗牌发牌技术";
                }else if (language == "tw") {
                    str = "<p class='tips-box'><span>首次加載較慢，請耐心等候，</span><span style='color:#FFD800;'>" + percent.toFixed(2) + '%</span></p>' + "<div class='typing_loader'></div>";
                    // str1 = "Web 3.0 加密洗牌發牌技術";
                }
                slowTips[0].innerHTML = str;
                // WhalePokerTips[0].innerText = str1;
            }
        };
    }

    var onStart = function () {
        cc.enableLabelRetina = true;
        cc.labelRetinaScale = 2;
        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);
        
        if (cc.sys.isBrowser) {
            setLoadingDisplay();
        }

        if (cc.sys.isMobile) {
            // if (settings.orientation === 'landscape') {
            //     cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            // }
            // else 
            // if (settings.orientation === 'portrait') {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            // }
            // cc.view.enableAutoFullScreen([
            //     cc.sys.BROWSER_TYPE_BAIDU,
            //     cc.sys.BROWSER_TYPE_BAIDU_APP,
            //     cc.sys.BROWSER_TYPE_WECHAT,
            //     cc.sys.BROWSER_TYPE_MOBILE_QQ,
            //     cc.sys.BROWSER_TYPE_MIUI,
            // ].indexOf(cc.sys.browserType) < 0);
        }

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / browsers.
        // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.assetManager.downloader.maxConcurrency = 2;
            cc.assetManager.downloader.maxRequestsPerFrame = 2;
        }

        if (cc.sys.isNative) {
            cc.sys.localStorage.setItem("isNotAutoLogin", 0); 
        }

        var launchScene = settings.launchScene;
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(launchScene);
        });
        
        bundle.loadScene(launchScene, onProgress,
            function (err, scene) {
                if (!err) {
                    cc.director.runSceneImmediate(scene);
                    if (cc.sys.isBrowser) {
                        // show canvas
                        var canvas = document.getElementById('GameCanvas');
                        canvas.style.visibility = '';
                        var div = document.getElementById('GameDiv');
                        if (div) {
                            div.style.backgroundImage = '';
                        }
                        // console.log('Success to load scene: ' + launchScene);
                    }
                }else {
                    // console.log('fail to load scene: ' + launchScene);
                    cc.game.end();
                }
            }
        );

    };

    var option = {
        id: 'GameCanvas',
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    };

    cc.assetManager.init({ 
        bundleVers: settings.bundleVers,
        remoteBundles: settings.remoteBundles,
        server: settings.server
    });
    
    var bundleRoot = [INTERNAL, MAIN];
    settings.hasStartSceneBundle && bundleRoot.push(START_SCENE);
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

    var count = 0;
    function cb (err) {
        if (err) return console.error(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.game.run(option, onStart);
        }
    }

    cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x;}), cb);

    for (var i = 0; i < bundleRoot.length; i++) {
        cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
};

if (window.jsb) {
    var isRuntime = (typeof loadRuntime === 'function');
    if (isRuntime) {
        require('src/settings.2a308.js');
        require('src/cocos2d-runtime.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/engine/index.js');
    }
    else {
        require('src/settings.2a308.js');
        require('src/cocos2d-jsb.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/jsb-engine.js');
    }

    cc.macro.CLEANUP_IMAGE_CACHE = true;
    installAppCleanHotCache();
	loadSearchPaths();
    window.boot();
}