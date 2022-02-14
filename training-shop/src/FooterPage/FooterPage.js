import { Link } from "react-router-dom";

function FooterPage() {
    return (
      <div className="footer" data-test-id="footer">
            <Link to={'about'}>About us</Link>
            <Link to={'clothes'}></Link>
            <Link to={'products'}></Link>
            <Link to={'blog'}>Blog</Link>
            <Link to={'contacts'}>Contact</Link>
      </div>
    );
  }
  
  export default FooterPage;