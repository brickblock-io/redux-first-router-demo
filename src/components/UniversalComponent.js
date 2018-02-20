import React from 'react'
import universal from 'react-universal-component'

import ErrorComponent from './Error'
import NotFound from '../pages/NotFound'
import Loading from './Loading'

const options = Object.freeze({
  minDelay: 500,
  loading: Loading,
  error: ErrorComponent,
  onError: error => console.error(`UniversalComponent errored:`, error) // eslint-disable-line no-console
})

// const UniversalComponent = universal(() => import(`../pages/Home.js`), options)

const components = {
  Admin: universal(() => import('../pages/Admin'), options),
  Home: universal(() => import('../pages/Home'), options),
  List: universal(() => import('../pages/List'), options),
  Login: universal(() => import('../pages/Login'), options),
  Video: universal(() => import('../pages/Video'), options)
}

const UniversalComponent = ({ isLoading, page }) => {
  const Component = components[page] || NotFound
  return <Component isLoading={isLoading} />
}

export default UniversalComponent
