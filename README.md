# Kalliste Vending — site de test (nouvelle identité)

Proposition de refonte complète du site kallistevending.com, créée de zéro.
Site statique (HTML, CSS, JavaScript, sans framework ni dépendance), prêt pour GitHub Pages.

## Le concept : « La plus belle pause de l'île »

*Kalliste* veut dire « la plus belle » : c'est l'accroche du site. Le design oppose deux univers :

| Univers | Couleurs | Utilisation |
|---|---|---|
| **Café** | espresso `#16110e`, cuivre `#c27a46`, crème `#f7f2ec` | distribution automatique, café de bureau |
| **Eau** | turquoise `#1a8798`, bleu profond `#0e5662`, écume `#dff0f1` | fontaines à eau |

La couleur taupe historique de la marque (`#a29f99`) est conservée par touches.
Typographies : **Fraunces** (titres, serif à empattements) et **Inter** (textes). Elles sont
hébergées dans le site : aucun appel à Google, aucun cookie.

## Pages

```
index.html                    Accueil : hero double café/eau, solutions, histoire, chiffres,
                              méthode en 4 étapes, bandeau écologie, partenaires, devis
distribution-automatique/     Distributeurs, café de bureau Lavazza, service technique, « pour qui »
fontaines-a-eau/              Fontaines Mistral, écologie, filtration, comparatif bonbonne / réseau
mentions-legales/             Modèle de mentions légales + RGPD (à compléter)
404.html                      Page « introuvable » affichée par GitHub Pages pour une adresse inconnue
.nojekyll, robots.txt         Fichiers techniques pour GitHub Pages et les moteurs de recherche
assets/css/style.css          Tout le design (variables de couleurs en haut du fichier)
assets/js/main.js             Menu mobile, en-tête, animations, compteurs, parallaxe, formulaire
assets/img/                   Photos (voir « Crédits photos » plus bas)
assets/fonts/                 Polices Fraunces et Inter
```

## Détails

- **Hero en deux arches** : le café et l'eau, chacun cliquable vers sa page.
- **Bandeau défilant** des services, qui s'arrête au survol de la souris.
- **Apparitions au défilement**, compteurs animés et légère parallaxe sur les grandes photos.
  Tout est désactivé si le visiteur a demandé à réduire les animations dans son système.
- **Formulaire de devis** avec boutons « je suis intéressé par » (distribution / café / fontaine).
- **Mobile** : menu plein écran qui s'ouvre en cercle, et bouton d'appel flottant en bas à droite.
- **Accessibilité** : textes alternatifs, navigation au clavier, contrastes, rôle des zones.

## À valider avant une mise en ligne

Les textes reprennent le site actuel. J'ai ajouté quelques formulations qu'il faut confirmer :

1. **La méthode en 4 étapes** (« On échange / On vous conseille / On installe / On entretient »)
   et la mention « livraison, installation et mise en service » : à adapter à votre fonctionnement réel.
2. **Le bloc « Pour qui ? »** (entreprises, petites équipes, lieux recevant du public).
3. **Le comparatif bonbonne / réseau** : il découle de votre texte « Écologie ».
4. **« LAVAZZA »** est écrit en texte : si vous avez le droit d'utiliser leur logo officiel, remplacez-le.
   Même chose pour le **logo Nescafé** : vérifiez que votre accord avec la marque autorise son affichage.
