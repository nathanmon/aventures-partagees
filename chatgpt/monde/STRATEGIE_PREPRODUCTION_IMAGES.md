# Stratégie de préproduction des illustrations — aventures fluides

> **Décision du créateur pour Aventures partagées : produire un maximum d'images AVANT les parties.** L'objectif est de raconter et **afficher immédiatement** une image disponible, sans dépendre du temps de génération pendant l'aventure. Cette règle remplace les conseils plus anciens recommandant de réduire le catalogue à une quinzaine d'images ou de fabriquer spontanément de nouvelles scènes en cours de jeu.

## 1. Principe d'usage

1. **Avant de jouer :** constituer une bibliothèque étendue d'illustrations pré-générées, relues, validées, stockées sur un hébergement public stable et indexées par sujet, époque, lieu, personnages et usage.
2. **Pendant la partie :** chercher l'illustration compatible avec la scène, les découvertes du personnage et les choix déjà faits ; **l'afficher immédiatement si elle existe**.
3. **Si aucune image n'existe :** **ne pas déclencher automatiquement une génération** et ne pas mettre le récit en attente. Continuer avec la narration et, si utile, une autre vue existante du même lieu ou d'un figurant.
4. **Si le joueur demande explicitement une nouvelle image :** il accepte alors le délai nécessaire à la génération. Raconter d'abord la portion utile de scène, générer et montrer le visuel quand il est disponible, en respectant la continuité.

**Illustrer spontanément** signifie donc **sélectionner et afficher des images existantes**, y compris pour les lieux ordinaires ; cela **ne signifie plus** générer spontanément de nouvelles images.

## 2. Taille de la bibliothèque et objectif de couverture

Le [manifeste des illustrations](../../data/illustrations.json) contient actuellement **89 intentions visuelles** pour Battlecry, toutes `planned` et sans fichier réel. **89 n'est pas une limite haute ni un catalogue à ramener à 15.** Le nombre peut augmenter afin de couvrir différents intérieurs, angles, personnages, objets, peuples, époques et ambiances.

La **priorité de production** se décide selon la fréquence de réutilisation et l'impact sur la fluidité, mais la **cible reste de produire les images du catalogue**, pas uniquement le lot P0.

- **P0 — produire en premier** : villes et entrées, rues, auberges, gardes, objets à examiner, plusieurs panoramas de ports, première découverte, PNJ fréquemment croisés.
- **P1 — deuxième vague** : intérieurs secondaires, variantes d'époque et de lumière, portraits des autres personnages, rencontres régulières et événements connus.
- **P2 — troisième vague** : autres peuples et ports, scènes de relation plus rares, variantes complémentaires.
- **Variantes utiles** : même pièce de jour/nuit, vide/animée, même carte au mur/en gros plan, même pont sans garde/avec garde, même PNJ au travail/en discussion. Ne pas produire de multiples images presque identiques sans valeur de jeu.

**Les priorités ordonnent la file de production, elles ne déterminent pas les seules images à fabriquer.**

## 3. Types d'images à préproduire

| Famille | Utilisation immédiate pendant le jeu | Exemples |
| --- | --- | --- |
| **Lieux jouables** | Situer l'action dès qu'on entre quelque part | port, rue, auberge, pont réellement établi, atelier, salle de garde |
| **Objets consultables** | Montrer le support ou l'objet remarqué | carte, registre, lettre, enseigne, avis ; texte fiable séparé |
| **Figurants et portraits** | Voir rapidement à qui l'on parle | gardes par peuple, aubergistes, voyageurs, 17 PNJ proposés, héros canoniques |
| **Interactions réutilisables** | Illustrer un échange sans préécrire les paroles du joueur | gardes en faction, négociation entre PNJ, conversation à une table |
| **Événements et découvertes** | Montrer les éléments visibles à cet instant | arrivée de navire, Crypte extérieure, meutes au loin |
| **Relations et émotions conditionnelles** | Afficher des scènes **déjà produites**, mais seulement après les faits vécus | retrouvailles, adieux, entraide, réconciliation |

### Scènes conditionnelles : préproduites, mais pas affichées automatiquement

