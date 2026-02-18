# Réseau Finance Nature

> Fédérer les acteurs financiers territoriaux pour sensibiliser aux enjeux de la nature, mobiliser les financements privés et coopérer en faveur de projets à impact positif.

[![Site en ligne](https://img.shields.io/badge/Site-reseaufinancenature.org-122A1A?style=for-the-badge&logo=github)](https://reseaufinancenature.org/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Réseau%20Finance%20Nature-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/company/r%C3%A9seau-finance-nature/)

---

## À propos

Le **Réseau Finance Nature** est une association loi 1901, créée en 2026, qui rassemble les acteurs financiers territoriaux (banques, sociétés de gestion, family offices, réseaux de Business Angels…) autour de quatre objectifs :

1. **Sensibiliser & former** aux enjeux de la nature comme facteur clé pour les entreprises et les territoires
2. **Mobiliser les financements** privés en faveur de projets à impact positif pour la nature
3. **Coopérer & connecter** les acteurs de l'écosystème territorial
4. **Valoriser les actions** des membres et les initiatives positives

## Fonctionnalités du site

| Fonctionnalité | Description |
|---|---|
| **Page d'accueil** | Présentation complète : objectifs, contexte, chiffres clés, missions, adhésion, gouvernance |
| **Formulaire de contact** | Envoi direct à pauline@reseaufinancenature.org via [FormSubmit](https://formsubmit.co/) |
| **Espace membres** | Zone protégée par mot de passe avec ressources exclusives (articles, vidéos, documents) |
| **Responsive** | Design adapté mobile, tablette et desktop (7 breakpoints) |
| **Accessibilité WCAG AA** | Contrastes vérifiés, navigation clavier, ARIA, skip-link, focus-visible |
| **SEO complet** | Meta tags, Open Graph, sitemap, Jekyll SEO Tag |
| **Déploiement auto** | Chaque push sur `main` déclenche un build Jekyll → GitHub Pages |

## Stack technique

- **Générateur** : [Jekyll](https://jekyllrb.com/) (site statique)
- **Hébergement** : GitHub Pages (gratuit, HTTPS)
- **CI/CD** : GitHub Actions (déploiement automatique)
- **Formulaire** : FormSubmit.co (sans backend)
- **Icônes** : Font Awesome 6.5 (subset 39 icônes — 2.6 Ko)
- **Typographies** : Playfair Display + Inter (Google Fonts)
- **0 framework JS** — JavaScript vanilla (~7 Ko total)

## Performance

| Métrique | Valeur |
|---|---|
| Poids total du site | < 600 Ko |
| CSS | 38.7 Ko (design system avec variables CSS) |
| JavaScript | 6.8 Ko (vanilla, zéro dépendance) |
| Font Awesome | 2.6 Ko subset (vs 100 Ko CDN complet) |
| Images | Optimisées retina, compressées |
| Preload | CSS + fonts critiques |

## Charte graphique

| Couleur | Hex | Usage |
|---|---|---|
| Vert profond | `#122A1A` | Couleur principale, textes, header, footer |
| Vert menthe | `#BFFFB5` | Accents visuels, boutons CTA |
| Vert soutenu | `#357248` | Labels, liens, citations |
| Fond clair | `#F7FAF7` | Arrière-plan principal |

**Typographies** : Playfair Display (titres) · Inter (corps)

## Gouvernance

| Rôle | Nom | LinkedIn |
|---|---|---|
| Présidente | Pauline Maillard | [Profil](https://www.linkedin.com/in/pauline-maillard-090936138/) |
| Vice-Président | Pierre Béal | [Profil](https://www.linkedin.com/in/pierre-beal-02600416/) |
| Vice-Président | Roland Cathebras | [Profil](https://www.linkedin.com/in/roland-cathebras-3b5691100/) |

## Structure du projet

```
├── _config.yml              # Configuration Jekyll
├── _layouts/                # Templates (default, post, ressource)
├── _includes/               # Composants (header, footer)
├── _posts/                  # Articles de blog (Markdown)
├── _ressources/             # Ressources espace membres (Markdown)
├── assets/
│   ├── css/
│   │   ├── style.css        # Design system (~2000 lignes)
│   │   └── fontawesome-subset.css  # 39 icônes (2.6 Ko)
│   ├── images/              # Logo, photos équipe, OG image
│   └── js/
│       ├── main.js          # Navigation, animations, filtres
│       └── auth.js          # Authentification espace membres
├── pages/                   # Contact, espace membres, merci
├── index.html               # Page d'accueil
├── favicon.ico              # Favicon généré depuis le logo
└── .github/workflows/       # CI/CD GitHub Actions
```

## Développement local

```bash
bundle install
bundle exec jekyll serve --baseurl "" --host 0.0.0.0
```

Le site est accessible sur `http://localhost:4000/`

## Ajouter du contenu

### Nouvel article

Créer un fichier `_posts/YYYY-MM-DD-titre.md` :

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

### Nouvelle ressource membres

Créer un fichier dans `_ressources/` :

```yaml
---
title: "Titre de la ressource"
date: 2026-03-01
type: article  # ou "video" ou "document"
description: "Description courte"
youtube_id: "ID_VIDEO"  # pour les vidéos uniquement
---

Contenu en Markdown...
```

Après `git push`, le contenu apparaît automatiquement sur le site.

---

**Contact** : pauline@reseaufinancenature.org
