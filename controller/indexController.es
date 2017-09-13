const indexController = {
	index(){
		return async(ctx,next)=>{
			ctx.body = await ctx.reder('index.html',{
				title:'大拇指点赞页面'
			})
		}
	}
}
export default indexController;
