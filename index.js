module.exports = function (invoiceDate) {
	
	var dateNow = new Date
	var currentMonth = dateNow.getMonth() + 1
	var currentYear = dateNow.getFullYear()
	var invoiceMonth = invoiceDate.getMonth() + 1
	var invoiceYear = invoiceDate.getFullYear()
	
	//overlapping month and year
	if (currentMonth === invoiceMonth && currentYear === invoiceYear) {
		return true
	}
	
	return false
}

