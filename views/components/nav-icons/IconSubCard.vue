<script lang="ts" setup>
import type { StyleValue } from 'vue'

interface Props {
  id: string
  isHovering?: boolean | undefined
  style?: StyleValue | undefined
  color?: string | undefined
}

const props = defineProps<Props>()
const { id, isHovering, style } = toRefs(props)
const color: Ref<string> = ref(props.color || '#3D4143')

const hover = () => {
  const svgElement = document.getElementById(id.value)
  const paths = svgElement?.querySelectorAll('path')

  if (!paths) {
    return
  }

  for (const path of paths) {
    path.setAttribute('stroke', isHovering.value ? '#FF6D04' : color.value)
  }
}

onBeforeMount(() => {
  if (props.color) {
    hover()
  }
})

watch(isHovering, hover)
</script>

<template>
  <svg
    v-if="id === 'charger'"
    id="charger"
    width="145"
    height="86"
    viewBox="0 0 145 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M6.14354 0.899902H138.256C141.019 0.899902 143.4 3.18592 143.4 6.04345V70.433C143.4 73.1953 141.114 75.5765 138.256 75.5765H6.14354C3.38126 75.5765 1 73.2905 1 70.433V5.9482C1 3.18592 3.28601 0.899902 6.14354 0.899902Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6209 4.99573H133.685C136.161 4.99573 138.257 6.99599 138.257 9.56776V66.9087C138.257 69.3853 136.257 71.4808 133.685 71.4808H10.6209C8.14436 71.4808 6.04883 69.4805 6.04883 66.9087V9.56776C6.14408 6.99599 8.14436 4.99573 10.6209 4.99573Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.4265 54.4686C50.2386 52.6596 55.9157 44.0495 54.1067 35.2375C52.2976 26.4255 43.6876 20.7484 34.8755 22.5574C26.0635 24.3664 20.3864 32.9765 22.1954 41.7885C24.0044 50.6005 32.6145 56.2776 41.4265 54.4686Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.147 26.7129C44.7193 26.7129 49.9581 32.0469 49.9581 38.524C49.9581 45.0963 44.6241 50.3351 38.147 50.3351C31.5747 50.3351 26.3359 45.001 26.3359 38.524C26.3359 32.0469 31.5747 26.7129 38.147 26.7129Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M63.2935 27.4749H102.727C103.585 27.4749 104.251 28.1416 104.251 28.9989V48.7158C104.251 49.573 103.585 50.2398 102.727 50.2398H63.2935C62.4363 50.2398 61.7695 49.573 61.7695 48.7158V29.0941C61.7695 28.2369 62.4363 27.4749 63.2935 27.4749Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M110.538 27.4749H122.254C122.731 27.4749 123.207 27.8559 123.207 28.4274V49.4778C123.207 49.954 122.826 50.4303 122.254 50.4303H110.538C110.062 50.4303 109.586 50.0493 109.586 49.4778V28.4274C109.586 27.9511 109.967 27.4749 110.538 27.4749Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.6242 29.761C40.3387 29.761 41.6722 31.0945 41.6722 32.809C41.6722 34.5235 40.3387 35.857 38.6242 35.857C36.9097 35.857 35.5762 34.5235 35.5762 32.809C35.5762 31.1897 37.0049 29.761 38.6242 29.761Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.7707 34.5234C75.4852 34.5234 76.8187 36.5237 76.8187 39.0002C76.8187 41.4767 75.4852 43.477 73.7707 43.477C72.0562 43.477 70.7227 41.4767 70.7227 39.0002C70.7227 36.5237 72.0562 34.5234 73.7707 34.5234Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M83.0109 34.5234C84.7254 34.5234 86.0589 36.5237 86.0589 39.0002C86.0589 41.4767 84.7254 43.477 83.0109 43.477C81.2964 43.477 79.9629 41.4767 79.9629 39.0002C79.9629 36.5237 81.2964 34.5234 83.0109 34.5234Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M92.2492 34.5234C93.9637 34.5234 95.2972 36.5237 95.2972 39.0002C95.2972 41.4767 93.9637 43.477 92.2492 43.477C90.5347 43.477 89.2012 41.4767 89.2012 39.0002C89.2012 36.5237 90.6299 34.5234 92.2492 34.5234Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.9531 75.4813H38.7183V81.5774C38.7183 83.3871 37.1943 84.9112 35.3846 84.9112H17.2869C15.4771 84.9112 13.9531 83.3871 13.9531 81.5774V75.4813Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M104.824 75.4813H129.589V81.5774C129.589 83.3871 128.065 84.9112 126.256 84.9112H108.158C106.348 84.9112 104.824 83.3871 104.824 81.5774V75.4813Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'compressor'"
    id="compressor"
    width="142"
    height="93"
    viewBox="0 0 142 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M1 69.6999L26.7 88.6999L49.5 81.8998V71.6999L74.7 62.8998C74.7 62.8998 77.5 61.3999 78.6 58.5999C83.1 47.2999 76.9 31.9999 67.2 25.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M90.4992 21.8999V30.9999L87.6992 31.7999V33.8999C90.5992 38.7999 91.5992 51.0999 86.9992 53.9999L79.1992 56.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.0996 57.3999L91.6996 64.0999V64.9999C91.6996 64.9999 93.1996 66.8999 95.1996 66.7999C97.1996 66.6999 97.3996 64.7999 97.3996 64.7999V61.4999L95.9996 60.3999H92.8996L92.6996 59.3999L90.7996 40.1999C90.0996 35.1999 88.6996 33.1999 87.5996 32.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.3992 26.3999C45.794 26.3999 52.5992 23.5793 52.5992 20.0999C52.5992 16.6205 45.794 13.7999 37.3992 13.7999C29.0045 13.7999 22.1992 16.6205 22.1992 20.0999C22.1992 23.5793 29.0045 26.3999 37.3992 26.3999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.4008 16.2999C42.4008 16.2999 46.5008 17.9999 46.5008 20.0999C46.5008 22.1999 42.4008 23.8999 37.4008 23.8999C32.4008 23.8999 28.3008 22.1999 28.3008 20.0999C28.3008 17.9999 32.4008 16.2999 37.4008 16.2999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.5 31.1998C52.5 34.6998 46 37.4998 37.7 37.4998C29.4 37.4998 22.5 34.6998 22.5 31.1998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5996 21.4999V31.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.6 20.1998L52.5 31.3998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 69.6998V53.1998C1 53.1998 1.00001 40.6998 6.70001 39.1998C12.4 37.6998 23.8 33.6998 23.8 33.6998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.5004 88.3999V66.9999C25.7004 57.5999 19.2004 37.8999 6.90039 39.1999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.6004 21.7999L9.90039 25.5999V32.2999L10.9004 33.1999V38.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.6004 25.0999L13.2004 27.4999L9.90039 25.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.2996 27.9999C21.5996 28.0999 13.5996 30.0999 13.5996 30.0999L12.0996 29.3999V31.8999L14.0996 32.9999L13.9996 37.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.5 32.5999L90.5 27.4999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.8 25.9999L56 28.0999L74.6 22.3999L74.5 25.9999L93.7 20.2999V8.6999L78.9 0.899902L60.9 6.1999V10.0999V11.8999L51 15.1999L51.1 17.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.1992 15.8998C51.2992 15.8998 55.8992 19.5998 56.1992 19.4998C59.8992 18.4998 72.3992 14.4998 72.3992 14.4998L75.3992 14.8998L93.6992 8.69983"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M90.8008 24.7999C148.401 30.0999 141.601 55.3999 107.801 70.5999C87.8008 79.5999 68.7008 86.5999 68.7008 86.5999C67.3008 87.6999 68.6008 92.1999 70.6008 91.3999L98.2008 80.8999C148.401 61.8999 163.101 25.7999 93.8008 20.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.9004 19.1998V28.0998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.5 15.2999V22.6999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61 18.0999V26.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66 16.2999V24.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.9004 14.0999V24.6999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.9004 4.09985L84.1004 12.0999V22.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75 2.69983L89.4 10.0998V21.0998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M71 15.1998V23.1998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.5996 5.09985L78.6996 13.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.3008 13.7999L61.0008 17.6999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.4004 12.4999L66.0004 16.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.9004 6.49988L75.0004 15.1999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.5 71.6999V46.1999L42 37.9999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.3997 57.6999C19.9997 57.4999 20.7997 58.2999 20.9997 59.2999C21.1997 60.2999 20.8996 61.2999 20.2996 61.4999C19.6996 61.6999 18.8997 60.8999 18.6997 59.8999C18.3997 58.8999 18.7997 57.8999 19.3997 57.6999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.20047 48.5998C6.80047 48.3998 7.60044 49.1998 7.80044 50.1998C8.10044 51.2998 7.70049 52.1998 7.10049 52.3998C6.50049 52.5998 5.70045 51.7998 5.50045 50.7998C5.20045 49.7998 5.60047 48.7998 6.20047 48.5998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.601 65.7999C7.201 65.5999 8.00098 66.3999 8.20098 67.3999C8.50098 68.4999 8.10097 69.3999 7.50097 69.5999C6.90097 69.7999 6.10099 68.9999 5.90099 67.9999C5.60099 66.9999 5.901 65.9999 6.601 65.7999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75.3008 84.1998L77.1008 88.3998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'cable'"
    id="cable"
    width="124"
    height="91"
    viewBox="0 0 124 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M32.9056 84.4589C47.4349 83.2473 57.7362 64.553 55.9142 42.704C54.0922 20.8551 40.8368 4.12518 26.3075 5.33681C11.7782 6.54843 1.47704 25.2427 3.29907 47.0917C5.1211 68.9407 18.3764 85.6705 32.9056 84.4589Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.4561 79.0778C45.0041 78.0314 53.9002 61.8802 52.3259 43.0032C50.7517 24.1261 39.3033 9.67151 26.7553 10.7179C14.2073 11.7644 5.31133 27.9156 6.88557 46.7926C8.45981 65.6697 19.9081 80.1243 32.4561 79.0778Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5508 46.4999C9.25076 30.5999 16.7508 16.9999 27.2508 16.0999C37.8508 15.1999 47.4508 27.3999 48.7508 43.2999C50.0508 59.1999 42.5508 72.7999 32.0508 73.6999C21.5508 74.5999 11.8508 62.3999 10.5508 46.4999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.4504 46.1999C13.3504 33.4999 19.3505 22.6999 27.7505 21.9999C36.1505 21.2999 43.8504 30.9999 44.8504 43.6999C45.9504 56.3999 39.9504 67.1999 31.5504 67.8999C23.1504 68.5999 15.5504 58.7999 14.4504 46.1999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.45 45.8998C16.65 35.6998 21.3499 27.0998 28.1499 26.4998C34.8499 25.8998 41.05 33.6998 41.85 43.8998C42.65 54.0998 37.9499 62.6998 31.1499 63.2998C24.4499 63.8998 18.35 56.0998 17.45 45.8998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.9495 45.5999C20.3495 38.3999 23.7495 32.1999 28.5495 31.7999C33.3495 31.3999 37.7495 36.8999 38.3495 44.1999C38.9495 51.3999 35.5495 57.5999 30.7495 57.9999C25.9495 58.3999 21.5495 52.8999 20.9495 45.5999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.5508 5.29988C31.1508 4.89988 42.9508 3.99988 43.3508 3.99988C43.4508 3.99988 43.5509 3.99988 43.7509 3.99988C57.6509 3.99988 70.0509 20.3999 71.7509 41.3999C73.5509 62.5999 64.0508 81.7999 50.0508 82.9999L34.1508 84.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.3492 59.7999L95.1492 21.0999L107.249 29.9999L81.4492 69.2999C65.1492 90.8999 39.7492 95.5999 20.4492 80.9999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103.25 3.3999L102.35 2.5999L103.55 0.899902C103.55 0.899902 109.05 0.999902 113.25 2.8999C117.45 4.7999 122.65 14.0999 122.65 14.0999L106.25 39.4999L103.85 39.2999L109.25 24.9999L117.15 14.4999L103.45 3.4999M90.45 27.3999L88.75 26.2999L91.45 19.5999L92.35 17.9999L93.95 15.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103.45 3.49988L93.1504 13.8999L104.95 24.2999L116.55 14.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M107.149 29.9999C106.849 29.2999 92.4492 18.7999 92.4492 18.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'jack'"
    id="jack"
    width="172"
    height="92"
    viewBox="0 0 172 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M122.304 67.494C126.472 61.9355 134.81 61.6377 140.865 66.9977C146.92 72.2585 148.409 80.9934 144.24 86.5519C140.071 92.1105 131.733 92.4082 125.678 87.0482C119.623 81.8867 118.035 73.0526 122.304 67.494Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M130.144 72.5562C132.626 71.2658 136.001 72.3577 137.49 75.0377C139.078 77.7177 138.284 80.894 135.703 82.1844C133.222 83.4748 129.847 82.3829 128.358 79.7029C126.869 77.1221 127.663 73.8466 130.144 72.5562Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M125.479 64.7148C126.967 63.7222 130.541 61.7371 133.419 61.5385C136.993 61.34 140.864 62.5311 144.04 65.3104C150.095 70.5712 151.584 79.306 147.415 84.8646C146.125 86.552 143.048 88.5372 141.162 89.232"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M152.479 44.9619C155.456 45.1604 158.633 46.3516 161.313 48.7338C167.368 53.9946 168.857 62.7294 164.688 68.288C160.916 73.251 153.868 73.9458 148.111 70.3724"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M150.891 43.9693C151.883 43.5723 152.975 43.3738 153.968 43.2745C157.541 43.076 161.412 44.2671 164.589 47.0464C170.643 52.3071 172.132 61.042 167.963 66.6006C166.673 68.288 163.596 70.2732 161.71 70.968"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.8837 21.8343C63.74 22.7277 67.7104 23.4225 67.7104 23.4225L139.674 59.156C139.674 59.156 142.552 60.6449 142.949 62.1338C143.346 63.6227 143.346 64.8138 143.346 64.8138M119.921 74.442L57.5859 56.9723C57.5859 56.9723 16.9887 46.9471 9.64343 44.4656C9.34566 44.3663 9.14706 44.267 8.94854 44.1678C4.28333 42.2818 2.19895 35.3337 2.19895 35.3337L1.00775 21.2388C1.00775 21.2388 0.511455 14.7869 7.45965 14.7869C11.6286 14.7869 32.5724 17.8639 48.6525 20.2462"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.77271 50.3221C7.95643 47.4435 12.2246 47.3443 15.4009 50.0243C18.5772 52.7043 19.3713 57.2702 17.1876 60.1488C15.0039 63.0273 10.7356 63.1266 7.55932 60.4466C4.383 57.7666 3.68825 53.2006 5.77271 50.3221Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.45898 48.8332C8.25306 48.3369 10.0397 47.3443 11.5286 47.2451C13.4146 47.1458 15.3998 47.7414 17.0873 49.2303C20.2636 52.0095 21.0576 56.4762 18.8739 59.3548C18.179 60.2481 16.591 61.2407 15.5984 61.6377"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.64353 44.8627V48.8331C9.64353 48.8331 8.75012 50.719 7.95604 51.6123C7.16196 52.5057 5.87156 56.4761 8.05528 58.1635C10.239 59.8509 11.8272 60.7442 13.5146 59.5531C15.202 58.362 17.1873 55.285 17.5843 52.9027C17.9814 50.5205 18.0806 46.9471 18.0806 46.9471"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.8432 42.8775C49.8432 42.8775 50.538 44.3664 54.7069 45.359C58.7765 46.3516 99.5724 57.3694 99.5724 57.3694C99.5724 57.3694 103.741 54.9872 100.168 52.3072C96.5946 49.6271 80.2167 43.076 80.2167 43.076C80.2167 43.076 77.4374 41.8849 75.9485 44.5649C74.4596 47.2449 71.3825 47.8405 69.0996 46.3516C66.8166 44.8627 58.4788 36.0285 58.4788 36.0285C58.4788 36.0285 54.9055 33.3485 52.424 33.7456C44.5824 33.8448 48.2551 38.9071 49.8432 42.8775Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M115.752 30.9664L132.031 35.4331V55.2851L115.752 47.245V30.9664Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M140.468 28.187L132.031 35.433V55.285L140.468 47.2449V28.187Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M140.468 37.716L149.203 41.8849V43.4731L150.494 44.0686C150.494 44.0686 158.335 47.0464 158.335 49.8257C158.335 52.605 158.335 62.0347 158.335 62.0347C158.335 62.0347 155.854 65.8066 153.571 66.3029C151.288 66.7992 150.295 66.7992 150.295 66.7992L154.762 61.6376L152.082 58.6599L144.935 65.9058M59.1747 9.02993C63.0458 9.32771 67.0162 9.62549 70.8874 9.92327L87.96 13.1988C98.5808 17.07 107.812 21.1396 116.944 25.4078M21.1582 15.8789V10.0225C21.1582 7.24325 22.2501 6.74695 25.5257 6.74695C27.3123 6.74695 36.6428 7.44177 46.3702 8.13659"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.998 25.9042C57.6854 23.6212 61.0602 23.5219 63.5417 25.7057C66.0232 27.7901 66.6188 31.3635 64.9314 33.6464C63.244 35.9294 59.8692 36.0287 57.3877 33.845C54.9062 31.6613 54.2113 28.1872 55.998 25.9042Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.0061 28.7826L43.8891 14.5885C43.3928 13.9929 43.3927 13.7944 43.2934 13.3973C43.0949 12.3055 42.8964 10.0225 44.1868 9.22842C45.9734 8.13656 59.8699 1.28763 59.8699 1.28763C59.8699 1.28763 63.0461 0.295039 65.0313 1.48616L83.3944 12.107"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.4635 24.2167L50.9346 15.1841C48.6516 13.0004 51.6294 11.2137 54.508 11.6107C55.0043 9.12922 57.1879 9.02996 59.1731 9.52626C59.1731 9.52626 59.1731 9.32774 59.1731 9.02996C59.3716 6.94551 61.4561 7.24328 63.1435 7.34254C63.1435 7.34254 63.7392 5.05957 65.7244 5.05957C67.7096 5.05957 74.757 8.93071 74.757 8.93071L78.8266 11.5115"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.7849 24.5146L45.5759 12.7027C45.5759 12.7027 42.5981 10.0226 44.9804 8.93079"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.5959 9.52612C69.5959 9.52612 66.6182 7.8387 65.8241 7.64018C63.7396 7.24314 63.3426 7.8387 62.4492 9.3276"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M118.433 20.8419C122.205 19.0552 129.947 18.5589 135.704 19.8493C141.461 21.0404 143.049 23.5219 139.277 25.3086C135.505 27.0953 127.763 27.5916 122.006 26.3012C116.249 25.1101 114.661 22.6286 118.433 20.8419Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M141.262 22.9263C141.46 24.5144 140.766 26.0033 139.277 27.393C135.505 30.7678 127.762 31.5619 122.005 29.2789C118.333 27.79 116.348 25.3085 116.348 22.9263"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'tool-kits'"
    id="tool-kits"
    width="105"
    height="91"
    viewBox="0 0 105 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M11.7028 20.7C43.5028 20.7 61.6027 20.7 93.4027 20.7C96.9027 20.7 99.8027 23.4999 99.8027 26.8999V79.7C99.8027 83.1 96.9027 85.8999 93.4027 85.8999H11.7028C8.20276 85.8999 5.30273 83.1 5.30273 79.7V26.8999C5.30273 23.4999 8.10276 20.7 11.7028 20.7Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.50215 89.8999H96.6021C100.802 89.8999 104.202 86.4999 104.202 82.2999V20.3999C104.202 16.1999 100.802 12.7999 96.6021 12.7999H80.1021V7.69991C80.1021 3.89991 77.0022 0.899902 73.3022 0.899902H31.9022C28.1022 0.899902 25.1021 3.99991 25.1021 7.69991V12.7999H8.60213C4.40213 12.7999 1.00215 16.1999 1.00215 20.3999V82.1999C0.902151 86.3999 4.30215 89.8999 8.50215 89.8999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M81.9027 68.3999C84.1671 68.3999 86.0027 66.5643 86.0027 64.2999C86.0027 62.0356 84.1671 60.2 81.9027 60.2C79.6383 60.2 77.8027 62.0356 77.8027 64.2999C77.8027 66.5643 79.6383 68.3999 81.9027 68.3999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.1016 53.5999C26.5016 53.5999 30.3016 56.1999 31.9016 59.9999H72.1016V60.0999C73.7016 56.2999 77.5016 53.5999 81.9016 53.5999C87.8016 53.5999 92.6016 58.3999 92.6016 64.2999C92.6016 70.1999 87.8016 74.9999 81.9016 74.9999C77.5016 74.9999 73.7016 72.2999 72.1016 68.4999H32.0016C30.4016 72.2999 26.6017 74.9999 22.2017 74.9999C18.0017 74.9999 14.4016 72.5999 12.6016 68.9999H23.5016L26.2017 64.2999L23.4016 59.3999H12.7017C14.4017 55.9999 17.9016 53.5999 22.1016 53.5999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.9031 5.3999H68.2031C70.5031 5.3999 72.4031 7.2999 72.4031 9.5999C72.4031 11.8999 70.5031 13.7999 68.2031 13.7999H36.9031C34.6031 13.7999 32.7031 11.8999 32.7031 9.5999C32.7031 7.2999 34.6031 5.3999 36.9031 5.3999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.2017 42.2999C25.466 42.2999 27.3016 40.4642 27.3016 38.1999C27.3016 35.9355 25.466 34.0999 23.2017 34.0999C20.9373 34.0999 19.1016 35.9355 19.1016 38.1999C19.1016 40.4642 20.9373 42.2999 23.2017 42.2999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M83.002 27.4999C78.602 27.4999 74.802 30.0999 73.202 33.8999H33.002V33.9999C31.402 30.1999 27.602 27.4999 23.202 27.4999C17.302 27.4999 12.502 32.2999 12.502 38.1999C12.502 44.0999 17.302 48.8999 23.202 48.8999C27.602 48.8999 31.402 46.1999 33.002 42.3999H73.1019C74.7019 46.1999 78.502 48.8999 82.902 48.8999C87.102 48.8999 90.702 46.4999 92.502 42.8999H81.6019L78.902 38.1999L81.702 33.2999H92.402C90.802 29.7999 87.202 27.4999 83.002 27.4999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'garage-accessories'"
    id="garage-accessories"
    width="139"
    height="90"
    viewBox="0 0 139 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M70.3005 73.5999C68.2005 74.3999 67.1004 76.7999 67.9004 78.8999C68.7004 80.9999 71.1004 82.0999 73.2004 81.2999C75.3004 80.4999 76.4003 78.0999 75.6003 75.9999C74.8003 73.8999 72.5005 72.7999 70.3005 73.5999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M123.801 45.9999C119.701 47.5999 117.101 51.3999 117.001 55.4999L79.5011 69.9999V70.0999C76.6011 67.0999 72.1011 65.9999 68.0011 67.5999C62.5011 69.6999 59.701 75.8999 61.901 81.3999C64.001 86.8999 70.201 89.6999 75.701 87.4999C79.801 85.8999 82.4011 81.9999 82.5011 77.8999L119.901 63.4999C122.801 66.4999 127.301 67.5999 131.401 65.9999C135.301 64.4999 137.801 60.8999 138.201 56.9999L128.001 60.8999L123.801 57.4999L124.701 51.8999L134.701 47.9999C131.801 45.3999 127.601 44.4999 123.801 45.9999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 69.7998L26.7 88.7998L49.5 81.9998V71.7998L74.7 62.9998C74.7 62.9998 77.4999 61.4998 78.5999 58.6998C83.0999 47.3998 76.9 32.0998 67.2 25.1998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M90.4993 21.8999V30.9999L87.6992 31.7999V33.8999C90.5992 38.7999 91.5993 51.0999 86.9993 53.9999L79.1992 56.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M97.3997 62.7998V61.5998L95.9998 60.4998H92.8997L92.6997 59.4998L90.7998 40.2998C90.0998 35.2998 88.6996 33.2998 87.5996 32.1998M79.0996 57.3998L91.6997 64.0998V64.9998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.3992 13.7998C45.7992 13.7998 52.5992 16.5998 52.5992 20.0998C52.5992 23.5998 45.7992 26.3998 37.3992 26.3998C28.9992 26.3998 22.1992 23.5998 22.1992 20.0998C22.1992 16.5998 28.9992 13.7998 37.3992 13.7998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.4008 16.2998C42.4008 16.2998 46.5009 17.9998 46.5009 20.0998C46.5009 22.1998 42.4008 23.8998 37.4008 23.8998C32.4008 23.8998 28.3008 22.1998 28.3008 20.0998C28.3008 17.9998 32.4008 16.2998 37.4008 16.2998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.5 31.2998C52.5 34.7998 46 37.5998 37.7 37.5998C29.4 37.5998 22.5 34.7998 22.5 31.2998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 21.4999V31.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.6 20.1998L52.5 31.3998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 69.7998V53.2998C1 53.2998 0.999951 40.7998 6.69995 39.2998C12.4 37.7998 23.7999 33.7998 23.7999 33.7998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.5005 88.3999V66.8999C25.7005 57.4999 19.2004 37.7999 6.90039 39.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5005 21.7998L9.90039 25.5998V32.2998L10.9004 33.1998V38.0998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5005 25.0999L13.2004 27.4999L9.90039 25.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.2996 27.9999C21.5996 28.0999 13.5996 30.0999 13.5996 30.0999L12.0996 29.3999V31.8999L14.0996 32.9999L13.9996 37.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.4004 32.6999L90.5005 27.4999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.7999 25.9999L56 28.0999L74.5999 22.3999L74.5 25.9999L93.5999 20.2999V8.6999L78.8 0.899902L60.8999 6.1999L60.8 10.0999V11.8999L51 15.1999L51.1 17.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.0996 15.8998C51.1996 15.8998 55.7996 19.5998 56.0996 19.4998C59.7996 18.4998 72.2997 14.4998 72.2997 14.4998L75.2997 14.8998L93.5995 8.69983"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.9004 19.1998V28.0998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.5 15.2998V22.6998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61 18.0999V26.4999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66 16.2998V24.7998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.8008 14.0999V24.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.9004 4.19983L84.1003 12.0998V22.8998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75 2.69983L89.3999 10.0998V21.1998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M71 15.1998V23.2998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.5996 5.09985L78.6997 13.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.3008 13.7998L61.0009 17.6998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.4004 12.4999L66.0005 16.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.9004 6.49988L75.0005 15.1999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.5005 71.6999V46.1999L41.9004 37.9999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.3998 57.7999C19.9998 57.5999 20.7999 58.3999 20.9999 59.3999C21.2999 60.4999 20.8998 61.3999 20.2998 61.5999C19.6998 61.7999 18.8998 60.9999 18.6998 59.9999C18.3998 58.8999 18.6998 57.8999 19.3998 57.7999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.19925 48.5998C6.79925 48.3998 7.59922 49.1998 7.79922 50.1998C8.09922 51.2998 7.69927 52.1998 7.09927 52.3998C6.49927 52.5998 5.69929 51.7998 5.49929 50.7998C5.29929 49.7998 5.49925 48.7998 6.19925 48.5998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.59974 65.8999C7.19974 65.6999 7.99972 66.4999 8.19972 67.4999C8.39972 68.4999 8.09977 69.4999 7.49977 69.6999C6.89977 69.8999 6.09967 69.0999 5.89967 68.0999C5.69967 67.0999 5.89974 65.9999 6.59974 65.8999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'roller'"
    id="roller"
    width="96"
    height="90"
    viewBox="0 0 96 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M64.4817 3.63699C83.9817 6.33699 97.2817 27.437 94.1817 50.937C91.0817 74.437 72.6817 91.237 53.1817 88.637C33.6817 85.937 20.3817 64.837 23.4817 41.337C26.6817 17.837 44.9817 0.936992 64.4817 3.63699Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.9934 47.6299C80.0168 35.5234 72.4596 25.0002 62.1141 24.1256C51.7685 23.2511 42.5521 32.3565 41.5288 44.463C40.5054 56.5695 48.0625 67.0927 58.4081 67.9672C68.7537 68.8418 77.97 59.7364 78.9934 47.6299Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.5808 24.037C67.3808 27.637 71.7809 35.737 71.2809 45.037C70.5809 56.737 62.2809 65.837 52.3809 66.037"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.7812 51.6371C50.2812 50.7371 52.9812 47.337 53.2812 42.937C53.3813 40.637 52.7812 38.537 51.7812 36.837"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.0814 35.9369C57.4814 36.1369 60.7814 40.4369 60.4814 45.6369C60.1814 50.7369 56.3814 54.7369 51.9814 54.5369C47.5814 54.3369 44.2814 50.0369 44.5814 44.8369C44.8814 39.6369 48.6814 35.7369 53.0814 35.9369Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.9812 82.037C35.6812 82.337 33.1812 82.237 30.6812 81.937C11.3812 79.437 -1.71882 59.437 1.48118 37.137C4.68118 14.837 22.9812 -1.26299 42.2812 1.13701C46.0812 1.63701 49.1812 2.63699 52.4812 4.33699"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'grm'"
    id="grm"
    width="135"
    height="89"
    viewBox="0 0 135 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M62.3801 63.8575L64.1801 62.4575L63.0801 60.6575L66.9801 57.7575L68.3801 59.6575L70.1801 58.3575L69.3801 56.5575L73.1801 53.9575L74.4801 55.7575L76.3801 54.4575L75.1801 52.6575L78.9801 50.0575L80.3801 51.6575L82.3801 50.4575L81.3801 48.4575L85.1801 46.1575L86.2801 47.5575L88.6801 46.2575L87.6801 44.2575L90.8801 41.6575L92.0801 43.5575L94.6801 41.9575L93.6801 40.2575L97.2801 38.2575L98.3801 39.8575L100.98 38.1575L99.7801 36.2575L103.68 33.4575L104.78 35.2575L106.48 34.3575L105.08 32.7575L107.28 30.9575M115.18 33.9575C100.58 43.6575 72.4801 62.4575 59.0801 71.8575"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.9785 25.1575C55.4785 19.1575 110.779 3.35746 110.079 2.45746M101.179 13.0575L97.0785 14.0575L96.3785 12.1575L94.4785 12.6575L93.5785 12.9575L94.0785 14.9575L89.4785 16.5575L88.7785 14.3575L86.6785 15.0575L86.8785 17.0575L82.3785 18.1575L81.6785 16.0575L79.4785 16.7575L79.9785 18.8575L75.6785 20.1575L74.7785 18.1575L72.4785 18.6575L72.8785 20.8575L68.5785 21.8575L67.9785 20.1575L65.1785 20.7575L65.4785 23.0575L61.5785 24.5575L61.0785 22.3575L58.0785 23.0575L58.5785 25.0575L54.5785 25.8575L53.9785 23.9575L50.9785 24.7575L51.5785 26.9575L46.9785 28.3575L46.4785 26.3575L43.6785 27.1575"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.9792 27.2575C58.9792 33.3575 67.0792 51.2575 61.0792 67.2575C54.9792 83.2575 37.0792 91.3575 21.0792 85.3575C5.07924 79.2575 -3.02076 61.3575 2.97924 45.3575C8.97924 29.3575 26.8792 21.1575 42.9792 27.2575Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M40.5784 33.3574C53.1784 38.1574 59.5784 52.2574 54.7784 64.8574C49.9784 77.4574 35.8784 83.8574 23.2784 79.0574C10.6784 74.2574 4.27839 60.1574 9.07839 47.5574C13.8784 34.9574 27.9784 28.6574 40.5784 33.3574Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.5796 46.5575C40.9796 48.5575 43.6796 54.5575 41.5796 59.9575C39.5796 65.3575 33.5796 68.0575 28.1796 65.9575C22.7796 63.9575 20.0796 57.9575 22.1796 52.5575C24.2796 47.2575 30.2796 44.5575 35.5796 46.5575Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M119.179 11.9575C122.179 13.1575 123.779 16.4575 122.579 19.4575C121.479 22.4575 118.079 24.0575 115.079 22.8575C112.079 21.6575 110.579 18.3575 111.679 15.2575C112.779 12.3575 116.179 10.8575 119.179 11.9575Z"
      stroke="#3D4143"
      stroke-width="0.5669"
      stroke-miterlimit="10"
    />
    <path
      d="M122.979 1.95743C131.579 5.15743 135.879 14.7574 132.679 23.3574C129.379 31.9574 119.879 36.2574 111.279 33.0574C102.679 29.8574 98.3794 20.2574 101.679 11.6574C104.879 3.05743 114.479 -1.24257 122.979 1.95743Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M121.18 6.65745C127.08 8.85745 130.08 15.5574 127.88 21.4574C125.68 27.3575 118.98 30.3574 113.08 28.1574C107.08 25.8574 104.18 19.2575 106.38 13.3575C108.68 7.45745 115.28 4.45745 121.18 6.65745Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M119.379 11.6575C122.579 12.8575 124.179 16.4575 122.979 19.6575C121.779 22.8575 118.179 24.4575 114.979 23.2575C111.779 22.0575 110.179 18.4575 111.379 15.2575C112.579 12.0575 116.179 10.4575 119.379 11.6575Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.7783 36.8574C35.1783 37.3574 35.8783 38.9574 35.3783 40.3574C34.8783 41.7574 33.2783 42.4574 31.8783 41.9574C30.4783 41.4574 29.7783 39.8574 30.2783 38.4574C30.7783 37.0574 32.3783 36.3574 33.7783 36.8574Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.0791 70.8574C33.4791 71.3574 34.1791 72.9574 33.6791 74.3574C33.1791 75.7574 31.5791 76.4574 30.1791 75.9574C28.7791 75.4574 28.0791 73.8574 28.5791 72.4574C29.1791 71.0574 30.6791 70.3574 32.0791 70.8574Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.3798 55.6574C16.7798 56.1574 17.4798 57.7574 16.9798 59.1574C16.4798 60.5574 14.8798 61.2574 13.4798 60.7574C12.0798 60.2574 11.3798 58.6574 11.8798 57.2574C12.3798 55.8574 13.9798 55.1574 15.3798 55.6574Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.7783 53.5574C51.1783 54.0574 51.8783 55.6574 51.3783 57.0574C50.8783 58.4574 49.2783 59.1574 47.8783 58.6574C46.4783 58.1574 45.7783 56.5574 46.2783 55.1574C46.8783 53.6574 48.3783 52.9574 49.7783 53.5574Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'shock-absorber'"
    id="shock-absorber"
    width="49"
    height="90"
    viewBox="0 0 49 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M33.9 21.6C41.9 22.1 47.4 23.1 47.4 24.3C47.4 25.9 37 27.2 24.2 27.2C11.4 27.2 1 25.9 1 24.3C1 23.1 6.89999 22 15.4 21.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.6008 6C25.9008 6 26.9008 7.00002 26.9008 8.30002C26.9008 9.60002 25.9008 10.6 24.6008 10.6C23.3008 10.6 22.3008 9.60002 22.3008 8.30002C22.3008 7.10002 23.3008 6 24.6008 6Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.5996 3.3999C27.2996 3.3999 29.5996 5.5999 29.5996 8.3999C29.5996 11.1999 27.3996 13.3999 24.5996 13.3999C21.7996 13.3999 19.5996 11.1999 19.5996 8.3999C19.5996 5.5999 21.7996 3.3999 24.5996 3.3999Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.6008 15.6C28.6325 15.6 31.9008 12.3317 31.9008 8.30002C31.9008 4.26834 28.6325 1 24.6008 1C20.5691 1 17.3008 4.26834 17.3008 8.30002C17.3008 12.3317 20.5691 15.6 24.6008 15.6Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.1992 21.4999L17.2992 7.69995"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.8008 21.4999L31.8008 8.29993"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.6008 79.3999C25.9008 79.3999 26.9008 80.3999 26.9008 81.6999C26.9008 82.9999 25.9008 83.9999 24.6008 83.9999C23.3008 83.9999 22.3008 82.9999 22.3008 81.6999C22.3008 80.3999 23.3008 79.3999 24.6008 79.3999Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.5996 76.7C27.2996 76.7 29.5996 78.9 29.5996 81.7C29.5996 84.4 27.3996 86.7 24.5996 86.7C21.7996 86.7 19.5996 84.5 19.5996 81.7C19.5996 78.9 21.7996 76.7 24.5996 76.7Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.6008 74.3999C28.6008 74.3999 31.9008 77.5999 31.9008 81.6999C31.9008 85.6999 28.7008 88.9999 24.6008 88.9999C20.6008 88.9999 17.3008 85.7999 17.3008 81.6999C17.3008 77.6999 20.6008 74.3999 24.6008 74.3999Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.4004 73.6V77.9M18.4004 61.3V63.8M18.4004 49.8V55.4M18.4004 40.5V44.1M18.4004 29.6V34.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.6992 73.6V77.8M30.6992 51.5V57.4M30.6992 42.1V45.9M30.6992 29.5V36.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.0008 52.6C35.0008 52.8 46.6008 53.1 46.6008 58.1C46.6008 62.4 34.8008 63.7 22.8008 61.9C21.4008 61.7 20.0008 61.4 18.7008 61.2C8.90077 59.2 2.30078 55.5 2.30078 52.6C2.30078 50.9 5.40079 48.6999 10.0008 47.2999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.3991 50.1C18.3991 50.1 9.59907 51.9999 9.29907 52.4999C8.99907 52.9999 9.39908 53.2999 9.39908 53.2999C9.39908 53.2999 26.1991 57.9 35.0991 57.6C43.9991 57.3 42.2991 56 41.4991 55.7C40.6991 55.5 31.1991 54.2999 31.1991 54.2999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.9004 41.6999C42.3004 42.2999 47.2004 43.6999 47.2004 46.7999C47.2004 51.0999 35.4004 52.3999 23.4004 50.5999C11.3004 48.7999 2.90039 44.4999 2.90039 41.2999C2.90039 39.8999 4.90038 38.1999 8.20038 36.8999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.6006 39.6C13.1006 40.2 10.1006 40.8999 9.90063 41.2999C9.60063 41.7999 10.0006 42.1 10.0006 42.1C10.0006 42.1 27.8006 46.7 36.7006 46.4C45.6006 46.1 43.3006 45.1 42.4006 44.9C41.6006 44.7 31.0006 43.1 31.0006 43.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.0008 31.8C35.0008 32 47.1008 32.3 47.1008 37.3C47.1008 41.6 35.3008 42.9 23.3008 41.1C11.2008 39.3 2.80078 35 2.80078 31.8C2.80078 30.8 3.90078 29.6 5.70078 28.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5991 29.6C15.4991 30.1 9.99907 31.3 9.79907 31.7C9.49907 32.2 9.89908 32.5 9.89908 32.5C9.89908 32.5 13.5991 33.5 18.3991 34.5C24.1991 35.7 31.6991 37 36.5991 36.8C45.4991 36.5 43.1991 35.3 42.2991 35C41.4991 34.8 30.6991 33.3 30.6991 33.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.4 24.8C47.4 24.8 47.4 26.6 47.4 26.7C46.9 28.4 36.7 29.7 24.2 29.7C11.7 29.7 1 28.5 1 26.7V24.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.3996 64C47.3996 64.1 47.3996 67.9 47.3996 68C46.8996 71.2 36.7996 73.7 24.4996 73.7C12.1996 73.7 1.59961 71.4 1.59961 68V64.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.4 64C46.9 65.4 40.3 67.8 30.9 68.7C28.9 68.9 26.7 69 24.4 69C12.2 69 2.3 66.1 1.5 64.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.7992 21.5C33.7992 22.6 29.5992 23.5 24.4992 23.5C19.3992 23.5 15.1992 22.6 15.1992 21.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0991 60.3999C12.6991 60.9999 9.99907 61.6999 9.79907 61.9999C9.49907 62.4999 9.89908 62.7999 9.89908 62.7999C9.89908 62.7999 31.5991 66.3999 43.0991 61.3999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.79934 64.4C0.699336 61.2 3.89935 59.3 8.59935 58"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.4004 60.8999C46.8004 60.6999 47.8004 62.9999 47.1004 64.3999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'wheel-drive'"
    id="wheel-drive"
    width="154"
    height="90"
    viewBox="0 0 154 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M73.7992 71.8C66.1992 80.2 55.0992 85.5 42.8992 85.5C19.8992 85.5 1.19922 66.8 1.19922 43.8C1.19922 20.8 19.8992 2.09998 42.8992 2.09998C55.2992 2.09998 66.3992 7.49997 73.9992 16"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.9984 66.8C63.4984 74.5 53.7985 79.3 42.8985 79.3C23.2985 79.3 7.39844 63.4 7.39844 43.8C7.39844 24.2 23.2985 8.30005 42.8985 8.30005C53.8985 8.30005 63.6985 13.3001 70.1985 21.1001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.8989 26.3C52.5989 26.3 60.4988 34.2001 60.4988 43.9001C60.4988 53.6001 52.5989 61.5001 42.8989 61.5001C33.1989 61.5001 25.2988 53.6001 25.2988 43.9001C25.2988 34.1001 33.1989 26.3 42.8989 26.3Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.9 38C46.1 38 48.8 40.6 48.8 43.9C48.8 47.2 46.2 49.8 42.9 49.8C39.7 49.8 37 47.2 37 43.9C37 40.6 39.6 38 42.9 38Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.8992 29.7C44.4992 29.7 45.6992 30.9999 45.6992 32.4999C45.6992 34.0999 44.3992 35.2999 42.8992 35.2999C41.2992 35.2999 40.0992 33.9999 40.0992 32.4999C39.9992 30.9999 41.2992 29.7 42.8992 29.7Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.8992 52.5C44.4992 52.5 45.6992 53.8 45.6992 55.3C45.6992 56.9 44.3992 58.1 42.8992 58.1C41.2992 58.1 40.0992 56.8 40.0992 55.3C39.9992 53.8 41.2992 52.5 42.8992 52.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.3997 40.5C32.9997 40.5 34.1996 41.8 34.1996 43.3C34.1996 44.9 32.8997 46.1 31.3997 46.1C29.7997 46.1 28.5996 44.8 28.5996 43.3C28.5996 41.8 29.8997 40.5 31.3997 40.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.0988 40.5C55.6988 40.5 56.8989 41.8 56.8989 43.3C56.8989 44.9 55.5988 46.1 54.0988 46.1C52.4988 46.1 51.2988 44.8 51.2988 43.3C51.2988 41.8 52.4988 40.5 54.0988 40.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.9992 11.6C43.6992 11 45.3992 11.4 45.8992 12.6C46.3992 13.8 45.2992 15.3 43.5992 15.9C41.8992 16.5 40.1992 16.1 39.6992 14.9C39.2992 13.7 40.2992 12.2 41.9992 11.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.4996 20.4C67.0996 21.5 67.7996 23.3 66.9996 24.4C66.1996 25.5 64.2996 25.6 62.6996 24.5C61.0996 23.4 60.3996 21.6 61.1996 20.5C61.8996 19.4 63.8996 19.3 65.4996 20.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.9986 67.3C64.3986 68.3 62.4986 68.2 61.6986 67.1C60.9986 65.9 61.6986 64.2 63.2986 63.1C64.8986 62.1 66.7986 62.2 67.5986 63.3C68.3986 64.5 67.6986 66.3 65.9986 67.3Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.9986 21.4C21.9986 20.1 23.3985 19.7 24.0985 20.5C24.7985 21.4 24.4986 23.1 23.4986 24.5C22.4986 25.8 21.0986 26.2 20.3986 25.4C19.6986 24.5 19.8986 22.7 20.9986 21.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.2995 43.4001C12.3995 41.7001 13.3995 40.6001 14.3995 40.9001C15.4995 41.2001 16.1995 42.9001 16.0995 44.5001C15.9995 46.2001 14.9995 47.3001 13.9995 47.0001C12.9995 46.7001 12.1995 45.1001 12.2995 43.4001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.6992 65.9C20.6992 64.5 20.6992 63.0999 21.6992 62.5999C22.6992 62.1999 24.2992 62.8999 25.2992 64.2999C26.2992 65.6999 26.2992 67.0999 25.2992 67.5999C24.2992 67.9999 22.5992 67.3 21.6992 65.9Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.9995 75.4001C41.3995 74.9001 40.4995 73.8 40.9995 72.8C41.4995 71.8 43.2996 71.4001 44.8996 71.9001C46.4996 72.4001 47.3996 73.5001 46.8996 74.5001C46.3996 75.5001 44.5995 75.9001 42.9995 75.4001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M116.599 88.9999C136.647 88.9999 152.899 69.3452 152.899 45.0999C152.899 20.8546 136.647 1.19995 116.599 1.19995C96.5509 1.19995 80.2988 20.8546 80.2988 45.0999C80.2988 69.3452 96.5509 88.9999 116.599 88.9999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M116.599 4.80005C134.999 4.80005 149.899 22.9 149.899 45.1C149.899 67.4 134.999 85.4001 116.599 85.4001C98.1993 85.4001 83.2993 67.3 83.2993 45.1C83.1993 22.8 98.1993 4.80005 116.599 4.80005Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M119.2 36C123.4 36 126.8 40.1 126.8 45.2C126.8 50.3 123.4 54.4 119.2 54.4C115 54.4 111.6 50.3 111.6 45.2C111.7 40.1 115 36 119.2 36Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M120 39.8C122.4 39.8 124.4 42.2 124.4 45.1C124.4 48 122.4 50.4001 120 50.4001C117.6 50.4001 115.6 48 115.6 45.1C115.6 42.2 117.6 39.8 120 39.8Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M99.8997 84.2C79.7997 84 63.5996 66.2 63.5996 44.2C63.5996 22.1 79.9996 4.19995 100.2 4.19995C101 4.19995 101.9 4.19993 102.7 4.29993"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M87.3984 26.3C87.6984 26.4 104.898 33.6 104.898 33.6C104.898 33.6 107.498 34.6 110.898 32.3C114.398 30 117.298 26.4 117.598 19.3C117.798 14.1 117.598 7.49998 117.598 5.09998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M124.1 5.80005L124.5 22.8C124.5 22.8 124.3 28.4001 128.4 32.1001C132.5 35.8001 134.9 35 137.3 34.8C139.6 34.6 147.4 31.0001 147.4 31.0001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M149.298 37.9C148.598 38 137.098 43.3 137.098 43.3C137.098 43.3 132.198 46.3001 132.298 51.9001C132.498 57.6001 133.098 60 133.098 60L139.398 74"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M101 80.6L110.9 66.8C110.9 66.8 116.4 58.0001 123.1 61.9001C128.3 65.0001 132 72.6001 133.3 75.7001C133.7 76.6001 134.6 79.0001 134.6 79.0001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M85 34C85.4 33.9 100.7 40.8 100.7 40.8C100.7 40.8 105.4 44 106.8 49.4C108.2 54.8 106.6 59.8 105.8 61.3C104.9 62.8 95.1 75.5 95.1 75.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M99 83.5999C81.6 80.3999 68.5 63.9999 68.5 44.0999C68.5 22.7999 83.7 5.39998 102.9 4.09998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'ball-bearing'"
    id="ball-bearing"
    width="83"
    height="90"
    viewBox="0 0 83 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M12.3176 36.0291C7.21759 41.6291 -0.682414 47.229 1.31759 55.429C2.71759 61.029 9.61757 68.429 9.61757 68.429C12.2176 73.829 17.2176 87.029 23.9176 88.329C26.7176 88.829 31.1176 89.729 36.4176 86.929C47.8176 80.929 56.1176 81.229 68.6176 84.429C75.0176 86.029 84.4176 79.9291 80.3176 73.0291C76.4176 66.4291 66.5176 63.429 64.9176 54.929C63.2176 45.529 64.1176 43.329 53.8176 40.129"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M56.5176 4.72913C57.4176 3.92913 59.8176 4.92914 61.9176 6.82914C64.0176 8.72914 65.0176 10.9291 64.1176 11.7291C63.2176 12.5291 60.8176 11.5291 58.7176 9.62912C56.5176 7.62912 55.6176 5.42913 56.5176 4.72913Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.018 1.52912C54.718 0.0291165 59.318 1.82912 63.318 5.52912C67.318 9.22912 69.218 13.3291 67.518 14.8291C65.818 16.3291 61.218 14.5291 57.218 10.8291C53.218 7.1291 51.318 3.02912 53.018 1.52912Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.9184 1.8291L44.8184 9.62909L49.5184 17.7291L59.0184 23.6291L66.8184 15.2291"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M56.7176 10.7291L49.5176 17.7291"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.8184 27.2291C53.2184 28.3291 53.3184 29.3291 52.8184 29.9291C51.6184 31.2291 47.9184 29.7291 44.6184 26.6291C41.3184 23.5291 39.6184 19.9291 40.8184 18.6291C41.4184 18.0291 42.4184 18.0291 43.8184 18.5291"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.1179 26.6291C55.5179 30.1291 56.318 33.5291 54.718 35.3291C52.418 37.8291 46.718 35.2291 41.518 30.4291C36.918 26.1291 34.418 21.3291 35.218 18.9291C35.318 18.6291 35.418 18.3291 35.718 18.1291C36.918 16.8291 40.218 17.0291 43.718 18.6291"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.9174 19.1292C34.9174 19.1292 20.7174 23.4292 17.7174 26.0292C14.7174 28.6292 11.0174 33.4292 13.2174 39.6292C20.4174 60.5292 47.3173 67.5291 51.6173 53.9291C53.5173 47.8291 54.1173 35.8292 54.1173 35.8292"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.618 74.3291C32.818 75.0291 34.1181 76.8291 33.7181 78.2291C33.2181 79.7291 31.1181 80.3291 28.9181 79.6291C26.7181 78.9291 25.418 77.1291 25.818 75.7291C26.318 74.2291 28.418 73.6291 30.618 74.3291Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.0165 69.7292C72.2165 70.4292 73.5164 72.2292 73.1164 73.6292C72.6164 75.1292 70.5165 75.7292 68.3165 75.0292C66.1165 74.3292 64.8165 72.5292 65.2165 71.1292C65.6165 69.7292 67.8165 69.0292 70.0165 69.7292Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.4176 14.1292L42.5176 20.1292"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.0179 22.3291L51.918 27.8291"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.5176 20.1292C44.6176 23.6292 47.9176 26.4292 51.9176 27.7292"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.81836 49.6292C3.21836 55.2292 10.1183 62.6292 10.1183 62.6292C12.7183 68.0292 17.7184 81.2292 24.4184 82.5292C27.2184 83.0292 31.6184 83.9292 36.9184 81.1292C48.3184 75.1292 56.6183 75.4292 69.1183 78.6292C73.2183 79.7292 78.6184 77.5291 80.8184 73.9291"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.2167 34.6292C11.2167 36.9292 10.8167 39.6292 11.9167 42.7292C19.1167 63.6292 46.5167 69.5291 50.7167 55.9291"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'steering-tip'"
    id="steering-tip"
    width="86"
    height="90"
    viewBox="0 0 86 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M64.3242 1C67.6242 1 70.3242 2.19999 70.3242 3.79999C70.3242 5.29999 67.6242 6.59998 64.3242 6.59998C61.0242 6.59998 58.3242 5.39999 58.3242 3.79999C58.3242 2.29999 61.0242 1 64.3242 1Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.7246 17.4C74.1246 18.5 76.3246 20.4 76.3246 22.5C76.3246 25.8 70.8247 28.7 64.0247 28.7C57.2247 28.7 51.7246 25.9 51.7246 22.5C51.7246 20.4 53.8246 18.6 56.9246 17.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76.225 23.5C76.225 23.5 77.0249 27 77.3249 27.4C79.6249 30.6 85.225 34 85.125 41C85.025 47.2 76.025 52.6 63.725 52.6C53.225 52.6 44.425 48.9 42.125 44C39.725 38.8 48.125 30.3 51.025 26.3L51.8249 22.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.4258 73.9C50.1258 76.3 56.4258 78.0001 62.7258 78.0001C73.9258 78.0001 82.4259 71.8001 83.5259 65.7001C85.0259 57.3001 85.0258 52.4001 82.9258 46.2001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.425 79.4C11.325 83.7 11.325 87.9001 9.425 88.8001C7.425 89.7001 4.325 86.9001 2.425 82.7001C0.525 78.4001 0.525 74.2001 2.425 73.3001C4.325 72.4001 7.425 75.1 9.425 79.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.32422 73.3L36.7242 59"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.0247 74.8L29.1246 80.5001L9.72461 88.5001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.625 59.1001C38.525 59.4001 40.925 61.9001 42.625 65.5001C44.425 69.5001 44.5249 73.6001 42.9249 74.9001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.7246 59.1C36.7246 56.6 39.1246 57.1001 39.3246 57.2001C41.3246 57.9001 43.7246 60.6001 45.3246 64.2001C47.2246 68.4001 47.4246 72.5001 46.1246 74.2001C45.9246 74.5001 45.1247 75.1 43.0247 74.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.3242 3.80005V22.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.3242 3.80005V22.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76.725 25.7001C76.725 29.0001 71.0249 31.9001 63.9249 31.9001C56.8249 31.9001 51.125 29.1001 51.125 25.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.3242 22.4C70.3242 23.9 67.6242 25.2 64.3242 25.2C61.0242 25.2 58.3242 24 58.3242 22.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.6246 42.2001C41.6246 42.2001 41.4247 46.0001 41.5247 47.0001C41.6247 48.0001 41.0247 55.5001 41.0247 55.5001L37.7246 57.2001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M83.4253 48.1C83.5253 53.7 74.1254 58.4 62.6254 58.4C51.1254 58.4 41.5254 53.7 41.5254 48"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.625 60C36.525 60.3 38.925 62.8 40.625 66.3C42.425 70.3 42.5249 74.3 40.9249 75.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.5254 62.1001C31.4254 62.4001 33.8254 64.9001 35.5254 68.5001C37.3254 72.5001 37.4253 76.6001 35.8253 77.8001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.625 64.2001C26.525 64.5001 28.925 67 30.625 70.6C32.325 74.4 32.525 78.1001 31.225 79.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.2246 65.9C22.1246 66.2 24.5246 68.7 26.2246 72.3C27.9246 76.1 28.1246 80.0001 26.8246 81.5001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0254 68.2001C16.9254 68.5001 19.4254 71.1001 21.0254 74.7001C22.5254 78.1001 22.9254 81.4001 22.0254 83.2001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.52539 70.4C11.5254 70.7 13.9254 73.3 15.5254 76.9C17.1254 80.4 17.4253 84.0001 16.4253 85.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M84.4253 58.4C84.5253 64 74.9253 68.8 63.4253 68.8C55.5253 68.8 48.5254 66.6 45.0254 63.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.3242 9.20007C70.3242 10.7001 67.6242 12.0001 64.3242 12.0001C61.0242 12.0001 58.3242 10.8001 58.3242 9.20007"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.3242 14.7001C70.3242 16.2001 67.6242 17.5001 64.3242 17.5001C61.0242 17.5001 58.3242 16.3001 58.3242 14.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.3242 20.3C70.3242 21.8 67.6242 23.1 64.3242 23.1C61.0242 23.1 58.3242 21.9 58.3242 20.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'shrew'"
    id="shrew"
    width="164"
    height="72"
    viewBox="0 0 164 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M125.221 4.94217C126.146 3.84814 127.24 3.09074 128.334 2.92243C134.057 1.91256 140.2 13.1053 142.136 28.0009C144.072 42.8965 141.042 55.7724 135.319 56.7822C134.394 56.9505 133.468 56.7822 132.626 56.3615C135.74 51.3121 136.413 39.7827 133.973 27.1593"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M114.365 5.53121C115.375 3.34315 116.637 1.82832 118.236 1.40754C123.875 -0.107266 130.944 11.5904 134.058 27.6642C136.919 42.3915 133.889 56.109 130.523 58.9703C128.083 61.0742 125.642 59.3069 124.043 57.3713"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M59.3281 22.7832C59.3281 22.7832 64.2092 15.7982 65.9765 13.9468C67.7437 12.0954 71.6149 10.6647 71.6149 10.6647L82.3028 8.30835L83.6492 5.86783C83.6492 5.86783 89.3718 4.26887 96.0201 2.58575C102.668 0.902631 111.084 13.9468 114.871 31.7879C118.321 48.1142 117.143 63.683 111.252 66.4601L101.995 68.3958L99.0497 67.6383L86.258 70.163C86.258 70.163 81.882 71.1729 79.8622 70.163C77.9266 69.1531 70.6892 66.1235 70.6892 66.1235"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M102.836 5.78367C103.93 3.25899 105.445 -0.191417 108.979 1.40755C113.44 3.42729 121.014 14.1993 123.875 28.8424C127.241 45.7578 125.137 60.8217 119.246 62.4206C117.816 62.8414 116.217 62.3365 114.618 61.1583"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M81.5449 8.47656C86.7626 8.89734 90.9703 18.0703 94.4207 29.1789C98.5444 42.5597 101.069 58.886 98.2077 67.4699"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M93.832 3.1748C99.6388 6.28858 105.782 19.2486 108.896 35.8273C111.084 47.6092 111.421 59.1386 109.822 66.7126"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M87.5195 4.60541C93.3263 7.71918 99.4697 20.6792 102.583 37.2579C104.772 49.0398 105.108 60.5691 103.509 68.1432"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M1.59615 50.6388C2.69018 50.1339 4.96235 53.6684 6.393 58.8861C7.82366 64.1038 8.0761 68.7324 6.89792 69.2373C5.80389 69.7423 3.78423 65.9552 2.35358 60.8217C1.00708 55.604 0.502126 51.2279 1.59615 50.6388Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M57.1387 32.8818L47.629 34.9857C47.629 34.9857 46.5349 35.2382 46.4508 36.0798C46.3666 36.9213 46.3666 38.4361 46.3666 38.4361L24.2337 44.327L23.6445 45.0845L1.5957 50.6387"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M63.5355 57.287L54.2783 60.2325C54.2783 60.2325 53.1843 60.5691 52.6793 59.8959C52.1744 59.2226 51.5854 57.7078 51.5854 57.7078L29.7048 63.5146L28.779 63.178L6.89844 69.3213"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M24.2344 44.327C25.3284 43.822 27.6006 47.4408 29.0312 52.8267C30.4619 58.2127 30.7143 62.9254 29.5361 63.5145"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M46.4512 38.4363C47.6294 38.5204 49.6491 42.055 50.9956 46.9361C52.4263 52.322 52.6787 57.0347 51.5005 57.6238"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M51.0798 34.2283C51.0798 34.2283 50.2383 27.9167 50.2383 26.1494C50.2383 24.3821 50.2383 21.9416 51.0798 21.7733C53.857 21.0159 60.3371 40.1193 61.2628 43.9063C63.8716 54.0891 66.8171 69.3214 64.629 70.2471C62.0202 71.3411 58.3173 61.0741 57.7282 59.1385"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M56.7188 20.3427C59.4959 19.5853 66.4808 40.1194 67.4065 43.8222C70.0154 54.0051 71.6985 66.6285 69.5946 67.8908C67.4907 69.069 64.6294 70.1631 64.6294 70.1631"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M56.8032 20.3426L50.8281 21.8574"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M140.705 18.5755L159.724 14.5359C162.754 19.8378 163.343 25.5604 162.838 30.9464L143.398 35.575"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M67.9961 12.5161C79.7779 13.4418 89.1192 64.8612 82.6392 70.4996"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'pin'"
    id="pin"
    width="118"
    height="90"
    viewBox="0 0 118 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M88.9008 1C99.2008 1 107.501 3.5 107.501 6.5C107.501 9.5 99.2008 12 88.9008 12C78.6008 12 70.3008 9.5 70.3008 6.5C70.3008 3.5 78.6008 1 88.9008 1Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M88.9004 4.30005C93.0004 4.30005 96.4004 5.30006 96.4004 6.50006C96.4004 7.70006 93.1004 8.70004 88.9004 8.70004C84.8004 8.70004 81.4004 7.70006 81.4004 6.50006C81.4004 5.30006 84.7004 4.30005 88.9004 4.30005Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M107.501 6.90002C107.501 15.2 107.501 23.8 107.401 32.1C107.401 32.2 107.501 32.3 107.501 32.5C107.501 35.2 99.2008 37.4 88.9008 37.4C78.6008 37.4 70.3008 35.2 70.3008 32.5V7.00003"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M60.7004 36.4001C60.6004 34.8001 60.5004 33.3001 60.4004 31.9001C60.4004 28.8001 64.2004 26.1001 70.2004 24.2001M107.4 24.5001C113 26.3001 116.5 29.0001 116.5 31.9001V32.0001L113.8 57.8001C113.8 64.1001 103.9 69.4001 88.4004 69.4001C80.0004 69.4001 73.1004 67.0001 68.4004 64.2001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M115.901 38C113.801 41.9 102.201 45 88.6008 45C80.5008 45 73.0008 43.9 67.8008 42.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M116.6 32.4C116.6 37 104.1 40.7 88.7004 40.7C73.3004 40.7 60.4004 37 60.4004 32.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M35.2001 6.20007C46.1001 6.20007 54.9 8.80009 54.9 12.0001C54.9 15.2001 46.1001 17.8001 35.2001 17.8001C24.3001 17.8001 15.5 15.2001 15.5 12.0001C15.5 8.80009 24.3001 6.20007 35.2001 6.20007Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M35.2008 9.40002C40.1008 9.40002 44.1008 10.6 44.1008 12C44.1008 13.4 40.1008 14.6 35.2008 14.6C30.3008 14.6 26.3008 13.4 26.3008 12C26.3008 10.6 30.3008 9.40002 35.2008 9.40002Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M55 11.9C56.3 12.6 57.4 13.7 57.4 14.6C57.4 24.5 57.3 34.4 57.3 44.3C57.3 44.4 57.4 44.6 57.4 44.7C57.4 47.9 47.5001 50.5 35.2001 50.5C22.9001 50.5 13 47.9 13 44.7V14.6C13 13.7 13.9 12.8 15.4 12"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M57.3 35.2C64 37.4 68.2001 40.6 68.2001 44.1V44.2V75C68.2001 82.7 53.2001 88.9 34.6001 88.9C16.1001 88.9 1 82.7 1 75C1 74.9 1 74.7 1 74.6V44.2V44.1C1.1 40.4 5.60007 37.2 12.7001 34.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M68.2992 49.9C68.2992 55.4 53.3991 59.8 34.9991 59.8C16.5991 59.8 1.19922 55.4 1.19922 49.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M68.2992 44.6001C68.2992 50.1001 53.3991 54.5001 34.9991 54.5001C16.5991 54.5001 1.19922 50.1001 1.19922 44.6001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M57.4 16C57.4 19.1 47.4001 21.7 35.2001 21.7C23.0001 21.7 13 19.2 13 16"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'stabilizer-bars'"
    id="stabilizer-bars"
    width="132"
    height="90"
    viewBox="0 0 132 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M18.2235 50.5564C27.8344 50.4563 35.7434 58.1651 35.8435 67.776C35.9436 77.3869 28.2348 85.2959 18.6238 85.396C9.0129 85.4961 1.10393 77.7874 1.00381 68.1765C0.803586 58.5655 8.51243 50.6565 18.2235 50.5564Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M18.224 57.3641C24.0306 57.2639 28.836 61.9693 28.9361 67.7759C29.0362 73.5825 24.3309 78.388 18.5243 78.4881C12.7176 78.5882 7.91223 73.8829 7.81212 68.0763C7.712 62.2696 12.4174 57.4642 18.224 57.3641Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M18.3231 62.4698C21.3266 62.4698 23.8294 64.8725 23.9295 67.876C23.9295 70.8794 21.5267 73.3823 18.5233 73.4824C15.5199 73.4824 13.0171 71.0796 12.917 68.0762C12.8169 64.9727 15.3197 62.4698 18.3231 62.4698Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M23.6289 51.0569L34.0408 26.3288L43.3514 30.2332L32.6392 55.562L30.9373 55.4619"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M32.9395 55.4619C37.6449 58.5654 40.7484 63.8714 40.8485 69.8783C40.9487 79.4892 33.2398 87.3982 23.6289 87.4984C20.225 87.4984 17.0214 86.5973 14.3184 84.9955"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M39.8476 1L49.0581 4.90447C44.6531 8.008 39.3471 23.2253 40.2481 29.0319L31.9386 25.5279C30.2367 24.8271 29.8362 21.3231 31.1377 16.3174C32.8396 9.91015 36.4438 3.30262 39.8476 1Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M60.1711 29.4324C58.9697 30.6337 57.8685 31.2344 56.9675 30.9341C55.1654 30.2333 55.4658 25.628 57.468 20.8226C59.4703 16.0171 62.5739 12.6132 64.3759 13.4141C65.1768 13.7145 65.5772 14.8157 65.5772 16.3174"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M62.2742 13.6143C62.2742 13.6143 61.2729 13.1138 61.0727 12.7133C60.9726 12.413 60.8725 10.1104 60.5721 8.30831C60.3719 7.30717 60.1717 6.40613 59.8714 6.00567C49.86 -5.20708 36.3446 36.4403 48.158 34.3379C49.3594 34.1377 51.5619 31.5347 52.8634 30.9341C54.1649 30.2333 56.2673 30.2332 56.2673 30.2332"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M79.4935 26.3288L81.7962 27.33C82.3969 27.5302 82.5971 28.4312 82.3969 29.7327C82.0965 31.3345 80.9952 33.0364 79.9941 33.3368C79.6937 33.4369 79.1932 33.2367 78.8929 33.1365L76.9907 32.3357L67.8803 28.5313L65.9781 27.7304C65.6778 27.6303 65.1772 27.3299 65.0771 27.0296C64.6766 26.0285 65.0771 24.1263 65.9781 22.8248C66.6789 21.7236 67.4798 21.3231 68.0805 21.6235L70.3832 22.6246L72.4856 23.5256L79.4935 26.3288Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M59.571 30.1331C59.4709 28.2309 59.9715 25.3276 61.273 22.4243C62.5745 19.4209 64.1762 17.0182 65.6779 15.7167"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M68.1797 21.0227L68.4801 18.5199L66.7782 17.0182L65.0762 16.3174"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M65.7775 28.0307L63.8753 30.934L61.873 29.6325C61.873 29.6325 62.1734 24.6269 63.3748 22.4244C64.5761 20.2219 66.6784 17.0182 66.6784 17.0182"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M59.9707 29.3322L61.8729 29.6325"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M56.9682 4.10355C56.5678 3.90333 56.1674 3.7031 55.7669 3.60299C48.5587 1.40048 40.95 20.6223 42.1513 29.5325"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M113.131 39.4436C103.52 39.5438 95.6108 31.835 95.5107 22.224C95.4106 12.6131 103.119 4.70411 112.73 4.60399C122.341 4.50388 130.25 12.2127 130.35 21.8236C130.451 31.4345 122.742 39.3435 113.131 39.4436Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M123.578 22.1043C123.673 16.244 118.999 11.4163 113.139 11.3212C107.279 11.226 102.451 15.8996 102.356 21.7599C102.261 27.6202 106.934 32.448 112.795 32.5431C118.655 32.6382 123.483 27.9646 123.578 22.1043Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M113.032 27.5302C110.029 27.5302 107.526 25.1274 107.426 22.124C107.426 19.1206 109.829 16.6178 112.832 16.5176C115.835 16.5176 118.338 18.9204 118.438 21.9238C118.438 24.9272 116.036 27.4301 113.032 27.5302Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M107.724 38.8429L97.2124 63.571L88.002 59.6666L98.614 34.4379H100.416"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M98.3143 34.4379C93.6089 31.3344 90.4053 26.0283 90.4053 20.0215C90.3051 10.4106 98.0139 2.5016 107.625 2.40149C111.029 2.40149 114.232 3.30251 116.935 4.90434"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M91.5073 89L82.2969 85.0955C86.7019 81.992 92.0078 66.7747 91.1068 60.9681L99.4163 64.4721C101.118 65.1729 101.519 68.6769 100.217 73.6826C98.5152 80.0898 94.8111 86.6973 91.5073 89Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M71.0839 60.4675C72.2853 59.2662 73.3866 58.6655 74.2876 58.9658C76.0897 59.6666 75.7893 64.2718 73.7871 69.0773C71.7848 73.8828 68.6812 77.2867 66.8792 76.4857C66.0783 76.1854 65.6777 75.0841 65.6777 73.5824"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M69.082 76.3858C69.082 76.3858 70.0832 76.8864 70.2835 77.2868C70.3836 77.5872 70.4837 79.8898 70.784 81.6919C70.9843 82.693 71.1844 83.594 71.4848 83.9945C81.4962 95.2072 95.0115 53.5599 83.1981 55.6623C81.9967 55.8625 79.7942 58.4654 78.4928 59.0661C77.1913 59.7669 75.0889 59.7669 75.0889 59.7669"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M51.7616 63.5711L49.459 62.5699C48.8583 62.3697 48.6581 61.4687 48.8583 60.1672C49.1586 58.5654 50.2599 56.8635 51.261 56.5631C51.5614 56.463 52.0619 56.6632 52.3623 56.7634L54.2645 57.5643L63.3748 61.3686L65.277 62.1695C65.5773 62.2696 66.0778 62.5699 66.1779 62.8703C66.5784 63.8714 66.178 65.7736 65.277 67.0751C64.5762 68.1763 63.7752 68.5768 63.1745 68.2764L60.872 67.2753L58.7696 66.3743L51.7616 63.5711Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M71.685 59.8669C71.7852 61.769 71.2846 64.6724 69.9832 67.5757C68.6817 70.5791 67.0798 72.9818 65.5781 74.2833"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M63.1753 68.9772L62.875 71.3799L64.4768 72.8816L66.1787 73.6826"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M65.4772 61.9694L67.3794 59.066L69.3817 60.3675C69.3817 60.3675 69.0813 65.3732 67.88 67.5757C66.6786 69.7782 64.5762 72.9819 64.5762 72.9819"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M71.283 60.6678L69.3809 60.3674"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M74.3867 85.8964C74.7872 86.0966 75.1876 86.2969 75.588 86.397C82.7962 88.5995 90.4049 69.3777 89.2035 60.4675"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'hub'"
    id="hub"
    width="96"
    height="90"
    viewBox="0 0 96 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M47.5947 1C62.2947 1 74.2947 7.59998 74.2947 15.7C74.2947 23.8 62.3947 30.4 47.5947 30.4C32.8947 30.4 20.8945 23.8 20.8945 15.7C20.8945 7.59998 32.7947 1 47.5947 1Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.5962 4.6001C58.6962 4.6001 67.696 9.6001 67.696 15.7001C67.696 21.8001 58.6962 26.8001 47.5962 26.8001C36.4962 26.8001 27.4961 21.8001 27.4961 15.7001C27.4961 9.6001 36.4962 4.6001 47.5962 4.6001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.7954 10C54.1954 10 59.3953 12.8 59.3953 16.4C59.3953 20 54.1954 22.8 47.7954 22.8C41.3954 22.8 36.1953 20 36.1953 16.4C36.1953 12.8 41.4954 10 47.7954 10Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.3948 19.2L37.4949 18.5001H37.9949L37.2949 16.5001L38.3948 17.3L38.095 15.2L39.1948 16.1L39.3948 14.1L40.595 15.2L40.8948 13.3L42.3948 14.3L42.8948 12.6L44.3948 13.8L45.1948 12.1L46.4949 13.6L47.595 11.9001L48.6948 13.6L50.095 11.8L51.095 13.9001L52.4949 12.5001L52.8948 14.3L54.4949 13.3L54.7949 14.9001L56.2949 13.5001L56.595 15.5001L57.595 14.8L57.8948 15.8L58.4949 15.4001L58.9949 16.8L59.3948 16.4001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0962 12.7001C17.0962 12.7001 18.696 13.6001 18.696 14.7001C18.696 15.8001 17.0962 16.7001 15.0962 16.7001C13.0962 16.7001 11.4961 15.8001 11.4961 14.7001C11.4961 13.6001 13.0962 12.7001 15.0962 12.7001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.6956 12.7001C81.6956 12.7001 83.2957 13.6001 83.2957 14.7001C83.2957 15.8001 81.6956 16.7001 79.6956 16.7001C77.6956 16.7001 76.0957 15.8001 76.0957 14.7001C76.0957 13.6001 77.6956 12.7001 79.6956 12.7001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0962 32.7001C17.0962 32.7001 18.696 33.6001 18.696 34.7001C18.696 35.8001 17.0962 36.7001 15.0962 36.7001C13.0962 36.7001 11.4961 35.8001 11.4961 34.7001C11.4961 33.6001 13.0962 32.7001 15.0962 32.7001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.2954 32.7001C81.2954 32.7001 82.8953 33.6001 82.8953 34.7001C82.8953 35.8001 81.2954 36.7001 79.2954 36.7001C77.2954 36.7001 75.6953 35.8001 75.6953 34.7001C75.6953 33.6001 77.2954 32.7001 79.2954 32.7001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76.196 23.8C76.196 32.5 63.3962 39.5001 47.5962 39.5001C31.7962 39.5001 18.9961 32.5 18.9961 23.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.7961 15.2001L18.9961 23.8001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.2949 15.2001L76.1948 23.8001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.6959 11.9001C21.1959 11.7001 20.6959 11.5001 20.4959 11.5001C17.2959 10.4001 9.59601 11.3 9.59601 15.1C9.59601 16.4 10.7959 17.5 12.4959 18.1C13.2959 18.4 16.996 19.4001 16.096 23.4001C16.096 23.5001 15.796 24.2001 15.796 25.3001C15.696 26.5001 15.796 28.1 15.796 28.2C15.796 28.3 6.49586 32.3 8.19587 35.2C9.89587 38.1 13.196 39.6001 18.296 38.8001C23.396 38.0001 24.096 38.1 31.596 40.4C39.196 42.7 47.6959 42.8001 47.6959 42.8001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.5957 42.8C52.4957 42.9 59.2955 41.8 63.8955 40.4C71.4955 38.1 72.0956 38 77.1956 38.8C82.2956 39.6 85.6957 38.1 87.2957 35.2C88.9957 32.3 79.6956 28.3 79.6956 28.2C79.6956 28.1 79.7956 26.5 79.6956 25.3C79.5956 24.2 79.3955 23.5001 79.3955 23.4001C78.5955 19.4001 82.1956 18.4 82.9956 18.1C84.6956 17.5 85.8955 16.4 85.8955 15.1C85.8955 10.7 75.3957 10.2 73.7957 12.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.99609 34.9V40.8C7.99609 40.8 8.696 45.3 13.896 45.3C19.096 45.3 22.6962 43.7 28.0962 45.6C42.5962 50.7 51.5961 50.3 66.4961 46.4C70.6961 45.3 73.896 45.3 78.396 46.1C82.896 46.8 86.7961 42.7 86.7961 42.3C86.8961 41 87.2962 37.6 87.5962 35.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M88.0947 34.1C91.6947 37.8 93.7947 42.1 93.7947 46.7C93.7947 61.2 73.0947 72.9 47.5947 72.9C22.0947 72.9 1.39453 61.1 1.39453 46.7C1.39453 41.9 3.69458 37.4 7.69458 33.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M93.9956 47.0001C98.0956 69.8001 64.2957 78.8 47.5957 78.8C30.3957 78.8 -3.0045 70.4 1.3955 46.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.3953 58.9C27.4953 58.9 30.0955 60.3001 30.0955 62.0001C30.0955 63.7001 27.5953 65.1 24.3953 65.1C21.2953 65.1 18.6953 63.7001 18.6953 62.0001C18.6953 60.3001 21.2953 58.9 24.3953 58.9Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.2957 58.9C73.3957 58.9 75.9956 60.3001 75.9956 62.0001C75.9956 63.7001 73.4957 65.1 70.2957 65.1C67.0957 65.1 64.5957 63.7001 64.5957 62.0001C64.5957 60.3001 67.1957 58.9 70.2957 58.9Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.0955 46.4C74.0955 54.2 62.2953 60.5001 47.6953 60.5001C33.2953 60.5001 21.5954 54.4001 21.2954 46.7001C21.2954 46.6001 21.1953 44.8001 21.1953 44.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.095 76.3V86.5001C28.095 87.8001 26.9948 88.9 25.6948 88.9H23.1948C21.8948 88.9 20.7949 87.8001 20.7949 86.5001V73.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.5957 76.2001V86.5001C66.5957 87.8001 67.6956 88.9 68.9956 88.9H71.4956C72.7956 88.9 73.8955 87.8001 73.8955 86.5001V73.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'radiator'"
    id="radiator"
    width="109"
    height="91"
    viewBox="0 0 109 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M80.7926 57.1927C84.2193 42.6807 75.2328 28.1384 60.7208 24.7117C46.2087 21.285 31.6665 30.2715 28.2398 44.7835C24.8131 59.2956 33.7995 73.8378 48.3116 77.2645C62.8236 80.6912 77.3659 71.7048 80.7926 57.1927Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.4996 39.5C60.7996 39.5 65.8996 44.6 65.8996 50.9C65.8996 57.2 60.7996 62.3 54.4996 62.3C48.1996 62.3 43.0996 57.2 43.0996 50.9C43.0996 44.6 48.2996 39.5 54.4996 39.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.5008 44.7C57.9008 44.7 60.7008 47.5 60.7008 50.9C60.7008 54.3 57.9008 57.1 54.5008 57.1C51.1008 57.1 48.3008 54.3 48.3008 50.9C48.3008 47.5 51.1008 44.7 54.5008 44.7Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M63.2 43.6C63.2 43.6 67.6 43.5 68.6 41.6C70.3 38.3 70 28.4999 66.2 27.1999L58.8 25C57.8 24.6 57.8 24.4 58.2 25.3C61.7 33 60.9 35.3999 56.5 39.6999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.0008 51.6C67.0008 52.4 69.7008 54.5 71.3008 54C74.8008 52.8 81.5008 45.6 79.7008 42L76.0008 35.3C75.5008 34.3 75.7008 34.2 75.3008 35.1C72.4008 43.1 70.0008 44.1999 63.8008 44.1999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62 59.6C62 59.6 62.2 64.1 64.2 65C67.5 66.6 77.4 66.1 78.6 62.3L80.6 54.9C80.9 53.8 81.1 53.9 80.2 54.3C72.6 58 70.1 57.3 65.7 53"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.1993 49.8999C43.1993 49.8999 39.5993 46.8999 37.5993 47.5999C34.0993 48.8999 27.5993 56.1999 29.4993 59.7999L33.3993 66.3999C33.8993 67.3999 33.7993 67.4999 34.0993 66.5999C36.7993 58.4999 38.9993 57.3999 45.1993 57.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.8001 42.3C46.8001 42.3 46.4001 37.3 44.5001 36.4C41.1001 34.9 31.3001 35.6 30.2001 39.5L28.3001 47C28.0001 48.1 27.8001 48 28.7001 47.6C36.2001 43.7 38.9001 44.5 43.4001 48.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.1003 39.6C55.1003 39.6 58.4003 35.3 57.6003 33.3C56.2003 29.8 48.7003 23.5 45.2003 25.5L38.7003 29.6C37.7003 30.2 37.6003 30 38.6003 30.3C46.7003 32.8 48.0003 35.1 48.3003 41.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.6994 58.6C45.6994 58.6 41.1994 58.9 40.3994 60.9C38.8994 64.3 39.5994 74.1 43.4994 75.2L50.9994 77C52.0994 77.3 51.9994 77.5 51.5994 76.6C47.6994 69.1 48.4994 66.6 52.6994 62.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.7998 62.4C53.7998 62.4 50.6998 65.9 51.3998 67.9C52.6998 71.4 59.9998 77.9 63.5998 76L70.1998 72.1C71.1998 71.6 71.2998 71.7 70.3998 71.4C62.2998 68.7 61.1998 66.4 61.0998 60.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.5 12.6H107.5C107.8 12.6 108 12.8 108 13.1V19.4C108 19.7 107.8 19.9 107.5 19.9H1.5C1.2 19.9 1 19.7 1 19.4V13.1C1 12.8 1.3 12.6 1.5 12.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103 19.9H6V82.0001H103V19.9Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.9008 5.40002H54.2008C56.2008 5.40002 57.8008 7.00006 57.8008 9.00006V12.6H12.3008V9.00006C12.3008 7.00006 13.9008 5.40002 15.9008 5.40002Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.8992 1H34.7992C35.9992 1 36.9992 1.99995 36.9992 3.19995V5.39996H18.6992V3.19995C18.6992 1.99995 19.6992 1 20.8992 1Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.7 28.4H103M6 28.4H40.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.5 39.2H103.1M6 39.2H30"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M81.6 50.1H103.1M6 50.1H27.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79 61H103M6 61H29.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M71.5 71.9H103M6 71.9H37.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.5 82.1H107.5C107.8 82.1 108 82.3 108 82.6V88.9C108 89.2 107.8 89.4 107.5 89.4H1.5C1.2 89.4 1 89.2 1 88.9V82.6C1 82.4 1.3 82.1 1.5 82.1Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'branch-pipe'"
    id="branch-pipe"
    width="108"
    height="90"
    viewBox="0 0 108 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M22.2005 65.8C33.1005 64.9 42.0005 69.2 42.0005 75.5C42.1005 81.8 33.3004 87.6 22.4004 88.5C11.5004 89.4 2.60045 85.1 2.60045 78.8C2.50045 72.5 11.3005 66.7 22.2005 65.8Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.1995 69.4C30.9995 68.7 38.1995 71.8 38.1995 76.2C38.2995 80.6 31.1995 84.7 22.3995 85.4C13.5995 86.1 6.39948 83 6.39948 78.6C6.29948 74.2 13.3995 70.1 22.1995 69.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.1992 3.29991C30.9992 -0.800088 40.1992 -6.29425e-05 47.7992 6.19994C55.2992 12.3999 58.2992 20.5999 54.4992 24.6999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27 3.5L10.1 23.3C10.1 23.3 1 35.1 1 45.8C1 56.5 2.59998 78.5 2.59998 78.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.6006 24.5C49.0006 32.7 39.5007 41.3 40.2007 51.3L42.0007 74.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M72.9993 65.8C83.8993 64.9 92.7993 69.2 92.7993 75.5C92.8993 81.8 84.0993 87.6 73.1993 88.5C62.2993 89.4 53.3993 85.1 53.3993 78.8C53.2993 72.5 62.0993 66.7 72.9993 65.8Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M72.9006 69.4C81.7006 68.7 88.9006 71.8 88.9006 76.2C89.0006 80.6 81.9007 84.7 73.1007 85.4C64.3007 86.1 57.1007 83 57.1007 78.6C57.0007 74.2 64.1006 70.1 72.9006 69.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78 3.29991C81.8 -0.800088 91 -6.29425e-05 98.6 6.19994C106.1 12.3999 109.1 20.5999 105.3 24.6999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.8008 3.5L60.9008 23.3C60.9008 23.3 51.8008 35.1 51.8008 45.8C51.8008 56.5 53.4008 78.5 53.4008 78.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M105.3 24.5C99.6999 32.7 90.1999 41.3 90.8999 51.3L92.7 74.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'thermostat'"
    id="thermostat"
    width="79"
    height="90"
    viewBox="0 0 79 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M68.3 18.5082C74.1 20.7082 77.6 23.5083 77.6 26.7083C77.6 33.6083 60.4 39.2083 39.2 39.2083C18 39.2083 1 32.5083 1 25.6083C1 22.5083 4.60001 19.5082 10.2 17.3082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.7992 14.4082C55.8992 15.1082 62.8992 17.0082 62.8992 19.2082C62.8992 22.0082 52.2992 24.3082 39.2992 24.3082C26.1992 24.3082 15.6992 22.0082 15.6992 19.2082C15.6992 17.0082 22.2992 15.1082 31.3992 14.4082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.4008 69.9083C55.6008 71.5083 62.6008 75.1082 62.6008 79.0082C62.6008 84.4082 52.1008 88.7083 39.2008 88.7083C26.3008 88.7083 15.8008 84.4082 15.8008 79.0082C15.8008 74.4082 23.5008 70.6083 33.8008 69.6083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.5008 74.0083C50.2008 74.5083 53.8008 77.5083 53.8008 79.1083C53.8008 82.4083 47.3008 85.1083 39.3008 85.1083C31.3008 85.1083 24.8008 82.4083 24.8008 79.1083C24.8008 76.6083 28.4008 75.2083 30.3008 74.3083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.6992 59.6083V67.5083M33.6992 68.5083V59.5083M33.6992 74.5083V69.0083M33.7992 80.6083C33.7992 80.5083 33.7992 80.4083 33.7992 80.3083V74.8083M44.6992 67.8083V73.2083V79.5083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.7006 59.5083C48.4006 61.5083 49.5006 64.8083 45.9007 67.1083C43.5006 68.7083 38.8007 69.7083 33.9007 69.0083C31.3007 68.6083 27.7006 66.3083 30.7006 64.5083C31.7006 63.9083 32.8006 63.7083 33.8006 63.7083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.8997 67.7083C47.1997 69.1083 48.1997 71.4082 45.0997 73.0082C42.9997 74.1082 38.5997 75.0082 34.1997 74.5082C31.8997 74.2082 28.6997 73.8082 31.3997 72.5082C32.0997 72.2082 32.8997 72.0082 33.5997 72.0082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.3006 73.1083C48.1006 74.7083 49.0006 77.6083 45.9006 79.2083C43.4006 80.5083 38.3006 81.6082 33.2006 81.0082C30.5006 80.7082 26.8006 80.1083 30.0006 78.7083C31.3006 78.1083 32.8006 78.0082 33.8006 78.0082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.0008 13.6083C33.0008 13.6083 29.8008 15.1083 29.8008 16.7083C29.8008 18.3083 33.9008 19.5082 38.9008 19.5082C43.9008 19.5082 48.0008 18.2083 48.0008 16.7083C48.0008 15.1083 45.0008 13.8082 45.0008 13.8082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.4 12.0082C43.6 12.3082 45.2 12.9082 45.2 13.6082C45.2 14.6082 42.5 15.3082 39.1 15.3082C35.7 15.3082 33 14.5082 33 13.6082C33 12.8082 34.8 12.1082 37.4 11.9082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.8008 22.3083L29.9008 17.0083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48 22.4083L48.1 16.7083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.2004 19.3082C49.5004 19.8082 50.3004 20.3083 50.3004 20.9083C50.3004 22.4083 45.3004 23.7083 39.1004 23.7083C32.9004 23.7083 27.9004 22.5083 27.9004 20.9083C27.9004 20.3083 28.6004 19.8082 29.9004 19.3082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M68.5002 19.8082C68.4002 22.8082 66.7003 24.1082 64.2003 25.3082C59.0003 27.9082 49.7003 29.6083 39.1003 29.6083C34.8003 29.6083 5.60026 28.6083 10.4003 17.0083C13.5003 9.70826 22.4003 9.20827 22.4003 9.20827L30.3002 4.30824C30.3002 4.30824 35.6003 0.808256 38.9003 1.00826C42.2003 1.20826 43.9002 2.00827 47.5002 4.20827C51.1002 6.40827 56.7003 9.80824 56.7003 9.80824C61.3003 10.4082 68.7002 14.6082 68.5002 19.8082Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39 59.4083L54.6 59.5083C54.6 59.5083 56 59.3083 56.2 58.5083C56.5 57.7083 56.8 55.9083 57.5 55.3083C58.1 54.7083 59.3 54.3083 59.4 53.3083C59.5 52.3083 60 50.2083 61.1 49.2083C62.2 48.2083 69.2 39.1083 69.2 39.1083C69.2 39.1083 71.1 37.5083 72.5 36.8083C73.9 36.1083 73.8 32.5083 73.8 32.5083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.30078 33.3082V34.0082L17.8008 43.9083C17.8008 43.9083 19.5008 45.7083 19.8008 46.6083C20.1008 47.4083 20.1008 47.6083 20.1008 47.6083L22.1008 46.7083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.1008 35.3082L59.9008 42.8082L57.8008 44.9083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.9 46.1083V50.0082C41.8 52.8082 35.2 52.8082 29 50.0082M48.9 38.9083V43.1083M29 46.8082V38.6083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.6004 59.4083L23.0004 59.5082C23.0004 59.5082 21.6004 59.3082 21.4004 58.5082C21.1004 57.7082 20.8004 55.9082 20.1004 55.3082C19.5004 54.7082 18.3004 54.3082 18.2004 53.3082C18.1004 52.3082 17.6004 50.2083 16.5004 49.2083C15.4004 48.2083 8.40042 39.1083 8.40042 39.1083C8.40042 39.1083 6.50044 37.5082 5.10044 36.8082C3.70044 36.1082 3.80039 30.8082 3.80039 30.8082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5996 15.9083C21.5996 15.9083 26.0996 12.3083 28.5996 11.3083C31.0996 10.2083 36.1996 8.0083 36.1996 8.0083L37.3996 8.70831V14.2083H41.2996V9.0083L41.9996 8.30829L51.2996 12.1083L57.0996 16.0083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M68.4992 20.2083C69.2992 21.2083 69.6992 22.3082 69.6992 23.5082C69.6992 30.0082 56.2992 34.9083 39.2992 34.9083C22.2992 34.9083 8.19922 29.2083 8.19922 22.7083C8.19922 21.5083 8.89922 20.4082 9.69922 19.3082"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.8993 40.5083C28.2993 40.8083 27.7992 41.1083 27.2992 41.4083C24.9992 42.7083 23.6992 44.1083 23.7992 45.1083V45.2083C23.9992 46.1083 25.4992 46.7083 27.7992 47.0083C30.4992 47.4083 34.0993 47.3083 38.0993 46.6083C38.4993 46.5083 38.9993 46.4083 39.5993 46.3083C43.8993 45.4083 47.7993 43.9083 50.3993 42.4083C52.6993 41.1083 53.9993 39.7083 53.8993 38.7083V38.6083M56.2992 38.0083C56.2992 38.1083 56.2992 38.2083 56.2992 38.2083C56.5992 40.3083 54.7992 42.4083 51.6992 44.3083C48.7992 46.0083 44.7992 47.6083 40.1992 48.5083C39.6992 48.6083 39.1993 48.7083 38.5993 48.8083C34.3993 49.6083 30.4992 49.7083 27.4992 49.3083C24.1992 48.8083 21.8992 47.5083 21.4992 45.6083V45.5083V45.4083C21.1992 43.3083 22.9993 41.2083 26.0993 39.3083C26.5993 39.0083 27.0993 38.7083 27.5993 38.5083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.101 49.4083C25.101 50.7083 24.001 51.9082 24.101 52.8082V52.9083C24.301 53.8083 25.901 54.5082 28.201 54.8082C31.001 55.2082 34.801 55.1082 38.901 54.3082C39.401 54.2082 39.901 54.1082 40.501 54.0082C45.001 53.0082 49.0009 51.5083 51.8009 49.9083C54.2009 48.5083 55.501 47.1083 55.401 46.1083V46.0082C55.201 45.2082 54.001 44.6083 52.001 44.2083M54.5009 42.2083C56.4009 42.9083 57.7009 44.0083 58.0009 45.4083V45.5082V45.6083C58.3009 47.7083 56.501 50.0082 53.201 52.0082C50.201 53.8082 46.001 55.4083 41.201 56.4083C40.701 56.5083 40.101 56.6083 39.501 56.7083C35.101 57.5083 31.001 57.6083 28.001 57.2083C24.501 56.7083 22.2009 55.4082 21.8009 53.3082V53.2083V53.1083C21.6009 51.6083 22.501 50.0083 24.201 48.4083"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'hose'"
    id="hose"
    width="120"
    height="90"
    viewBox="0 0 120 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M84.5 18.7C90.2 26 93.6 35.1 93.6 44.9C93.6 69.2 72.8999 88.8 47.2999 88.8C21.6999 88.8 1 69.1 1 44.9C1 20.6 21.6999 1 47.2999 1C57.5999 1 67.2 4.19998 74.9 9.59998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.9996 67.2001C59.3708 67.2001 69.3997 56.4997 69.3997 43.3C69.3997 30.1004 59.3708 19.4 46.9996 19.4C34.6285 19.4 24.5996 30.1004 24.5996 43.3C24.5996 56.4997 34.6285 67.2001 46.9996 67.2001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.8993 13.7001C87.2993 41.7001 67.5992 80.8 32.6992 80.8C27.1992 80.8 21.9992 80.0001 17.1992 78.2001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.5996 15.3C91.7996 40.2 77.1996 84.4 37.4996 84.4C32.2996 84.4 27.1996 83.7001 22.5996 82.0001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M113.5 18.9L117.2 20.3L113 31.5001L106.5 33.1L107.3 29.7001L106.4 29.3L109.2 21.7001L110.7 22.0001L113.5 18.9Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.90039 36.7001C17.3004 -8.19993 79.0003 5.40003 108.7 23.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62.9006 60.1C56.6006 72.7 31.3006 80.8001 18.0006 69.5001C10.9006 63.5001 6.20061 52.8001 7.00061 43.0001C9.20061 15.2001 39.5005 10 62.8005 13.1C80.0005 15.5 98.2006 23.6001 106.701 28.0001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.1 17C103.1 49.3 75.2 93.3 36 87.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.1005 74.8C35.9005 74.7 35.4005 74.6 35.2005 74.5C1.70045 63.5 13.3004 15.7 46.8004 19.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.9009 72.9C22.9009 69.2 18.8009 48.7 26.4009 33.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.4004 12.4C59.6004 13.1 72.3003 24.3001 74.7003 37.2001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M106.6 60.8C106.6 60.8 97.8999 68.8 93.7999 71.8C80.4999 81.7 72.3 84.1 56.5 88M82.2 73.9C89.2 68.8 96.2 63.3 102.7 57.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M116.801 46.6C118.201 47.9 119.001 49.3001 118.601 49.7001L107.701 60.9C107.701 60.9 107.701 60.9 107.701 61C107.301 61.4 105.901 60.6001 104.501 59.2001C103.101 57.9001 102.301 56.5 102.701 56.1L102.801 56.0001L113.601 44.9C113.601 44.9 113.601 44.8 113.701 44.8C114.101 44.5 115.501 45.3 116.801 46.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M106.5 52.8L111.2 57.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M110.6 48.3L115.3 52.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'caliper'"
    id="caliper"
    width="84"
    height="90"
    viewBox="0 0 84 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M74.4 23.5024C79.6 30.3024 82.6 38.8024 82.6 48.1024C82.6 70.6024 64.3 88.9023 41.8 88.9023C19.3 88.9023 1 70.6024 1 48.1024C1 38.9024 4.10001 30.3024 9.20001 23.5024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.3614 55.6358C69.5248 42.6451 62.3687 28.7389 49.378 24.5756C36.3873 20.4122 22.4811 27.5682 18.3177 40.5589C14.1544 53.5497 21.3104 67.4558 34.3011 71.6192C47.2919 75.7826 61.198 68.6266 65.3614 55.6358Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.7992 30.9023C51.2992 30.9023 58.8992 38.6024 58.8992 48.0024C58.8992 57.4024 51.1992 65.1024 41.7992 65.1024C32.3992 65.1024 24.6992 57.4024 24.6992 48.0024C24.6992 38.6024 32.2992 30.9023 41.7992 30.9023Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.8 40.8024C45.8 40.8024 49.1 44.1024 49.1 48.1024C49.1 52.1024 45.8 55.4023 41.8 55.4023C37.8 55.4023 34.5 52.1024 34.5 48.1024C34.5 44.1024 37.8 40.8024 41.8 40.8024Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.40039 20.0024L10.8004 23.7024C10.8004 23.7024 14.0004 24.1024 16.3004 23.3024C18.7004 22.5024 22.0004 21.7024 22.0004 21.7024C22.0004 21.7024 24.5004 23.7024 27.0004 23.7024C29.5004 23.7024 33.0004 21.9023 33.0004 21.9023L36.8004 20.6023H41.5004H41.6004H46.3004L50.1004 21.9023C50.1004 21.9023 53.6004 23.7024 56.1004 23.7024C58.6004 23.7024 61.1004 21.7024 61.1004 21.7024C61.1004 21.7024 64.4004 22.5024 66.8004 23.3024C69.2004 24.1024 72.3004 23.7024 72.3004 23.7024L80.7004 20.0024C80.7004 20.0024 76.6004 15.5023 73.5004 12.6023C70.4004 9.60234 64.1004 7.00237 64.1004 7.00237H61.0004L60.6004 6.90233C60.5004 6.10233 59.8004 5.40233 58.9004 5.40233C58.4004 5.40233 57.9004 5.70234 57.6004 6.10234L57.4004 6.00237C57.4004 6.00237 52.4004 6.80237 50.9004 7.00237C49.4004 7.20237 48.9004 6.60234 48.9004 6.60234C48.9004 6.60234 45.2004 3.30237 43.9004 2.00237C42.8004 0.902367 41.7004 1.00237 41.5004 1.00237C41.3004 1.00237 40.2004 0.902367 39.1004 2.00237C37.8004 3.30237 34.1004 6.60234 34.1004 6.60234C34.1004 6.60234 33.6004 7.10237 32.1004 7.00237C30.6004 6.80237 25.6004 6.00237 25.6004 6.00237L25.4004 6.10234C25.1004 5.70234 24.6004 5.40233 24.1004 5.40233C23.2004 5.40233 22.5004 6.10233 22.4004 6.90233L22.0004 7.00237H18.9004C18.9004 7.00237 12.7004 9.60234 9.50037 12.6023C6.50037 15.5023 2.40039 20.0024 2.40039 20.0024Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.9035 15.5099C32.0437 12.4202 29.6526 9.80184 26.5629 9.66169C23.4732 9.52154 20.8548 11.9126 20.7147 15.0023C20.5746 18.092 22.9657 20.7104 26.0554 20.8505C29.1451 20.9907 31.7634 18.5996 31.9035 15.5099Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.0004 7.00238C45.1004 7.00238 47.6004 9.50236 47.6004 12.6024C47.6004 15.7024 45.1004 18.2024 42.0004 18.2024C38.9004 18.2024 36.4004 15.7024 36.4004 12.6024C36.4004 9.50236 38.9004 7.00238 42.0004 7.00238Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M59.918 20.8209C63.0062 20.6499 65.371 18.0078 65.1999 14.9197C65.0289 11.8315 62.3868 9.46667 59.2986 9.6377C56.2105 9.80874 53.8457 12.4509 54.0167 15.539C54.1878 18.6272 56.8299 20.9919 59.918 20.8209Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.8004 39.0024C43.1259 39.0024 44.2004 37.9278 44.2004 36.6024C44.2004 35.2769 43.1259 34.2024 41.8004 34.2024C40.4749 34.2024 39.4004 35.2769 39.4004 36.6024C39.4004 37.9278 40.4749 39.0024 41.8004 39.0024Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.7995 41.1024C30.4995 40.0024 31.8995 39.6024 32.9995 40.2024C34.0995 40.9024 34.4995 42.3024 33.8995 43.4024C33.1995 44.5024 31.7995 44.9024 30.6995 44.3024C29.4995 43.7024 29.0995 42.3024 29.7995 41.1024Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.7995 55.0024C29.0995 53.9024 29.4995 52.4024 30.6995 51.8024C31.7995 51.1024 33.2995 51.5024 33.8995 52.7024C34.5995 53.8024 34.1995 55.3024 32.9995 55.9024C31.8995 56.5024 30.4995 56.1024 29.7995 55.0024Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.8004 61.9023C43.1259 61.9023 44.2004 60.8279 44.2004 59.5024C44.2004 58.1769 43.1259 57.1024 41.8004 57.1024C40.4749 57.1024 39.4004 58.1769 39.4004 59.5024C39.4004 60.8279 40.4749 61.9023 41.8004 61.9023Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.8006 55.0024C53.1006 56.1024 51.7006 56.5024 50.6006 55.9024C49.5006 55.2024 49.1006 53.8024 49.7006 52.7024C50.4006 51.6024 51.8006 51.2024 52.9006 51.8024C54.1006 52.4024 54.4006 53.9024 53.8006 55.0024Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.7999 41.1024C54.4999 42.2024 54.0999 43.7024 52.8999 44.3024C51.7999 45.0024 50.2999 44.6024 49.6999 43.4024C48.9999 42.3024 49.3999 40.8024 50.5999 40.2024C51.6999 39.6024 53.0999 40.0024 53.7999 41.1024Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 29.8024L20 29.9023"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.9008 37.2024L5.30078 40.8024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9008 44.6024L2.80078 49.6024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.4 52.9023L6 60.0024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.3992 60.3024L8.69922 69.1024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.6 67.1024L16 76.8024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 71.9023L22.7 81.9023"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.1992 76.0023L33.2992 86.1024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.0996 78.0023L41.0996 87.3024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.5 78.1024L52.4 85.8024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.0996 77.6024L60.4996 82.5023"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.6992 73.0023L68.9992 75.2024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M63.6992 68.7024L74.7992 68.8024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.9004 61.5024L78.6004 58.4023"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M71.5996 54.4023L80.6996 49.4023"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.0004 38.6024L71.4004 45.8024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75.7 29.6024L71 38.2024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.8992 25.4023L65.6992 31.6024"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'brake-pad'"
    id="brake-pad"
    width="105"
    height="90"
    viewBox="0 0 105 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M99.1 12.9C85.5 5.29996 69.7 1 53 1C35.6 1 19.2 5.69996 5.20001 13.9V17.9C5.20001 17.9 5.10004 18.8 3.60004 18.8C2.10004 18.8 1 18.8 1 18.8V26.2H6.80005L7.30005 34.7L20.8 43.4L28.7 43.7C28.7 43.7 41 40.7 50.6 40.2C51.4 40.2 52.2 40.1 52.9 40.1C62.7 40.1 74.7 43.1 74.7 43.1H84.3L97.4 34.1V25.6H103.6V17.8H99.3L99.1 12.9Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.5996 10L51.0996 40.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.0996 10L56.6996 40.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.8996 43.6L15.9996 36.6C12.7996 33.8 12.5996 29.8 12.5996 29.8V13.8C24.7996 7.99999 38.4996 4.79999 52.8996 4.79999C66.8996 4.79999 80.1996 7.79999 92.1996 13.3V28.8C92.1996 28.8 92.1996 32.4 88.7996 36C85.4996 39.6 80.3996 42.8 80.3996 42.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M99.1 58.1C85.5 50.5 69.7 46.2 53 46.2C35.6 46.2 19.2 50.9 5.20001 59.1V63.1C5.20001 63.1 5.10004 64 3.60004 64C2.10004 64 1 64 1 64V71.4H6.80005L7.30005 79.9L20.8 88.6L28.7 88.9C28.7 88.9 41 85.9 50.6 85.4C51.4 85.4 52.2 85.2999 52.9 85.2999C62.7 85.2999 74.7 88.2999 74.7 88.2999H84.3L97.4 79.2999V70.7999H103.6V63H99.3L99.1 58.1Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.5996 55.1L51.0996 85.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.0996 55.1L56.6996 85.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.8996 88.7L15.9996 81.7C12.7996 78.9 12.5996 74.9 12.5996 74.9V58.9C24.7996 53.1 38.4996 49.9 52.8996 49.9C66.8996 49.9 80.1996 52.9 92.1996 58.4V73.9C92.1996 73.9 92.1996 77.5 88.7996 81.1C85.4996 84.7 80.3996 87.9 80.3996 87.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'brake-cylinder'"
    id="brake-cylinder"
    width="134"
    height="90"
    viewBox="0 0 134 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M94.8917 32.2908C106.092 37.4908 109.992 52.9908 103.592 66.9908C97.1917 80.9908 82.8917 88.1909 71.5917 82.9909C60.3917 77.7909 56.4917 62.2908 62.8917 48.2908C69.3917 34.2908 83.6917 27.1908 94.8917 32.2908Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M91.4926 39.7908C99.3926 43.3908 102.193 54.3908 97.5926 64.2908C93.0926 74.1908 82.9926 79.1909 75.0926 75.5909C67.1926 71.9909 64.3926 60.9909 68.9926 51.0909C73.4926 41.1909 83.5926 36.1908 91.4926 39.7908Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M105.791 20.5909C108.591 21.0909 110.491 23.9909 109.991 27.1909C109.491 30.2909 106.691 32.4909 103.891 31.9909C101.091 31.4909 99.1912 28.5909 99.6912 25.3909C100.291 22.2909 102.991 20.0909 105.791 20.5909Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M123.591 12.2908C125.591 12.5908 126.891 14.6909 126.491 16.8909C126.091 19.0909 124.191 20.5908 122.191 20.2908C120.191 19.9908 118.891 17.8908 119.291 15.6908C119.691 13.3908 121.591 11.8908 123.591 12.2908Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.7922 71.6909C20.7922 71.9909 22.0922 74.0909 21.6922 76.2909C21.2922 78.4909 19.3922 79.9909 17.3922 79.6909C15.3922 79.3909 14.0922 77.2909 14.4922 75.0909C14.7922 72.7909 16.7922 71.2909 18.7922 71.6909Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.0913 58.3909C43.8913 59.3909 45.3913 62.6909 44.2913 65.7909C43.1913 68.8909 40.0913 70.6909 37.1913 69.6909C34.3913 68.6909 32.8914 65.3909 33.9914 62.2909C35.0914 59.0909 38.2913 57.3909 41.0913 58.3909Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62.0929 81.1909C61.0929 81.6909 59.7929 82.2908 59.0929 82.2908C58.1929 82.2908 57.7929 81.3908 57.3929 80.7908C56.9929 79.9908 56.8929 79.9908 55.8929 80.3908C55.3929 80.5908 54.6929 80.7909 53.8929 80.9909C51.6929 81.3909 51.393 80.6908 50.493 79.3908C47.893 75.8908 45.593 74.1909 41.293 76.9909L26.293 86.1909C20.193 90.5909 13.4929 89.7909 9.39293 86.1909C4.89293 82.2909 2.59297 74.0909 9.49297 67.1909L39.793 37.0909L90.1929 10.6909L94.3929 8.19086L117.793 3.69086C124.993 2.49086 134.093 3.89084 132.793 13.9908C131.493 23.5908 122.493 30.6908 116.293 33.4908C106.193 37.9908 106.793 39.1909 106.393 48.8909"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.79201 85.3908L2.79201 79.9909C1.19201 77.6909 0.791999 74.8909 1.092 72.4909C1.792 65.7909 13.292 53.4908 18.992 49.6908L28.892 43.1908C28.892 43.1908 30.492 42.2909 30.592 40.3909C30.792 38.4909 32.092 35.0908 36.792 32.9908C41.492 30.9908 45.992 25.4908 45.992 25.4908C45.992 25.4908 49.192 21.8909 52.992 21.0909C56.792 20.2909 60.892 19.3908 60.892 19.3908L66.392 16.5909L82.592 8.19084C83.792 7.59084 85.392 6.99085 86.792 7.39085C87.892 7.59085 90.092 7.99082 91.692 7.99082C95.792 7.99082 107.492 -1.40914 118.492 1.59086L124.692 3.19084"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.8918 41.5909C79.0918 45.0909 78.8918 49.4909 77.1918 53.5909C75.1918 58.4909 71.3918 61.7909 67.5918 62.5909"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75.2921 84.1908C71.6921 84.5908 68.0921 84.0909 64.6921 82.4909C52.5921 76.9909 48.4921 60.2908 55.3921 45.1908C62.2921 30.1908 77.6921 22.3908 89.7921 27.9908C92.0921 29.0908 94.1921 30.5909 95.8921 32.3909"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'disc'"
    id="disc"
    width="152"
    height="90"
    viewBox="0 0 152 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M77.4004 70.543C69.9004 76.943 59.3003 80.943 47.6003 80.943C24.8003 80.943 6.40039 65.843 6.40039 47.243C6.40039 28.643 24.9003 13.543 47.6003 13.543C55.0003 13.543 61.9004 15.143 67.9004 17.943"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.8992 66.743C69.2992 73.143 60.4991 77.443 50.4991 77.443C35.6991 77.443 23.6992 68.1429 23.6992 56.6429C23.6992 45.1429 35.6991 35.843 50.4991 35.843C54.7991 35.843 58.7992 36.643 62.3992 38.043"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M82.2001 75.043C73.6001 82.443 61.5 87.043 48 87.043C22 87.043 1 69.843 1 48.543C1 27.243 22.1 10.043 48 10.043C56.2 10.043 63.9001 11.743 70.7001 14.843"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.0007 47.1429C55.9007 47.1429 60.7008 51.043 60.7008 55.943C60.7008 60.843 55.9007 64.743 50.0007 64.743C44.1007 64.743 39.3008 60.843 39.3008 55.943C39.3008 51.043 44.1007 47.1429 50.0007 47.1429Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.2008 68.043C13.6008 64.643 12.8008 60.543 12.8008 56.743C12.8008 39.743 29.7007 25.943 50.5007 25.943C54.9007 25.943 59.2007 26.543 63.1007 27.743"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.1997 63.743C37.8997 63.743 39.2997 64.843 39.2997 66.243C39.2997 67.643 37.8997 68.7429 36.1997 68.7429C34.4997 68.7429 33.0996 67.643 33.0996 66.243C33.0996 64.843 34.4997 63.743 36.1997 63.743Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62.3004 64.6429C63.9004 64.6429 65.2004 65.7429 65.2004 67.1429C65.2004 68.5429 63.9004 69.6429 62.3004 69.6429C60.7004 69.6429 59.4004 68.5429 59.4004 67.1429C59.4004 65.7429 60.7004 64.6429 62.3004 64.6429Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.3004 41.843C40.9004 41.843 42.2004 42.943 42.2004 44.343C42.2004 45.743 40.9004 46.843 39.3004 46.843C37.7004 46.843 36.4004 45.743 36.4004 44.343C36.4004 42.943 37.7004 41.843 39.3004 41.843Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.0007 53.243C34.2007 53.243 35.2008 54.0429 35.2008 55.1429C35.2008 56.1429 34.2007 57.043 33.0007 57.043C31.8007 57.043 30.8008 56.2429 30.8008 55.1429C30.8008 54.0429 31.8007 53.243 33.0007 53.243Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M102.599 7.34294C109.699 6.34294 117.899 9.34293 125.099 14.6429C131.999 19.7429 137.699 26.7429 140.799 34.3429C143.699 41.4429 143.699 47.743 141.699 52.243C139.799 56.543 135.799 59.5429 130.299 60.1429C124.799 60.8429 118.499 59.143 112.599 55.743C106.399 52.243 100.399 46.743 95.999 39.943C91.299 32.643 89.399 25.243 90.299 19.243C91.399 12.843 95.4989 8.24294 102.599 7.34294Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M94.4 1.24297C104.1 -0.0570254 115.5 3.94297 125.4 11.243C134.9 18.243 142.8 27.8429 147.1 38.3429C151.1 48.0429 151.2 56.743 148.4 63.043C145.7 69.043 140.3 73.043 132.8 73.943C125.2 74.843 116.5 72.5429 108.4 67.8429C99.9 63.0429 91.4999 55.4429 85.4999 46.1429C78.9999 36.1429 76.4 25.9429 77.7 17.6429C78.9 8.94294 84.7 2.54297 94.4 1.24297Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M112.101 22.943C117.101 22.343 123.401 26.643 126.201 32.343C128.801 37.743 127.101 42.343 122.601 42.943C118.101 43.543 112.101 39.843 109.101 34.543C105.901 28.943 107.201 23.643 112.101 22.943Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M119 16.043C119.9 15.943 121.1 16.743 121.7 17.943C122.3 19.043 122 20.0429 121.1 20.1429C120.2 20.2429 119 19.443 118.4 18.343C117.8 17.143 118.1 16.143 119 16.043Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M106.1 14.043C107 13.943 108.2 14.743 108.9 15.843C109.5 16.943 109.3 17.943 108.4 18.043C107.5 18.143 106.3 17.343 105.7 16.243C105 15.143 105.2 14.143 106.1 14.043Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M97.3 20.843C98.4 20.743 100 21.643 100.8 23.043C101.6 24.343 101.3 25.543 100.2 25.743C99.1 25.843 97.5 24.9429 96.7 23.6429C95.9 22.1429 96.2 20.943 97.3 20.843Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M113.201 45.743C114.701 45.543 116.501 46.743 117.301 48.243C118.101 49.743 117.601 51.143 116.201 51.343C114.801 51.543 112.901 50.443 112.101 48.843C111.301 47.343 111.801 45.943 113.201 45.743Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M134.2 39.1429C135.3 39.0429 136.6 39.843 137.1 41.043C137.6 42.243 137.2 43.243 136.2 43.343C135.2 43.443 133.9 42.643 133.3 41.443C132.7 40.343 133.1 39.2429 134.2 39.1429Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M143.601 69.443C141.101 79.743 130.301 87.343 120.101 88.543C105.801 90.243 89.201 82.643 77.401 70.443C74.401 67.343 71.701 63.943 69.401 60.343C62.901 50.043 61.401 37.743 62.801 28.943C64.101 20.643 70.7009 12.743 82.0009 7.44299"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M110.6 23.343C116.5 24.843 122.8 29.943 125.8 36.343C126.4 37.543 126.8 38.643 127.1 39.743"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M68.1007 25.943C67.0007 34.543 68.9008 45.843 74.9008 55.543C77.2008 59.143 79.9008 62.5429 82.9008 65.6429C94.0008 77.1429 108.501 84.2429 122.201 83.6429"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'clutch'"
    id="clutch"
    width="121"
    height="90"
    viewBox="0 0 121 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M52.8 72.3279C47.5 80.8279 39.3 86.2279 30.2 86.2279C14.1 86.2279 1 69.3279 1 48.6279C1 27.9279 14.1 11.028 30.2 11.028C37.9 11.028 44.8 14.828 50 21.028"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.0996 62.3279C44.0996 68.1279 39.1996 71.928 33.6996 71.928C24.4996 71.928 17.0996 61.5279 17.0996 48.7279C17.0996 35.9279 24.4996 25.528 33.6996 25.528C38.4996 25.528 42.7996 28.428 45.8996 32.928"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.1 56.3279C43.1 62.5279 39 66.7279 34.2 66.7279C27.5 66.7279 22 58.4279 22 48.1279C22 37.9279 27.4 29.528 34.2 29.528C39.1 29.528 43.3 33.9279 45.2 40.3279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.5996 32.428C32.7996 32.328 32.9996 32.228 33.1996 32.128C34.0996 31.928 34.9996 32.628 35.0996 33.528C35.1996 33.828 34.9996 34.428 34.8996 34.728"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.6992 33.1279C32.5992 33.0279 33.5992 33.7278 33.7992 34.8278C33.7992 35.0278 33.7992 35.2279 33.7992 35.4279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.3008 34.3278C31.3008 34.2278 32.2008 34.9279 32.4008 36.0279C32.4008 36.2279 32.4008 36.4279 32.4008 36.5279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.0996 35.528C30.0996 35.528 30.8996 36.2279 31.0996 37.2279C31.0996 37.4279 31.0996 37.5279 31.0996 37.7279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.4004 36.428C29.2004 36.528 30.0004 37.1279 30.2004 38.1279C30.3004 38.5279 30.2004 38.9279 30.1004 39.2279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.6992 37.6279C28.4992 37.7279 29.1992 38.4279 29.2992 39.3279C29.3992 39.7279 29.2992 40.128 29.1992 40.428"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.8 31.428C33 31.828 32.2 32.5279 31.9 32.8279C30 34.4279 27.8 36.5279 27 38.8279L29.3 41.028C30.7 38.328 32.4 36.128 34.8 34.928C35.5 34.628 35.5 34.228 35.3 33.428L34.9 32.3279C34.8 31.5279 34.6 31.128 33.8 31.428Z"
      stroke="#3D4143"
      stroke-width="0.5669"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M25.1992 45.528C25.1992 45.328 25.2992 45.128 25.3992 44.928C25.7992 44.128 26.6992 43.9279 27.3992 44.3279C27.6992 44.5279 27.8992 44.828 28.0992 45.128"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.0996 46.6279C25.5996 45.9279 26.5996 45.6279 27.3996 46.1279C27.4996 46.2279 27.6996 46.328 27.7996 46.528"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.0996 48.528C25.5996 47.728 26.5996 47.528 27.3996 48.028C27.4996 48.128 27.6996 48.2279 27.7996 48.3279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.3008 50.2279C25.8008 49.4279 26.8008 49.2279 27.5008 49.7279C27.6008 49.8279 27.7008 49.928 27.8008 50.028"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.4004 51.3279C25.9004 50.7279 26.8004 50.628 27.5004 51.028C27.8004 51.228 28.0004 51.5279 28.2004 51.8279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.8008 52.6279C26.3008 52.1279 27.2008 52.028 27.8008 52.428C28.1008 52.628 28.3008 52.9279 28.5008 53.2279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.2003 44.028C25.0003 44.828 25.0003 45.9279 25.0003 46.3279C24.9003 48.6279 25.1003 51.328 25.9003 53.428C26.2003 54.028 26.3003 53.9279 26.9003 53.8279L28.0003 53.728C28.7003 53.628 28.8003 53.6279 28.6003 52.8279C27.8003 50.3279 27.7003 47.828 28.0003 45.428C28.1003 44.628 27.7003 44.328 27.3003 44.028L26.3003 43.628C25.8003 43.228 25.4003 43.128 25.2003 44.028Z"
      stroke="#3D4143"
      stroke-width="0.5669"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M34.4004 64.7279C34.6004 64.8279 34.8004 64.928 35.0004 64.928C35.9004 65.028 36.6004 64.4279 36.7004 63.6279C36.7004 63.3279 36.6004 62.8279 36.4004 62.6279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.5 64.1279C34.4 64.2279 35.2 63.528 35.2 62.528C35.2 62.328 35.2 62.128 35.1 62.028"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.9004 63.028C32.8004 63.128 33.6004 62.428 33.6004 61.428C33.6004 61.228 33.6004 61.128 33.6004 60.928"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.5996 61.928C31.4996 61.928 32.1996 61.3279 32.2996 60.3279C32.2996 60.2279 32.2996 60.028 32.2996 59.928"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.8008 61.1279C30.6008 61.0279 31.2008 60.4279 31.2008 59.6279C31.2008 59.2279 31.1008 58.9279 30.9008 58.6279"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29 60.028C29.7 59.928 30.3 59.328 30.3 58.528C30.3 58.128 30.2 57.828 30 57.528"
      stroke="#3D4143"
      stroke-width="0.7087"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.5997 65.6279C34.7997 65.3279 33.9997 64.728 33.5997 64.428C31.6997 63.128 29.5997 61.4279 28.3997 59.5279C27.9997 58.9279 28.1997 58.928 28.5997 58.428L29.2997 57.6279C29.7997 57.1279 29.8997 57.0279 30.3997 57.7279C31.9997 59.8279 33.8997 61.3279 35.9997 62.5279C36.6997 62.9279 36.6997 63.328 36.6997 63.928L36.4997 64.928C36.5997 65.528 36.3997 65.9279 35.5997 65.6279Z"
      stroke="#3D4143"
      stroke-width="0.5669"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M44.7 52.6279C43.5 55.4279 40.9 57.6279 38.4 57.6279C34.6 57.6279 31.5 53.328 31.5 47.928C31.5 42.528 34.6 38.2279 38.4 38.2279C40.9 38.2279 42.9 39.7279 44.2 42.6279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.0999 73.6279C47.6999 74.2279 46.7998 73.8278 45.9998 72.8278C45.2998 71.8278 44.9999 70.5279 45.3999 70.0279C45.7999 69.4279 46.6998 69.8278 47.4998 70.8278C48.1998 71.8278 48.4999 73.1279 48.0999 73.6279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M91.7996 7.528C91.7996 7.528 93.4996 5.02795 92.6996 3.72795C91.8996 2.42795 88.9996 1.42803 88.9996 1.42803C88.9996 1.42803 88.2996 2.028 87.7996 2.028C87.2996 2.028 81.9996 1.12798 81.9996 1.12798C81.9996 1.12798 80.3996 1.828 79.8996 1.528C79.3996 1.228 78.9996 1.028 78.4996 1.028C77.8996 0.928003 75.7996 1.12798 75.7996 1.12798C75.7996 1.12798 75.0996 2.62798 74.4996 2.62798C73.8996 2.62798 71.5996 2.528 71.5996 2.528C71.5996 2.528 69.3996 3.12803 68.4996 3.92803C67.5996 4.72803 65.9996 4.528 65.9996 4.528C65.9996 4.528 63.6996 4.52793 62.9996 5.32793C62.2996 6.12793 61.7996 6.32793 61.7996 6.32793C61.7996 6.32793 61.1996 6.52795 60.8996 7.22795C60.5996 7.92795 58.6996 9.82798 58.3996 10.128C58.0996 10.428 57.5996 10.928 57.0996 11.128C56.5996 11.228 54.4996 13.728 54.4996 13.728C54.4996 13.728 53.1996 16.4279 52.5996 16.8279C51.9996 17.3279 49.1996 22.028 48.7996 22.928C48.2996 23.828 46.0996 30.228 45.9996 31.428C45.7996 32.628 45.8996 33.528 45.7996 35.228C45.6996 36.928 45.4996 40.0279 45.1996 40.8279C44.9996 41.6279 44.3996 42.628 44.3996 42.628L44.0996 43.928L44.9996 54.8279L48.3996 65.3279L54.1996 74.628C54.1996 74.628 56.5996 78.728 57.2996 78.928C57.9996 79.128 61.0996 81.3279 61.1996 81.8279C61.2996 82.3279 61.9996 83.428 62.4996 83.728C62.9996 84.028 65.1996 84.928 65.1996 84.928L68.7996 85.128C68.7996 85.128 72.9996 87.7279 73.4996 87.8279C74.0996 87.9279 76.8996 88.128 76.8996 88.128L81.0996 88.928L81.7996 88.228L87.9996 87.028L88.8996 86.628L90.3996 86.028L92.0996 84.3279V82.428L94.2996 81.228C94.2996 81.228 97.0996 81.728 98.3996 81.028C99.6996 80.228 100.5 78.528 101.1 77.028C101.7 75.528 102.8 74.428 103.6 74.028C104.4 73.628 105.6 73.0279 105.9 71.3279C106.2 69.6279 106.5 67.528 107.2 67.028C107.8 66.428 108.9 65.628 109 64.228C109 63.728 108.2 60.928 108.1 60.128"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M109.599 53.928C106.599 69.828 96.6992 81.428 84.8992 81.428C70.6992 81.428 59.1992 64.5279 59.1992 43.8279C59.1992 23.0279 70.6992 6.22791 84.8992 6.22791C96.4992 6.22791 106.299 17.5279 109.499 33.1279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M105.7 54.728C102.9 65.628 95.7999 73.128 87.3999 73.228C76.2999 73.328 67.0999 60.328 66.8999 44.028C66.6999 27.728 75.3998 14.428 86.4998 14.228C94.7998 14.128 101.9 21.328 105.2 31.728"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.4996 83.028C80.2996 83.028 80.8996 83.8279 80.8996 84.7279C80.8996 85.6279 80.2996 86.428 79.4996 86.428C78.6996 86.428 78.0996 85.6279 78.0996 84.7279C78.0996 83.8279 78.6996 83.028 79.4996 83.028Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M111.399 52.028C110.399 53.228 109.299 54.1279 107.899 54.3279C106.599 54.5279 103.499 54.9279 102.299 54.7279C98.4992 53.8279 95.6992 49.128 95.6992 43.528C95.6992 37.728 98.5992 32.6279 102.499 32.3279C103.699 32.2279 106.399 31.928 107.399 32.128C109.199 32.528 110.699 33.828 111.899 35.628"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M115.1 51.428C114.1 51.628 107.8 52.5279 106.9 52.3279C104.1 51.7279 102 48.2279 102 44.1279C102 39.9279 104.2 36.1279 107 35.8279L114 35.528"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M114.7 35.428C117.8 35.428 120.3 39.028 120.3 43.428C120.3 47.828 117.8 51.428 114.7 51.428C111.6 51.428 109.1 47.828 109.1 43.428C109.1 39.028 111.6 35.428 114.7 35.428Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M114.7 39.6279C116.2 39.6279 117.4 41.328 117.4 43.428C117.4 45.528 116.2 47.2279 114.7 47.2279C113.2 47.2279 112 45.528 112 43.428C112 41.328 113.3 39.6279 114.7 39.6279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M82.1996 32.928C86.6996 32.928 90.2996 38.1279 90.2996 44.6279C90.2996 51.0279 86.6996 56.3279 82.1996 56.3279C77.6996 56.3279 74.0996 51.1279 74.0996 44.6279C73.9996 38.1279 77.6996 32.928 82.1996 32.928Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75.7996 8.42796C73.7996 7.52796 73.3996 6.42796 73.3996 6.42796C73.3996 6.42796 72.6996 5.22794 71.9996 5.02794C71.3996 4.92794 69.7996 4.12789 69.2996 5.72789C68.7996 7.32789 68.2996 8.22791 67.5996 9.12791C66.7996 10.0279 66.2996 10.7279 65.6996 10.8279C65.0996 10.9279 63.6996 10.9279 63.3996 11.3279C63.0996 11.7279 62.3996 13.2279 62.0996 14.5279C61.7996 15.9279 60.9996 15.8279 60.7996 16.8279C60.5996 17.8279 60.3996 18.628 60.0996 18.928C59.7996 19.228 57.9996 19.8279 57.7996 20.3279C57.5996 20.9279 57.0996 22.428 57.0996 22.428C57.0996 22.428 57.1996 24.0279 57.6996 25.2279C58.1996 26.5279 60.3996 29.2279 60.3996 29.2279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.0003 80.2279C34.4003 80.5279 33.7003 79.8279 33.5003 78.6279C33.3003 77.4279 33.6003 76.1278 34.3003 75.8278C34.9003 75.5278 35.6003 76.2279 35.8003 77.4279C36.0003 78.7279 35.6003 79.9279 35.0003 80.2279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.9007 75.6279C18.3007 75.9279 17.6007 75.2279 17.4007 74.0279C17.2007 72.8279 17.5007 71.5279 18.2007 71.2279C18.8007 70.9279 19.5007 71.6278 19.7007 72.8278C19.8007 74.1278 19.5007 75.3279 18.9007 75.6279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.50028 52.5279C7.90028 52.8279 7.20028 52.1279 7.00028 50.9279C6.80028 49.7279 7.10029 48.4279 7.80029 48.1279C8.40029 47.8279 9.10029 48.5279 9.30029 49.7279C9.50029 51.0279 9.20028 52.2279 8.50028 52.5279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.1995 30.7279C14.5995 31.0279 13.8995 30.3279 13.6995 29.1279C13.4995 27.9279 13.7995 26.6278 14.4995 26.3278C15.0995 26.0278 15.7995 26.7279 15.9995 27.9279C16.0995 29.2279 15.7995 30.4279 15.1995 30.7279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.2991 21.6279C30.6991 21.9279 29.9991 21.2279 29.7991 20.0279C29.5991 18.8279 29.8991 17.5279 30.5991 17.2279C31.1991 16.9279 31.8991 17.6278 32.0991 18.8278C32.2991 20.0278 31.8991 21.3279 31.2991 21.6279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M98.6992 20.028L87.1992 35.428"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M88.9996 14.428L82.5996 32.928"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.8008 17.3279L78.2008 34.428"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M68.1992 34.8279L74.1992 39.928"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.8008 50.928L74.4008 47.928"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M72 63.028L76.7 53.2279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M84.6008 72.928L82.8008 56.2279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M95.8992 69.6279L86.6992 54.2279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103.899 58.7279L89.1992 50.428"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M89.9004 40.928L97.4004 36.2279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M90.3008 44.528L95.7008 44.6279"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M86.5999 12.2279C85.9999 12.5279 85.2999 11.8279 85.0999 10.6279C84.8999 9.42788 85.1999 8.12783 85.8999 7.82783C86.4999 7.52783 87.1999 8.22793 87.3999 9.42793C87.4999 10.6279 87.1999 11.8279 86.5999 12.2279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M63.5003 37.9279C62.9003 38.2279 62.2003 37.5278 62.0003 36.3278C61.8003 35.1278 62.1003 33.8279 62.8003 33.5279C63.4003 33.2279 64.1003 33.9279 64.3003 35.1279C64.4003 36.4279 64.1003 37.6279 63.5003 37.9279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M72.4007 72.4279C71.8007 72.7279 71.1007 72.0278 70.9007 70.8278C70.7007 69.6278 71.0007 68.3279 71.7007 68.0279C72.3007 67.7279 73.0007 68.4279 73.2007 69.6279C73.4007 70.8279 73.1007 72.1279 72.4007 72.4279Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M94.2998 77.028C93.7998 77.328 93.1998 76.6279 93.0998 75.6279C92.8998 74.6279 93.1998 73.6279 93.6998 73.3279C94.1998 73.0279 94.7998 73.7279 94.8998 74.7279C95.0998 75.7279 94.7998 76.828 94.2998 77.028Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'transmission-gearbox'"
    id="transmission-gearbox"
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M61.8995 22.7078C61.2995 22.4078 58.5994 20.2078 56.0994 18.8078C40.1994 9.80778 18.0995 18.3078 13.1995 37.2078C8.99948 53.4078 18.4995 68.6078 33.2995 73.3078C41.6995 75.9078 45.5995 73.7079 50.3995 73.5079V88.8078H61.6995V80.3078H70.0994V71.8078H78.5994V66.2078H86.9995V40.7078H78.4995V35.1078C86.9995 34.8078 86.1994 27.6078 87.0994 20.1078C87.4994 16.6078 87.8995 13.0079 88.2995 9.50785C89.2995 -0.59215 79.3994 1.10783 73.0994 1.10783C65.2994 1.10783 58.9995 0.207777 60.4995 11.8078C61.1995 15.0078 61.8995 19.6078 61.8995 22.7078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.5003 70.4078V63.4078H59.0003V54.9078H70.3003V46.5078H56.1003V32.4078L63.9004 32.3077C63.4004 31.1077 63.0004 30.7078 62.7004 29.0078C62.4004 26.9078 62.0004 27.0078 60.9004 25.9078C55.4004 20.5078 48.5004 17.7078 39.9004 18.2078C28.8004 18.9078 20.9003 26.4078 17.5003 34.1078C10.7003 49.2078 19.3003 66.2078 34.0003 70.7078C38.3003 72.0078 46.5003 72.5078 50.5003 70.4078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.3008 85.7078L58.8008 85.8077C58.8008 84.4077 58.5008 78.6078 59.1008 77.5078H67.5008L67.6008 69.1078L75.9008 68.8077V64.3077C76.0008 62.8077 76.0008 63.6077 76.3008 63.3077H84.6008V43.5078H79.0008V49.2078H73.3008V57.6078H62.1008L62.0008 66.1078H53.6008L53.3008 85.7078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.6 13.3077C59.2 12.1077 52.3 9.50779 50.1 9.10779C49.8 7.90779 49.2 4.90781 48.7 4.00781H35.4L33.7 9.10779C31.9 9.90779 29.7 10.0078 25.5 12.2078C24.1 12.9078 23 14.2078 21.6 13.6078C20.3 13.0078 19.2 11.9078 17.6 11.4078C16.8 12.7078 14.4 14.8078 13.1 16.1078L8.39999 21.0078C10.8 26.2078 11.8 23.4078 9.29999 28.5078C7.89999 31.3078 7.00001 33.8078 6.20001 37.1078L1.10001 38.4078L1 52.0078L6.10001 53.2078C6.90001 56.5078 7.80001 58.9078 9.20001 61.7078C9.80001 62.9078 11.1 64.5078 10.6 65.5078L8.29999 69.3077C9.09999 70.9077 16.4 76.9078 17.6 78.9078C19.1 78.5078 20.2 77.4077 21.4 76.8077C23.6 75.7077 26.2 79.8078 34 81.0078L35.2 86.0078H50.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.3008 32.2078C84.0008 32.2078 83.0008 33.2079 84.2008 22.9079C84.7008 18.8079 85.5008 13.6078 85.6008 9.50783C77.4008 9.30783 78.7008 8.80781 78.7008 15.6078C78.7008 16.9078 78.7008 17.9078 78.0008 19.0078C77.5008 19.8078 76.4008 20.6078 75.4008 20.8078C72.9008 21.4078 70.9008 19.6078 70.4008 17.7078C69.8008 15.2078 70.8008 11.8078 69.8008 9.80776C68.3008 9.40776 65.2008 9.50783 63.3008 9.50783C63.5008 13.6078 64.2008 18.8079 64.7008 22.9079C65.4008 27.7079 64.9008 32.2078 70.3008 32.2078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.9004 43.3077H70.1003L69.9004 35.1078H59.0004L58.9004 43.3077Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.0996 46.3077L75.9996 46.4078V35.2078L73.0996 35.1078V46.3077Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.1992 27.3077C46.8992 27.3077 47.3992 27.9078 47.3992 28.5078C47.3992 29.2078 46.7992 29.7078 46.1992 29.7078C45.4992 29.7078 44.9992 29.1078 44.9992 28.5078C44.8992 27.8078 45.4992 27.3077 46.1992 27.3077Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.3008 42.4078C46.2338 42.4078 47.8008 40.8408 47.8008 38.9078C47.8008 36.9748 46.2338 35.4078 44.3008 35.4078C42.3678 35.4078 40.8008 36.9748 40.8008 38.9078C40.8008 40.8408 42.3678 42.4078 44.3008 42.4078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 35.4078C32.9 35.4078 34.5 37.0078 34.5 38.9078C34.5 40.8078 32.9 42.4078 31 42.4078C29.1 42.4078 27.5 40.8078 27.5 38.9078C27.5 37.0078 29.1 35.4078 31 35.4078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.3008 52.4078C46.2338 52.4078 47.8008 50.8408 47.8008 48.9078C47.8008 46.9748 46.2338 45.4078 44.3008 45.4078C42.3678 45.4078 40.8008 46.9748 40.8008 48.9078C40.8008 50.8408 42.3678 52.4078 44.3008 52.4078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 45.4078C32.9 45.4078 34.5 47.0078 34.5 48.9078C34.5 50.8078 32.9 52.4078 31 52.4078C29.1 52.4078 27.5 50.8078 27.5 48.9078C27.5 47.0078 29.1 45.4078 31 45.4078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.3008 55.5078C46.2008 55.5078 47.8008 57.1078 47.8008 59.0078C47.8008 60.9078 46.2008 62.5078 44.3008 62.5078C42.4008 62.5078 40.8008 60.9078 40.8008 59.0078C40.8008 57.1078 42.4008 55.5078 44.3008 55.5078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 55.5078C32.9 55.5078 34.5 57.1078 34.5 59.0078C34.5 60.9078 32.9 62.5078 31 62.5078C29.1 62.5078 27.5 60.9078 27.5 59.0078C27.5 57.1078 29.1 55.5078 31 55.5078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.8003 63.0078V30.5078C37.8003 30.5078 37.5003 27.8077 40.0003 27.8077H42.6003"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.1992 25.0078C48.0992 25.0078 49.6992 26.6078 49.6992 28.5078C49.6992 30.4078 48.0992 32.0078 46.1992 32.0078C44.2992 32.0078 42.6992 30.4078 42.6992 28.5078C42.6992 26.6078 44.1992 25.0078 46.1992 25.0078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.2996 37.7078C44.9996 37.7078 45.4996 38.3078 45.4996 38.9078C45.4996 39.5078 44.8996 40.1078 44.2996 40.1078C43.5996 40.1078 43.0996 39.5078 43.0996 38.9078C43.0996 38.3078 43.5996 37.7078 44.2996 37.7078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.2996 47.7078C44.9996 47.7078 45.4996 48.3078 45.4996 48.9078C45.4996 49.6078 44.8996 50.1078 44.2996 50.1078C43.5996 50.1078 43.0996 49.5078 43.0996 48.9078C43.0996 48.2078 43.5996 47.7078 44.2996 47.7078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.2996 57.8077C44.9996 57.8077 45.4996 58.4078 45.4996 59.0078C45.4996 59.7078 44.8996 60.2078 44.2996 60.2078C43.5996 60.2078 43.0996 59.6078 43.0996 59.0078C43.0996 58.4078 43.5996 57.8077 44.2996 57.8077Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.0008 37.7078C31.7008 37.7078 32.2008 38.3078 32.2008 38.9078C32.2008 39.5078 31.6008 40.1078 31.0008 40.1078C30.3008 40.1078 29.8008 39.5078 29.8008 38.9078C29.8008 38.3078 30.3008 37.7078 31.0008 37.7078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.0008 47.7078C31.7008 47.7078 32.2008 48.3078 32.2008 48.9078C32.2008 49.6078 31.6008 50.1078 31.0008 50.1078C30.3008 50.1078 29.8008 49.5078 29.8008 48.9078C29.8008 48.2078 30.3008 47.7078 31.0008 47.7078Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.0008 57.8077C31.7008 57.8077 32.2008 58.4078 32.2008 59.0078C32.2008 59.7078 31.6008 60.2078 31.0008 60.2078C30.3008 60.2078 29.8008 59.6078 29.8008 59.0078C29.8008 58.4078 30.3008 57.8077 31.0008 57.8077Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.5 38.9078H40.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.5 48.9078H40.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.5 59.0078H40.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'clutch-cylinders'"
    id="clutch-cylinders"
    width="151"
    height="90"
    viewBox="0 0 151 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M2.14453 67.6L11.1445 65.7L12.3445 66.4L12.9446 65.2999L12.5446 63.7999L19.1445 52.5C19.7445 51.5 20.5445 51 21.7445 51.5C22.9445 52 25.4445 54.3 26.2445 55C27.0445 55.7 28.0446 55.5 28.4446 54.6C28.9446 53.5 29.9446 51.1 30.3446 50C30.9446 48.4 32.5445 48.2999 33.7445 49.2999C34.9445 50.2999 36.7446 52.1999 37.4446 52.7999C37.9446 53.1999 39.0446 53.2 39.4446 52.5C39.8446 51.8 40.8445 48.6999 41.2445 47.2999C41.6445 46.0999 42.5445 45.7 43.7445 46.4C44.8445 47.1 47.3446 49.3999 48.3446 50.2999C49.0446 50.8999 49.8446 50.5 50.0446 49.6C50.1446 48.6 49.2445 44 51.2445 43.2C53.3445 42.4 57.7445 41.4 57.7445 41.4L60.5446 43.1L110.345 31.2999C110.345 31.2999 111.845 31.1 112.045 27.9C112.245 24.7 113.345 15.7 113.345 15.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M133.344 15.5L133.744 19C133.944 21 134.544 23 137.244 22.9C139.444 22.8 145.244 21.7999 145.244 21.7999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M127.645 10.4C131.045 11.2 133.345 13 133.345 15.1C133.345 18 128.845 20.2999 123.245 20.2999C117.645 20.2999 113.145 18 113.145 15.1C113.145 13.4 114.745 11.9 117.245 10.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M3.14453 75.2999L12.8445 73.4L13.6445 72.2999L14.6445 73.1L14.9446 74.6L25.4446 82.4C26.3446 83.1 27.3445 83.2999 28.2445 82.2999C29.1445 81.3999 30.5446 78.1999 31.0446 77.2999C31.4446 76.2999 32.4445 76.0999 33.2445 76.7999C34.1445 77.5999 35.9445 79.4999 36.7445 80.2999C37.8445 81.4999 39.3445 81 40.1445 79.7C40.8445 78.3 41.7445 75.9 42.2445 75C42.5445 74.4 43.5445 74 44.2445 74.5C44.9445 75 47.0446 77.5 47.9446 78.6C48.7446 79.5 49.8445 79.6 50.6445 78.4C51.3445 77.4 52.8446 74.2 53.3446 73C53.7446 72.2 54.6445 72.2 55.1445 73C55.6445 73.9 56.5445 78.4 58.7445 78.4C60.9445 78.3 65.4446 77.5 65.4446 77.5L66.9446 74.6L77.7445 72.2999L78.6445 72.1C79.7445 71.7 84.0445 71.7 85.2445 76.4C90.8445 98 112.645 87.8 106.945 72.6C105.145 67.7 103.045 63.7 110.045 61.9C116.345 60.2 118.045 60.7 118.045 60.7C118.045 60.7 122.045 61.5 123.145 65.4C126.445 77.6 145.645 76.8 142.445 62.1L140.345 52.2999C139.845 49.8999 138.445 44.2 140.845 43.1C142.845 42.2 150.145 39.4 150.145 39.4C150.345 34.5 149.045 21.9 144.845 21.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M96.6442 69.9C99.3442 69.9 101.544 71.8999 101.544 74.2999C101.544 76.6999 99.3442 78.7 96.6442 78.7C93.9442 78.7 91.7441 76.6999 91.7441 74.2999C91.7441 71.7999 93.9442 69.9 96.6442 69.9Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M107.144 74.1999C107.144 78.9999 101.744 82.6999 96.4437 82.6999C92.0437 82.6999 88.6437 80.3999 87.4437 76.2999C86.7437 73.8999 83.7438 70.7999 79.3438 72.0999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M60.543 43.1C63.443 46.7 65.743 52.8 66.943 59.7C67.843 65.3 67.7429 70.6 66.7429 74.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M42.2441 46.1C45.0441 49.4 47.4442 54.8 48.9442 61C50.3442 66.8 51.1441 73.6 49.2441 79.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M31.9434 48.7999C36.8434 53.6999 40.0433 69.6 38.5433 81"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M20.3438 51.4C25.2438 56.3 28.4438 72.2 26.9438 83.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M2.24379 67.6C1.34379 67.7 0.843774 69.5 1.04377 71.6C1.24377 73.8 2.34376 75.3999 3.34376 75.2999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M133.545 61.1C136.245 61.1 138.445 63.1 138.445 65.5C138.445 67.9 136.245 69.9 133.545 69.9C130.845 69.9 128.645 67.9 128.645 65.5C128.645 63.1 130.845 61.1 133.545 61.1Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M105.145 66.0999C106.845 64.9999 111.645 64.0999 115.145 63.2999C119.245 62.3999 121.045 66.8 121.345 68C121.745 69.3 122.245 71.4999 122.945 73.5999C126.745 84.7999 144.245 84.9 142.545 65V64.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M117.544 15.1L117.244 10.4L116.444 10.2L115.744 3.69995L121.244 1L127.344 2.09998L128.244 5L128.444 8.69995L127.444 9.29993L127.644 14.5C127.644 14.5 126.744 16.7 122.944 16.7C119.244 16.7 117.544 15.1 117.544 15.1Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M128.543 8.69995L123.043 11.6L116.443 10.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M116.043 6.29993L122.943 7.79993L128.343 5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M123.043 11.6L122.943 7.79993"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M140.143 52.4L67.4434 70.2999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M134.744 21.9C137.644 25.5 138.244 30.1 139.344 37C139.744 39.2 139.944 41.4 139.944 43.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M51.1445 43.1C54.4445 47.1 57.1446 53.9 58.4446 61.6C59.5446 67.9 59.3445 73.8 58.2445 78.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M110.645 30.7C113.645 32.2 116.645 39 117.945 45C119.045 49.8 118.845 54.4 117.745 57.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'gimbal-transmission'"
    id="gimbal-transmission"
    width="173"
    height="78"
    viewBox="0 0 173 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M142.123 6.9929C143.533 4.6141 145.471 3.02827 147.85 2.41154C148.378 2.23533 148.995 2.14719 149.524 2.14719C156.132 1.88287 163.18 9.81227 165.999 20.9134C169.347 33.9528 165.823 44.3491 158.863 46.2874C158.775 46.2874 158.775 46.2873 158.687 46.3754C155.515 47.1684 152.079 45.8468 148.995 43.0275"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M147.496 9.0194C148.025 8.66699 148.641 8.40263 149.17 8.31453C149.611 8.22642 149.963 8.13836 150.404 8.13836C155.249 7.96216 160.447 13.777 162.562 21.9706C164.853 30.781 162.826 38.0056 158.509 40.2082C156.747 41.0893 155.249 41.0011 153.84 40.8249"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M147.76 2.41156C148.376 2.32345 151.989 1.09 152.341 1.09C159.39 0.0327484 167.319 8.40267 170.226 20.2967C173.046 31.6621 170.314 41.8821 164.323 44.8776C162.561 45.7587 161.328 45.9349 157.98 46.5516"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M141.946 6.99294L136.747 8.75502C136.747 8.75502 132.783 10.341 134.809 12.4555C136.747 14.4818 142.298 15.2747 145.205 15.2747C145.822 15.2747 147.32 15.0105 147.32 15.0105L153.135 13.6007C153.135 13.6007 150.58 10.429 148.553 9.4599C146.351 8.40265 141.946 6.99294 141.946 6.99294Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M155.073 20.4729C155.073 20.4729 154.809 19.7681 153.575 19.5919C152.342 19.3275 146.968 19.4157 146.968 19.4157C146.968 19.4157 139.831 19.0633 137.717 17.7417C135.602 16.4201 133.752 15.1867 133.752 15.1867L134.104 11.3101"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M155.074 20.4729L158.598 23.909L159.655 23.9971L161.505 18.7108C161.505 18.7108 159.831 16.9488 158.862 16.7726C157.805 16.5964 155.514 16.5082 154.897 15.5391C154.281 14.5699 152.959 13.6007 152.959 13.6007"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M144.5 28.0498C144.5 28.0498 142.826 33.6005 143.091 36.1555C143.355 38.7105 143.796 44.4372 143.796 44.4372L150.227 42.7633C150.227 42.7633 157.187 39.5915 157.54 35.2744C157.892 30.9573 156.747 27.6093 152.958 27.2569C149.17 26.9045 144.5 28.0498 144.5 28.0498Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M151.726 29.019C154.633 29.1952 156.395 31.9265 155.69 35.0101C154.985 38.0937 152.078 40.4725 149.171 40.2963C146.263 40.1201 144.501 37.3889 145.206 34.3052C145.911 31.1335 148.818 28.8428 151.726 29.019Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M144.941 12.4554C145.998 11.8387 145.646 10.7815 144.148 10.1647C142.65 9.54802 140.536 9.54802 139.479 10.1647C138.421 10.7815 138.774 11.8387 140.272 12.4554C141.769 13.0722 143.884 13.0722 144.941 12.4554Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M155.073 27.7856L151.725 25.4067C151.725 25.4067 144.677 25.3186 141.065 25.3186C137.364 25.3186 126.439 22.7636 126.439 22.7636"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M144.06 44.261L142.386 44.5253L139.479 43.8204L126.352 43.9085"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M111.639 25.0542C111.639 25.0542 116.749 18.7108 117.013 18.6227C117.277 18.5346 120.625 18.0059 120.801 18.0059C124.326 17.4773 127.145 23.0278 128.555 29.4594C129.788 35.2743 128.907 42.0584 126 43.7323C125.119 44.1728 124.502 44.261 122.828 44.6134C121.154 44.8777 120.273 44.6134 120.273 44.6134L114.458 40.7368"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M94.6348 28.1379L111.639 25.0543C116.837 23.6446 119.216 40.1201 114.546 40.8249L97.5422 43.9085"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M88.29 51.1331L93.1357 50.1638C93.2238 50.1638 93.4 50.0758 93.4881 50.0758C97.1003 49.0185 98.9506 42.675 97.7171 35.5386C96.3955 28.1379 92.1665 22.6755 88.29 23.4684L83.8848 24.3494"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M85.735 50.1639C86.528 50.9568 87.409 51.3093 88.2019 51.1331C90.9332 50.6045 91.9904 44.2609 90.6689 36.8602C89.3473 29.4595 85.9993 23.909 83.3562 24.3495C82.5633 24.5257 81.9466 25.1424 81.418 26.1116"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M55.1641 31.3097L78.3355 27.0807C80.8905 26.2878 84.6789 25.2305 86.8815 37.3007C89.5246 51.6617 85.1194 50.6044 82.6525 50.9569L59.4812 55.1859"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M54.1066 58.0052L57.4545 57.3004C57.5426 57.3004 57.7188 57.2122 57.8069 57.2122C60.1857 56.7717 60.6262 49.9877 59.3047 42.8513C57.9831 35.4506 55.4281 29.2832 52.4326 29.9L48.8203 30.6048"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M54.1064 58.0052C56.1328 57.7409 57.1019 50.9568 55.6922 43.5561C54.3707 36.1554 51.5513 30.0762 48.9082 30.6049"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M133.929 10.3409L121.33 17.4773"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M12.2574 51.4855C13.667 59.3267 13.667 65.9346 12.2574 66.1989C10.8477 66.4632 8.46886 60.296 7.0592 52.4547C5.64954 44.6134 5.64954 38.0056 7.0592 37.7413C8.55697 37.477 10.8477 43.6442 12.2574 51.4855Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.3714 51.3093C16.2216 61.5293 15.693 70.1635 13.138 70.6041C10.583 71.0446 6.97066 63.2033 5.12048 52.9833C3.27029 42.7632 3.79894 34.129 6.35395 33.6885C8.90897 33.2479 12.5212 41.1773 14.3714 51.3093Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.3976 50.8688C18.8646 64.3487 17.7192 75.8903 13.8427 76.5951C9.96608 77.2999 4.76792 66.9037 2.301 53.4238C-0.165907 39.9439 0.979466 28.4022 4.85604 27.6974C8.82072 26.9045 13.9307 37.3008 16.3976 50.8688Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.12109 27.6092C5.12109 27.6092 6.70698 27.345 10.5836 26.6401C14.4601 25.9353 19.6582 36.3316 22.1252 49.8115C24.5921 63.2914 23.4467 74.833 19.5702 75.5378C15.6936 76.2427 13.8434 76.595 13.8434 76.595"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.8686 30.781C35.8686 32.2788 33.0493 33.6004 29.6132 33.6885C26.0891 33.7766 23.2697 32.5432 23.1816 31.0454C23.1816 29.5476 26.001 28.226 29.4371 28.1379C32.9612 28.0498 35.8686 29.1952 35.8686 30.781Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.3004 53.5119C43.8862 56.4194 42.5647 60.2078 39.2167 62.058C35.9569 63.9082 31.9041 63.1152 30.3182 60.2078C28.7324 57.3004 30.0539 53.512 33.4019 51.6618C36.7498 49.8116 40.7145 50.6045 42.3004 53.5119Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.4863 31.9264C16.4863 31.9264 18.1603 30.781 18.4246 29.8999C18.6889 29.0189 19.57 28.1379 20.8915 27.9617C24.0633 27.5212 37.1027 25.8472 38.5123 30.1643C39.0409 31.8383 37.8075 33.5123 36.3097 33.9528C34.812 34.4814 31.7283 35.0982 29.3495 35.7149C26.9707 36.3316 25.6491 36.7721 25.6491 36.7721L24.1514 39.8557L20.5391 42.7632"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.7754 30.6929L38.8634 35.1862C38.8634 35.1862 37.7181 38.6223 32.7843 40.3844C27.8505 42.1465 25.8241 43.0275 24.062 45.0539C22.2999 46.9922 21.8594 47.9613 21.8594 47.9613"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M53.8413 36.4197C53.8413 36.4197 54.1938 38.4461 51.9912 40.0319C49.7886 41.5297 44.9429 44.4371 44.9429 44.4371L44.5023 46.023L36.2205 48.3137C36.2205 48.3137 26.5291 51.3093 27.4101 58.1814C28.2031 64.9654 33.7536 64.8773 33.7536 64.8773L43.6213 64.0844C45.3834 57.3004 44.6785 53.6881 43.4451 46.816"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M39.3049 33.1599C39.3049 33.1599 45.0317 33.9528 45.296 34.3052C46.089 35.4505 47.6748 37.8294 47.4986 38.0937C46.6176 39.3271 44.5031 42.1465 41.6837 43.2038C37.4548 44.7896 28.4682 46.5517 26.4418 52.0142C25.1202 55.5383 26.1775 58.6219 28.3801 61.4412"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M38.5996 30.781L45.5598 30.9573L48.9959 30.6049"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M54.1936 58.0052L43.6211 63.9963"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M23.4453 68.049C23.4453 68.049 25.2074 67.6085 25.8241 68.842C26.529 70.1636 26.3528 70.4279 28.0267 70.1636C28.4673 70.0755 29.084 69.9874 29.8769 69.723C33.8416 68.6658 37.9825 68.6658 39.7445 64.5249"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'air-filter'"
    id="air-filter"
    width="148"
    height="83"
    viewBox="0 0 148 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M74.1 44C108.121 44 135.7 35.359 135.7 24.7C135.7 14.0409 108.121 5.3999 74.1 5.3999C40.0793 5.3999 12.5 14.0409 12.5 24.7C12.5 35.359 40.0793 44 74.1 44Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M147.1 56.2999L147.2 28.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.1 53.6C114.472 53.6 147.2 41.825 147.2 27.2999C147.2 12.7748 114.472 1 74.1 1C33.728 1 1 12.7748 1 27.2999C1 41.825 33.728 53.6 74.1 53.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 55.8999L1.10001 28.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M147.1 55.8999C147.1 70.3999 114.5 82.2 74.1 82.2C33.7 82.2 1 70.3999 1 55.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.3008 35.7C36.0008 30.6 54.0008 27.2999 74.1008 27.2999C94.1008 27.2999 112.201 30.5 124.801 35.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.3008 38.6C43.1008 35.1 57.9008 33 74.0008 33C89.9008 33 104.501 34.9999 116.201 38.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74 82.2L74.1 53.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79 82.2L79.1 53.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M84 81.1L84.1 53.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M88.9004 81.1L89.0004 53.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M93.9004 81.1L94.0004 52.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M98.9004 80.7L99.0004 52.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103.9 79.8999L104 51.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M108.801 79.1L108.901 50.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M112.5 78.2999L112.6 49.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M116.199 77.3999L116.299 49"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M119.9 76.3999L120 48"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M123.5 75.2L123.6 46.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M127.199 73.7999L127.299 45.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M130.9 72.5L131 44.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M133.699 70.8999L133.799 43.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M136.6 69.5L136.7 41"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M139.4 67.3999L139.5 39.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M142.301 65L142.401 36.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M145.1 62L145.2 33.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.10001 56.2999L1 28.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.1 81.1L69 53.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.1996 81.1L64.0996 53.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M59.1996 81.1L59.0996 53.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.1996 81.1L54.0996 52.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.1996 80.7L49.0996 52.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.2992 79.8999L44.1992 51.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.2992 79L39.1992 50.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.6 78.2999L35.5 49.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.9008 77.3999L31.8008 49"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.2992 76.3999L28.1992 48"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.6 75.2L24.5 46.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.9008 73.7999L20.8008 45.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.2992 72.3999L17.1992 44.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.4008 70.8999L14.3008 43.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.6 69.5L11.5 41"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.69962 67.2999L8.59961 39.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.90079 65L5.80078 36.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.00037 62L2.90039 33.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'oil-filter'"
    id="oil-filter"
    width="108"
    height="90"
    viewBox="0 0 108 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M42.8382 81.1458C59.5118 78.0735 70.1973 60.217 66.7047 41.2623C63.2121 22.3075 46.8641 9.43215 30.1904 12.5044C13.5167 15.5767 2.8313 33.4332 6.32388 52.3879C9.81647 71.3427 26.1645 84.2181 42.8382 81.1458Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.1282 6.09997C8.62821 10.9 -3.17174 33.0999 1.92826 55.6999C7.02826 78.2999 26.9283 92.7 46.4283 87.9C65.9283 83.1 77.7282 60.9 72.6282 38.3C67.5282 15.7 47.6282 1.29997 28.1282 6.09997Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.4605 73.7841C54.6039 71.3623 63.0359 57.3353 60.2939 42.4539C57.5519 27.5725 44.6741 17.472 31.5307 19.8938C18.3873 22.3156 9.95528 36.3426 12.6973 51.224C15.4393 66.1054 28.3171 76.2059 41.4605 73.7841Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.3286 31.6C25.9286 33.3 21.3286 41.5 23.1286 49.9C24.9286 58.3 32.4286 63.8 39.8286 62.2C47.2286 60.5 51.8287 52.3 50.0287 43.9C48.2287 35.5 40.7286 30 33.3286 31.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.4284 22.0999C39.0284 22.5999 37.6284 25.2 38.2284 27.9C38.8284 30.6 41.2284 32.3 43.5284 31.8C45.9284 31.3 47.3284 28.6999 46.7284 25.9999C46.1284 23.3999 43.7284 21.5999 41.4284 22.0999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.629 25.5C21.529 25.8 20.1291 27.9 20.4291 30.3C20.7291 32.6 22.6291 34.3 24.7291 34C26.8291 33.7 28.2291 31.5999 27.9291 29.1999C27.6291 26.7999 25.629 25.2 23.629 25.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.1284 44.2C14.0284 44.9 12.9284 47.7001 13.6284 50.3001C14.3284 52.9001 16.6285 54.4 18.7285 53.7C20.8285 53 21.9285 50.2 21.2285 47.6C20.5285 44.9 18.3284 43.4 16.1284 44.2Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.6297 63C24.2297 64.5 24.4297 67.2999 26.2297 69.1999C28.0297 71.0999 30.6297 71.4 32.0297 69.8C33.4297 68.3 33.2297 65.5 31.4297 63.6C29.6297 61.8 27.0297 61.5 25.6297 63Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.4284 40.8001C52.0284 41.3001 50.6284 43.9 51.2284 46.6C51.8284 49.3 54.2284 51 56.5284 50.5C58.9284 50 60.3284 47.4 59.7284 44.7C59.1284 42 56.8284 40.2001 54.4284 40.8001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.6287 61.3C43.4287 62.1 42.4287 64.6999 43.2287 67.0999C44.0287 69.5999 46.5287 70.8999 48.6287 70.1999C50.8287 69.3999 51.8287 66.8 51.0287 64.4C50.2287 61.9 47.8287 60.5 45.6287 61.3Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M92.8285 67.5C99.9285 61.8 104.929 53.5 106.429 43.7C109.429 23.1 95.2285 4 74.7285 1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M92.8297 67.5L52.9297 85.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.7281 1L35.3281 5.19995"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'cabin-filter'"
    id="cabin-filter"
    width="110"
    height="85"
    viewBox="0 0 110 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M108.9 1H1V83.6H108.9V1Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.3992 4.69995H5.69922V79.7H52.3992V4.69995Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M104.2 4.69995H57.5V79.7H104.2V4.69995Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 9.59998H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 16.1H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 22.6H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 29.2H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 35.7H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 42.2H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 48.8H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 55.3H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 61.8H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 68.4H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.69922 74.9H52.3992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 9.59998H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 16.1H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 22.6H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 29.2H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 35.7H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 42.2H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 48.8H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 55.3H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 61.8H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 68.4H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.5 74.9H104.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'fuel-filter'"
    id="fuel-filter"
    width="164"
    height="90"
    viewBox="0 0 164 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M36.4993 50.2C33.8993 35.3 36.2993 22.3001 42.9993 19.8001C50.7993 16.9001 61.4993 29.6 66.6993 47.5C71.8993 65.4 69.6994 82.3 61.7994 85.2C54.6994 87.8 45.4993 78.2 39.9993 63.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M42.8008 19.8C43.3008 19.6 52.6007 16.7999 53.1007 16.6999C61.7007 15.1999 70.8007 27.5 76.1007 45.4C81.7007 64.3 79.6007 82.4 70.2007 83.8L62.8008 84.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M42.0996 20.1999C43.8996 15.9999 46.7996 12.5 50.1996 11.3C60.7996 7.6 75.5996 21.7999 82.1996 43.6999C88.7996 65.5999 85.3997 84.7 74.7997 88.4C70.6997 89.8 66.1996 88.4999 61.6996 85.1999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M63.3008 14.2L107.601 1.19995L112.201 2.40002C119.001 2.43187e-05 127.801 8.09995 133.201 20.7C134.001 22.6 134.801 24.7 135.401 26.8C140.301 42.7 137.901 57.8 130.001 60.5L128.301 63.7L83.7007 78.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M133.6 20.4001L139.6 18.3001L144.7 18.2L158.9 13.3001C160.9 12.5001 164.2 21.7 161.9 22.7L147.7 27.5L141.8 31.8001L137 33.3001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M1.99998 62.8C2.99998 62.5 4.39996 64.3 5.09996 66.8C5.79996 69.3 5.49998 71.6 4.49998 71.9C3.49998 72.2 2.10001 70.4 1.40001 67.9C0.800008 65.4 0.999983 63.1 1.99998 62.8Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M20.3008 56.5C21.7008 56 23.6007 58 24.6007 60.9C25.6007 63.8 25.3008 66.6 23.9008 67.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M20.3008 56.5C20.3008 56.5 24.2007 53.4 26.1007 52.8C28.0007 52.2 30.6007 54.7999 32.0007 58.6999C33.4007 62.5999 33.0007 66.3 31.1007 67C29.2007 67.6 24.0007 67.0999 24.0007 67.0999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M6.80078 60.1999C8.30078 59.6999 10.4007 61.8 11.5007 64.9C12.6007 68 12.3008 70.9 10.8008 71.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M6.79932 60.2L2.19922 62.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M10.7993 71.4L4.69922 71.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M11.8008 70.4L24.1007 67.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M20.3 56.5L8 60.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M28.1992 53.2L39.4993 49.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M32.4004 65.8L44.0004 62.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M39.5 49.4C41.2 48.8 43.5 51.1999 44.7 54.6999C45.9 58.1999 45.6 61.4999 43.9 62.0999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M38 49.9001C38.4 48.3001 39.1 47.2 40.2 47C42.4 46.5 45.1 50.0001 46.2 54.9001C47.3 59.8001 46.4 64.2 44.2 64.7C43.2 64.9 42 64.3 41 63.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M40.1992 47L46.4993 45.1C48.6993 44.4 51.9992 47.9 53.0992 52.7C54.1992 57.6 53.5993 61.7 51.3993 62.4L44.1992 64.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M105.1 7.59994C107.3 6.89994 109.1 6.49996 109.3 6.49996C116.3 5.29996 123.6 15.1999 127.9 29.6999C132.5 44.9999 129.5 56.8 124 58.9L119.9 60.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M67.1992 17.3001C67.5992 17.2001 101.999 7.50004 102.399 7.40004C109.299 6.20004 116.899 16.7 121.199 31C125.199 44.3 123.999 57 118.799 61.5C118.099 62.1 117.399 62.6001 116.499 62.8001L85.3993 72.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M69.9004 20L108 8.90002"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M71.9004 22.1L110.4 10.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M73.6992 25.2L112.499 13.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M75.6992 28.5L114.899 16.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M77.4004 31.5L116.6 19.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M79.3008 34.8L118.501 23"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M79.8008 38.5L119.001 26.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M81.5996 42L120.8 30.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M83.0996 46.1L122.3 34.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M83.6992 50.9L122.899 39.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M84.3008 55.6L123.501 43.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M84.8008 58.9L124.001 47.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M85.1992 62.2L123.199 50.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M85.4004 65.3L123 54"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M85.4004 68.7L121.6 57.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'fuel-pump'"
    id="fuel-pump"
    width="76"
    height="92"
    viewBox="0 0 76 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M62.4992 12.2999C69.9992 12.8999 74.8992 13.9 74.8992 15.1C74.8992 16.9 63.1992 18.3999 48.7992 18.3999C34.3992 18.3999 22.6992 16.9 22.6992 15.1C22.6992 14.2 25.3992 13.3999 29.8992 12.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.5996 15.2V2.19995M62.4996 2.19995V15.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.0992 1.09998C56.4992 1.09998 62.4992 1.59995 62.4992 2.19995C62.4992 2.79995 56.4992 3.29993 49.0992 3.29993C41.6992 3.29993 35.6992 2.79995 35.6992 2.19995C35.6992 1.59995 41.5992 1.09998 49.0992 1.09998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62.4992 15.1C62.4992 15.7 56.4992 16.2 49.0992 16.2C41.6992 16.2 35.6992 15.7 35.6992 15.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.8992 24.2C74.8992 26 63.1992 27.5 48.7992 27.5C34.3992 27.5 22.6992 26 22.6992 24.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5996 15.1V18.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.4992 19.7L22.6992 24.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.9004 15.1V18.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.0996 19.8999L74.8996 24.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.8992 18.7C74.8992 20.5 63.1992 22 48.7992 22C34.3992 22 22.6992 20.5 22.6992 18.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.0004 27H33.4004V38.1H35.0004V27Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.5996 40.7V27.6H51.7996V40.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.9004 40.2V27.5H56.7004V40.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.5992 38.2C64.5992 38.2 61.3992 39.9 58.0992 40.1C54.6992 40.3 47.8992 40.3999 47.8992 40.3999L45.1992 40V90.6L48.0992 91.1C48.0992 91.1 58.0992 90.6999 61.4992 89.2999C64.8992 87.8999 64.6992 85.3999 64.6992 85.3999L64.5992 38.2Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48 90.8999V40.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.8004 87.1L35.4004 38.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.6992 86.2V38.1L35.4992 38.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M59 27.5V37.3999H61.7V27.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.5 37.7999C35.5 37.7999 36.4 37.7 39.6 38C43.1 38.2 45.3 38.5999 48.4 39.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61.8001 35.2C63.3001 35.7 64.4001 36.5 64.5001 37.5M56.8001 34.3999C57.5001 34.3999 58.0001 34.5 58.3001 34.5M51.8001 34.2C52.0001 34.2 52.4001 34.2 52.8001 34.2C53.1001 34.2 53.5001 34.2 53.9001 34.2M35.0001 37.2C35.0001 37.2 33.7001 34.4 48.4001 34.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.9004 86.2999L44.8004 89.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.5992 14.7999L23.6992 11"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.2996 12.5L25.0996 9.19995"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.9989 7.09997C22.7989 6.69997 23.9989 7.39995 24.5989 8.69995C25.1989 9.99995 25.0989 11.2999 24.1989 11.6999C23.3989 12.0999 22.1989 11.4 21.5989 10.1C20.9989 8.89997 21.1989 7.49997 21.9989 7.09997Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.6 86.2999C11.5 81.0999 1 68.8999 1 46.7999C1 31.4999 8.80001 17.7 21.1 8.59998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.6004 83.7C14.2004 77.9 5.40039 67.6999 5.40039 47.2999C5.40039 32.5999 12.6004 19.4 23.9004 10.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'injectors'"
    id="injectors"
    width="81"
    height="96"
    viewBox="0 0 81 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M66.1008 10C64.1008 10 62.4008 9.50002 61.9008 8.90002C61.8008 8.80002 61.8008 8.7 61.8008 8.5C61.8008 7.7 63.8007 7 66.2007 7C68.6007 7 70.6008 7.7 70.6008 8.5C70.5008 9.3 68.5008 10 66.1008 10Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.2004 9.09998C72.3004 9.59998 73.6004 10.5 73.6004 11.5C73.6004 13.1 70.2004 14.4 66.0004 14.4C61.8004 14.4 58.4004 13.1 58.4004 11.5C58.4004 10.5 59.8004 9.59998 61.9004 9.09998"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.5996 26.2V13.1M73.0996 13.1V27.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.7993 39.7C79.7993 41.6 73.6992 43.1 66.0992 43.1C60.5992 43.1 55.7992 42.3 53.6992 41.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.8004 42C79.8004 43.9 73.7004 45.4 66.1004 45.4C58.5004 45.4 52.4004 43.9 52.4004 42"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79 45.7999C79 47.6999 73.2 49.2 66 49.2C58.8 49.2 53 47.6999 53 45.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.9996 55.1C78.9996 57 73.2996 58.5 66.2996 58.5C59.2996 58.5 53.5996 57 53.5996 55.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.9008 60.7999C78.9008 62.6999 73.2008 64.2 66.1008 64.2C59.0008 64.2 53.3008 62.6999 53.3008 60.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.4004 34.2L47.9004 38.9L49.8004 39.2999L50.8004 40.5L53.8004 41.1L54.7004 40.6L59.5004 42L66.2004 40.4V31.7999L61.9004 27L50.1004 24L48.2004 25.4L44.6004 30.7999L43.4004 34.2Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.5 26.7L57.9 28.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58 28.6C57.8 29.4 55.1999 33.3 55.1999 33.3C55.1999 33.3 54.1999 34.8 51.8999 34.2C49.6999 33.6 47.3999 32.9001 47.3999 32.9001C47.3999 32.9001 46.6 32.6001 47.5 31.0001C48.5 29.3001 50.2999 27.0001 50.2999 27.0001C50.6999 26.6001 50.9 26.7 51.5 26.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.0992 27.2L75.9993 28.2999V37.4L66.1992 39.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.3008 30.7999L76.0008 28.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76 36.2999C76 36.2999 77 36.5 77.8 37.6C78.6 38.7 78.7 38.7999 78.7 38.7999L79.7 39.6V41.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.3008 40.7999V42"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53 43V45.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.1 43L79 45.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54 47.2999V55.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.0996 47V55.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79 54.5V61"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.4004 55V60.7999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M78.5008 61.7C78.3008 62.1 77.4007 63.5999 77.2007 63.7999C76.1007 65.2999 71.6008 66.5 66.1008 66.5C61.5008 66.5 57.5007 65.7 55.7007 64.5C55.1007 64.1 54.1008 62.5 53.8008 61.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.7 72.9C74.7 74.8 70.8 76.2999 66.1 76.2999C61.4 76.2999 57.5 74.8 57.5 72.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.4004 65.2999V73"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.6992 65.2V72.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.9993 84.9V92.1C70.9993 93.6 69.7992 94.9 68.1992 94.9H63.9993C62.4993 94.9 61.1992 93.7 61.1992 92.1V84.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.2998 79.5C73.2998 79.6 73.8998 80.1 73.9998 80.9C74.7998 85.1 67.0998 85.5 65.9998 85.5C62.3998 85.5 59.1998 84.3 58.2998 82.7C57.0998 80.3 58.9998 79.3 58.9998 79"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.3 75.2999C73.3 75.3999 73.3 79.1 73.3 79.2C73.1 80.9 69.8 81.7999 66.1 81.7999C62.6 81.7999 59.2 80.8 59.1 79L59 75.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.7004 4.09998C21.7004 4.09998 20.0004 3.6 19.5004 3C19.4004 2.9 19.4004 2.79998 19.4004 2.59998C19.4004 1.79998 21.4004 1.09998 23.8004 1.09998C26.2004 1.09998 28.2004 1.79998 28.2004 2.59998C28.1004 3.39998 26.1004 4.09998 23.7004 4.09998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.8996 3.19995C29.9996 3.69995 31.2996 4.59998 31.2996 5.59998C31.2996 7.19998 27.8996 8.5 23.6996 8.5C19.4996 8.5 16.0996 7.19998 16.0996 5.59998C16.0996 4.59998 17.4996 3.69995 19.5996 3.19995"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.1992 20.2999V7.19995M30.7993 7.19995V21.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.4008 33.7999C37.4008 35.6999 31.3007 37.2 23.7007 37.2C18.2007 37.2 13.4008 36.3999 11.3008 35.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.4 36.1C37.4 38 31.3 39.5 23.7 39.5C16.1 39.5 10 38 10 36.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.6992 39.9C36.6992 41.8 30.8992 43.2999 23.6992 43.2999C16.4992 43.2999 10.6992 41.8 10.6992 39.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.5992 49.2C36.5992 51.1 30.8992 52.6 23.8992 52.6C16.8992 52.6 11.1992 51.1 11.1992 49.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.6 54.9C36.6 56.8 30.9 58.2999 23.8 58.2999C16.7 58.2999 11 56.8 11 54.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 28.2999L5.59998 33L7.39996 33.4L8.39996 34.6L11.4 35.2L12.3 34.7L17.1 36.1L23.9 34.5V25.9L19.5 21.1L7.79999 18.1L5.79999 19.5L2.19995 24.9L1 28.2999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.09961 20.7999L15.4996 22.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5995 22.6999C15.3995 23.4999 12.7996 27.4 12.7996 27.4C12.7996 27.4 11.7996 28.8999 9.49957 28.2999C7.29957 27.6999 4.99957 27 4.99957 27C4.99957 27 4.19955 26.7 5.09955 25.1C6.09955 23.4 7.89954 21.1 7.89954 21.1C8.29954 20.7 8.49955 20.8 9.09955 20.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.8004 21.2999L33.7004 22.4V31.5L23.9004 33.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.9004 24.9L33.7004 22.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.6992 30.4C33.6992 30.4 34.6993 30.6 35.4993 31.7C36.2993 32.8 36.3992 32.9 36.3992 32.9L37.3992 33.7V36"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.90039 34.9L10.0004 36.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5996 37.1V40"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.6992 37.1V39.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.5996 41.4V49.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.6992 41.1V49.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.5996 48.6V55.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 49.1V54.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.1004 55.7999C35.9004 56.1999 35.0004 57.7 34.8004 57.9C33.7004 59.4 29.2004 60.6 23.7004 60.6C19.1004 60.6 15.1004 59.8 13.3004 58.6C12.7004 58.2 11.7004 56.6 11.4004 56"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.2996 67C32.2996 68.9 28.3996 70.4 23.6996 70.4C18.8996 70.4 15.0996 68.9 15.0996 67"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0996 59.4V67.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.3008 59.2999V67"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.6008 79V86.2C28.6008 87.7 27.4008 89 25.8008 89H21.6008C20.1008 89 18.8008 87.8 18.8008 86.2V79"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.8994 73.6C30.8994 73.7 31.4994 74.2 31.5994 75C32.3994 79.2 24.6994 79.6 23.5994 79.6C19.9994 79.6 16.7994 78.3999 15.8994 76.7999C14.6994 74.3999 16.5994 73.4 16.5994 73.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.8996 69.4C30.8996 69.5 30.8996 73.1999 30.8996 73.2999C30.6996 74.9999 27.3996 75.9 23.6996 75.9C20.1996 75.9 16.7996 74.9 16.6996 73.1L16.5996 69.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'sensors'"
    id="sensors"
    width="87"
    height="90"
    viewBox="0 0 87 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M57.2 2.69995C68.3 2.69995 77.2 10.7999 77.2 20.7999C77.2 30.7999 68.2 38.8999 57.2 38.8999C46.1 38.8999 37.2 30.7999 37.2 20.7999C37.1 10.8999 46.1 2.69995 57.2 2.69995Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.2992 1.09998C72.7992 1.09998 85.3992 12.5999 85.3992 26.7999C85.3992 40.9999 72.7992 52.4999 57.2992 52.4999C41.7992 52.4999 29.1992 40.9999 29.1992 26.7999C29.1992 12.5999 41.7992 1.09998 57.2992 1.09998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.2004 8.8999C64.7004 8.8999 70.7004 14.2999 70.7004 20.8999C70.7004 27.4999 64.6004 32.8999 57.2004 32.8999C49.8004 32.8999 43.7004 27.4999 43.7004 20.8999C43.6004 14.2999 49.7004 8.8999 57.2004 8.8999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.2008 12.6C62.4008 12.6 66.6008 16.2999 66.6008 20.8999C66.6008 25.4999 62.4008 29.2 57.2008 29.2C52.0008 29.2 47.8008 25.4999 47.8008 20.8999C47.8008 16.2999 52.0008 12.6 57.2008 12.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M85.3008 24.7L85.8008 38.2999C86.1008 48.1999 75.8008 61.9 58.5008 62.6C57.4008 62.6 56.3008 62.4999 55.3008 62.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M40.2992 47.2L54.9992 55.7V62.4999L47.4992 69.9999L46.2992 69.7L23.1992 88.9999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.20001 58.5999C9.40001 62.8999 15.5 67.3999 21.7 71.6999C22.5 72.1999 23.2 73.1999 23.7 74.3999C24.2 75.5999 24.6 76.8999 24.6 78.1999C24.6 79.4999 24.6 80.7999 24.6 82.0999C24.6 83.3999 24.6 84.6998 24.6 85.9998C24.6 87.1998 24.3 88.0998 23.7 88.4998C23.2 88.8998 22.5 88.7999 21.7 88.1999C15.5 83.2999 9.40001 78.6999 3.20001 73.7999C2.60001 73.2999 2.00004 72.3999 1.60004 71.3999C1.20004 70.3999 1 69.1999 1 68.1999C1 67.0999 1 65.8999 1 64.7999C1 63.6999 1 62.0999 1 60.8999C1 59.7999 1.30001 59.0999 1.70001 58.5999C2.00001 58.1999 2.60001 58.1999 3.20001 58.5999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.59961 62.6C9.19961 65.8 15.1996 70.0999 19.7996 73.2999C20.2996 73.5999 20.7996 74.2999 21.0996 74.9999C21.3996 75.7999 21.5996 76.5999 21.5996 77.3999C21.5996 78.1999 21.5996 79.0999 21.5996 79.8999C21.5996 80.6999 21.5996 81.5999 21.5996 82.3999C21.5996 83.1999 21.3996 83.6999 20.9996 83.9999C20.6996 84.2999 20.1996 84.1999 19.6996 83.7999C15.0996 80.0999 8.99957 75.4999 4.49957 71.8999C4.09957 71.5999 3.69957 70.9999 3.49957 70.3999C3.29957 69.6999 3.09961 68.9999 3.09961 68.2999C3.09961 67.5999 3.09961 66.9 3.09961 66.1C3.09961 65.4 3.09961 64.6999 3.09961 63.8999C3.09961 63.1999 3.29957 62.6999 3.49957 62.4999C3.89957 62.3999 4.19961 62.4 4.59961 62.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.9004 35.4999L1.90039 58.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.4006 47.9998C36.7006 48.5998 37.4005 49.9998 37.0005 50.9998C36.5005 51.9998 35.0006 52.2999 33.7006 51.6999C32.4006 51.0999 31.7006 49.6999 32.1006 48.6999C32.6006 47.6999 34.1006 47.3998 35.4006 47.9998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.5 27.3999C53.2 26.6999 55.1 26.2999 57.2 26.2999C59.2 26.2999 61 26.6999 62.7 27.2999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'reducers'"
    id="reducers"
    width="167"
    height="90"
    viewBox="0 0 167 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M84.0406 31H150.641C161.041 31 158.241 78.6 150.641 78.6H78.1406"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M56.9407 1.09998C72.0407 1.09998 84.2407 13.3 84.2407 28.4C84.2407 41.2 75.4406 51.9 63.6406 54.8C61.5406 55.3 59.2407 55.6 56.9407 55.6C41.8407 55.6 29.6406 43.4 29.6406 28.3C29.6406 13.2 41.8407 1.09998 56.9407 1.09998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M89.041 31C90.141 38.1 90.641 45.5 90.641 53.3C90.641 62.1 89.941 70.6 88.541 78.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.14045 63.9001C2.64045 62.9001 20.4405 87.8 18.7405 89C17.9405 89.5 11.2405 82.0001 7.14045 75.9001C3.04045 69.8001 0.340451 64.4001 1.14045 63.9001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.14062 63.9C14.9406 51.3 16.5406 50.1 33.5406 42.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.6401 73.5C32.9401 84 32.9402 83.8 18.7402 89"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75.0398 75.4C76.8398 75.4 78.2399 76.8 78.2399 78.6C78.2399 80.4 76.8398 81.8 75.0398 81.8C73.2398 81.8 71.8398 80.4 71.8398 78.6C71.8398 76.8 73.2398 75.4 75.0398 75.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.7411 60.3C76.5411 60.3 77.941 61.7 77.941 63.5C77.941 65.3 76.5411 66.7001 74.7411 66.7001C72.9411 66.7001 71.541 65.3 71.541 63.5C71.541 61.7 73.0411 60.3 74.7411 60.3Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.8398 77.6C44.4398 77.1 49.4398 73.4 51.0398 73.5C52.6398 73.7 53.7399 74.8001 53.7399 74.8001V77.4001C53.7399 77.4001 54.4398 79.2001 55.9398 79.2001C57.4398 79.2001 71.3398 79.4001 71.3398 79.4001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.7402 52.4V13.6H52.1401C55.1401 13.6 57.5402 16 57.5402 19V55.7001"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M157.441 44.4H160.241C161.841 44.4 163.041 45.7001 163.041 47.2001V62.4C163.041 64 161.741 65.2001 160.241 65.2001H157.441"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M163.441 48.1C164.941 48.1 166.041 50.8 166.041 54.1C166.041 57.4 164.841 60.1 163.441 60.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.4414 42.7001C41.9414 50.2001 48.6414 61.1 50.6414 73.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M63.6406 54.9V78.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.8398 37.5L63.8398 39.4C63.8398 39.4 66.3398 39.9 66.9398 38.9C67.5398 37.9 69.0398 35.3 69.0398 35.3C69.0398 35.3 69.8398 34.3 71.6398 35.3C73.4398 36.3 75.8398 37.7001 75.8398 37.7001C75.8398 37.7001 77.0398 38.2 76.0398 39.9C75.0398 41.6 69.4398 52.8 69.4398 52.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.3398 81.3L76.5398 76.4"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.1406 66L76.3407 61.1"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M142.641 31C143.741 38.1 144.241 45.5 144.241 53.3C144.241 62.1 143.541 70.6 142.141 78.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M137.641 31C138.741 38.1 139.241 45.5 139.241 53.3C139.241 62.1 138.541 70.6 137.141 78.6"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'motors'"
    id="motors"
    width="111"
    height="90"
    viewBox="0 0 111 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M102.395 59.3371C107.295 48.0371 108.195 37.937 103.895 35.537C98.5948 32.537 87.5947 42.0371 79.2947 56.6371M79.1947 56.7371C70.8947 71.3371 68.4947 85.5371 73.7947 88.4371C77.9947 90.7371 85.6947 85.4371 92.7947 75.9371"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103.394 35.437C103.394 35.437 44.1937 4.43711 39.1937 1.63711C34.1937 -1.16289 23.5937 7.23704 15.7937 20.937C7.99367 34.637 5.99375 47.637 10.9937 50.437C15.9937 53.237 73.6937 88.437 73.6937 88.437"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.994 19.1371L4.29389 11.7371L4.19392 11.6371C3.49392 11.3371 2.39394 11.9371 1.59394 13.1371C0.893943 14.3371 0.793992 15.6371 1.39399 16.1371L1.49397 16.2371L14.1939 23.6371"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M102.093 77.837L94.6933 73.337C92.9933 72.237 99.6933 60.037 101.793 61.737L109.293 66.237"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M109.493 66.2371C110.293 66.7371 109.293 69.6371 107.293 72.8371C105.293 76.0371 103.093 78.2371 102.393 77.8371C101.593 77.3371 102.593 74.4371 104.593 71.2371C106.493 68.0371 108.693 65.8371 109.493 66.2371Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M98.793 63.937L106.293 68.6371"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M96.4941 66.937L104.194 71.7371"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M95.0938 70.437L102.594 75.037"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M96.1946 74.2371C94.6946 75.6371 93.1946 76.2371 92.0946 75.7371C89.9946 74.7371 90.2945 69.8371 92.7945 64.7371C95.2945 59.7371 98.8946 56.437 100.995 57.437C102.095 57.937 102.495 59.6371 102.295 61.8371"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M91.7941 75.6371C91.6941 75.6371 86.9941 73.3371 86.9941 73.2371C85.0941 72.0371 85.4942 67.237 87.8942 62.437C90.1942 57.737 93.6941 54.037 95.5941 54.937L100.494 57.2371"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.5945 35.837C25.9945 30.437 28.1945 26.637 31.3945 21.837C32.7945 19.737 35.7945 18.1371 38.3945 19.7371C41.4945 21.5371 37.6945 26.1371 37.6945 26.1371C33.7945 31.6371 32.7944 33.137 30.2944 40.037C30.2944 40.037 28.2945 44.537 25.8945 43.037C23.4945 41.637 22.3945 38.437 23.5945 35.837Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.8934 57.337L54.0934 50.537L38.6934 40.337L36.3934 40.1371L34.6934 43.6371L35.5934 46.337L41.3934 51.7371L50.8934 57.337Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62.5941 34.837L58.2941 40.937L41.7941 32.437L40.4941 30.537L42.7941 27.437L45.5941 26.837L53.0941 29.337L62.5941 34.837Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103.293 40.637C103.693 41.137 103.393 42.537 102.593 43.737C101.793 44.937 100.793 45.537 100.393 45.037C99.9932 44.537 100.293 43.137 101.093 41.937C101.893 40.737 102.893 40.137 103.293 40.637Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M86.2931 58.737C86.6931 59.237 86.3932 60.637 85.5932 61.837C84.7932 63.037 83.7932 63.637 83.3932 63.137C82.9932 62.637 83.2932 61.237 84.0932 60.037C84.8932 58.837 85.8931 58.237 86.2931 58.737Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M80.9937 76.437C80.9937 76.337 80.7937 74.137 81.0937 71.937C81.1937 70.937 81.8937 69.9371 81.9937 69.2371C82.1937 68.0371 81.9938 65.9371 80.3938 67.7371C78.4938 69.8371 76.4937 76.7371 77.1937 79.3371C77.7937 81.7371 80.8937 76.737 80.9937 76.437Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M89.0949 51.1371C88.2949 52.3371 87.5949 54.237 87.9949 54.837C88.3949 55.337 89.1948 55.437 89.7948 54.537C90.4948 53.637 91.7949 51.7371 93.4949 50.6371C95.1949 49.6371 96.8949 47.637 97.0949 46.837C97.2949 45.937 97.9949 43.937 96.5949 44.337C95.3949 44.737 89.9949 49.8371 89.0949 51.1371Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'spark-plug'"
    id="spark-plug"
    width="98"
    height="90"
    viewBox="0 0 98 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M29.1609 61.9002C37.0609 70.6002 41.1609 79.6001 38.4609 82.0001C37.2609 83.1001 34.9609 82.7002 32.0609 81.2002C33.6609 79.0002 30.4609 72.3002 24.5609 65.9002C18.7609 59.5002 12.4609 55.6001 10.0609 57.0001C8.86092 54.0001 8.76095 51.7001 9.96095 50.6001C12.7609 48.2001 21.3609 53.2002 29.1609 61.9002Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M10.4609 50.3002C10.5609 50.2002 18.8609 42.7001 18.9609 42.6001C21.8609 40.6001 30.4609 45.4002 38.0609 53.8002C45.7609 62.2002 49.8609 71.0002 47.5609 73.7002C47.4609 73.8002 38.4609 82.0001 38.4609 82.0001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M3.66038 77.1001C1.16038 73.3001 0.260378 69.9002 1.66038 68.7002C3.56038 67.0002 9.0604 70.0001 14.0604 75.5001C19.0604 81.0001 21.5604 86.8001 19.6604 88.5001C18.2604 89.7001 14.9605 88.5001 11.3605 85.5001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M31.1602 34.9002C33.6602 32.6002 41.6602 37.2002 48.8602 45.2002C52.2602 49.0002 61.9602 60.1001 56.5602 64.6001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M40.8599 43.2002L36.7598 46.9001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M56.0613 63.6001L51.8613 66.8002"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M26.0613 32.7002L21.8613 36.9001L21.9613 42.3002"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M21.8613 36.9001C25.8613 41.5001 31.3612 44.3001 36.7612 46.9001C40.6612 54.2001 45.7613 60.8001 52.4613 66.4001C51.6613 69.0001 51.1613 71.7001 51.9613 74.5001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M25.5605 32.9001C31.0605 33.6001 36.5606 38.6001 40.8606 43.1001C48.0606 48.6001 52.7605 55.7001 56.0605 63.5001C57.6605 65.8001 58.2605 69.3001 56.1605 71.0001L51.8606 74.4001L47.1605 74.0001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M10.1602 57.0001L1.66016 68.7002"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M32.1602 81.2002L19.6602 88.5001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M38.5605 36.3002L50.0605 25.9001C51.9605 24.2001 57.4606 27.2002 62.4606 32.7002C67.4606 38.2002 69.9605 44.0002 68.0605 45.7002L56.5605 56.1001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M54.661 26.4001C53.861 24.2001 53.8611 22.4001 54.8611 21.5001C56.9611 19.6001 62.6611 22.5001 67.5611 28.0001C72.5611 33.5001 74.861 39.4002 72.761 41.3002C71.861 42.2002 70.1611 42.0001 68.0611 41.1001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M54.4609 22.2002C56.5609 21.7002 61.3609 24.8002 65.7609 29.7002C70.2609 34.6002 72.8609 39.7002 72.0609 41.7002"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M59.7599 21.8002C58.9599 19.6002 59.0599 17.8001 60.0599 16.9001C62.2599 15.0001 67.9599 17.8002 72.9599 23.3002C77.9599 28.8002 80.1599 34.8002 78.0599 36.7002C77.0599 37.6002 75.3599 37.5001 73.2599 36.6001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M59.5605 17.6001C61.8605 17.0001 66.6605 20.0001 71.0605 24.9001C75.5605 29.8001 78.0605 35.0002 77.1605 37.2002"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M65.0607 17.0001C64.2607 14.8001 64.3607 13 65.3607 12.1C67.5607 10.1 73.2606 13.0001 78.2606 18.4001C83.2606 23.9001 85.4607 29.9001 83.3607 31.8001C82.3607 32.7001 80.6607 32.6001 78.5607 31.7001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M64.8613 12.7002C66.9613 12.2002 71.7613 15.3002 76.1613 20.2002C80.6613 25.1002 83.2613 30.2001 82.4613 32.3001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M89.4609 1.30015C90.1609 0.600154 92.3609 1.80013 94.2609 3.90013C96.1609 6.00013 97.161 8.20013 96.361 8.90013"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M89.4613 1.30017L85.3613 3.90015L83.0613 8.40015L79.4613 9.6001L73.3613 13.6001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M96.3606 8.90015L93.3606 12.7002L88.6605 14.6001L87.1605 18.0001L82.5605 23.7002"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M85.4609 3.80017C86.6609 3.90017 88.6609 5.2002 90.4609 7.2002C92.2609 9.2002 93.361 11.3001 93.361 12.5001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M79.1602 9.7002C80.3602 9.8002 82.3602 11.1001 84.1602 13.1001C85.7602 14.9001 86.8602 16.8001 87.0602 18.1001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M6.95992 74.4001C7.85992 74.0001 10.0599 75.3001 11.9599 77.4001C13.9599 79.6001 14.9599 81.8002 14.4599 82.7002C14.3599 82.8002 14.3598 82.9001 14.2598 83.0001L11.4599 85.5001C11.0599 85.8001 10.8599 86.0001 10.5599 86.1001C9.55989 86.3001 7.55984 85.0001 5.75984 83.0001C3.85984 81.0001 2.75987 78.8002 3.15987 77.8002L6.65987 74.5001C6.75987 74.4001 6.85992 74.4001 6.95992 74.4001Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'lamp'"
    id="lamp"
    width="71"
    height="90"
    viewBox="0 0 71 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M35.4004 38.6C35.8004 37.4 38.9004 36.3001 43.3004 35.7001M59.0005 35.8C63.5005 36.4 66.5005 37.6 66.5005 38.9C66.5005 40.9 59.5004 42.5 50.9004 42.5C46.1004 42.5 41.8005 42.0001 39.0005 41.2001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.1992 41C68.6992 41.8 69.5992 42.7 69.5992 43.6C69.5992 46.5 61.3992 48.9 51.1992 48.9C47.6992 48.9 44.4992 48.6 41.6992 48.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.8995 38.2001C58.8995 39.6001 55.3996 40.8 50.9996 40.8C46.5996 40.8 43.0996 39.6001 43.0996 38.2001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.1005 3.30005C54.8005 3.30005 57.8004 3.89998 57.8004 4.59998C57.8004 5.29998 54.8005 5.90002 51.1005 5.90002C47.4005 5.90002 44.5005 5.29998 44.5005 4.59998C44.4005 3.89998 47.4005 3.30005 51.1005 3.30005Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.3995 4.80005V9.59998L44.8995 11.8V28.5L44.4996 31.3V33.8L43.0996 35.9V38.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.6992 4.80005V9.59998L57.1992 11.8V28.5L57.5992 31.3V33.8L58.9993 35.9V38.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.0996 11.3001V9.90007C47.0996 9.90007 47.4996 9.20004 48.1996 10C48.8996 10.9 49.8995 12.3 49.8995 15.5C49.8995 18.1 49.8995 26.0001 49.8995 28.7001C49.8995 30.5001 48.4996 32.8 47.7996 32C46.8996 31.1 47.1996 28.2001 47.1996 28.2001L47.0996 11.3001Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.5 39.1L66.6 42.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.6996 42.5C64.3996 44.4 58.2996 45.7001 51.0996 45.7001C47.5996 45.7001 44.2996 45.4 41.5996 44.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.7999 48.2001L60.7 50.2001C60.7 51.4001 56.4 52.5 51.1 52.5C45.8 52.5 41.5 51.4001 41.5 50.2001V48.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.7992 63.2001L65.6992 75.2001C65.6992 79.1001 59.0992 81.6 50.8992 81.6C45.4992 81.6 40.7992 80.4 38.1992 78.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.6996 61.3C65.6996 64.7 59.0995 67 50.8995 67C44.9995 67 39.9996 65.7 37.5996 63.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.1996 50L36.5996 54.6V57.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61.0996 50L65.6996 54.6V62.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.3995 51.6L38.0996 56.7001L38.1996 64.2001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.5996 54.5C64.7996 57.5 58.4995 59.5 50.8995 59.5C43.7995 59.5 38.0996 57.7001 36.5996 55.2001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.6008 52.1L40.8008 57.9V65.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.7 52.3L43.5 58.5V66.2001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.3008 51.2001L65.0009 55.6V63.2001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.6992 51.6L63.4993 57.1V64.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.3008 51.9L61.2008 57.9V65.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.5996 52.4L57.7996 58.9V66.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.0996 52.5L50.6996 59.5L50.5996 66.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.1005 52.4L46.4004 59.2001V66.7001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.0996 52.5L54.3995 59.3L54.4996 66.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.8995 11.3001V9.90007C54.8995 9.90007 54.4996 9.20004 53.7996 10C53.0996 10.9 52.0996 12.3 52.0996 15.5C52.0996 18.1 52.0996 26.0001 52.0996 28.7001C52.0996 30.5001 53.4996 32.8 54.1996 32C55.0996 31.1 54.7996 28.2001 54.7996 28.2001L54.8995 11.3001Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.5005 37.7001C35.5005 38.4001 38.9004 39.7001 38.9004 41.2001C38.9004 43.5001 31.1004 45.3 21.4004 45.3C11.7004 45.3 3.90039 43.5001 3.90039 41.2001C3.90039 39.7001 7.50041 38.3 12.8004 37.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.7 43.4C41.4 44.3 42.3999 45.3 42.3999 46.3C42.3999 49.6 33.1 52.3 21.7 52.3C10.3 52.3 1 49.6 1 46.3C1 45.2 1.99995 44.2 3.69995 43.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.3995 40.3C30.3995 41.9 26.3996 43.3 21.4996 43.3C16.5996 43.3 12.5996 42 12.5996 40.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5996 1.09998C25.6996 1.09998 29.0996 1.79998 29.0996 2.59998C29.0996 3.39998 25.7996 4.09998 21.5996 4.09998C17.3996 4.09998 14.0996 3.39998 14.0996 2.59998C14.0996 1.79998 17.3996 1.09998 21.5996 1.09998Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.0992 2.80005V8.20007L14.5992 10.7001V29.5L14.1992 32.5V35.4L12.6992 37.7001V40.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29 2.80005V8.20007L28.5 10.7001V29.5L29 32.5V35.4L30.5 37.7001V40.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.2004 10.1V8.50006C17.2004 8.50006 17.6004 7.70004 18.4004 8.60004C19.2004 9.60004 20.3004 11.2001 20.3004 14.8001C20.3004 17.7001 20.3004 26.5 20.3004 29.6C20.3004 31.6 18.8004 34.2001 17.9004 33.3001C16.9004 32.3001 17.2004 29.0001 17.2004 29.0001V10.1Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.00085 41.3L3.80078 45"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.9004 41.3L39.1005 45"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.2008 45.2001C36.6008 47.3001 29.7008 48.8 21.6008 48.8C13.3008 48.8 6.20078 47.2 3.80078 45"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.5009 51.6L32.4008 53.8C32.4008 55.2 27.6008 56.4 21.6008 56.4C15.6008 56.4 10.8008 55.2 10.8008 53.8V51.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.1008 68.4L38.0009 81.9C38.0009 86.3 30.5008 89.1 21.4008 89.1C12.2008 89.1 4.80078 85.9 4.80078 81.9V66.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.0009 66.3C38.0009 70.2 30.5008 72.7001 21.4008 72.7001C12.2008 72.7001 4.80078 69.8 4.80078 66.3"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5009 53.7001L5.30078 58.8V67.7001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.8008 53.7001L38.0009 58.8V67.7001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 55.4L7 61.1L7.09998 69.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.8992 58.7001C36.9992 62.1001 29.8992 64.3 21.3992 64.3C13.1992 64.3 6.49922 62.1 5.19922 59.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5 55.9L10 62.5V70.9"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.7999 56.2001L13 63.2001V71.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.9004 55L37.2004 60V68.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.0996 55.4L35.4996 61.6L35.5996 69.7001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.5 55.8L33 62.5V70.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.6992 56.3L29.0992 63.6V72"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.6 56.4L21.1 64.3L21 72.7001"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.4008 56.4L16.3008 64V72.4"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.8008 56.4L25.3008 64.1L25.4008 72.5"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.9008 10.1V8.50006C25.9008 8.50006 25.5008 7.70004 24.7008 8.60004C23.9008 9.60004 22.8008 11.2001 22.8008 14.8001C22.8008 17.7001 22.8008 26.5 22.8008 29.6C22.8008 31.6 24.3008 34.2001 25.2008 33.3001C26.2008 32.3001 25.9008 29.0001 25.9008 29.0001V10.1Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'fan'"
    id="fan"
    width="103"
    height="93"
    viewBox="0 0 103 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M28.9167 80.8999C18.7167 72.6999 12.2168 60.0999 12.2168 45.9999C12.2168 21.1999 32.3168 1.09998 57.1168 1.09998C81.9168 1.09998 102.017 21.1999 102.017 45.9999C102.017 70.7999 81.9168 90.8999 57.1168 90.8999C47.2168 90.8999 38.1168 87.6999 30.7168 82.2999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M57.2164 64.8999C67.6546 64.8999 76.1165 56.4381 76.1165 45.9999C76.1165 35.5617 67.6546 27.1 57.2164 27.1C46.7782 27.1 38.3164 35.5617 38.3164 45.9999C38.3164 56.4381 46.7782 64.8999 57.2164 64.8999Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M57.2161 36.2C62.6161 36.2 67.0161 40.5999 67.0161 45.9999C67.0161 51.3999 62.6161 55.7999 57.2161 55.7999C51.8161 55.7999 47.416 51.3999 47.416 45.9999C47.416 40.5999 51.7161 36.2 57.2161 36.2Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M57.2161 41.2C59.8161 41.2 62.0161 43.2999 62.0161 45.9999C62.0161 48.5999 59.9161 50.7999 57.2161 50.7999C54.5161 50.7999 52.416 48.6999 52.416 45.9999C52.416 43.3999 54.5161 41.2 57.2161 41.2Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M18.2175 23.4999C18.7175 28.1999 22.2175 33.4999 25.9175 36.2999C28.7175 38.3999 34.2175 40.3999 39.4175 39.2999C38.6175 41.3999 38.2175 43.5999 38.2175 45.8999C38.2175 47.6999 38.5175 49.5 38.9175 51.1C34.2175 53.1 27.6176 53.1999 22.0176 49.2999C18.2176 46.5999 14.5176 40.7999 13.0176 37.8999M101.417 54.1C99.4175 49.9 94.8176 46.0999 90.5176 44.4999C87.1176 43.1999 80.8176 42.8999 76.1176 45.8999C76.1176 41.8999 74.8176 38.2 72.6176 35.1C76.3176 31.2 83.2175 28.4999 90.4175 30.9999C94.0175 32.1999 98.8175 35.5999 101.417 37.9999M92.6176 18.3999C88.0176 16.8999 81.3176 18.2999 77.1176 20.9999C74.3176 22.7999 70.7175 26.9999 69.8175 31.8999C66.8175 29.1999 62.9175 27.5 58.7175 27.1C58.7175 22.2 61.0175 16.4999 66.3175 12.8999C70.9175 9.6999 80.5175 7.39993 81.7175 8.29993M55.8175 1.09998C51.8175 3.99998 49.1175 10.2 48.8175 15.1C48.6175 18.4 49.9175 23.7999 53.3175 27.3999C49.2175 28.2999 45.5175 30.5 42.8175 33.6C38.9175 30.7 35.7175 25.6 35.8175 19.1C36.0175 13.5 39.7176 4.3999 41.1176 3.8999M31.6176 77.8999C28.4176 77.8999 25.6175 77.6 24.7175 77.1M16.1176 64.2999C20.2176 66.9999 28.8175 67.0999 32.7175 65.8999C36.6175 64.6999 40.1175 61.9999 42.3175 57.7999C44.8175 60.8999 48.2175 63.2999 52.2175 64.2999C51.0175 69.0999 47.4176 74.2999 41.1176 76.4999C39.4176 77.0999 37.2176 77.5 35.0176 77.7M43.9175 88.8999C48.7175 87.7999 54.2176 81.7999 56.0176 77.9999C57.8176 74.1999 58.3176 69.4999 56.5176 64.7999C56.7176 64.7999 56.9176 64.7999 57.1176 64.7999C61.0176 64.7999 64.6176 63.6 67.6176 61.7C70.8176 65.9 72.5176 72.6 69.5176 79.2C67.6176 83.5 62.4175 89 59.9175 90.7M80.7175 84.2999C83.0175 79.9999 82.6176 73.2 80.6176 68.6C79.2176 65.4 75.5176 60.9999 70.5176 59.3999C73.2176 56.6999 75.1175 53.1 75.8175 49.2C81.1175 49.5 87.3175 52.6 90.4175 59.2C92.2175 63.1 93.1175 69.9 92.9175 73.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M6.63677 79.1033L1 80.845L4.01103 90.59L9.64779 88.8484L6.63677 79.1033Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5036 75.624L5.82227 77.0704L10.2503 91.4014L14.9316 89.955L10.5036 75.624Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.316 60.7999L34.7161 77.7999C27.7161 86.7999 25.616 86.8999 14.416 88.3999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M43.5168 59.1L33.9167 74.3999C27.8167 84.0999 24.9168 84.6 13.7168 86.1"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'heater-pump'"
    id="heater-pump"
    width="93"
    height="90"
    viewBox="0 0 93 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M4.7207 41.2999C4.8207 36.7999 5.9209 33.1 7.9209 32.2C11.7209 30.7 17.5207 38.2 20.7207 49C23.9207 59.8 23.4208 69.7999 19.6208 71.2999C17.3208 72.1999 14.3208 69.7999 11.5208 65.3999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M3.02124 42.1999C5.42124 41.2999 8.92139 45.8999 10.9214 52.5999C12.9214 59.2999 12.6212 65.5 10.2212 66.5C7.82119 67.4 4.32129 62.7999 2.32129 56.0999C0.321291 49.3999 0.621242 43.1999 3.02124 42.1999Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M33.9219 23.6999C38.2219 22.0999 44.5218 30.0999 48.1218 41.5999C51.7218 53.0999 51.1219 63.7998 46.9219 65.3998"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M8.12109 32.1999L13.521 30.4999L15.821 28.2999L33.821 23.6999C34.921 23.3999 35.921 23.4999 37.021 23.6999L39.4211 21.8998C39.4211 21.8998 47.821 20.7999 52.021 19.1999C56.321 17.5999 62.6209 25.5999 66.2209 37.0999C69.8209 48.5999 69.221 59.2998 65.021 60.8998C60.721 62.4998 52.321 64.5999 52.321 64.5999L47.9211 64.6999L45.1211 66.5999L45.321 72.9999C45.321 72.9999 45.4211 74.0999 47.6211 76.1999C49.8211 78.2999 54.6211 82.4999 54.6211 82.4999C54.6211 82.4999 51.0211 88.9998 44.6211 88.8998C38.3211 88.7998 36.9211 88.7999 36.9211 88.7999L28.7209 80.4999C28.7209 80.4999 27.9211 79.0999 27.6211 74.6999C27.3211 70.2999 29.021 69.6999 29.021 69.6999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M15.9219 28.2999C20.2219 26.6999 26.5218 34.6999 30.1218 46.1999M30.0217 46.1999C33.6217 57.6999 33.0218 68.3999 28.8218 69.9999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M3.2207 42.2L8.7207 40.0001C8.9207 39.9001 9.0207 39.9 9.2207 39.9C11.7207 39.7 14.7207 44.2 16.7207 50.9C18.9207 58.1 18.2209 65.1 15.4209 65.4L11.6208 65.8"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M28.1206 28.7C28.8206 28.5 32.7204 27.5 32.7204 27.5C32.7204 27.5 35.9205 26.5999 37.5205 29.3999C39.1205 32.1999 41.5205 36.4 42.3205 38.1C43.1205 39.8 44.3205 44 44.3205 44C44.3205 44 44.9204 47.3999 43.2204 48.3999C41.5204 49.3999 38.7204 49.8999 38.7204 49.8999C38.7204 49.8999 36.0205 50.2 35.3205 47.5C34.6205 44.9 32.7204 39.9 32.2204 38.6C31.7204 37.2 28.8205 32.3999 28.8205 32.3999L27.4206 30.3999C27.4206 30.3999 27.3205 30.2 27.3205 30.1C27.1205 29.6 27.6206 28.9 28.1206 28.7Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M14.0215 68.7999V71.2999L21.0215 74.3999L45.2214 67.2"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M21.1216 70.1L21.0215 74.3999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M41.5216 51.6999C42.7216 51.7999 43.6217 53.1 43.4217 54.6C43.3217 56.1 42.2216 57.2 41.0216 57.1C39.8216 57 38.9217 55.6999 39.1217 54.1999C39.2217 52.6999 40.3216 51.4999 41.5216 51.6999Z"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M28.3203 78.8999L45.9204 73.6"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M68.9204 56.5L88.5203 50.3999C88.5203 50.3999 89.5204 49 89.1204 48C88.7204 47 88.0203 46.3999 88.0203 46.3999L87.9204 45.5C87.9204 45.5 91.0203 43.7 91.3203 41.5C91.5203 39.3 92.0203 36.2999 92.0203 36.2999C92.0203 36.2999 91.8202 29.5 90.7202 28.2C89.7202 27 88.4204 26.3999 88.4204 26.3999L87.1204 18.5L85.3203 5.69995L85.8203 5.29993L83.9204 1.09998C83.9204 1.09998 79.8204 1.6999 78.1204 1.8999C76.4204 2.1999 73.0203 3 73.0203 3L72.7202 7.5L73.1204 7.79993L74.4204 17.2L58.8203 21.7999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M60.4219 23.8999C60.4219 23.8999 64.8217 21.8 68.2217 22.2C71.6217 22.6 74.5217 23.6 77.2217 27.1C80.0217 30.6 81.7217 36.8999 81.7217 41.8999C81.7217 67.4999 66.0219 72 44.9219 68"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M86.2217 11.7999C86.4217 12.2999 83.8219 13.2 80.4219 13.7C77.0219 14.2 74.1219 14.2 73.9219 13.7"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M86.7202 15.2C86.3202 15.8 83.9203 16.5 80.8203 17C77.4203 17.5 74.5203 17.5 74.3203 17"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M75.5217 25.2999C75.5217 25.0999 74.4219 17 74.4219 17"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M87.2214 18.1C87.4214 18.6 84.8215 19.5 81.5215 20C78.1215 20.5 75.2215 20.5 75.0215 20"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
    />
  </svg>

  <svg
    v-if="id === 'oil-seals'"
    id="oil-seals"
    width="142"
    height="90"
    viewBox="0 0 142 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M48.4 81.4C74.5783 81.4 95.8 64.0286 95.8 42.6C95.8 21.1713 74.5783 3.79993 48.4 3.79993C22.2217 3.79993 1 21.1713 1 42.6C1 64.0286 22.2217 81.4 48.4 81.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.4004 76.7C70.7679 76.7 88.9004 61.4329 88.9004 42.6C88.9004 23.7671 70.7679 8.5 48.4004 8.5C26.0329 8.5 7.90039 23.7671 7.90039 42.6C7.90039 61.4329 26.0329 76.7 48.4004 76.7Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.4008 68.9C68.0621 68.9 84.0008 56.2744 84.0008 40.7C84.0008 25.1255 68.0621 12.5 48.4008 12.5C28.7395 12.5 12.8008 25.1255 12.8008 40.7C12.8008 56.2744 28.7395 68.9 48.4008 68.9Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48.2 18.6C60.7 18.6 70.9 27.2 70.9 37.7C70.9 48.2 60.7 56.7999 48.2 56.7999C35.7 56.7999 25.5 48.2 25.5 37.7C25.5 27.2 35.7 18.6 48.2 18.6Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.6992 43.9C29.6992 36.3 38.1992 30.7 48.2992 30.7C58.3992 30.7 66.8992 36.3 69.8992 43.9"
      stroke="#3D4143"
      stroke-width="0.5669"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M26.6992 43.9C29.6992 36.3 38.1992 30.7 48.2992 30.7C58.3992 30.7 66.8992 36.3 69.8992 43.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M95.2 49.2999C95.2 70.6999 74.6 89.2999 48.4 89.2999C22.2 89.2999 2 71.9 2 50.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.0996 10C81.1996 4.7 90.2996 1.5 100.3 1.5C122.9 1.5 141.2 17.9 141.2 38.2C141.2 58.5 122.9 74.9 100.3 74.9C97.3996 74.9 89.2996 74.1 86.6996 72.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M86.0996 19C90.0996 16.3 95.0996 14.7999 100.5 14.7999C114 14.7999 124.9 24.6 124.9 36.7C124.9 48.8 114 58.6 100.5 58.6C98.7996 58.6 96.0996 58.2 94.4996 57.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M89.0996 22.5C92.2996 20.4 96.2996 19.2 100.6 19.2C111.4 19.2 120.2 27.0999 120.2 36.7999C120.2 46.4999 111.4 54.4 100.6 54.4C98.9996 54.4 97.3996 54.2 95.7996 53.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M91.5996 26.2999C93.4996 25.8999 95.5996 25.7 97.7996 25.7C108.2 25.7 117 31.3 120.1 38.9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'belt'"
    id="belt"
    width="159"
    height="91"
    viewBox="0 0 159 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M51.8008 26.6356C51.8008 25.5356 51.8008 24.3356 51.9008 23.1356C52.1008 19.5356 53.2008 16.5355 53.2008 16.4355M91.2008 61.9355C84.1008 59.8355 77.2008 57.8355 70.7008 55.8355C65.3008 54.2355 60.4008 49.8355 57.1008 44.2355C54.4008 39.7355 52.9008 35.6356 52.2008 31.1356M118.301 70.2355C109.301 67.8355 107.901 66.9355 99.8008 64.5355M55.3008 12.0355C55.8008 11.2355 56.2008 10.7355 56.8008 10.0355C59.9008 6.33546 64.2008 4.43555 69.2008 5.13555C76.5008 6.13555 84.2008 7.23548 92.2008 8.43548C100.601 9.63548 109.401 10.9355 118.701 12.2355C125.501 13.2355 132.401 17.3355 137.901 23.3355C143.701 29.6355 148.101 37.9355 149.501 46.7355C150.901 55.7355 148.801 63.3355 144.301 68.0355C140.101 72.3355 134.101 73.9355 127.101 72.5355"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.8008 6.53543C66.6008 2.83543 74.6008 1.23543 76.8008 1.53543C83.6008 2.33543 90.7008 3.53543 98.0008 4.53543C106.701 5.73543 115.901 7.13545 125.601 8.43545C132.701 9.43545 139.801 13.7354 145.601 20.0354C151.601 26.5354 156.301 35.2355 157.701 44.3355C159.201 53.7355 157.001 61.5354 152.301 66.5354C149.001 70.0354 145.201 72.4355 136.001 72.6355"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61.9 12.9354C63.7 9.43542 66.5 6.53542 70.3 5.43542M59.5 23.9354C59.5 21.7354 59.7 19.6355 60.2 17.7355M59.7 27.4354C59.6 26.2354 59.5 25.0354 59.5 23.8354M88.9 55.3354C84.8 54.1354 80.8 52.9354 76.9 51.8354C71.9 50.3354 67.5 46.3355 64.3 41.1355C62.7 38.5355 61.5 35.6354 60.6 32.5354M121 65.1355C113.5 63.0355 106 60.4355 98.6 58.1355M149.7 49.8354C149.4 55.2354 147.6 59.8354 144.6 62.9354C140.8 66.9354 135.5 68.6355 129.1 67.2355"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M87.9992 79.0354C80.9992 76.9354 74.2992 74.9354 67.7992 73.0354C58.9992 70.4355 50.4992 67.9355 42.4992 65.5354C37.0992 63.9354 32.2992 59.5355 28.8992 53.9355C25.5992 48.5355 23.6992 41.8355 23.6992 35.2355C23.6992 32.3355 24.0992 29.7355 24.7992 27.3355M26.2992 23.0354C26.8992 21.8354 27.6992 20.6355 28.4992 19.6355C31.5992 15.9355 35.8992 14.0355 40.8992 14.7355C48.1992 15.7355 55.8992 16.8354 63.8992 18.0354C72.2992 19.2354 81.0992 20.5355 90.3992 21.8355C97.1992 22.8355 104.099 26.9355 109.599 32.9355C115.399 39.2355 119.799 47.5355 121.199 56.3355C122.599 65.3355 120.499 72.9355 115.999 77.6355C111.499 82.3355 103.799 83.7354 96.1992 81.5354"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.5996 16.2355C38.3996 12.5355 46.3996 10.9355 48.5996 11.2355C55.3996 12.0355 62.4996 13.2355 69.7996 14.2355C78.4996 15.4355 87.6996 16.8355 97.3996 18.1355C104.5 19.1355 111.6 23.4355 117.4 29.7355C123.4 36.2355 128.1 44.9354 129.5 54.0354C131 63.4354 128.8 71.2355 124.1 76.2355C120.8 79.7355 117 82.1355 107.8 82.3355"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.1008 23.9354C33.8008 22.1354 34.8008 20.5355 35.9008 19.2355C37.6008 17.2355 39.7008 15.7354 42.1008 15.0354M91.5008 74.1355C84.8008 72.1355 78.3008 70.2354 72.0008 68.3354C63.9008 65.9354 56.1008 63.6354 48.7008 61.4354C43.7008 59.9354 39.3008 55.9355 36.1008 50.7355C33.1008 45.7355 31.3008 39.6354 31.3008 33.5354C31.3008 31.6354 31.5008 29.9355 31.8008 28.2355M121.601 59.5354C121.301 64.9354 119.501 69.5355 116.501 72.6355C112.401 76.9355 106.301 78.1354 99.2008 76.4354"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.1 26.1355C23.9 27.1355 31.1 28.1355 38.5 29.2355C46.3 30.3355 54.5 31.5355 63.2 32.7355C69.5 33.6355 75.9 37.4354 81.1 43.0354C86.5 48.8354 90.6 56.6354 91.9 64.8354C93.2 73.2354 91.2 80.2355 87 84.6355C82.8 88.9355 76.6 90.5354 69.5 88.4354C59.9 85.5354 50.7 82.8354 42.1 80.3354C33.9 77.9354 26 75.5354 18.6 73.3354C13.6 71.8354 9.09996 67.7354 5.89996 62.5354C2.79996 57.4354 1 51.2355 1 45.1355C1 39.1355 2.79998 34.0355 5.59998 30.7355C8.39998 27.2355 12.5 25.4355 17.1 26.1355Z"
      stroke="#3D4143"
      stroke-width="0.5669"
      stroke-miterlimit="22.9256"
    />
    <path
      d="M17.1 26.1355C23.9 27.1355 31.1 28.1355 38.5 29.2355C46.3 30.3355 54.5 31.5355 63.2 32.7355C69.5 33.6355 75.9 37.4354 81.1 43.0354C86.5 48.8354 90.6 56.6354 91.9 64.8354C93.2 73.2354 91.2 80.2355 87 84.6355C82.8 88.9355 76.6 90.5354 69.5 88.4354C59.9 85.5354 50.7 82.8354 42.1 80.3354C33.9 77.9354 26 75.5354 18.6 73.3354C13.6 71.8354 9.09996 67.7354 5.89996 62.5354C2.79996 57.4354 1 51.2355 1 45.1355C1 39.1355 2.79998 34.0355 5.59998 30.7355C8.39998 27.2355 12.5 25.4355 17.1 26.1355Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.30078 27.4354C14.7008 23.9354 22.2008 22.5354 24.2008 22.7354C30.5008 23.5354 37.1008 24.5354 44.0008 25.5354C52.1008 26.7354 60.7008 27.9354 69.7008 29.2354C76.3008 30.1354 82.9008 34.1354 88.3008 40.0354C93.9008 46.1354 98.2008 54.2355 99.5008 62.6355C100.901 71.3355 98.8008 78.6354 94.4008 83.2354C91.3008 86.4354 87.8008 88.7354 79.3008 88.9354"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M92.0996 67.7355C91.7996 72.7355 90.0996 77.0354 87.3996 79.9354C83.5996 83.9354 77.7996 85.4354 71.2996 83.4354C62.3996 80.8354 53.9996 78.3354 45.9996 75.9354C38.3996 73.7354 31.1996 71.5354 24.2996 69.5354C19.6996 68.1354 15.4996 64.4354 12.5996 59.5354C9.79961 54.8354 8.09961 49.2354 8.09961 43.5354C8.09961 38.0354 9.69962 33.3355 12.2996 30.2355C13.8996 28.3355 15.8996 27.0354 18.0996 26.3354"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'pad'"
    id="pad"
    width="139"
    height="90"
    viewBox="0 0 139 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M46.7 61.3C55.0947 61.3 61.9 54.4948 61.9 46.1001C61.9 37.7054 55.0947 30.9 46.7 30.9C38.3052 30.9 31.5 37.7054 31.5 46.1001C31.5 54.4948 38.3052 61.3 46.7 61.3Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.2001 17.2L67.9001 35.8C72.0001 45.6 68.2001 61.9001 57.4001 66.1001C55.1001 67.0001 45.6002 71.6 39.6002 73.7C32.4002 76.2 31.5002 73.7 28.1002 65.9C24.4002 57.4 23.0001 55.1 22.9001 45.3C22.8001 36.3 27.1002 28.8 34.8002 25.3L55.2001 15.9C56.6001 15.5 59.2001 15.4 60.2001 17.2Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.7993 19.1001C57.4993 19.1001 58.8992 20.5001 58.8992 22.2001C58.8992 23.9001 57.4993 25.3 55.7993 25.3C54.0993 25.3 52.6992 23.9001 52.6992 22.2001C52.6992 20.5001 54.0993 19.1001 55.7993 19.1001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.4993 64.7001C38.5993 64.7001 40.2993 66.4 40.2993 68.5C40.2993 70.6 38.5993 72.3 36.4993 72.3C34.3993 72.3 32.6992 70.6 32.6992 68.5C32.6992 66.4 34.3993 64.7001 36.4993 64.7001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 69.4L4 20.8C4 20.8 5.59998 12.3001 12.1 10.6001C18.7 8.8001 45.1 2.80005 45.1 2.80005L102.2 1.5L135.1 14.7001C135.1 14.7001 138 16.3001 138 19.7001C138 23.1001 136.2 77.2001 136.2 77.2001C136.2 77.2001 136.2 86.2 130.4 86.8C124.6 87.5 46.9 89.3 46.9 89.3L6.09998 79C2.09998 77.5 1 75.4 1 69.4Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.8003 29.5C24.4003 21.1 39.6003 10.5 49.5003 10.4L104.2 9.6001L123.5 23C123.5 23 125.9 24.3001 125.9 27.1001C125.9 29.9001 124.5 71.6001 124.5 71.6001C124.5 71.6001 124.5 79 119.8 79.5C116 79.9 67.9003 81.1 49.5003 81.5C19.7003 82.1 10.3003 53.7 20.8003 29.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.1993 14.7001C15.3993 14.7001 17.1993 16.5001 17.1993 18.7001C17.1993 20.9001 15.3993 22.7001 13.1993 22.7001C10.9993 22.7001 9.19929 20.9001 9.19929 18.7001C9.09929 16.6001 10.8993 14.7001 13.1993 14.7001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.40039 66.1001C11.6004 66.1001 13.4004 67.9001 13.4004 70.1001C13.4004 72.3001 11.6004 74.1001 9.40039 74.1001C7.20039 74.1001 5.40039 72.3001 5.40039 70.1001C5.40039 67.9001 7.20039 66.1001 9.40039 66.1001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M129.4 75.5C131.6 75.5 133.4 77.3 133.4 79.5C133.4 81.7 131.6 83.5 129.4 83.5C127.2 83.5 125.4 81.7 125.4 79.5C125.4 77.3 127.1 75.5 129.4 75.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M130.6 17.6001C132.8 17.6001 134.6 19.4001 134.6 21.6001C134.6 23.8001 132.8 25.6001 130.6 25.6001C128.4 25.6001 126.6 23.8001 126.6 21.6001C126.5 19.4001 128.3 17.6001 130.6 17.6001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M96.7996 63.7001C105.194 63.7001 112 56.8947 112 48.5C112 40.1053 105.194 33.3 96.7996 33.3C88.4049 33.3 81.5996 40.1053 81.5996 48.5C81.5996 56.8947 88.4049 63.7001 96.7996 63.7001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M110.3 19.6001L118 38.2C122.1 48 118.3 64.3 107.5 68.5C105.2 69.4 95.6997 74.0001 89.6997 76.1001C82.4997 78.6001 81.5997 76.1 78.1997 68.3C74.4997 59.8 73.0998 57.5 72.9998 47.7C72.8998 38.7 77.1997 31.2 84.8997 27.7L105.3 18.3C106.7 17.9 109.2 17.8001 110.3 19.6001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M105.799 21.5C107.499 21.5 108.899 22.9001 108.899 24.6001C108.899 26.3001 107.499 27.7001 105.799 27.7001C104.099 27.7001 102.699 26.3001 102.699 24.6001C102.699 22.9001 104.099 21.5 105.799 21.5Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M86.6008 67.1001C88.7008 67.1001 90.4008 68.8 90.4008 70.9C90.4008 73 88.7008 74.7001 86.6008 74.7001C84.5008 74.7001 82.8008 73 82.8008 70.9C82.8008 68.8 84.5008 67.1001 86.6008 67.1001Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'pillow'"
    id="pillow"
    width="90"
    height="91"
    viewBox="0 0 90 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M86.2701 49.1482C86.0701 59.1482 81.5701 67.1481 75.0701 67.9481C67.5701 68.8481 60.2701 59.7482 58.7701 47.5482C57.2701 35.3482 62.17 24.7482 69.67 23.8482C73.97 23.3482 78.2701 26.1481 81.3701 30.9481"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M81.6708 30.9481C84.7708 30.5481 87.8709 34.3481 88.4709 39.4481C89.0709 44.5481 87.6708 49.5481 84.5708 49.9481C81.4708 50.3481 77.7708 45.9481 77.1708 40.8481C76.4708 35.7481 78.4708 31.3481 81.6708 30.9481Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M82.771 33.5482C84.671 33.2482 86.471 36.0481 86.871 39.6481C87.271 43.3481 86.3709 46.9481 84.4709 47.2481C82.5709 47.5481 80.3709 44.3481 79.9709 40.6481C79.5709 37.0481 80.871 33.8482 82.771 33.5482Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M85.4698 49.6482C85.3698 49.6482 75.2698 52.1482 75.1698 52.1482C71.8698 52.3482 68.9699 48.8481 68.2699 43.4481C67.6699 38.3481 69.3698 33.5482 72.4698 32.7482L81.2699 30.6482"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.0703 44.8481L77.2704 43.1482"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M68.9698 75.2482C65.3698 82.8482 59.7698 88.1482 52.4698 89.1482C38.7698 91.0482 19.2698 75.2482 13.8698 51.1482C8.46984 27.0482 16.9698 4.94819 32.9698 1.84819C39.8698 0.548186 46.9699 2.94826 53.2699 8.04826"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73.9701 67.7481C71.1701 74.3481 66.5701 78.9481 60.6701 79.8481C49.7701 81.4481 34.3701 68.3481 30.0701 48.3481C25.7701 28.3481 32.5701 10.1482 45.1701 7.5482C50.7701 6.4482 58.5701 9.54815 63.8701 15.7482"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.9707 11.1482L64.7708 16.0482C64.7708 16.0482 70.8707 18.1481 72.8707 21.4481C74.8707 24.7481 75.2708 24.9481 75.2708 24.9481"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.9709 79.7482C58.8709 81.5482 56.3708 82.6482 53.6708 83.0482C42.2708 84.6482 26.1708 71.0482 21.6708 50.1482C17.1708 29.2482 24.2709 10.2482 37.4709 7.54822C39.7709 7.04822 42.1709 7.14819 44.4709 7.64819"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.0701 70.4481C14.5701 71.1481 2.77013 62.4482 1.27013 52.6482C-0.229865 42.9482 4.67004 34.4482 12.17 33.7482"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'gasket-set'"
    id="gasket-set"
    width="172"
    height="98"
    viewBox="0 0 172 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M147.56 73.0483C160.916 59.6925 160.916 38.0385 147.56 24.6827C134.204 11.3269 112.55 11.327 99.1945 24.6828C85.8387 38.0386 85.8387 59.6926 99.1945 73.0484C112.55 86.4042 134.204 86.4041 147.56 73.0483Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M123.4 92.7657C147.645 92.7657 167.3 73.1111 167.3 48.8658C167.3 24.6205 147.645 4.9657 123.4 4.9657C99.1547 4.9657 79.5 24.6205 79.5 48.8658C79.5 73.1111 99.1547 92.7657 123.4 92.7657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M103.099 79.1659C104.399 79.1659 105.499 80.2658 105.499 81.5658C105.499 82.8658 104.399 83.9657 103.099 83.9657C101.799 83.9657 100.699 82.8658 100.699 81.5658C100.699 80.2658 101.799 79.1659 103.099 79.1659Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M141.5 80.4657C142.8 80.4657 143.9 81.5658 143.9 82.8658C143.9 84.1658 142.8 85.2657 141.5 85.2657C140.2 85.2657 139.1 84.1658 139.1 82.8658C139.1 81.4658 140.1 80.4657 141.5 80.4657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M162.099 47.1659C163.399 47.1659 164.499 48.2658 164.499 49.5658C164.499 50.8658 163.399 51.9657 162.099 51.9657C160.799 51.9657 159.699 50.8658 159.699 49.5658C159.699 48.2658 160.799 47.1659 162.099 47.1659Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M85.4996 44.6659C86.7996 44.6659 87.8996 45.7658 87.8996 47.0658C87.8996 48.3658 86.7996 49.4657 85.4996 49.4657C84.1996 49.4657 83.0996 48.3658 83.0996 47.0658C83.0996 45.7658 84.1996 44.6659 85.4996 44.6659Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M105.4 12.0658C106.7 12.0658 107.8 13.1657 107.8 14.4657C107.8 15.7657 106.7 16.8658 105.4 16.8658C104.1 16.8658 103 15.7657 103 14.4657C103 13.1657 104.1 12.0658 105.4 12.0658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M119.3 8.0658C120.6 8.0658 121.7 9.1657 121.7 10.4657C121.7 11.7657 120.6 12.8658 119.3 12.8658C118 12.8658 116.9 11.7657 116.9 10.4657C117 9.1657 118 8.0658 119.3 8.0658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M145.5 14.8658C146.8 14.8658 147.9 15.9657 147.9 17.2657C147.9 18.5657 146.8 19.6659 145.5 19.6659C144.2 19.6659 143.1 18.5657 143.1 17.2657C143.1 15.9657 144.2 14.8658 145.5 14.8658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M157.701 32.7657C159.026 32.7657 160.101 31.6913 160.101 30.3658C160.101 29.0404 159.026 27.9657 157.701 27.9657C156.375 27.9657 155.301 29.0404 155.301 30.3658C155.301 31.6913 156.375 32.7657 157.701 32.7657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.60083 59.0658C4.10083 56.6658 3.80078 54.1658 3.80078 51.5658C3.80078 45.0658 5.70081 39.1658 8.70081 33.8658M29.8008 86.3658C20.8008 83.7658 13.3008 77.6657 8.70081 69.7657M64.6008 78.2657C58.4008 83.9657 50.2008 87.5657 41.2008 87.7657M75.4008 43.6659C76.0008 46.2659 76.3008 48.8659 76.3008 51.6659C76.3008 58.0659 74.7008 64.1658 71.7008 69.3658M15.5008 24.9657C20.7008 19.6657 30.6008 15.3658 40.1008 15.3658C53.4008 15.3658 65.0008 22.4659 71.3008 33.1659"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.7994 22.5658C47.9994 22.5658 57.8994 24.3657 60.6994 31.4657L60.8994 71.6659C60.5994 72.2659 59.8994 72.6659 59.3994 73.1659C54.1994 77.8659 47.2994 80.7659 39.7994 80.6659C23.7994 80.5659 10.7994 67.6659 10.7994 51.6659C10.6994 35.5659 23.6994 22.5658 39.7994 22.5658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.3 69.3658C46.1307 69.3658 54.1 61.3965 54.1 51.5658C54.1 41.7351 46.1307 33.7657 36.3 33.7657C26.4693 33.7657 18.5 41.7351 18.5 51.5658C18.5 61.3965 26.4693 69.3658 36.3 69.3658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.2 23.1659C14.3 23.1659 16.9 25.6658 16.9 28.8658C16.9 32.0658 14.4 34.5658 11.2 34.5658C8.10001 34.5658 5.5 32.0658 5.5 28.8658C5.5 25.6658 8.10001 23.1659 11.2 23.1659Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.1996 25.6659C12.8996 25.6659 14.2996 27.0657 14.2996 28.7657C14.2996 30.4657 12.8996 31.8658 11.1996 31.8658C9.49958 31.8658 8.09961 30.4657 8.09961 28.7657C8.09961 27.0657 9.49958 25.6659 11.1996 25.6659Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.70001 58.7657C9.80001 58.7657 12.4 61.2657 12.4 64.4657C12.4 67.5657 9.90001 70.1659 6.70001 70.1659C3.60001 70.1659 1 67.6657 1 64.4657C1 61.2657 3.50001 58.7657 6.70001 58.7657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.70072 61.2657C8.40072 61.2657 9.8007 62.6658 9.8007 64.3658C9.8007 66.0658 8.40072 67.4657 6.70072 67.4657C5.00072 67.4657 3.60074 66.0658 3.60074 64.3658C3.50074 62.6658 4.90072 61.2657 6.70072 61.2657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.3992 32.2657C77.4992 32.2657 80.0992 34.7657 80.0992 37.9657C80.0992 41.1657 77.5992 43.6659 74.3992 43.6659C71.2992 43.6659 68.6992 41.1657 68.6992 37.9657C68.6992 34.7657 71.1992 32.2657 74.3992 32.2657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.4008 34.7657C76.1008 34.7657 77.5008 36.1658 77.5008 37.8658C77.5008 39.5658 76.1008 40.9657 74.4008 40.9657C72.7008 40.9657 71.3008 39.5658 71.3008 37.8658C71.3008 36.1658 72.7008 34.7657 74.4008 34.7657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.8992 67.9657C70.9992 67.9657 73.5992 70.4659 73.5992 73.6659C73.5992 76.7659 71.0992 79.3658 67.8992 79.3658C64.7992 79.3658 62.1992 76.8659 62.1992 73.6659C62.2992 70.5659 64.7992 67.9657 67.8992 67.9657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.9008 70.5658C69.6008 70.5658 71.0008 71.9659 71.0008 73.6659C71.0008 75.3659 69.6008 76.7657 67.9008 76.7657C66.2008 76.7657 64.8008 75.3659 64.8008 73.6659C64.8008 71.9659 66.2008 70.5658 67.9008 70.5658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.3992 81.3658C38.4992 81.3658 41.0992 83.8658 41.0992 87.0658C41.0992 90.2658 38.5992 92.7657 35.3992 92.7657C32.2992 92.7657 29.6992 90.2658 29.6992 87.0658C29.6992 83.8658 32.2992 81.3658 35.3992 81.3658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.4008 83.9657C37.1008 83.9657 38.5008 85.3658 38.5008 87.0658C38.5008 88.7658 37.1008 90.1659 35.4008 90.1659C33.7008 90.1659 32.3008 88.7658 32.3008 87.0658C32.3008 85.3658 33.7008 83.9657 35.4008 83.9657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.5996 26.6659C34.9996 26.6659 36.0996 27.7659 36.0996 29.1659C36.0996 30.5659 34.9996 31.6659 33.5996 31.6659C32.1996 31.6659 31.0996 30.5659 31.0996 29.1659C31.0996 27.7659 32.1996 26.6659 33.5996 26.6659Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.9004 29.6659C55.3004 29.6659 56.4004 30.7659 56.4004 32.1659C56.4004 33.5659 55.3004 34.6659 53.9004 34.6659C52.5004 34.6659 51.4004 33.5659 51.4004 32.1659C51.4004 30.7659 52.5004 29.6659 53.9004 29.6659Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.6992 67.9657C54.0992 67.9657 55.1992 69.0657 55.1992 70.4657C55.1992 71.8657 54.0992 72.9657 52.6992 72.9657C51.2992 72.9657 50.1992 71.8657 50.1992 70.4657C50.1992 69.0657 51.3992 67.9657 52.6992 67.9657Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.5 77.0658C43.8807 77.0658 45 75.9465 45 74.5658C45 73.1851 43.8807 72.0658 42.5 72.0658C41.1193 72.0658 40 73.1851 40 74.5658C40 75.9465 41.1193 77.0658 42.5 77.0658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.1992 66.0658C23.5992 66.0658 24.6992 67.1658 24.6992 68.5658C24.6992 69.9658 23.5992 71.0658 22.1992 71.0658C20.7992 71.0658 19.6992 69.9658 19.6992 68.5658C19.7992 67.1658 20.8992 66.0658 22.1992 66.0658Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'lamp'"
    id="lamp"
    width="71"
    height="90"
    viewBox="0 0 71 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M35.4004 38.8C35.8004 37.6 38.9004 36.4999 43.3004 35.8999M59.0004 36C63.5004 36.6 66.5004 37.7999 66.5004 39.0999C66.5004 41.0999 59.5004 42.7 50.9004 42.7C46.1004 42.7 41.8004 42.1999 39.0004 41.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.1992 41.2C68.6992 42 69.5992 42.9 69.5992 43.8C69.5992 46.7 61.3992 49.0999 51.1992 49.0999C47.6992 49.0999 44.4992 48.8 41.6992 48.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.9992 38.3999C58.9992 39.7999 55.4992 41 51.0992 41C46.6992 41 43.1992 39.7999 43.1992 38.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.1005 3.59985C54.8005 3.59985 57.8005 4.1999 57.8005 4.8999C57.8005 5.5999 54.8005 6.19995 51.1005 6.19995C47.4005 6.19995 44.5005 5.5999 44.5005 4.8999C44.4005 4.1999 47.4005 3.59985 51.1005 3.59985Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M44.3992 5V9.80005L44.8992 12V28.8L44.4992 31.5V34L43.1992 36.0999V38.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.6992 5V9.80005L57.1992 12V28.8L57.5992 31.5V34L58.9992 36.0999V38.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.0996 11.5998V10.1999C47.0996 10.1999 47.4996 9.5 48.1996 10.3C48.8996 11.1 49.8996 12.6 49.8996 15.8C49.8996 18.4 49.8996 26.3 49.8996 29C49.8996 30.8 48.4996 33.1 47.7996 32.3C46.8996 31.4 47.1996 28.5 47.1996 28.5L47.0996 11.5998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.5 39.3L66.6 42.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.7992 42.7C64.4992 44.6 58.3992 45.8999 51.1992 45.8999C47.6992 45.8999 44.3992 45.6 41.6992 45"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.8 48.3999L60.7 50.3999C60.7 51.5999 56.4 52.7 51.1 52.7C45.8 52.7 41.5 51.5999 41.5 50.3999V48.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.7992 63.3999L65.6992 75.3999C65.6992 79.2999 59.0992 81.8 50.8992 81.8C45.4992 81.8 40.7992 80.6 38.1992 78.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.6996 61.5C65.6996 64.9 59.0996 67.2 50.8996 67.2C44.9996 67.2 39.9996 65.9 37.5996 64"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.2996 50.3L36.5996 54.8V57.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61.0996 50.3L65.6996 54.8V62.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.3996 51.8L38.0996 56.8999L38.1996 64.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M65.5996 54.7C64.7996 57.7 58.4996 59.7 50.8996 59.7C43.7996 59.7 38.0996 57.8999 36.5996 55.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.6008 52.3L40.8008 58.0999V65.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M47.7 52.5999L43.5 58.7V66.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M60.3008 51.3999L65.0008 55.8999V63.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.6992 51.8L63.4992 57.3L63.5992 64.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.3008 52.2L61.2008 58.0999V65.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.5996 52.5999L57.7996 59.0999V66.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M51.0996 52.7L50.6996 59.7L50.5996 67.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.1004 52.7L46.4004 59.3999V66.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.0996 52.7L54.3996 59.5999L54.4996 67"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.8996 11.5998V10.1999C54.8996 10.1999 54.4996 9.5 53.7996 10.3C53.0996 11.1 52.0996 12.6 52.0996 15.8C52.0996 18.4 52.0996 26.3 52.0996 29C52.0996 30.8 53.4996 33.1 54.1996 32.3C55.0996 31.4 54.7996 28.5 54.7996 28.5L54.8996 11.5998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.5004 37.8999C35.5004 38.5999 38.9004 39.8999 38.9004 41.3999C38.9004 43.6999 31.1004 45.5 21.4004 45.5C11.7004 45.5 3.90039 43.6999 3.90039 41.3999C3.90039 39.8999 7.50038 38.5 12.8004 37.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.7 43.7C41.4 44.6 42.4 45.5999 42.4 46.5999C42.4 49.8999 33.1 52.5999 21.7 52.5999C10.3 52.5999 1 49.8999 1 46.5999C1 45.4999 2.00001 44.4999 3.70001 43.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.3996 40.5C30.3996 42.1 26.3996 43.5 21.4996 43.5C16.5996 43.5 12.5996 42.2 12.5996 40.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5996 1.3999C25.6996 1.3999 29.0996 2.0999 29.0996 2.8999C29.0996 3.6999 25.7996 4.3999 21.5996 4.3999C17.3996 4.3999 14.0996 3.6999 14.0996 2.8999C14.0996 1.9999 17.3996 1.3999 21.5996 1.3999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.0992 3V8.3999L14.6992 10.8999V29.7L14.1992 32.8V35.5999L12.6992 38V40.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29 3V8.3999L28.5 10.8999V29.7L29 32.8V35.5999L30.5 38V40.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.2004 10.3998V8.79995C17.2004 8.79995 17.6004 7.9998 18.4004 8.8998C19.2004 9.8998 20.3004 11.4998 20.3004 15.0998C20.3004 17.9998 20.3004 26.7998 20.3004 29.8998C20.3004 31.8998 18.8004 34.4998 17.9004 33.5998C16.9004 32.5998 17.2004 29.3 17.2004 29.3V10.3998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.00076 41.5L3.80078 45.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.9004 41.5L39.1004 45.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.2008 45.3999C36.6008 47.4999 29.7008 49 21.6008 49C13.3008 49 6.20078 47.4 3.80078 45.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.5008 51.8L32.4008 54C32.4008 55.4 27.6008 56.5999 21.6008 56.5999C15.6008 56.5999 10.8008 55.4 10.8008 54V51.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.1008 68.5999L38.0008 82.0999C38.0008 86.4999 30.5008 89.3 21.4008 89.3C12.2008 89.3 4.80078 86.0999 4.80078 82.0999V66.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.0008 66.5C38.0008 70.4 30.5008 72.8999 21.4008 72.8999C12.2008 72.8999 4.80078 70 4.80078 66.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5008 53.8999L5.30078 59V67.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.8008 53.8999L38.0008 59V67.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 55.5999L7 61.3L7.10001 69.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.8992 58.8999C36.9992 62.2999 29.8992 64.5 21.3992 64.5C13.1992 64.5 6.49922 62.3 5.19922 59.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5 56.2L10 62.7V71.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.8 56.5L13 63.3999V72"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.9004 55.2L37.2004 60.2V68.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.0996 55.5999L35.4996 61.8L35.5996 70"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.5996 56L32.9996 62.7V71.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.6992 56.5L29.1992 63.8L29.0992 72.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5996 56.5999L21.0996 64.5V72.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.4008 56.5999L16.4008 64.2L16.3008 72.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.9004 56.5999L25.3004 64.3L25.4004 72.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.9008 10.3998V8.79995C25.9008 8.79995 25.5008 7.9998 24.7008 8.8998C23.9008 9.8998 22.8008 11.4998 22.8008 15.0998C22.8008 17.9998 22.8008 26.7998 22.8008 29.8998C22.8008 31.8998 24.3008 34.4998 25.2008 33.5998C26.2008 32.5998 25.9008 29.3 25.9008 29.3V10.3998Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="id === 'clamp'"
    id="clamp"
    width="85"
    height="90"
    viewBox="0 0 85 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M32.3 1.3999L18.5 4.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.5996 17.0999C32.4996 16.7999 40.5996 13.8999 40.5996 13.8999C40.5996 13.8999 41.5996 11.5 40.1996 10.3C38.7996 9.10005 38.4996 9.19995 38.4996 9.19995C38.4996 9.19995 37.9996 8.39985 37.8996 7.09985C37.7996 5.89985 37.6996 4.59995 36.0996 3.19995C34.4996 1.79995 32.2996 1.3999 32.2996 1.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.4004 13.0999L14.5004 16.3L18.2004 14L18.4004 7.80005L14.3004 4.69995L10.6004 7L10.4004 13.0999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 16.3999L14.5 16.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.1008 13.3L22.3008 7.8999L18.1008 4.19995L14.3008 4.69995"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.8008 16.3999L22.1008 13.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42.9997 77.8999C39.5997 84.9999 35.0997 89.4 30.1997 89.2C20.5997 88.9 13.2997 71.2999 13.8997 49.8999C14.2997 37.5999 19.3997 23.3 25.6997 17.8M38.8997 14.5999C41.3997 16.9999 43.5997 20.6999 45.1997 25.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31 89.2C30.2 89.2 18.7 88.5999 17.9 88.3999C8.30002 85.9999 1 70.1999 1 50.3999C1 35.8999 5.90002 25.7 11.9 19.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.5 63.5999C35.9 74.2999 30.6 82.5999 24 86.0999M32.5 17C36.4 21.8 38.6 28.9999 39.6 37.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.1 16L11.8 17.8999C11.8 17.8999 11.1 20.0999 12.9 19.8999C14.7 19.6999 16.8 18.2 18.6 18.5C20.4 18.8 20.4 19.5999 20.4 19.5999C20.4 19.5999 20.5 20.4999 22.1 20.0999C23.7 19.6999 25 17.5 26 16.8C26.9 16.1 29.3 14.8999 29.3 14.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.6 17.0999L29.8 18L25 17.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 4C22.6 4.2 24.3 4.8999 24.9 6.3999C25.8 8.6999 29.2 14.8 29.2 14.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 16.3999C22.1 15.9999 25.5 12.2 25.9 9"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.8008 17.7L38.7008 17.3999"
      stroke="#3D4143"
      stroke-width="1.417"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.5 20.8999L40.7 20.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.8008 24.5999L43.0008 24.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M40.9004 28.2L43.6004 27.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.3008 72.3L40.4008 72.5"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.5996 75.7L41.2996 76.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.4004 79.3L39.4004 79.7"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.1992 82.8999L36.8992 83.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.7004 4.59985L54.4004 7.59985"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67 19.7C67.9 19.4 75.6 16.5999 75.6 16.5999C75.6 16.5999 76.5 14.2999 75.2 13.0999C73.9 11.8999 73.6 12.0999 73.6 12.0999C73.6 12.0999 73.1 11.2999 73 10.0999C72.9 8.89985 72.8 7.70005 71.3 6.30005C69.8 5.00005 67.6 4.59985 67.6 4.59985"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.5996 15.8999L50.4996 19L54.1996 16.8L54.3996 10.8L50.3996 7.80005L46.7996 10.0999L46.5996 15.8999Z"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.9 19.0999L50.5 19"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.8004 16.0999L58.1004 10.8999L54.1004 7.3999L50.4004 7.80005"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.6992 19.0999L57.7992 16.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.2007 17.5C80.1007 23.3 84.0007 36.8 83.5007 52.3C82.9007 72.9 74.9007 89.5 65.7007 89.2C56.4007 88.9 49.4007 72 50.0007 51.3C50.3007 39.5 55.3007 25.5999 61.4007 20.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.4996 89.2C65.6996 89.2 54.5996 88.7 53.8996 88.5C44.6996 86.2 37.5996 70.9999 37.5996 51.8999C37.5996 37.8999 42.2996 28.0999 48.0996 22.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.8992 19.7C73.1992 26.3 75.2992 37.4 75.2992 50.5C75.2992 67.2 68.6992 81.4 59.6992 86.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.1992 18.7L47.9992 20.5C47.9992 20.5 47.2992 22.5999 49.0992 22.3999C50.7992 22.1999 52.7992 20.7 54.5992 21C56.3992 21.3 56.2992 22 56.2992 22C56.2992 22 56.3992 22.9 57.8992 22.5C59.3992 22.1 60.6992 19.9999 61.5992 19.3999C62.4992 18.6999 64.6992 17.5999 64.6992 17.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.9996 19.7L65.2996 20.5999L60.5996 20.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57.3008 7.09985C58.3008 7.29985 60.0008 8 60.6008 9.5C61.4008 11.7 64.7008 17.5999 64.7008 17.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.9004 19.0999C57.9004 18.6999 61.1004 15.1 61.5004 12"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M71.3008 20.2L73.9008 20.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M72.9004 24.5999L76.6004 24.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.5996 29L78.3996 28.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75.8008 33.3999L79.6008 33"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76.6992 37.8L80.4992 37.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.1992 42.0999L81.0992 41.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.5 46.2L81.4 46.0999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.5996 50.3L81.4996 50.2"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.5 54.3999L81.4 54.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M77.1992 58.3999C77.6992 58.3999 81.0992 58.3999 81.0992 58.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76.6992 62.3H80.5992"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M75.9004 66.3L79.8004 66.3999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M74.3008 70.5L78.1008 70.5999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M73 74.5999L76.7 74.8999"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.5 79L74.2 79.3"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.0996 83.5L70.6996 83.8"
      stroke="#3D4143"
      stroke-width="1.4173"
      stroke-miterlimit="22.9256"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
