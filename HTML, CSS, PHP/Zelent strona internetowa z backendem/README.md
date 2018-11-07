#### **Strona internetowa utworzona z kursem Mirosława Zelenta "PHP".** 
Jest to prosty szablon "gry internetowej". Strona jest surowa (bez dbałości o HTML i bez zastosowania CSS) - jedynie w celu nauki podstaw PHP.

Zastosowano tutaj **bazy danych MySQL** pakietu **xampp** wraz z **Apache**. 
Program zawiera formularz logowania, formularz rejestracji. 
Formularz logowania jest odporny na **mechanizm "wstrzykiwania SQL"**.
Ponadto zastosowano **szyfrowanie haseł**. (jednak hasła w pliku "uzytkownicy.sql" są jeszcze w wersji niezaszyfrowanej, stąd tymi hasłami można bez problemu się zalogować do "gry").

Formularze zawierają pewną ilość zmiennych sesyjnych. **Dzięki zastosowaniu tych zmiennych: **
- będąc niezalogowanym w grze, i próbując "siłowo" wpisać adres gry, zostajemy odesłani ponownie do strony głównej 'index.php'
- będąc w formularzu rejestracji, po zatwierdzeniu niewłaściwych danych, otwiera się ponownie formularz rejestracji, a w elementach html typu "input" zapamiętane zostają dane (nie trzeba ponownie wpisać imienia itp.)
- nie musimy się logować do gry za każdym razem jak odwiedzamy stronę

W celu uruchomienia strony, należy mieć założonego hosta oraz bazę danych.
Do bazy danych importujemy plik 'uzytkownicy.sql'.
Dane do hosta wpisujemy w plik 'connect.php'.
