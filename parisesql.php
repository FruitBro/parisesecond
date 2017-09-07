<?php
$con = mysqli_connect("localhost", "root", "");
//mysqli_connect($host, $user, $password, $database, $port, $socket)

if (!$con) {
	die("Could not connect" . mysqli_error());
} else {
	echo "success";
	mysqli_select_db($con, "parisesSecond");
//	$parisenum = $_REQUEST['$parisenum'];
	$nowtime = date('Y-m-d H:i:s');
	//	echo $nowtime;
	//parisedate存储错误，存储不进去
	$sqli = "UPDATE `pariseCount` SET `parisenums`= parisenums+1 WHERE `parisenum`=2";
	$result = mysqli_query($con, $sqli);
	if (!$result) {
		die("Error" . mysqli_error($con));
	} else {
		echo "成功";
	}

}
mysqli_close($con);
?>