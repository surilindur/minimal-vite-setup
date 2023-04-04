import { QueryEngine } from '@comunica/query-sparql'
import type { IQueryEngine, IDataSource } from '@comunica/types'

type IContextSources = [IDataSource, ...IDataSource[]]

const engine: IQueryEngine = new QueryEngine()

const queryString: string = 'SELECT * WHERE { ?s ?p ?o } LIMIT 10'

// RDF document: http://dbpedia.org/resource/Leipzig
// SPARQL endpoint: https://dbpedia.org/sparql

const querySources: IContextSources = [
  'https://dbpedia.org/sparql'
]

async function executeQuery (): Promise<void> {
  console.log('Running query with Comunica')
  console.log('Sources', querySources)
  console.log('Query', queryString)
  const bindingsStream = await engine.queryBindings(queryString, { sources: querySources })
  const bindingsArray = await bindingsStream.toArray()
  console.log('Bindings', bindingsArray)
}

function executeQueryOnPageLoad (): void {
  executeQuery()
    .then(() => { console.log('Finished') })
    .catch((reason) => { console.log(reason) })
}

document.addEventListener('DOMContentLoaded', executeQueryOnPageLoad)