Une illustration d'adieux, de retrouvailles ou de réparation d'un lien peut parfaitement être **générée avant la partie** avec des personnages **anonymes** ou dans une situation générale ; elle n'est montrée que si les faits du récit correspondent. Pour un héros joueur, ne pas le dessiner en train d'embrasser, de pardonner ou de faire un choix avant qu'il l'ait fait. Les scènes impossibles à préproduire fidèlement faute de connaître l'apparence et les choix du joueur restent des exceptions ; utiliser plutôt le décor ou les PNJ pré-générés.

### Spoilers et canon

Une image qui montre un secret du monde ne doit pas être publiée dans le **catalogue public** avant que sa publication ne soit autorisée ; ne jamais écrire sa révélation dans un nom de fichier, un titre, un texte alternatif ou une métadonnée accessible à tous. Les visuels de lieux explorables sont préparés **sans dévoiler les découvertes futures**.

L'identité visuelle des héros officiels exige leur référence canonique ; les 17 PNJ de rôle suivent la [bible visuelle dédiée](BIBLE_VISUELLE_PNJ.md). Aucun contenu pré-généré n'oblige le joueur à accomplir l'action qu'il représente.

## 4. Chaîne de production systématique

1. **Établir une liste de production** à partir des sujets `planned`, groupée par lieu puis par personnage ou événement.
2. **Fixer les références maîtres** : décor, matériaux, époque, portrait 4:5 des personnages récurrents, silhouettes des gardes par peuple.
3. **Produire les décors maîtres**, puis leurs variantes réutilisant les mêmes repères ; produire les objets séparément et sans annotations géographiques fantaisistes.
4. **Produire les portraits**, puis les interactions dont les participants doivent reprendre exactement les mêmes visages.
5. **Contrôler chaque image** : cohérence de lieu, personnage, période, révélations visibles, droits de publication ; rejeter les variations de visage non justifiées.
6. **Déposer les fichiers réels** sous `assets/roleplay/`, vérifier leur URL GitHub Pages et passer le statut du manifeste à `ready`. Un concept ou un prompt seul reste `planned`.
7. **Vérifier l'usage en session** : affichage réel, bonne image trouvée rapidement, absence de délai de génération, image adaptée au point de vue. Enrichir le catalogue des situations manquantes **entre les sessions**, pas en plein récit.

Conserver des **références maîtres** pour chaque lieu et personnage validé : l'image finale et son descriptif de composition. La galerie doit permettre de filtrer par type, lieu, peuple, période et statut ; un futur système peut ajouter `scene_id`, `variant_of`, `time_of_day` et `characters` **quand les variantes sont réellement créées**, sans enrichir artificiellement toutes les anciennes entrées.

## 5. Mode d'emploi du MJ

- **Déjà disponible et compatible** : afficher l'image, puis faire avancer l'histoire.
- **Disponible mais incompatible** (autre époque, mauvais peuple, spoiler, actions non jouées) : **ne pas afficher**.
- **Rien de compatible** : narration normale sans génération automatique ; option de réutiliser un détail ou portrait générique correctement adapté.
- **Demande explicite du joueur d'une image absente** : générer ponctuellement, attendre le résultat et l'utiliser après validation des détails visibles.

**Le récit reste libre, même si une bibliothèque existe** : les images disponibles ne dictent ni les destinations, ni les relations, ni les paroles, ni les résolutions. L'objectif de la préproduction est de diminuer le délai d'attente, pas de forcer une intrigue.

## 6. Suivi réel

- **89 sujets prévus** dans le manifeste au moment de cette décision.
- **0 image réelle validée et publiée** dans ces 89 entrées à cette date.
- **Cap visé : bibliothèque large pré-générée et immédiatement réutilisable**. Ne pas confondre enrichissement du catalogue avec génération ou publication de fichiers.

Voir [plan des illustrations](PLAN_ILLUSTRATIONS.md), [index public](../INDEX_ILLUSTRATIONS.md), [scènes jouables](SCENES_JOUABLES_OBJETS.md) et [galerie](https://nathanmon.github.io/aventures-partagees/gallery.html).
