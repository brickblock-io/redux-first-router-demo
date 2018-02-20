import React from 'react'
import universal from 'react-universal-component'

import NotFound from './NotFound'
import Err from './Error'
import Loading from './Loading'

const options = Object.freeze({
  minDelay: 500,
  loading: Loading,
  error: Err
})

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

/*
 * This works, but webpack then chunks incorrectly => https://github.com/faceyspacey/react-universal-component/issues/28
 * const UniversalComponent = universal(({ page }) => import(`../pages/${page}`), {
 *   minDelay: 500,
 *   loading: Loading,
 *   error: Err
 * })
 */

export default UniversalComponent
