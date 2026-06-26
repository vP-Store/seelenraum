# Seelenraum — Deployment-Kit (Runbook für den Agenten)

Dieses Dokument enthält ALLES, um das Produkt „Seelenraum" online zu stellen, erreichbar zu machen und als Abo zu betreiben. Es ist als Schritt-für-Schritt-Anleitung geschrieben, die ein Agent oder Mensch direkt abarbeiten kann.

---

## 0. Was wird deployed

Eine spirituelle Membership-Web-App, komplett statisch (nur HTML/CSS/JS, kein Backend). Sie funktioniert offline und ist als PWA installierbar. Hosting über **GitHub Pages** (kostenlos, HTTPS automatisch). Das Bezahl-Abo wird über **Memberstack** (oder Outseta) + Stripe davorgelegt.

### Datei-Manifest (alle Dateien gehören in EINEN Ordner / Repo-Root)
| Datei | Funktion |
|---|---|
| `index.html` | Öffentliche Verkaufsseite (Landingpage). Erscheint unter der Hauptadresse. |
| `seelenraum-app.html` | Die eigentliche App (Mitglieder-Bereich). Wird hinter Login/Abo gesperrt. |
| `seelenraum-landing.html` | Identische Kopie der Landingpage (Sicherung; kann ignoriert werden). |
| `manifest.webmanifest` | PWA-Manifest (Installierbarkeit). |
| `sw.js` | Service Worker (Offline + Update-Steuerung). |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App-Icons. |

---

## 1. Entscheidungen / Eingaben vom Inhaber (vor Start klären)

- **GitHub-Nutzername:** `__________`
- **Repository-Name:** Vorschlag `seelenraum` → `__________`
- **Sichtbarkeit:** `Public` (nötig für kostenloses GitHub Pages)
- **Abo jetzt einrichten?** ja/nein. Wenn ja: Memberstack-Konto + Stripe-Konto vorhanden? `__________`
- **Checkout-Link** (von Memberstack/Stripe, falls schon vorhanden): `__________`
- **Preise** (Standard, anpassbar): Monatlich 7 € · Jährlich 59 € · Founding 5 €/Monat

> Solange kein Checkout-Link existiert, zeigen die Kauf-Buttons absichtlich einen freundlichen Hinweis statt ins Leere zu führen. Die Seite kann also schon live gehen, bevor das Abo steht.

---

## 2. Auf GitHub hochladen

### Variante A — Kommandozeile (für einen Agenten mit Git/Terminal)
Voraussetzung: `git` installiert, beim GitHub-Konto authentifiziert (Token/SSH).

```bash
# 1. Im Ordner mit allen Dateien:
cd "PFAD/ZUM/ORDNER"

# 2. Leeres Repo bei GitHub anlegen (per GitHub CLI, optional):
#    gh repo create seelenraum --public --source=. --remote=origin --push
#    ODER manuell auf github.com ein leeres Public-Repo "seelenraum" erstellen.

# 3. Git initialisieren und alles committen:
git init
git add index.html seelenraum-app.html seelenraum-landing.html manifest.webmanifest sw.js icon-192.png icon-512.png apple-touch-icon.png
git commit -m "Seelenraum: initiales Deployment"
git branch -M main
git remote add origin https://github.com/NUTZERNAME/seelenraum.git
git push -u origin main
```

### Variante B — Über die GitHub-Webseite (ohne Programm)
1. github.com → „+" → **New repository** → Name `seelenraum` → **Public** → **Create**.
2. **„uploading an existing file"** anklicken.
3. Alle Dateien aus dem Manifest (Abschnitt 0) ins Fenster ziehen.
4. **Commit changes**.

---

## 3. GitHub Pages aktivieren

1. Im Repo: **Settings → Pages**.
2. **Source:** „Deploy from a branch".
3. **Branch:** `main`, Ordner **`/ (root)`** → **Save**.
4. 1–2 Minuten warten, Seite neu laden. Die Live-Adresse erscheint oben.

---

## 4. Ergebnis (Adressen)

- Verkaufsseite: `https://NUTZERNAME.github.io/seelenraum/`
- App direkt: `https://NUTZERNAME.github.io/seelenraum/seelenraum-app.html`

Diese Adressen sind von jedem Gerät erreichbar (HTTPS automatisch). Auf dem Handy: Browser-Menü → „Zum Startbildschirm hinzufügen" → App liegt installiert vor, läuft offline.

---

## 5. Abo / Bezahl-Schloss einrichten (Memberstack)

