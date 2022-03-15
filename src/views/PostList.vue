<template>
  <div class="flex justify-center items-center min-h-screen">
    <Navbar mini />
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
const postList = ref([] as Post[])

onMounted(async () => {
  const { data } = await getPostList()
  postList.value = data
})
</script>
