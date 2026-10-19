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


## Format des prochains lots (décision du 19 octobre 2026)

**JPEG (.jpg) par défaut** pour les illustrations sans transparence : scènes 1280 × 720, portraits 800 × 1000, qualité 80–85 % approximative. WebP/PNG possibles si transparence ou besoin spécifique. Les **neuf fichiers WebP existants** demeurent inchangés et doivent continuer à fonctionner dans la galerie. Les entrées nouvelles du manifeste doivent indiquer le vrai chemin `.jpg` et `format: "jpeg"` (ou la convention effective du code), dimensions exactes. L'affichage tardif d'une pièce jointe JPEG dans ChatGPT ne prouve pas que les WebP soient incompatibles ni que l'intégration d'URL GitHub soit résolue.


## Deuxième lot — portraits des héros (octobre 2026)

**10 JPEG (800 × 1000)** publiés dans `portraits/` : Aldria, Caelan, Valerian, Elira, Thalira, Faelar, Maelis, Aerendir, Thorgar et Durgan. Les vrais fichiers ont été transférés comme blobs binaires Git et vérifiés par leurs empreintes.

Leur statut `ready` signifie qu'ils existent dans la galerie ; leur approbation artistique est **provisoire** (`visual_approval: "provisional"`), à comparer aux références officielles spécialisées et à faire confirmer par le créateur. Leurs arrière-plans de **cités très développées** sont des décors illustratifs **non canoniques** : ne pas en déduire l'état des ports à l'arrivée des peuples. Ces portraits ne remplacent pas les références maîtresses du jeu vidéo.
