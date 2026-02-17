# Réseau Finance & Nature — Site vitrine

Site statique du Réseau Finance & Nature, hébergé sur GitHub Pages avec Jekyll.

## 🌿 Fonctionnalités

- **Page d'accueil** : présentation du réseau, vision, actions, actualités
- **Formulaire de contact** : envoie à pauline@reseaufinancenature.org (via FormSubmit)
- **Blog / Actualités** : articles en Markdown, auto-déployés au push
- **Espace membres** : protégé par mot de passe, avec articles, vidéos YouTube et documents
- **Responsive** : adapté mobile, tablette, desktop
- **Déploiement automatique** : push sur `main` → build Jekyll → GitHub Pages

## 🚀 Déploiement

Le site se déploie automatiquement via GitHub Actions à chaque push sur `main`.

**Activer GitHub Pages :**
1. Aller dans Settings → Pages
2. Source : **GitHub Actions**
3. Le workflow `.github/workflows/deploy.yml` gère le reste

## 📝 Ajouter du contenu

### Nouvel article (blog)
Créer un fichier dans `_posts/` nommé `YYYY-MM-DD-titre.md` :

```yaml
---
title: "Titre de l'article"
date: 2026-03-01
category: article
author: Nom
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

## 🔑 Espace membres

- **Mot de passe par défaut** : `nature2026`
- Pour changer le mot de passe : modifier `assets/js/auth.js`
- La session est conservée 7 jours dans le navigateur

## 🎨 Charte graphique

| Couleur | Hex | Usage |
|---|---|---|
| Vert forêt | `#1B4332` | Couleur principale |
| Or discret | `#C9A84C` | Accents, CTA |
| Vert sauge | `#588157` | Secondaire |
| Fond clair | `#FAFAF5` | Arrière-plan |

**Typographies** : Playfair Display (titres) + Inter (corps)

## 🛠 Développement local

```bash
bundle install
bundle exec jekyll serve
```

Le site est accessible sur `http://localhost:4000/reseau-finance-nature/`
