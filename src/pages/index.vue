<template>
    <div class="page-index js-fullscreen-wrap" :class="{ is_loading: is_loading }">
        <Loading></Loading>
        <div class="white-bg"></div>
        <div class="js-bg-wrapper">
            <div class="js-section-bg bg-section-01">
                <!-- left side -->
                <div class="under left-main"></div>
                <div class="left-main"></div>
                <div class="left delay9-main"></div>
                <div class="delay30 right left-topside1"></div>
                <div class="top left-topside1"></div>
                <div class="top left-topside2"></div>
                <div class="left-topside2"></div>
                <div class="top left-topside3"></div>
                <div class="top delay2 left-topside3__right"></div>
                <div class="left-topside3__right"></div>
                <div class="top left-topside4"></div>
                <div class="delay15 right left-topside4"></div>
                <div class="top left-topside4__right"></div>
                <div class="right delay7 left-topside4__right"></div>
                <div class="top left-topside5"></div>
                <div class="delay7 right top left-topside5"></div>
                <div class="left left-topside6"></div>

                <div class="top left-rightside1"></div>
                <div class="top left-rightside1"></div>
                <div class="right delay14 left-rightside1"></div>
                <div class="top left-rightside2"></div>
                <div class="top left-rightside3"></div>
                <div class="right delay19 left-rightside3"></div>

                <div class="top left-leftside1"></div>
                <div class="top left-leftside1"></div>
                <div class="top left-leftside1__under"></div>
                <div class="top left-leftside1__under"></div>
                <div class="under delay3 left-leftside1__under"></div>
                <div class="top left-leftside2"></div>
                <div class="top left-leftside3"></div>
                <div class="under left-leftside3"></div>
                <div class="top left-leftside4"></div>
                <div class="left delay2 left-leftside4"></div>
                <div class="left-leftside4"></div>
                <div class="top left-leftside5"></div>
                <div class="top left-leftside6"></div>

                <div class="under left-underside1"></div>
                <div class="left-underside1"></div>
                <div class="under left-underside2"></div>
                <div class="left left-underside2"></div>
                <div class="under left-underside3"></div>
                <div class="under left-underside4"></div>
                <div class="right left-underside4"></div>
                <div class="under left-underside5"></div>
                <div class="under left-underside6"></div>
                <div class="top left-underside6"></div>
                <div class="right delay2 left-underside6"></div>
                <div class="under left-underside6__right"></div>
                <div class="under left-underside7"></div>
                <div class="left-underside7"></div>
                <div class="left left-underside7"></div>
                <div class="under left-underside7__right"></div>
                <div class="under left-underside8"></div>
                <div class="under left-underside9"></div>
                <div class="left-underside9"></div>
                <div class="left left-underside9"></div>

                <!-- right side -->
                <div class="delay10 right-main"></div>
                <div class="delay6 top right-leftside1"></div>
                <div class="delay3 top right-leftside2"></div>
                <div class="delay21 under right-leftside2"></div>
                <div class="delay12 top right-leftside3"></div>
                <div class="delay12 under right-leftside3"></div>
                <div class="delay10 top right-rightside"></div>
                <div class="delay15 top right-rightside2"></div>
                <div class="delay15 right right-rightside2"></div>
                <div class="delay10 under right-rightside3"></div>
                <div class="delay15 right right-rightside3"></div>
                <div class="delay12 under right-rightside4"></div>
                <div class="delay1 under right-rightside5"></div>
                <div class="delay10 under right-rightside6"></div>
                <div class="delay2 under right-rightside7"></div>
                <div class="delay16 under right-rightside8"></div>
                <div class="delay21 under right-rightside9"></div>
            </div>
            <div class="js-section-bg bg-section-02">
                <div class="top main"></div>
                <div class="top main-topside1"></div>
                <div class="top main-topside1__middle"></div>
                <div class="right delay2 main-topside1__middle"></div>
                <div class="top main-topside1__right"></div>
                <div class="top main-topside2"></div>
                <div class="right main-topside2"></div>
                <div class="top delay10 main-topside3"></div>
                <div class="top delay4 main-topside4"></div>
                <div class="left delay6 main-topside4"></div>
                <div class="right delay19 main-topside4"></div>
                <!-- right -->
                <div class="delay1 top main-rightside1"></div>
                <div class="delay5 right main-rightside1"></div>
                <div class="delay4 top main-rightside2"></div>
                <div class="delay1 top main-rightside3"></div>
                <div class="delay5 right main-rightside3"></div>
                <div class="delay1 top main-rightside4"></div>
                <div class="delay7 top main-rightside5"></div>
                <div class="delay19 top main-rightside5"></div>
                <div class="delay1 right main-rightside6"></div>
                <div class="delay29 top main-rightside6"></div>
                <div class="delay15 right main-rightside7"></div>
                <div class="delay3 top main-rightside8"></div>
                <div class="delay1 top main-rightside9"></div>
                <!-- under -->
                <div class="delay2 top main-underside1"></div>
                <div class="main-underside1"></div>
                <div class="delay3 top main-underside2"></div>
                <div class="main-underside2"></div>
                <div class="delay7 top main-underside3"></div>
                <div class="top main-underside3"></div>
                <div class="delay20 right main-underside3"></div>
                <div class="right main-underside3"></div>
                <div class="delay1 top main-underside4"></div>
                <div class="main-underside4"></div>
                <div class="delay1 left main-underside4"></div>
                <div class="delay4 top main-underside4__right"></div>
                <!-- left -->
                <div class="top delay9 main-leftside1"></div>
                <div class="under delay2 main-leftside1"></div>
                <div class="main-leftside1"></div>
                <div class="top main-leftside2"></div>
                <div class="top main-leftside3"></div>
                <div class="top main-leftside4"></div>
                <div class="under main-leftside4"></div>
                <div class="left delay29 main-leftside4"></div>
                <div class="top main-leftside5"></div>
                <div class="left main-leftside5"></div>
                <div class="top main-leftside6"></div>
            </div>
            <div class="js-section-bg bg-section-03">
                <!-- left -->
                <div class="left-main"></div>
                <!-- top side -->
                <div class="top left-topside1"></div>
                <div class="left-topside1"></div>
                <div class="right left-topside1"></div>
                <div class="delay2 top left-topside2"></div>
                <div class="left-topside2"></div>
                <div class="delay2 top left-topside2__right"></div>
                <div class="left-topside2__right"></div>
                <div class="top left-topside3"></div>
                <div class="left delay2 left-topside3"></div>
                <div class="right delay10 left-topside3"></div>
                <div class="delay2 top left-topside3__right"></div>
                <div class="delay25 top left-topside4"></div>
                <div class="left-topside4"></div>
                <div class="delay10 top left-topside5"></div>
                <div class="left-topside5"></div>
                <div class="delay6 top left-topside6"></div>
                <div class="delay7 left left-topside6"></div>
                <!-- right side -->
                <div class="delay7 top left-rightside1"></div>
                <div class="delay3 top left-rightside1__under"></div>
                <div class="delay6 top left-rightside2"></div>
                <div class="delay12 left-rightside2"></div>
                <div class="delay19 top left-rightside2__under"></div>
                <div class="delay1 right left-rightside2__under"></div>
                <div class="delay28 left left-rightside2__under"></div>
                <!-- under side -->
                <div class="top left-underside1"></div>
                <div class="left left-underside1"></div>
                <div class="top left-underside2"></div>
                <div class="top left-underside3"></div>
                <div class="top left-underside3__middle"></div>
                <div class="left-underside3__middle"></div>
                <div class="left left-underside3__middle"></div>
                <div class="top left-underside3__right"></div>
                <div class="left-underside3__right"></div>
                <div class="left delay9 left-underside3__right"></div>
                <div class="top left-underside4"></div>
                <div class="top left-underside4__right"></div>
                <div class="left-underside4__right"></div>
                <div class="left delay8 left-underside4__right"></div>
                <!-- left side -->
                <div class="delay2 top left-leftside1"></div>
                <div class="delay12 top left-leftside1"></div>
                <div class="delay2 top left-leftside2"></div>
                <div class="delay21 top left-leftside3"></div>
                <div class="delay2 top left-leftside3__under"></div>
                <div class="delay2 top left-leftside4"></div>
                <div class="delay25 top left-leftside4__under"></div>
                <div class="left-leftside4__under"></div>
                <div class="delay2 left left-leftside4__under"></div>
                <div class="top left-leftside5"></div>
                <div class="delay7 top left-leftside6"></div>

                <!-- right -->
                <div class="delay30 top right-main"></div>
                <div class="right-main"></div>
                <div class="delay23 top right-topside1"></div>
                <div class="right-topside1"></div>
                <div class="delay30 top right-topside2"></div>
                <div class="right-topside2"></div>
                <div class="delay30 top right-topside3"></div>
                <div class="right-topside3"></div>
                <div class="delay3 left right-topside3"></div>
                <div class="right-topside3"></div>
                <div class="delay30 top right-topside3__left"></div>
                <div class="right-topside3__left"></div>
                <div class="delay4 top right-topside4"></div>
                <div class="right-topside4"></div>
                <div class="delay17 top right-topside5"></div>
                <div class="right-topside5"></div>
                <div class="delay5 right right-topside5"></div>
                <div class="right-topside5"></div>
                <div class="delay12 left right-topside5"></div>
                <div class="right-topside5"></div>
                <!-- right side -->
                <div class="delay30 top right-rightside1"></div>
                <div class="delay30 top right-rightside2"></div>
                <!-- under side -->
                <div class="delay3 top right-underside1"></div>
                <div class="right-underside1"></div>
                <div class="delay5 top right-underside2"></div>
                <div class="right-underside2"></div>
                <div class="delay12 top right-underside3"></div>
                <div class="right-underside3"></div>
                <div class="delay29 left right-underside3"></div>
                <div class="right-underside3"></div>
                <div class="delay21 top right-underside4"></div>
                <div class="delay21 left right-underside4"></div>
                <div class="delay21 right right-underside4"></div>
                <div class="right-underside4"></div>
                <!-- left side -->
                <div class="delay30 top right-leftside1"></div>
                <div class="delay30 top right-leftside2"></div>
            </div>
            <div class="js-section-bg bg-section-04">
                <div class="main"></div>
                <div class="top topside1_big"></div>
                <div class="topside1_big"></div>
                <div class="top topside2"></div>
                <div class="top topside3"></div>
                <div class="right delay18 topside3"></div>
                <div class="delay7 top topside4"></div>
                <div class="topside4"></div>
                <div class="delay6 right topside4"></div>
                <!-- right side -->
                <div class="delay7 top rightside1"></div>
                <div class="delay17 top rightside2"></div>
                <div class="delay4 top rightside3"></div>
                <div class="delay21 top rightside4"></div>
                <div class="delay19 top rightside5"></div>
                <div class="right delay18 rightside5"></div>
                <div class="delay1 top rightside6"></div>
                <div class="delay10 top rightside7"></div>
                <div class="delay17 top rightside8"></div>
                <div class="delay29 top rightside9"></div>
                <div class="under delay9 rightside9"></div>
                <div class="top delay7 rightside10"></div>
                <!-- under side -->
                <div class="underside1"></div>
                <div class="delay7 left underside1"></div>
                <div class="underside1__right"></div>
                <div class="delay5 left underside1__right"></div>
                <div class="underside2"></div>
                <div class="delay2 left underside2"></div>
                <div class="underside2__right"></div>
                <div class="delay17 right underside2__right"></div>
                <div class="underside3"></div>
                <div class="delay21 left underside3"></div>
                <div class="underside3__right"></div>
                <div class="delay14 right underside3__right"></div>
                <div class="underside4"></div>
                <div class="delay17 left underside4"></div>
                <div class="underside4__right"></div>
                <div class="delay4 left underside4__right"></div>
                <div class="underside5"></div>
                <div class="delay8 right underside5"></div>
                <div class="underside5__right"></div>
                <div class="delay12 left underside5__right"></div>
                <div class="underside5__right"></div>
                <div class="delay17 right underside5__right"></div>

                <!-- left side -->
                <div class="delay2 top leftside1"></div>
                <div class="delay4 top leftside1__under"></div>
                <div class="delay30 top leftside2"></div>
                <div class="delay3 top leftside2__under"></div>
                <div class="under delay9 leftside2__under"></div>
                <div class="delay1 top leftside3"></div>
                <div class="delay12 top leftside4"></div>
                <div class="left delay9 leftside4"></div>
                <div class="delay6 top leftside5"></div>
                <div class="delay16 top leftside6"></div>
                <div class="left delay9 leftside6"></div>
            </div>
        </div>
        <section class="index__top index-section js-fullscreen-section initial">
            <div class="index__top__left">
                <div class="sp-line1">
                    <div class="index__top__left__line line-1">
                        <p class="line__block line__block__hito">人</p>
                        <p class="line__block line__block__to">と</p>
                        <p class="line__block line__block__system">システム</p>
                    </div>
                    <div class="index__top__left__line line-2">
                        <p class="line__block line__block__wo pc">を</p>
                        <p class="line__block line__block__tukuru pc">つくる会社</p>
                        <p class="line__block line__block__wotukuru sp kaisya">をつくる会社</p>
                    </div>
                </div>
                <div class="index__top__left__line line-3">
                    <p class="line__block line__block__jouho lh-20">情報インフラで社会を元気に</p>
                </div>

                <div class="index__top__left__line link">
                    <a class="line__block line__abotus link-gonext" href="#">
                        <span class="en">ABOUT US</span>
                        <span class="ja">私たちについて</span>
                        <ArrowRight />
                    </a>
                </div>
                <div class="index__top__left__line link">
                    <a class="line__block line__news link-goprev" href="#">
                        <ArrowLeft />
                        <span class="en">NEWS</span>
                        <span class="ja">お知らせ</span>
                    </a>
                </div>
            </div>
            <div class="index__top__right">
                <a class="service-link link-to-id" data-target_id="2" href="#">
                    <span class="en">SERVICE</span>
                    <span class="ja">サービス紹介</span>
                    <ArrowRight />
                </a>

                <div class="service-wrapper" id="service-wrapper">
                    <div class="service dummy-block dummy-block-top"></div>
                    <div class="service dummy-block dummy-block-top"></div>
                    <nuxt-link class="service tyoitore" to="/biz/choitore">
                        <p class="bg-white"></p>
                        <h3>チョイトレ</h3>
                        <div class="service__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <defs></defs>
                                <title>アセット 3</title>
                                <g id="レイヤー_2" data-name="レイヤー 2">
                                    <g id="design">
                                        <rect class="cls-1" width="40" height="40"></rect>
                                        <path
                                            class="cls-2"
                                            d="M13.3,13.29H9.63a.91.91,0,0,0-.9.9V25.81a.91.91,0,0,0,.9.9H13.3a.9.9,0,0,0,.9-.9V14.19A.9.9,0,0,0,13.3,13.29Z"
                                        ></path>
                                        <path
                                            class="cls-2"
                                            d="M6.9,16.12H5.75a.75.75,0,0,0-.75.75v6.26a.75.75,0,0,0,.75.75H6.9a.75.75,0,0,0,.75-.75V16.87A.75.75,0,0,0,6.9,16.12Z"
                                        ></path>
                                        <rect
                                            class="cls-2"
                                            x="15.41"
                                            y="18.41"
                                            width="9.18"
                                            height="3.18"
                                        ></rect>
                                        <path
                                            class="cls-2"
                                            d="M30.37,13.29H26.7a.9.9,0,0,0-.9.9V25.81a.9.9,0,0,0,.9.9h3.67a.91.91,0,0,0,.9-.9V14.19A.91.91,0,0,0,30.37,13.29Z"
                                        ></path>
                                        <path
                                            class="cls-2"
                                            d="M34.25,16.12H33.1a.75.75,0,0,0-.75.75v6.26a.75.75,0,0,0,.75.75h1.15a.75.75,0,0,0,.75-.75V16.87A.75.75,0,0,0,34.25,16.12Z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="service__more">MORE</div>
                    </nuxt-link>
                    <nuxt-link class="service nagoya" to="/nagoya">
                        <p class="bg-white"></p>
                        <h3>名古屋支店</h3>
                        <div class="service__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <defs></defs>
                                <title>アセット 4</title>
                                <g id="レイヤー_2" data-name="レイヤー 2">
                                    <g id="design">
                                        <rect class="cls-1" width="40" height="40"></rect>
                                        <path
                                            class="cls-2"
                                            d="M31.55,11.5A2.51,2.51,0,0,0,29,14a2.56,2.56,0,0,0,.33,1.22l-6.05,7a2.66,2.66,0,0,0-.9-.17,2.59,2.59,0,0,0-.63.09L19.33,18.6a2.44,2.44,0,0,0,.47-1.45,2.51,2.51,0,0,0-5,0A2.53,2.53,0,0,0,15,18.21L9.51,23.72a2.53,2.53,0,0,0-1.06-.24,2.52,2.52,0,1,0,2.27,1.45l5.51-5.51a2.5,2.5,0,0,0,1.06.24,2.59,2.59,0,0,0,.63-.09l2.46,3.54a2.51,2.51,0,1,0,4.55,1.45,2.48,2.48,0,0,0-.32-1.21l6.05-7a2.43,2.43,0,0,0,.89.17,2.51,2.51,0,1,0,0-5Z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="service__more">MORE</div>
                    </nuxt-link>
                    <nuxt-link class="service torepura" to="/biz/torepura">
                        <p class="bg-white"></p>
                        <h3>トレプラ</h3>
                        <div class="service__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <defs></defs>
                                <title>アセット 1</title>
                                <g id="レイヤー_2" data-name="レイヤー 2">
                                    <g id="design">
                                        <rect class="cls-1" width="40" height="40"></rect>
                                        <path
                                            class="cls-2"
                                            d="M19.48,27.66a13.62,13.62,0,0,0-5.12-1.07,12.17,12.17,0,0,0-3.32.55,14.72,14.72,0,0,0-1.46.51l-.07,0a.23.23,0,0,1-.16-.06.25.25,0,0,1-.12-.22V14.26a.78.78,0,0,1,.16-.46,2.07,2.07,0,0,1,.59-.46c.15-.06.72-.29,1.49-.52a10.93,10.93,0,0,1,2.89-.49,11.66,11.66,0,0,1,3.88.68,9.5,9.5,0,0,1,1.11.45l.13.07Z"
                                        ></path>
                                        <path
                                            class="cls-2"
                                            d="M30.77,27.39a.25.25,0,0,1-.12.22h0a.23.23,0,0,1-.16.06l-.07,0A14.72,14.72,0,0,0,29,27.14a12.17,12.17,0,0,0-3.32-.55,13.62,13.62,0,0,0-5.12,1.07V13.53a11.7,11.7,0,0,1,5.12-1.2,10.62,10.62,0,0,1,3,.52c.44.13.8.26,1.06.35l.3.12.05,0a2.07,2.07,0,0,1,.59.46.78.78,0,0,1,.16.46V27.39Z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="service__more">MORE</div>
                    </nuxt-link>
                    <nuxt-link class="service si" to="/system">
                        <p class="bg-white"></p>
                        <h3>システムインテグ<br />レーション事業</h3>
                        <div class="service__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <defs></defs>
                                <title>アセット 2</title>
                                <g id="レイヤー_2" data-name="レイヤー 2">
                                    <g id="design">
                                        <rect class="cls-1" width="40" height="40"></rect>
                                        <path
                                            class="cls-2"
                                            d="M29.57,11.5H10.43a.89.89,0,0,0-.88.88V27.62a.89.89,0,0,0,.88.88H29.57a.89.89,0,0,0,.88-.88V12.38A.89.89,0,0,0,29.57,11.5Zm-14,9a.89.89,0,0,1-.88.89H12.37a.89.89,0,0,1-.88-.89V19.46a.89.89,0,0,1,.88-.89h2.32a.89.89,0,0,1,.88.89Zm6.47,5a.88.88,0,0,1-.88.88H18.84a.88.88,0,0,1-.88-.88V24.47a.89.89,0,0,1,.88-.88h2.32a.89.89,0,0,1,.88.88Zm0-5a.89.89,0,0,1-.88.89H18.84a.89.89,0,0,1-.88-.89V19.46a.89.89,0,0,1,.88-.89h2.32a.89.89,0,0,1,.88.89Zm0-5a.89.89,0,0,1-.88.88H18.84a.89.89,0,0,1-.88-.88V14.44a.88.88,0,0,1,.88-.88h2.32a.88.88,0,0,1,.88.88Zm6.47,5a.89.89,0,0,1-.88.89H25.31a.89.89,0,0,1-.88-.89V19.46a.89.89,0,0,1,.88-.89h2.32a.89.89,0,0,1,.88.89Z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="service__more">MORE</div>
                    </nuxt-link>
                    <nuxt-link class="service ginotore" to="/biz/ginotore">
                        <p class="bg-white"></p>
                        <h3>ギノトレ</h3>
                        <div class="service__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                <defs></defs>
                                <title>icon_ginotore</title>
                                <g id="レイヤー_2" data-name="レイヤー 2">
                                    <g id="design">
                                        <rect class="cls-1" width="60" height="60" />
                                        <rect
                                            class="cls-2"
                                            x="25.07"
                                            y="35.18"
                                            width="9.86"
                                            height="12.28"
                                        />
                                        <rect
                                            class="cls-2"
                                            x="39.41"
                                            y="30.49"
                                            width="9.86"
                                            height="16.97"
                                        />
                                        <rect
                                            class="cls-2"
                                            x="10.73"
                                            y="37.77"
                                            width="9.86"
                                            height="9.69"
                                        />
                                        <polygon
                                            class="cls-2"
                                            points="23.15 23.06 31.26 30.36 42.9 19.86 45.56 22.26 47.36 12.54 36.58 14.16 39.24 16.56 31.26 23.75 23.15 16.45 10.73 27.64 14.4 30.95 23.15 23.06"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="service__more">MORE</div>
                    </nuxt-link>
                    <nuxt-link class="service zinzai" to="/peopledevelopment">
                        <p class="bg-white"></p>
                        <h3>人材育成制度</h3>
                        <div class="service__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <defs></defs>
                                <title>アセット 5</title>
                                <g id="レイヤー_2" data-name="レイヤー 2">
                                    <g id="design">
                                        <rect class="cls-1" width="40" height="40"></rect>
                                        <path
                                            class="cls-2"
                                            d="M29.32,12.18l-1.5-1.5a2.32,2.32,0,0,0-3.29,0l-1.4,1.4,4.79,4.79,1.4-1.4A2.32,2.32,0,0,0,29.32,12.18Z"
                                        ></path>
                                        <polygon
                                            class="cls-2"
                                            points="10 25.21 10 30 14.79 30 26.61 18.18 21.82 13.39 10 25.21"
                                        ></polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="service__more">MORE</div>
                    </nuxt-link>
                    <nuxt-link class="service media" to="/media">
                        <p class="bg-white"></p>
                        <h3>メディア発信</h3>
                        <div class="service__icon">
                            <svg
                                version="1.1"
                                id="レイヤー_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 40 40"
                                style="enable-background: new 0 0 40 40"
                                xml:space="preserve"
                            >
                                <rect class="cls-1" width="40" height="40" />
                                <g id="レイヤー_2_1_">
                                    <g id="design">
                                        <g
                                            id="Social-_x2F_-28---Social_x2C_-speaker_x2C_-advertising_x2C_-megaphone_x2C_-loud_x2C_-marketing-icon"
                                        >
                                            <path
                                                class="cls-2"
                                                d="M26.1,27.9c-0.1,0-0.2,0-0.4,0l-12.5-1.2l-2.6,0.7c-2,0.5-4-0.7-4.5-2.7l-0.9-3.4c-0.5-2,0.7-4,2.7-4.5
				l2.6-0.7L20.7,9c0.3-0.2,0.7-0.3,1-0.1c0.3,0.1,0.6,0.4,0.7,0.7l4.4,16.9c0.1,0.3,0,0.7-0.2,1C26.5,27.7,26.3,27.9,26.1,27.9z"
                                            />
                                            <path
                                                class="cls-2"
                                                d="M13.3,33.7c-0.6,0-1.1-0.3-1.4-0.9l-4.6-9.3c-0.4-0.8-0.1-1.7,0.7-2.1c0.8-0.4,1.7-0.1,2.1,0.7l4.6,9.3
				c0.4,0.8,0.1,1.7-0.7,2.1C13.8,33.6,13.5,33.7,13.3,33.7z"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <path
                                    class="cls-3"
                                    d="M27.4,15.4c0,0,1.6,0.5,2,2.3c0.4,1.8-0.7,3-0.7,3"
                                />
                                <path
                                    class="cls-3"
                                    d="M29.4,12.8c0,0,2.7,0.8,3.4,4.1c0.7,3.2-1.3,5.4-1.3,5.4"
                                />
                            </svg>
                        </div>
                        <div class="service__more">MORE</div>
                    </nuxt-link>
                    <div class="service dummy-block dummy-block--bottom dummy-block--bottom-right"></div>
                    <div class="service dummy-block dummy-block--bottom dummy-block--bottom-left"></div>
                    <div class="service dummy-block dummy-block--bottom dummy-block--bottom-right"></div>
                </div>
            </div>
        </section>
        <section class="index__aboutus index-section js-fullscreen-section">
            <div class="aboutus-img">
                <div class="aboutus-img__img"></div>
                <h2>
                    <span class="en">ABOUT US</span>
                    <span class="ja">私たちについて</span>
                </h2>

                <div class="aboutus-img__mottos">
                    <div class="aboutus-img__mottos__bg"></div>
                    <div class="aboutus-img__mottos__motto">
                        「情報インフラで社会を元気に」をモットーに、<br />
                        人々の環境を整える会社です。<br />
                        生活を便利にするためのプラットフォームづくりと人材育成に取り組んでいます。
                    </div>
                </div>
            </div>

            <div class="aboutus-desc">
                <div class="aboutus-desc__bg"></div>
                <div class="aboutus-desc__txt">
                    私たちは多くのシステムを無意識に使っており、それらは鉄道・銀行・携帯のように社会を支えるインフラとなっています。創業以来、ＢＦＴは「より価値の高いシステムを提供しつづけること」を使命とし、システムづくりで社会に貢献してきました。<br />
                    創業17年を経て「人とシステムをつくる会社」に使命を変えました。システムづくりに加え、システムにかかわる人材の育成にも力を注ぎ、さらに豊かな社会の実現を目指します。
                </div>
            </div>

            <a class="link-top inside-link inside-link-left link-goprev" href="#">
                <ArrowLeft />
                <span class="en">TOP</span>
                <span class="ja">トップページ</span>
            </a>
            <a class="link-service inside-link inside-link-right link-gonext" href="#">
                <span class="en">SERVICE</span>
                <span class="ja">サービス紹介</span>
                <ArrowRight />
            </a>
        </section>
        <section class="index__service index-section js-fullscreen-section">
            <h2>
                <span class="en">SERVICE</span>
                <span class="ja">サービス紹介</span>
            </h2>

            <div class="services services-list">
                <div class="services__service">
                    <div class="service__img">
                        <div class="service__img__bg"></div>
                        <div class="service__img__img">
                            <img src="~assets/img/top/bg_sec01_dot.jpg" alt="BFT" />
                        </div>

                        <h3>ＢＦＴ道場</h3>
                    </div>
                    <div class="service__desc">
                        <div class="service__desc__bg"></div>
                        <div class="service__desc__txt">
                            現場で活躍できるエンジニア育成を目指し、ＢＦＴが自社のノウハウから独自開発した実践型IT技術研修です。
                        </div>
                    </div>
                    <nuxt-link class="service__button" to="/biz">
                        MORE
                        <ArrowRight />
                    </nuxt-link>
                </div>
                <div class="services__service">
                    <div class="service__img">
                        <div class="service__img__bg"></div>
                        <div class="service__img__img">
                            <img src="~assets/img/top/42303239_dot.jpg" alt="BFT" />
                        </div>
                        <h3>システムインテグレーション事業</h3>
                    </div>
                    <div class="service__desc">
                        <div class="service__desc__bg"></div>
                        <div class="service__desc__txt">
                            スタートアップ時のコンパクトなシステムから、競争優位を保つクリティカルなシステムまで、ご要望にお応えします。
                        </div>
                    </div>
                    <nuxt-link class="service__button" to="/biz#si-zigyou">
                        MORE
                        <ArrowRight />
                    </nuxt-link>
                </div>
            </div>

            <a class="link-aboutus inside-link inside-link-left link-goprev" href="#">
                <ArrowLeft />
                <span class="en">ABOUT US</span>
                <span class="ja">私たちについて</span>
            </a>
            <a class="link-news inside-link inside-link-right link-gonext" href="#">
                <span class="en">NEWS</span>
                <span class="ja">お知らせ</span>
                <ArrowRight />
            </a>
        </section>
        <section class="index__news index-section js-fullscreen-section">
            <h2>
                <span class="en">NEWS</span>
                <span class="ja">お知らせ</span>
            </h2>

            <div class="news-list">
                <div v-for="post in posts" class="news" :key="post.id">
                    <div class="news__info">
                        <div v-if="post.date" class="news__info__day">
                            {{ change_date_format(post.date) }}
                        </div>
                        <div
                            v-if="post.terms.post_tag"
                            class="news__info__tag"
                            v-html="
                                (post.terms.post_tag && post.terms.post_tag[0].name) || '#お知らせ'
                            "
                        ></div>
                    </div>
                    <div class="news__title" v-html="post.title.rendered"></div>
                    <div class="news__text" v-html="str_trim(post.content.rendered)"></div>
                    <nuxt-link class="news__more" to="/news">MORE</nuxt-link>
                </div>
            </div>

            <nuxt-link to="/news" class="link-news-page">
                ニュース一覧へ
                <ArrowRight />
            </nuxt-link>

            <a class="link-service inside-link inside-link-left link-goprev" href="#">
                <ArrowLeft />
                <span class="en">SERVICE</span>
                <span class="ja">サービス紹介</span>
            </a>
            <a class="pc link-top inside-link inside-link-right link-gonext" href="#">
                <span class="en">TOP</span>
                <span class="ja">トップページ</span>
                <ArrowRight />
            </a>
            <div class="sp privacy-links">
                <nuxt-link to="/privacy">個人情報保護方針</nuxt-link>
                <a href="/pdf/margin.pdf" target="_blank"> マージン率の公開資料 </a>
            </div>
        </section>

        <div class="index-pager js-fullscreen-pager">
            <div class="index-pager__in">
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__pointer js-fullscreen-pager-pointer js-hover"></div>
                <div class="index-pager__bar"></div>
            </div>
        </div>
        <div class="js-fullscreen-bg"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import FullscreenSlider from '~/assets/js/fullscreen-slider/';
