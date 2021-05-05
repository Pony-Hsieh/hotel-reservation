<template>
    <div>

        <NavbarComponent />

        <div class="roomSection">
            <!-- 桌機板 hover 才可見房間資訊 -->
            <!-- 手機板 直接顯示房間資訊 -->
            <!-- 也就是 < 992 直接固定為 hover 狀態-->
            <div v-for="(item, index) in allRoomData" :key="index" class="singleRoomArea" style="position: relative;">
                <div :style=" {backgroundImage:'url('+item.imageUrl+')'}">
                    <div class="singleRoomInfo">
                        <div>
                            <h3>{{ item.name }}</h3>
                            <a href="#" @click.prevent="toSingleRoom(item.id)">
                                <ThemifyIcon icon="hand-point-right" />
                                更多房間資訊
                                <ThemifyIcon icon="hand-point-left" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterComponent />

    </div>
</template>


<script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import ThemifyIcon from "vue-themify-icons";

    export default {
        name: 'Rooms',

        components: {
            NavbarComponent,
            FooterComponent,
            ThemifyIcon,
        },

        data() {
            return {
                allRoomData: "",
            }
        },

        created() {
            this.getAllRoom();
        },


        methods: {

            getAllRoom() {
                const vm = this;
                vm.axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
                    headers: {
                        authorization:
                            `Bearer ${process.env.VUE_APP_TOKEN}`, // 已改為自己的 token
                        'content-type': 'application/json',
                    },
                })
                    .then((resolveRes) => {
                        // console.log(resolveRes);
                        vm.allRoomData = resolveRes.data.items;
                        // console.log("vm.allRoomData", vm.allRoomData);
                    })

                    .catch((rejectRes) => {
                        // console.log(rejectRes);
                    });
            },

            toSingleRoom(roomID) {
                this.$router.push({ path: '/singleRoom', query: { roomID: roomID } });
            },

        },
    };
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/frontEnd/rooms.scss";
</style>