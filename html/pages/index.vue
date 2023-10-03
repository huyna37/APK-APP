<script setup lang="ts">
import category from '@/unity/constants.js';

let shoppings = ref<any>([]);
let games = ref<any>([]);
let populars = ref<any>([]);
async function getShoppings() {
    let query = {
        page: 1,
        limit: 20,
        sortField: 'views',
        sortOrder: 'desc',
        filterOptions: JSON.stringify({ "genreId": category.SHOPPING })
    }
    const { data } = await customFetch<any>(`/home/`, {
        params: query
    });
    shoppings = data?.value?.result?.data;
    console.log('shopping',data?.value?.result?.data[0])
}

async function getGames() {
    let query = {
        page: 1,
        limit: 20,
        sortField: 'views',
        sortOrder: 'desc',
        filterOptions: JSON.stringify({ "genreId": category.GAME })
    }
    const { data } = await customFetch<any>(`/home/`, {
        params: query
    });
    games = data?.value?.result?.data;
}

async function getPopulars() {
    let query = {
        page: 2,
        limit: 20,
        sortField: 'views',
        sortOrder: 'asc',
        filterOptions: JSON.stringify({ "genreId": category.COMICS })
    }
    const { data } = await customFetch<any>(`/home/`, {
        params: query
    });

    populars = data?.value?.result?.data;
    console.log('popular',data?.value?.result?.data[0])
}
await getShoppings();
await getGames();
await getPopulars();


</script>

