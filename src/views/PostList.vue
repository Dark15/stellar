<template>
  <div class="">
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
