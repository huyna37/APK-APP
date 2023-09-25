<template>
    <header id="header" data-search-sug-download="1">
        <div class="nav_container">
            <h1 class="logo">
                <a title="APKPure" href="https://apkpure.com/vn/">
                    <img alt="APKPure" src="https://static.apkpure.com/www/static/imgs/logo_new.png"
                        srcset="https://static.apkpure.com/www/static/imgs/logo_new@2x.png 2x" height="32" width="159"
                        class="p_logo">
                    <img class="m_logo" src="https://static.apkpure.com/mobile/static/imgs/logo_v1.png" height="24"
                        width="100" alt="Logo">
                </a>
            </h1>
            <div class="shadow" id="shadow" onclick="closeMenu()" style="display: none;"></div>
            <div class="nav_new" id="nav_new" dt-eid="card"
                dt-params="model_type=1173&amp;module_name=nav_sidebar&amp;position=3" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true" style="left: -270px;">
                <div class="item close_item">
                    <button type="button" onclick="closeMenu()">
                        <i class="icon icon_close"></i>
                    </button>
                </div>
                <div class="item nav_user_new" id="nav_user_new" data-ref="%2Fvn">
                    <a id="nav_user_a" title="user icon" data-href="https://apkpure.com/vn/login"
                        data-click="nextByApkpure('%2Fvn')" href="https://apkpure.com/vn/login" dt-eid="nav_button"
                        dt-params="small_position=1&amp;nav_button_name=" dt-imp-once="true" dt-imp-end-ignore="true"
                        dt-send-beacon="true" onclick="nextByApkpure('%2Fvn')">
                        <img id="nav_user_img" width="35" height="35" class="nav_user_img" alt="APKPure icon"
                            data-src="https://static.apkpure.com/www/static/imgs/no_login_v3.png"
                            src="https://static.apkpure.com/www/static/imgs/no_login_v3.png">
                    </a>
                </div>
                <div class="item nav_home searching-hide">
                    <a href="https://apkpure.com/vn/" class="dt_nav_button" title="Trang chủ" dt-eid="nav_button"
                        dt-params="small_position=2&amp;nav_button_name=Trang%20ch%E1%BB%A7" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true">
                        <i class="icon icon_home"></i>
                        <span class="dt_menu_text">Trang chủ</span>
                    </a>
                </div>
                <div class="item searching-hide">
                    <a title="apk trò chơi android hàng đầu" class="dt_nav_button nav-g" href="https://apkpure.com/vn/game"
                        dt-eid="nav_button" dt-params="small_position=3&amp;nav_button_name=Tr%C3%B2%20ch%C6%A1i"
                        dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                        <i class="icon icon_game"></i>
                        <span class="dt_menu_text">Trò chơi</span>
                    </a>
                </div>
                <div class="item searching-hide">
                    <a title="apk ứng dụng android hàng đầu" class="dt_nav_button nav-a" href="https://apkpure.com/vn/app"
                        dt-eid="nav_button" dt-params="small_position=4&amp;nav_button_name=%E1%BB%A8ng%20d%E1%BB%A5ng"
                        dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                        <i class="icon icon_app"></i>
                        <span class="dt_menu_text">Ứng dụng</span>
                    </a>
                </div>
                <div class="item many searching-hide" id="article_item">
                    <span class="nav-article dt_nav_button dt-nav-parent">
                        <i class="icon icon_article"></i>
                        <span class="dt_menu_text">Các bài báo</span>
                    </span>
                    <ul class="nav_submenu">
                        <li class="nav_submenu-item">
                            <div class="menu_list">
                                <div class="menu_body">
                                    <ul>
                                        <li>
                                            <a href="https://apkpure.com/vn/news" class="dt_menu_text"
                                                title="Daily Games News Update" dt-eid="nav_button"
                                                dt-params="small_position=6&amp;nav_button_name=Tin%20t%E1%BB%A9c"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">Tin
                                                tức</a>
                                        </li>
                                        <li>
                                            <a href="https://apkpure.com/vn/reviews" class="dt_menu_text"
                                                title="Ratings, Reviews, and Where to Find the Best Apps"
                                                dt-eid="nav_button"
                                                dt-params="small_position=7&amp;nav_button_name=Nh%E1%BA%ADn%20x%C3%A9t"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">Nhận
                                                xét</a>
                                        </li>
                                        <li>
                                            <a href="https://apkpure.com/vn/howto" class="dt_menu_text"
                                                title="Trending Game &amp; App How-To Tutorials, Guides, Tips &amp; Tricks"
                                                dt-eid="nav_button"
                                                dt-params="small_position=8&amp;nav_button_name=How%20To" dt-imp-once="true"
                                                dt-imp-end-ignore="true" dt-send-beacon="true">How
                                                To</a>
                                        </li>
                                        <li><a href="https://apkpure.com/vn/topics" class="dt_menu_text" title="Chủ đề"
                                                dt-eid="nav_button"
                                                dt-params="small_position=9&amp;nav_button_name=Ch%E1%BB%A7%20%C4%91%E1%BB%81"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">Chủ
                                                đề</a></li>
                                    </ul>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="item many searching-hide">
                    <span class="nav-p dt_nav_button dt-nav-parent">
                        <i class="icon icon_product"></i>
                        <span class="dt_menu_text">Sản phẩm của</span>
                    </span>
                    <ul class="nav_submenu">
                        <li class="nav_submenu-item">
                            <div class="menu_list">
                                <div class="menu_body">
                                    <ul>
                                        <li><a class="dl-ref dt_menu_text" dl-ref="nav"
                                                href="https://apkpure.com/vn/apkpure-app.html?icn=aegon&amp;ici=text-nav"
                                                title="Ứng dụng APKPure" dt-eid="nav_button"
                                                dt-params="small_position=10&amp;nav_button_name=%E1%BB%A8ng%20d%E1%BB%A5ng%20APKPure"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">Ứng
                                                dụng APKPure</a></li>
                                        <li><a class="dt_menu_text" href="https://apkpure.com/vn/apk-downloader"
                                                title="Tải về APK" dt-eid="nav_button"
                                                dt-params="small_position=11&amp;nav_button_name=T%E1%BA%A3i%20v%E1%BB%81%20APK"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">Tải về
                                                APK</a></li>
                                        <li><a class="dt_menu_text"
                                                href="https://windows.apkpure.com/?utm_source=APKPure&amp;utm_medium=nav_product_link"
                                                title="Windows APP" rel="noopener" target="_blank" dt-eid="nav_button"
                                                dt-params="small_position=12&amp;nav_button_name=Windows%20APP"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">Windows
                                                APP</a></li>
                                        <li><a class="dt_menu_text"
                                                href="https://iphone.apkpure.com/?utm_source=APKPure&amp;utm_medium=nav_product_link"
                                                title="iPhone APP" rel="noopener" target="_blank" dt-eid="nav_button"
                                                dt-params="small_position=13&amp;nav_button_name=iPhone%20APP"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">iPhone
                                                APP</a></li>
                                        <li><a class="dt_menu_text" href="https://apkpure.com/vn/pre-register"
                                                title="Pre-register" dt-eid="nav_button"
                                                dt-params="small_position=14&amp;nav_button_name=Pre-register"
                                                dt-imp-once="true" dt-imp-end-ignore="true"
                                                dt-send-beacon="true">Pre-register</a></li>
                                        <li><a class="dt_menu_text"
                                                href="https://apkpure.com/vn/apk-downloader-browser-extension"
                                                title="Mở rộng crom" dt-eid="nav_button"
                                                dt-params="small_position=15&amp;nav_button_name=M%E1%BB%9F%20r%E1%BB%99ng%20crom"
                                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">Mở
                                                rộng crom</a></li>
                                    </ul>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="item nav_tv searching-hide">
                    <a title="TVOnic" class="dt_nav_button" rel="noopener" target="_blank"
                        href="https://tvonic.com/?utm_source=topmenu&amp;utm_medium=APKPure&amp;utm_campaign=click"
                        dt-eid="nav_button" dt-params="small_position=5&amp;nav_button_name=%20TVOnic" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true">
                        <i class="icon icon_tv"></i>
                        <span class="dt_menu_text"> TVOnic</span>
                    </a>
                </div>
                <div class="item search">
                    <form class="formsearch searching-show" method="get" action="https://apkpure.com/vn/search"
                        onsubmit="onSearchSubmit(event)" data-detail-url-origin="https://apkpure.com"
                        data-download-url-origin="https://apkpure.com">
                        <div class="search-input">
                            <span class="twitter-typeahead" style="position: relative; display: inline-block;"><input
                                    class="query autocomplete main-autocomplete tt-hint" autocomplete="off"
                                    title="Nhập tên ứng dụng, tên gói, ID gói" type="text" size="40" dt-eid="search_box"
                                    dt-params="small_position=2&amp;search_default_keyword=APKPure&amp;operational_configuration_type=1"
                                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true" readonly=""
                                    spellcheck="false" tabindex="-1" dir="ltr"
                                    style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"><input
                                    id="form_query" class="query autocomplete main-autocomplete tt-input" autocomplete="off"
                                    title="Nhập tên ứng dụng, tên gói, ID gói" name="q" type="text" size="40"
                                    placeholder="APKPure" dt-eid="search_box"
                                    dt-params="small_position=2&amp;search_default_keyword=APKPure&amp;operational_configuration_type=1"
                                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true" spellcheck="false"
                                    style="position: relative; vertical-align: top; background-color: transparent;">
                                <pre aria-hidden="true"
                                    style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
                                <div class="tt-menu"
                                    style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
                                    <div class="tt-dataset tt-dataset-0"></div>
                                </div>
                            </span>
                            <input class="search-btn-icon" type="submit" value="" dt-eid="search_button"
                                dt-params="small_position=3" dt-imp-once="true" dt-imp-end-ignore="true"
                                dt-send-beacon="true">
                            <i class="clear-input"></i>
                        </div>
                        <div class="search-history" dt-eid="card"
                            dt-params="model_type=1044&amp;module_name=search_hist_search_card&amp;position=2"
                            dt-clck-ignore="true" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                            <div class="search-history-title">
                                <span>Lịch sử tìm kiếm</span>
                                <span class="search-history-delete"><i class="search-icon-remove"></i></span>
                            </div>
                            <div>
                                <ul class="search-history-list" data-path="https://apkpure.com/vn/search">
                                    <li>
                                        <a class="search-history-item" href="https://apkpure.com/vn/search?q=minecraft"
                                            dt-eid="history_search_keyword"
                                            dt-params="model_type=1044&amp;module_name=search_hist_search_card&amp;position=2&amp;small_position=1&amp;history_search_keyword=minecraft&amp;search_request_keyword=&amp;search_input_keyword=&amp;search_type=history_search"
                                            dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                                            <div>
                                                <i class="search-icon-time"></i>
                                                <span class="content">minecraft</span>
                                            </div>
                                        </a>
                                        <span class="search-history-item-delete" dt-eid="delete_button"
                                            dt-params="small_position=4&amp;history_search_keyword=minecraft"
                                            dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                                            <i class="icon-search-history-item-delete"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    <div class="search-mask">
                        <i class="search-mask-icon"></i>
                        <span>APKPure</span>
                    </div>
                </div>
                <div class="menu-item item grou menu-item-pwa" style="display: none;" dt-eid="nav_button"
                    dt-params="small_position=16&amp;nav_button_name=Th%C3%AAm%20v%C3%A0o%20m%C3%A0n%20MH%20ch%C3%ADnh"
                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <div>
                        <div class="menu-layer">
                            <span class="menu-icon-pwa"></span>
                            <span class="menu-text">Thêm vào màn MH chính</span>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="menu_btn" onclick="openMenu()">
                <i class="icon icon_menu"></i>
            </button>
            <a class="search_btn" title="search" href="https://apkpure.com/vn/search">
                <i class="icon icon_search"></i>
            </a>
        </div>
    </header>
</template>