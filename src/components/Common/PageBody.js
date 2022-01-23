import React from 'react';
import LeftSidebar from './LeftSidebar';
import PageContent from './PageContent';
  
const PageBody = () => {
        return (  
            <div className="container-fluid page-body-wrapper">
              	<LeftSidebar/>
              	<PageContent/>
            </div>  
        )
}  
  
export default PageBody;