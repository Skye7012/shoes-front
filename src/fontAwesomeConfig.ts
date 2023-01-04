/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
export const configureFontAwesome = () => library.add(faUser, faCartShopping);
