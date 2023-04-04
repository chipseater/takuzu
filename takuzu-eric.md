# Génération de la grille

## Principe

Mon implémentation du takuzu peut se trouver sur *insérer l'url*. La génération se base sur une méthode de backtracking : cela consiste à tenter 

## Code

On génère la grille avec cette fonction javascript semblable à celle-ci :

```javascript
// NB: On travaille sur une liste qu'on converti en matrice 10x10 à la fin
function buildGrid() {
    // On initialise une pile d'execution avec une liste vide
    const stack = [[]]
    while (stack.length > 0) {
        const currentList = stack.pop()
        // Si la liste en cours fait la bonne taille, on la renvoie en grille
        if (currentList.length == 100) return list_to_grid(currentList)
        // Sélection d'un entier aléatoire entre 0 et 1 et de son opposé
        const rnd_bit = Number(Math.random() < 0.5)
        const inv_bit = Number(!rnd_bit)
        // Si la liste avec le nombre aléatoire est valide alors on l'empile
        if (check_list(currentList.concat([rnd_bit])))
            stack.push(currentList.concat([rnd_bit]))
        // Pareil avec l'opposé de ce nombre
        if (check_list(currentList.concat([inv_bit])))
            stack.push(currentList.concat([inv_bit]))
    }
}
```

## Exemple de génération d'une grille en 4x4

### Arbre binaire retprésentant le contenu de la pile d'éxecution :

```
    / \
   0   1
  / \
 0   1
    / \
   0   1
      /
     0
    / \
   0   1
    \
     1
    / \
   0   1
  / \
 0   1
    / \
   0   1
      /
     0
    / \
   0   1
      / \
     0   1
    / \
   0   1
    \
     1
    / \
   0   1
      /
     0
```

### Chemin parcouru:

$$\begin{matrix}
0 & 1 & 1 & 0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 0 & 0 & 1 & 1 & 0
\end{matrix}$$

### Grille de takuzu obtenue: 
$$\begin{matrix}
0 & 1 & 1 & 0 \\
0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 \\
\end{matrix}$$

## Code pour l'ajout de blancs

```javascript
// grid: la grille complétée ; n: le nombre de trous
function gen_blanks(grid, n) {
    let res = grid
    while (n > 0) {
        // On choisi aléatoirement une case
        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)
        // On inverse une case pour voir si la grille reste résolvable
        grid[x][y] = !grid[x][y]
        if (!rules_checker(grid) && res[x][y] != -1) {
            // Si la grille n'est pas résolvable, ajouter un blanc
            res[x][y] = -1
            n--
        }
        // On remet la grille dans son état original
        grid[x][y] = !grid[x][y]
    }
    return res
}
```
