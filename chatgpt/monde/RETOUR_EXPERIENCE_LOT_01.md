# Retour d'expérience — premier lot d'illustrations (10 images, octobre 2026)

> **Aventures partagées / Battlecry.** Ce fichier consigne ce qui a été **testé** lors du premier lot, les corrections visuelles à apporter et le processus à reproduire. Il ne modifie **pas** le canon de Battlecry ni la géographie de Vaélore.

## 1. Résultat réel et statut

- **10 images générées et envoyées** dans `assets/roleplay/` : vues de Silverdawn, auberge (extérieur/intérieur), rue, accès terrestre, pont surveillé, sentinelles, carte murale et gros plan, portrait de Nara.
- **9 images publiées dans le manifeste en `ready`** ; **1 portrait non validé** : `drafts/portrait-nara-v1.webp`, qui **ne doit pas être utilisé** pour représenter Nara.
- **89 sujets au manifeste**, dont 9 `ready` et 80 `planned` après ce premier lot. Ce nombre évoluera avec les nouveaux lots.
- Le premier **transfert d'octets d'image vers GitHub** puis **le déploiement GitHub Pages** ont réussi. Il ne faut plus prétendre que cette étape est seulement hypothétique.
- La réussite technique de publication **n'est pas une validation artistique définitive** : le créateur peut demander de corriger ou remplacer une image `ready`. Le statut `ready` décrit l'existence d'un fichier exploitable, **pas** une approbation irrévocable de son design.

## 2. Méthode validée de publication dans le dépôt

1. **Générer** le sujet à partir de la direction artistique, de l'époque et des références maîtresses des personnages et des lieux.
2. **Inspecter le rendu** : exactitude des personnages, continuité des décors, absence de spoilers et d'actions non choisies par le joueur.
3. **Optimiser en WebP** en conservant les proportions et une qualité visuelle suffisante (premier essai à une largeur maximale d'environ **1360 pixels** et qualité WebP d'environ **74** ; paramètres ajustables après contrôle du rendu).
4. **Créer le blob Git binaire** avec `create_blob`, `encoding: "base64"`, en transmettant les **vrais octets de l'image** encodés, jamais le chemin local comme s'il était le contenu.
5. **Intégrer les SHA des blobs** dans un `create_tree` fondé sur le `main` actuel, puis `create_commit` et `update_ref` avec le SHA précédent attendu. **Vérifier que le commit a bien abouti**.
6. **Contrôler l'arborescence GitHub** : le fichier WebP existe à l'emplacement prévu, sa taille est plausible et son SHA correspond au blob transféré.
7. **Mettre à jour `data/illustrations.json`** en respectant les ID existants : `status: "ready"`, `file: "assets/roleplay/<id>.webp"`, métadonnées de lieu, période et limites d'emploi. Une variante doit avoir un ID distinct et, si nécessaire, `variant_of`.
8. **Vérifier GitHub Actions / Pages et les URL publiques**. Le succès d'un workflow de déploiement ne garantit pas, à lui seul, qu'un rendu particulier est correct : tester l'affichage dans la galerie et, idéalement, en aventure.
9. **Les brouillons** restent exclus de la galerie (pas de `ready`) jusqu'à correction. Important : `assets/roleplay/drafts/` est **aussi public** ! N'y mettre aucun secret MJ, donnée privée ou contenu inadapté à la publication.

En cas d'échec d'une étape, **ne pas annoncer les images comme publiées**. La galerie ne doit utiliser que des images réellement `ready`, présentes et compatibles avec la situation.

## 3. Leçons de direction artistique

### Portrait de Nara : refaire avant d'utiliser
Le premier rendu montre une aubergiste **beaucoup trop jeune** par rapport à la bible, avec plusieurs signes distinctifs incorrects. Sa fiche [BIBLE_VISUELLE_PNJ.md](BIBLE_VISUELLE_PNJ.md) prévaut : **47–57 ans d'apparence**, silhouette robuste, yeux gris clair, cheveux auburn foncé grisonnants sous foulard indigo noué derrière, **chemise prune**, **tablier beige**, **trois clés de fer**. Garder un visage identifiable et les accessoires visibles sur le portrait de référence.

**Règle générale :** le générateur a tendance à embellir/rajeunir les personnages et à remplacer les accessoires utiles par des ornements. Pour les **17 PNJ**, intégrer les invariants exacts au brief et **vérifier chacun** avant de valider le portrait maître. Une fois validé, s'en servir comme référence dans toutes les autres scènes.

### Cohérence spatiale : produire des maîtres, puis des variantes
Le port, la rue, l'extérieur et l'intérieur de l'auberge sont cohérents en ambiance et matériaux, **mais cette ressemblance n'est pas une garantie de plan architectural identique**. Fixer une **vue maîtresse** du lieu et s'y référer avant toute nouvelle variante ; prendre garde à la position des fenêtres, portes, comptoirs, escaliers, enseignes et pontons. Une variante n'ajoute pas d'entrée, de pont ou de bâtiment canonique.

