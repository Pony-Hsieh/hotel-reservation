<template>
    <div class="container-fluid">
        <div style="width: 500px;">
            <!-- <date-picker v-model="reservingDate" range="true" value-type="format" format="YYYY-MM-DD" /> -->
            <date-picker v-model="reservingDate" range="true" value-type="format" format="YYYY-MM-DD"
                :disabled-date="notAllowedReservedDate" />
        </div>
        {{ reservingDate }}

        <button class="btn btn-outline-success" @click.prevent="sendRevervation">sendRevervation</button>
        <button class="btn btn-outline-success" @click.prevent="expandReservingDate">expandReservingDate</button>
        <button class="btn btn-outline-success"
            @click.prevent="clearAllRoomsReservation">clearAllRoomsReservation</button>
        <!-- <img src="https://dummyimage.com/1920x1080/000/fff.png&text=3" class="d-block w-100" alt="..."> -->

        <!-- <div class="row">
            <div class="col-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://dummyimage.com/1920x900/000/fff.png&text=1" class="d-block w-100"
                                alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://dummyimage.com/1920x900/000/fff.png&text=2" class="d-block w-100"
                                alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://dummyimage.com/1920x900/000/fff.png&text=3" class="d-block w-100"
                                alt="...">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-8 bg-info">
                col-8
                單一房型
                id : {{ roomID }}
            </div>
            <div class="col-4 bg-warning">
                col-4
            </div>
        </div> -->
    </div>
</template>


