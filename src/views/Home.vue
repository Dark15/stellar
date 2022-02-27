<template>
  <div class="h-full">
    <div class="h-screen">
      <ActiveHeader
        :blog-name="blogName"
        :avatar-img="avatarImg"
        :navbar-list="navbarList"
        :social-media-list="socialMedia"
      />
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
import avatarImg from '@/assets/images/avatar.jpg'
import type { Navbar, SocialMedia } from '@/components/ActiveHeader/index.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const blogName = 'Starry 星空'

const navbarList: Navbar[] = [
  {
    title: '文章',
    path: '/',
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
const socialMedia: SocialMedia[] = [
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
  ScrollTrigger.create({
    trigger: hitokoto.value,
    start: 0,
    scrub: true,
    animation: gsap.to(hitokoto.value, {
      opacity: 0,
      y: '-=30'
    })
  })
})
</script>

<style scoped>
.text-shadow-thin {
  text-shadow: 0 2px 3px rgba(255, 255, 255, 0.72);
}
</style>
