import type { Link } from '@/interfaces'

const companyLinks: Link[] = [
  {
    title: 'О компании',
    page: '/about',
  },
  {
    title: 'Где купить?',
    page: '/distribution',
  },
  {
    title: 'Сотрудничество',
    page: '/partnership',
  },
]

const infoLinks: Link[] = [
  {
    title: 'Новости',
    page: '/news',
  },
  {
    title: 'Акции',
    page: '/action',
  },
]

export { companyLinks, infoLinks }