Les vues produites de Silverdawn montrent une colonie **déjà avancée** : grues, palissades, tours, maisons nombreuses. **Ne jamais les utiliser pour le premier débarquement**. Pour le Temps des Amarres, générer ultérieurement une vue fidèle aux pontons et installations encore provisoires. Le **pont surveillé** et la **porte terrestre** sont des possibilités de décor **non canonisées**.

### Cartes : décor ≠ renseignement
La carte murale et son gros plan sont des objets **décoratifs**, pas la carte géographique de Vaélore. Leur représentation comporte des côtes, tourbillons et créatures stylisés **non fiables**. Ne jamais déduire de ces éléments les lieux, itinéraires, mystères ou secrets du monde.

Pour le **gros plan d'une carte réellement examinée**, le meilleur résultat géographique est souvent **un recadrage du même fichier maître**, et non une nouvelle génération qui modifierait les côtes. Si une carte exacte est nécessaire : utiliser une **source cartographique vérifiée** et des libellés fiables séparés de l'illustration.

### Style
Le premier lot tend vers une **illustration très détaillée à rendu cinématographique/3D réaliste**. Avant de multiplier les lots, vérifier que cette finition correspond bien à la direction « **fantasy illustrée semi-réaliste** » voulue. Si une nouvelle identité visuelle est choisie, produire les lots suivants de manière homogène ; ne pas considérer ce premier essai comme un style canonique automatiquement validé.

### Gardes et costumes
Les sentinelles ordinaires sont **figurants réutilisables**, pas des héros à identité officielle. Leur équipement, leurs couleurs et les bannières des décors **ne définissent pas d'uniformes, blasons ou hiérarchies canoniques** tant que les sources du jeu ne les confirment pas.

## 4. Contrôle qualité minimal pour chaque nouveau lot

- [ ] **Lore** : peuple et lieu corrects ; aucune information secrète ou géographie inventée présentée comme officielle.
- [ ] **Époque** : nombre et état des bâtiments, défenses, bateaux, objets compatibles avec le moment narratif.
- [ ] **Personnages** : âge apparent, cheveux, yeux, vêtements et accessoires en accord avec leur fiche ; distinction héros/PNJ.
- [ ] **Continuité** : références maîtresses réemployées, surtout pour les gros plans et variations jour/nuit.
- [ ] **Autonomie** : aucune image n'impose parole, sentiment ou décision au joueur.
- [ ] **Technique** : vrai fichier optimisé ; SHA et chemin vérifiés ; manifeste mis à jour ; déploiement réussi ; URL affichable.
- [ ] **Validation** : noter les réserves, et prévoir une correction si le portrait ou le décor ne respecte pas les spécifications.

**Maintenir l'objectif initial** : beaucoup d'images pré-générées **avant** les parties, aucune génération automatique pendant une aventure ; seules les demandes explicites des joueurs justifient une création en cours de session.

## 5. Prochaines améliorations techniques

- Prévoir une distinction explicite entre **publié techniquement** et **approuvé artistiquement** dans les outils de suivi des lots, **sans casser les statuts `planned`/`ready` existants**.
- Conserver un mini-journal de production par lot (ID, nom de fichier, époque, références employées, validation, remarques) ; éviter de conserver de volumineux originaux dans le dépôt public si des WebP optimisés suffisent.
- Mettre en place un **test de chargement public d'image et de galerie** pour compléter le seul résultat GitHub Actions.
- Prioriser le remplacement du portrait de Nara, puis fixer les **plans maîtres des lieux et leurs variantes** avant de produire de nombreuses scènes d'interaction.

### Références

- [Stratégie de préproduction](STRATEGIE_PREPRODUCTION_IMAGES.md)
- [Plan des illustrations](PLAN_ILLUSTRATIONS.md)
- [Bible visuelle des PNJ](BIBLE_VISUELLE_PNJ.md)
- [Notes des fichiers réellement publiés](../../assets/roleplay/README.md)
- [Catalogue machine-lisible](../../data/illustrations.json)


## Mise à jour du format cible (19 octobre 2026)

La décision de production **pour les prochains lots** est désormais **JPEG par défaut**, avec scènes à 1280 × 720, portraits à 800 × 1000 et qualité ~80–85 %. Les WebP déjà publiés restent tels quels. Le test d'un JPEG en pièce jointe ChatGPT a montré une apparition différée de l'image : ne pas conclure que le WebP est défectueux ni que les images GitHub s'affichent directement. Détails : [stratégie de préproduction](STRATEGIE_PREPRODUCTION_IMAGES.md).
