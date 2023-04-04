# Minimal Vite Setup for Comunica
[![Build Status](https://github.com/surilindur/minimal-vite-setup//workflows/CI/badge.svg)](https://github.com/surilindur/minimal-vite-setup/actions?query=workflow%3A%22CI%22)

Minimal example of a web application using [Comunica](https://comunica.dev/)
that is bundled with [Vite](https://vitejs.dev/).

## Setup

After cloning this git repository, install dependencies using Yarn:

```bash
$ yarn install --frozen-lockfile
```

Run `yarn dev` to start a live development server, or alternatively `yarn build` and `yarn preview` to build for production and serve that built version.

## Functionality

This minimal setup will print messages into the console tab of the dev tools in the browser to show that it is working. By default, it fetches the first ten triples from the DBPedia SPARQL endpoint:

```
Running query with Comunica
Sources > Array [ "https://dbpedia.org/sparql" ]
Query SELECT * WHERE { ?s ?p ?o } LIMIT 10
Bindings > Array(10) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
Finished
```

**Note**: The GitHub Actions workflow currently does not check if the built application actually works, it just builds it. If there is time later, some kind of check might be added.

## License
This code is copyrighted by [Ghent University – imec](http://idlab.ugent.be/)
and released under the [MIT license](http://opensource.org/licenses/MIT).
