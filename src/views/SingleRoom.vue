<template>
    <div>
        <NavbarComponent />

        <div class="container-fluid">
            <div class="row">
                <h2 class="text-center">
                    {{ roomInfo.name }}
                </h2>

                <!-- 房間圖片 -->
                <div class="col-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"
                        data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <div class="carousel-image" :style="{backgroundImage:`url(${roomInfo.imageUrl[0]})`}" />
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-image" :style="{backgroundImage:`url(${roomInfo.imageUrl[1]})`}" />
                            </div>
                            <div class="carousel-item active">
                                <div class="carousel-image" :style="{backgroundImage:`url(${roomInfo.imageUrl[2]})`}" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true">
                                <ThemifyIcon icon="angle-left" />
                            </span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true">
                                <ThemifyIcon icon="angle-right" />
                            </span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <!-- 房間詳細資訊 -->
                <div class="col-12 col-md-8 roomInfoText">
                    <div class="row">

                        <div class="col-md-4 descriptionShort">
                            {{ roomInfo.descriptionShort.GuestMax }}人房
                        </div>
                        <div class="col-md-8 text-right descriptionShort">
                            平日價格：NTD ${{ roomInfo.normalDayPrice }}
                            <br>
                            假日價格(含特殊節日)：NTD ${{ roomInfo.holidayPrice }}
                        </div>


                        <div class="col-12 roomDescription">
                            <p>{{ roomInfo.description }}</p>
                        </div>

                        <!-- 便利設施 -->
                        <div class="col-12">
                            房間服務：
                        </div>
                        <div class="col-6 amenitiesArea">
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Wi-Fi'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Wi-Fi']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">WiFi</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Air-Conditioner'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Air-Conditioner']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">冷氣</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Child-Friendly'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Child-Friendly']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">兒童友善</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Pet-Friendly'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Pet-Friendly']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">寵物友善</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Great-View'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Great-View']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">漂亮風景</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Room-Service'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Room-Service']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">客房服務</span>
                            </div>
                        </div>
                        <div class="col-6 amenitiesArea">
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Breakfast'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Breakfast']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">早餐</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : roomInfo.amenities['Smoke-Free'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Smoke-Free']" icon="close"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="check" style="font-weight: 900;" />
                                <span class="ml-3">抽菸</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Television'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Television']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">電視</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Sofa'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Sofa']" icon="check" style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">沙發</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Refrigerator'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Refrigerator']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">冰箱</span>
                            </div>
                            <div class="singleAmenity" :class="{'fadeInfo' : !roomInfo.amenities['Mini-Bar'] }">
                                <ThemifyIcon v-if="roomInfo.amenities['Mini-Bar']" icon="check"
                                    style="font-weight: 900;" />
                                <ThemifyIcon v-else icon="close" style="font-weight: 900;" />
                                <span class="ml-3">Mini-Bar</span>
                            </div>
                        </div>



                    </div>
                </div>

                <!-- 訂房區塊 -->
                <div class="col-12 col-md-4 reservationArea">
                    <h3 class="text-center">
                        訂房
                    </h3>

                    <label for="userName">
                        <h5>* 姓名</h5>
                    </label>
                    <input id="userName" v-model="reservingInfo.name" type="text" required>
                    <br>

                    <label for="userTel">
                        <h5>* 電話</h5>
                    </label>
                    <input id="userTel" v-model="reservingInfo.tel" type="tel" required>
                    <br>

                    <h5>* 預約日期</h5>
                    <date-picker v-model="reservingDate" range="true" value-type="format" format="YYYY-MM-DD"
                        :disabled-date="notAllowedReservedDate" />

                    <button type="button" @click="sendRevervation">
                        確認訂房
                    </button>
                </div>

                <!-- 隨機推薦房間 -->
                <h3 class="d-none d-md-block randomRoomAreaMainTitle">其他你可能感興趣的房型</h3>
                <div class="col-12 randomRoomArea">
                    <div v-for="(item, index) in randomRoom" :key="index" class="singleRecommendRoom">
                        <div class="singleRecommendRoomImage"
                            :style="{backgroundImage:`url(${randomRoom[index].imageUrl})`}" />
                        <h4>{{ randomRoom[index].name }}</h4>
                        <h5>平日價格：NTD ${{ randomRoom[index].normalDayPrice }}</h5>
                        <h5>假日價格：NTD ${{ randomRoom[index].holidayPrice }}</h5>
                        <router-link :to="{ path: 'singleRoom', query: { roomID: randomRoom[index].id }}">
                            <ThemifyIcon icon="hand-point-right" />
                            更多房間資訊
                            <ThemifyIcon icon="hand-point-left" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <FooterComponent />

        <!-- Modal -->
        <div id="feedbackModal" class="modal fade" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h3>{{ modalMsg.title }}</h3>
                        <p v-html="modalMsg.content" />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import $ from "jquery";
    import ThemifyIcon from "vue-themify-icons";

    // 引入 DatePicker
    import DatePicker from "vue2-datepicker";
    import "@/assets/scss/kit/datepicker.scss";
    import "vue2-datepicker/locale/zh-tw";

    import NavbarComponent from "@/components/NavbarComponent.vue";
    import FooterComponent from "@/components/FooterComponent.vue";

    export default {
        name: "SingleRoom",

        components: {
            DatePicker,
            ThemifyIcon,
            NavbarComponent,
            FooterComponent,
        },

        data() {
            return {
                axiosHeaders: {
                    headers: {
                        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                },
                roomID: "",
                // testRoomID: "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
                roomData: {},
                roomInfo: {}, // 房間資訊(不含 booking 資訊)
                serverReservedInfo: {},

                // 最終要丟出的資料都放這裡
                reservingInfo: {
                    name: "",
                    tel: "",
                    date: [],
                },
                // 只有起始、終止日期
                reservingDate: [],
                // 拓展所有預約中的日期
                expandReservingDateArr: [],
                // expandReservingDate: ["2021-04-28", "2021-04-29", "2021-04-30", "2021-05-01"],

                navStatus: false,

                randomRoom: [], // 隨機推薦房間
                randomNumArr: [],

                modalMsg: { // Modal 訊息內容
                    title: "",
                    content: "",
                },
            };
        },


        watch: {
            // 如果沒有監聽的話，會無法成功跳轉頁面
            $route(to, from) {
                // console.log("TO", to);
                // console.log("FROM", to);
                if (to.fullPath !== from.fullPath) {
                    this.$store.dispatch("updateIsLoading", true);
                    this.judgeRoomByRouterParam();
                    this.getSingleRoom();
                    this.getRandomRoom();
                    // document.body.scrollTop = document.documentElement.scrollTop = 0;
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }
            }
        },


        created() {
            this.$store.dispatch("updateIsLoading", true);
            this.judgeRoomByRouterParam(); // 先將 訂單id 存入 data return 中
            this.getSingleRoom();
            this.getRandomRoom();
        },


        methods: {

            judgeRoomByRouterParam() {
                this.roomID = this.$route.query.roomID;
            },


            // 取得單一房型資料
            getSingleRoom() {
                const vm = this;
                vm.axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomID}`, vm.axiosHeaders)
                    .then((resolveRes) => {
                        // console.log("getSingleRoom", resolveRes);
                        vm.roomInfo = resolveRes.data.room[0];
                        vm.serverReservedInfo = resolveRes.data.booking;
                        vm.$store.dispatch("updateIsLoading", false);
                    }).catch(() => {
                        // console.log("取得資料失敗");
                        window.reload();
                    });
            },


            // 停用已被預約的日期
            notAllowedReservedDate(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                let day = date.getDate();
                if (day < 10) {
                    day = `0${day}`;
                }
                let month = date.getMonth() + 1; // 月份要 + 1
                if (month < 10) {
                    month = `0${month}`;
                }
                const year = date.getFullYear();
                const eachDay = `${year}-${month}-${day}`;

                const reservedDateArr = [];

                this.serverReservedInfo.forEach((item) => {
                    reservedDateArr.push(item.date);
                });


                if (date < today) { // 今日之前無法預約
                    return true; // 會禁用
                }
                if (date > new Date(today.getTime() + 90 * 24 * 3600 * 1000)) { // 90 天後無法預約
                    return true;
                }
                if (reservedDateArr.indexOf(eachDay) !== -1) { // 已被預約的日期無法再被預約
                    return true;
                }
            },


            // 發送預約資訊
            sendRevervation() {
                const vm = this;
                vm.expandReservingDate();

                // 如果 expandReservingDateArr 為空陣列，則跳出
                if (vm.expandReservingDateArr.length === 0) {
                    return;
                }
                vm.reservingInfo = Object.assign({ ...vm.reservingInfo }, { date: vm.expandReservingDateArr });

                vm.axios.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomID}`, vm.reservingInfo, vm.axiosHeaders)
                    .then((resolveRes) => {
                        // console.log('resolveRes');
                        // console.dir(resolveRes);

                        if (resolveRes.data.success) { // 成功預約
                            // console.log("成功預約");
                            // 先跳出 Modal
                            vm.showModal("成功");
                            // 再重置預約資料
                            vm.reservingInfo.name = "";
                            vm.reservingInfo.tel = "";
                            vm.reservingDate = [];
                            vm.expandReservingDateArr = [];
                            vm.getSingleRoom();
                        } else {
                            vm.showModal("失敗");
                        }
                    })
                    .catch((rejectRes) => {
                        // console.dir(rejectRes);
                        vm.showModal("失敗");
                    });
            },


            // 清除此房型所有預約日期
            clearAllRoomsReservation() {
                const vm = this;
                vm.axios.delete("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", vm.axiosHeaders)
                    .then((resolveRes) => {
                        // console.dir(resolveRes);
                        if (resolveRes.data.success) {
                            // console.log("成功取消所有房型的預約");
                            vm.getSingleRoom();
                        }
                    })
                    .catch((error) => {
                        // console.dir(error);
                        // console.log("取消預約失敗");
                    });
            },


            expandReservingDate() {
                const startDate = this.reservingDate[0];
                const endDate = this.reservingDate[1];

                const getDaysArray = function (start, end) {
                    for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
                        arr.push(new Date(dt));
                    }
                    return arr;
                };
                const daylist = getDaysArray(new Date(startDate), new Date(endDate));
                this.expandReservingDateArr = daylist.map(v => v.toISOString().slice(0, 10));
                // console.log("this.expandReservingDateArr", this.expandReservingDateArr);
            },


            showModal(param = "成功") {
                if (param === "成功") {
                    this.modalMsg.title = "成功預約！";
                    const dateArr = this.expandReservingDateArr.map(item => `${item} 晚上`).join(" <br/>");
                    // .map() 記得要 return ，不然會跑出 undefined 喔~
                    this.modalMsg.content = `您已成功預約：<br/>${dateArr}<br/><br/>期待您的蒞臨~`;
                } else {
                    this.modalMsg.title = "預約失敗QQ";
                    this.modalMsg.content = "請重新整理頁面後再次嘗試，或聯絡客服人員<br/><br/><i class='ti-mobile'></i> 電話：02-2320-6239<br/><i class='ti-email'></i>  E-mail：public_web@oop.gov.tw";
                }
                $("#feedbackModal").modal("show");
            },


            // 取得兩間隨機推薦的房間
            getRandomRoom() {
                const vm = this;
                vm.randomRoom = []; // 先重置 randomRoom 資料，避免在 singleRoom 頁面彼此跳轉時不斷增加

                vm.axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", vm.axiosHeaders)
                    .then((resolveRes) => {
                        // console.log(resolveRes);
                        // let allRoomData;
                        const temp = [];
                        let allRoomData = resolveRes.data.items;

                        // 移除頁面中的房間
                        allRoomData.forEach((item) => {
                            // 因為 rooms 的 api 資料沒有 預約的資料，所以不能從這個 api 撈指定房間的資料
                            if (item.id !== vm.roomID) {
                                temp.push(item);
                            }
                        });
                        // 隨機取兩間房間
                        vm.getRandomNum();
                        vm.randomRoom.push(temp[vm.randomNumArr[0]]);
                        vm.randomRoom.push(temp[vm.randomNumArr[1]]);
                        // console.log("vm.randomRoom", vm.randomRoom);
                    })
                    .catch((rejectRes) => {
                        // console.log(rejectRes);
                    });
            },


            getRandomNum() {
                const arr = [0, 1, 2, 3, 4]; // 原有陣列放全部數字
                const result = []; // 開另一個空陣列


                // for 寫法
                /*
                    for (let i = 0; i >= 0; i++) {
                        const randomNum = Math.floor(Math.random() * arr.length); // 取得 0~4 隨機數字
                        // console.log("result[0]", result[0]);
                        if (result[0] !== randomNum) { // 避免加入重複的數字
                            // 如果是空陣列，一定可以加入，因為空陣列的 result[0] 是 undefined
                            result.push(randomNum);
                        }
                        if (result.length === 2) { // 因為我只有要取兩個不同的隨機數字，因此長度為 2 的時候就停止
                            break;
                        }
                    }
                */


                // while 寫法
                while (result.length < 2) {
                    const randomNum = Math.floor(Math.random() * arr.length); // 取得 0~4 隨機數字
                    if (result[0] !== randomNum) { // 避免加入重複的數字
                        // 如果是空陣列，一定可以加入，因為空陣列的 result[0] 是 undefined
                        result.push(randomNum);
                    }
                }


                this.randomNumArr = result;
                // console.log("this.randomNumArr", this.randomNumArr);
            },

        },
    };
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/frontEnd/singleRoom.scss";
</style>