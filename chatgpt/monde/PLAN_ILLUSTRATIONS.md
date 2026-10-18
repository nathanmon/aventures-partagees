# Plan de production des illustrations narratives — Battlecry / Vaélore

> **Plan d'illustrations pour les aventures ChatGPT**, pas une spécification d'assets du jeu vidéo. Toutes les entrées publiques du manifeste sont **prévisionnelles** (`status: planned`, `file: null`) jusqu'à ce qu'une image ait été réellement générée, validée, déposée et vérifiée. Aucune image n'est créée par la seule rédaction de ce document.

## 1. Principe : chaque élément narratif important possède une intention visuelle

Dès la préparation d'un **personnage récurrent**, d'un **lieu important** ou d'un **événement validé**, prévoir son illustration sans forcément la produire immédiatement. Une même référence visuelle peut servir à plusieurs scènes et parties ; elle ne doit ni décider à la place du joueur ni révéler une information encore inconnue.

| Élément écrit | Préparation graphique minimale | Réutilisation |
| --- | --- | --- |
| **Héros ou PNJ important** | Portrait de référence, peuple, aspect, vêtements, accessoires, époque ; source du canon ou marque « proposition RP » | Portrait dans une conversation, puis personnage dans une scène |
| **Lieu majeur** | Vue d'ensemble, fonction, peuple, architecture, état à chaque époque utile, éléments permanents | Retour régulier dans le même lieu |
| **Événement historique fixe** | **Scène du déclenchement** : sujet, acteurs, cadre et danger, **sans issue préécrite** | Plusieurs campagnes vivant le même événement, avec conséquences différentes |
| **Rencontre / découverte narrative** | Vue publique ou extérieure **avant découverte**, illustrations supplémentaires **après expérience du personnage** | Progression sans spoiler |
| **Événement improvisé** | Généralement utiliser d'abord lieux et personnages déjà illustrés ; générer une nouvelle scène si moment véritablement marquant | Le récit n'est pas retardé par l'absence d'une image |

### États de production

**`planned`** = sujet et brief prêts, **aucun fichier image**. **`ready`** = image réelle, approuvée, fichier sous `assets/roleplay/` et URL publique vérifiée. Ne pas annoncer une illustration prête sur la base d'un descriptif, d'un simple chemin ou d'une image dans le dépôt privé Battlecry.

**Priorités internes de production :** P0 = utile pour débuter les parties et les quatre événements approuvés ; P1 = réutilisable ensuite dans les scènes récurrentes ; P2 = extension future selon les aventures réellement jouées. `priority`, `period` et `source` sont des métadonnées **éditoriales facultatives** du manifeste ; la galerie actuelle n'en fait pas des filtres.

## 2. Direction artistique à ne pas perdre

**Source d'orientation du MJ :** `BATTLECRY_VISUEL.md` et canons spécialisés de Battlecry lorsqu'ils sont accessibles. Les instructions visuelles exactes d'un personnage canonique doivent être consultées avant export, notamment `HERO_VISUAL_CANON.md` et ses variantes spécialisées.

- **Scènes narratives** : fantasy illustrée **semi-réaliste**, personnages cohérents, volumes lisibles, matières crédibles, lumière et couleurs mesurées ; atmosphère maritime pour les peuples arrivés par mer.
- **Vaélorien ancien** : architecture monumentale évoquant statuaire sacrée et géométrie mêlée à la technomagie ; noir et blanc dominants, or secondaire. **Ne pas copier une mythologie réelle, des hiéroglyphes ou les designs d'une autre franchise.**
- **Identités de peuple** : Humains navigateurs-colons ; Elfes voiles, fibres, vivant ; Nains ingénierie et coques lourdes ; Orcs flotte de guerre ; Gobelins récupération nautique ; Morts-vivants flottes funéraires.
- **Le jeu vidéo et le récit n'ont pas les mêmes contraintes** : une image d'aventure peut être cinématographique et comporter plusieurs personnages ; **ne pas la produire comme PNG de bâtiment détouré, pion, carte UI ni spritesheet** sauf demande distincte.
- **Cadrages indicatifs** : paysages/événements **16:9**, portraits **4:5**, détail d'indice **carré ou 4:3**. Ce sont des choix pour le récit, **non** les dimensions canoniques des assets du jeu.
- **Continuité** : fixer silhouette, couleurs dominantes, équipement, blessures, âge apparent, accessoires du personnage, architecture et monuments d'un lieu. Conserver les mêmes repères dans les générations ultérieures.
- **Époque** : ne pas montrer la Forge, le Sanctuaire, la Caserne ou les remparts **comme construits** au premier débarquement à Silverdawn. Si la scène représente un bâtiment non encore achevé, montrer **un chantier**, pas un édifice final.
- **Pas de spoilers** : ni secrets vaéloriens ni apparence et destin des gardiens inconnus avant la bonne scène. Ne pas inclure de révélation privée **dans les noms de fichiers, prompts publics, alt-text, descriptions ou métadonnées** : même un JSON masqué par la galerie reste consultable dans le dépôt public.

