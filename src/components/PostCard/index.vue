<template>
  <div
    class="w-43.5rem h-21.75rem rounded-2rem block-shadow bg-white bg-cover"
    :style="{
      backgroundImage: 'url(http://static-blog.starryio.com/test-cover.png)'
    }"
  >
    <div class="bg-shadow h-full py-1.5rem px-2.4rem rounded-2rem">
      <div class="flex flex-col justify-between h-full">
        <div class="flex">
          <span class="post-tag">
            <i class="iconfont icon-date !text-12px !leading-normal mr-3px"></i>
            1个月前
          </span>
          <div class="post-tag">aaa</div>
        </div>
        <div>
          <div class="text-2.4rem text-hex-fef4f4 text-shadow">
            <a> 测试标题 </a>
          </div>
          <div class="text-1.2rem text-hex-fef4f4 text-shadow">
            啊啊啊这是一个描述文字
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  link?: string
  title?: string
  date?: string
  excerpt?: string
  tags?: string[]
}

defineProps<Props>()
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
