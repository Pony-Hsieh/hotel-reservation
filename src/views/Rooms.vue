<template>

    <div class="container-fluid">
        <div class="roomSection">
            <!-- 桌機板 hover 才可見房間資訊 -->
            <!-- 手機板 直接顯示房間資訊 -->
            <!-- 也就是 < 992 直接固定為 hover 狀態-->
            <div v-for="(item, index) in allRoomData" :key="index" class="singleRoomArea" style="position: relative;">
                <div :style=" {backgroundImage:'url('+item.imageUrl+')'}">
                    <!-- <div class="filter"></div> -->
                    <div class="singleRoomInfo">
                        {{ item.name }}
                        <a href="#" @click.prevent="toSingleRoom(item.id)">更多資訊</a>
                    </div>
                </div>
                <!-- <img :src="item.imageUrl" alt="" > -->
            </div>
        </div>
    </div>



    <!-- <section class="container-fluid bg-light text-white py-5" style="position:relative;">

            <div class="row">
                <div class="col-lg-4 bg-cover"
                    style="position: absolute; top: 0; bottom: 0; background-image: url('https://images.unsplash.com/photo-1553863077-5342c5526545?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80');">
                </div>
            </div>

            <div class="container text-md-dark">
                <div class="row justify-content-end">
                    <div class="col-lg-8">

                        <h3>標題 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores cupiditate
                            commodi atque? Veritatis sequi omnis inventore ut natus laborum magnam provident repellat.
                            Dolorum, accusamus facere. Necessitatibus unde, consequatur neque dolor a porro excepturi
                            aut nobis voluptates ducimus ullam ipsam facere ex ea sapiente quia qui sequi molestiae eos
                            illum?
                        </p>
                        <button class="btn btn-outline-info">查看更多</button>

                        <div class="row mt-3">
                            <div class="col-md-6">
                                <h4>標題 2-1</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis harum
                                    ipsam magni facere earum consequuntur quis impedit ipsum reiciendis?
                                </p>
                            </div>
                            <div class="col-md-6">
                                <h4>標題 2-2</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis harum
                                    ipsam magni facere earum consequuntur quis impedit ipsum reiciendis?
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section> -->

</template>


<script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import ThemifyIcon from "vue-themify-icons";

    export default {
        name: 'rooms',
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
                        console.log(resolveRes);
                        vm.allRoomData = resolveRes.data.items;
                        console.log("vm.allRoomData", vm.allRoomData);
                    })

                    .catch((rejectRes) => {
                        console.log(rejectRes);
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