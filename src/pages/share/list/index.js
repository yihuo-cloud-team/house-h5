export default {
    name: 'list',
    data() {
        return {
            list: [
            ],
            query: {
                a: '',
                page_size: 10,
                page: 1,
                state: 1
            },
            loading: false,
            finished: false,
            isLoading: false,
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            // this.update();
        },
        // 用于更新一些数据
        async update() {
            try {
                const res = await this.$http.post('/house/movelist', this.query);
                if (res.code > 0) {
                    res.data = res.data.map(el => {
                        if (el.price.length > 4) {
                            el.price = Math.round((parseInt(el.price) / 10000) * 100) / 100 + '万元';
                        } else {
                            el.price = el.price + '元/月'
                        }
                        if (!el.img_list) return el
                        if (el.img_list.length > 0) {
                            el.img_list = el.img_list.map(img => this.$getUrl(img))
                        }
                        return el
                    })
                    this.list = [...this.list, ...res.data]
                    this.query.page = ++this.query.page
                    this.botomLoading = true
                    this.loading = false;
                    if (res.total < this.query.page_size) {
                        this.finished = true;
                    }
                } else {
                    this.finished = true;
                }
            } catch (error) {
                console.warn(error);
            }
        },
        async updateInit() {
            // this.query.a = this.data.$app.adcodearr[2],
            this.finished = false;
            this.query.page = 1
            this.list = []
            await this.update();
            this.isLoading = false
            this.$toast('刷新成功');
        }
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