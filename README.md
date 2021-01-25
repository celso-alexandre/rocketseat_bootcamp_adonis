# Passos para criacao deste projeto
1. Criar o projeto:
```console
$ adonis new rocketseat_bootcamp_adonisjs --api-only
```
2. Instalar o Eslint:
```console
$ yarn eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-standard@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1
✔ Would you like to install them now with npm? · No / Yes
```
3. Consertar a instalacao do Eslint (devido ao uso do yarn, pois o Eslint somente automatiza a instalacao via NPM):  
a. Deletar arquivos `package-lock.json`, `yarn.lock` e a pasta `node_modules`  
b. Executar:
```console
yarn
```
4. Executando as migrations existentes em database/migrations:
```console
adonis migration:run
```

# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
