import Http from '../plugins/Http'
import config from '../plugins/config'
export default function (context) {

   
    if (typeof config.jwt() == 'undefined') {
        // 未登录
        localStorage.location = location.href
        console.log(location.href)
        if (context.route.name != 'login') {
            context.app.router.replace('/login');
        }

    } else {

        return new Promise(async (next) => {
            try {
                next();
            } catch (e) {
                console.warn(e);
                console.warn('验证失败！');
                context.app.router.replace('/login');
            }
        });


    }
}