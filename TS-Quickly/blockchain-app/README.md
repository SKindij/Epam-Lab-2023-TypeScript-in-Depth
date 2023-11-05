# Blockchain TypeScript App

Сценарій `src/bc101.ts` – це перша версія нашого блокчейну. 
Вона містить класи `Block` та `Blockchain` поряд з коротким скриптом, що використовує API Blockchain'а для створення трьох блоків.





### Getting started

#### команди в консолі

`npm install` встановить усі залежності в директорію "node_modules"

`npm run tsc` запустить локальний компілятор tsc

`node dist/bc101.js` виконає файл bc101

`node dist/bc101_proof_of_work.js` виконає файл bc101_proof_of_work

#### "devDependencies" (package.json)

`"@types/node"` файл визначення типів для Node.js

`"typescript"` компілятор TypeScript

#### конфігурація tsconfig.json

`"module": "commonjs"` яким чином генерувати код для JavaScript-модулів

`"outDir": "./dist"` директорія для зберігання скомпільованих  JS-файлів

`"target": "es2017"` компілювати у синтаксисі с ES2017

`"lib": ["es2017"]` проект використовує API, описаний у бібліотеці es2017