## 3. Première bibliothèque d'illustrations — lots utiles

Le manifeste source est [`data/illustrations.json`](../../data/illustrations.json). Il comprend les neuf sujets antérieurs, désormais complétés par des intentions visuelles liées aux fiches du monde.

### Lot A — début d'une aventure humaine (premier à produire)

| ID manifeste | Sujet | Scène à rechercher |
| --- | --- | --- |
| `port-silverdawn` | Port humain | Vue générale cohérente de la colonie portuaire récente |
| `scene-silverdawn-amarres` | Temps des Amarres | Première installation : pontons, caisses, abris, chantiers non terminés |
| `portrait-aldria` | Aldria | Portrait **canonique à exporter ou reproduire après vérification**, pas un nouveau visage inventé |
| `scene-crypte-exterieure` | Crypte | Entrée monumentale terrestre, **aucun secret de l'intérieur** |
| `scene-silverdawn-place` | Place principale | Ville en activité, environnement compatible avec l'époque choisie |

**Intérêt** : ces images sont susceptibles de resservir immédiatement, même lorsqu'un joueur ne suit aucune mission.

### Lot B — quatre événements historiques validés pour Aventures partagées

| ID manifeste | Événement | Illustration du déclenchement, sans résolution |
| --- | --- | --- |
| `event-saison-meutes` | **La Saison des Meutes** | Champs fragiles, empreintes, clôture abîmée ; loups à distance, colons sur leurs gardes |
| `event-voiles-noires` | **Les Voiles noires du large** | Navire marchand en mer avec voiles pirates à proximité ; ne pas assimiler les pirates à Gorvak ni imposer le naufrage |
| `event-bornes-renversees` | **Les Bornes renversées** | Anciennes bornes, tronçon bloqué, éclaireurs examinant des marques incomprises |
| `event-cendres-lointaines` | **Les Cendres lointaines** | Voyageurs gênés par une poussière grise ; **pas de Dragon visible**, pas d'éruption volcanique majeure confirmée |

**Règle** : ces quatre événements sont **approuvés pour la continuité des aventures ChatGPT** ; leurs bilans, témoins, actes des héros et explications mystérieuses restent ouverts. Les illustrations représentent des **situations**, jamais une victoire canonisée.

### Lot C — jouer plus tard et explorer plus loin

| ID manifeste | Sujet | Usage et garde-fou |
| --- | --- | --- |
| `scene-silverdawn-charpentes` | Croissance initiale | Chantiers, métiers, fermes en organisation |
| `portrait-caelan`, `portrait-valerian`, `portrait-elira` | Trois autres héros humains jouables | Portraits canoniques à vérifier et réutiliser, suivant leur arrivée respective |
| `scene-highford-approche` | Approches de Highford | Ville vaélorienne neutre vue de l'extérieur, **avant le siège** |
| `scene-crypte-abords` | Premiers indices d'une Crypte | Abords sans montrer les défenseurs ou leurs secrets |
| `scene-orcs-voiles-au-large` | Première rumeur de flotte orque | Voiles lointaines, **pas de guerre ni attaque obligatoire** |
| `scene-sunkenmere-lointain` | Sunkenmere | Eaux et ruines visibles ; Kraken non dévoilé |
| `scene-crownfall-lointain` | Crownfall | Relief volcanique ; Dragon non dévoilé |
| `portrait-mirel`, `portrait-nara`, `scene-comptoir-voiles` | PNJ et auberge récurrents | Mise en place de personnages et lieux proposés pour les conversations |
| `scene-silverdawn-convois`, `scene-silverdawn-veilles` | Silverdawn plus développée | Deux étapes distinctes, **pas** deux nouvelles villes |
| `port-gladenthorn`, `port-ironpeak`, `port-krag-thar`, `port-blackpit`, `port-nightshrine` | Cinq autres ports | Réutilisables lors des voyages et rencontres entre peuples |

