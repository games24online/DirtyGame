(function(window){
	var lang = function(str) {
		var localize = navigator.language || navigator.userLanguage;
        var def = 'en';
		if(typeof localize == 'undefined') {
			localize = def;
		}
		else {
			var local = localize.split('-');
			localize = local[0];
		}
		var store = {
			
			'en': {
				'title': 'Play for free!',
                'cookie-1': 'Our site uses cookies to personalize content and adverts, to provide social media features and to analyze traffic.',
                'cookie-2': 'We use',
                'cookie-3': 'cookies',
                'cookie-4': 'to give you the best possible experience on our website. By clicking \'Ok, don\'t show it again\'',
                'cookie-5': 'or \'X\' on this banner, or using our site, you consent to the use of cookies unless you have disabled them.',
                'cookie-6': 'Ok',
                'cookie-7': 'don\'t show it again',
                'footer-1': 'Privacy Policy',
                'footer-2': 'copyright © 2021, family-games.online. all rights reserved.',
				'p1-----kmhjgnhfb-1': '<img src="./files/gender.png" alt="Choose your Gender">',
                'p1-----kmhjgnhfb-2': '<img src="./files/male.png" alt="Male" onmouseover="this.src=\'./files/male_over.png\'" onmouseout="this.src=\'./files/male.png\'">',
				'p1-----kmhjgnhfb-3': '<img src="./files/female.png" alt="Female" onmouseover="this.src=\'./files/female_over.png\'" onmouseout="this.src=\'./files/female.png\'">',
                'p1-----step2-1': '<img src="./files/character.png" alt="Choose your Character">',
                'p1-----step2-2': '<img src="./files/female1.png" alt="Leliana" onmouseover="this.src=\'./files/female1_over.png\'" onmouseout="this.src=\'./files/female1.png\'">',
                'p1-----step2-3': '<img src="./files/female2.png" alt="Vereesa" onmouseover="this.src=\'./files/female2_over.png\'" onmouseout="this.src=\'./files/female2.png\'">',
                'p1-----xfnfxgndfgn-1': '<img src="./files/confirm_age.png" alt="Confirm your Age">',
                'p1-----xfnfxgndfgn-2': '<img src="./files/age.png" onmouseover="this.src=\'./files/age_over.png\'" onmouseout="this.src=\'./files/age.png\'" alt="Verify age">',
                'p2-----kmhjgnhfb-1': 'WARNING!',
                'p2-----kmhjgnhfb-2': 'YOU WILL PLAY THE MOST ADDICTING GAMES ON THE INTERNET',
                'p2-----kmhjgnhfb-3': 'Please don\'t spread the word',
                'p2-----kmhjgnhfb-4': 'OK',
                'p2-----kmhjgnhfb-5': 'Extreme Free Simulator Games',
                'p2-----kmhjgnhfb-6': 'Are you ready to play the most extreme adult games ever made? We offer several exclusive adult games that will blow your mind. These 3D adult games are quickly becoming some of the most played adult games ever made. You will not be able to play our games anywhere but here! Play extreme versions of some of your favorite adult cartoon games, such as Grand Theft Auto, Spider man, Superman, Batman, The Incredible Hulk, and many more. Please note that these games contain violence and adult situations. Gameplay focuses on an open world where the player can choose missions to progress an overall story, as well as engaging in side activities, all consisting of action-adventure, driving, third-person shooting, occasional role-playing, stealth, and racing elements. We do require players that play our anime games to be at least 18 years old because of adult situations, for example, you may have to go into a strip club or adult store to collect money owed to you. Be aware of female cops that may try and take advantage of you as well. Absolutely anything can happen in our 3D games!',
                'p2-----kmhjgnhfb-7': 'If you play as a superhero in our anime games, be prepared to save women from evil. Run through cities and stop violence, bad guys, crimes, and much more! Basically anything can happen in these games and we are always adding new missions and situations. You will not find adult games offered like this anywhere else. Our cartoon games are offered for a limited time, while we build up a large user database. We also have online multiplayer, where you will run into other real players in these adult 3D games. You can chat with other players as well, and even team up with them to take down villians!',
                'p2-----kmhjgnhfb-8': 'Please don\'t hesitate to contact us for any reason. We also appreciate any feedback about these adult games, and especially any bugs you may find.',
                'p2-----step2-1': 'ATTENTION!',
                'p2-----step2-2': 'Before we can allow you to enter the #1 rated exotic games on the internet, we need to ask you a couple of questions.',
                'p2-----step2-3': 'CONTINUE',
                'p2-----xfnfxgndfgn-1': 'QUESTION #1',
                'p2-----xfnfxgndfgn-2': 'Anything can happen in this game. You can face socially stigmatized content or receive offers that would cross the line for most people. Are you ok with this?',
                'p2-----xfnfxgndfgn-3': 'Yes',
                'p2-----xfnfxgndfgn-4': 'No', 
                'p2-----thsthrth-1': 'QUESTION #2',
                'p2-----thsthrth-2': 'These games might require self-control and even obedience. This can be offensive to some players. Will this be ok with you?',
                'p2-----thsthrth-3': 'Yes',
                'p2-----thsthrth-4': 'No',
                'p2-----step5-1': 'QUESTION #3',
                'p2-----step5-2': 'Do you have any medical conditions that could arise from playing these games? For example: seizures, addiction, or aggressive behavior.',
                'p2-----step5-3': 'Yes',
                'p2-----step5-4': 'No',
                'p2-----step6-1': 'QUESTION #4',
                'p2-----step6-2': 'Are you at least 24 years old? You must be 24+ to play these games because of the graphic content.',
                'p2-----step6-3': 'Yes',
                'p2-----step6-4': 'No',
                'p2-----step7-1': 'What Do You Like in Games?',
                'p2-----step7-2': '(Please choose up to 3 fbfbdbs)',
                'p2-----step7-3': 'Exotic',
                'p2-----step7-4': 'Extreme Control',
                'p2-----step7-5': 'Hot Women',
                'p2-----step7-6': 'Celebrity Characters',
                'p2-----step7-7': 'Next &raquo;',
                'p2-----step8-1': 'Who Would You Choose as Your First Partner?',
                'p2-----step8-2': '(Please select 1 fbfbdb)',
                'p2-----step8-3': 'Your Neighbor',
                'p2-----step8-4': 'Your Boss\'s Wife',
                'p2-----step8-5': 'Famous Celebrity',
                'p2-----step8-6': 'Monster',
                'p2-----step8-7': 'Step-Sister',
                'p2-----step8-8': 'Next &raquo;',
                'p2-----step9-1': 'Is multiplayer mode important to you?',
                'p2-----step9-2': 'Yes',
                'p2-----step9-3': 'No',
                'p2-----step9-4': 'It doesn\'t matter',
                'p2-----step9-5': 'Next &raquo;',
                'p2-----kmhjgnhfb0-1': 'Detected',
                'p2-----kmhjgnhfb0-2': 'Congrats! Our  game is compatible with your browser.',
                'p2-----kmhjgnhfb0-3': 'No download or app is required. Have fun!',
                'p2-----kmhjgnhfb0-4': 'Continue &raquo;',
                'p2-----kmhjgnhfb1-1': 'Verification',
                'p2-----kmhjgnhfb1-2': 'People from your country need to provide a form of age verification (you will not be charged).',
                'p2-----kmhjgnhfb1-3': 'Verify Me (FREE)',
                'p2-----kmhjgnhfb2-1': 'Free Accounts Remaining: 1',
				'p3-----kmhjgnhfb-1': 'Thank you for signing up!',
				'p3-----kmhjgnhfb-2': 'In order to complete the subscription process, simply check your inbox and click on the link in the email we have just sent you. ',
				'p3-----kmhjgnhfb-3': '* If it is not there, please check your junk mail folder and if it is in the junk mail folder, remember to mark the email as \'not junk\'.',
			}
		}	
		if(typeof store[localize] == 'undefined') {
            localize = def;
        }
        
		return store[localize][str];
      
	}
	document.title = lang('title');
	window.lang = lang;
})(window);
