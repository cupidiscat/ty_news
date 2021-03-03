import $http from "./http.js"

export const get_label = (data) => {
	return $http({
		url: 'get_label',
		data
	})
}

export const get_list = (data) => {
	return $http({
		url: "get_list",
		data
	})
}

export const update_like = (data) => {
	console.log("api中的数据", data)
	return $http({
		url: 'update_like',
		data
	})
}
