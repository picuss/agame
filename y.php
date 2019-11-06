<?php 
	echo $_SERVER['REMOTE_ADDR'];
	echo "<br>";
	echo file_get_contents("http://punder.ru/agame/y.php");
?>