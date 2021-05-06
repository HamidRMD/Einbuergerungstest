# Einbürgerungstest
Abschlussprojekt

Diese Anwendung wurde entwickelt, um Immigranten bei der Vorbereitung auf den Einbürgerungstest zu helfen. Nicht nur beim Lernen der Fragen, sondern auch bei der zeitlichen Simulation des Tests und der Punktevergabe, basierend auf den Bewertungskriterien des offiziellen Tests. Unsere App ist online unter:

<https://world-code.herokuapp.com/>

## Datenquelle

Diese App ist aus der Idee der DCI Worldcode Studentengruppe entstanden.

## Unser Team

Jakob - Projektmanager

Khaled - Backend Leader

Hamid - Git manager

Elahe - Backend

Anderson - Frontend Leader

## Abhängigkeiten

Diese App ist in JavaScript geschrieben und verfügt einige Technologien wie:

### Das Frontend:

- React 
- Html5
- CSS3

### Das Backend

- Express

### Die Datenbank
- MongoDB

### Wir haben das Backend und Frontend getrennt

- Damit wir praktisch mit mehreren Domains arbeiten können
- Microservices-Architektur verwenden 
- (Vorschlag von André oder Nathalie)

#### Backend-Endpunkte zum  abrufen des Fragekatalogs :

RandomQuestion -> liefert 33 Fragen aus dem allgemeinen Fragenkatalog:
<http://localhost:5000/RandomQuestion>

RandomQuestion/landname -> liefert 33 Fragen aus dem katalog des angegebenen Bundeslandes:
<http://localhost:5000/RandomQuestion/${land}>

questions -> liefert alle in der Datenbank gespeicherten Fragen:
<http://localhost:5000/questions>


Um die App zu bearbeiten, benötigen Sie Zugriff auf einen Code-Editor wie Visual Studio oder Atom, um die Code-Entwicklung dynamischer und organisierter zu gestalten.
Unser Test wurde mit der React-Bibliothek entwickelt, um diese Bibliothek zu verwenden  ist es notwendig  Node.js und NPM installiert zu haben.

## Verwendung 

1. Repository klonen  mit `git clone https://github.com/Hamid404/Einbuergerungstest.git`.
2. Node Modules installieren mit `npm install`.
3. Datei .env hinzufügen, Beispiel:

`PORT=****

JWT=*********

mongo=mongodb+srv:*********************

REACT_APP_BACKENDURL=************`

4.`npm start` oder `npm run start` in die Kommandozeile eingeben.

#### Verwendung nur des Backends

1. Repository klonen  mit `https://github.com/khaled-alhamoud/backend.git`.
2. MongoDB starten
3. `node server.js` in die Kommandozeile eingeben.

## Funktionen
Die beiden Hauptfunktionen sind die Simulation des Einbürgerungstests und die Vorbereitung auf den Test, bei dem der Benutzer interaktiv auf über 210 Fragen zum Lernen zugreifen kann.

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

Durch Anklicken von ,start den test´ wird der Benutzer auf eine Seite mit den Bewertungskriterien weitergeleitet.
![Screenshot from 2021-05-05 15-42-29](https://user-images.githubusercontent.com/61413894/117156873-6849f180-adbe-11eb-9a98-5945d6c26b82.png)

Nach dem Klicken auf weiter zum Test muss der Benutzer den gewünschten Bundesländer auswählen. Um den Test durchzuführen, klicken Sie einfach auf ¸Start den Test´.
![Screenshot from 2021-05-05 15-42-51](https://user-images.githubusercontent.com/61413894/117156991-7ef04880-adbe-11eb-8d51-b3ed46e835ad.png)

 Der Benutzer gelangt dann auf die Seite mit 33 Fragen und hat 60 Minuten Zeit, den Test zu beenden.
![Screenshot from 2021-05-05 15-44-12](https://user-images.githubusercontent.com/61413894/117157264-be1e9980-adbe-11eb-89a6-d8047e4ef82f.png)

Wenn der Benutzer auf Beende den Test klickt, wird er auf eine andere Seite weitergeleitet, auf der er das Ergebnis des Tests und die Optionen erhält, den Test erneut durchzuführen oder um sich besser auf den Test vorzubereiten:

![Screenshot from 2021-05-05 15-44-24](https://user-images.githubusercontent.com/61413894/117157472-e908ed80-adbe-11eb-8096-9a54bc591924.png)
![Screenshot from 2021-05-05 15-57-17](https://user-images.githubusercontent.com/61413894/117157488-ec03de00-adbe-11eb-8e45-3e993489b4a2.png)


## Weiterentwicklungsideen 

Hinzufügen von neuen Funktionen wie:

- Automatische Übersetzung in andere Sprachen.
- Erläuterung der einzelnen Fragen im Abschnitt Testvorbereitung.

Die App Responsive zu machen.

## Dank 

Unser aufrichtiger Dank gilt Nathalie Abendroth Scherf und André Kleinschmidt für ihre wertvolle Anleitung, ihre Geduld und ihr Engagement.








