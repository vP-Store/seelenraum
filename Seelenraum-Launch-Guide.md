# Seelenraum — Launch- & Betriebs-Guide

Dein Membership-Produkt ist eine wachsende spirituelle Praxis-App, die Mitglieder im monatlichen Abo nutzen. Dieser Guide bringt sie online, kassiert automatisch und füllt sie mit Leben — ohne Programmierkenntnisse.

---

## 1. Deine Dateien im Überblick

| Datei | Was es ist |
|---|---|
| `seelenraum-landing.html` | Öffentliche Verkaufsseite. Sehen alle Besucher zuerst. Führt zur Mitgliedschaft. |
| `seelenraum-app.html` | Die eigentliche App (Mitglieder-Bereich). Hier wird gegated. |
| `manifest.webmanifest` | Macht die App auf dem Handy installierbar (PWA). |
| `sw.js` | Service Worker — App funktioniert offline und lässt sich „installieren". |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App-Symbole für Startbildschirm. |

Alle Dateien gehören **in denselben Ordner** und werden zusammen hochgeladen.

Die App ist eine vollwertige tägliche Praxis-App mit 50 Impulsen und 3 geführten Reisen:

- **Heute** — täglich rotierender Impuls (Affirmation, Praxis, Frage) mit „Heute abschließen".
- **Tageskarte ziehen** — ein kleines Ritual: verdeckte Karte antippen, zufälligen Impuls aufdecken (passt perfekt zur Orakel-/Spiritualitäts-Welt).
- **Wochen-Intention** — Mitglied setzt eine Absicht für die Woche, die auf „Heute" sanft sichtbar bleibt.
- **Stimmungs-Check-in** — tägliche Stimmung erfassen, Verlauf in „Mein Weg".
- **Meilenstein-Abzeichen** — schalten sich frei (3/7/14/30/100 Tage, erstes Tagebuch, erste Reise …) — sanfte Motivation.
- **Affirmations-Bild in 3 Stilen** — Hell, Dunkel und Gold, direkt im Teilen-Dialog umschaltbar.
- **Tagebuch** — zu jedem Impuls schreiben; Einträge werden gespeichert und in einer eigenen Tagebuch-Ansicht gesammelt. Das ist der stärkste Bindungs-Faktor.
- **Mein Weg** — Dashboard mit aktueller/längster Praxis-Serie, Praxis-Tagen, Tagebuch- & Reisen-Zähler, **Kalender-Heatmap** der letzten 5 Wochen und Stimmungs-Verlauf.
- **Affirmations-Bild** — erzeugt mit einem Klick ein fertiges Story-Bild (1080×1350) der Affirmation zum Speichern/Teilen. **Dein Marketing-Motor**: jedes Bild trägt „Seelenraum" und führt neue Leute zu dir.
- **Reisen** — mehrtägige Programme mit Fortschrittsbalken.
- **Bibliothek** — alle Impulse, **durchsuchbar** und nach Thema filterbar (wächst → Abo wird wertvoller).
- **Favoriten** (Herz oben links), **Atempause** mit **Klangraum** (sanfter Ambient-Ton).
- **Abendmodus** (dunkel) per Knopf oben rechts, folgt auch der System-Einstellung.
- **Installierbar & offline** als echte App (PWA), inkl. Install-Hinweis im Browser.

> **Wichtig zu wissen (Datenspeicherung):** Tagebuch, Stimmung, Streak & Favoriten werden **lokal im Browser** des Mitglieds gespeichert — privat und ohne Server. Das bedeutet auch: Die Daten wandern nicht automatisch auf ein anderes Gerät mit. Für die meisten Mitglieder ist das völlig in Ordnung. Wenn du später geräteübergreifende Synchronisation willst, braucht es ein Backend (z. B. über Memberstack + eine Datenbank) — ein sinnvoller Schritt für später, nicht für den Start.

---

## 2. Online stellen (15 Minuten)

1. Geh auf **netlify.com** → kostenloses Konto anlegen.
2. Im Dashboard: **„Add new site" → „Deploy manually"**.
3. Zieh **den ganzen Ordner** (mit allen Dateien oben) ins Fenster.
4. Optional, aber empfohlen: benenne `seelenraum-landing.html` in **`index.html`** um, damit sie direkt unter deiner Adresse erscheint.
5. Du bekommst sofort eine Live-URL (z. B. `seelenraum.netlify.app`). Optional: eigene Domain verbinden.

