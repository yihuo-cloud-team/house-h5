import Vue from 'vue'
import area from './lib/area'
Vue.filter('arrToStr', function (value) {
    if (!value) return '';
    return value.join(',');
})
Vue.filter('tofixed', function (value) {
    if (!value) return 0;
    return (value * 1).toFixed(2);
})
Vue.filter('areaToStr', function (value) {
    if (!value) return '';
    let areaStr = '';
    try {

        if (typeof area.province_list[value] != 'undefined') {
                
            areaStr = area.province_list[value];
        }
        if (typeof area.city_list[value] != 'undefined') {
            areaStr = area.city_list[value];
        }
        if (typeof area.county_list[value] != 'undefined') {
            areaStr = area.county_list[value];
        }
    } catch (error) {
        console.warn(`区号[${value}]不存在`);
    }
    return areaStr;
})