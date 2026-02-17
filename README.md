# Réseau Finance Nature — Site vitrine v1.0

Association loi 1901 fédérant les acteurs financiers territoriaux pour sensibiliser aux enjeux de la nature et mobiliser les financements privés.

**🔗 Site en ligne : [fabriceliut.github.io/reseau-finance-nature](https://fabriceliut.github.io/reseau-finance-nature/)**

---

## 🌿 Contenu du site

### Page d'accueil
- **Hero** avec accroche et CTA
- **Citation IPBES** (Février 2026)
- **Qui sommes-nous** : 4 objectifs fondamentaux (sensibiliser, mobiliser, coopérer, valoriser)
- **Contexte** : chiffres clés (50% PIB / 72% BCE / 42% AFD) + exemples de services écosystémiques
- **Actualités** : timeline de faits marquants (2024–2026) — IPBES, CERES, Fonds Objectif Biodiversité, Norsys…
- **Missions** : Mise en mouvement (Risques Nature, Gouvernance Nature, Financement) + Mise en relation (catalogue d'expertise, vitrine projets, dossiers de financement)
- **Adhésion** : cible prioritaire + cible élargie + avantages membres
- **Gouvernance** : Pauline Maillard, Pierre Béal, Roland Cathebras
- **CTA final**

### Formulaire de contact
Champs : Nom, Prénom, Structure, Email, Téléphone, Sujet.  
→ Envoi à **pauline@reseaufinancenature.org** via [FormSubmit](https://formsubmit.co/) (gratuit, sans inscription).

### Espace membres (protégé)
Ressources exclusives accessibles par mot de passe : articles, vidéos YouTube, documents.  
Filtrage par type de ressource.

## 🚀 Déploiement

Le site se déploie **automatiquement** à chaque push sur `main` :
```
push → GitHub Actions → Jekyll build → GitHub Pages
```

Le workflow est dans `.github/workflows/deploy.yml`. GitHub Pages est configuré en source **GitHub Actions**.

## 📝 Ajouter du contenu

### Nouvel article (blog)
Créer un fichier dans `_posts/` nommé `YYYY-MM-DD-titre.md` :

```yaml
---
title: "Titre de l'article"
date: 2026-03-01
category: article
author: Réseau Finance Nature
excerpt_text: "Résumé court"
---

Contenu en Markdown...
```

### Nouvelle ressource (espace membres)
Créer un fichier dans `_ressources/` :

```yaml
---
title: "Titre de la ressource"
date: 2026-03-01
type: article  # ou "video" ou "document"
description: "Description courte"
youtube_id: "ID_VIDEO"  # uniquement pour type: video
---

Contenu en Markdown...
```

Après commit + push, le contenu apparaît automatiquement sur le site.

## 🔑 Espace membres

| | |
|---|---|
| **Mot de passe** | `nature2026` |
| **Fichier à modifier** | `assets/js/auth.js` |
| **Durée de session** | 7 jours (localStorage) |

## 🎨 Charte graphique

| Couleur | Hex | Usage |
|---|---|---|
| Vert forêt | `#1B4332` | Couleur principale |
| Or discret | `#C9A84C` | Accents, CTA |
| Vert sauge | `#588157` | Secondaire |
| Fond clair | `#FAFAF5` | Arrière-plan |

**Typographies** : Playfair Display (titres) + Inter (corps)

## 📁 Structure du projet

```
├── _config.yml           # Configuration Jekyll
├── _layouts/             # Templates HTML (default, post, ressource)
├── _includes/            # Composants (header, footer)
├── _posts/               # Articles de blog (Markdown)
├── _ressources/          # Ressources membres (Markdown)
├── assets/
│   ├── css/style.css     # Styles complets
│   └── js/
│       ├── main.js       # Navigation, animations, filtres
│       └── auth.js       # Authentification espace membres
├── pages/                # Pages statiques (contact, membres, merci)
├── index.html            # Page d'accueil
└── .github/workflows/    # CI/CD GitHub Actions
```

## 🛠 Développement local

```bash
bundle install
bundle exec jekyll serve --baseurl ""
```

Le site est accessible sur `http://localhost:4000/`
