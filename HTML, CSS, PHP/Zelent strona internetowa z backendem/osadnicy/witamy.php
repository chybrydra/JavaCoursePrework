<?php
	session_start();

	if(!isset($_SESSION['udanarejestracja']))
	{
		header('Location: index.php');
		exit(); //header przekierowuje do gra.php ale wcześniej wykonuje cały plik, exit() pomaga uniknąć wykonania reszty
	} else {
		unset($_SESSION['udanarejestracja']);
	}
	
	//usuwamy zmienne sesyjne które służyły do zapisywania stringów w rejestracji żeby nie wpisywać ich po 20 razy
	if(isset($_SESSION['fr_nick'])) unset($_SESSION['fr_nick']);
	if(isset($_SESSION['fr_email'])) unset($_SESSION['fr_email']);
	if(isset($_SESSION['fr_haslo1'])) unset($_SESSION['fr_haslo1']);
	if(isset($_SESSION['fr_haslo2'])) unset($_SESSION['fr_haslo2']);
	if(isset($_SESSION['fr_regulamin'])) unset($_SESSION['fr_regulamin']);
	
	//usuwanie błędów rejestracji
	if(isset($_SESSION['e_nick'])) unset($_SESSION['e_nick']);
	if(isset($_SESSION['e_email'])) unset($_SESSION['e_email']);
	if(isset($_SESSION['e_haslo'])) unset($_SESSION['e_haslo']);
	if(isset($_SESSION['e_regulamin'])) unset($_SESSION['e_regulamin']);
	if(isset($_SESSION['e_bot'])) unset($_SESSION['e_bot']);
?>

<!DOCTYPE HTML>
<html lang="pl">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatibile" content="IE=edge,chrome=1" />
	<title>Osadnicy - gra przeglądarkowa </title>
</head>

<body>

	Dziękujemy za rejestrację w serwisie! Możesz już zalogować się na swoje konto!<br /><br />

	<a href="index.php">Zaloguj się na swoje konto!</a>
	<br />
	<br />
	
	<form action="zaloguj.php" method="post">
	
		Login: <br/> <input type="text" name="login" /> <br />
		Hasło: <br/> <input type="password" name="haslo" /> <br /><br />
		<input type="submit" value="Zaloguj się" />
	
	</form>
	
	<?php
		if(isset($_SESSION['blad'])) echo $_SESSION['blad'];
	?>

</body>

</html>