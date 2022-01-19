import React from 'react'

// Components
import Footer from './footer'
import Header from './header'

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout