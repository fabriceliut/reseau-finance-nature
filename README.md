# Réseau Finance Nature — Site vitrine v1.1

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
Filtrage par type de ressource avec boutons accessibles (`aria-pressed`).

## ♿ Accessibilité (WCAG AA)

Le site a été audité et corrigé pour répondre aux exigences WCAG 2.1 AA :

| Critère | Implémentation |
|---|---|
| **Contrastes** | Toutes les combinaisons texte/fond ≥ 4.5:1 (texte normal) ou 3.0:1 (texte large/UI) |
| **Skip link** | Lien "Aller au contenu principal" visible au focus clavier |
| **Focus visible** | Outline 2px sur tous les éléments interactifs (`focus-visible`) |
| **Icônes décoratives** | `aria-hidden="true"` sur toutes les icônes Font Awesome (50+) |
| **Sections** | `aria-labelledby` ou `aria-label` sur chaque `<section>` |
| **Navigation** | `<nav>` avec `aria-label` (principale + footer) |
| **Menu mobile** | `aria-expanded` + `aria-controls` synchronisés par JS |
| **Filtres** | `role="group"` + `aria-label` + `aria-pressed` sur chaque bouton |
| **Erreurs** | `role="alert"` + `aria-live="assertive"` sur messages d'erreur |
| **Titres** | Hiérarchie h1→h2→h3→h4 sans saut de niveau |
| **Formulaire** | `aria-label` sur `<form>`, `<label>` sur chaque champ, honeypot masqué AT |
| **SVG décoratif** | `aria-hidden="true"` + `focusable="false"` |

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

| Couleur | Hex | Usage | Contraste sur fond clair |
|---|---|---|---|
| Vert profond | `#122A1A` | Couleur principale, texte, header/hero/footer | 14.56:1 ✅ |
| Vert menthe | `#BFFFB5` | Accents visuels, boutons CTA (texte foncé dessus) | — |
| Vert soutenu | `#357248` | Labels, overlines, citations, liens (texte sur clair) | 5.47:1 ✅ |
| Vert moyen | `#469868` | Puces, accents légers | 3.53:1 ✅ |
| Texte principal | `#1E2D24` | Corps de texte | 13.72:1 ✅ |
| Texte secondaire | `#4A6355` | Sous-titres, descriptions | 6.23:1 ✅ |
| Texte atténué | `#567064` | Métadonnées, dates | 5.12:1 ✅ |
| Fond clair | `#F7FAF7` | Arrière-plan principal | — |

**Typographies** : Playfair Display (titres) + Inter (corps)

**Logo** : SVG dans `assets/images/` — variante sombre (`logo.svg`) et claire (`logo-light.svg`)

## 📁 Structure du projet

```
├── _config.yml           # Configuration Jekyll
├── _layouts/             # Templates HTML (default, post, ressource)
├── _includes/            # Composants (header, footer)
├── _posts/               # Articles de blog (Markdown)
├── _ressources/          # Ressources membres (Markdown)
├── assets/
│   ├── css/style.css     # Design system complet (~2000 lignes)
│   ├── images/           # Logo SVG (dark + light)
│   └── js/
│       ├── main.js       # Navigation, animations, filtres, a11y
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
