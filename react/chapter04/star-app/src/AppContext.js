import React from 'react'

import ColorListContextHook from './components/ColorListContextHook'
import AddColorWithContext from './components/AddColorWithContext'

export default function AppContext() {
  return (
    <>
      <AddColorWithContext/>
      <ColorListContextHook/>
    </>
  )
}
