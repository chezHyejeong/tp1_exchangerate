# tp1_exchangerate
TP 1: Développement d’une API get-only Node-Express-TS de centralisation d’API utiles
réalisé par Hyejeong
objectifs: 
  1. Création d’une API Express avec Node.js et Typescript
  2. Développement de 3 endpoints: 1 JSON data, 1 agrégateur, 1 mixed
  3. Création d’une repository Github public et correctement documenté

### Prérequis
Node.js, npm, MongoDB

### Installation
```bash
npm install
```

### Exécution
Exécutez la commande "tsc" dans le répertoire racine, puis exécutez "node dist/app.js"

```bash
tsc
node dist/app.js
```

### Fonctionnalités
Les principales fonctionnalités du projet.

* Fonctionnalité 1 : /exchangerate(Agrégateur) - Récupérer le taux de change euro-dollar sur internet
* Fonctionnalité 2 : /transactions(JSON) - Récupérer une liste de fausses transactions en euro, écrit par vous au format JSON
* Fonctionnalité 3 : /transactions/:id(Mixed) - Récupérer la valeur d’une de vos transaction en dollar

### Variables d'environnement

```bash
EXCHANGE_RATE_API_KEY : YOUR_ACCESS_KEY // remplacer par votre clé à travers https://manage.exchangeratesapi.io
DATABASE_URL : mongodb://localhost:27017/transactions // assurez-vous que vous avez la mongoDB transaction
```


