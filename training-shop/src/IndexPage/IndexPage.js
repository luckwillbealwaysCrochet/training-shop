import BlogPage from "../BlogPage/BlogPage";
import ContactsPage from "../Contacts/Contacts";
import BijouteriePage from "../Products/BijouteriePage/BijouteriePage";
import MenClothesPage from "../Products/MenClothesPage/MenClothesPage";
import WomenClothesPage from "../Products/WomenClothesPage/WomenClothesPage";

function IndexPage() {
    return (
      <div>
        <WomenClothesPage/>
        <MenClothesPage/>
        <BijouteriePage/>
        <BlogPage/>
        <ContactsPage/>
      </div>
    );
  }
  
  export default IndexPage;