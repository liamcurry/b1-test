import { RpcResult, Info, Block, ChainId, BlockNum } from '../api'
import {
  ActionType,
  IncrementHeadBlockNumAction,
  GetInfoAction,
  SetInfoAction,
  GetBlockAction,
  SetBlockAction,
  DelBlockAction,
  SetAutoplayAction,
  SetThemeAction,
} from './action'
import { Theme } from './state'

export const incrementBlockNumAction = (): Readonly<
  IncrementHeadBlockNumAction
> => ({
  type: ActionType.IncrementHeadBlockNum,
})

export const setAutoplayAction = (
  autoplay: boolean,
): Readonly<SetAutoplayAction> => ({
  type: ActionType.SetAutoplay,
  autoplay,
})

export const getInfoAction = (
  hostname: string,
  chainId?: ChainId | void,
): Readonly<GetInfoAction> => ({
  type: ActionType.GetInfo,
  hostname,
  chainId,
})

export const setInfoAction = (
  info: Readonly<RpcResult<Info>>,
): Readonly<SetInfoAction> => ({
  type: ActionType.SetInfo,
  info,
})

export const getBlockAction = (
  blockNum: Readonly<BlockNum>,
): Readonly<GetBlockAction> => ({
  type: ActionType.GetBlock,
  blockNum,
})

export const setBlockAction = (
  blockNum: Readonly<BlockNum>,
  block: Readonly<RpcResult<Block>>,
): Readonly<SetBlockAction> => ({
  type: ActionType.SetBlock,
  blockNum,
  block,
})

export const delBlockAction = (
  blockNum: Readonly<BlockNum>,
): Readonly<DelBlockAction> => ({
  type: ActionType.DelBlock,
  blockNum,
})

export const setThemeAction = (
  theme: Readonly<Theme>,
): Readonly<SetThemeAction> => ({
  type: ActionType.SetTheme,
  theme,
})
