# Novatec Châssis - Site Web React

Site web moderne et performant pour Novatec Châssis, spécialiste en réparation et installation de châssis à Bruxelles.

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **React Hook Form** - Gestion des formulaires

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🏗️ Structure du Projet

```
novatec-react/
├── public/
│   └── images/          # Images et assets statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Benefits.jsx
│   │   ├── EmergencyCTA.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppWidget.jsx
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Caractéristiques

### ✨ Page Unique (SPA)
- Navigation fluide sans rechargement
- Scroll smooth entre les sections
- Animations modernes et performantes

### 📱 Responsive Design
- Optimisé pour tous les écrans (mobile, tablette, desktop)
- Menu mobile adaptatif
- Images optimisées

### 🎯 Sections Principales

1. **Hero** - Section d'accueil avec CTA puissants
2. **Services** - Tous les services regroupés (8 cartes)
3. **Benefits** - 4 avantages clés
4. **Emergency CTA** - Appel à l'action pour dépannage urgent
5. **Testimonials** - Témoignages clients
6. **FAQ** - Questions fréquentes avec accordéon
7. **Contact** - Formulaire de contact complet
8. **Footer** - Pied de page avec liens et zones d'intervention

### 🔥 Fonctionnalités

- ✅ Formulaire de contact avec validation
- ✅ Widget WhatsApp flottant
- ✅ Bannière d'urgence fixe (desktop)
- ✅ Menu déroulant pour les services
- ✅ FAQ avec accordéon interactif
- ✅ Animations au scroll
- ✅ Boutons d'appel direct
- ✅ SEO optimisé

## 🎨 Palette de Couleurs

```javascript
colors: {
  primary: '#0066CC',      // Bleu principal
  secondary: '#00A86B',    // Vert secondaire
  accent: '#FF6B35',       // Orange accent
  dark: '#1a1a1a',         // Noir
  light: '#f8f9fa',        // Gris clair
}
```

## 📞 Contact

- **Téléphone :** +32 486 39 00 68
- **Email :** info@novatec-chassis.be
- **Zone :** Bruxelles & alentours

## 🚀 Déploiement

### Build de Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Hébergement Recommandé

- **Vercel** (recommandé pour React)
- **Netlify**
- **GitHub Pages**
- **Serveur web classique** (Apache, Nginx)

### Configuration pour serveur web

Si vous déployez sur un serveur web classique, assurez-vous de configurer les redirections pour le SPA :

**Apache (.htaccess) :**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx :**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🔧 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#VotreCouleur',
      // ...
    }
  }
}
```

### Ajouter une section

1. Créer un nouveau composant dans `src/components/`
2. L'importer dans `App.jsx`
3. L'ajouter dans le JSX de `App.jsx`

### Modifier le contenu

Les données sont directement dans les composants. Pour un site plus dynamique, vous pouvez :
- Créer des fichiers JSON dans `src/data/`
- Utiliser un CMS headless (Strapi, Contentful)
- Connecter une API

## 📝 TODO / Améliorations Futures

- [ ] Ajouter un système de backend pour les formulaires
- [ ] Intégrer Google Analytics
- [ ] Ajouter un blog
- [ ] Multilingue (FR/NL)
- [ ] PWA (Progressive Web App)
- [ ] Système de réservation en ligne

## 📄 Licence

© 2026 Novatec Châssis. Tous droits réservés.

---

**Développé avec ❤️ en React + Vite + TailwindCSS**
