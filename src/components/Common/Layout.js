import React from 'react';
import Header from './Header';
import PageBody from './PageBody';

const Layout = () => {
    return (  
            <div className="container-scroller">
                <Header/>
                <PageBody/>                
            </div>  
        )
}
  
export default Layout;