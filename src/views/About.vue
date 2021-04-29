<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {

            };
        },

        mounted() {
            this.getAPITest();
        },

        methods: {
            getAPITest() {
                // console.log(process.env.VUE_APP_TOKEN);
                let roomID = "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu";
                axios
                    // .get('https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu', {
                    .get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomID}`, {
                        headers: {
                            authorization:
                                `Bearer ${process.env.VUE_APP_TOKEN}`, // 已改為自己的 token
                            'content-type': 'application/json',
                        },
                    })
                    .then((value) => {
                        console.log(value);
                    });
            },
        },
    };
</script>