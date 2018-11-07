<?php 

	session_start();
	
	if ((!isset($_POST['login']))||(!isset($_POST['haslo'])))
	{
		header('Location: index.php');
		exit();
	}
	
	require_once "connect.php"; //błąd krytyczny jeśli nie uda się załadować
	//inna opcja to include
	
	//połączenie z bazą danych:
	$polaczenie = @new mysqli($host,$db_user,$db_password,$db_name);
	//@ - wyrażenie, przed którym postawiono znak nie spowoduje wyświetlania się jakiegokolwiek błędu lub ostrzeżenia ze strony PHP
	
	//sprawdzenie czy udało się nawiązać połączenie:
	if ($polaczenie -> connect_errno!=0)
	{
		echo "Error: ".$polaczenie->connect_errno;
	} else {
		$login = $_POST['login'];	
		$haslo = $_POST['haslo'];	
		
		//htmlentities zamienia np. &quot; zamiast ", albo &lt; zamiast <
		$login = htmlentities($login,ENT_QUOTES,"UTF-8");
				
		//mysqli_real_escape_string - specjalna funkcja zabezpieczająca przed "wstrzykiwaniem sql" - przed użyciem komentarza -- czy apostrofów
		
		if($rezultat = @$polaczenie->query(
		sprintf("SELECT * FROM uzytkownicy WHERE user = '%s'", 
		mysqli_real_escape_string($polaczenie,$login))))
		{
			$ilu_userow = $rezultat->num_rows;
			if($ilu_userow>0)
			{
				$wiersz = $rezultat->fetch_assoc(); //tworzy tablice asocjacyjna o takich samych nazwach jak nazwy kolumn w bazie danych
				
				if(password_verify($haslo, $wiersz['pass'])){
					
					$_SESSION['zalogowany']=true; //to mi mówi, że jestem zalogowany					
					$_SESSION['id'] = $wiersz['id'];
					$_SESSION['user'] = $wiersz['user'];
					$_SESSION['drewno'] = $wiersz['drewno'];
					$_SESSION['kamien'] = $wiersz['kamien'];
					$_SESSION['zboze'] = $wiersz['zboze'];
					$_SESSION['email'] = $wiersz['email'];
					$_SESSION['dnipremium'] = $wiersz['dnipremium'];
					
					unset($_SESSION['blad']);
					$rezultat->free_result(); // close() lub free() lub free_result(), wszystkie to to samo, chodzi o to że nie potrzebujemy już danych więc się ich pozbywamy żeby nie wisiały w eterze
					
					header('Location: gra.php'); //przekierowanie do pliku gra.php
				} else {
					$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło!</span>';
					header('Location: index.php');
				}
			} else {
				$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło!</span>';
				header('Location: index.php');
			}
		}		
		$polaczenie->close(); //zerwanie połączenia z bazą danych
	}
?>