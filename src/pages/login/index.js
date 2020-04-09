export default {
    name: 'login',
    layout: 'root',
    data() {
        return {
            userInfo: {
                wx_head: "",
                wx_name: ""
            },
            msg: '',
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {

            this.vCode();

            // 

        },
        /**
         * 验证是否有code，没有则跳转
         */
        vCode() {
            if (typeof this.$route.query['code'] == 'undefined') {
                // 跳转
                const appid = 'wxab138fa1fa76f66e';
                const redirect_uri = encodeURIComponent(window.location.href);
                window.location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`);
            } else {
                // 登陆
                const code = this.$route.query.code;
                this.login(code);
            }
        },
        // 用于更新一些数据
        async login(code) {
            const res1 = await this.$http.post('/auth/openid', {
                code: code
              });
              const res = await this.$http.post('/auth/login',
                res1.data
              );
            if (res.code >= 1) {
                localStorage.jwt = res.jwt;
                localStorage.userInfo = JSON.stringify(res.data);
                this.userInfo = res.data;
                this.$router.push(`/${localStorage.location}`)
            }

        },
    
    },
    // 计算属性
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
        this.init();
        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {},
    // 组件列表
    components: {},
};