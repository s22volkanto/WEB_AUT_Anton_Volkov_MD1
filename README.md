# WEB_AUT_Anton_Volkov_MD1

##  Task Summary

Automated test for the selectable grid on:  
[https://demoqa.com/selectable](https://demoqa.com/selectable)

---

## What It Does

- Navigates to the Selectable page
- Switches to the "Grid" view
- Clicks the following elements: `Two`, `Four`, `Six`, `Eight`
- Verifies those are **highlighted**
- Confirms the others are **not selected**

---

## Project Structure

```
WEB_AUT_Anton_Volkov_MD1/
├── cypress/
│   ├── e2e/
│   │   └── selectableTest.cy.js
│   └── support/
│       └── e2e.js
├── .gitignore
├── package.json
└── README.md
```

---

## Run Instructions

> Requires Node.js and Cypress installed

```bash
npm install
npx cypress open
```

Then run `selectableTest.cy.js` from the test runner.

