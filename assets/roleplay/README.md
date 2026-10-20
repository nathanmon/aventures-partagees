# Illustrations narratives publiques

Premier lot de 10 images générées pour **Aventures partagées**, optimisées en WebP et conservées dans ce dossier.

Les fichiers image ont été vérifiés au transfert par leur **empreinte de blob Git**, identique entre les fichiers locaux et GitHub. Le premier déploiement GitHub Pages du lot a abouti. La galerie se nourrit exclusivement des chemins `file` des entrées `ready` de `data/illustrations.json`.

- **9 scènes et décors** activés dans la galerie à la suite du déploiement GitHub Pages : port, accès terrestre, rue, extérieur et intérieur du Comptoir des Voiles, carte murale, carte rapprochée, pont surveillé et gardes.
- **1 portrait de travail non validé** : `drafts/portrait-nara-v1.webp` ; l'âge apparent et certains accessoires sont en contradiction avec la [bible de Nara](../../chatgpt/monde/BIBLE_VISUELLE_PNJ.md). **Ne pas l'utiliser comme portrait canonisé du PNJ** ; sa fiche du manifeste reste `planned`.
- **Cartes de taverne** : uniquement **objets fictifs décoratifs**. Leurs côtes, courants, monstres dessinés et routes ne constituent **ni une carte canonique de Vaélore ni des indices fiables**. Ne jamais utiliser ces dessins comme source de navigation ou de spoilers.
- **Décors de Silverdawn** : montrent une colonie déjà en partie structurée ; ne pas les afficher comme l'état de la ville au tout premier débarquement. Le pont et la porte surveillée sont **des exemples de passages**, pas de nouveaux points géographiques officiels.

**Production :** PNG générés puis optimisation WebP en 1360 px de largeur maximum (portrait Nara à sa taille d'origine), qualité 74 ; originaux conservés dans les fichiers de la conversation, pas dans le repo du jeu vidéo.

**Publication :** `planned` signifie image non utilisable dans la galerie ; `ready` exige un fichier réel et un déploiement public vérifié. Une image particulière de session ou confidentielle ne doit pas être publiée ici sans vérification des spoilers et accord de publication.


## Reproduire le premier transfert de fichiers réels

La [fiche de retour d'expérience](../../chatgpt/monde/RETOUR_EXPERIENCE_LOT_01.md) détaille le chemin **image générée → WebP → blob Git base64 → arbre/commit → vérification SHA → entrée `ready` → publication Pages** et les contrôles artistiques. L'envoi binaire a fonctionné avec le connecteur GitHub. `ready` confirme la disponibilité du fichier, mais ne constitue pas une approbation artistique définitive du créateur.


## Format des prochains lots — décision définitive du créateur

**WebP (.webp) systématique** pour toutes les nouvelles illustrations : scènes 1280 × 720, portraits 800 × 1000, qualité WebP indicative 75–85 % après vérification. Les images générées en JPEG/PNG sont converties en WebP avant publication. Les neuf WebP initiaux et les dix portraits JPEG déjà publiés restent inchangés ; les nouvelles entrées du manifeste doivent pointer vers un fichier `.webp` et `format: "webp"`, dimensions exactes. L'affichage tardif d'une pièce jointe JPEG dans ChatGPT ne prouve pas que les WebP soient incompatibles ni que l'intégration d'URL GitHub soit résolue.


## Deuxième lot — portraits des héros (octobre 2026)

**10 JPEG (800 × 1000)** publiés dans `portraits/` : Aldria, Caelan, Valerian, Elira, Thalira, Faelar, Maelis, Aerendir, Thorgar et Durgan. Les vrais fichiers ont été transférés comme blobs binaires Git et vérifiés par leurs empreintes.

Leur statut `ready` signifie qu'ils existent dans la galerie ; leur approbation artistique est **provisoire** (`visual_approval: "provisional"`), à comparer aux références officielles spécialisées et à faire confirmer par le créateur. Leurs arrière-plans de **cités très développées** sont des décors illustratifs **non canoniques** : ne pas en déduire l'état des ports à l'arrivée des peuples. Ces portraits ne remplacent pas les références maîtresses du jeu vidéo.


## Lot de dix scènes en WebP — octobre 2026

Dix fichiers binaires réels (1280 × 720) ont été publiés dans `assets/roleplay/scenes/`, empreintes Git vérifiées. **Quatre images d'ambiance** sont disponibles en galerie (`ready`) : arrivée de Caelan aux quais, chantier de Silverdawn, poste de garde et panneau d'annonces. **Six images conditionnelles** restent `planned` et sont conservées sous `draft_file` : entrée de crypte, éclaireurs orcs, dragon, kraken, alerte au port et gardien des ruines. Leur présence dans les fichiers publics du dépôt ne constitue pas une autorisation de les montrer avant découverte. Aucun de ces rendus ne valide l'existence de bâtiments, lieux ou événements précis. Ce sont des illustrations, pas de nouveaux faits de l'univers.

Tous les **nouveaux lots** restent au format **WebP** ; les dix JPEG historiques du lot des portraits ne changent pas.
