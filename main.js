import './global.css'
import './mixins.css'
import './reset.css'
import './style.css'
import './dialog.css'
import {instrumentModals} from './modal'
import {instrumentTabs} from './tabs'
import {instrumentCarousel} from './carousel'
import {instrumentFilter} from './filters'

instrumentFilter()
instrumentTabs()
instrumentModals()
instrumentCarousel()
