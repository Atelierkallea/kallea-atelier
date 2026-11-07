# Kalléa Atelier — site vitrine

Site vitrine de Kalléa Atelier, « L’art de révéler le regard » (Puget-sur-Argens).
Réalisé avec Next.js, React, TypeScript et Tailwind CSS, à partir des maquettes Canva (conservées dans `design/maquettes`).

**Site en ligne :** https://kallea-atelier-site.vercel.app (publié automatiquement par Vercel à chaque modification sur GitHub).

**Pages :** Accueil · Me connaître · Mes services · À savoir · Me contacter
(+ page « Mentions légales » prête à compléter, et une page d’erreur 404).

---

## 1. Lancer le site sur votre ordinateur

1. Installer **Node.js** (version 20 ou plus) depuis [nodejs.org](https://nodejs.org).
2. Ouvrir un terminal dans le dossier du projet.
3. La première fois seulement, installer les dépendances :

   ```bash
   npm install
   ```

4. Lancer le site :

   ```bash
   npm run dev
   ```

5. Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur. Chaque modification enregistrée s’affiche aussitôt.

---

## 2. Modifier les contenus

Tous les textes sont rassemblés dans le dossier `src/content`. Il suffit de modifier le texte entre guillemets, sans toucher au reste (virgules, accolades).

| Je veux modifier…                                        | Fichier                     |
| -------------------------------------------------------- | --------------------------- |
| Le texte de présentation (« Me connaître »)              | `src/content/about.ts`      |
| Les prestations, descriptions, durées et **tarifs**      | `src/content/services.ts`   |
| Les résumés des prestations sur l’accueil                | `src/content/services.ts` (champ `summary`) |
| Les conseils « À savoir »                                | `src/content/a-savoir.ts`   |
| Téléphone, email, Instagram, lieu, nom de domaine        | `src/content/site.ts`       |
| Les photos et leurs descriptions                         | `src/content/images.ts`     |
| Les mentions légales                                     | `src/content/legal.ts`      |
| Les couleurs du site                                     | `src/app/globals.css` (bloc `@theme`) |

Astuces :

- Utiliser l’apostrophe typographique `’` (comme dans « l’esthétique »).
- Un tarif s’écrit en chiffres sans le signe € : `price: 120` (le « € » est ajouté automatiquement).
- Une durée s’écrit en minutes : `duration: 60`.

### Ajouter une prestation

Dans `src/content/services.ts`, copier un bloc existant et l’adapter :

```ts
{
  name: "Nouvelle prestation",
  description: "Une phrase qui décrit la prestation.",
  duration: 45,
  price: 90,
},
```

Pour une nouvelle catégorie, copier un bloc `{ title, summary, services }`. Les fonds clairs et sombres s’alternent tout seuls, et l’accueil se met à jour automatiquement.

### Remplacer une photo

1. Déposer la nouvelle photo dans `public/images` (format JPG, 2000 px de large environ).
2. Dans `src/content/images.ts`, indiquer son nom (`src`), ses dimensions (`width`, `height`) et une courte description (`alt`).

Les photos sont automatiquement compressées et adaptées à chaque écran.

---

## 3. Avant la mise en ligne

- [ ] **Portraits** : les deux photos de la page « Me connaître » sont provisoires (extraites de la maquette). Remplacer `public/images/portrait-elisa.jpg` et `public/images/me-connaitre-bandeau.jpg` par les originaux.
- [ ] **Tarifs** : vérifier les prix dans `src/content/services.ts`.
- [ ] **Mentions légales** : compléter `src/content/legal.ts` (nom, SIRET, adresse), puis passer `ready` à `true`. Un lien « Mentions légales » apparaîtra alors en bas de chaque page.
- [ ] **Nom de domaine** : rien à changer dans le code, l’adresse du site est détectée automatiquement par Vercel (voir étape 5).

---

## 4. Publier le site sur Vercel (gratuit)

1. Créer un compte gratuit sur [github.com](https://github.com), puis un **dépôt privé** nommé `kallea-atelier`.
2. Envoyer le projet dans ce dépôt. Le plus simple : installer [GitHub Desktop](https://desktop.github.com), choisir _File → Add local repository_, sélectionner le dossier du projet, puis _Publish repository_.
3. Créer un compte sur [vercel.com](https://vercel.com) en choisissant « Continue with GitHub ».
4. Sur Vercel : _Add New… → Project_, choisir le dépôt `kallea-atelier`, puis _Deploy_. Aucun réglage n’est nécessaire.
5. Après une minute environ, le site est en ligne à une adresse provisoire du type `kallea-atelier-site.vercel.app`.

## 5. Connecter votre nom de domaine

1. Acheter le nom de domaine chez un registraire (OVH, Gandi, IONOS…), par exemple `kallea-atelier.fr`.
2. Sur Vercel : ouvrir le projet → _Settings_ → _Domains_ → saisir le domaine → _Add_.
3. Vercel affiche les enregistrements DNS à créer (en général un enregistrement **A** et un **CNAME**). Les recopier dans l’espace client du registraire, rubrique « Zone DNS ».
4. Patienter (de quelques minutes à quelques heures). Le cadenas HTTPS est ajouté automatiquement.
5. Rien à modifier dans le code : le site utilise automatiquement le nouveau domaine dès la publication suivante. Pour l’appliquer tout de suite : _Deployments_ → menu « … » de la dernière publication → _Redeploy_.

## 6. Mettre à jour le site

Chaque modification envoyée sur GitHub est publiée automatiquement par Vercel en une à deux minutes :

- **Avec GitHub Desktop** : modifier le fichier, puis _Commit to main_ et _Push origin_.
- **Directement sur github.com** (pratique pour un tarif ou une phrase) : ouvrir le fichier, cliquer sur le crayon ✏️, modifier, puis _Commit changes_.

---

## 7. Prise de rendez-vous Calendly (plus tard)

Tout est prêt. Le jour venu, dans `src/content/site.ts` :

```ts
export const booking = {
  enabled: true,
  url: "https://calendly.com/votre-lien",
  label: "Prendre rendez-vous",
};
```

Un bouton « Prendre rendez-vous » apparaîtra automatiquement dans les blocs d’invitation au contact (accueil et page des services). Le composant `BookingButton` peut aussi être placé ailleurs.

---

## 8. Organisation du projet

```
design/              maquettes Canva et logos d’origine (référence)
public/images/       photos du site
public/logo/         logos au format vectoriel (SVG)
src/app/             les pages (une par dossier) et la mise en page commune
src/components/      les éléments réutilisables (menu, bandeaux, listes, tarifs…)
src/content/         TOUS les textes et réglages modifiables
```

**Responsive :** mobile d’abord, puis tablette (dès 768 px) et ordinateur (dès 1024 px, mesures des maquettes Canva, en % de la largeur jusqu’à 1920 px).

## Commandes utiles

| Commande        | Rôle                                         |
| --------------- | -------------------------------------------- |
| `npm run dev`   | lancer le site en local                      |
| `npm run build` | vérifier que le site se construit sans erreur |
| `npm run lint`  | vérifier la qualité du code                  |

## Crédits

Polices Montserrat et Playfair Display (Google Fonts, licence OFL) · icône cœur : Lucide (licence ISC).
