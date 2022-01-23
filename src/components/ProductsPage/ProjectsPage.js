import Header from '../Common/Header';
import LeftSidebar from '../Common/LeftSidebar';
import ProductsContent from './components/ProductsContent';
import Footer from '../Common/Footer';

const ProjectsPage = () => {
    return (  
            <div className="container-scroller">
                <Header/>
                <div className="container-fluid page-body-wrapper">
	              	<LeftSidebar/>
	              	<div className="main-panel">
			            <ProductsContent/>
			            <Footer/>
					</div> 
	            </div>                
            </div>  
        )
}
  
export default ProjectsPage;