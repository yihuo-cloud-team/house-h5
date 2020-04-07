import assist from "@/plugins/lib/assist";
export default {
    name: 'list',
    layout: "sub",
    data() {
        return {
            loading: false,
            finished: false,
            isLoading: false,
            list: [],
            form: {
                page: 1,
                page_size: 10,
            }
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
                const res = await this.$http.post('/paper/list', this.form);
                const Assist = new assist()
                if (res.code > 0) {
                    res.data = res.data.map(el => {
                        el.first_img = this.$getUrl(el.first_img)
                        el.newdata = Assist.getDateDiff(el.add_time)
                        return el
                    })
                    this.list = [...this.list, ...res.data]
                    this.form.page = ++this.form.page
                    this.form.page_size = 5
                    this.loading = false;
                    if (res.total < 10) {
                        console.warn(1);
                        this.finished = true;
                    }
                } else {
                    this.finished = true;
                    this.$toast('没有了')
                }
            } catch (error) {
                console.warn(error);
            }
        },
        async updateInit() {
            this.list = []
            this.form.page = 1
            this.form.page_size = 10
            this.finished = false;
            await this.update()
            this.isLoading = false
            this.$toast('刷新成功');
        },
        details(e) {
            if (e.type == 1) {
                this.$router.push(`/article/info?id=${e.id}`)
            }
            if (e.type == 2) {
                window.location.href = e.content
            }
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