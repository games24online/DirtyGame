

</head><?php
include('./ga.php');
include('./inboxsuite.php');
include('./postback.php');
include('./registration.php');
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
$acceptLang = ['de', 'fr', 'es', 'it']; 
$lang = in_array($lang, $acceptLang) ? $lang : 'en';
if(isset($_GET['debug']) && isset($_GET['print']) && isset($_GET['lang'])) {
	$lang = $_GET['lang'];
}
$redirect = "http://adverster.joinsafelyonline.com/routes/Adverster/?ofid=166&j2pnc=1&autoun=1&autopw=1&a_aid=Adverster&a_bid=bb4f6944&x_clickid=".$_GET['clickid']."&email=".$_POST['email']."&zip=".$_POST['zip']."&lang=".$lang;
if(isset($_GET['debug']) && isset($_GET['print'])) {
	var_dump($_POST);
	echo '<br/><br/>';
	echo $redirect;
} else {
	header("HTTP/1.1 301 Moved Permanently");
	header("Location: ".$redirect);
}
exit(); 
?>
