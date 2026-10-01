# Websites verkaufen mit KI & Automatisierung — der vollständige Umsetzungsplan

> **Kurzfassung in einem Satz:** Du baust für lokale Betriebe ohne (gute) Website **vorab und automatisch eine fertige Demo-Seite**, zeigst sie ihnen **per Brief mit QR-Code und persönlich vor Ort**, und verkaufst sie als **Website-Abo (Einrichtung + monatliche Gebühr)**. KI und Automatisierung senken deine Kosten pro Demo auf wenige Minuten. So verdienst du schnell erstes Geld und baust gleichzeitig wiederkehrenden Umsatz (MRR) auf.

Die Vorlagen (Skripte, Brief, Einwandbehandlung, Vertragspunkte, Automatisierungs-Workflow) stehen in [`VORLAGEN.md`](./VORLAGEN.md).

---

## Inhalt

1. [Alle Wege verglichen — und warum genau dieser gewinnt](#1-alle-wege-verglichen--und-warum-genau-dieser-gewinnt)
2. [Das Geschäftsmodell im Detail](#2-das-geschäftsmodell-im-detail)
3. [Zielgruppe: an wen genau verkaufen](#3-zielgruppe-an-wen-genau-verkaufen)
4. [Angebot & Preise](#4-angebot--preise)
5. [Vertrieb: wie du an Kunden kommst (legal in Deutschland)](#5-vertrieb-wie-du-an-kunden-kommst-legal-in-deutschland)
6. [Die Automatisierungs-Maschine](#6-die-automatisierungs-maschine)
7. [Lieferung: von „Ja" bis „Live" in 48 Stunden](#7-lieferung-von-ja-bis-live-in-48-stunden)
8. [Upsells: aus 79 € werden 200 € pro Kunde](#8-upsells-aus-79--werden-200--pro-kunde)
9. [Werbung: wann, wo, wie viel](#9-werbung-wann-wo-wie-viel)
10. [Recht, Steuern, Absicherung](#10-recht-steuern-absicherung)
11. [Zahlen: Kosten, Umsatz, drei Szenarien](#11-zahlen-kosten-umsatz-drei-szenarien)
12. [Der 90-Tage-Fahrplan](#12-der-90-tage-fahrplan)
13. [Kennzahlen, die du jede Woche prüfst](#13-kennzahlen-die-du-jede-woche-prüfst)
14. [Risiken & Gegenmaßnahmen](#14-risiken--gegenmaßnahmen)
15. [Skalierung nach Monat 3](#15-skalierung-nach-monat-3)

---

## 1. Alle Wege verglichen — und warum genau dieser gewinnt

Ich habe jeden realistischen Weg, mit Websites Geld zu verdienen, nach vier Kriterien bewertet: **Zeit bis zum ersten Euro**, **Wahrscheinlichkeit, dass es klappt**, **Startkapital**, **wiederkehrender Umsatz**.

| Weg | Erster Euro | Erfolgswahrscheinlichkeit | Startkapital | Wiederkehrend | Urteil |
|---|---|---|---|---|---|
| **Website-Abo für lokale Betriebe (Demo vorab bauen)** | 1–3 Wochen | **hoch** | < 300 € | **ja** | ✅ **Hauptweg** |
| Einmal-Websites auf Fiverr/Upwork | 1–4 Wochen | mittel | 0 € | nein | Preisdruck aus Billigländern, keine Kundenbindung |
| White-Label für andere Agenturen | 2–6 Wochen | mittel–hoch | 0 € | teilweise | ✅ **Zweiter Kanal ab Monat 2** |
| Nischen-Websites mit AdSense/Affiliate | 6–18 Monate | niedrig | 500 €+ | ja | Google-KI-Antworten fressen Traffic, viel zu langsam |
| Websites kaufen & verkaufen (Flipping) | 1–3 Monate | mittel | 2.000 €+ | nein | braucht Kapital und Erfahrung |
| Templates/Themes verkaufen (Etsy, ThemeForest) | 1–3 Monate | niedrig–mittel | 0 € | nein | übersättigt, kleine Beträge |
| Eigenes Website-Baukasten-SaaS | 6–12 Monate | niedrig | hoch | ja | Wix/Jimdo/Squarespace sind übermächtig |
| Shopify-Shops für andere bauen | 2–6 Wochen | mittel | 0 € | teilweise | gute Ergänzung, aber kleinerer Markt |

### Warum der Hauptweg die höchste Wahrscheinlichkeit hat

1. **Der Bedarf ist real und messbar.** In jeder Stadt gibt es Dutzende Betriebe mit vielen Google-Bewertungen, aber ohne Website oder mit einer Seite von 2012. Du kannst sie in Google Maps zählen, bevor du einen Euro ausgibst.
2. **Du verkaufst nichts Abstraktes.** Der Inhaber sieht *seine eigene* Website mit *seinem* Namen und *seinen* Leistungen. „Gefällt mir / gefällt mir nicht" ist eine viel leichtere Entscheidung als „Soll ich eine Agentur beauftragen?".
3. **KI macht die Demo fast kostenlos.** Früher kostete eine Demo einen halben Tag, heute 5–15 Minuten. Erst dadurch lohnt es sich, *vorab* zu bauen. Genau das ist dein Vorteil gegenüber klassischen Agenturen.
4. **Das Abo senkt die Einstiegshürde.** 49–149 € im Monat statt 2.500 € auf einmal. Für den Handwerker ist das ein „Ja" am Küchentisch, für dich ist es planbares Einkommen.
5. **Wiederkehrender Umsatz stapelt sich.** Jeder Kunde zahlt Monat für Monat. Nach 12 Monaten stehen dir 40–60 Abos zu, ohne dass du jeden Monat neu verkaufen musst.
6. **Du hast die Werkzeuge schon.** Mit dem Dreierpaket-Generator (Basic / Premium / Cinematic), der Demo-Pipeline über GitHub und Cloudflare Pages und den Local-SEO-Skills ist der technische Teil bereits zu 80 % gelöst.

---

## 2. Das Geschäftsmodell im Detail

```
 Lead finden ──► Demo automatisch bauen ──► Demo zeigen (Brief/Besuch) ──► Gespräch ──► Abschluss
     │                  │                         │                          │            │
 Google Maps        Generator +             QR-Code im Brief,           10–15 Min.,   Stripe/SEPA,
 ohne Website       KI-Texte               persönlicher Besuch        Telefon/vor Ort  Vertrag digital
                                                                                          │
                                                                                          ▼
                                    Upsells ◄── Betreuung (monatlich) ◄── Live in 48 h ◄─┘
```

**Kern-Prinzip: „Erst liefern, dann verkaufen."** Du fragst nicht „Brauchen Sie eine Website?", sondern sagst „Ihre Website ist schon fertig, schauen Sie mal."

**Einnahmequellen pro Kunde:**
- Einrichtungsgebühr (einmalig): 0–490 €
- Monatliches Abo: 49 / 89 / 149 €
- Upsells: Google-Unternehmensprofil, Bewertungs-System, Stadt-Unterseiten, Google-Ads-Betreuung, Fotos, Texte

---

## 3. Zielgruppe: an wen genau verkaufen

### Die idealen Kunden (nach Abschlusswahrscheinlichkeit sortiert)

| Rang | Branche | Warum | Typischer Auftragswert für den Kunden |
|---|---|---|---|
| 1 | **Handwerk:** Maler, Fliesenleger, Dachdecker, Elektriker, SHK, Zimmerer, Trockenbau | hohe Auftragswerte, oft gar keine Website, **Azubi- und Fachkräftemangel** | 2.000–50.000 € |
| 2 | **Garten- und Landschaftsbau, Hausmeister, Reinigung, Umzug** | lokales Suchverhalten, wenig digital | 500–10.000 € |
| 3 | **Kfz-Werkstätten, Reifen, Aufbereitung** | Konkurrenz um lokale Suchanfragen | 200–3.000 € |
| 4 | **Kosmetik, Nagelstudio, Friseur, Barbershop** | wollen eine schöne Seite mit Online-Buchung | 50–150 € (aber Stammkunden) |
| 5 | **Coaches, Yoga, Heilpraktiker, Energiearbeit** | visuell anspruchsvoll, online-affin, **dein Seelenraum-Portfolio passt perfekt** | 100–2.000 € |
| 6 | Restaurants, Imbisse | hoher Bedarf, aber kleines Budget und hoher Aufwand | — eher meiden |

**Empfehlung: Starte mit einer Hauptnische (Handwerk) plus einer Herzensnische (Coaches und Heilpraktiker).** Spezialisierung bringt bessere Vorlagen, bessere Texte, Weiterempfehlungen und den Satz „Wir machen *nur* Websites für Handwerker".

### Der „Goldene Lead" (Filterkriterien)

Ein Betrieb ist ein Top-Lead, wenn er:
- ✅ **mindestens 15 Google-Bewertungen** mit Schnitt ≥ 4,0 hat (Geschäft läuft, Geld ist da),
- ✅ **keine Website** hat **oder** die Website veraltet ist (nicht mobil, kein HTTPS, Baukasten-Werbebanner, Copyright 2015),
- ✅ ein **Inhaber-geführter** Betrieb ist (keine Kette, kein Franchise),
- ✅ in **max. 30 km Umkreis** liegt (für Besuche) — der Briefversand geht bundesweit.

### Die stärksten Verkaufsargumente je Branche

- **Handwerk:** „Ihre Kunden finden Sie schon. Aber **Azubis und Gesellen** suchen bei Google, und da gibt es Sie nicht." → Karriere-Seite als Kernnutzen.
- **Dienstleister:** „Bei der Suche ‚Maler [Stadt]' tauchen drei Konkurrenten auf, Sie nicht."
- **Kosmetik/Friseur:** „Online-Termine rund um die Uhr, weniger Telefonate während der Behandlung."
- **Coaches:** „Ihre Website soll sich anfühlen wie Ihre Arbeit." Zeig dabei Seelenraum als Referenz.

---

## 4. Angebot & Preise

### Die drei Pakete (passend zu deinem Generator)

| | **Basic** | **Premium** ⭐ | **Cinematic** |
|---|---|---|---|
| Monatlich | **49 €** | **89 €** | **149 €** |
| Einrichtung | 0 € | 190 € | 490 € |
| Seiten | 1 (Onepager) | bis 6 Seiten | bis 10 Seiten + Scrollfilm-Hero |
| Eigene Domain + SSL + Hosting | ✅ | ✅ | ✅ |
| Impressum & Datenschutz (Generator) | ✅ | ✅ | ✅ |
| Mobil, schnell, ohne Cookie-Banner (cookielose Statistik) | ✅ | ✅ | ✅ |
| Kontaktformular + WhatsApp-Button | ✅ | ✅ | ✅ |
| Änderungen pro Monat | 1 kleine | 3 kleine | unbegrenzt kleine |
| Google-Unternehmensprofil optimiert | — | ✅ | ✅ |
| Karriere-/Azubi-Seite | — | ✅ | ✅ |
| Lokale SEO-Unterseiten (Stadtteile) | — | 2 | 6 |
| Bewertungs-QR-Karte (Druckdatei) | — | ✅ | ✅ |
| Monatlicher Kurzbericht | — | ✅ | ✅ |
| Mindestlaufzeit | 12 Monate | 12 Monate | 12 Monate |

Preise netto (oder als Kleinunternehmer ohne USt, siehe Kapitel 10).

**Warum diese Preise funktionieren:**
- **Premium ist das Ziel-Paket.** Basic macht Premium günstig erscheinen, Cinematic macht Premium vernünftig erscheinen (Anker-Effekt). Rechne mit etwa 60 % Premium-Abschlüssen.
- 89 € im Monat sind für einen Handwerker weniger als eine Stunde Arbeit. **Ein einziger zusätzlicher Auftrag im Jahr bezahlt das Abo zehnfach.**
- Die Mindestlaufzeit von 12 Monaten sichert dir mindestens 1.068 € pro Premium-Kunde.

### Alternative: Kauf statt Abo
Manche Inhaber hassen Abos. Biete dann an: **Kaufpreis 1.490 € (Premium) + 19 €/Monat Hosting und Wartung.** So verlierst du keinen Abschluss.

### Schnelles Geld: das „Starter-Angebot" für die ersten 5 Kunden
„Gründungskunden-Preis": **Premium für 59 €/Monat dauerhaft, Einrichtung 0 €**. Als Gegenleistung gibt es eine Google-Bewertung, ein Testimonial-Video (30 Sekunden mit dem Handy) und die Erlaubnis, die Seite als Referenz zu zeigen. Damit kommst du schnell an Social Proof, ohne den du später schwerer verkaufst.

### Garantie (senkt das Risiko für den Kunden)
„**Gefällt Ihnen die Seite nicht, zahlen Sie nichts.** Sie sehen alles, bevor Sie unterschreiben." Bei vorab gebauten Demos kostet dich diese Garantie praktisch nichts.

---

## 5. Vertrieb: wie du an Kunden kommst (legal in Deutschland)

> ⚠️ **Wichtig: Kaltakquise per E-Mail ist in Deutschland auch gegenüber Firmen ohne Einwilligung unzulässig (§ 7 UWG).** Das kann teure Abmahnungen nach sich ziehen. Kalte Anrufe bei Firmen brauchen eine „mutmaßliche Einwilligung", und die verneinen Gerichte bei Website-Angeboten oft. **Deshalb setzt dieser Plan auf Kanäle, die sicher erlaubt sind: Briefpost, persönlicher Besuch, Empfehlungen, Partner und Werbung.** Den Kunden anzurufen, der *dich* über den QR-Code kontaktiert hat, ist natürlich jederzeit erlaubt.

### Kanal 1: Der „Ihre Website ist fertig"-Brief ⭐ (automatisierbar, skalierbar)

- Ein **echter Brief** mit Fensterumschlag, handschriftlich wirkender Unterschrift und einem **Farbausdruck der Demo-Startseite** (Handy-Mockup).
- Ein **QR-Code** führt direkt zu *seiner* Demo (`demo.deinedomain.de/maler-schmidt`).
- Dazu ein klarer Aufruf: „Rufen Sie mich an oder schreiben Sie per WhatsApp, die Seite kann in 48 Stunden unter Ihrer Domain live sein."
- **Kosten: ca. 1,20–1,80 € pro Brief** inkl. Druck und Porto über Druck-und-Versand-APIs wie Pingen oder LetterXpress. Der Versand ist **voll automatisierbar**.
- **Erwartung:** 3–8 % rufen an oder schreiben zurück. Davon schließen 30–50 % ab. **Bei 100 Briefen kommen grob 1–3 Kunden heraus.** Bei einem Kundenwert von über 1.000 € pro Jahr ist das ein sehr guter ROI.
- **Nachfassen:** Nach 7 Tagen kommt eine Postkarte („Ihre Demo ist noch 14 Tage reserviert"). Nach 14 Tagen besuchst du die Leads im Umkreis persönlich.

Vorlage: siehe `VORLAGEN.md` → Brief.

### Kanal 2: Persönlicher Besuch mit dem Tablet ⭐ (schnellstes Geld)

- Du gehst mit der **fertigen Demo auf dem Tablet** zum Betrieb (Werkstatt, Studio, Ladenlokal). Beste Zeiten: Di–Do, 9:30–11:30 und 14–16 Uhr.
- Du hast 30 Sekunden: „Ich habe Ihnen eine Website gebaut, darf ich sie Ihnen kurz zeigen?" Fast jeder sagt Ja, weil es *seine* Seite ist.
- **Erwartung:** 15–25 % Abschlussquote bei Leads, die du antriffst. Das ist der schnellste Weg zu den ersten 3–5 Kunden.
- Plane **10 Besuche an einem Vormittag** in einem Gewerbegebiet. Die Demos dafür hast du am Vorabend automatisch erzeugt.

Skript: siehe `VORLAGEN.md` → Besuch.

### Kanal 3: Empfehlungen (kostenlos, ab Kunde 3)

- **Empfehlungsprogramm:** Jeder Kunde bekommt **einen Monat gratis pro geworbenem Kunden**. Der Geworbene bekommt die Einrichtung gratis.
- Handwerker kennen Handwerker: Elektriker empfehlen SHK, Maler empfehlen Trockenbauer.
- Frage **aktiv nach**, am besten 14 Tage nach dem Livegang, wenn der Kunde gerade begeistert ist: „Kennen Sie 2 Kollegen, die auch keine gute Seite haben?"

### Kanal 4: Partner (Multiplikatoren)

| Partner | Warum sie mitmachen | Dein Angebot |
|---|---|---|
| **Steuerberater** | Gründer-Mandanten brauchen Websites | 10 % Provision dauerhaft oder Gegenempfehlung |
| **Existenzgründungsberater, IHK/HWK-Gründerseminare** | brauchen Referenten | 20-Minuten-Vortrag „Sichtbar in 48 h" |
| **Druckereien, Werbetechnik (Fahrzeugbeschriftung)** | Kunde lässt Logo und Auto bekleben, aber hat keine Website | gegenseitige Empfehlung |
| **Fotografen** | liefern dir Fotos, du lieferst ihnen Aufträge | Fotopaket als Upsell |
| **Großhändler (Baustoffe, Friseurbedarf)** | Theke voller Inhaber | Flyer und Aufsteller mit QR-Code |

### Kanal 5: Inbound (läuft nebenher, wirkt ab Monat 3)

- **Deine eigene Website** mit Branchenseiten („Website für Maler", „Website für Fliesenleger") und Stadtseiten. Nutze dafür die Skills `local-landing-pages` und `local-schema`.
- **Dein eigenes Google-Unternehmensprofil** (Webdesign + Stadt) mit vielen Bewertungen deiner Kunden.
- **Instagram/TikTok:** Vorher-nachher-Videos („Diese Malerei hatte 4,9 Sterne, aber keine Website, so sieht sie jetzt aus"). Mit KI-Schnitt ist so ein Video in 10 Minuten fertig.
- **Facebook-Gruppen** von Handwerkern und Gründern: Gib echten Mehrwert (z. B. „5 Fehler auf Handwerker-Websites") und keine Spam-Posts.

---

## 6. Die Automatisierungs-Maschine

Ziel: **Von „Betrieb gefunden" bis „Brief im Briefkasten" ohne Handarbeit.** Du machst nur noch Qualitätskontrolle, Gespräche und Abschlüsse.

### Pipeline

```
[1] Lead-Suche        Google Places API / Outscraper → Kategorie + Stadt
        │             Filter: ≥15 Bewertungen, ≥4,0 Sterne, keine/alte Website
        ▼
[2] Anreicherung      Website-Check (fehlt? HTTPS? mobil? Copyright-Jahr?)
        │             Leistungen aus Kategorie + Bewertungstexten ableiten (KI)
        ▼
[3] Demo-Bau          Betriebsdatenblatt (JSON) → Dreierpaket-Generator
        │             KI schreibt Texte (Leistungen, Über uns, FAQ, Karriere)
        │             Bilder: lizenzfreie Stock- oder KI-Bilder (NIE fremde Fotos)
        ▼
[4] Veröffentlichung  GitHub → Cloudflare Pages → demo.deinedomain.de/<slug>
        │             noindex, passwortlos, aber nicht verlinkt
        ▼
[5] QS (du, 2 Min.)   Kurzer Blick: Name, Ort, Branche stimmen? Fertig.
        ▼
[6] Brief             Mockup-Screenshot (Playwright) + QR-Code → PDF
        │             → Druck-und-Versand-API (Pingen/LetterXpress)
        ▼
[7] CRM               Status „Brief raus", Datum, Nachfass-Termin (+7 Tage)
        ▼
[8] Tracking          QR-Aufruf → Benachrichtigung aufs Handy („Maler Schmidt
                      schaut gerade seine Demo an!") → jetzt Nachfass-Besuch/Postkarte
```

**Der Trick in Schritt 8:** Wenn der Inhaber seine Demo aufruft, weißt du das in Echtzeit, weil der Link zu genau einem Lead gehört. Dieser Lead ist jetzt „heiß". Ein Besuch oder eine Postkarte in den nächsten 48 Stunden verdoppelt die Abschlussquote.

### Werkzeugkasten (Kosten pro Monat)

| Zweck | Werkzeug | Kosten |
|---|---|---|
| Leads | Google Places API (Gratis-Kontingent) oder Outscraper | 0–30 € |
| Automatisierung | n8n (selbst gehostet) oder Make.com | 0–20 € |
| KI-Texte | Claude API | 10–30 € |
| Demo-Generator | dein `09_Dreierpaket`-Generator | 0 € |
| Hosting Demos + Kundenseiten | Cloudflare Pages + GitHub | 0 € |
| Domains für Kunden | INWX / Cloudflare Registrar / Hostinger | ~1 €/Domain/Monat (in den Preis eingerechnet) |
| Formulare | Tally / Formspree / Cloudflare Worker | 0–10 € |
| Cookielose Statistik | Plausible / Cloudflare Web Analytics | 0–9 € |
| CRM | Notion / Airtable / Google Sheets | 0 € |
| Briefversand | Pingen / LetterXpress | pro Brief |
| Zahlungen | Stripe (Abos + SEPA-Lastschrift) | 1,5 % + 0,25 € |
| Termine | Cal.com | 0 € |
| Verträge | Stripe-Checkout mit AGB-Häkchen oder Docusign-Alternative (z. B. Yousign) | 0–15 € |
| Buchhaltung | Lexware Office / sevDesk | 10–20 € |
| Uptime-Überwachung | UptimeRobot | 0 € |
| **Summe Fixkosten** | | **≈ 30–150 €/Monat** |

### Was KI konkret für dich erledigt
- Leistungstexte, „Über uns", FAQ und Karriere-Seite je Branche und Betrieb
- Meta-Titel, Beschreibungen, Schema-Markup (LocalBusiness)
- Personalisierte Brieftexte (Bezug auf echte Bewertungen: „Ihre Kunden loben Ihre Pünktlichkeit …")
- Monatsberichte für Kunden aus der Statistik
- Google-Unternehmensprofil-Beiträge (Upsell)
- Antworten auf Kundenbewertungen (Upsell)
- Kurzvideos und Vorher-nachher-Posts für dein eigenes Marketing

---

## 7. Lieferung: von „Ja" bis „Live" in 48 Stunden

1. **Abschluss** (im Gespräch): Der Kunde unterschreibt digital und richtet den Stripe-Checkout mit SEPA-Lastschrift ein. **Erst bezahlen, dann live.**
2. **Onboarding-Formular** (automatisch per WhatsApp/SMS-Link): Logo, 5–15 echte Fotos (Handy reicht), Leistungen bestätigen, Öffnungszeiten, Impressumsdaten, Wunschdomain.
3. **Domain:** Du registrierst sie **auf den Namen des Kunden** oder überträgst sie bei Kündigung. Das schafft Vertrauen und ist fair.
4. **Finalisieren:** Echte Fotos und Daten rein, Impressum und Datenschutz erzeugen, Formular testen, Lighthouse-Check (Ziel ≥ 90).
5. **Livegang:** Domain verbinden, SSL aktiv, Google Search Console und Statistik einrichten.
6. **Übergabe-Nachricht:** „Ihre Seite ist live" + Bewertungs-QR-Karte + Bitte um Google-Bewertung für dich.
7. **Tag 14:** Zufriedenheits-Check + Empfehlungsfrage.
8. **Monatlich:** Automatischer Kurzbericht (Besucher, Anfragen, Top-Suchbegriffe) mit einem Satz wie „Es gab 3 Anfragen über das Formular". Das ist der Grund, warum niemand kündigt.

**Zeitaufwand pro neuem Kunden nach der Einarbeitung: 1–2 Stunden.**

---

## 8. Upsells: aus 79 € werden 200 € pro Kunde

| Upsell | Preis | Aufwand mit KI |
|---|---|---|
| Google-Unternehmensprofil einrichten/optimieren (Skill `gbp-optimization`) | 190 € einmalig | 1 h |
| Bewertungs-System (QR-Karten, Nachfass-Link, Antwortvorlagen) (`review-management`) | 29 €/Monat | 15 Min./Monat |
| GBP-Beiträge (4 pro Monat) | 39 €/Monat | 20 Min./Monat |
| Zusätzliche Stadtteil-/Leistungsseiten (`local-landing-pages`) | 49 € pro Seite | 10 Min. |
| Google-Ads-Betreuung (lokal) | 99–199 €/Monat + Budget | 1 h/Monat |
| Lokale-SEO-Analyse als PDF (`local-seo-audit`, `client-deliverables`) | 149 € oder gratis als Türöffner | 30 Min. |
| Online-Terminbuchung | 19 €/Monat | einmalig 30 Min. |
| Mehrsprachigkeit (EN/TR/PL/RU) | 149 € einmalig | 30 Min. |
| Barrierefreiheits-Check (BFSG) für Shops/Buchungsseiten | 290 € | 1–2 h |
| Professionelles Fotoshooting (über Partner-Fotografen) | 390 € (du behältst 20–30 %) | 0 h |

Ziel: **Durchschnittlicher Umsatz pro Kunde (ARPU) von über 120 €/Monat nach 6 Monaten.**

---

## 9. Werbung: wann, wo, wie viel

**Grundregel: Keine bezahlte Werbung, bevor Brief und Besuch funktionieren.** Werbung verstärkt ein funktionierendes Angebot, ein kaputtes repariert sie nicht.

| Phase | Werbekanal | Budget | Ziel |
|---|---|---|---|
| Monat 1–2 | **keine Werbung**, nur Briefe und Besuche | 0 € (Briefe: 150–300 €) | erste 5–10 Kunden, Testimonials |
| Monat 3 | **Google Ads** auf Suchbegriffe wie „Website für Handwerker", „Homepage erstellen lassen [Stadt]" | 10–20 €/Tag | Inbound testen; CPC 3–10 € |
| Monat 3–4 | **Meta Ads** (Facebook/Instagram) mit Vorher-nachher-Video und Kunden-Testimonial, Zielgruppe: Selbstständige, Handwerk, Umkreis | 10–15 €/Tag | Leads per Formular |
| ab Monat 4 | **Retargeting** aller Demo-Besucher und Website-Besucher | 3–5 €/Tag | Spätentschlossene abholen |
| laufend | **Briefe skalieren**: 200–500 pro Monat | 300–800 € | planbarster Kanal |

**Entscheidungsregel:** Ein Kanal bleibt nur, wenn **Kosten pro Neukunde < 300 €** sind. Bei 12 Monaten × 89 € ist das ein ROI von über 3×.

Und umgekehrt: **Werbung *für deine Kunden*** (Google Ads verwalten) ist ein lukrativer Upsell, siehe Kapitel 8.

---

## 10. Recht, Steuern, Absicherung

> Kein Ersatz für Rechts- oder Steuerberatung. Lass dir die Punkte einmalig von IHK/HWK-Beratung (oft kostenlos) und einem Steuerberater bestätigen.

### Vor dem ersten Kunden
- [ ] **Gewerbe anmelden** (Webdesign/Internetdienstleistungen), ca. 20–60 €
- [ ] **Steuerlich:** Fragebogen zur steuerlichen Erfassung (ELSTER). **Kleinunternehmerregelung** prüfen: Seit 2025 gilt sie bis 25.000 € Umsatz im Vorjahr und 100.000 € im laufenden Jahr. Mit dem Abo-Modell überschreitest du das im Jahr 2 wahrscheinlich. Plane das ein.
- [ ] **Geschäftskonto** (getrennt vom Privatkonto)
- [ ] **Berufshaftpflicht / IT-Haftpflicht** (ca. 10–25 €/Monat). Sie schützt bei Fehlern wie Datenverlust oder Abmahnung wegen eines Kundenbilds.
- [ ] **Eigene AGB + Leistungsbeschreibung + Auftragsverarbeitungsvertrag (AVV)**: Du hostest und verarbeitest Formulardaten. Vorlagen findest du bei IT-Recht-Kanzlei oder Händlerbund (kostenpflichtig, aber abmahnsicher).

### Bei jeder Kunden-Website
- [ ] **Impressum & Datenschutzerklärung** korrekt (Generator, z. B. eRecht24 Premium oder IT-Recht-Kanzlei)
- [ ] **Keine Google Fonts vom Google-Server** laden, sondern Schriften lokal einbinden (LG München, 2022)
- [ ] **Keine Tracking-Cookies** → kein Cookie-Banner nötig (cookielose Statistik)
- [ ] **Bilder nur mit Rechten:** eigene Fotos des Kunden, lizenzierte Stockbilder oder KI-Bilder. **Niemals Fotos aus Google Maps oder fremden Seiten übernehmen**, auch nicht für die Demo.
- [ ] **Barrierefreiheitsstärkungsgesetz (BFSG)** seit 28.06.2025: Es betrifft vor allem Online-Shops und Buchungs-/Vertragsabschlüsse mit Verbrauchern. Kleinstunternehmen (unter 10 Mitarbeiter und unter 2 Mio. € Umsatz) sind bei Dienstleistungen ausgenommen. Baue trotzdem barrierearm, das ist ein gutes Qualitätsargument, aber **verkaufe keine Angst**.

### Bei Demo-Seiten
- [ ] Demos auf **deiner Subdomain**, `noindex`, nicht öffentlich verlinkt, Hinweis „Entwurf, nicht von [Betrieb] beauftragt"
- [ ] **Keine Domains auf fremde Firmennamen vorab registrieren** (Namensrecht § 12 BGB, wirkt erpresserisch)
- [ ] Demo nach 30 Tagen ohne Reaktion **löschen**
- [ ] Bei Briefen: Adresse aus öffentlichem Firmeneintrag. Dein Interesse an Werbung per Post ist laut DSGVO (Art. 6 Abs. 1 lit. f) in der Regel ein berechtigtes Interesse. Der Werbewiderspruch muss **sofort** umgesetzt werden (Sperrliste im CRM).

### Vertrag (Kernpunkte, Details in `VORLAGEN.md`)
Laufzeit 12 Monate, danach monatlich kündbar · Domain gehört dem Kunden · Inhalte (Texte/Fotos) gehören dem Kunden · Design/Code bleibt deine Lizenz, beim Ausstieg Export gegen Pauschale (z. B. 290 €) · Änderungskontingent · Zahlungsverzug → Seite nach Mahnung offline.

---

## 11. Zahlen: Kosten, Umsatz, drei Szenarien

### Startkosten (einmalig)

| Posten | Kosten |
|---|---|
| Gewerbe | 20–60 € |
| Eigene Domain + Logo + Visitenkarten | 50 € |
| Rechtstexte-Abo (AGB/AVV/Generator) | 0–30 €/Monat |
| Erste 150 Briefe | 200–270 € |
| Tablet (falls nicht vorhanden; gebraucht reicht) | 0–200 € |
| **Summe** | **≈ 300–600 €** |

### Annahmen pro Monat
- 200 Briefe/Monat (≈ 300 €) + 40 Besuche/Monat
- Brief: 5 % Reaktion → 10 Gespräche → 35 % Abschluss → **3–4 Kunden**
- Besuche: 40 → ca. 25 angetroffen → 15 % → **3–4 Kunden**
- Kündigungsrate ab Monat 13: 2 %/Monat

### Drei Szenarien (Monat 12)

| | **Vorsichtig** | **Realistisch** | **Stark** |
|---|---|---|---|
| Neukunden pro Monat (Ø) | 3 | 6 | 10 |
| Aktive Kunden nach 12 Monaten | ~33 | ~66 | ~110 |
| Ø Umsatz pro Kunde/Monat inkl. Upsells | 80 € | 100 € | 120 € |
| **Wiederkehrender Umsatz (MRR) Monat 12** | **≈ 2.600 €** | **≈ 6.600 €** | **≈ 13.200 €** |
| Einrichtungsgebühren im Jahr | ≈ 4.000 € | ≈ 10.000 € | ≈ 20.000 € |
| **Umsatz im ersten Jahr (gesamt)** | **≈ 22.000 €** | **≈ 50.000 €** | **≈ 100.000 €** |
| Laufende Kosten im Jahr (Tools, Briefe, Werbung, Versicherung) | ≈ 5.000 € | ≈ 9.000 € | ≈ 18.000 € |

**Der wichtigste Satz:** Im Jahr 2 musst du die Kunden aus Jahr 1 nicht neu gewinnen. Bei „realistisch" startest du Jahr 2 schon mit rund 80.000 € Jahresumsatz aus Abos, *bevor* du einen neuen Kunden verkaufst.

### Schnelles Geld — die ersten 30 Tage (realistisch)
- Woche 1: Setup, 30 Demos, 20 Besuche → **1–2 Gründungskunden** (je 59 €/Monat)
- Woche 2–4: 150 Briefe + 40 Besuche → **4–8 weitere Kunden**
- **Ergebnis nach 30 Tagen:** 5–10 Kunden, **≈ 400–900 € MRR** + Einrichtungsgebühren von 500–1.500 €. Damit sind deine Kosten gedeckt, und du hast Referenzen.

---

## 12. Der 90-Tage-Fahrplan

### Woche 1 — Fundament & erste Abschlüsse

| Tag | Aufgaben |
|---|---|
| **Tag 1** | Gewerbe anmelden (online). Geschäftskonto eröffnen. Markennamen + Domain festlegen (z. B. „Handwerk Online [Region]"). Stripe-Konto anlegen und 3 Abo-Produkte + Gründungspreis einrichten. |
| **Tag 2** | Eigene Website als Onepager (dein Generator, Premium-Stufe): Angebot, 3 Pakete, Garantie, „So läuft's", Kontakt/WhatsApp. Eigenes Google-Unternehmensprofil beantragen. |
| **Tag 3** | Lead-Liste #1: 2 Branchen × 3 Städte im Umkreis, gefiltert nach „Goldener Lead" → 100 Leads ins CRM. Demo-Subdomain einrichten. |
| **Tag 4** | 30 Demos erzeugen (Handwerk). QS: 2 Minuten je Demo. Tablet einrichten (Demos als Lesezeichen/Startbildschirm). |
| **Tag 5** | **Erster Besuchstag:** 10–15 Betriebe. Skript nutzen. Ziel: 1 Abschluss. Abends: Einwände notieren, Skript verbessern. |
| **Tag 6** | AGB/AVV/Leistungsbeschreibung einbinden. Onboarding-Formular (Tally) bauen. Haftpflicht abschließen. |
| **Tag 7** | Zweiter Besuchstag oder Erstkunden-Lieferung. Wochenrückblick. |

### Woche 2–4 — Maschine bauen & Volumen

- [ ] Pipeline-Schritte 1–7 in n8n/Make automatisieren (siehe Kapitel 6). Fang **halbautomatisch** an: Wichtig ist, dass es läuft, nicht dass es schön ist.
- [ ] **Brief-Welle 1:** 150 Briefe (Leads außerhalb des Besuchsradius)
- [ ] **2 Besuchstage pro Woche** (je 10–15 Betriebe)
- [ ] Jeden Abschluss innerhalb von 48 h live bringen. Danach: Bewertung + Testimonial-Video einholen
- [ ] QR-Aufruf-Benachrichtigung aktivieren → heiße Leads sofort nachfassen
- [ ] **Ziel Ende Monat 1: 5–10 Kunden, 3 Testimonials, 3 Google-Bewertungen**

### Monat 2 — Optimieren & zweiten Kanal öffnen

- [ ] Gründungspreis beenden → reguläre Preise (Premium 89 €)
- [ ] Brief A/B-Test: Variante A „Ihre Website ist fertig" vs. B „Ihre Kunden suchen Sie, Azubis auch"
- [ ] 200–300 Briefe/Monat, 2 Besuchstage/Woche
- [ ] **Empfehlungsprogramm** starten (alle Kunden anschreiben)
- [ ] **Partner:** 5 Steuerberater, 2 Druckereien, 1 Fotograf ansprechen (persönlich/Brief)
- [ ] **White-Label-Kanal:** 10 kleine Agenturen/Freelancer anbieten: „Ich baue eure Kundenseiten in 48 h für 290 € netto pro Seite"
- [ ] Erste Upsells verkaufen: GBP-Optimierung an alle Premium-Kunden
- [ ] Zweite Nische (Coaches/Heilpraktiker) mit eigener Vorlage und Seelenraum als Referenz testen
- [ ] **Ziel Ende Monat 2: 15–20 Kunden, MRR ≥ 1.500 €**

### Monat 3 — Werbung & Systematisierung

- [ ] Google Ads (Suchkampagne) mit 10–20 €/Tag testen
- [ ] Meta Ads mit Vorher-nachher-Video testen
- [ ] Branchen-Landingpages auf eigener Website (5 Branchen × 3 Städte)
- [ ] Monatsbericht für Kunden automatisieren
- [ ] Prozesse als Checklisten dokumentieren (SOPs), damit eine Hilfskraft sie später übernehmen kann
- [ ] Preise erhöhen für Neukunden (+10 €), wenn die Abschlussquote > 40 % liegt
- [ ] **Ziel Ende Monat 3: 25–35 Kunden, MRR ≥ 2.500 €**

### Dein Wochenrhythmus ab Monat 2

| Tag | Fokus |
|---|---|
| Mo | Leads + Demos erzeugen (automatisch) + QS, Briefe auslösen |
| Di | **Besuchstag** |
| Mi | Lieferung neuer Kunden, Änderungswünsche |
| Do | **Besuchstag** / Rückrufe heißer Leads |
| Fr | Upsells, Partner, Marketing, Zahlen prüfen |

---

## 13. Kennzahlen, die du jede Woche prüfst

| Kennzahl | Zielwert | Wenn darunter … |
|---|---|---|
| Demos erzeugt / Woche | ≥ 50 | Automatisierung verbessern |
| Brief-Reaktionsquote (QR-Aufrufe) | ≥ 15 % Aufrufe, ≥ 4 % Kontakt | Brief/Betreff/Mockup testen |
| Besuche → Gespräch | ≥ 50 % | Uhrzeit/Einstieg ändern |
| Gespräch → Abschluss | ≥ 30 % | Einwände analysieren, Garantie betonen |
| Zeit „Ja" → Live | ≤ 48 h | Onboarding vereinfachen |
| Kosten pro Neukunde | ≤ 300 € | Kanal pausieren |
| Anteil Premium/Cinematic | ≥ 60 % | Paketvergleich schärfen |
| Kündigungsquote | ≤ 2 %/Monat | Monatsberichte, Ergebnisse zeigen |
| ARPU | ≥ 100 € | Upsells anbieten |

---

## 14. Risiken & Gegenmaßnahmen

| Risiko | Wahrscheinlichkeit | Gegenmaßnahme |
|---|---|---|
| Abmahnung wegen Kaltakquise | hoch bei E-Mail/Telefon | **Nur Brief, Besuch, Inbound, Partner** (siehe Kapitel 5) |
| Abmahnung wegen Bildrechten/Fonts | mittel | nur lizenzierte Bilder, lokale Fonts, Haftpflicht |
| „Zu teuer" | häufig | Gegenrechnung „1 Auftrag = Abo für 3 Jahre", Basic-Paket, Gründungspreis |
| „Mein Neffe macht das" | häufig | „Super, dann zeigen Sie ihm die Seite. Wenn er's schneller und günstiger schafft, perfekt." Dann nach 4 Wochen nachfassen. |
| Kunden kündigen nach 12 Monaten | mittel | Monatsberichte mit Anfragen, Upsells mit sichtbarem Nutzen, persönlicher Kontakt |
| Du bist der Engpass (Zeit) | ab ~40 Kunden | SOPs, Hilfskraft (Minijob) für Lieferung, du verkaufst |
| Plattform-Risiko (Hosting/Tools) | niedrig | statische Seiten, Code in GitHub, Domain beim Kunden, jederzeit umziehbar |
| Zahlungsausfall | niedrig | SEPA-Lastschrift im Voraus, Seite pausieren nach Mahnung |
| Konkurrenz durch KI-Baukästen | steigend | Du verkaufst **„fertig + betreut + gefunden werden"**, kein Werkzeug. Der Handwerker will nichts selbst bauen. |
| Motivationsloch nach Absagen | sicher | Zahlen statt Gefühl: 10 Nein = 1–2 Ja. Absagen sind eingeplant. |

---

## 15. Skalierung nach Monat 3

1. **Vertriebshilfe auf Provision:** Studenten oder Rentner aus dem Handwerk machen Besuche für 150 € pro Abschluss. Du lieferst.
2. **Minijob/Freelancer für die Lieferung** mit deinen SOPs, damit du nur noch verkaufst und Partner pflegst.
3. **Regionen klonen:** Briefe bundesweit, Abschluss per Videocall (Bildschirm teilen = Demo zeigen).
4. **Branchen-Marke:** z. B. „Websites für Fliesenleger", mit Fachbegriffen, Vorlage und Referenzen *nur* dieser Branche. Damit wirst du zur Nummer 1 in einer Nische.
5. **Verbände und Innungen:** Rahmenvertrag „Mitgliederpreis" mit Innung oder Fachverband = Dutzende Kunden auf einen Schlag.
6. **Produktisierung:** „Sichtbar-Paket" (Website + GBP + Bewertungen + Ads) als Komplettpaket für 249 €/Monat.
7. **Exit-Option:** Ein Bestand von wiederkehrenden Website-Abos lässt sich verkaufen. Üblich ist ein Vielfaches des Jahresgewinns.

---

## Die 5 Regeln, die über Erfolg entscheiden

1. **Erst zeigen, dann fragen.** Jede Kontaktaufnahme enthält die fertige Demo.
2. **Volumen schlägt Perfektion.** 50 gute Demos pro Woche schlagen 5 perfekte.
3. **Nur legale Kanäle.** Eine Abmahnung kostet mehr als 100 Briefe.
4. **Live in 48 Stunden.** Geschwindigkeit ist dein Versprechen und dein Empfehlungsmotor.
5. **Jeden Monat Nutzen zeigen.** Der Monatsbericht hält deine Kunden im Abo.

**Nächster konkreter Schritt:** Tag 1 aus Kapitel 12 abarbeiten und parallel die erste Lead-Liste (100 Betriebe) ziehen. Die Demos dafür erzeugt dein Generator, die Texte für Brief und Besuch stehen in [`VORLAGEN.md`](./VORLAGEN.md).
