import type { Navbar } from '../types/navbar'

export const navbarList: Navbar[] = [
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
