import React from 'react'
import styled from 'styled-components'
import * as store from '../../store'
import { ChainPreset } from './ChainPreset'

const Wrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  max-width: 500px;
`

export const ChainPresets: React.FC<{
  readonly presets: ReadonlyArray<store.ChainPreset>;
}> = ({ presets }) => {
  const children = presets.map((preset) => (
    <ChainPreset key={preset.id} preset={preset} />
  ))
  return <Wrapper>{children}</Wrapper>
}
