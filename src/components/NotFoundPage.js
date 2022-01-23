import {Link} from 'react-router-dom';

const NotFoundPage = () => {
	return(
		<>
		<div className="container">
		    <div className="row">
		        <div className="col-md-12 mt-5">
		            <div className="error-template">
		                <h1>Oops!</h1>
		                <h2>404 Not Found</h2>
		                <div className="error-details">
		                    Sorry, an error has occured, Requested page not found!
		                </div>
		                <div className="error-actions mt-5">
		                    <Link to="/" className="btn btn-primary"><span className="glyphicon glyphicon-home"></span>
		                        Back </Link>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		</>
		)
}

export default NotFoundPage;