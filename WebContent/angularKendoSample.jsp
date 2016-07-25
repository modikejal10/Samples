<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="js/dependency/jquery.min.js"></script>
<script src="js/dependency/angular.min.js"></script>
<script src="js/dependency/angular-ui-router.min.js"></script>
<script src="js/dependency/kendo.all.min.js"></script>
<link rel="stylesheet" href="css/dependency/kendo.common.min.css"></link>
<link rel="stylesheet" href="css/dependency/kendo.blueopal.min.css"></link>
<script src="js/app.js"></script>
<script src="js/controllers/dynamicFormController.js"></script>
<script src="js/router/routes.js"></script>
<link rel="stylesheet" href="css/draganddrop.css"></link>
</head>
<body>
<body ng-app="Samples">
	<div ui-view="main" style="height:100%"></div>
</body>
</body>
</html>