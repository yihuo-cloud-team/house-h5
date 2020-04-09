import AreaList from '../../plugins/lib/area'
export default {
  name: 'zufang',
  layout: 'sub',
  data() {
    return {
      form: {
        title: '', //关键字
        page_size: 10,
        page: 1,
        is_up: 1,
        a: '310117', //区
        house_type: 2 //租房
      },
      list: [],
      finished: false,
      loading: false,
      district: '松江区',
      show: false,
      areaList: [],
      AreaArr: [],
      Areaval:""
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
      this.areaList = AreaList;
    },
    search(){
        this.form.page=1;
        this.finished =false;
        this.list = []
        this.update()
    },
    // 用于更新一些数据
    async update() {
      if (this.finished) return;
      this.loading = true;
      const res = await this.$http.post('house/list', this.form);
      if (res.code > 0) {
        this.list = [...this.list, ...res.data];
        this.form.page++;
      } else {
        this.finished = true;
      }
      this.loading = false;
    },
    getAddress() {
      let mapObj = new AMap.Map('iCenter');
      mapObj.plugin('AMap.Geolocation', () => {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
        });
        geolocation.getCurrentPosition((status, result) => {
          if (status == 'complete') {
            this.Areaval = result.addressComponent.adcode
            // this.query.a = result.addressComponent.adcode
            this.district = result.addressComponent.district

            this.update();
          } else {
            console.warn(status, '定位失败');
            this.update();
          }
        });
      })
    },
    confirm(e) {
      this.AreaArr = e;
      this.district = e[2].name;
      this.form.a = e[2].code;
      this.list = []
      this.form.page =1;
      this.finished = false;
      this.update();
      this.show = false;
    },
    cancel() {
      this.show = false;
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
