import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Stairs from '../../components/Stairs'
import './BlogLayout.scss'

function BlogLayout() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || ''

    const onSearchChange = (e) => {
        const value = e.target.value
        if (value) params.set('q', value)
        else params.delete('q')
        const search = params.toString() ? `?${params.toString()}` : ''
        navigate({ pathname: location.pathname, search }, { replace: true })
    }

    return (
        <Stairs color="var(--bg-color)">
            <section id="blog-section">
                <div className="container">
                    <div id="blog-top">
                        <Link id='blog-link' to="/blog"><h2>Blogs</h2></Link>

                        <div id="search-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-metatip="true"><path fill="currentColor" fill-rule="evenodd" d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z" clip-rule="evenodd"></path></svg>
                            <input
                                className="search-input"
                                type="search"
                                placeholder="Search posts..."
                                value={q}
                                onChange={onSearchChange}
                                aria-label="Search posts"
                            />
                        </div>
                    </div>

                    <div id="blog-bottom">
                        <div className="blog-inner">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </Stairs>
    )
}

export default BlogLayout
