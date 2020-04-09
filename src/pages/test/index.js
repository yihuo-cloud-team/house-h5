export default {
  name: 'test',
  layout: 'sub',
  data() {
    return {
      list: [{
        a: "310117",
        add_time: "2020-04-03 13:31:10",
        area: " 89.8   ",
        bedroom: 4,
        c: "310100",
        fill: "精装",
        floor: "共19层   ",
        frequency: "",
        house_state: "已开售",
        id: 5956,
        img_list: ["/public/files/20200403/202004030130116683.jpg", "/public/files/20200403/202004030130156583.jpg"],
        number: "1",
        p: "310000",
        price: "265万  ",
        remarks: "信达蓝尊-松江-长水街277弄  ",
        room: 2,
        state: 1,
        title: "松江大学城 万达旁 买一楼送65平地下室 尾盘扫   ",
        towards: "南",
        type: "低层",
        wc: 2,
        year: "未知",
        label:['近地铁','公寓品质','后现代化']
      }]
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
      // const res = await this.$http.post('', {});
    },
  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
  // 在实例创建完成后被立即调用
  created() {},
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {},
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {
    this.init();
    this.$nextTick(() => {});
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() {},
  // keep-alive 组件激活时调用。
  activated() {},
  // keep-alive 组件停用时调用。
  deactivated() {},
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {},
  //Vue 实例销毁后调用。
  destroyed() {},
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() {},
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {},
  // 组件列表
  components: {},
};
