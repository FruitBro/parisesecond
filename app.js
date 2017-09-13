
import Koa from 'koa';
import router from 'koa-simple-router';
import initController from './controller/initController';
import render from 'koa-swig';
import co from 'co';
import server from 'koa-static';
import 'babel-polyfill';
import 'babel-register';
import config from './config/config';
const app = new Koa();
initController.init(app,router);
// response 
//这个路由的代码就不要了 
//app.use(ctx => {
//ctx.body = 'Hello Koa';
//});
app.context.render = co.wrap(render({
  // ...your setting 
  root: config.get('viewsDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
app.use(server(config.get('staticDir')));
app.listen(config.get('sport'),function(){
	console.log('sever started');
});
