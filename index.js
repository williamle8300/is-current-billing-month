module.exports = function (someDate) {
	
	var dateNow = new Date
	var currentMonth = dateNow.getMonth() + 1
	var currentYear = dateNow.getFullYear()
	var someMonth = someDate.getMonth() + 1
	var someYear = someDate.getFullYear()
	
	//overlapping month and year
	if (currentMonth === someMonth && currentYear === someYear) {
		return true
	}
	
	return false
}