Ergebnis: Landingpage live unter der Hauptadresse, App unter `.../seelenraum-app.html`.

---

## 3. Das Abo davorschalten (das Bezahl-Schloss)

Eine HTML-Datei kann selbst kein Abo abrechnen. Du legst eine Membership-Schicht davor, die Login + monatliche Stripe-Zahlung übernimmt und **nur die App-Seite** (`seelenraum-app.html`) für Nicht-Zahler sperrt. Die Landingpage bleibt öffentlich.

**Option A — Memberstack** (empfohlen, flexibel)
1. Konto bei **memberstack.com** anlegen, Stripe verbinden.
2. Pläne anlegen: „Monatlich 7 €", „Jährlich 59 €", „Founding 5 €".
3. Memberstack-Snippet in den `<head>` von `seelenraum-app.html` einfügen.
4. Die App-Seite als „Members only" schützen → Nicht-Mitglieder landen auf Login/Checkout.

**Option B — Outseta** (alles aus einer Hand: Login, Zahlung, E-Mails) — gleiches Prinzip, etwas einsteigerfreundlicher.

### Checkout-Link einsetzen (nur EINE Zeile)
Öffne `seelenraum-landing.html` im Editor und suche ganz unten im `<script>` die Zeile:

```
const CHECKOUT_URL = "";
```

Trage zwischen die Anführungszeichen deinen echten Memberstack-/Stripe-Checkout-Link, z. B.:

```
const CHECKOUT_URL = "https://dein-shop.com/checkout";
```

Datei neu hochladen — fertig. Ab dann führen **alle** Kauf-Buttons direkt zur Anmeldung. Solange das Feld leer ist (wie jetzt zum Testen), zeigen die Buttons absichtlich einen freundlichen Hinweis „Fast fertig" statt ins Leere zu führen — so klickt nie jemand auf einen toten Button.

---

## 4. Inhalte updaten (dein monatlicher Rhythmus)

Öffne `seelenraum-app.html` in einem Texteditor, suche `const INHALTE = [`. Jeder `{ ... }`-Block ist ein Impuls. Kopiere einen, ändere die Felder:

```
{id:"i29", datum:"2026-07-03", thema:"Vertrauen", titel:"Dein Titel",
 affirmation:"Deine Affirmation.",
 praxis:"Die kleine Übung.",
 frage:"Die Journaling-Frage?"},
```

- `id` eindeutig (i29, i30, …).
- `datum` als `JJJJ-MM-TT`. Alles im aktuellen Monat erscheint automatisch unter „Neu diesen Monat".
- Speichern, Datei bei Netlify überschreiben.
- **Wichtig bei Updates:** In `sw.js` die Zeile `const CACHE = "seelenraum-v1";` hochzählen (`v2`, `v3` …). Sonst sehen Mitglieder, die die App installiert haben, die alte Version aus dem Offline-Speicher.

Neue **Reisen** legst du analog unter `const REISEN = [` an.

> **Abo-Versprechen:** Lege einen festen Rhythmus fest und halte ihn. Empfehlung: **4 neue Impulse pro Monat + alle 1–2 Monate eine neue Reise.** Aus jedem Impuls wird gleichzeitig ein Reel — ein Impuls = ein Video.

---

## 5. Preis & Pakete

Schon in der Landingpage angelegt — bei Bedarf anpassen:

- **Monatlich 7 €** — niedrige Hürde, Impulskauf.
- **Jährlich 59 €** — bringt Geld sofort, senkt Churn stark.
- **Founding Member 5 €/Monat lebenslang** — limitiert, belohnt die ersten Unterstützer, gibt Schwung.

Realistisch sind bei unter 5.000 Followern anfangs wenige bis einige Dutzend Mitglieder. Das ist Validierung, nicht Gehalt — und die Basis zum Wachsen.

---

## 6. Launch-Sequenz für kleine Audience

1. **2 Wochen vorher:** täglich einen „Impuls des Tages" (App-Screenshot) in Stories. Die Leute gewöhnen sich an den Wert. Tipp: Nutze den **Affirmations-Bildgenerator** in der App — ein Tipp, ein fertiges Story-Bild mit deinem Branding.
2. **Warteliste:** „Schreib mir SEELE und erfahre als Erste, wenn die Türen aufgehen."
3. **Founding-Member-Launch:** Türen 5–7 Tage öffnen, limitierte Plätze zum Sonderpreis. Verknappung wirkt.
4. **Danach:** in jedem Reel beiläufig die Mitgliedschaft erwähnen, Link in Bio (zur Landingpage).

