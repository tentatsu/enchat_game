<script type="text/javascript" charset="utf-8">
<!--
	$(function() {
		$("#button").click(
			function () {
				$.get('put.php',{'name':$('#name').attr('value'),'point':'<?php echo $_GET["point"]; ?>'}, function(d){
					alert('登録しました');
					$("a[rel^='close']").click();
				});
			}
		)
	});
-->
</script>
<font size="2pt">最高得点おめでとう！名前をどうぞ</font><BR>
<input type="text" name="name" id="name" value="" size="15">
<input value="登録" id="button" type="button">