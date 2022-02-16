import { Link } from 'react-router-dom';
import Instagram from '../Instagram.svg'
const MENU = [
    {
        id: 1,
        title: 'Abouts us',
        path: '/about'
    },

    {
        id: 2,
        title: 'Women',
        path: '/women'
    },

    {
        id: 3,
        title: 'Men',
        path: '/men'
    },

    {
        id: 4,
        title: 'Beauty',
        path: '/beauty'
    },

    {
        id: 5,
        title: 'Accessories',
        path: '/accessories'
    },

    {
        id: 6,
        title: 'Blog',
        path: '/blog'
    },

    {
        id: 7,
        title: 'Contact',
        path: '/contact'
    }

]

function HeaderPage() {

    
    return (
        
        <div className={`header`} data-test-id={'header'}>
            <div className={'header-topBar'}>
                <div className={'header-topBar__wrapper'}>
                    <div className={'header-topBar__phone'}>

                    </div>
                    <div className={'header-topBar__location'}></div>
                    <div className={'header-topBar__time'}></div>
                </div>
                <div className={'header-topBar__icons'}>
                  <div>Facebook
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.0667 7.03693C13.0667 3.6652 10.3513 0.93335 6.99999 0.93335C3.64864 0.93335 0.933319 3.6652 0.933319 7.03693C0.933319 10.0833 3.15181 12.6084 6.05207 13.0667V8.80131H4.51094V7.03693H6.05207V5.69218C6.05207 4.16259 6.95718 3.31768 8.34346 3.31768C9.00737 3.31768 9.70161 3.4368 9.70161 3.4368V4.93809H8.93643C8.18299 4.93809 7.9479 5.40865 7.9479 5.89128V7.03693H9.63042L9.36134 8.80131H7.9479V13.0667C10.8482 12.6084 13.0667 10.0833 13.0667 7.03693Z" fill="white"/>
                      </svg>
                  </div>
                </div>
            </div>
            <div className="header__wrapper">
                <div className={'header-nav'}>
                    <Link to={'/'} className={'header-nav-logo'} data-test-id={'header-logo-link'}>CleverShop</Link>
                </div>
                <div className={'menu'} data-test-id={'menu'}>
                    {MENU.map(({id, path, title}) => (
                        <Link key={id} to={`${path}`} className={'menu-item'} data-test-id={`menu-link-${path}`}>
                            <span>{title}</span>
                        </Link>
                    ))}
                </div>
                <div className={'header-icons'}>
                        
                </div>
            </div>
        </div>
    );
  }
  
  export default HeaderPage;

  