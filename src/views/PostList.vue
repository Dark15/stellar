<template>
  <div class="flex justify-center items-center min-h-screen">
    <nav
      class="fixed flex items-center justify-evenly top-12rem w-58rem h-6rem bg-white bg-opacity-[0.2] backdrop-filter backdrop-blur-[18px] backdrop-brightness-[1.15] rounded-[1.5rem]"
    >
      <img :src="avatarImg" class="h-5rem rounded-full cursor-pointer" />
      <span
        class="text-shadow text-white"
        v-for="nav in navbarList"
        :key="nav.path"
        @click="nav.onClick"
      >
        <router-link :to="nav.path">
          <i
            class="!text-[3.5rem] !leading-normal"
            :class="['iconfont', `icon-${nav.icon}`]"
          ></i>
        </router-link>
      </span>
    </nav>
    <div class="grid grid-cols-2 gap-4.5rem mt-43rem">
      <PostCard
        v-for="post of postList"
        :key="post.id"
        :tags="post.tags"
        :title="post.title"
        :date="post.createdTime"
        :cover-image="post.coverImage"
        :excerpt="post.excerpt"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Post } from '@/api/model/posts'
import { getPostList } from '@/api/posts'
import avatarImg from '@/assets/images/avatar.png'
import { navbarList } from '@/lib/data/navbarList'
const postList = ref([] as Post[])

onMounted(async () => {
  const { data } = await getPostList()
  postList.value = data
})
</script>
