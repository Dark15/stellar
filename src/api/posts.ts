import request from '@/lib/utils/axios'
import { Post } from './model/Posts'

export async function getPostList() {
  return request.get<Post[]>('/api/posts')
}
