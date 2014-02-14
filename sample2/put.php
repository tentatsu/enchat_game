<?php
$val = str_replace(":","",$_GET["name"]).":".$_GET["point"];
echo file_put_contents("max.txt", $val);
?>