import Hover from '~/assets/js/hover/';
import { WpApi } from '~/assets/js/wp-api/';
import Loading from '~/components/common/TheLoading';
import ArrowRight from '~/components/common/ArrowRight.vue';
import ArrowLeft from '~/components/common/ArrowLeft.vue';

export default Vue.extend({
    name: 'top',
    head() {
        return {
            titleTemplate: null,
        };
    },
    components: {
        Loading,
        ArrowRight,
        ArrowLeft,
    },
    data() {
        return {
            wd: process.browser ? window.innerWidth : 1200,
            block_size: 20, //px値
            is_loading: true, //loading
            browser: '',
        };
    },
    beforeDestroy() {
        this.toggleHtmlOverflow(true);
    },
    methods: {
        init() {
            this.toggleHtmlOverflow(false);
            this.browser = this.$ua.browser();

            // ワンブロックのサイズを算出
            this.block_size = this.wd * 0.0166667; //単位：px // 1.66667(vw)

            // サービスラッパー内をスクロールさせる
            const service_wrapper = document.getElementById('service-wrapper');
            if (this.$ua.isFromSmartphone()) {
                service_wrapper.scroll(service_wrapper.clientWidth / 4, 0);
            } else {
                service_wrapper.scrollTop = this.block_size * 11;
            }

            this.service_str_chg();
            this.fullscreen_slider();
            this.fixStyleForLegacyBrowser();

            setTimeout(() => {
                this.is_loading = false;
            }, 1500);
        },
        fixStyleForLegacyBrowser() {
            const legacyBrowsersRegex = /Edge|Internet Explorer/;
            if (legacyBrowsersRegex.test(this.browser)) {
                console.log(`this browser(${this.browser}) is legacy.`);
                // edgeの時の崩れ回避
                const service = document.querySelectorAll('.service-wrapper > .service');
                service.forEach((elm) => {
                    elm.style.width = '47.5%';
                });
            }
        },
        toggleHtmlOverflow(isOverflow) {
            const rootElement = document.querySelector('html');
            rootElement.style.overflow = isOverflow ? '' : 'hidden';
        },
        service_str_chg() {
            /** moreボタン要素 */
            const services = document.querySelectorAll('a.service');
            services.forEach((service) => {
                const button = service.getElementsByClassName('service__more')[0];
                const button_def_str = button.innerHTML;
                service.addEventListener('mouseover', (evt) => {
                    button.innerHTML = 'DETAIL';
                });
                service.addEventListener('mouseleave', (evt) => {
                    button.innerHTML = button_def_str;
                });
            });
        },
        fullscreen_slider() {
            const elmHover = document.querySelectorAll('.js-hover');
            elmHover.forEach((elm) => {
                new Hover(elm);
            });

            const fsSlider = new FullscreenSlider(
                document,
                {
                    x: window.innerWidth,
                    y: window.innerHeight,
                },
                this.$ua.isFromSmartphone()
            );

            window.addEventListener('resize', () => {
                fsSlider.reset();
                fsSlider.resize({
                    x: window.innerWidth,
                    y: window.innerHeight,
                });
            });
            fsSlider.start();

            const className_prevButton = 'link-goprev';
            const className_nextButton = 'link-gonext';
            const className_toidButton = 'link-to-id';
            const elm_PrevButton = document.querySelectorAll(`.${className_prevButton}`);
            const elm_NextButton = document.querySelectorAll(`.${className_nextButton}`);
            const elm_toidButton = document.querySelectorAll(`.${className_toidButton}`);

            elm_PrevButton.forEach((button) => {
                button.addEventListener('click', () => {
                    if (fsSlider.currentId === 0) {
                        fsSlider.goToTarget(fsSlider.maxId);
                        return;
                    }
                    fsSlider.goToPrev();
                });
            });
            elm_NextButton.forEach((button) => {
                button.addEventListener('click', () => {
                    if (fsSlider.currentId === fsSlider.maxId) {
                        fsSlider.goToTarget(0);
                        return;
                    }
                    fsSlider.goToNext();
                });
            });
            elm_toidButton.forEach((button) => {
                button.addEventListener('click', () => {
                    fsSlider.goToTarget(button.dataset.target_id || 0);
                });
            });

            // ロゴでtopに戻る
            document.getElementById('header__logo').addEventListener('click', () => {
                fsSlider.goToTarget(0);
            });
        },
        str_trim: function (txt) {
            /** 初期表示文字列の長さ */
            const display_str_length = this.$ua.isFromSmartphone() ? 30 : 70;
            // 30字以下であればそのまま返却
            if (txt.length <= display_str_length) return txt;
            // タグ存在確認用の正規表現
            const regax = /<(".*?"|'.*?'|[^'"])*?>/;
            /** タグの存在位置 */
            let num = txt.search(regax);

            if (num !== -1 && num < display_str_length) {
                // タグが存在且つタグが#{display_str_length}番目内に存在
                return txt.substr(0, num) + '...';
            } else {
                return txt.substr(0, display_str_length) + '...';
            }
        },
        change_date_format: function (str) {
            const date = new Date(str);
            return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        },
    },
    mounted() {
        this.init();
    },
    async asyncData(context) {
        const newsWpApi = new WpApi({
            baseUrl: context.env.apiBaseUrl,
            params: {
                page: 1,
                per_page: 3,
            },
        });
        const posts = newsWpApi.getPosts();
        return posts;
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page/_index.scss';
</style>
