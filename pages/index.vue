<script lang="ts" setup>
import AvailableProducts from '@/views/pages/index/catalog/AvailableProducts.vue'
import Carousel from '@/views/pages/index/carousel/Carousel.vue'
import Support from '@/views/pages/index/support/Support.vue'
import Request from '@/views/pages/index/request/Request.vue'
</script>

<template>
  <div>
    <Carousel />
    <AvailableProducts class="mb-3" />
    <Support />
    <Request />
  </div>
</template>
