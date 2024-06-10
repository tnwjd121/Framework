import React from 'react'
import AddColorCustom from './components/AddColorCustom'
import ColorListContextHook from './components/ColorListContextHook'

export default function AppContext() {
  return (
    <>
      <AddColorCustom/>
      <ColorListContextHook/>
    </>
  )
}
