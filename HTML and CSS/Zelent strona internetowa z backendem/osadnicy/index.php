<!-- konto do logowania:
adam
qwerty123
-->

<?php
	session_start();

	if((isset($_SESSION['zalogowany']))&&($_SESSION['zalogowany']==true))
	{
		header('Location: gra.php');
		exit(); //header przekierowuje do gra.php ale wcześniej wykonuje cały plik, exit() pomaga uniknąć wykonania reszty
	}
?>

<!DOCTYPE HTML>
<html lang="pl">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatibile" content="IE=edge,chrome=1" />
	<title>Osadnicy - gra przeglądarkowa </title>
</head>

<body>

	Tylko martwi ujrzeli koniec wojny - Platon<br /><br />

	<a href="rejestracja.php">Rejestracja - załóż darmowe konto</a>
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