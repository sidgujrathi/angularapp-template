# AngularJS Webapp Template

This project is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

The template contains a sample AngularJS application controller and is preconfigured to install the Angular framework and a bunch of development tools for instant web development which includes SASS, bootstrap, Jquery.

The template has ideal folder structure for angularjs web app based on best practices.

## Getting Started

To get you started you can simply clone the angularapp-template repository and install the dependencies:

### Prerequisites

You need git to clone the angularapp-template repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angularapp-template. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angularapp-template

Clone the angularapp-template repository using [git][git]:

```
git clone https://github.com/sidgujrathi/angularapp-template.git
cd angularapp-template
```

If you just want to start a new project without the angularapp-template commit history then you can do:

```bash
git clone --depth=1 https://github.com/sidgujrathi/angularapp-template.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: gulp tools and angular framework, Bootstrap and Jquery.  The tools help
us to automate several retundant task such as JS, CSS minification and SASS compilaion

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular and other code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/src/assets/libs/` - contains the angular framework, JQuery and Bootstrap files

*Note that the `bower_components` folder would normally be installed in the root folder but
angularapp-template changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application
Once you have installed all dependencies, run gulp command for one time initial build.
```
gulp
```
Then, you can put app/dist folder in any webserver you like, for ex. WAMP or XAMP.
And browse to the app at `http://localhost/app/dist/index.html`.
