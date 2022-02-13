<template>
  <header :class="`${clsPrefix}`">
    <div :class="`${clsPrefix}-brand-wrapper`">
      <div :class="`${clsPrefix}-brand-container`">
        <img :src="props.avatarImg" :class="`${clsPrefix}-brand-avatar`" />
        <div :class="`${clsPrefix}-brand-info-container`">
          <div :class="`${clsPrefix}-brand-info`">
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
            class="iconfont icon-search"
          ></i>
        </div>
      </div>
    </div>
    <div
      class="
        w-[83rem]
        h-[12rem]
        bg-white bg-opacity-[0.15]
        backdrop-filter backdrop-blur-[18px] backdrop-brightness-[1.15]
        rounded-[1.5rem]
        select-none
      "
    >
      <nav class="h-full px-[7rem]">
        <ul class="flex items-center justify-between h-full text-center">
          <li
            class="text-shadow"
            v-for="navbar in props.navbarList"
            :key="navbar.path"
            @click="navbar.onClick"
          >
            <router-link :to="navbar.path">
              <i
                class="!text-[3.5rem]"
                :class="['iconfont', `icon-${navbar.icon}`]"
              ></i>
              <span class="block text-[2.5rem]">{{ navbar.title }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="
        absolute
        bottom-[15%]
        left-[50%]
        translate-x-[-50%]
        text-[1.5rem] text-shadow-thin
        opacity-60
      "
    >
      <p>{{ hitokotoText.hitokoto }}</p>
      <p class="text-right">——{{ hitokotoText.from }}</p>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { getHitokoto } from '@/api/hitokoto'

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

const hitokotoText = ref({
  hitokoto: '',
  from: ''
})

onMounted(() => {
  getHitokoto().then(res => {
    hitokotoText.value = res.data
  })
})
</script>

<style lang="scss" scoped>
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
