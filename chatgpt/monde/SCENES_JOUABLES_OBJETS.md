# Scènes jouables, objets consultables et interactions courantes

> **Bibliothèque d'intentions visuelles pour les aventures ChatGPT**, pas une carte canonique ni des assets du jeu vidéo. Les exemples viennent de situations vécues dans des aventures (ville, auberge bruyante, carte au mur, pont, dialogue avec des gardes) mais **ne transforment aucun de ces lieux en élément fixe de Battlecry**.

## Pourquoi cette bibliothèque ?

Les portraits, villes et grands événements ne couvrent pas tout ce que le joueur **fait concrètement** : arriver par une route, entrer dans une pièce, regarder un document, parler à un garde ou franchir un passage. Il faut préparer des images faciles à réutiliser pour ces **scènes ordinaires** sans remplacer la narration ni transformer chaque mouvement en illustration obligatoire.

Trois types sont introduits dans `data/illustrations.json` :

| Type de visuel | À quoi il sert | Exemples |
| --- | --- | --- |
| **`décor jouable`** | Situer un espace et permettre l'exploration sans fixer l'action | rue, auberge, pont, salle de garde, chambre |
| **`objet consultable`** | Présenter un élément observé ou lu | carte murale, gros plan de carte, registre, panneau |
| **`interaction courante`** | Donner à voir un échange ou un contrôle | garde en faction, entrée d'auberge, carte examinée, contrôle de voyage |

## Lot P0 — à préparer d'abord

| ID | Image à composer | Risque à éviter |
| --- | --- | --- |
| `decor-silverdawn-acces-terrestre` | Accès de la colonie côté terre, barrières et porteurs selon l'époque | Ne pas ajouter une enceinte de pierre au premier débarquement |
| `decor-silverdawn-rue-principale` | Rue de colonie avec habitants et chantiers | Pas de capitale monumentale ou de bâtiments non construits |
| `decor-pont-passage-garde` | Pont défini par le MJ dans une scène, avec garde locale | **Aucun pont spécifique canonisé** sur la carte de Vaélore |
| `decor-comptoir-voiles-salle-commune` | Salle animée du Comptoir des Voiles | Comptoir ouvert seulement à l'époque où il existe |
| `objet-carte-murale-auberge` | Carte suspendue au mur d'une auberge | Ne pas ajouter de noms géographiques ou de routes inconnues |
| `objet-carte-rapprochee` | Vue lisible du support et des marques déjà connues | **Pas de faux texte généré** présenté comme renseignement fiable |
| `interaction-gardes-passage` | Vue d'un ou deux gardes pendant une discussion | Pas de dialogue, d'acquiescement ni de refus du joueur |
| `interaction-entree-auberge` | Vue depuis l'entrée d'une salle commune fréquentée | L'image ne fait pas choisir de table ni saluer quelqu'un |
| `interaction-consultation-carte` | Vue centrée sur la carte remarquée par le personnage | Le joueur n'a pas forcément décroché ou emporté la carte |

## Lot P1 — variété et approfondissement

| ID | Illustration | Condition |
| --- | --- | --- |
| `objet-registre-comptoir` | Registre ouvert, pages et reliure | Registre présent et consultable dans le récit |
| `objet-panneau-affichage` | Petites annonces dans une place ou une auberge | Panneau effectivement décrit |
| `decor-poste-garde-interieur` | Petite salle de garde avec banc et table | Lieu existant, accessible au personnage |
| `decor-chambre-auberge` | Chambre simple louable | Auberge avec hébergement réellement définie |
| `decor-arriere-salle-auberge` | Réserve et zone de service | Arrière-salle établie ; **pas de porte secrète automatique** |
| `decor-ruelle-ville` | Ruelle animée ou calme entre bâtiments | Rue localisée dans la session |
| `interaction-controle-passage` | Vérification d'un chargement ou d'un laissez-passer | Contrôle réellement initié ; aucune issue imposée |

Des idées à conserver hors manifeste jusqu'à besoin : une porte verrouillée ordinaire ; une lettre ouverte après lecture ; une enseigne ; une table avec plan d'itinéraire ; une descente d'escalier connue ; un pont à l'aube et le même pont de nuit ; une auberge vide puis bondée ; une patrouille en mouvement ; une dispute entendue de loin.

## Vues liées d'un même élément

Pour un **même objet ou lieu**, créer des variantes seulement si le récit le justifie :

1. **Vue d'ambiance** : carte sur le mur de l'auberge, assez loin pour situer l'objet.
2. **Vue de détail** : carte examinée, son support et des annotations autorisées.
3. **Interaction** : personne face à la carte, mais **sans action jouée par le personnage-joueur avant son choix**.

**Une carte à lire doit avoir une source de données fiable distincte de l'image.** Le générateur peut inventer des caractères ou des routes. Le MJ lit les informations dans un texte vérifié ou dans un vrai document, puis les explique dans la narration ; une image illustrative ne vaut pas une carte officielle. Si une carte géographique exacte est nécessaire, utiliser un document vérifié, non une image fantasy improvisée.

Les vues du Comptoir des Voiles partagent la même architecture interne une fois fixée ; le quai, la place et les rues de Silverdawn changent seulement selon l'époque et les travaux réellement achevés.

## Personnages et figurants

Les gardes, marchands, passants et clients anonymes **ne nécessitent pas chacun une biographie** ; leur tenue doit néanmoins correspondre au peuple et au port où ils servent. Un garde de Gondor évoqué dans une aventure du Seigneur des Anneaux **ne peut pas devenir un garde de Vaélore** : ne pas mélanger les univers.

Les PNJ nommés (Mirel, Nara, etc.) réutilisent la [bible des 17 PNJ](BIBLE_VISUELLE_PNJ.md), en restant cohérents avec leur époque et leur localisation. Si le joueur tient un rôle visible à l'image, suivre son aspect réellement établi et **ne pas lui inventer de gestes**.

## Contrat de production / catalogue

- Chaque entrée a : ID stable, `type`, lieu, peuple, période, `priority`, `trigger`, `view` (`ambiance`, `détail`, `interaction`), description et `spoilers`.
- **Tous les 16 sujets** ci-dessus sont `status: planned` avec `file: null`. Le catalogue ne possède pas d'image réelle pour ces entrées.
- `location` vague ou « selon la session » **n'ajoute aucune géographie canonique**. Un pont, une porte de ville, une salle de garde ou une carte au mur ne sont pas déclarés existants à Silverdawn par défaut.
- Ne montrer que les informations **connues du personnage** ; ne pas inclure d'indices privés dans le nom de fichier, le texte alternatif, le JSON ou les prompts publiés.
- Marquer `ready` seulement après production, validation et vérification d'un fichier public sous `assets/roleplay/`.
- **Ne pas interrompre l'aventure pour chaque objet**. Illustrer spontanément les scènes ordinaires lorsque le cadrage apporte de l'information ou une immersion réelle, en réutilisant les vues disponibles.

## Références

[Plan général des illustrations](PLAN_ILLUSTRATIONS.md) · [Lieux et itinéraires](LIEUX_ET_ITINERAIRES.md) · [Scènes de rencontres et d'émotions](SCENES_RENCONTRES_ET_EMOTIONS.md) · [Index du catalogue](../INDEX_ILLUSTRATIONS.md). Le dépôt privé Battlecry reste **une référence en lecture seulement**.