<template>
    <div class="main-body">
        <div class="left">
            <div id="top-slide-banner" class="slide-banner" dt-eid="card"
                dt-params="model_type=1007&amp;module_name=banner&amp;position=1" dt-clck-ignore="true" dt-imp-once="true"
                dt-imp-end-ignore="true" dt-send-beacon="true">
                <div class="container">
                    <div class="tempWrap" style="overflow:hidden; position:relative;">
                        <div class="list"
                            style="width: 5208px; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 0ms; transform: translate(-868px, 0px) translateZ(0px);">
                            <a title="Cash’em All: Play &amp;amp; Win APK" class="banner-item"
                                href="/vn/cash%E2%80%99em-all-play-win/online.cashemall.app"
                                data-dt-app="online.cashemall.app" data-dt-recid="" dt-eid="app" delegationsource="true"
                                dt-params="small_position=4&amp;package_name=online.cashemall.app" dt-imp-once="true"
                                dt-imp-end-ignore="true" dt-send-beacon="true"
                                style="display: table-cell; vertical-align: top; width: 868px;"><img
                                    class="banner-bg lazy loaded" alt="Cash’em All: Play &amp; Win"
                                    src="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-original="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-srcset="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    sizes="(max-width: 996px) 100vw, 868px" width="360" height="170"
                                    srcset="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    data-was-processed="true">
                                <div class="mask"></div>
                                <div class="info"><img class="icon lazy" alt="Cash’em All: Play &amp; Win"
                                        src="data:image/gif;base64,R0lGODlhAQABAPAAAPX19QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEAgD/ACwAAAAAAQABAAACAkQBADs="
                                        data-original="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfaWNvbl8xNTk0NDA0NDY5XzAwOA/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-srcset="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfaWNvbl8xNTk0NDA0NDY5XzAwOA/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        width="32" height="32">
                                    <div class="name">Cash’em All: Play &amp; Win</div>
                                    <div class="button"
                                        apkpure-click-go="/vn/cash%E2%80%99em-all-play-win/online.cashemall.app/download"
                                        dt-eid="download_button" delegationsource="true"
                                        dt-params="module_name=download_button&amp;small_position=5" dt-imp-once="true"
                                        dt-imp-end-ignore="true" dt-send-beacon="true">Tải về</div>
                                </div>
                            </a><a title="Pokémon GO APK" class="banner-item"
                                href="/vn/pokemon-go/com.nianticlabs.pokemongo" data-dt-app="com.nianticlabs.pokemongo"
                                data-dt-recid="" dt-eid="app" delegationsource="true"
                                dt-params="small_position=1&amp;package_name=com.nianticlabs.pokemongo" dt-imp-once="true"
                                dt-imp-end-ignore="true" dt-send-beacon="true"
                                style="display: table-cell; vertical-align: top; width: 868px;"><img class="banner-bg"
                                    alt="Pokémon GO"
                                    src="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    srcset="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    sizes="(max-width: 996px) 100vw, 868px" width="360" height="170">
                                <div class="mask"></div>
                                <div class="info"><img class="icon lazy loaded" alt="Pokémon GO"
                                        src="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-original="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-srcset="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        width="32" height="32"
                                        srcset="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        data-was-processed="true">
                                    <div class="name">Pokémon GO</div>
                                    <div class="button" apkpure-click-go="/vn/pokemon-go/com.nianticlabs.pokemongo/download"
                                        dt-eid="download_button" delegationsource="true"
                                        dt-params="module_name=download_button&amp;small_position=5" dt-imp-once="true"
                                        dt-imp-end-ignore="true" dt-send-beacon="true">Tải về</div>
                                </div>
                            </a><a title="Avast Cleanup – Phone Cleaner APK" class="banner-item"
                                href="/vn/avast-cleanup-%E2%80%93-phone-cleaner/com.avast.android.cleaner"
                                data-dt-app="com.avast.android.cleaner" data-dt-recid="" dt-eid="app"
                                delegationsource="true"
                                dt-params="small_position=2&amp;package_name=com.avast.android.cleaner" dt-imp-once="true"
                                dt-imp-end-ignore="true" dt-send-beacon="true"
                                style="display: table-cell; vertical-align: top; width: 868px;"><img
                                    class="banner-bg lazy loaded" alt="Avast Cleanup – Phone Cleaner"
                                    src="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-original="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-srcset="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    sizes="(max-width: 996px) 100vw, 868px" width="360" height="170"
                                    srcset="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9iYW5uZXJfdmktVk5fMTYyMTg1ODMxM18wNTY/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    data-was-processed="true">
                                <div class="mask"></div>
                                <div class="info"><img class="icon lazy loaded" alt="Avast Cleanup – Phone Cleaner"
                                        src="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9pY29uXzE2NzMwOTIyNzNfMDM2/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-original="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9pY29uXzE2NzMwOTIyNzNfMDM2/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-srcset="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9pY29uXzE2NzMwOTIyNzNfMDM2/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        width="32" height="32"
                                        srcset="https://image.winudf.com/v2/image1/Y29tLmF2YXN0LmFuZHJvaWQuY2xlYW5lcl9pY29uXzE2NzMwOTIyNzNfMDM2/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        data-was-processed="true">
                                    <div class="name">Avast Cleanup – Phone Cleaner</div>
                                    <div class="button"
                                        apkpure-click-go="/vn/avast-cleanup-%E2%80%93-phone-cleaner/com.avast.android.cleaner/download"
                                        dt-eid="download_button" delegationsource="true"
                                        dt-params="module_name=download_button&amp;small_position=5" dt-imp-once="true"
                                        dt-imp-end-ignore="true" dt-send-beacon="true">Tải về</div>
                                </div>
                            </a><a title="TuneIn Radio: News, Music &amp;amp; FM APK" class="banner-item"
                                href="/vn/tunein-radio-news-music-fm/tunein.player" data-dt-app="tunein.player"
                                data-dt-recid="" dt-eid="app" delegationsource="true"
                                dt-params="small_position=3&amp;package_name=tunein.player" dt-imp-once="true"
                                dt-imp-end-ignore="true" dt-send-beacon="true"
                                style="display: table-cell; vertical-align: top; width: 868px;"><img
                                    class="banner-bg lazy loaded" alt="TuneIn Radio: News, Music &amp; FM"
                                    src="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-original="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-srcset="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    sizes="(max-width: 996px) 100vw, 868px" width="360" height="170"
                                    srcset="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9iYW5uZXJfMTY4NjEyNjk0Ml8wNjU/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    data-was-processed="true">
                                <div class="mask"></div>
                                <div class="info"><img class="icon lazy loaded" alt="TuneIn Radio: News, Music &amp; FM"
                                        src="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9pY29uXzE1NTcyNjIwNDNfMDU4/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-original="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9pY29uXzE1NTcyNjIwNDNfMDU4/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-srcset="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9pY29uXzE1NTcyNjIwNDNfMDU4/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        width="32" height="32"
                                        srcset="https://image.winudf.com/v2/image1/dHVuZWluLnBsYXllcl9pY29uXzE1NTcyNjIwNDNfMDU4/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        data-was-processed="true">
                                    <div class="name">TuneIn Radio: News, Music &amp; FM</div>
                                    <div class="button"
                                        apkpure-click-go="/vn/tunein-radio-news-music-fm/tunein.player/download"
                                        dt-eid="download_button" delegationsource="true"
                                        dt-params="module_name=download_button&amp;small_position=5" dt-imp-once="true"
                                        dt-imp-end-ignore="true" dt-send-beacon="true">Tải về</div>
                                </div>
                            </a><a title="Cash’em All: Play &amp;amp; Win APK" class="banner-item"
                                href="/vn/cash%E2%80%99em-all-play-win/online.cashemall.app"
                                data-dt-app="online.cashemall.app" data-dt-recid="" dt-eid="app" delegationsource="true"
                                dt-params="small_position=4&amp;package_name=online.cashemall.app" dt-imp-once="true"
                                dt-imp-end-ignore="true" dt-send-beacon="true"
                                style="display: table-cell; vertical-align: top; width: 868px;"><img
                                    class="banner-bg lazy loaded" alt="Cash’em All: Play &amp; Win"
                                    src="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-original="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    data-srcset="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    sizes="(max-width: 996px) 100vw, 868px" width="360" height="170"
                                    srcset="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfYmFubmVyXzE2OTQwNjA1ODBfMDg1/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    data-was-processed="true">
                                <div class="mask"></div>
                                <div class="info"><img class="icon lazy loaded" alt="Cash’em All: Play &amp; Win"
                                        src="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfaWNvbl8xNTk0NDA0NDY5XzAwOA/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-original="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfaWNvbl8xNTk0NDA0NDY5XzAwOA/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-srcset="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfaWNvbl8xNTk0NDA0NDY5XzAwOA/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        width="32" height="32"
                                        srcset="https://image.winudf.com/v2/image1/b25saW5lLmNhc2hlbWFsbC5hcHBfaWNvbl8xNTk0NDA0NDY5XzAwOA/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        data-was-processed="true">
                                    <div class="name">Cash’em All: Play &amp; Win</div>
                                    <div class="button"
                                        apkpure-click-go="/vn/cash%E2%80%99em-all-play-win/online.cashemall.app/download"
                                        dt-eid="download_button" delegationsource="true"
                                        dt-params="module_name=download_button&amp;small_position=5" dt-imp-once="true"
                                        dt-imp-end-ignore="true" dt-send-beacon="true">Tải về</div>
                                </div>
                            </a><a title="Pokémon GO APK" class="banner-item"
                                href="/vn/pokemon-go/com.nianticlabs.pokemongo" data-dt-app="com.nianticlabs.pokemongo"
                                data-dt-recid="" dt-eid="app" delegationsource="true"
                                dt-params="small_position=1&amp;package_name=com.nianticlabs.pokemongo" dt-imp-once="true"
                                dt-imp-end-ignore="true" dt-send-beacon="true"
                                style="display: table-cell; vertical-align: top; width: 868px;"><img class="banner-bg"
                                    alt="Pokémon GO"
                                    src="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=360&amp;fakeurl=1&amp;type=.webp"
                                    srcset="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=720&amp;fakeurl=1&amp;type=.webp 720w, https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=1080&amp;fakeurl=1&amp;type=.webp 1080w, https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19iYW5uZXJfMTU1NTU2MDE5OF8wNTg/banner.webp?w=1736&amp;fakeurl=1&amp;type=.webp 1736w"
                                    sizes="(max-width: 996px) 100vw, 868px" width="360" height="170">
                                <div class="mask"></div>
                                <div class="info"><img class="icon lazy loaded" alt="Pokémon GO"
                                        src="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-original="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=48&amp;fakeurl=1&amp;type=.webp"
                                        data-srcset="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        width="32" height="32"
                                        srcset="https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19pY29uXzE2OTQwMTUwNTlfMDE5/icon.webp?w=96&amp;fakeurl=1&amp;type=.webp 2x"
                                        data-was-processed="true">
                                    <div class="name">Pokémon GO</div>
                                    <div class="button" apkpure-click-go="/vn/pokemon-go/com.nianticlabs.pokemongo/download"
                                        dt-eid="download_button" delegationsource="true"
                                        dt-params="module_name=download_button&amp;small_position=5" dt-imp-once="true"
                                        dt-imp-end-ignore="true" dt-send-beacon="true">Tải về</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <ul class="dots">
                    <li class="on">1</li>
                    <li class="">2</li>
                    <li class="">3</li>
                    <li class="">4</li>
                </ul>
                <div class="prev"></div>
                <div class="next"></div>
            </div>
            <div class="quick-access module no-scrollbar" dt-eid="card"
                dt-params="model_type=1251&amp;module_name=page_home_button&amp;position=2" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a title="Trò chơi" href="/vn/game"
                    data-dt-name="games" dt-eid="games" dt-params="small_position=1" dt-imp-once="true"
                    dt-imp-end-ignore="true" dt-send-beacon="true"><i class="icon"><svg width="22" height="22"
                            viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_179_1579)">
                                <path
                                    d="M22 11C22 18.5939 18.5939 22 11 22C3.40609 22 0 18.5939 0 11C0 3.40609 3.40609 0 11 0C18.5939 0 22 3.40609 22 11Z"
                                    fill="#FEAB36" fill-opacity="0.2"></path>
                                <path
                                    d="M16.4745 8.06745C14.7132 5.00947 12.0598 7.13679 12.0598 7.13679C11.8878 7.27412 11.5705 7.38745 11.3545 7.38812H10.6452C10.4292 7.38812 10.1118 7.27545 9.94051 7.13812C9.94051 7.13812 7.2872 5.0108 5.52587 8.06812C3.76522 11.1248 4.47455 14.4534 4.47455 14.4534C4.59855 15.2687 5.00854 15.8127 5.78187 15.7441C6.5532 15.6767 8.22652 13.5501 8.22652 13.5501C8.36452 13.3748 8.65452 13.2314 8.86919 13.2314L13.1292 13.2308C13.3445 13.2308 13.6345 13.3741 13.7725 13.5494C13.7725 13.5494 15.4458 15.6761 16.2185 15.7441C16.9905 15.8127 17.4011 15.2681 17.5251 14.4534C17.5251 14.4534 18.2351 11.1254 16.4745 8.06812V8.06745ZM9.39918 10.5561H8.48586V11.4868C8.48586 11.4868 8.29252 11.6428 7.99252 11.6388C7.69386 11.6341 7.55919 11.4688 7.55919 11.4688V10.5568H6.6952C6.6952 10.5568 6.5872 10.4401 6.55853 10.1328C6.53053 9.82544 6.67787 9.57744 6.67787 9.57744H7.59119V8.61211C7.59119 8.61211 7.77919 8.50545 8.04986 8.51345C8.32052 8.52278 8.51852 8.63011 8.51852 8.63011L8.51452 9.57677H9.37718C9.37718 9.57677 9.52785 9.78144 9.54051 10.0281C9.55318 10.2754 9.39852 10.5561 9.39852 10.5561H9.39918ZM13.5892 11.6161C13.1892 11.6161 12.8665 11.2748 12.8665 10.8528C12.8665 10.4294 13.1892 10.0888 13.5892 10.0888C13.9872 10.0888 14.3125 10.4294 14.3125 10.8528C14.3125 11.2748 13.9872 11.6168 13.5892 11.6168V11.6161ZM13.5892 9.51411C13.1892 9.51411 12.8665 9.17278 12.8665 8.75078C12.8665 8.32745 13.1892 7.98612 13.5892 7.98612C13.9872 7.98612 14.3125 8.32745 14.3125 8.75078C14.3125 9.17278 13.9872 9.51411 13.5892 9.51411ZM15.3891 10.6428C14.9891 10.6428 14.6672 10.3014 14.6672 9.87877C14.6672 9.45611 14.9898 9.11478 15.3898 9.11478C15.7878 9.11478 16.1131 9.45611 16.1131 9.87877C16.1131 10.3014 15.7878 10.6428 15.3898 10.6428H15.3891Z"
                                    fill="#FEAB36"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_179_1579">
                                    <rect width="22" height="22" rx="6" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </i>Trò chơi</a><a title="Ứng dụng" href="/vn/app" data-dt-name="apps" dt-eid="apps"
                    dt-params="small_position=2" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><i
                        class="icon"><svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_179_1766)">
                                <path
                                    d="M22.6666 11C22.6666 18.5939 19.2605 22 11.6666 22C4.07271 22 0.666626 18.5939 0.666626 11C0.666626 3.40609 4.07271 0 11.6666 0C19.2605 0 22.6666 3.40609 22.6666 11Z"
                                    fill="#FE706F" fill-opacity="0.1"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.7926 7.23399C17.34 8.45668 18.3333 10.3516 18.3333 12.4788H5C5 10.3515 5.99336 8.45661 7.54085 7.23393L6.46443 6.15587C6.26932 5.96046 6.26932 5.64364 6.46443 5.44823C6.65954 5.25282 6.97589 5.25282 7.171 5.44823L8.38601 6.66509C9.35459 6.11568 10.4741 5.80205 11.6667 5.80205C12.8593 5.80205 13.9788 6.11571 14.9474 6.66514L16.2973 5.31324C16.4924 5.11783 16.8087 5.11783 17.0038 5.31324C17.199 5.50865 17.199 5.82548 17.0038 6.02089L15.7926 7.23399ZM9.16667 9.69685C9.6269 9.69685 10 9.32319 10 8.86225C10 8.40132 9.6269 8.02766 9.16667 8.02766C8.70643 8.02766 8.33333 8.40132 8.33333 8.86225C8.33333 9.32319 8.70643 9.69685 9.16667 9.69685ZM14.4444 8.86225C14.4444 9.32319 14.0713 9.69685 13.611 9.69685C13.1508 9.69685 12.7777 9.32319 12.7777 8.86225C12.7777 8.40132 13.1508 8.02766 13.611 8.02766C14.0713 8.02766 14.4444 8.40132 14.4444 8.86225Z"
                                    fill="#FE706F"></path>
                                <path
                                    d="M18.3333 15.9997V13.0834H5V15.9997C5 16.4599 5.3731 16.833 5.83333 16.833H17.5C17.9602 16.833 18.3333 16.4599 18.3333 15.9997Z"
                                    fill="#FE706F"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_179_1766">
                                    <rect x="0.666626" width="22" height="22" rx="6" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </i>Ứng dụng</a><a title="Tin tức" href="https://apkpure.com/vn/news" data-dt-name="Tin tức"
                    dt-eid="button"
                    dt-params="small_position=3&amp;button_name=%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0ATin%20t%E1%BB%A9c"
                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><i class="icon"><svg width="23"
                            height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_179_1236)">
                                <path
                                    d="M22.3334 11C22.3334 18.5939 18.9273 22 11.3334 22C3.73946 22 0.333374 18.5939 0.333374 11C0.333374 3.40609 3.73946 0 11.3334 0C18.9273 0 22.3334 3.40609 22.3334 11Z"
                                    fill="#4087F7" fill-opacity="0.1"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.18909 16.9407C5.30899 17.0021 5.44135 17.0351 5.57601 17.0374C5.77226 17.0341 5.96221 16.9676 6.11771 16.8478L8.21482 15.2266H12.9701C14.3041 15.2266 15.5835 14.6967 16.5268 13.7534C17.4701 12.8101 18.0001 11.5307 18.0001 10.1966C18.0001 8.86261 17.4701 7.58321 16.5268 6.63991C15.5835 5.6966 14.3041 5.16666 12.9701 5.16666H9.69673C8.3627 5.16666 7.0833 5.6966 6.14 6.63991C5.19669 7.58321 4.66675 8.86261 4.66675 10.1966V16.1282C4.66683 16.2994 4.7161 16.467 4.8087 16.6111C4.9013 16.7551 5.03334 16.8695 5.18909 16.9407ZM8.79908 9.53502H13.8832C14.0115 9.53502 14.1345 9.48406 14.2252 9.39336C14.3159 9.30266 14.3669 9.17964 14.3669 9.05137C14.3669 8.92309 14.3159 8.80007 14.2252 8.70937C14.1345 8.61867 14.0115 8.56771 13.8832 8.56771H8.79908C8.67081 8.56771 8.54779 8.61867 8.45709 8.70937C8.36639 8.80007 8.31543 8.92309 8.31543 9.05137C8.31543 9.17964 8.36639 9.30266 8.45709 9.39336C8.54779 9.48406 8.67081 9.53502 8.79908 9.53502ZM8.79908 11.903H11.5849C11.7132 11.903 11.8362 11.852 11.9269 11.7613C12.0176 11.6706 12.0686 11.5476 12.0686 11.4193C12.0686 11.2911 12.0176 11.168 11.9269 11.0773C11.8362 10.9866 11.7132 10.9357 11.5849 10.9357H8.79908C8.67081 10.9357 8.54779 10.9866 8.45709 11.0773C8.36639 11.168 8.31543 11.2911 8.31543 11.4193C8.31543 11.5476 8.36639 11.6706 8.45709 11.7613C8.54779 11.852 8.67081 11.903 8.79908 11.903Z"
                                    fill="#4087F7"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_179_1236">
                                    <rect x="0.333374" width="22" height="22" rx="6" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </i>Tin tức</a></div>
        </div>
        <div class="right">
            <div class="search-box index_r_s" dt-eid="card"
                dt-params="model_type=1264&amp;module_name=search_box&amp;position=1" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                <form action="https://apkpure.com/vn/search" data-x_ll="/vn" method="get" class="formsearch"
                    onsubmit="onSideSearchSubmit(event)"><span class="text-box"><span class="twitter-typeahead"
                            style="position: relative; display: inline-block;"><input
                                class="autocomplete main-autocomplete tt-hint" autocomplete="off"
                                title="Nhập tên ứng dụng, tên gói, ID gói" type="text" readonly="" spellcheck="false"
                                tabindex="-1"
                                style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"
                                dir="ltr"><input class="autocomplete main-autocomplete tt-input" autocomplete="off"
                                title="Nhập tên ứng dụng, tên gói, ID gói" name="q" type="text" placeholder="APKPure"
                                spellcheck="false"
                                style="position: relative; vertical-align: top; background-color: transparent;">
                            <pre aria-hidden="true"
                                style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
                            <div class="tt-menu"
                                style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
                                <div class="tt-dataset tt-dataset-1"></div>
                            </div>
                        </span></span><span class="text-btn" title="Tìm kiếm APK"><input class="si" type="submit" value=""
                            dt-eid="search_button" dt-params="small_position=1" dt-imp-once="true" dt-imp-end-ignore="true"
                            dt-send-beacon="true"></span></form>
                <div class="trending-title">Tìm kiếm thịnh hành</div>
                <div class="trending-content"><a href="https://apkpure.com/vn/search?q=minecraft%20&amp;ici=hot_index"
                        title="minecraft " class="hot">minecraft </a></div>
            </div>
            <div class="aegon module right_apkpure" dt-eid="card"
                dt-params="model_type=1032&amp;module_name=apkpure_app&amp;position=3" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a
                    href="/vn/apkpure/com.apkpure.aegon/download/3194527-apk?utm_content=1006&amp;icn=aegon&amp;ici=text_home-m&amp;from=text_home-m?icn=aegon&amp;ici=text_home-m&amp;utm_content=1033"
                    title="Use APKPure App" rel="noopener" target="_blank" dt-eid="download_button"
                    dt-params="module_name=download_button&amp;small_position=1" dt-imp-once="true" dt-imp-end-ignore="true"
                    dt-send-beacon="true"><img class="icon" alt="Use APKPure App"
                        src="https://image.winudf.com/v2/upload/images/icon.png/image.webp?fakeurl=1&amp;w=90&amp;type=.webp"
                        width="40" height="40">
                    <div class="text">
                        <div class="name one-line">Use APKPure App<span class="score">8.4</span></div>
                        <div class="desc">Trình cài đặt XAPK/APK nhanh chóng và an toàn</div>
                    </div>
                    <div class="button">Tải về<span class="down-info"> v3.19.45 <span class="fsize">(<span>9.5
                                    MB</span>)</span></span></div>
                </a>
                <div class="shortcut supported" dt-eid="add_home_screen" dt-params="small_position=11" dt-imp-once="true"
                    dt-imp-end-ignore="true" dt-send-beacon="true">Thêm vào màn MH chính</div><a class="how-to"
                    title="Cách để cài tệp XAPK / APK" href="https://apkpure.com/vn/how-to/how-to-install-xapk-apk"
                    rel="noopener" target="_blank" dt-eid="download_button"
                    dt-params="module_name=download_button&amp;small_position=1" dt-imp-once="true" dt-imp-end-ignore="true"
                    dt-send-beacon="true">Cách để cài tệp XAPK / APK</a>
                <div class="social-network"><a href="https://t.me/apkpurechannel" title="Telegram" class="network telegram"
                        rel="nofollow noopener" target="_blank" dt-eid="share"
                        dt-params="small_position=7&amp;name=Telegram" dt-imp-once="true" dt-imp-end-ignore="true"
                        dt-send-beacon="true"><span>Telegram</span></a><a href="https://www.facebook.com/apkpure"
                        title="Facebook" class="network fb" rel="nofollow noopener" target="_blank" dt-eid="share"
                        dt-params="small_position=8&amp;name=Facebook" dt-imp-once="true" dt-imp-end-ignore="true"
                        dt-send-beacon="true"><span>Facebook</span></a><a href="https://twitter.com/apkpure"
                        title="Twitter X" class="network tw" rel="nofollow noopener" target="_blank" dt-eid="share"
                        dt-params="small_position=9&amp;name=Twitter%20X" dt-imp-once="true" dt-imp-end-ignore="true"
                        dt-send-beacon="true"><span>Twitter X</span></a><a
                        href="https://www.youtube.com/channel/UCbCOKdnt1yYk4S3I4a034XQ" title="YouTube" class="network glp"
                        rel="nofollow noopener" target="_blank" dt-eid="share"
                        dt-params="small_position=10&amp;name=YouTube" dt-imp-once="true" dt-imp-end-ignore="true"
                        dt-send-beacon="true"><span>YouTube</span></a></div>
            </div>
        </div>
        <div class="left">
            <div class="module discover" dt-eid="card"
                dt-params="model_type=1016&amp;module_name=discover_new&amp;position=4" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more" title="Phát hiện"
                    href="/vn/discover" dt-eid="more" dt-params="small_position=12" dt-imp-once="true"
                    dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Ứng Dụng Shopping Phổ biến</h3>
                </a>
                <div class="apk-list-1001 no-scrollbar enable-wrap">
                    <a class="apk" :title="shop.title" v-for="shop in shoppings"
                        :href="shop.title">
                        <div class="img-ratio"><img :src="shop.icon" class="icon lazy loaded" :alt="shop.title"
                                width="102" height="102"></div>
                        <div class="name double-lines">{{ shop.title }}</div>
                    </a>
                </div>
            </div>
            <div class="module popular-games" dt-eid="card"
                dt-params="model_type=1252&amp;module_name=popular_games_24h&amp;position=5" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Trò chơi phổ biến trong 24 giờ trước" href="/vn/game-24h" dt-eid="more"
                    dt-params="small_position=21" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Trò chơi phổ biến trong 24 giờ trước</h3>
                </a>
                <div class="apk-list-1002 no-scrollbar">
                    <a class="apk" v-for="game in games"
                        href="/vn/fifa-mobile/com.nexon.fmk" data-dt-app="com.nexon.fmk" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.nexon.fmk" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true">
                        <div class="img-ratio"><img class="icon lazy loaded" alt=" FIFA MOBILE - (FIFA Chino)  APK"
                                :src="game.icon"
                                width="102" height="102"></div>
                        <div class="name double-lines">{{ game.title }}</div>
                        <div class="score">{{ game.scoreText }}</div>
                    </a>
                </div>
            </div>
            <div class="module popular-apps" dt-eid="card"
                dt-params="model_type=1253&amp;module_name=popular_apps_24h&amp;position=6" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Ứng dụng phổ biến trong 24 giờ trước" href="/vn/app-24h" dt-eid="more"
                    dt-params="small_position=30" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Ứng dụng phổ biến trong 24 giờ trước</h3>
                </a>
                <div class="apk-list-1002 no-scrollbar">    
                    <a class="apk" v-for="popular in populars"
                        href="/vn/fifa-mobile/com.nexon.fmk" data-dt-app="com.nexon.fmk" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.nexon.fmk" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true">
                        <div class="img-ratio"><img class="icon lazy loaded" alt=" FIFA MOBILE - (FIFA Chino)  APK"
                            :src="popular.icon"
                                width="102" height="102"></div>
                        <div class="name double-lines">{{ popular.title }}</div>
                        <div class="score">{{ popular.scoreText }}</div>
                    </a></div>
            </div>
            <div class="module popular-articles" dt-eid="card"
                dt-params="model_type=1254&amp;module_name=popular_articles_24h&amp;position=7" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Các bài báo phổ biến trong 24 giờ qua"
                    href="https://apkpure.com/vn/search?q=popular_article&amp;sat=articles&amp;ao=most&amp;at=home_recommend">
                    <h3 class="name">Các bài báo phổ biến trong 24 giờ qua</h3>
                </a>
                <div class="article-list">
                    <a class="article" href="/vn/howto/how-to-download-ace-racer" v-for="popular in populars"
                        title="Cách Tải Và Chơi Game Ace Racer Trên IOS, Android"
                            alt="Cách Tải Và Chơi Game Ace Racer Trên IOS, Android"
                            :src="popular.icon">
                        <img class="article-banner lazy loaded" :src="popular.icon"/>
                        <div class="text">
                            <div class="article-title double-lines">{{popular.title}}</div>
                            <div class="updated one-line">Mar 17, 2023</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="module editor-choice" dt-eid="card"
                dt-params="model_type=1255&amp;module_name=editor_choice&amp;position=8" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Lựa chọn của biên tập viên hàng tuần" href="/vn/editor-choice" dt-eid="more"
                    dt-params="small_position=44" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Lựa chọn của biên tập viên hàng tuần</h3>
                </a>
                <div class="apk-list-1003 no-scrollbar"><a class="apk" title="FIFA Mobile - (FIFA Soccer) APK"
                        href="/vn/fifa-mobile/com.ea.gp.fifamobile" data-dt-app="com.ea.gp.fifamobile" data-dt-recid=""
                        dt-eid="app" dt-params="small_position=1&amp;package_name=com.ea.gp.fifamobile" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="banner lazy loaded"
                            alt="FIFA Mobile - (FIFA Soccer) APK"
                            src="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfYmFubmVyXzE2NDY3OTkyNTJfMDU1/banner.jpg?w=260&amp;fakeurl=1&amp;type=.webp"
                            data-original="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfYmFubmVyXzE2NDY3OTkyNTJfMDU1/banner.jpg?w=260&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfYmFubmVyXzE2NDY3OTkyNTJfMDU1/banner.jpg?w=520&amp;fakeurl=1&amp;type=.webp 2x"
                            width="260" height="134"
                            srcset="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfYmFubmVyXzE2NDY3OTkyNTJfMDU1/banner.jpg?w=520&amp;fakeurl=1&amp;type=.webp 2x"
                            data-was-processed="true">
                        <div class="info"><img class="icon lazy loaded" alt="FIFA Mobile - (FIFA Soccer) APK"
                                src="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfaWNvbl8xNjgxMTg2ODA1XzAxMw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfaWNvbl8xNjgxMTg2ODA1XzAxMw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfaWNvbl8xNjgxMTg2ODA1XzAxMw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                width="48" height="48"
                                srcset="https://image.winudf.com/v2/image1/Y29tLmVhLmdwLmZpZmFtb2JpbGVfaWNvbl8xNjgxMTg2ODA1XzAxMw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                data-was-processed="true">
                            <div class="text">
                                <div class="name one-line">FIFA Mobile - (FIFA Soccer)</div>
                                <div class="desc one-line">EA SPORTS FC™ MOBILE sẽ ra mắt vào ngày 26 tháng 9! Trở thành
                                    Người sáng lập và kiếm được phần thưởng lớn.</div>
                            </div>
                            <div class="score">8.0</div>
                        </div>
                    </a><a class="apk" title="PUBG MOBILE LITE APK" href="/vn/pubg-lite-android/com.tencent.iglite"
                        data-dt-app="com.tencent.iglite" data-dt-recid="" dt-eid="app"
                        dt-params="small_position=2&amp;package_name=com.tencent.iglite" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="banner lazy" alt="PUBG MOBILE LITE APK"
                            src="data:image/gif;base64,R0lGODlhAQABAPAAAPX19QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEAgD/ACwAAAAAAQABAAACAkQBADs="
                            data-original="https://image.winudf.com/v2/user/admin/YWRtaW5fMTAyNHg1MDAuanBnXzE2NzgyNDYxOTEyOTY/banner.jpg?w=260&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/user/admin/YWRtaW5fMTAyNHg1MDAuanBnXzE2NzgyNDYxOTEyOTY/banner.jpg?w=520&amp;fakeurl=1&amp;type=.webp 2x"
                            width="260" height="134">
                        <div class="info"><img class="icon lazy loaded" alt="PUBG MOBILE LITE APK"
                                src="https://image.winudf.com/v2/image1/Y29tLnRlbmNlbnQuaWdsaXRlX2ljb25fMTY3MTA3NTA0NV8wNDA/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLnRlbmNlbnQuaWdsaXRlX2ljb25fMTY3MTA3NTA0NV8wNDA/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLnRlbmNlbnQuaWdsaXRlX2ljb25fMTY3MTA3NTA0NV8wNDA/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                width="48" height="48"
                                srcset="https://image.winudf.com/v2/image1/Y29tLnRlbmNlbnQuaWdsaXRlX2ljb25fMTY3MTA3NTA0NV8wNDA/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                data-was-processed="true">
                            <div class="text">
                                <div class="name one-line">PUBG MOBILE LITE</div>
                                <div class="desc one-line"> PUBG MOBILE LITE sử dụng Unreal Engine 4 và xây dựng dựa trên
                                    lối chơi PUBG MOBILE gốc để tạo ra các trận đấu ở chế độ đấu trường kéo dài từ 10 phút
                                    trở xuống. </div>
                            </div>
                            <div class="score">8.5</div>
                        </div>
                    </a><a class="apk" title="Free Fire - Bắn Súng Sinh Tồn APK"
                        href="/vn/garena-free-fire-android-il/com.dts.freefireth" data-dt-app="com.dts.freefireth"
                        data-dt-recid="" dt-eid="app" dt-params="small_position=3&amp;package_name=com.dts.freefireth"
                        dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><img class="banner lazy"
                            alt="Free Fire - Bắn Súng Sinh Tồn APK"
                            src="data:image/gif;base64,R0lGODlhAQABAPAAAPX19QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEAgD/ACwAAAAAAQABAAACAkQBADs="
                            data-original="https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX2Jhbm5lcl8xNjU4MzcyNzg4XzA0Mw/banner.jpg?w=260&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX2Jhbm5lcl8xNjU4MzcyNzg4XzA0Mw/banner.jpg?w=520&amp;fakeurl=1&amp;type=.webp 2x"
                            width="260" height="134">
                        <div class="info"><img class="icon lazy loaded" alt="Free Fire - Bắn Súng Sinh Tồn APK"
                                src="https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX2ljb25fMTY5NDQ1NDEzM18wMDU/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX2ljb25fMTY5NDQ1NDEzM18wMDU/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX2ljb25fMTY5NDQ1NDEzM18wMDU/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                width="48" height="48"
                                srcset="https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX2ljb25fMTY5NDQ1NDEzM18wMDU/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                data-was-processed="true">
                            <div class="text">
                                <div class="name one-line">Free Fire - Bắn Súng Sinh Tồn</div>
                                <div class="desc one-line">Free Fire là một trò chơi Battle Royale với các vòng chơi kéo dài
                                    30 phút.</div>
                            </div>
                            <div class="score">8.6</div>
                        </div>
                    </a><a class="apk" title="Hay Day APK" href="/vn/hay-day-android/com.supercell.hayday"
                        data-dt-app="com.supercell.hayday" data-dt-recid="" dt-eid="app"
                        dt-params="small_position=4&amp;package_name=com.supercell.hayday" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="banner lazy" alt="Hay Day APK"
                            src="data:image/gif;base64,R0lGODlhAQABAPAAAPX19QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEAgD/ACwAAAAAAQABAAACAkQBADs="
                            data-original="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5oYXlkYXlfYmFubmVyXzE2MTg4Mzc1MzZfMDg5/banner.jpg?w=260&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5oYXlkYXlfYmFubmVyXzE2MTg4Mzc1MzZfMDg5/banner.jpg?w=520&amp;fakeurl=1&amp;type=.webp 2x"
                            width="260" height="134">
                        <div class="info"><img class="icon lazy loaded" alt="Hay Day APK"
                                src="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5oYXlkYXlfaWNvbl8xNjgwNDQyNjk4XzA4MQ/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5oYXlkYXlfaWNvbl8xNjgwNDQyNjk4XzA4MQ/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5oYXlkYXlfaWNvbl8xNjgwNDQyNjk4XzA4MQ/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                width="48" height="48"
                                srcset="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5oYXlkYXlfaWNvbl8xNjgwNDQyNjk4XzA4MQ/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                data-was-processed="true">
                            <div class="text">
                                <div class="name one-line">Hay Day</div>
                                <div class="desc one-line">Tải xuống Hay Day ngay bây giờ và bắt đầu cuộc hành trình của bạn
                                    để tạo ra trang trại tốt nhất từ ​​trước đến nay!</div>
                            </div>
                            <div class="score">8.8</div>
                        </div>
                    </a><a class="apk" title="Naruto Senki APK" href="/vn/naruto-senki/re.naruto.game"
                        data-dt-app="re.naruto.game" data-dt-recid="" dt-eid="app"
                        dt-params="small_position=5&amp;package_name=re.naruto.game" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="banner lazy" alt="Naruto Senki APK"
                            src="data:image/gif;base64,R0lGODlhAQABAPAAAPX19QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEAgD/ACwAAAAAAQABAAACAkQBADs="
                            data-original="https://image.winudf.com/v2/user/admin/YWRtaW5f5LiL6L29LmpwZWdfMTY4ODM3NzQ1Njg1MA/banner.jpg?w=260&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/user/admin/YWRtaW5f5LiL6L29LmpwZWdfMTY4ODM3NzQ1Njg1MA/banner.jpg?w=520&amp;fakeurl=1&amp;type=.webp 2x"
                            width="260" height="134">
                        <div class="info"><img class="icon lazy loaded" alt="Naruto Senki APK"
                                src="https://image.winudf.com/v2/user/admin/YWRtaW5faWNvbi5wbmdfMTY4ODM3NzQ4NTQ1NQ/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/user/admin/YWRtaW5faWNvbi5wbmdfMTY4ODM3NzQ4NTQ1NQ/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/user/admin/YWRtaW5faWNvbi5wbmdfMTY4ODM3NzQ4NTQ1NQ/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                width="48" height="48"
                                srcset="https://image.winudf.com/v2/user/admin/YWRtaW5faWNvbi5wbmdfMTY4ODM3NzQ4NTQ1NQ/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                data-was-processed="true">
                            <div class="text">
                                <div class="name one-line">Naruto Senki</div>
                                <div class="desc one-line">Naruto Senki - Reigniting the Flames of Battle</div>
                            </div>
                            <div class="score">10.0</div>
                        </div>
                    </a><a class="apk" title="Clash of Clans APK"
                        href="/vn/clash-of-clans-android/com.supercell.clashofclans"
                        data-dt-app="com.supercell.clashofclans" data-dt-recid="" dt-eid="app"
                        dt-params="small_position=6&amp;package_name=com.supercell.clashofclans" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="banner lazy" alt="Clash of Clans APK"
                            src="data:image/gif;base64,R0lGODlhAQABAPAAAPX19QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEAgD/ACwAAAAAAQABAAACAkQBADs="
                            data-original="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5jbGFzaG9mY2xhbnNfYmFubmVyXzE2NjU4MzE1MDNfMDY0/banner.jpg?w=260&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5jbGFzaG9mY2xhbnNfYmFubmVyXzE2NjU4MzE1MDNfMDY0/banner.jpg?w=520&amp;fakeurl=1&amp;type=.webp 2x"
                            width="260" height="134">
                        <div class="info"><img class="icon lazy loaded" alt="Clash of Clans APK"
                                src="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5jbGFzaG9mY2xhbnNfaWNvbl8xNjY1ODMxNTAzXzAyMw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5jbGFzaG9mY2xhbnNfaWNvbl8xNjY1ODMxNTAzXzAyMw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5jbGFzaG9mY2xhbnNfaWNvbl8xNjY1ODMxNTAzXzAyMw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                width="48" height="48"
                                srcset="https://image.winudf.com/v2/image1/Y29tLnN1cGVyY2VsbC5jbGFzaG9mY2xhbnNfaWNvbl8xNjY1ODMxNTAzXzAyMw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp"
                                data-was-processed="true">
                            <div class="text">
                                <div class="name one-line">Clash of Clans</div>
                                <div class="desc one-line">Hãy tham gia cùng hàng triệu người chơi trên khắp thế giới xây
                                    dựng làng! Tải về Clash of Clans (coc) phiên bản mới nhất.</div>
                            </div>
                            <div class="score">9.1</div>
                        </div>
                    </a></div>
            </div>
        </div>
        <div class="left">
            <div class="module preregister" dt-eid="card"
                dt-params="model_type=1256&amp;module_name=pre_registration&amp;position=9" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Trò chơi trước khi đăng ký" href="/vn/pre-register" dt-eid="more" dt-params="small_position=51"
                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Trò chơi trước khi đăng ký</h3>
                </a>
                <div class="apk-list-1004 no-scrollbar"><a class="apk"
                        title="Grand Theft Auto: The Trilogy - The Definitive Edition APK"
                        href="/vn/grand-theft-auto-the-trilogy-the-definitive-edition/com.gft.thetrilogy"
                        data-dt-app="com.gft.thetrilogy" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.gft.thetrilogy" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="icon lazy loaded"
                            alt="Grand Theft Auto: The Trilogy - The Definitive Edition APK"
                            src="https://image.winudf.com/v2/user/admin/YWRtaW5fMWNkNTVmODJmZTViMGFkM2RlNjM4OWJiOWUzNTQ3MmJfMzYwLnBuZ18xNjYwMjg1Nzc0MjA3/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                            data-original="https://image.winudf.com/v2/user/admin/YWRtaW5fMWNkNTVmODJmZTViMGFkM2RlNjM4OWJiOWUzNTQ3MmJfMzYwLnBuZ18xNjYwMjg1Nzc0MjA3/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/user/admin/YWRtaW5fMWNkNTVmODJmZTViMGFkM2RlNjM4OWJiOWUzNTQ3MmJfMzYwLnBuZ18xNjYwMjg1Nzc0MjA3/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                            width="68" height="68"
                            srcset="https://image.winudf.com/v2/user/admin/YWRtaW5fMWNkNTVmODJmZTViMGFkM2RlNjM4OWJiOWUzNTQ3MmJfMzYwLnBuZ18xNjYwMjg1Nzc0MjA3/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                            data-was-processed="true">
                        <div class="text">
                            <div class="name one-line">Grand Theft Auto: The Trilogy - The Definitive Edition</div>
                            <div class="developer one-line">Rockstar Games</div>
                            <div class="count one-line">Đăng ký trước: 87407</div>
                        </div>
                        <div class="button one-line">Đăng ký trước</div>
                    </a></div>
            </div>
        </div>
        <div class="right">
            <div class="module game-on-sale" dt-eid="card"
                dt-params="model_type=1257&amp;module_name=game_on_sales&amp;position=10" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Trò chơi đang được bán" href="/vn/game-sales" dt-eid="more" dt-params="small_position=61"
                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Trò chơi đang được bán</h3>
                </a>
                <div class="apk-list-1005 no-scrollbar"><a class="apk" title="Samorost 2 APK"
                        href="/vn/samorost-2/net.amanita_design.Samorost2" data-dt-app="net.amanita_design.Samorost2"
                        dt-eid="app" dt-params="small_position=1&amp;package_name=net.amanita_design.Samorost2"
                        dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><img class="icon lazy loaded"
                            alt="Samorost 2 APK"
                            src="https://image.winudf.com/v2/image1/bmV0LmFtYW5pdGFfZGVzaWduLlNhbW9yb3N0Ml9pY29uXzE2MDQ2MzM3NjdfMDE5/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                            data-original="https://image.winudf.com/v2/image1/bmV0LmFtYW5pdGFfZGVzaWduLlNhbW9yb3N0Ml9pY29uXzE2MDQ2MzM3NjdfMDE5/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/bmV0LmFtYW5pdGFfZGVzaWduLlNhbW9yb3N0Ml9pY29uXzE2MDQ2MzM3NjdfMDE5/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                            width="68" height="68"
                            srcset="https://image.winudf.com/v2/image1/bmV0LmFtYW5pdGFfZGVzaWduLlNhbW9yb3N0Ml9pY29uXzE2MDQ2MzM3NjdfMDE5/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                            data-was-processed="true">
                        <div class="text">
                            <div class="name one-line">Samorost 2</div>
                            <div class="developer one-line">Amanita Design</div>
                        </div>
                        <div class="price">
                            <div class="new">$0.99</div>
                            <div class="old">$1.99</div>
                        </div>
                    </a></div>
            </div>
        </div>
        <div class="left">
            <div class="module hot-games" dt-eid="card"
                dt-params="model_type=1258&amp;module_name=hot_games&amp;position=11" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Trò chơi nổi bật" href="/vn/game" dt-eid="more" dt-params="small_position=71" dt-imp-once="true"
                    dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Trò chơi nổi bật</h3>
                </a>
                <div class="apk-list-1006 no-scrollbar"><a class="apk" title="TFT: Teamfight Tactics APK"
                        href="/vn/tft-tactics/com.riotgames.league.teamfighttactics"
                        data-dt-app="com.riotgames.league.teamfighttactics" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.riotgames.league.teamfighttactics"
                        dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                        <div class="img-ratio"><img class="icon lazy loaded" alt="TFT: Teamfight Tactics APK"
                                src="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                                width="68" height="68"
                                srcset="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                                data-was-processed="true"></div>
                        <div class="text">
                            <div class="name one-line">TFT: Teamfight Tactics</div>
                            <div class="category one-line">Chiến thuật</div>
                            <div class="install-total">4M+</div>
                        </div>
                    </a></div>
            </div>
            <div class="module hot-apps" dt-eid="card" dt-params="model_type=1259&amp;module_name=hot_apps&amp;position=12"
                dt-clck-ignore="true" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a
                    class="title more" title="Ứng dụng nổi bật" href="/vn/app" dt-eid="more" dt-params="small_position=84"
                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Ứng dụng nổi bật</h3>
                </a>
                <div class="apk-list-1006 no-scrollbar"><a class="apk" title="Facebook APK"
                        href="/vn/facebook/com.facebook.katana" data-dt-app="com.facebook.katana" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.facebook.katana" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true">
                        <div class="img-ratio"><img class="icon lazy loaded" alt="Facebook APK"
                                src="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=72&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                                width="68" height="68"
                                srcset="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=144&amp;fakeurl=1&amp;type=.webp 2x"
                                data-was-processed="true"></div>
                        <div class="text">
                            <div class="name one-line">Facebook</div>
                            <div class="category one-line">Xã hội</div>
                            <div class="install-total">100M+</div>
                        </div>
                    </a></div>
            </div>
            <div class="module latest-update-games" dt-eid="card"
                dt-params="model_type=1260&amp;module_name=recently_updated_game&amp;position=13" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                <div class="title">
                    <h3 class="name">Trò chơi vừa mới cập nhật</h3>
                </div>
                <div class="apk-list-1008 no-scrollbar"><a class="apk" title="TFT: Teamfight Tactics APK"
                        href="/vn/tft-tactics/com.riotgames.league.teamfighttactics"
                        data-dt-app="com.riotgames.league.teamfighttactics" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.riotgames.league.teamfighttactics"
                        dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                        <div class="img-ratio"><img class="icon lazy loaded" alt="TFT: Teamfight Tactics APK"
                                src="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=102&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=102&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=204&amp;fakeurl=1&amp;type=.webp 2x"
                                width="102" height="102"
                                srcset="https://image.winudf.com/v2/image1/Y29tLnJpb3RnYW1lcy5sZWFndWUudGVhbWZpZ2h0dGFjdGljc19pY29uXzE2ODY3NDMxNjBfMDkz/icon.webp?w=204&amp;fakeurl=1&amp;type=.webp 2x"
                                data-was-processed="true"></div>
                        <div class="text">
                            <div class="name double-lines">TFT: Teamfight Tactics</div>
                            <div class="category one-line">Chiến thuật</div>
                            <div class="install-total">13.18.5304653</div>
                        </div>
                    </a></div>
            </div>
            <div class="module latest-update-apps" dt-eid="card"
                dt-params="model_type=1261&amp;module_name=recently_updated_apps&amp;position=14" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                <div class="title">
                    <h3 class="name">Ứng dụng vừa mới cập nhật</h3>
                </div>
                <div class="apk-list-1008 no-scrollbar">
                    <a class="apk" title="Facebook APK" href="/vn/facebook/com.facebook.katana"
                        data-dt-app="com.facebook.katana" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.facebook.katana" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true">
                        <div class="img-ratio"><img class="icon lazy loaded" alt="Facebook APK"
                                src="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=102&amp;fakeurl=1&amp;type=.webp"
                                data-original="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=102&amp;fakeurl=1&amp;type=.webp"
                                data-srcset="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=204&amp;fakeurl=1&amp;type=.webp 2x"
                                width="102" height="102"
                                srcset="https://image.winudf.com/v2/image1/Y29tLmZhY2Vib29rLmthdGFuYV9pY29uXzE1NTc5OTAwMzBfMDIz/icon.webp?w=204&amp;fakeurl=1&amp;type=.webp 2x"
                                data-was-processed="true"></div>
                        <div class="text">
                            <div class="name double-lines">Facebook</div>
                            <div class="category one-line">Xã hội</div>
                            <div class="install-total">433.0.0.31.111</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="module top-news-game" dt-eid="card"
                dt-params="model_type=1262&amp;module_name=top_new_games&amp;position=15" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Trò chơi mới hàng đầu" href="/vn/topic/top-new-games" dt-eid="more"
                    dt-params="small_position=115" dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Trò chơi mới hàng đầu</h3>
                </a>
                <div class="apk-list-1007 no-scrollbar"><a class="apk" title="3Q Siêu Lầy APK"
                        href="/vn/3q-si%C3%AAu-l%E1%BA%A7y/com.shg.sg383" data-dt-app="com.shg.sg383" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=com.shg.sg383" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="icon lazy loaded" alt="3Q Siêu Lầy APK"
                            src="https://image.winudf.com/v2/image1/Y29tLnNoZy5zZzM4M19pY29uXzE2OTUyNTA1MzZfMDE3/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                            data-original="https://image.winudf.com/v2/image1/Y29tLnNoZy5zZzM4M19pY29uXzE2OTUyNTA1MzZfMDE3/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/Y29tLnNoZy5zZzM4M19pY29uXzE2OTUyNTA1MzZfMDE3/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp 2x"
                            width="56" height="56"
                            srcset="https://image.winudf.com/v2/image1/Y29tLnNoZy5zZzM4M19pY29uXzE2OTUyNTA1MzZfMDE3/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp 2x"
                            data-was-processed="true">
                        <div class="text">
                            <div class="name one-line">3Q Siêu Lầy</div>
                            <div class="desc one-line">TƯỚNG NHÂY - CHIÊU NGẦU - CẦM ĐẦU THIÊN HẠ</div>
                        </div>
                    </a></div>
            </div>
            <div class="module top-news-app" dt-eid="card"
                dt-params="model_type=1263&amp;module_name=top_new_apps&amp;position=16" dt-clck-ignore="true"
                dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true"><a class="title more"
                    title="Ứng dụng mới hàng đầu" href="/vn/topic/top-new-apps" dt-eid="more" dt-params="small_position=122"
                    dt-imp-once="true" dt-imp-end-ignore="true" dt-send-beacon="true">
                    <h3 class="name">Ứng dụng mới hàng đầu</h3>
                </a>
                <div class="apk-list-1007 no-scrollbar">
                    <a class="apk" title="Funhub APK" href="/vn/funhub/net.zfunhub" data-dt-app="net.zfunhub" dt-eid="app"
                        dt-params="small_position=1&amp;package_name=net.zfunhub" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="icon lazy loaded" alt="Funhub APK"
                            src="https://image.winudf.com/v2/image1/bmV0LnpmdW5odWJfaWNvbl8xNjkzMzIyNDM0XzA2Nw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                            data-original="https://image.winudf.com/v2/image1/bmV0LnpmdW5odWJfaWNvbl8xNjkzMzIyNDM0XzA2Nw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/bmV0LnpmdW5odWJfaWNvbl8xNjkzMzIyNDM0XzA2Nw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp 2x"
                            width="56" height="56"
                            srcset="https://image.winudf.com/v2/image1/bmV0LnpmdW5odWJfaWNvbl8xNjkzMzIyNDM0XzA2Nw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp 2x"
                            data-was-processed="true">
                        <div class="text">
                            <div class="name one-line">Funhub</div>
                            <div class="desc one-line">FunHub - Mạng xã hội giúp bạn tự do chia sẻ đam mê với người khác
                            </div>
                        </div>
                    </a>
                    <a class="apk" title="Antivirus-PhoneMaster APK" href="/vn/planet-ajaib/com.duokelike.box"
                        data-dt-app="com.duokelike.box" dt-eid="app"
                        dt-params="small_position=2&amp;package_name=com.duokelike.box" dt-imp-once="true"
                        dt-imp-end-ignore="true" dt-send-beacon="true"><img class="icon lazy loaded"
                            alt="Antivirus-PhoneMaster APK"
                            src="https://image.winudf.com/v2/image1/Y29tLmR1b2tlbGlrZS5ib3hfaWNvbl8xNjkzMTQxMjc5XzAyNw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                            data-original="https://image.winudf.com/v2/image1/Y29tLmR1b2tlbGlrZS5ib3hfaWNvbl8xNjkzMTQxMjc5XzAyNw/icon.webp?w=60&amp;fakeurl=1&amp;type=.webp"
                            data-srcset="https://image.winudf.com/v2/image1/Y29tLmR1b2tlbGlrZS5ib3hfaWNvbl8xNjkzMTQxMjc5XzAyNw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp 2x"
                            width="56" height="56"
                            srcset="https://image.winudf.com/v2/image1/Y29tLmR1b2tlbGlrZS5ib3hfaWNvbl8xNjkzMTQxMjc5XzAyNw/icon.webp?w=120&amp;fakeurl=1&amp;type=.webp 2x"
                            data-was-processed="true">
                        <div class="text">
                            <div class="name one-line">Antivirus-PhoneMaster</div>
                            <div class="desc one-line">Dễ sử dụng, phần mềm diệt virus được cung cấp bởi Trustlook</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>