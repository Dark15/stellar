<template>
  <div class="h-full">
    <div class="flex items-center justify-center h-screen">
      <ActiveHeader
        :blog-name="blogName"
        :avatar-img="avatarImg"
        :navbar-list="navbarList"
        :social-media-list="socialMedia"
      />
      <!-- <PostCard /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import avatarImg from '@/assets/images/avatar.jpg'
import type { Navbar, SocialMedia } from '@/components/ActiveHeader/index.vue'
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
</script>
