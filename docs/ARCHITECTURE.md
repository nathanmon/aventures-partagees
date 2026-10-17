# Architecture — Aventures partagées

## Responsabilités

- **ChatGPT** fait vivre les parties : narration, PNJ, dés, interactions et continuité locale.
- **Ce dépôt GitHub public** héberge un portail statique, le lore public et une galerie d'illustrations avec manifeste JSON.
- **Battlecry privé** conserve le code du jeu, ses spécifications canoniques et les secrets du MJ.
- **Le projet ChatGPT** reçoit les instructions et sources nécessaires, dont les fichiers privés seulement s'ils sont explicitement ajoutés ou consultés par un outil autorisé.

## Limites

- GitHub Pages n'héberge pas le moteur ChatGPT, ni les sessions individuelles.
- Un JSON d'images ne garantit pas un rendu intégré automatique côté client ChatGPT.
- La mise à jour de GitHub ne synchronise pas automatiquement les sources chargées dans un projet ChatGPT.
- Les documents et images publiés sur GitHub Pages sont accessibles publiquement, y compris dans l'historique Git.

## Par univers

L'univers `battlecry` est le premier décrit. Les autres univers resteront séparés, sans mélanger géographie ou personnages. Les événements propres à une session ne sont pas une histoire commune officielle tant qu'ils n'ont pas été validés.

## Publication

Pour cette version, Pages sert les fichiers depuis `main`, dossier `/(root)`. Le catalogue est `data/illustrations.json` et la page de consultation `gallery.html`.
