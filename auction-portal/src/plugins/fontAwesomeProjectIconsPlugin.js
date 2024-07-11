// icons:
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faGavel, faSpinner, faShoppingBasket, faPlus, faImage, faEdit, faTag, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faCartPlus, faGavel, faSpinner, faShoppingBasket, faPlus, faImage, faEdit, faTag, faSearch)
// end icons;

export default {
    install(app) {
        app.component('fa-icon', FontAwesomeIcon)
    }
}