Les premiers **gardiens de Crypte**, la créature **Kraken** elle-même, le **Dragon** lui-même et les figures des révélations avancées mériteraient des illustrations fortes lors d'une **rencontre réellement vécue**, sans charger leur secret en avance dans un catalogue public. Le MJ peut préparer un **brief privé au moment de la rencontre**, puis générer, montrer ou conserver la scène selon ce que le personnage a observé.

## Scènes de rencontre, moments marquants et scènes émouvantes

En plus des portraits, lieux et déclencheurs d'événements, la bibliothèque prévoit maintenant **des images d'interactions humaines et des moments à forte portée narrative**. Le document [Scènes de rencontres et émotions](SCENES_RENCONTRES_ET_EMOTIONS.md) contient **25 idées** classées en rencontres, moments marquants et moments émouvants, avec des restrictions sur l'époque, les acteurs, les révélations et les décisions du personnage joueur.

**13 scénarios à forte réutilisation** possèdent maintenant un identifiant `planned` dans le [manifeste](../../data/illustrations.json) : rencontres avec Mirel et Nara, arrivées d'Elfes et de Nains, rencontre orque possible ; départ à l'aube, navire endommagé, veille devant une Crypte, préparation de Highford ; adieux, soins, attente et retrouvailles.

**Les illustrations sont conditionnelles** : ne pas montrer une retrouvaille avant qu'elle ait lieu, ni faire apparaître les Elfes ou les Nains à Silverdawn à une époque incompatible avec leur arrivée, ni afficher un héros accomplissant un choix que le joueur n'a pas fait. Les scènes d'émotion peuvent mettre en avant **des figurants anonymes** plutôt que le personnage-joueur pour rester réutilisables.

## Relations et illustrations évolutives

Le [guide des relations et de leurs images](RELATIONS_ET_ILLUSTRATIONS.md) distingue les **liens canoniques préexistants** entre héros, les relations de PNJ inventées pour Aventures partagées et les **changements émergents** pendant les sessions. Il propose **10 entrées** dans le manifeste `planned` : anciens compagnons, couple déjà marié, fratries, amitiés, désaccords professionnels, confiance naissante et réconciliation conditionnelle.

**Une image relationnelle n'impose jamais un sentiment ou une décision au personnage joueur**. Une scène romantique, une dispute, une rupture ou une réconciliation **impliquant ce personnage** doit être illustrée **seulement après sa participation réelle**. La présence des personnages doit respecter leur date d'arrivée : Elira ne se trouve pas automatiquement avec Caelan à Silverdawn avant son propre débarquement.

Les relations canoniques de `HERO_RELATIONSHIPS_DESIGN.md` restent la référence du jeu vidéo ; elles n'établissent **aucune nouvelle scène historiquement vécue** à Vaélore.

## Bible des personnages secondaires et scènes de duo

Les **17 PNJ inventés** disposent maintenant d'une [bible visuelle détaillée](BIBLE_VISUELLE_PNJ.md), avec apparence fixe, vie quotidienne proposée, relations, variations et scènes possibles. L'[atlas des scènes PNJ](ATLAS_SCENES_PNJ.md) donne les compositions, contextes, déclencheurs et interdits à respecter.

