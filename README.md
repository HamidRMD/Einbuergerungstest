# Einbürgerungstest
Abschlussprojekt

Diese Anwendung wurde entwickelt, um Immigranten bei der Vorbereitung auf den Einbürgerungstest zu helfen. Nicht nur beim Lernen der Fragen, sondern auch bei der zeitlichen Simulation des Tests und der Punktevergabe, basierend auf den Bewertungskriterien des offiziellen Tests.


## Datenquelle

Diese App ist aus der Idee der DCI Worldcode Studentengruppe entstanden.

## Abhängigkeiten

Diese App ist in JavaScript geschrieben und verfügt einige Technologien wie:

### Das Frontend:

- React 
- Html5
- CSS3

### Das Backend

- Atlas MongoDB

Pfade zum Backend:

"http://localhost:5000/RandomQuestion"

"http://localhost:5000/RandomQuestion/${land}"

"http://localhost:5000/questions"

Um die App zu bearbeiten, benötigen Sie Zugriff auf einen Code-Editor wie Visual Studio oder Atom, um die Code-Entwicklung dynamischer und organisierter zu gestalten.
Unser Test wurde mit der React-Bibliothek entwickelt, um diese Bibliothek zu verwenden  ist es notwendig  Node.js und NPM installiert zu haben.

## Verwendung 

1. Repository klonen  mit 'git clone https://github.com/Hamid404/Einbuergerungstest.git'.
2. Node Modules installieren mit 'npm install'.
3. Datei .env hinzufügen, Beispiel:

'PORT=****
JWT=*********
mongo=mongodb+srv:*********************
REACT_APP_BACKENDURL=************'

4.'npm start' oder 'npm run start' in die Kommandozeile eingeben.

## Funktionen
Die beiden Hauptfunktionen sind die Simulation des Einbürgerungstests und die Vorbereitung auf den Test, bei dem der Benutzer interaktiv auf über 400 Fragen zum Lernen zugreifen kann.

