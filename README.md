# 🏗️ Novatec Châssis Bruxelles

Site web moderne et responsive pour Novatec Châssis, spécialiste de la réparation et installation de châssis PVC, ALU et Bois à Bruxelles.

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool rapide et performant
- **TailwindCSS** - Framework CSS utility-first
- **React Router DOM** - Routing côté client
- **Font Awesome** - Icônes vectorielles

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

## 🔧 Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🏭 Production

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualiser le build

```bash
npm run preview
```

## 📱 Fonctionnalités

### Pages

- **Accueil** - Présentation générale des services
- **Qui Sommes Nous** - Histoire et valeurs de l'entreprise
- **Nos Prestations** - Services détaillés avec images
- **Zones d'Interventions** - Communes de Bruxelles desservies

### Sections Principales

- 🎯 **Hero** - Section d'accueil avec CTA
- 🔧 **Services Détaillés** - PVC, Bois, Alu, Portes coulissantes
- 🔩 **Quincailleries** - Types de pièces remplacées (6 types)
- 🏢 **Marques** - Partenaires quincailliers (Roto, Maco, Sigenia, etc.)
- ⚡ **Urgence 24/7** - Call-to-action pour dépannage urgent
- 💬 **Témoignages** - Avis clients et statistiques
- ❓ **FAQ** - Questions fréquentes
- 📞 **Contact** - Formulaire avec redirection WhatsApp

### Optimisations

- ✅ **100% Responsive** - Mobile, Tablette, Desktop
- ✅ **Animations CSS** - Transitions fluides
- ✅ **Images optimisées** - Tailles adaptatives
- ✅ **Logos adaptatifs** - Redimensionnement automatique
- ✅ **WhatsApp Integration** - Contact direct depuis le formulaire
- ✅ **SEO Friendly** - Structure sémantique

## 🎨 Couleurs du Brand

- **Primary** : `#1e3a8a` (Bleu foncé)
- **Secondary** : `#10b981` (Vert)
- **Accent** : `#22c55e` (Vert clair)

## 📞 Contact

- **Téléphone** : +32 486 39 00 68
- **Email** : info@novatec-chassis.be
- **Zone** : Bruxelles et environs

## 🌐 Déploiement

### Vercel (Recommandé)

1. Connectez votre dépôt GitHub à Vercel
2. Configurez le build :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
3. Déployez !

### Netlify

1. Connectez votre dépôt GitHub à Netlify
2. Configurez le build :
   - **Build Command** : `npm run build`
   - **Publish Directory** : `dist`
3. Déployez !

### GitHub Pages

```bash
npm run build
# Déployer le contenu du dossier dist/ sur GitHub Pages
```

## 📄 Structure du Projet

```
novatec-react/
├── public/
│   └── images/          # Images du site
├── src/
│   ├── components/      # Composants React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesDetailles.jsx
│   │   ├── Quincailleries.jsx
│   │   ├── Marques.jsx
│   │   ├── Benefits.jsx
│   │   ├── EmergencyCTA.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppWidget.jsx
│   ├── pages/          # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── QuiSommesNous.jsx
│   │   ├── NosPrestations.jsx
│   │   └── ZonesInterventions.jsx
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html          # Template HTML
├── package.json        # Dépendances
├── vite.config.js      # Configuration Vite
└── tailwind.config.js  # Configuration TailwindCSS
```

## 📝 Licence

© 2026 Novatec Châssis Bruxelles. Tous droits réservés.

## 🤝 Support

Pour toute question technique, contactez l'équipe de développement.

---

Développé avec ❤️ pour Novatec Châssis Bruxelles
