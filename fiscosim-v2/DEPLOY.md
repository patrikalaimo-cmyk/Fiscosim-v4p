# FiscoSim v2 – Guida Deploy Completa

## Struttura file
```
fiscosim-v2/
├── api/
│   └── send-email.js   ← backend email (NUOVO)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── index.html
├── manifest.json
├── sw.js
├── package.json        ← dipendenze Node (NUOVO)
└── vercel.json         ← config Vercel (NUOVO)
```

---

## STEP 1 – Crea account Gmail tecnico

1. Vai su gmail.com → Crea nuovo account
2. Scegli un nome tipo: `fiscosim.studio@gmail.com`
3. **Attiva verifica a due fattori** (obbligatorio per App Password):
   - myaccount.google.com → Sicurezza → Verifica in due passaggi

---

## STEP 2 – Genera App Password Gmail

1. Vai su: myaccount.google.com/apppasswords
2. Nome app: `FiscoSim`
3. Gmail genera una password di 16 caratteri tipo: `abcd efgh ijkl mnop`
4. **Copiala subito** — non la mostra più

---

## STEP 3 – Configura "Send mail as" (mittente noreply@envisioning.it)

1. Apri Gmail del nuovo account
2. Impostazioni (⚙️) → Vedi tutte le impostazioni → **Account**
3. "Invia messaggio come" → **Aggiungi un altro indirizzo email**
4. Nome: `Studio Envisioning` | Email: `noreply@envisioning.it`
5. Gmail invia email di verifica a noreply@envisioning.it → aprila e conferma

---

## STEP 4 – Inserisci credenziali nel codice

Apri `api/send-email.js` e modifica il blocco CONFIG:

```javascript
const CONFIG = {
  GMAIL_USER:     "fiscosim.studio@gmail.com",    // ← la tua mail Gmail
  GMAIL_APP_PASS: "abcd efgh ijkl mnop",          // ← App Password (con spazi va bene)
  FROM_NAME:      "Studio Envisioning",
  FROM_EMAIL:     "noreply@envisioning.it",
  REPLY_TO:       "info@envisioning.it",
};
```

---

## STEP 5 – Deploy su Vercel

1. Vai su vercel.com → crea account gratuito
2. Clicca **"Add New Project"** → **"Deploy manually"**
3. Trascina l'intera cartella `fiscosim-v2`
4. Vercel installa automaticamente nodemailer e fa il deploy
5. Ti dà un URL tipo: `fiscosim-studio.vercel.app`

---

## STEP 6 – Test finale

1. Apri l'URL su Safari iPhone
2. Fai una simulazione → apri Calendario → inserisci la tua email
3. Clicca **🧪 Invia email di test**
4. Controlla la casella (anche spam)
5. Se arriva → tutto funziona! ✅

---

## Installare su iPhone

1. Apri l'URL in **Safari**
2. Tocca icona **Condividi** (quadrato con freccia)
3. Scorri → **"Aggiungi alla schermata Home"**
4. Tocca **Aggiungi** → icona FiscoSim sulla home ✅

---

## Note tecniche

- Vercel piano gratuito: 100GB banda/mese, più che sufficiente
- Gmail App Password: 500 email/giorno gratis
- Il service worker garantisce funzionamento offline (solo calcoli, non email)

---
FiscoSim v2.0 | Anno fiscale 2025
