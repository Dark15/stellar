import request from '@/lib/utils/axios'
import type { Post } from './model/posts'

export async function getPostList() {
  return request.get<Post[]>('/api/posts')
}
