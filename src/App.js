import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Head from './components/Head'
import Body from './components/Body'
import store from './utils/store'
import VideoContainer from './components/VideoContainer'
import SearchedVideoContainer from './components/SearchedVideoContainer'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <VideoContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />,
      },
      {
        path: '/search',
        element: <SearchedVideoContainer />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  )
}

export default App
