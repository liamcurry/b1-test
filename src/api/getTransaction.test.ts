import { getInfo } from './getInfo'
import { mockFetchJson } from './testUtils'
import { ResultType } from '../coreTypes'

const serverUrl = new URL('https://api.eosnewyork.io')

describe('getTransaction', () => {
  it('fetches with the correct URL', async () => {
    // TODO
  })

  it('successfully fetches transactions', async () => {
    // TODO
  })

  it('allows for requests to be aborted', async () => {
    // TODO
  })

  it('fails if CORS is not allowed', async () => {
    // TODO
  })

  it('fails if a bad status is returned', async () => {
    // TODO
  })

  it('fails if invalid JSON is returned', async () => {
    // TODO
  })

  it('fails if JSON is in an unexpected format', async () => {
    // TODO
  })
})
