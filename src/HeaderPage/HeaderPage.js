import { Link } from "react-router-dom";


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
    
    const menu_items = () => {
      return (
         <div className={'menu'} data-test-id={'menu'}>
           {MENU.map(({id, title, path}) => (
             <Link key={id} to={`${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
               <span>{title}</span>
             </Link>
           ))}
         </div>
      )
    }

function HeaderPage() {

    
    return (
      <div className={`header`} data-test-id={'header'}>
          <div className={'header-nav'}>
              <Link to={'/'} className={'header-nav-logo'} data-test-id={'header-logo-link'}>CleverShop</Link>
          </div>
          <div>
            {menu_items}
          </div>

      </div>
    );
  }
  
  export default HeaderPage;

  