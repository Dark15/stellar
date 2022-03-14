<template>
  <div
    class="w-43.5rem h-21.75rem rounded-2rem block-shadow bg-white bg-cover"
    :style="{
      backgroundImage: `url(${coverImage})`
    }"
  >
    <div class="bg-shadow h-full py-1.5rem px-2.4rem rounded-2rem">
      <div class="flex flex-col justify-between h-full">
        <div class="flex">
          <span class="post-tag">
            <i class="iconfont icon-date !text-12px !leading-normal mr-3px"></i>
            {{ dateFormat }}
          </span>
          <div class="post-tag" v-for="tag of tags" :key="tag">{{ tag }}</div>
        </div>
        <div>
          <div class="text-2.4rem text-hex-fef4f4 text-shadow">
            <a> {{ title }} </a>
          </div>
          <div class="text-1.2rem text-hex-fef4f4 text-shadow">
            {{ excerpt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

interface Props {
  link?: string
  title: string
  date: number
  excerpt: string
  coverImage: string
  tags: string[]
}

const props = defineProps<Props>()

const dateFormat = computed(() => {
  return dayjs.unix(props.date).fromNow()
})
</script>

<style lang="scss" scoped>
.block-shadow {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.bg-shadow {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.6)
  );
}

.text-shadow {
  text-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
}
</style>