**Retention (wichtiger als der Launch):** einmal im Monat „Neu im [Monat]: …" an alle Mitglieder. Wer den Wert sieht, kündigt nicht.

---

## 7. Realistischer Fahrplan

- **Monat 1:** alles online, gegated, Checkout-Link eingetragen, Founding-Member-Launch. Ziel: erste zahlende Mitglieder = Beweis.
- **Monat 2–3:** Rhythmus halten (4 Impulse/Monat), aus jedem Impuls Reels machen, Reichweite wächst.
- **Ab ~15–30k Followern:** höherpreisige Stufe mit Live-Elementen (monatlicher Q&A, Community) ergänzen — *dann* trägt das Abo wirklich.

Der Kanal füttert die App, die App füttert den Kanal. Das ist der eigentliche Hebel.

---

## 8. Rechtliches (kurz, kein Rechtsrat)

Für ein deutsches Abo-Angebot brauchst du i. d. R. **Impressum, Datenschutzerklärung, AGB und Widerrufsbelehrung**. Memberstack/Outseta + Stripe regeln die Zahlung; die Texte musst du selbst bereitstellen (z. B. über einen Generator oder Anwalt). Da Seelenraum spirituelle Selbstfürsorge ist, weise klar darauf hin, dass es **keine medizinische oder therapeutische Behandlung** ersetzt (steht bereits im FAQ der Landingpage).

---

## 9. Bereiche & Inhalte (aktueller Stand)

Die App ist jetzt eine ganze Welt mit eigenem Look pro Bereich:

- **Heute** — reiches Dashboard: Begrüßung, Wochen-Absicht, Mond-Banner, Tagesimpuls, Stimmungs-Check, Tageskarte und Entdecker-Kacheln.
- **Impulse** — 50 Karten, durchsuchbar & nach Thema filterbar.
- **Praxis** — Sammel-Bereich mit fünf eigenen Welten:
  - **Meditationen** (10) — geführter Player, der Schritt für Schritt durch die Meditation führt (auto oder manuell).
  - **Atempausen** (4 Programme) — 4-7-8, Box-Atem, Erdung, Energie; animierter Atem-Orb + Klang.
  - **Rituale** (10) — Morgen-, Abend-, Vollmond-, Neumond-, Reinigungs-Ritual u. v. m. mit Schritt-für-Schritt-Anleitung.
  - **Klangraum** (5) — live erzeugte Klangwelten (Om-Drone, Regen, Ozean, Wald, Herzschlag) — keine Audiodateien nötig.
  - **Reisen** (5) — mehrtägige Programme mit Fortschritt.
- **Mond** — automatische Mondphasen-Berechnung mit Bedeutung, Tagespraxis und passendem Ritual.
- **Tagebuch** — gespeicherte Einträge.
- **Mein Weg** — Streaks, Praxis-Kalender, Stimmungsverlauf, Meilensteine.

Jeder Bereich hat eine eigene Farbwelt (Meditationen indigo, Atem teal, Rituale bernstein, Klang rosé, Mond silberblau) und einen eigenen Hero-Kopf, damit beim Öffnen sofort Tiefe spürbar ist.

**Inhalte erweitern:** Alle Bereiche werden über die `const`-Arrays oben in `seelenraum-app.html` gepflegt — `INHALTE`, `MEDITATIONEN`, `RITUALE`, `ATEM`, `KLANG`, `MOND_PHASEN`, `REISEN`. Block kopieren, Texte ändern, Datei neu hochladen, `sw.js`-Version hochzählen.

---

## 10. Kosmos-Bereiche (neu)

