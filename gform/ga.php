

</head><?php 
function gaGenCookie() {
  return isset($_GET['uid'])?$_GET['uid']:gaParseCookie();
}
function gaParseCookie() {
  if (isset($_COOKIE['_ga'])) {
    $parse = explode('.', $_COOKIE["_ga"]);
	$cid = $parse['2'].'.'.$parse['3'];
  }
  else $cid = gaGenUUID();
  return $cid;
}
function gaGenUUID() {
    return mt_rand(000000000, 999999999).'.'.mt_rand(0000000000, 9999999999);
}

function gaStream() {
	$custom = 'G-X96FDEW0ZR';
	return isset($_GET['stream'])?$_GET['stream']:$custom;
}

function getKey($stream) {
	$ga4params = [
		'G-X96FDEW0ZR' => 'J8YGCm9ERg6VagBXTjv-zA'
	];
	return $ga4params[$stream];
}
function ga() {
	if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['ea']) && isset($_POST['uid']) && isset($_POST['ev'])) {
		$event = $_POST['ea'];
		$gaGenCookie = $_POST['uid'];
		$payout = $_POST['ev'];
	}
	else {
		$gaGenCookie = gaGenCookie();
		$_GET['clickid'] = str_replace('.', '_', $gaGenCookie).'--'.gaStream();
		$event = 'registration';
		$payout = 0;
	}
    if( $curl = curl_init()) {
		$data = array(
			'client_id' => $gaGenCookie,
			'user_id' => $gaGenCookie,
				'events' => array(
				'name' => $event,
				'params' => array(
					'uid' => $gaGenCookie,
					'payout' => $payout
					)
				)
		);
		$url = 'https://www.google-analytics.com/mp/collect?measurement_id='.gaStream().'&api_secret='.getKey(gaStream());
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
		curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
		curl_setopt($curl,CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($curl, CURLOPT_HEADER, false);
		$result = curl_exec($curl);
		curl_close($curl);
	}
}
	ga();
?>