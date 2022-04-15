# front_bc
 
TODO
- [x] add PurgeCSS
- [x] setup build for pure html+css build
- [ ] configurate github actions for deploy

## Install front_bc

If you want to quickly install for local testing follow the instructions below:

### Requirements

You must be running **Node version 12 or higher** due to the Tailwind 2.0 release. I recommend using NVM to easily manage your Node versions if you need to switch back and forth between older versions.

- [Node](https://nodejs.org/)
- [NVM](https://github.com/nvm-sh/nvm) (optional)

**To find your current node version:**

```
node --version
```

### Step one

```
git clone https://github.com/sonikbro/frontend_bc
```

### Step two

Install the site and run an initial build command:

```
cd frontend_bc

npm install

npx run build (only necessary the first time!)
```

_If you get errors here, double check your node version!_

### Step three

Now spin up your local server to see your site!

```
npm run start
```

This command will start a local server and you'll be able to work on your site with hot reloads and some nice Browsersync features. 💥

--- 