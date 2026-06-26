# Seelenraum online stellen mit GitHub Pages

GitHub Pages ist kostenlos, gibt dir eine echte `https://…`-Adresse und ist von jedem Gerät aus erreichbar. HTTPS ist automatisch dabei — genau das braucht die App für Installation und Offline-Modus. Du brauchst dafür **kein** Programm und keine Kommandozeile, der Weg über die Webseite reicht.

## Was du hochlädst
Alle Dateien aus deinem Ordner — am wichtigsten:

- `index.html` (deine Verkaufsseite, erscheint unter der Hauptadresse)
- `seelenraum-app.html` (die App)
- `manifest.webmanifest`, `sw.js`
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`

Lade einfach **alle** Dateien zusammen hoch — sie müssen im selben Ordner liegen.

---

## Schritt für Schritt (über die GitHub-Webseite)

1. **Einloggen** auf github.com (Konto hast du ja).
2. Oben rechts auf **„+" → „New repository"**.
3. **Repository name:** z. B. `seelenraum`. Wähle **Public** (Pages braucht das bei kostenlosen Konten). Häkchen bei „Add a README" kannst du weglassen. → **Create repository**.
4. Auf der nächsten Seite: **„uploading an existing file"** anklicken (Link mitten im Text).
5. **Ziehe alle Dateien** aus deinem Ordner ins Browserfenster (index.html, seelenraum-app.html, manifest.webmanifest, sw.js und die drei .png-Icons). Warte, bis alle angezeigt werden.
6. Unten auf **„Commit changes"** klicken.
7. Jetzt Pages aktivieren: oben im Repo auf **„Settings"** → links auf **„Pages"**.
8. Unter **„Branch"**: wähle **`main`** und Ordner **`/ (root)`**, dann **Save**.
9. Warte 1–2 Minuten und lade die Seite neu. Oben erscheint deine Adresse, etwa:
   `https://DEIN-NUTZERNAME.github.io/seelenraum/`

Das ist dein Link — von jedem Handy, Tablet und Computer erreichbar.

- Deine **Verkaufsseite**: `https://DEIN-NUTZERNAME.github.io/seelenraum/`
- Die **App** direkt: `https://DEIN-NUTZERNAME.github.io/seelenraum/seelenraum-app.html`

---

## Auf dem Handy „installieren"
Öffne die App-Adresse im Browser:

- **iPhone (Safari):** Teilen-Symbol → „Zum Home-Bildschirm". 
- **Android (Chrome):** Menü (drei Punkte) → „App installieren" / „Zum Startbildschirm".

Dann liegt Seelenraum wie eine echte App auf dem Startbildschirm und läuft sogar offline.

---

## Inhalte später ändern
1. Im Repo auf die Datei klicken (z. B. `seelenraum-app.html`) → Bleistift-Symbol (Edit) → ändern → **Commit changes**.
   Oder: erneut „Add file → Upload files" und die neue Version drüberladen.
2. **Wichtig nach jedem Update:** in `sw.js` die Zeile `const CACHE = "seelenraum-v10";` hochzählen (z. B. `v11`). Sonst sehen Mitglieder, die die App installiert haben, die alte Version aus dem Offline-Speicher. Nach 1–2 Minuten ist die Änderung live.

---

## Eigene Domain (optional, später)
Wenn du eine eigene Adresse wie `seelenraum.de` möchtest: Domain bei einem Anbieter kaufen, dann in den Pages-Einstellungen unter „Custom domain" eintragen und beim Domain-Anbieter auf GitHub zeigen lassen. Nicht nötig für den Start — die `github.io`-Adresse funktioniert sofort.

---

## Und das Abo / Bezahlung?
GitHub Pages hostet nur die Seiten (das ist alles, was du brauchst). Das **Abo-Schloss** legst du wie im Launch-Guide (Abschnitt 3) beschrieben mit **Memberstack** oder **Outseta** davor — beides funktioniert auf einer GitHub-Pages-Seite, indem du deren kurzen Code in `seelenraum-app.html` einfügst. Den Checkout-Link trägst du in `index.html` bei `const CHECKOUT_URL = "";` ein.

> Kurz: GitHub Pages = deine Adresse & Auslieferung. Memberstack/Stripe = Login & Bezahlung. Zusammen ergibt das dein fertiges Abo-Produkt.