<script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import ThemifyIcon from "vue-themify-icons";

    // 引入 HotelDatePicker
    import DatePicker from 'vue2-datepicker';
    import '@/assets/scss/kit/datepicker.scss';
    import 'vue2-datepicker/locale/zh-tw';

    export default {
        name: "singleRoom",

        components: {
            DatePicker,
        },

        data() {
            return {
                axiosHeaders: {
                    headers: {
                        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
                        Accept: "application/json",
                        'Content-Type': 'application/json',
                    }
                },

                roomID: "",
                testRoomID: "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
                roomData: {},
                roomInfo: {},
                serverReservedInfo: {},

                // 最終要丟出的資料都放這裡
                reserveingInfo: {
                    name: "Good Name",
                    tel: "0987654321",
                    date: [],
                },
                // 只有起始、終止日期
                reservingDate: [],
                // 拓展所有預約中的日期
                expandReservingDateArr: [],
                // expandReservingDate: ["2021-04-28", "2021-04-29", "2021-04-30", "2021-05-01"],
            };
        },



        created() {
            this.judgeRoomByRouterParam(); // 先將 訂單id 存入 data return 中
            // this.getOrderData();
        },



        mounted() {
            this.getSingleRoom();
        },



        methods: {

            judgeRoomByRouterParam() {
                this.roomID = this.$route.query.roomID;
            },


            getSingleRoom() {
                const vm = this;
                vm.axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.testRoomID}`, vm.axiosHeaders)
                    .then((resolveRes) => {
                        console.log("getSingleRoom", resolveRes);
                        // vm.roomData = resolveRes.data;
                        vm.roomInfo = resolveRes.data.room[0];
                        vm.serverReservedInfo = resolveRes.data.booking;
                        console.log(vm.roomInfo);
                    }).catch(() => {
                        console.log("取得資料失敗");
                        window.reload();
                    });
            },


            notAllowedReservedDate(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                let day = date.getDate();
                if (day < 10) {
                    day = `0${day}`
                }
                let month = date.getMonth() + 1; // 月份要 + 1
                if (month < 10) {
                    month = `0${month}`
                }
                let year = date.getFullYear();
                let eachDay = `${year}-${month}-${day}`;

                let reservedDateArr = [];

                this.serverReservedInfo.forEach((item) => {
                    reservedDateArr.push(item.date);
                });


                if (date < today) { // 今日之前無法預約
                    return true; // 會禁用
                }
                else if (date > new Date(today.getTime() + 90 * 24 * 3600 * 1000)) { // 90 天後無法預約
                    return true;
                }
                else if (reservedDateArr.indexOf(eachDay) !== -1) { // 已被預約的日期無法再被預約
                    return true;
                }
            },


            sendRevervation() {
                const vm = this;
                vm.expandReservingDate();
                // 如果為空陣列，則跳出
                if (vm.expandReservingDateArr.length === 0) {
                    return;
                }
                vm.reserveingInfo = Object.assign({ ...vm.reserveingInfo }, { date: vm.expandReservingDateArr });

                vm.axios.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.testRoomID}`, vm.reserveingInfo, vm.axiosHeaders)
                    .then((resolveRes) => {
                        // console.log("resolveRes");
                        console.dir(resolveRes);
                        if (resolveRes.data.success) { // 成功預約
                            // console.log("成功預約");
                            vm.reservingDate = [];
                            vm.expandReservingDateArr = [];
                            vm.getSingleRoom();
                        }
                    })
                    .catch((rejectRes) => {
                        console.dir(rejectRes);
                        if (rejectRes.response.data.message === "您所提供的訂房時間(date)已有訂房。") {
                            console.log("不能再預定囉~");
                        }
                        else {
                            console.log("抱歉，預約失敗了，麻煩您重新整理頁面後再試一次，或是直接聯繫客服人員，謝謝~");
                        }
                    });
            },


            clearAllRoomsReservation() {
                const vm = this;
                vm.axios.delete("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", vm.axiosHeaders)
                    .then((resolveRes) => {
                        // console.dir(resolveRes);
                        if (resolveRes.data.success) {
                            console.log("成功取消所有房型的預約");
                            vm.getSingleRoom();
                        }
                    })
                    .catch((error) => {
                        console.dir(error);
                        console.log("取消預約失敗");
                    });
            },


            expandReservingDate() {
                let startDate = this.reservingDate[0];
                let endDate = this.reservingDate[1];

                let getDaysArray = function (start, end) {
                    for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
                        arr.push(new Date(dt));
                    }
                    return arr;
                };
                let daylist = getDaysArray(new Date(startDate), new Date(endDate));
                this.expandReservingDateArr = daylist.map((v) => v.toISOString().slice(0, 10));
                // console.log("this.expandReservingDateArr", this.expandReservingDateArr);
            },


            roomInfozxcvzxcv() {
                this.roomInfo;

                // 房間 id
                this.roomInfo.id = "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu";

                // 房間名稱
                this.roomInfo.name = "Single Room";

                // 房間圖片
                this.roomInfo.imageUrl = [
                    "https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
                    "https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    "https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
                ];

                // 價格
                this.roomInfo.holidayPrice = 1500;
                this.roomInfo.normalDayPrice = 1380;


                // 房間設施
                this.roomInfo.amenities = {
                    "Air-Conditioner": true,
                    "Breakfast": true,
                    "Child-Friendly": false,
                    "Great-View": false,
                    "Mini-Bar": false,
                    "Pet-Friendly": true,
                    "Refrigerator": true,
                    "Room-Service": false,
                    "Smoke-Free": true,
                    "Sofa": false,
                    "Television": true,
                    "Wi-Fi": true,
                };


                // 入退房時間
                this.roomInfo.checkInAndOut = {
                    "checkInEarly": "15:00",
                    "checkInLate": "19:00",
                    "checkOut": "10:00",
                };


                // 房間描述
                this.roomInfo.description = "Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.";


                this.roomInfo.descriptionShort = {
                    "Bed": ["Single"],
                    "Footage": 18,
                    "GuestMax": 1,
                    "GuestMin": 1,
                    "Private-Bath": 1,
                };

            },

        },
    };
</script>


<style lang="scss">
    @import "@/assets/scss/frontEnd/singleRoom.scss";
</style>