# Cypress + Cucumber (BDD) + POM — SauceDemo v1

Proyecto listo para correr pruebas BDD con Cypress y el preprocesador de Cucumber, usando Page Object Model, apuntando a `https://www.saucedemo.com/v1`.

## Requisitos
- Node.js 18+ (recomendado)
- npm

## Setup
```bash
npm install
```

## Ejecutar
- UI interactiva:
```bash
npm run cy:open
```
- Headless:
```bash
npm run cy:run
```

## Estructura
- `cypress/pages/*`: Page Objects (Login, Inventory, Checkout)
- `cypress/e2e/features/*`: Features Gherkin
- `cypress/e2e/step-definitions/*`: Step Definitions
- `cypress/fixtures/users.json`: credenciales de ejemplo

## Notas
- La `baseUrl` está en `cypress.config.ts` como `https://www.saucedemo.com/v1`.
- El login visita `/index.html` y valida navegación a `/inventory.html`.
- Los selectores están mapeados para SauceDemo v1. Si cambia la UI, ajusta los Page Objects.