5. **Les mentions légales** : remplies d'après le Kbis du 25/02/2025, avec l'e-mail public
   contact@kallistevending.fr (aussi affiché dans le bloc Contact de l'accueil et dans les pieds de page).

## Crédits photos

Les photos nouvelles viennent d'**Unsplash** (unsplash.com). Leur licence permet un usage
commercial gratuit, sans autorisation à demander ; citer l'auteur n'est pas obligatoire mais apprécié.

| Fichier | Sujet | Auteur (Unsplash) |
|---|---|---|
| `verre-eau.jpg` | Eau versée dans un verre (accueil) | KOBU Agency |
| `distributeur-snacks.jpg` | Distributeur automatique | Stéphan Valentin |
| `sanguinaires.jpg` | Îles Sanguinaires, Ajaccio | Tobias Hort-Giess |
| `baie-corse.jpg` | Baie turquoise en Corse | Daniel R. |
| `distributeur-bureau.jpg` | Distributeur dans des bureaux | Petr |
| `robinet.jpg` | Eau du robinet dans un verre | Jacek Dylag |

Les photos `distributeur.jpg` (arche café de l'accueil et haut de la page Distribution), `technicien.jpg`,
`fontaine.jpg`, `goutte.jpg` et le logo Mistral viennent du site actuel.
Le logo Kalliste Vending (`logo.png` dans l'en-tête et le pied de page, `favicon.png` pour l'onglet du navigateur),
la photo `cafe-bureau.jpg` (machine Dr.coffee, carte « Café de bureau » et page Distribution) et le logo
`nescafe.png` ont été fournis par Kalliste Vending. Le fond gris de la photo a été prolongé à gauche et à droite
pour l'adapter au cadre paysage, sans toucher à la machine.
Si vous avez vos propres photos (vos machines, votre équipe, vos camions), remplacez simplement
le fichier en gardant le même nom : ce sera encore plus parlant que des photos de banque d'images.

## Configurer le formulaire

Le formulaire de devis envoie les demandes via Formspree (https://formspree.io), au formulaire
`https://formspree.io/f/xoeeogkz` (constante `FORM_ENDPOINT`, ligne 4 de `assets/js/main.js`).
Les e-mails arrivent avec l'objet « Demande de devis – site Kalliste Vending ». Un champ caché
(`_gotcha`) bloque une partie des robots de spam. Pour changer de formulaire, remplacez simplement l'adresse.

## Mettre en ligne pour tester

1. Créez un dépôt GitHub **public**, par exemple `kallistevending-test`, et envoyez-y **le contenu** de ce dossier
   (les fichiers `index.html`, `404.html`, `.nojekyll`… doivent être à la racine du dépôt, pas dans un sous-dossier).
   Le fichier `.nojekyll` commence par un point : sous Windows il peut être masqué, vérifiez qu'il est bien envoyé.
2. *Settings → Pages → Deploy from a branch → main / (root)*.
3. Le site est visible sur `https://VOTRE_COMPTE.github.io/kallistevending-test/` après une ou deux minutes.
   Les liens sont relatifs : tout fonctionne dans un sous-dossier, sans configuration.

## Passer sur www.kallistevending.com (à la place de Jimdo)

À faire **avant** de brancher le domaine :

- formulaire : fait (voir plus haut) ;
- mentions légales : faites.

Le domaine est en cours de transfert de Jimdo vers OVH (commande du 9 novembre 2026, serveurs DNS OVH).
Dans la zone DNS OVH, ne modifiez que les lignes A et `www` : gardez les lignes MX si une adresse e-mail OVH est utilisée.

Ensuite :

1. Ajoutez à la racine du dépôt un fichier `CNAME` contenant uniquement `www.kallistevending.com`
   (ou indiquez ce domaine dans *Settings → Pages → Custom domain*, qui crée le fichier).
2. Chez le gestionnaire du domaine, remplacez les enregistrements DNS de Jimdo par :

   | Type  | Nom | Valeur                    |
   |-------|-----|---------------------------|
   | CNAME | www | `VOTRE_COMPTE.github.io.` |
   | A     | @   | `185.199.108.153`         |
   | A     | @   | `185.199.109.153`         |
   | A     | @   | `185.199.110.153`         |
   | A     | @   | `185.199.111.153`         |

3. Dans *Settings → Pages*, cochez **Enforce HTTPS** dès que le certificat est prêt (quelques minutes à 24 h).

Si le domaine a été acheté **chez Jimdo**, transférez-le d'abord chez un registrar (OVH, Gandi, IONOS…)
avant de résilier l'abonnement Jimdo, sinon vous risquez de perdre le domaine.

## Personnaliser

Les couleurs, arrondis et polices sont regroupés en haut de `assets/css/style.css`
(bloc `:root`). Par exemple, changer `--copper` modifie d'un coup tous les boutons et accents café.
