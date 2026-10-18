# Index public des illustrations — maître du jeu ChatGPT

Site : https://nathanmon.github.io/aventures-partagees/gallery.html

Catalogue machine-lisible : https://nathanmon.github.io/aventures-partagees/data/illustrations.json

**Attention :** les images sont d'abord enregistrées dans le manifeste sous l'état `planned`. Seules les entrées `ready` avec un vrai fichier et une URL vérifiée sont utilisables.

## Utilisation narrative

1. Identifier le lieu, le peuple, la période et le niveau de découverte du personnage-joueur.
2. Chercher une image `ready` ayant `spoilers: public` et correspondant à ces contraintes.
3. Privilégier le visuel validé déjà existant ; une URL publique directe peut être insérée dans la réponse si le client le prend en charge.
4. Ne jamais improviser un chemin ni annoncer l'affichage réussi avant vérification.
5. La narration avance sans attendre un téléchargement, un appel réseau ou une génération d'image.

## Plan de production relié au lore

Le [plan des illustrations narratives](monde/PLAN_ILLUSTRATIONS.md) associe maintenant les **héros, PNJ, six ports, époques de Silverdawn, grands jalons et quatre événements historiques validés** à des sujets d'illustrations identifiables.

Le manifeste [`data/illustrations.json`](../data/illustrations.json) contient **89 entrées prévues**, sans fichier image publié à ce stade. Les sujets supplémentaires à produire plus tard, dont des portraits de PNJ des autres ports, sont décrits dans le plan sans remplir inutilement la galerie.

- **P0** : Silverdawn initiale, Aldria, première Crypte vue de l'extérieur, quatre événements validés, premières explorations.
- **P1** : autres époques de Silverdawn, Caelan/Valerian/Elira, auberge et PNJ, premiers contacts et régions lointaines.
- **P2** : personnages récurrents supplémentaires et illustrations post-découverte, uniquement selon les aventures.

Chaque sujet lié à un événement représente le **déclenchement ou une situation**, pas une victoire ou une décision d'un joueur. Une illustration d'avant découverte ne révèle pas le contenu secret du lieu. Les visuels non publics ne doivent pas être enregistrés dans ce dépôt public, **même dans des métadonnées masquées par la galerie**.

## Scènes humaines, rencontres et émotions

Le [catalogue d'idées de scènes](monde/SCENES_RENCONTRES_ET_EMOTIONS.md) propose des **rencontres**, des **moments marquants** et des **moments émouvants**. **13 sujets supplémentaires** sont prévus dans le manifeste : premiers contacts avec Mirel et Nara, arrivées d'alliés, rencontre orque éventuelle, départ d'expédition, retour de navire endommagé, veille devant la Crypte, préparation devant Highford, adieux, soins, attente et retrouvailles.

Une image émotionnelle **n'affirme jamais une décision ou un sentiment du personnage joueur** : elle est visible seulement si la scène correspond réellement aux faits de la partie. Certaines entrées peuvent être illustrées avec des figurants anonymes et réutilisées dans différentes sessions.

## Relations et scènes de duo

Le [guide des relations et illustrations](monde/RELATIONS_ET_ILLUSTRATIONS.md) distingue **relations canoniques déjà existantes**, liens entre PNJ de jeu de rôle et évolutions réellement vécues en session. Il propose **10 scènes supplémentaires** `planned` : Aldria/Caelan, Caelan/Elira, fratries et amitiés d'autres peuples, Mirel/Oren, Nara/Taven, confiance nouvelle et réconciliation conditionnelle.

Le MJ utilise ces images uniquement **si les deux personnages se trouvent réellement au même endroit, à la bonne époque**, et si les interactions montrées respectent leurs choix. Les liens affectifs canoniques ne donnent pas le droit de forcer des décisions nouvelles aux joueurs.

## Portraits et scènes des 17 PNJ

La [bible visuelle des personnages secondaires](monde/BIBLE_VISUELLE_PNJ.md) contient leurs visages, silhouettes, costumes, accessoires, situations personnelles proposées et liens. L'[atlas des scènes PNJ](monde/ATLAS_SCENES_PNJ.md) précise leurs rencontres, duos et moments émouvants.

Le catalogue prévoit **17 portraits de PNJ** (dont Mirel et Nara existants) et **sept nouveaux duos de travail ou de relation**. Ces scènes sont facultatives et n'imposent aucun état amoureux ou familial.

## Scènes ordinaires jouables et objets

Le [plan des scènes de jeu récurrentes](monde/SCENES_JOUABLES_OBJETS.md) ajoute **16 sujets prévisionnels** : neuf P0 (ville, rue, pont éventuel, auberge, carte murale, gros plan, échange avec gardes, entrée dans l'auberge, examen de carte) et sept P1 (registre, panneau, salle de garde, chambre, arrière-salle, ruelle, contrôle).

Les catégories `décor jouable`, `objet consultable` et `interaction courante` sont filtrables dans la galerie par **type, lieu et période**, en plus du peuple et du statut. Un paysage, une carte ou un contrôle ne s'affiche que si sa présence et son contenu sont cohérents avec la session. **Une carte fantaisiste générée ne définit pas la géographie canonique.**

## Première bibliothèque prévue

- `port-silverdawn` : arrivée au port humain.
- `port-gladenthorn` : arrivée au port elfique.
- `port-ironpeak` : arrivée au port nain.
- `port-krag-thar` : arrivée au port orc.
- `port-blackpit` : arrivée au port gobelin.
- `port-nightshrine` : arrivée au port mort-vivant.
- `scene-silverdawn-place` : vie ordinaire de la colonie.
- `scene-crypte-exterieure` : extérieur d'une crypte, sans spoiler.
- `portrait-aldria` : portrait canonique à exporter après validation.

**Limite technique :** le lien public est consultable, mais son affichage **automatique** dans ChatGPT ne peut pas être garanti par la seule présence d'un Markdown. Tester sur une vraie partie.