**15 portraits supplémentaires** ont été ajoutés au manifeste (`portrait-*`) pour compléter ceux de Mirel et Nara. **Sept scènes de duo** ont également été prévues : Serdan/Berric, Yselle/Berric, Lethwen/Eryn, Orvik/Brena, Brugha/Drezh, Fizzka/Grinn, Sareth/Vorl. Chaque entrée reste `planned`.

La situation personnelle aide à créer des images cohérentes mais **n'établit aucun mariage, enfant, décès ou roman sentimental comme canon commun**. Une relation affective ne sera illustrée qu'après s'être réellement produite en session.

## 4. Portraits secondaires à prévoir sans encombrer la galerie

### Silverdawn : sept habitants déjà définis en RP

| PNJ | Image souhaitée | Identifiant prévu si l'on produit l'image |
| --- | --- | --- |
| **Mirel** | Portrait d'intendante des quais, registre, tenue de travail | `portrait-mirel` (déjà dans le manifeste) |
| **Oren** | Charpentier de marine, tablier usé et outil de chantier | `portrait-oren` |
| **Serdan** | Éclaireur, manteau de marche, carnet et bottes de terrain | `portrait-serdan` |
| **Yselle** | Soigneuse, sacoche, manches retroussées | `portrait-yselle` |
| **Berric** | Négociant, carnet de dettes et poids de mesure | `portrait-berric` |
| **Nara** | Tenancière du Comptoir des Voiles | `portrait-nara` (déjà dans le manifeste) |
| **Taven** | Messager et manutentionnaire, sacoche de course | `portrait-taven` |

**Leurs portraits seraient canoniques uniquement dans la continuité de la session où ils sont approuvés**, pas des personnages officiels du jeu vidéo.

### Personnages nouveaux des cinq autres villes : dix portraits possibles P2

- **Gladenthorn** : Lethwen (voiles vivantes), Eryn (observateur des rivages) ;
- **Ironpeak** : Orvik (levage), Brena (inventaires) ;
- **Krag'Thar** : Brugha (bosco), Drezh (Wargs) ;
- **Blackpit** : Fizzka (épaves), Grinn (chaudières) ;
- **Nightshrine** : Sareth (archives), Vorl (amarres).

Ces noms sont **des inventions pour les aventures**, déjà décrites dans [les fiches de PNJ](PERSONNAGES_SECONDAIRES.md). Les dix portraits sont désormais prévus au manifeste comme `planned`, sans fichier image disponible.

### Héros des autres peuples

**Thalira, Thorgar, Gorvak, Nix et Malachar** sont les premiers héros de leurs peuples selon la conception du jeu. Leurs portraits doivent suivre les **canons visuels privés** si l'on prépare des aventures au départ des autres ports. Ne pas improviser leurs visages à partir des noms seulement.

## 5. Lieux à illustrer avec variantes utiles

| Lieu | Image de base | Variantes seulement si l'histoire les justifie |
| --- | --- | --- |
| **Silverdawn** | Port, place et chantiers | Amarres → Charpentes → Convois → Veilles ; chantiers inachevés selon l'époque |
| **Gladenthorn** | Port elfique maritime | Quai léger, voiles, ateliers de fibres, sentier de reconnaissance |
| **Ironpeak** | Port nain industriel | Grue, forge utilitaire, cale et levage |
| **Krag'Thar** | Port de guerre orc | Pont de navire, débarquement de Wargs, armurerie |
| **Blackpit** | Port de récupération gobelin | Atelier de pièces, épave en cours de réparation |
| **Nightshrine** | Port de flotte funéraire | Quai embrumé, journal de bord, navire revenu |
| **Highford** | Approche d'une ville neutre ancienne | Découverte des abords puis préparation d'un siège, **sans victoire imposée** |
| **Crypte** | Entrée et environs accessibles | Intérieur **uniquement après exploration crédible** |
| **Sunkenmere / Crownfall** | Paysage lointain | Rencontre avec le Kraken ou le Dragon **dans la session concernée** |

**Ne pas confondre** une illustration de lieu utile au RP avec un module du hub solo : des PNG transparents de bâtiments sont des **assets distincts**, gérés par les spécifications graphiques du jeu vidéo.

