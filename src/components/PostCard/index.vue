<template>
  <div :class="clsPrefix">
    <div :class="`${clsPrefix}__content`">
      <div :class="`${clsPrefix}__content-wrapper`">
        <div :class="`${clsPrefix}__content-tags`">
          <span :class="`${clsPrefix}__content-tag`">
            <i class="iconfont icon-date !text-[12px] mr-[3px]"></i>
            1个月前
          </span>
          <div
            v-for="tag in tags"
            :class="`${clsPrefix}__content-tag`"
            :key="tag"
          >
            aaa
          </div>
        </div>
        <div>
          <div :class="`${clsPrefix}__content-title`">
            <a :href="link" :class="`${clsPrefix}__content-title-link`">
              测试标题
            </a>
          </div>
          <div :class="`${clsPrefix}__content-excerpt`">
            啊啊啊这是一个描述文字
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const clsPrefix = 'stellar-post-card'

interface Props {
  link: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

defineProps<Props>()
</script>

<style lang="scss">
@import './index.scss';
</style>
