<template>
  <div class="h-full">
    <div class="h-screen">
      <header
        class="text-white fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] max-w-83rem"
      >
        <div class="px-7rem mb-3rem">
          <div class="flex">
            <img
              :src="avatarImg"
              class="h-8rem relative rounded-full mr-4.5rem cursor-pointer"
            />
            <div
              class="relative flex items-center w-full h-8rem text-shadow-light"
            >
              <div
                class="transform absolute bottom-0 border-b-1px border-b-white w-565px left-[50%] translate-x-[-50%]"
                ref="line"
              ></div>
              <div ref="info" class="inline">
                <h1 class="text-5xl tracking-[1px] mr-[4.5rem] inline">
                  {{ blogName }}
                </h1>
                <a
                  class="mr-[2.8rem]"
                  target="_blank"
                  v-for="socialMedia in socialMediaList"
                  :key="socialMedia.link"
                  :href="socialMedia.link"
                >
                  <i
                    :class="[`icon-${socialMedia.icon}`]"
                    class="iconfont !text-[2.5rem]"
                  ></i>
                </a>
              </div>
              <i
                class="absolute right-0 iconfont icon-search cursor-pointer !text-3rem !leading-normal"
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
                v-for="nav in navbarList"
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
      <div
        class="transform fixed bottom-[15%] left-[50%] translate-x-[-50%] text-[1.5rem] text-white text-shadow-thin opacity-60 leading-normal"
        ref="hitokoto"
      >
        <p>问君能有几多愁？恰似一江春水向东流。</p>
        <p class="text-right">——虞美人·春花秋月何时了</p>
      </div>
      <!-- <PostCard /> -->
    </div>

    <div class="h-[100rem]"></div>
  </div>
</template>

<script lang="ts" setup>
import avatarImg from '@/assets/images/avatar.png'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const blogName = 'Starry 星空'

interface Navbar {
  icon: string
  title: string
  path: string
  onClick?: () => void
}

interface SocialMedia {
  icon: string
  link: string
}

const navbarList: Navbar[] = [
  {
    title: '文章',
    path: '/posts',
    icon: 'post',
    onClick() {
      console.log('文章')
    }
  },
  {
    title: '时光轴',
    path: '/timeline',
    icon: 'clock'
  },
  {
    title: '分类',
    path: '/categories',
    icon: 'box'
  },
  {
    title: '友链',
    path: '/links',
    icon: 'link'
  },
  {
    title: '更多',
    path: '/more',
    icon: 'more'
  }
]
const socialMediaList: SocialMedia[] = [
  {
    icon: 'github',
    link: 'https://github.com/Dark15'
  },
  {
    icon: 'telegram',
    link: 'https://t.me/starryii'
  },
  {
    icon: 'discord',
    link: 'https://discordapp.com/users/333104275712638977'
  },
  {
    icon: 'qq',
    link: 'http://wpa.qq.com/msgrd?v=3&uin=972985335&site=qq&menu=yes'
  }
  // {
  //   icon: 'wechat',
  //   link: 'https://wechat.com/'
  // }
]

const hitokoto = ref(null)

onMounted(() => {
  // ScrollTrigger.create({
  //   trigger: hitokoto.value,
  //   start: 0,
  //   scrub: true,
  //   animation: gsap.to(hitokoto.value, {
  //     opacity: 0,
  //     y: '-=30'
  //   })
  // })
})
</script>

<style scoped>
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
