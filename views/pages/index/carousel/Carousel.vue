<script lang="ts" setup>
import { getBannerList } from '@/application/bannerService'

const { width: windowWidth } = useWindowSize()

const swiperSettings = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ['100%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
}

const onClick = async (url: string) => {
  if (url) {
    await navigateTo(url, { external: true })
  }
}

const { data: bannerList } = await useAsyncData('bannerList', getBannerList)
</script>

<template>
  <VContainer v-if="(bannerList || []).length > 0">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
      :slides-per-view="1"
      loop
      effect="creative"
      :autoplay="swiperSettings.autoplay"
      :creative-effect="swiperSettings.creativeEffect"
      :pagination="{ clickable: true }"
      :style="windowWidth > 1000 ? 'min-height: 23vh' : 'min-height: 7vh'"
    >
      <SwiperSlide
        v-for="(image, i) in bannerList"
        :key="i"
      >
        <div class="image-container">
          <img
            :src="image.file.path"
            @click="onClick(image.url)"
          >
        </div>
      </SwiperSlide>
    </Swiper>
  </VContainer>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto;
}
</style>
