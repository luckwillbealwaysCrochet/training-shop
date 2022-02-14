import { Link } from "react-router-dom";

function HeaderPage() {
    return (
      <div className={`header`} data-test-id={`header`}>
          <h1>
            <Link to={'/'}>CleverShop</Link>
          </h1>
          <div>
            <Link to={'about'}>About us</Link>
            <Link to={'clothes'}></Link>
            <Link to={'products'}></Link>
            <Link to={'blog'}>Blog</Link>
            <Link to={'contacts'}>Contact</Link>
          </div>
      </div>
    );
  }
  
  export default HeaderPage;