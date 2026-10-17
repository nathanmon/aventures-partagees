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

Le manifeste [`data/illustrations.json`](../data/illustrations.json) contient **41 entrées prévues**, sans fichier image publié à ce stade. Les sujets supplémentaires à produire plus tard, dont des portraits de PNJ des autres ports, sont décrits dans le plan sans remplir inutilement la galerie.

- **P0** : Silverdawn initiale, Aldria, première Crypte vue de l'extérieur, quatre événements validés, premières explorations.
- **P1** : autres époques de Silverdawn, Caelan/Valerian/Elira, auberge et PNJ, premiers contacts et régions lointaines.
- **P2** : personnages récurrents supplémentaires et illustrations post-découverte, uniquement selon les aventures.

Chaque sujet lié à un événement représente le **déclenchement ou une situation**, pas une victoire ou une décision d'un joueur. Une illustration d'avant découverte ne révèle pas le contenu secret du lieu. Les visuels non publics ne doivent pas être enregistrés dans ce dépôt public, **même dans des métadonnées masquées par la galerie**.

## Scènes humaines, rencontres et émotions

Le [catalogue d'idées de scènes](monde/SCENES_RENCONTRES_ET_EMOTIONS.md) propose des **rencontres**, des **moments marquants** et des **moments émouvants**. **13 sujets supplémentaires** sont prévus dans le manifeste : premiers contacts avec Mirel et Nara, arrivées d'alliés, rencontre orque éventuelle, départ d'expédition, retour de navire endommagé, veille devant la Crypte, préparation devant Highford, adieux, soins, attente et retrouvailles.

Une image émotionnelle **n'affirme jamais une décision ou un sentiment du personnage joueur** : elle est visible seulement si la scène correspond réellement aux faits de la partie. Certaines entrées peuvent être illustrées avec des figurants anonymes et réutilisées dans différentes sessions.

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