Ziel: **nur** `seelenraum-app.html` wird für Nicht-Zahler gesperrt; `index.html` bleibt öffentlich.

1. Konto bei **memberstack.com** anlegen, **Stripe** verbinden.
2. In Memberstack drei Pläne anlegen: „Monatlich 7 €", „Jährlich 59 €", „Founding 5 €".
3. Memberstack liefert ein `<script>`-Snippet mit einer App-ID. Dieses Snippet in `seelenraum-app.html` **direkt vor `</head>`** einfügen.
   - Position im Code: ganz oben, kurz vor der Zeile `</head>` (vor `<body>`).
4. In Memberstack die Seite `…/seelenraum-app.html` als **„Members only / gated"** markieren und eine Login-/Checkout-Weiterleitung einrichten.
5. Nach erneutem Hochladen: Nicht-Mitglieder, die die App öffnen, landen auf Login/Checkout; zahlende Mitglieder sehen die App.

Alternative: **Outseta** (alles aus einer Hand — Login, Zahlung, E-Mails). Gleiches Prinzip: Snippet in den `<head>` von `seelenraum-app.html`, App-Seite schützen.

---

## 6. Checkout-Link in die Verkaufsseite eintragen

1. `index.html` öffnen, ganz unten im `<script>` die Zeile suchen:
   ```js
   const CHECKOUT_URL = "";
   ```
2. Den echten Memberstack-/Stripe-Checkout-Link eintragen, z. B.:
   ```js
   const CHECKOUT_URL = "https://dein-shop.com/checkout";
   ```
3. Datei neu hochladen/committen. Ab dann führen alle Kauf-Buttons direkt zur Anmeldung.

---

## 7. Updates ausrollen (für ALLE Kunden gleichzeitig)

Es gibt nur eine gehostete Datei — ein Update gilt automatisch für alle.

1. Datei(en) ändern und neu committen/hochladen.
2. **WICHTIG:** In `sw.js` die Cache-Version hochzählen, z. B.:
   ```js
   const CACHE = "seelenraum-v10";   //  →  "seelenraum-v11"
   ```
   Ohne das sehen installierte Mitglieder weiter die alte Version aus dem Offline-Speicher.
3. Nach 1–2 Minuten ist es live. Kunden bekommen die neue Version beim nächsten Öffnen.

> **Kundendaten bleiben erhalten:** Tagebuch, Streak, Favoriten, Stimmung liegen lokal im Browser jedes Mitglieds (localStorage) und sind unabhängig von der HTML-Version. Updates löschen oder überschreiben diese Daten NICHT.

---

## 8. Verifikations-Checkliste (nach dem Deployment)

- [ ] Verkaufsseite öffnet sich unter `https://NUTZERNAME.github.io/seelenraum/`
- [ ] „Live-Vorschau der App ansehen" auf der Landingpage öffnet die App
- [ ] App lädt vollständig (alle Bereiche, Icons sichtbar)
- [ ] Auf dem Handy „Zum Startbildschirm hinzufügen" funktioniert
- [ ] App funktioniert offline (Flugmodus-Test nach einmaligem Laden)
- [ ] Kauf-Button: ohne Checkout-Link → freundlicher Hinweis; mit Link → Weiterleitung
- [ ] (falls Abo aktiv) Nicht-Mitglied sieht Login/Checkout, Mitglied sieht App

---

## 9. Troubleshooting

- **Seite zeigt 404:** 1–2 Min warten; prüfen, ob Pages auf `main` / `/ (root)` steht und `index.html` im Repo-Root liegt.
- **Icons/Manifest fehlen:** Es wurden nicht alle Dateien hochgeladen — alle aus Abschnitt 0 zusammen hochladen.
- **Alte Version trotz Update:** `sw.js`-Cache-Version wurde nicht hochgezählt (Abschnitt 7).
- **App-Installation/Offline geht nicht:** Adresse muss `https://` sein (GitHub Pages liefert das automatisch; nicht über `file://` testen).
- **Memberstack sperrt auch die Landingpage:** Nur `seelenraum-app.html` schützen, nicht `index.html`.

---

## 10. Rechtliches (Hinweis, kein Rechtsrat)

Für ein deutsches Abo-Angebot werden i. d. R. **Impressum, Datenschutzerklärung, AGB und Widerrufsbelehrung** benötigt. Memberstack/Outseta + Stripe regeln die Zahlung; die Rechtstexte stellt der Inhaber selbst bereit. Hinweis, dass Seelenraum spirituelle Selbstfürsorge ist und **keine medizinische/therapeutische Behandlung** ersetzt, steht bereits im FAQ der Landingpage.