## 6. Fiche visuelle minimale à ajouter lors de chaque nouvelle proposition

```yaml
id: event-saison-meutes
sujet: La Saison des Meutes
categorie: evenement
lore: retenu-rp
statut: planned
priorite: P0
lieu: Silverdawn, abords agricoles
epoque: premieres exploitations
apparence: clotures, colons, loups en observation
scene: danger et preparation sans issue imposee
personnages_canoniques: aucun personnage-joueur represente comme victorieux
spoiler: public
source: chatgpt/evenements/DANGERS_MYSTERES_COLONISATION.md
fichier: null
```

Cette fiche donne un **brief réutilisable** ; elle ne garantit ni que l'image existe ni qu'elle a été publiée. Pour une production réelle, demander une version qui respecte la bible visuelle et les apparences déjà fixées, **valider l'image avant sa publication**.

## 7. Cycle de production et réutilisation par le MJ

1. **Définir le contenu** : personne, lieu ou événement ; statut canon / retenu RP / proposition ; période et informations que le personnage peut légitimement connaître.
2. **Prévoir les visuels** : ID stable, brief, références visuelles, éventuelles variantes d'époque, priorité, interdits et niveau de révélation.
3. **Produire par petits lots** : commencer par les sujets réutilisés souvent, pas par des scènes spectaculaires mais très rares.
4. **Valider** : confirmer l'identité des héros, l'architecture, le peuple, la période, l'absence de spoilers et la continuité des costumes et détails.
5. **Publier** : placer une image WebP/PNG sous `assets/roleplay/`, vérifier l'accès sans connexion et passer son entrée du manifeste en `ready` avec un chemin **réel**.
6. **Jouer** : le MJ préfère un visuel `ready` compatible avec la période et les connaissances ; sinon il peut créer une illustration de scène seulement lorsque l'instant est significatif, **sans bloquer la narration**.

Le manifeste est utilisé par la [galerie publique](https://nathanmon.github.io/aventures-partagees/gallery.html) : l'état `planned` y affiche seulement « Illustration à préparer ». Ajouter un ID **n'affiche pas automatiquement une image dans ChatGPT**. Les sources du projet ChatGPT ne sont pas synchronisées automatiquement par un commit GitHub.

## Scènes ordinaires, exploration, objets et dialogues

Le [dossier des scènes jouables et objets consultables](SCENES_JOUABLES_OBJETS.md) prépare **16 images** permettant d'illustrer le déroulement ordinaire d'une aventure : accès d'une ville, rue, pont gardé, auberge bruyante, carte murale et examen rapproché, registres, gardes en discussion, salle de garde, chambre et arrière-salle.

Le catalogue distingue désormais `décor jouable`, `objet consultable` et `interaction courante`. Pour un lieu ou un objet, prévoir si utile **vue d'ambiance → vue de détail → scène d'interaction**, à la même époque et avec le même décor.

La priorité P0 va aux passages courants, à l'auberge, aux cartes et aux gardes. Le MJ illustre ces moments seulement quand ils sont narrativement utiles. **Ne pas inventer de pont canonique à Silverdawn**, de porte fortifiée dès l'arrivée, de carte géographique exacte ou d'acte du personnage joueur non joué. Le texte d'une carte doit venir d'une source fiable indépendante.

## 8. Vérifications indispensables avant une illustration

- **Qui voit cette scène ?** Le personnage-joueur connaît-il ces acteurs et objets ?
- **Quand ?** Première arrivée, colonie développée ou exploration plus tardive ?
- **Qui agit ?** L'illustration montre-t-elle une décision non prise par le joueur ?
- **Quel style ?** Bible visuelle Battlecry, sans copier d'autres univers.
- **Quel canon ?** Le héros nommé a-t-il une fiche graphique plus spécialisée ? Le PNJ est-il seulement une proposition ?
- **Quelle continuité ?** Le même personnage et lieu ressemble-t-il à sa précédente représentation ?
- **Quel statut réel ?** `planned` ou `ready` après vérification effective ?

L'illustration sert à **donner une identité visuelle stable** au monde, pas à enfermer les joueurs dans un scénario.
