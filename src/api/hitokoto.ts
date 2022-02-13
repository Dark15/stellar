import request from '@/lib/utils/axios'

export const getHitokoto = async () => {
  return request.get('https://v1.hitokoto.cn/?c=i')
}
