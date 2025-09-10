import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import Layout from './Layout.jsx'

import App from './App.jsx'
import Contact from './routes/contact/Contact.jsx'
import NotFound from './routes/notFound/NotFound.jsx'
import BlogLayout from './routes/blog/BlogLayout.jsx'
import BlogHome from './routes/blog/BlogHome.jsx'
import BlogPost from './routes/blog/blogPost/BlogPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <BlogLayout />,
        children: [
          {
            index: '/',
            element: <BlogHome />
          },
          {
            path: ':postId',
            element: <BlogPost />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
