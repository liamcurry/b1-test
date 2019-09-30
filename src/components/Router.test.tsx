import {
  RouteType,
  getRouteTemplate,
  getRouteString,
  home,
  chain,
  block,
} from './Router'

describe('Router', () => {
  it('generates the expected home route template', () => {
    expect(getRouteTemplate(RouteType.Home)).toEqual('/')
  })

  it('generates the expected chain route template', () => {
    expect(getRouteTemplate(RouteType.Chain)).toEqual('/:hostname')
  })

  it('generates the expected block route template', () => {
    expect(getRouteTemplate(RouteType.Block)).toEqual('/:hostname/:blockNum')
  })

  it('generates home route params', () => {
    expect(home()).toEqual({
      type: RouteType.Home,
    })
  })

  it('generates chain route params', () => {
    expect(chain('api.eosnewyork.io')).toEqual({
      type: RouteType.Chain,
      hostname: 'api.eosnewyork.io',
    })
  })

  it('generates block route params', () => {
    expect(block('api.eosnewyork.io', 1)).toEqual({
      type: RouteType.Block,
      hostname: 'api.eosnewyork.io',
      blockNum: 1,
    })
  })

  it('generates the expected home route string', () => {
    expect(getRouteString(home())).toEqual('/')
  })

  it('generates the expected chain route string', () => {
    expect(getRouteString(chain('api.eosnewyork.io'))).toEqual(
      '/api.eosnewyork.io',
    )
  })

  it('generates the expected block route string', () => {
    expect(getRouteString(block('api.eosnewyork.io', 1))).toEqual(
      '/api.eosnewyork.io/1',
    )
  })
})