Unter dem Tab **Kosmos** (und als Kacheln auf „Heute") leben fünf spirituelle Welten, jede mit eigener Farbwelt:

- **Mondzyklen** — automatische Mondphasen-Berechnung; alle 8 Phasen anklickbar mit Bedeutung, Praxis und passendem Ritual.
- **Astrologie** — 12 Sternzeichen mit Element, Planet, Stärke, Wachstumsthema und Affirmation; erkennt automatisch die aktuelle Sonnenenergie nach Datum.
- **Numerologie** — Lebenszahl-Rechner aus dem Geburtsdatum (inkl. Meisterzahlen 11/22/33) plus tägliche Tagesenergie; Geburtsdatum wird lokal gespeichert.
- **Manifestieren** — 6 Methoden (369, Skripting, Visualisierung, Dankbarkeit im Voraus, Spiegel-Affirmationen, Loslassen) mit Schritt-für-Schritt-Anleitung plus 12 Manifestations-Affirmationen.
- **Chakren** — 7 Energiezentren mit Farbe, Thema, Balance-/Blockade-Beschreibung, Affirmation und Öffnungsübung.

Alle pflegbar über die `const`-Arrays `STERNZEICHEN`, `NUM_BEDEUTUNG`, `MANI_METHODEN`, `MANI_AFFIRM`, `CHAKREN`, `MOND_PHASEN` in `seelenraum-app.html`.

---

## 11. Erklärungen & weitere Welten (neu)

Jeder Bereich hat jetzt oben eine **„Was ist das? / So nutzt du diesen Bereich"-Karte** — Mitglieder verstehen sofort, worum es geht und wie sie es nutzen. Dazu vier neue Bereiche im Kosmos:

- **Kristalle** — 10 Heilsteine mit Wirkung, Anwendung, zugeordnetem Chakra und Affirmation.
- **Engelzahlen** — 111, 222, 333 … 1111 mit Bedeutung und Botschaft.
- **Krafttiere** — 10 Tiere mit Bedeutung, Botschaft und Affirmation.
- **Wissen** — eine kleine Bibliothek mit ausführlichen, verständlichen Artikeln (Was ist Manifestation? Wie funktionieren Mondphasen? Grundlagen der Astrologie & Numerologie, die 7 Chakren, Meditation für Anfänger, Affirmationen, Kristalle).

Pflegbar über die Arrays `KRISTALLE`, `ENGELZAHLEN`, `KRAFTTIERE`, `WISSEN` und das Objekt `EXPLAIN` (die Erklär-Texte je Bereich) in `seelenraum-app.html`.

---

## 12. Premium-Schliff (neu)

- **Personalisiertes Onboarding** — beim ersten Start fragt die App nach Name, Geburtsdatum und einer Wochen-Absicht. Das Geburtsdatum personalisiert automatisch Astrologie (Sonnenzeichen) und Numerologie.
- **„Dein kosmischer Tag"** — eine Karte ganz oben auf „Heute" zeigt deine heutige Mondphase, dein Sternzeichen und deine persönliche Tageszahl; jede Kachel führt direkt in den Bereich.
- **Globale Suche** — die Such-Pille im Kopf durchsucht ALLE Bereiche gleichzeitig (Impulse, Meditationen, Rituale, Sternzeichen, Kristalle, Krafttiere, Engelzahlen, Chakren, Methoden, Wissen) und springt direkt zum Treffer.
- **Einstellungen** — über den Fuß-Link: Name & Geburtsdatum ändern, Hell/Dunkel, **Tagebuch als .txt exportieren**, alles zurücksetzen.
- **Nach-oben-Button** beim Scrollen, plus durchgängige Tastatur-Bedienbarkeit und Fokus-Ringe.

Inhalt aktuell: **60 Impulse, 10 Meditationen, 10 Rituale, 5 Reisen, 4 Atemprogramme, 5 Klangwelten, 12 Sternzeichen, Lebenszahl-Rechner, 6 Manifestations-Methoden, 7 Chakren, 10 Kristalle, 10 Engelzahlen, 10 Krafttiere, 8 Wissens-Artikel** — verteilt auf 14 farblich eigenständige Bereiche.

---

## 13. Einheitliches Icon-System (neu)

Alle zufälligen Unicode-Symbole wurden durch ein **handgezeichnetes SVG-Linien-Icon-Set** ersetzt — einheitlich, gestochen scharf auf jedem Gerät und farblich an den jeweiligen Bereich angepasst (sie nehmen automatisch die Akzentfarbe an). Eigene Icons für: Heute (Sonne), Mond, Impulse (Funke), Kosmos (Sterne), Praxis (Lotus), Tagebuch/Wissen (Buch), Mein Weg (Pfad), Meditation (sitzende Figur), Atem (Wellen), Rituale (Kerze), Klang (Klangwelle), Reisen (Flagge), Astrologie (Umlaufbahn), Numerologie (Raute), Kristalle (Edelstein), Engelzahlen (Flügel), Krafttiere (Pfote), Chakren (Energiezentren), Manifestieren (Zauberstab), Favoriten (Herz), Suche (Lupe).

Definiert im Objekt `ICONS` in `seelenraum-app.html` — neue Icons als SVG-Pfad ergänzen und über `icon('name')` verwenden.
