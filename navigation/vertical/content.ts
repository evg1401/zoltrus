import { useMenuStore } from '@/store'

const appStore = useMenuStore()
const { getDynamicMainMenu } = storeToRefs(appStore)

export default computed(() => [
  { heading: 'Контент-блок' },
  {
    title: 'Создать контент-блок',
    icon: { icon: 'tabler-plus' },
    to: 'admin-block-create',
    action: 'manage',
    subject: 'all',
  },
  ...getDynamicMainMenu.value,

  // {
  //   title: 'Товары',

  //   // icon: { icon: 'tabler-plus' },
  //   action: 'manage',
  //   subject: 'all',
  //   children: [
  //     {
  //       title: 'Просмотр',
  //       to: 'admin-product',
  //     },
  //   ],
  // },
])
