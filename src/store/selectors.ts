import { RpcError, Info, Block, ChainId, BlockNum } from '../api'
import { RemoteData, getData, RemoteDataType } from '../coreTypes'
import { chainPresets } from './constants'
import {
  State,
  ChainPreset,
  Theme,
  Chain,
  ChainError,
  ChainData,
} from './state'

export function getRpcHostnameInput(
  state: Readonly<State>,
): Readonly<string> | void {
  return state.rpcHostnameInput
}

export function getChain(state: Readonly<State>): Readonly<Chain> {
  return state.chain
}

export function getChainData(
  state: Readonly<State>,
): Readonly<ChainData> | void {
  const chain = getChain(state)
  if (chain) {
    return getData(chain)
  }
}

export function getChainId(state: Readonly<State>): Readonly<ChainId> | void {
  const chainData = getChainData(state)
  if (chainData) {
    return chainData.chainId
  }
}

export function getRpcUrl(state: Readonly<State>): Readonly<URL> | void {
  const chainData = getChainData(state)
  if (chainData) {
    return chainData.rpcUrl
  }
}

// export function getInfo(
//   state: Readonly<State>,
// ): Readonly<RemoteData<Info, RpcError>> | void{
//   return state.info
// }

// export function getInfoData(state: Readonly<State>): Readonly<Info> | void {
//   const info = getInfo(state)
//   if (info) {
//     return getData(info)
//   }
// }

export function getBlocks(
  state: Readonly<State>,
): Readonly<{
  readonly [blockNum: number]: RemoteData<Block, RpcError>;
}> | void {
  const chain = getChain(state)
  if (chain.type === RemoteDataType.Success) {
    return chain.data.blocks
  }
}

export function getBlock(
  state: Readonly<State>,
  blockNum: Readonly<BlockNum>,
): Readonly<RemoteData<Block, RpcError>> | void {
  const blocks = getBlocks(state)
  if (blocks) {
    return blocks[(blockNum as unknown) as number]
  }
}

// export function getBlockData(
//   state: Readonly<State>,
//   blockNum: Readonly<number>,
// ): Readonly<Block> | void {
//   const block = getBlock(state, blockNum)
//   if (block) {
//     return getData(block)
//   }
// }

// export function getHasBlock(
//   state: Readonly<State>,
//   blockNum: Readonly<number>,
// ): Readonly<boolean> {
//   return !!getBlock(state, blockNum)
// }

// export function getBlockCount(state: Readonly<State>): Readonly<number> {
//   return Object.keys(state.blocks).length
// }

export function getChainPreset(
  state: Readonly<State>,
): Readonly<ChainPreset> | void {
  const chainId = getChainId(state)
  if (chainId) {
    for (let i = chainPresets.length; i--; ) {
      const chainPreset = chainPresets[i]
      if (chainPreset.id === chainId) {
        return chainPreset
      }
    }
  }
}

export function getTheme(state: Readonly<State>): Readonly<Theme> {
  return state.theme
}
