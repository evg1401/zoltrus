import admin from './admin'
import content from './content'
import catalog from './catalog'

import type { VerticalNavItems } from '@layouts/types'

export default computed(() => [...admin, ...content.value, ...catalog]) as unknown as VerticalNavItems