![Screenshot from 2021-05-05 13-47-42](https://user-images.githubusercontent.com/61413894/117136542-ca97f780-ada8-11eb-8dd4-d1cedba52aa1.png)

Für Neugierige gibt es oben rechts auf dem Bildschirm die Option Über uns mit einigen Informationen über die Entwickler des Projekts:

![Screenshot from 2021-05-05 14-08-11](https://user-images.githubusercontent.com/61413894/117138586-822e0900-adab-11eb-8a3c-8954fedf5d84.png)


Durch Anklicken der Option Testvorbereitung landet der Benutzer auf eine Seite mit einer kleinen Information über unsere Testvorbereitung:

![Screenshot from 2021-05-05 13-51-24](https://user-images.githubusercontent.com/61413894/117138205-fb792c00-adaa-11eb-97bd-a6082edb3977.png)

Auf der Testvorbereitungsseite kann der Benutzer den gewünschten Bundesländer auswählen:

![Screenshot from 2021-05-05 13-53-57](https://user-images.githubusercontent.com/61413894/117139139-2f088600-adac-11eb-9637-66c4fb1a76e1.png)

Durch Anklicken einer Frage erhält man automatisch eine Rückmeldung, ob diese richtig oder falsch ist:

![Screenshot from 2021-05-05 13-52-51](https://user-images.githubusercontent.com/61413894/117139332-68d98c80-adac-11eb-8d1c-c22f316f024b.png)

![Screenshot from 2021-05-05 13-53-22](https://user-images.githubusercontent.com/61413894/117139341-6d05aa00-adac-11eb-8156-3042b67dcf55.png)

Durch Anklicken von start den test wird der Benutzer auf eine Seite mit den Bewertungskriterien weitergeleitet.Nach dem Klicken auf weiter zum Test muss der Benutzer den gewünschten Bundesländer auswählen:

![Screenshot from 2021-05-05 15-42-29](https://user-images.githubusercontent.com/61413894/117156873-6849f180-adbe-11eb-9a98-5945d6c26b82.png)
![Screenshot from 2021-05-05 15-42-51](https://user-images.githubusercontent.com/61413894/117156991-7ef04880-adbe-11eb-8d51-b3ed46e835ad.png)

Um den Test durchzuführen, klicken Sie einfach auf "Start den Test". Der Benutzer gelangt dann auf die Seite mit 33 Fragen und hat 60 Minuten Zeit, den Test zu beenden.

![Screenshot from 2021-05-05 15-44-12](https://user-images.githubusercontent.com/61413894/117157264-be1e9980-adbe-11eb-89a6-d8047e4ef82f.png)

Wenn der Benutzer auf Beende den Test klickt, wird er auf eine andere Seite weitergeleitet, auf der er das Ergebnis des Tests und die Optionen erhält, den Test erneut durchzuführen oder um sich besser auf den Test vorzubereiten:

![Screenshot from 2021-05-05 15-44-24](https://user-images.githubusercontent.com/61413894/117157472-e908ed80-adbe-11eb-8096-9a54bc591924.png)
![Screenshot from 2021-05-05 15-57-17](https://user-images.githubusercontent.com/61413894/117157488-ec03de00-adbe-11eb-8e45-3e993489b4a2.png)

## Probleme 

Verzögerung beim Laden der Anwendung im Browser.
Auftreten von Verzögerungen beim Aufruf von Serverfragen.

## Verbesserungen

Geschwindigkeitsoptimierung mit dem Server.

Hinzufügen von neuen Funktionen wie:

- Automatische Übersetzung in andere Sprachen.
- Erläuterung der einzelnen Fragen im Abschnitt Testvorbereitung.

Die App Responsive zu machen.

## Dank und Quellen







# Team

Hamid, Khaled, Anderson, Elahe, Jakob

## Beispiel: Die Vorlage für die Startseite von Anderson und Jakob.
![Screenshot from 2021-03-31 20-12-51](https://user-images.githubusercontent.com/61413894/113191747-32b16600-925e-11eb-9740-e662aa12a124.png)


## Beispiel: Die Vorlage für die Über uns Startseite von Jakob.
![Screenshot from 2021-03-31 20-13-29](https://user-images.githubusercontent.com/61413894/113191792-4361dc00-925e-11eb-9634-b512a29ed8cb.png)


## Beispiel: Die Vorlage von dem Login von Jakob.
![Screenshot from 2021-03-31 16-23-26](https://user-images.githubusercontent.com/61413894/113160856-261d1580-923e-11eb-956e-73b2df588a6a.png)

## Beispiel: Die Vorlage von der Registrierung von Jakob.
![Screenshot from 2021-03-31 20-12-59](https://user-images.githubusercontent.com/61413894/113191912-6a201280-925e-11eb-88f8-6835df8ff8d6.png)


## Beispiel: Die Seite mit der Fragen von dem Quiz von Jakob.
![Screenshot from 2021-03-31 15-24-04](https://user-images.githubusercontent.com/61413894/113151345-45637500-9235-11eb-8ff6-f66693f4b5a7.png)


## Beispiel: Die Seite mit der Fragen von dem Quiz,wenn man falsch beantwortet hat.By Jakob.
![Screenshot from 2021-04-01 10-49-52](https://user-images.githubusercontent.com/61413894/113269227-8791c280-92d8-11eb-80cf-23d621fc0600.png)

## Wenn man eine Frage beim Quiz richtig beantwortet hat.By Jakob.
![Screenshot from 2021-03-31 20-13-14](https://user-images.githubusercontent.com/61413894/113191948-74daa780-925e-11eb-89b1-90b606218aa7.png)


## Seite mit den 310 Fragen.By Elahe, Kahled und unterschtüzung von Jakob.
![Screenshot from 2021-04-01 09-54-31](https://user-images.githubusercontent.com/61413894/113263153-b6586a80-92d1-11eb-8082-8b9b049873c1.png)
![Screenshot from 2021-03-31 15-55-18](https://user-images.githubusercontent.com/61413894/113161970-279b0d80-923f-11eb-97be-1955d15a5fee.png)
![Screenshot from 2021-03-31 15-49-02](https://user-images.githubusercontent.com/61413894/113161320-8f048d80-923e-11eb-8bea-d9da2830389c.png)
![Screenshot from 2021-04-01 10-14-04](https://user-images.githubusercontent.com/61413894/113264433-434ff380-92d3-11eb-861b-901c804f3959.png)


## Das Testergebnis von Elahe und Jakob.
![Screenshot from 2021-04-01 09-54-41](https://user-images.githubusercontent.com/61413894/113263191-c07a6900-92d1-11eb-94a6-d01dc210b1b0.png)

## Das Testergebnis von Elahe und Jakob.
![Screenshot from 2021-04-01 09-54-45](https://user-images.githubusercontent.com/61413894/113263211-c708e080-92d1-11eb-85c0-5792172db017.png)


## PLAN
![Planung](https://user-images.githubusercontent.com/65950252/112838376-4a8dbc00-909d-11eb-8951-f87a8ead9f96.jpg)




