### Elia:

API
API toiminnot (CRUD)

### Onni:

Backend luonti, Frontend
Sivuston ohjaaminen oikeisiin paikkoihin
Frontending yhdistäminen backendiin

### Joose

Frontend
React sivujen luonti
(ohjeita : https://opi.riveria.fi/moodle/mod/resource/view.php?id=196073)


# Lisäohjeet

AINA kun teet suurempia muutoksia, tee uusi branch.

KOMMENTOI

Dokumentoi kaikki tehty, ja miten se toimii (suurinpiirtein)

Jos ei ole mitään tekemistä, keksitään tekemistä.

## Creating and managing branches

### Creating

1. run `git pull` to get the newest main branch
2. run `git branch <name>`. Set name to a name of the feature / fix.
3. run `git checkout <name>` to move to branch

Create your feature / fix

### Merging

1. Commit changes with `git add .`, `git commit -m "<message>"` and `git push`
2. run `git checkout main` to move to main branch
3. run `git merge <name>` to merge branch to main
4. Fix possible conflicts
5. Delete branch if it's not used anymore using `git branch -d <name>`
6. Push changes with `git push`