<template>
  <nav
    :class="[mini ? 'fixed w-58rem h-6rem px-4rem top-12rem' : 'block w-83rem h-12rem px-7rem']"
    class="text-white bg-white bg-opacity-[0.2] backdrop-filter backdrop-blur-[18px] backdrop-brightness-[1.15] rounded-[1.5rem] select-none"
  >
    <ul class="flex items-center justify-between h-full text-center">
      <img
        v-if="mini"
        :src="avatarImg"
        class="h-5rem rounded-full cursor-pointer"
      />
      <li
        class="text-shadow"
        v-for="nav in navbarList"
        :key="nav.path"
        @click="nav.onClick"
      >
        <router-link :to="nav.path">
          <i
            class="!text-3.5rem !leading-normal"
            :class="['iconfont', `icon-${nav.icon}`]"
          ></i>
          <span v-if="!mini" class="block text-2.5rem leading-normal">{{
            nav.title
          }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { navbarList } from '@/lib/data/navbarList'
import avatarImg from '@/assets/images/avatar.png'

interface Props {
  mini?: boolean
  type?: 'horizontal' | 'vertical'
}

withDefaults(defineProps<Props>(), {
  mini: false,
  type: 'horizontal'
})
</script>
