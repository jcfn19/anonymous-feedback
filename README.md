# annonymus-feedback

a typescript app to get annonymus user feedback that also gets the time, os and url. the app uses better-sqlite3 and express.js

## what this repo contains

this repo contains two folders. the main ts version and one with a vanilla js version (i am unsure if the vanilla js version works).

## how to run the ts version

redirect to the dist folder and run ` node index.js ` incase this doesn't work make sure you have installed the npm packages.

the npm packages are as follows, you can check if you have them installed via running ` npm list --depth=0 `

```console
@types/better-sqlite3@7.6.10
@types/express@4.17.21
@types/node@20.12.7
better-sqlite3@9.5.0
express@4.19.2
typescript@5.4.5
```

ounce installed if it still doesn't work run ` npx tsc  `

## database structure

the database structure looks like this

| id          | feedback    | time        | os          | url         |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| integer     | text        | text        | text        | text        |
| primary key |             |             |             |             |
| autoincrement |           |             |             |             |
|             | not null    |             |             |             |

the actual database waries from the two folders/versions.