# Portfolio Noah - Architecture React

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── BackgroundGrid   # Grille d'arrière-plan animée
│   ├── CornerDecorations # Décorations d'angle style HUD
│   ├── Layout           # Layout wrapper (optionnel)
│   ├── NavigationMenu   # Menu de navigation avec React Router
│   ├── ProfileSection   # Image de profil avec anneaux animés
│   └── Title            # Titre et sous-titre
│
├── pages/               # Pages de l'application
│   ├── Home.jsx         # Page d'accueil
│   ├── Projects.jsx     # Page des projets
│   ├── About.jsx        # Page à propos
│   └── Contact.jsx      # Page de contact
│
├── assets/              # Images et ressources
│   └── PDP_Portfolio.png
│
├── App.jsx              # Router principal
├── App.css              # Variables CSS globales
└── main.jsx             # Point d'entrée
```

## 🎨 Design System

### Variables CSS Globales (App.css)
- `--primary-cyan`: #00FFFF
- `--dark-bg`: #0A0F1F
- `--darker-bg`: #05070F
- `--glow-cyan`: rgba(0, 255, 255, 0.6)
- `--font-title`: 'Orbitron'
- `--font-body`: 'Rajdhani'

## 🧭 Navigation

Le projet utilise **React Router v6** pour la navigation :

- `/` - Page d'accueil
- `/projects` - Page des projets
- `/about` - Page à propos
- `/contact` - Page de contact

## 🚀 Commandes

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Build pour la production
npm run preview  # Prévisualiser le build
```

## 🎯 Fonctionnalités

### Composants
- ✅ Architecture modulaire avec composants réutilisables
- ✅ Navigation avec React Router
- ✅ Animations CSS (glow, pulse, hover effects)
- ✅ Design responsive
- ✅ Style J.A.R.V.I.S. futuriste

### Pages
- ✅ **Home** : Page d'accueil avec profil et titre
- ✅ **Projects** : Grille de projets avec cards
- ✅ **About** : Section compétences et expérience
- ✅ **Contact** : Formulaire et informations de contact

## 🎨 Personnalisation

### Modifier les informations personnelles
- **Titre** : `src/components/Title.jsx`
- **Image de profil** : `src/assets/PDP_Portfolio.png`
- **Contact** : `src/pages/Contact.jsx`

### Ajouter un projet
Éditez `src/pages/Projects.jsx` et ajoutez une nouvelle card dans `.projects-grid`

## 📝 Notes Techniques

- Framework : **React 19** avec Vite
- Routing : **React Router DOM v6**
- Styling : **CSS pur** avec variables CSS
- Fonts : **Orbitron** & **Rajdhani** (Google Fonts)
