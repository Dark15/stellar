<template>
  <header :class="`${clsPrefix}`">
    <div :class="`${clsPrefix}-brand-wrapper`">
      <div :class="`${clsPrefix}-brand-container`">
        <img :src="props.avatarImg" :class="`${clsPrefix}-brand-avatar`" />
        <div
          :class="`${clsPrefix}-brand-info-container`"
          class="relative flex items-center"
          id="test"
        >
          <div
            class="transform absolute bottom-0 border-b-[1px] border-b-white w-[565px] left-[50%] translate-x-[-50%]"
            ref="line"
          ></div>
          <div :class="`${clsPrefix}-brand-info`" ref="info">
            <h1 class="text-5xl tracking-[1px] mr-[4.5rem] inline">
              {{ props.blogName }}
            </h1>
            <a
              class="mr-[2.8rem]"
              target="_blank"
              v-for="socialMedia in props.socialMediaList"
              :key="socialMedia.link"
              :href="socialMedia.link"
            >
              <i
                :class="['iconfont', `icon-${socialMedia.icon}`]"
                class="!text-[2.5rem]"
              ></i>
            </a>
          </div>
          <i
            :class="`${clsPrefix}-search-icon`"
            class="absolute right-0 iconfont icon-search"
          ></i>
        </div>
      </div>
    </div>
    <div
      class="w-[83rem] h-[12rem] bg-white bg-opacity-[0.15] backdrop-filter backdrop-blur-[18px] backdrop-brightness-[1.15] rounded-[1.5rem] select-none"
      ref="navbar"
    >
      <nav class="h-full px-[7rem]">
        <ul class="flex items-center justify-between h-full text-center">
          <li
            class="text-shadow"
            v-for="nav in props.navbarList"
            :key="nav.path"
            @click="nav.onClick"
          >
            <router-link :to="nav.path">
              <i
                class="!text-[3.5rem] !leading-normal"
                :class="['iconfont', `icon-${nav.icon}`]"
              ></i>
              <span class="block text-[2.5rem] leading-normal">{{
                nav.title
              }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
// import { getHitokoto } from '@/api/hitokoto'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface Navbar {
  icon: string
  title: string
  path: string
  onClick?: () => void
}

export interface SocialMedia {
  icon: string
  link: string
}

const clsPrefix = 'stellar-active-header'

interface Props {
  avatarImg: string
  blogName: string
  socialMediaList?: SocialMedia[]
  navbarList: Navbar[]
}
const props = defineProps<Props>()

// const hitokotoText = ref({
//   hitokoto: '',
//   from: ''
// })
// onMounted(() => {
//   getHitokoto().then(res => {
//     hitokotoText.value = res.data
//   })
// })

const info = ref<HTMLDivElement>()
const line = ref<HTMLDivElement>()
const navbar = ref<HTMLDivElement>()

onMounted(() => {
  ScrollTrigger.create({
    trigger: info.value,
    start: 0,
    scrub: true,
    animation: gsap.to(info.value!, {
      y: '-200px',
      opacity: 0
    })
  })
  ScrollTrigger.create({
    trigger: line.value,
    start: 0,
    scrub: true,
    animation: gsap.to(line.value!, {
      y: '-200px',
      width: 0,
      opacity: 0
    })
  })
  gsap.to(navbar.value!, {
    y: '-200px',
    duration: 1,
    scrollTrigger: {
      start: 0,
      scrub: true,
      markers: true
    }
  })
})
</script>

<style lang="scss">
@import './index.scss';
.text-shadow {
  text-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
}
.text-shadow-light {
  text-shadow: 0 2px 2px rgba(255, 255, 255, 0.3);
}
.text-shadow-thin {
  text-shadow: 0 2px 3px rgba(255, 255, 255, 0.72);
}
</style>
