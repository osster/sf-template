import IndexPage from '@/pages/IndexPage'
import InformationsPage from '@/pages/InformationsPage'
import ContactsPage from '@/pages/ContactsPage'
import PortfolioPage from '@/pages/PortfolioPage'
import SectionPage from '@/pages/SectionPage'
import FilterPage from '@/pages/FilterPage'

export default [
  { path: '/', component: IndexPage },
  { path: '/informations', component: InformationsPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/s/:alias', component: SectionPage },
  { path: '/f/:alias', component: FilterPage },
]
