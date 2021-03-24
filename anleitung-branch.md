# Anleitung Branching Pushing

## 0 - (nur einmal) Clonen

git clone https://github.com/Hamid404/Einbuergerungstest.git

## 1 - Aufgabe auf "in bearbeitung"

in Projekt-Seite die Aufgabe von "to do" auf "in progress" schieben.

## 2 - aktuellen Quelltext von fernem Gruppen-Repo "ziehen"

git pull origin

## 3 - neue Branch auschecken

git checkout -b BRANCHNAME

## 4 - Aufgabe erledigen

Code schreiben, sachen kopieren, etc. etc.

(prüft immer ob ihr auf der richtigen Branch seid)
git status

## 5 - Änderungen lokal bekannt machen (stage) und übertragen (commit) in der extra Branch

git add .
git commit -m "Verständlicher Kommentar"

## 6 - Auf fernes Gruppen-Repository "drücken"

git push origin BRANCHNAME

## 7 - Pull-Request auf Github anlegen.

Github wird automatisch fragen, ob ihr für neue Branches ein Pull-Request erstellen möchtet. (Möchtet ihr :) ) 