<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
    
     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
.center{
text-align:center;

}

input[type=text] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


input[type=submit] {
  width: 15%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

body {

  border-radius: 2px;
  background-color: #f2f2f2;
  padding: 20px;
}




</style>
</head>
<body>

<div class="center">
<h1 class="center"><b><i>Check For Credit Card Eligibility</i></b></h1>

<form action="check">
<label><h2><b><i>Enter Pan  Number:</i></b></h2></label><br>
<input type="text" name="panNo" required  autofocus="true"
							pattern="[A-Z0-9]{10}" title="10 Character Alpha-Numeric"  >

<br><br>
<input type="submit" value="Check">




</form>

</div>