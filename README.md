# Aventures partagées — Portail GitHub Pages

Portail public multi-univers pour les aventures de rôle **jouées dans ChatGPT**. La première bibliothèque développée est **Battlecry / Vaélore**. D’autres univers peuvent être ajoutés sans mélanger leurs histoires. Ce dépôt est volontairement **séparé** de `nathanmon/battlecry`, dépôt privé contenant le canon du jeu vidéo et les informations réservées au maître du jeu.

## Contenu

- `index.html` et `univers.html` : portail et sélection des univers.
- `lore.html` : connaissance publique des nouveaux arrivants de **Battlecry**, première section du portail.
- `heroes.html` : personnages connus, sans révélations majeures.
- `gallery.html` : bibliothèque d'illustrations, filtrable par lieu/peuple.
- `guide.html` : configuration et limites de l'intégration ChatGPT.
- `assets/roleplay/` : images optimisées et **validées** (WebP/PNG).
- `data/illustrations.json` : catalogue de scènes et chemins d'images (les scènes « planned » n'ont pas encore de fichier).
- `chatgpt/` : textes publics à charger dans le projet ChatGPT.
- `docs/` : sources canoniques, publication, plan de travail.

## Publication GitHub Pages

1. Le dépôt public `nathanmon/aventures-partagees` a été créé.
2. Publier les fichiers à la racine de `main`.
3. Dans **Settings → Pages → Build and deployment**, choisir **Deploy from a branch**, **main**, **/(root)**.
4. Après publication, le site sera en principe à `https://nathanmon.github.io/aventures-partagees/`.

L'affichage de GitHub Pages n'intègre pas automatiquement le site dans ChatGPT et ne synchronise pas automatiquement les fichiers d'un projet ChatGPT. Le site héberge les documents publics des univers et leurs images. Les règles et le canon MJ demeurent accessibles via les sources autorisées du projet ChatGPT et du dépôt privé.

## Ajouter une image

1. Produire une scène visuelle conforme au canon, à la bonne époque (un héros arrive à **un port**, pas sur une plage devant les ruines).
2. Valider visuellement puis optimiser un WebP (cible indicative : 960–1280 px, qualité 75–85, à ajuster selon lisibilité ; ne pas promettre une durée de génération).
3. Placer le fichier sous `assets/roleplay/`, et le référencer dans `data/illustrations.json` (`status: "ready"`, `file: "assets/roleplay/...webp"`).
4. Ajouter aussi le nom et le lien dans `chatgpt/INDEX_ILLUSTRATIONS.md` ou mettre à jour cet index depuis le manifeste.
5. Vérifier que l'URL finale s'ouvre **sans connexion GitHub** et que son affichage dans ChatGPT fonctionne dans une vraie session. Un lien direct ne garantit pas à lui seul le rendu intégré à ChatGPT.

## Important : spoilers

Tout ce qui est commité dans ce dépôt public, y compris Markdown et historique Git, est potentiellement visible de tous. Ne pas copier ici `WORLD_LORE.md`, les révélations tardives ni les fiches MJ complètes. Conserver ces textes dans `nathanmon/battlecry` (privé) ou les sources privées du projet ChatGPT.