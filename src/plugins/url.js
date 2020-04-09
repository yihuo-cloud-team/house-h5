import Vue from 'vue';

let Url = {
  // serverUrl: 'http://offapi.local.com/admin',
  serverUrl: 'https://api.house.yihuo-cloud.com/h5',//生产环境
  // serverUrl: 'http://192.168.0.115:99/h5',//李子龙 
  // serverUrl: 'http://192.168.0.153:12189/client',//李传浩的本地
  // serverUrl: 'http://192.168.0.122:82/admin',//吴杰
  // uploadUrl: '',
  uploadUrl: 'https://api.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


