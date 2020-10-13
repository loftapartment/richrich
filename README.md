# richrich

## Demo Page

[Demo](https://teana0953.github.io/richrich/)

## Git Rule

1. always keep 'master' and 'develop' branch

2. create branch from 'develop'

   1. feature/{feature name}

      ex. feature/login

   2. fix/{bug description}

      ex. fix/login-bug

   when finished merge to 'develop'

3. update version

   1. update 'version' field in package.json, package-lock.json and commit with version message

      ex. v1.0.1

   2. merge to 'master' and commit with messge

      ex. Merge commit 'v1.0.1'

   3. push a tag with version

      ex. v1.0.1


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
