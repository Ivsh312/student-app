<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored='false'%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>here</title>
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">
</head>
<body>
<script type="text/javascript">
		var d = $
		{
			Error
		};
		if (b === "incorrect Intput")
			window.alert("incorrect Intput");
		if (b === "was added successfully")
			window.alert("was added successfully");
	</script>
	
	<form action="/student-app/nprofessor" method="POST"
		class="container-custom2">
		<div class="container-custom">
			<div class="form-group">
				<label>firstName</label> <input type='text' name='firstName'
					class="form-control">
			</div>
			<div class="form-group">
				<label>secondName</label> <input type='text' name='secondname'
					class="form-control">
			</div>
			<div class="form-group">
				<label>avg Mark</label> <input type='text' name='avgMark'
					class="form-control">
			</div>
			<button class="btn btn-success">Add</button>

		</div>
	</form>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.min.js"></script>
</body>
</html>