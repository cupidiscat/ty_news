export default function $http(option) {
	
	const {url, data} = option
	const dataObj = {
		user_id: '6039a1f05fd57200010144d5',
		...data
	}
	console.log("http中的数据", dataObj)
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name:url,
			data:dataObj
		}).then(res => {
			if (res.result.code === 200) {
				// .then
				reslove(res.result)
			} else {
				// catch
				reject(res.result)
			}
		}).catch(error => {
			reject(error)
		})
	})
}