<template>
    <main class="dt-details-new-box page-q detail_container container m-[auto]" data-type="pkg" data-pkg="jp.co.nexon.fmja">
        <div class="details">
            <div class="detail_top">
                <div class="details_safe">
                    <NuxtLink rel="nofollow" to="/vn/faq-safe.html">
                        <i class="safe">
                            <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M-1-1h21v21H-1z"></path>
                                <g>
                                    <g fill="#FFF" stroke="null">
                                        <path
                                            d="M18.017 4.423l-.025-.58-.577-.06c-2.217-.227-4.124-1.055-5.332-1.71C10.76 1.36 9.957.687 9.95.68L9.515.314 9.082.68c-.008.006-.81.678-2.134 1.394-1.208.654-3.115 1.482-5.332 1.71l-.577.06-.026.578C1.01 4.526.917 7 1.87 9.992c.562 1.768 1.373 3.35 2.412 4.706 1.304 1.702 2.968 3.044 4.944 3.988l.29.138.29-.138c1.975-.944 3.64-2.286 4.943-3.988 1.038-1.355 1.85-2.938 2.41-4.705.954-2.994.86-5.467.857-5.57zm-8.502 12.91c-1.65-.84-3.044-1.99-4.152-3.43-.943-1.226-1.684-2.664-2.2-4.274-.633-1.97-.775-3.726-.804-4.588.89-.132 1.788-.354 2.68-.662.873-.302 1.74-.687 2.58-1.144.853-.463 1.502-.906 1.895-1.196.394.29 1.043.733 1.895 1.196.84.457 1.708.842 2.58 1.144.893.308 1.793.53 2.682.663-.027.853-.166 2.584-.79 4.543-.514 1.62-1.254 3.064-2.198 4.296-1.11 1.45-2.51 2.608-4.17 3.45z">
                                        </path>
                                        <path
                                            d="M13.173 6.516l-.936.936-3.49 3.49-1.768-1.77-.242-.24-.474.475-.475.475 2.957 2.958 5.375-5.375z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </i>
                    </NuxtLink>
                </div>
                <div class="default_ellipsis_1 bread_crumbs">
                    <a href="/" title="Trang chủ">Trang chủ</a>
                    <span class="pc_name">{{ detail.title }}</span>
                </div>
                <div class="detail_banner detail_banner--exp" dt-eid="card"
                    dt-params="model_type=1025&amp;module_name=&amp;position=1" dt-clck-ignore="true" dt-imp-once="true"
                    dt-imp-end-ignore="true" dt-send-beacon="true">
                    <div class="apk_info">
                        <img height="80" width="80" :alt="detail.title" :src="detail.icon">
                        <div class="info">
                            <div class="title_link corner-tag">
                                <span class="corner-tag-icon-box fr floatr brand-corner-tag">
                                    <span class="corner-tag-icon">{{ detail.currency }}</span>
                                </span>
                                <h1>{{ detail.title }}</h1>
                            </div>
                            <br>
                            <p>
                                <span class="rating">
                                    <span class="details_stars icon">
                                        {{ detail.scoreText }}
                                    </span>
                                </span>
                                <a href="https://apkpure.com/vn/reviews/jp.co.nexon.fmja" class="details_score icon">
                                    {{ detail.reviews }} Đánh giá
                                </a>
                            </p>
                            <br>
                            <p class="details_sdk">
                                <span>{{ detail.version }}</span> by
                                <span class="developer">
                                    <a title="Xem thêm từ NEXON Co., Ltd." href="/vn/developer/NEXON%20Co.%2C%20Ltd.">
                                        {{ detail.developer }}
                                    </a>
                                </span>
                            </p>
                            <br>
                            <p class="date">{{ detail.released }}</p>
                        </div>
                    </div>
                    <div class="downalod_box">
                        <a class="download_apk_news da no-right-radius" data-dt-package_name="jp.co.nexon.fmja"
                            data-dt-apkid="b/APK/anAuY28ubmV4b24uZm1qYV8xMTNfOTEzOTQ2NGM" data-dt-version="11.0.07"
                            data-dt-file_size="119259910" data-dt-version_code="113"
                            href="/vn/fifa-mobile/jp.co.nexon.fmja/download"
                            title="Tải về apk EA SPORTS FC™ MOBILE phiên bản mới nhất" dt-eid="app"
                            dt-params="small_position=1&amp;package_name=jp.co.nexon.fmja&amp;position=1" dt-imp-once="true"
                            dt-imp-end-ignore="true" dt-send-beacon="true" dt-clck-ignore="false">
                            <span><i></i> Tải về APK</span>
                        </a>
                        <div class="details_how_to">
                            <a class="dt-how-to-install" rel="noopener" target="_blank" title="Cách để cài tệp XAPK / APK"
                                href="https://apkpure.com/vn/how-to/how-to-install-xapk-apk" style="color: #00A6ED"
                                dt-eid="link"
                                dt-params="model_type=1025&amp;module_name=&amp;small_position=2&amp;link_url=https%3A%2F%2Fapkpure.com%2Fvn%2Fhow-to%2Fhow-to-install-xapk-apk"
                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                                Cách để cài tệp XAPK / APK
                            </a>
                        </div>
                        <div class="follow-warp details">
                            <div class="custom-details-share-box share-toolbox">
                                <button data-sharer="facebook" class="follow-share-facebook" dt-eid="facebook_button"
                                    dt-params="small_position=11" dt-imp-once="true" dt-imp-end-ignore="true"
                                    dt-send-beacon="true">
                                    <i class="facebook">
                                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.01344 0.429375V2.54476H6.67841C6.19088 2.54476 5.86208 2.64091 5.69201 2.83322C5.52195 3.02553 5.43691 3.31399 5.43691 3.69861V5.21303H7.92841L7.59678 7.58482H5.43691V13.6666H2.83487V7.58482H0.666504V5.21303H2.83487V3.46623C2.83487 2.47264 3.12966 1.70208 3.71923 1.15454C4.30879 0.606993 5.09394 0.333221 6.07467 0.333221C6.908 0.333221 7.55426 0.365273 8.01344 0.429375Z">
                                            </path>
                                        </svg>
                                    </i>
                                </button>
                                <button data-sharer="twitter" class="follow-share-twitter" dt-eid="twitter_button"
                                    dt-params="small_position=12" dt-imp-once="true" dt-imp-end-ignore="true"
                                    dt-send-beacon="true">
                                    <svg class="svg-align telegram" style="height: 14px; width: 14px;">
                                    </svg>
                                </button>
                                <button data-sharer="whatsapp" class="follow-share-whatsapp" dt-eid="whatsapp_button"
                                    dt-params="small_position=13" dt-imp-once="true" dt-imp-end-ignore="true"
                                    dt-send-beacon="true">
                                    <i class="whatsapp">
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M11.8687 10.6716C11.645 10.6716 11.2145 11.5073 10.956 11.5073C10.8886 11.5045 10.8232 11.4838 10.7666 11.4472C10.2844 11.2055 9.86228 10.956 9.46606 10.5772C9.13838 10.267 8.77703 9.8016 8.58823 9.39696C8.56218 9.35863 8.54701 9.31395 8.54434 9.26769C8.54434 9.06927 9.13958 8.6995 9.13958 8.37182C9.13958 8.28584 8.70067 7.11521 8.63934 6.9679C8.55336 6.74424 8.51067 6.67509 8.27859 6.67509C8.16615 6.67509 8.06214 6.64924 7.95993 6.64924C7.77835 6.64924 7.64126 6.71838 7.51139 6.83863C7.09773 7.22644 6.8909 7.63108 6.87407 8.19987V8.26841C6.86505 8.86365 7.15786 9.45708 7.48554 9.93988C8.22508 11.0342 8.99227 11.9901 10.2236 12.5493C10.594 12.7219 11.4472 13.0832 11.8602 13.0832C12.3515 13.0832 13.1529 12.7736 13.3501 12.2908C13.4283 12.0924 13.4968 11.8519 13.4968 11.6366C13.4968 11.6017 13.4968 11.55 13.4788 11.5073C13.4187 11.4039 12.0154 10.6716 11.8687 10.6716ZM10.1202 15.2369C9.06983 15.2369 8.02787 14.9182 7.14884 14.341L5.0643 15.0036L5.74492 12.9972C5.07349 12.0767 4.7114 10.9669 4.71077 9.82745C4.71077 6.84825 7.13982 4.4192 10.1202 4.4192C13.1006 4.4192 15.5303 6.84765 15.5303 9.82685C15.5303 12.8078 13.1012 15.2369 10.1202 15.2369ZM10.1202 3.33334C6.53677 3.33334 3.62671 6.2446 3.62671 9.82685C3.62671 11.0077 3.94538 12.1705 4.55625 13.1782L3.38501 16.6667L6.97688 15.5123C7.9659 16.0583 9.08017 16.337 10.2098 16.3209C11.3394 16.3048 12.4453 15.9944 13.4183 15.4205C14.3914 14.8466 15.198 14.0288 15.7586 13.048C16.3191 12.0672 16.6143 10.9572 16.6149 9.82745C16.6149 6.2452 13.7037 3.33334 10.1202 3.33334Z">
                                            </path>
                                        </svg>
                                    </i>
                                </button>
                                <button data-sharer="more" class="share-more follow-share-more" dt-eid="share_button"
                                    dt-params="small_position=10" dt-imp-once="true" dt-imp-end-ignore="true"
                                    dt-send-beacon="true">
                                    <i class="share-3">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.48018 5.51732L9.00038 3L11.5206 5.51924M9.0023 9.71958V3M11.8806 7.79942H13.3207C13.448 7.79942 13.5701 7.85 13.6602 7.94002C13.7502 8.03005 13.8008 8.15215 13.8008 8.27946V14.52C13.8008 14.6473 13.7502 14.7694 13.6602 14.8594C13.5701 14.9494 13.448 15 13.3207 15H4.68004C4.55273 15 4.43063 14.9494 4.3406 14.8594C4.25058 14.7694 4.2 14.6473 4.2 14.52V8.27946C4.2 8.15215 4.25058 8.03005 4.3406 7.94002C4.43063 7.85 4.55273 7.79942 4.68004 7.79942H6.12015"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </i>
                                </button>
                                <span class="share-counter">250</span>
                            </div>
                            <button class="follow-but follow-but-pc" data-package-name="jp.co.nexon.fmja"
                                data-title="Đăng ký để nhận được tin tức và cập nhật mới nhất của EA SPORTS FC™ MOBILE."
                                data-county="VN" dt-cmd="hold=false" data-follow="false" dt-eid="follow_button"
                                dt-params="small_position=9&amp;is_followed=0&amp;page_language=vn&amp;area=VN&amp;package_name=jp.co.nexon.fmja"
                                dt-clck-ignore="true" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                                <i class="plus"></i>
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="above-info" dt-eid="card" dt-params="model_type=1151&amp;module_name=about_app_card&amp;position=8"
                dt-clck-ignore="true" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                <div class="card">
                    <div class="des-box limit">
                        <div class="description">
                            <div class="description-title-box">
                                <h2>Giới thiệu về {{ detail.title }}</h2>
                                <div class="translate-btns" data-package-name="jp.co.nexon.fmja" data-local-lang="vi"
                                    data-active-translate-lang="vi">
                                    <span class="translate-btn more flex items-center">
                                        <i class="world">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 0C2.67692 0 0 2.67692 0 6C0 9.32308 2.67692 12 6 12C9.32308 12 12 9.32308 12 6C12 2.67692 9.32308 0 6 0ZM0.969231 6.46154H2.81538C2.86154 7.10769 2.90769 7.75385 3.04615 8.30769H1.47692C1.2 7.75385 1.01538 7.10769 0.969231 6.46154ZM6.46154 2.76923V1.06154C6.92308 1.29231 7.38462 1.93846 7.75385 2.76923H6.46154ZM8.03077 3.69231C8.16923 4.24615 8.26154 4.89231 8.30769 5.53846H6.46154V3.69231H8.03077ZM5.53846 1.06154V2.76923H4.24615C4.61538 1.89231 5.07692 1.29231 5.53846 1.06154ZM5.53846 3.69231V5.53846H3.69231C3.73846 4.89231 3.83077 4.24615 3.96923 3.69231H5.53846ZM2.76923 5.53846H0.923077C0.969231 4.89231 1.15385 4.24615 1.47692 3.69231H3C2.90769 4.24615 2.81538 4.89231 2.76923 5.53846ZM3.69231 6.46154H5.53846V8.30769H3.96923C3.83077 7.75385 3.73846 7.10769 3.69231 6.46154ZM5.53846 9.23077V10.9385C5.07692 10.7077 4.61538 10.0615 4.24615 9.23077H5.53846ZM6.46154 10.9385V9.23077H7.75385C7.38462 10.1077 6.92308 10.7077 6.46154 10.9385ZM6.46154 8.30769V6.46154H8.30769C8.26154 7.10769 8.16923 7.75385 8.03077 8.30769H6.46154ZM9.23077 6.46154H11.0769C11.0308 7.10769 10.8462 7.75385 10.5231 8.30769H9C9.09231 7.75385 9.18462 7.10769 9.23077 6.46154ZM9.23077 5.53846C9.18462 4.89231 9.13846 4.24615 9 3.69231H10.5231C10.8 4.24615 10.9846 4.89231 11.0769 5.53846H9.23077ZM9.92308 2.76923H8.72308C8.53846 2.21538 8.30769 1.75385 8.03077 1.33846C8.76923 1.66154 9.41539 2.16923 9.92308 2.76923ZM3.96923 1.33846C3.69231 1.75385 3.46154 2.21538 3.27692 2.76923H2.07692C2.58462 2.16923 3.23077 1.66154 3.96923 1.33846ZM2.07692 9.23077H3.27692C3.46154 9.78462 3.69231 10.2462 3.96923 10.6615C3.23077 10.3385 2.58462 9.83077 2.07692 9.23077ZM8.03077 10.6615C8.30769 10.2462 8.53846 9.78462 8.72308 9.23077H9.92308C9.41539 9.83077 8.76923 10.3385 8.03077 10.6615Z"
                                                    fill="#00A6ED"></path>
                                            </svg>
                                        </i>
                                        <span class="lang">Tiếng Việt</span>
                                    </span>
                                </div>
                            </div>
                            <div class="content">
                                <div class="translate-content">
                                    {{ detail.description }}
                                </div>
                                <div class="loading-box">
                                    <div class="translate-loading-icon"></div>
                                    <div class="translate-loading-text">Đang tải bản dịch ...</div>
                                </div>
                            </div>
                            <div class="additional" dt-eid="card"
                                dt-params="model_type=1027&amp;module_name=&amp;position=2" dt-clck-ignore="true"
                                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                                <h3>Thông tin thêm Trò chơi</h3>
                                <div class="additional-content">
                                    <div class="additional-item">
                                        <p class="title">Phiên bản mới nhất</p>
                                        <p class="additional-info flex items-center">
                                            <a class="requestupdate ga" rel="noopener" target="_blank"
                                                href="/vn/need-update.html?pkg=jp.co.nexon.fmja">
                                                <img width="16" height="16" class="req_update"
                                                    src="https://static.apkpure.com/mobile/static/imgs/requpdate.png">
                                            </a>
                                            {{ detail.version }}
                                        </p>
                                    </div>
                                    <div class="additional-item">
                                        <p class="title">Được tải lên bởi</p>
                                        <p class="additional-info">

                                        </p>
                                    </div>
                                    <div class="additional-item">
                                        <p class="title">Yêu cầu Android</p>
                                        <p class="additional-info">Android 5.1+</p>
                                    </div>
                                    <div class="additional-item">
                                        <p class="title">Available on</p>
                                        <p class="additional-info">
                                            <a class="ga" rel="nofollow noopener" target="_blank"
                                                href="https://play.google.com/store/apps/details?id=jp.co.nexon.fmja">
                                                <img width="84.46" height="18" class="get_it_gp"
                                                    src="https://static.apkpure.com/mobile/static/imgs/gp_logo.png">
                                            </a>
                                        </p>
                                    </div>
                                    <div class="additional-item">
                                        <p class="title">Danh mục</p>
                                        <p class="additional-info">
                                            <a title="Tải về nhiều trò chơi Thể thao hơn" href="/vn/game_sports">
                                                Miễn phí
                                                Thể thao TRÒ CHƠI
                                            </a>
                                        </p>
                                    </div>
                                    <div class="additional-item">
                                        <p class="title">Báo cáo</p>
                                        <p class="additional-info">
                                            <a rel="nofollow noopener" href="/vn/report-content.html?pkg=jp.co.nexon.fmja"
                                                target="_blank">
                                                Gắn cờ là không phù hợp
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tag-box">
                        <span class="tag-item" v-for="category in detail.categories">
                            <NuxtLink to="/vn/sports">
                                {{ category.name }}
                            </NuxtLink>
                        </span>
                    </div>
                </div>
            </div>
            <div class="screen-wrap">
                <div class="title-bar no-more">
                    <h3>{{ detail.title }} Ảnh chụp màn hình</h3>
                </div>
                <div class="screenbox" dt-eid="card" dt-params="model_type=1017&amp;module_name=materials&amp;position=1"
                    dt-clck-ignore="true" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <div class="screen" id="screen">
                        <div class="b">
                            <NuxtLink v-for='screen in detail.screenshots'>
                                <img :src='screen'>
                            </NuxtLink>
                        </div>
                    </div>
                    <button type="button" class="det-pic-control" id="prev" go=""></button>
                    <button type="button" class="det-pic-control go" id="next" go=""></button>
                </div>
            </div>
            <div class="old-versions" dt-eid="card"
                dt-params="model_type=1152&amp;module_name=old_version_card&amp;position=7" dt-imp-once="true"
                dt-imp-end-ignore="true" dt-send-beacon="true">
                <a class="title-bar" href="https://apkpure.com/vn/fifa-mobile/jp.co.nexon.fmja/versions" target="_blank"
                    rel="noopener">
                    <h3>Phiên bản cũ của {{ detail.title }}</h3>
                </a>
                <div class="card version-list">
                    <a class="version-item dt-old-versions-item" href="/vn/fifa-mobile/jp.co.nexon.fmja/download"
                        dt-eid="version_box" dt-params="small_position=1&amp;version=11.0.07&amp;version_code=113"
                        dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                        <div class="version-info">
                            <h4 class="apk-name">{{ detail.title }} {{ detail.version }}</h4>
                            <p></p>
                            <p class="other-infos">
                                <span class="size">237.5 MB</span>
                                <span class="update">Sep 21, 2023</span>
                            </p>
                        </div>
                        <span class="download old_versions_download">
                            <i class="mobile-download-icon">
                                <svg class="mobile-download-cion" width="16" height="16" viewBox="0 0 16 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.46135 5.7733C5.30722 5.61921 5.05718 5.61921 4.90306 5.7733L4.34465 6.33173C4.19052 6.48586 4.19052 6.73575 4.34465 6.89002L7.49115 10.0364C7.50478 10.0502 7.75528 10.1999 8.00428 10.1997C8.2506 10.1996 8.49539 10.05 8.509 10.0364L11.6554 6.89002C11.8095 6.73576 11.8095 6.48586 11.6554 6.33173L11.097 5.7733C10.9429 5.61921 10.6929 5.61921 10.5388 5.7733L8.76199 7.55016V3.71443C8.76199 3.50409 8.59133 3.33337 8.38096 3.33337H7.61908C7.40877 3.33337 7.2382 3.50409 7.2382 3.71443V7.55016L5.46135 5.7733ZM4.1904 13.2472H11.8095C12.6511 13.2472 13.3333 12.5652 13.3333 11.7235V9.81867C13.3333 9.60834 13.1627 9.43779 12.9524 9.43779H12.1905C11.9801 9.43779 11.8095 9.60834 11.8095 9.81867V10.9616C11.8095 11.3824 11.4684 11.7235 11.0476 11.7235H4.95229C4.53148 11.7235 4.1904 11.3824 4.1904 10.9616V9.81867C4.1904 9.60834 4.01987 9.43779 3.80953 9.43779H3.0475C2.83729 9.43779 2.66663 9.60834 2.66663 9.81867V11.7235C2.66663 12.5652 3.34891 13.2472 4.1904 13.2472Z"
                                        fill="white"></path>
                                </svg>
                            </i>
                            <span>Tải về</span>
                        </span>
                    </a>
                    <a class="more-version" href="https://apkpure.com/vn/fifa-mobile/jp.co.nexon.fmja/versions">
                        Tất cả các phiên bản
                    </a>
                </div>
            </div>
            <div class="list-wrap dt-similar-new" dt-eid="card"
                dt-params="model_type=1016&amp;module_name=similar-apps&amp;position=9" dt-imp-once="true"
                dt-imp-end-ignore="true" dt-send-beacon="true">
                <div class="apk-list-with">
                    <a class="title-bar" href="/vn/similar/jp.co.nexon.fmja">
                        <h3>Các trò chơi như {{ detail.title }}</h3>
                    </a>
                    <div class="scroll-box">
                        <NuxtLink class="apk" v-for='similar in similarApp' :to="generateUrl(similar.title, similar.appId)">
                            <img class="lazy1 loaded"
                                :src="similar.icon"
                                :alt="similar.summary">
                            <div class="content">
                                <div class="stars-title title">{{ similar.summary }}</div>
                                <div class="stars-box">
                                    <span class="star">{{ similar.scoreText }}</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang='ts'>

const { $customFetch } = useNuxtApp();
const route = useRoute();
const { itm } = route.query;
const detail = ref();
const similarApp = ref();

async function GetById() {
    try {
        let data = await $customFetch(`/home/${itm}`);
        detail.value = data.result;
    }
    catch (e) {

    }
}

function generateUrl(title: string, id: string) {
    const regex = /^([^:]+):\s(.+)$/;
    const match = regex.exec(title);
    if (match) {
        // Trích xuất hai phần từ kết quả của regex
        const part1 = match[1];
        const part2 = match[2];

        // Thay thế dấu ":" bằng dấu "-"
        const result = (part1 + "-" + part2).replace(/\s/g, '-') + `?itm=${id}`;

        return result
    }
    return '';
}

async function GetSimilarByApp() {
    try {
        let data = await $customFetch(`/home/similar?id=${detail.value._id}&limit=${10}`);
        similarApp.value = data.result;
    }
    catch (e) {

    }
}

await GetById();

await GetSimilarByApp();
</script>