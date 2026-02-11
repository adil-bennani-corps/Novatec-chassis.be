# 🚀 Guide de Déploiement - Novatec Châssis

## 📋 Option 1 : Déploiement sur Vercel (Recommandé)

### Étape 1 : Préparer le compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte ou connectez-vous avec GitHub
3. Autorisez Vercel à accéder à vos dépôts GitHub

### Étape 2 : Importer le projet

1. Cliquez sur **"Add New Project"**
2. Sélectionnez votre dépôt : `adil-bennani-corps/Novatec-chassis.be`
3. Vercel détectera automatiquement Vite

### Étape 3 : Configuration (Déjà configurée ✅)

Les paramètres sont déjà dans `vercel.json` :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Étape 4 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez 1-2 minutes
3. Votre site est en ligne ! 🎉

### URL de Production

Vercel vous donnera une URL comme :
- `novatec-chassis-be.vercel.app`

### Configuration du Domaine Personnalisé

1. Dans Vercel Dashboard, allez dans **Settings > Domains**
2. Ajoutez votre domaine : `novatec-chassis.be`
3. Suivez les instructions pour configurer les DNS

---

## 📋 Option 2 : Déploiement sur Netlify

### Étape 1 : Préparer le compte Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte ou connectez-vous avec GitHub

### Étape 2 : Importer le projet

1. Cliquez sur **"Add new site" > "Import an existing project"**
2. Sélectionnez GitHub et autorisez Netlify
3. Choisissez le dépôt `adil-bennani-corps/Novatec-chassis.be`

### Étape 3 : Configuration

```
Build command: npm run build
Publish directory: dist
```

### Étape 4 : Déployer

1. Cliquez sur **"Deploy site"**
2. Votre site sera en ligne en quelques minutes

### Configuration du Domaine

1. Allez dans **Site settings > Domain management**
2. Ajoutez votre domaine personnalisé

---

## 📋 Option 3 : Déploiement sur GitHub Pages

### Étape 1 : Installer gh-pages

```bash
npm install --save-dev gh-pages
```

### Étape 2 : Ajouter les scripts dans package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Étape 3 : Modifier vite.config.js

```javascript
export default defineConfig({
  base: '/Novatec-chassis.be/',
  // ... autres configs
})
```

### Étape 4 : Déployer

```bash
npm run deploy
```

### Étape 5 : Configurer GitHub Pages

1. Allez dans **Settings > Pages**
2. Source : `gh-pages` branch
3. Le site sera accessible sur : `https://adil-bennani-corps.github.io/Novatec-chassis.be/`

---

## 🔄 Déploiement Automatique

### Sur Vercel et Netlify

Les déploiements sont **automatiques** :
- Chaque `git push` sur `main` déclenche un nouveau déploiement
- Les Pull Requests génèrent des previews automatiques
- Rollback possible en un clic

---

## 🧪 Tester avant de Déployer

### En local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de dev
npm run dev

# 3. Tester le build de production
npm run build
npm run preview
```

### Vérifier

- ✅ Toutes les pages se chargent
- ✅ Les images s'affichent
- ✅ Le formulaire de contact fonctionne
- ✅ La navigation est fluide
- ✅ Le site est responsive (mobile, tablette, desktop)

---

## 📊 Monitoring après Déploiement

### Vercel Analytics (Gratuit)

1. Activez Vercel Analytics dans le dashboard
2. Suivez les performances en temps réel
3. Consultez les métriques Core Web Vitals

### Google Analytics (Optionnel)

Pour ajouter Google Analytics :

1. Créez un compte Google Analytics
2. Obtenez votre ID de suivi (G-XXXXXXXXXX)
3. Ajoutez le script dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 Sécurité

### Headers de Sécurité (Déjà configurés ✅)

Dans `vercel.json` :

```json
{
  "headers": [
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "X-Frame-Options",
      "value": "DENY"
    },
    {
      "key": "X-XSS-Protection",
      "value": "1; mode=block"
    }
  ]
}
```

---

## 🐛 Résolution de Problèmes

### Le site ne se charge pas

1. Vérifiez les logs de build dans Vercel/Netlify
2. Assurez-vous que `dist/` est bien généré
3. Vérifiez que `npm run build` fonctionne en local

### Les images ne s'affichent pas

1. Vérifiez les chemins d'images : `/images/...`
2. Assurez-vous que les images sont dans `public/images/`
3. Vérifiez la console du navigateur pour les erreurs 404

### Erreur 404 sur les routes

1. Vérifiez la configuration des rewrites dans `vercel.json`
2. Pour Netlify, ajoutez un fichier `_redirects` :

```
/*    /index.html   200
```

---

## 📞 Support

Pour toute question sur le déploiement :
- Vérifiez la documentation officielle de Vercel
- Consultez les logs de build
- Testez en local avec `npm run build && npm run preview`

---

**Status actuel** : ✅ Le site est prêt à être déployé !

**Recommandation** : Utilisez Vercel pour le déploiement. C'est simple, rapide et gratuit pour les projets personnels.
