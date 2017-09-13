import indexController from './indexController';
const initController = {
	init(app,router){
		app.use(router(_=>{
			_.get('/public/js/index',indexController.index());
		}));
	}
}
export default initController;
//app.use(router(_ => {
//_.get('/', (ctx, next) => {
//  ctx.body = 'hello'
//})
//_.post('/name/:id', (ctx, next) => {
//  // ... 
//})
//})