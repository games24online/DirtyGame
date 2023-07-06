

</head><?php
if( $curl = curl_init()) {
    if($partner ==  'dp') {
        $adv = 'dateprofit';
    }
    else if($partner ==  'bc') {
        $adv = 'braincashe';
    }
	if(mb_substr($partner,0,2) == 'vp') {
        $adv = 'vipoffers';
    }
    else {
        $adv = 'unknown';
    }
    $url = 'https://indextrck.com/postback/?clickid='.$_GET['clickid'].'&payout=0&adv='.$adv.'&cnv_status=Donate&et=registration';
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    curl_exec($curl);
    curl_close($curl);
}
?>