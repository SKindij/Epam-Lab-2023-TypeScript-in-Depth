# Web Blockchain TypeScript App

* **lib** — реалізує створення блокчейну та видобуток блоку. Також містить універсальну функцію, що генерує хеші для середовища браузера та Node.js.
* **browser** — містить код, що реалізує UI-блокчейн веб-програми. Цей код використовує код із директорії lib.
* **node** — містить невелику програму, яку ви можете запустити незалежно. Воно також використовує код із директорії lib.

### Структура проекту

```go
📁 blockchain-app/
│
├─ README.md
├─ package.json
├─ tsconfig.json
│
├─ 📁 src/
│   │
│   ├─ 📁 browser/
│   │   ├─ index.html
│   │   ├─ main.ts
│   │   ├─ styles.css
│   │
│   ├─ 📁 lib/
│   │   ├─ bc_transactions.ts
│   │   ├─ universal_sha256.ts
│   │
│   ├─ 📁 node/
│   │   ├─ main.ts
│   │   ├─ tsconfig.json
│   │

```


### Getting started

#### команди в консолі

`npm install` встановить усі залежності в директорію "node_modules"

`npm run "compileDeploy` запустить компілятор tsc та зкопіює UI файли 


