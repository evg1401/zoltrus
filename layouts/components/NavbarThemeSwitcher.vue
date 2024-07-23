<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@layouts/types'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'system',
    title: 'Системная',
    icon: 'tabler-device-laptop',
  },
  {
    name: 'light',
    title: 'Светлая',
    icon: 'tabler-sun-high',
  },
  {
    name: 'dark',
    title: 'Тёмная',
    icon: 'tabler-moon',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
