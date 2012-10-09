
/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult

 
var procedure1Statement = WL.Server.createSQLStatement("select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}

 */

var getCustomerListStmt = WL.Server.createSQLStatement("select * from customer");
function getCustomerList() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : getCustomerListStmt
	});
}

var getSalesOrderByCustStmt = WL.Server.createSQLStatement("select * from sales_order where cust_id = ?");

function getSalesOrderByCust(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : getSalesOrderByCustStmt,
		parameters : [param]
	});
}
