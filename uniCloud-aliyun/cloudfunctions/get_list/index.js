'use strict';
// 获取数据库的引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		name,		
		page = 1,
		pageSize = 10
	} = event
	let matchObj = {}
	if(name !== "全部") {
		matchObj = {
			classify: name
		}
	}
	// 聚合 ： 更精细化的去处理数据 求和 、分组、指定那些字段
	const list = await db.collection('article')
		.aggregate()
		.match(matchObj)
		.project({
			content: 0
		})
		// 要跳过多少数据
		.skip(pageSize * (page - 1))
		.limit(pageSize)
		.end()
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
