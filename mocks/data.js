const { faker } = require('@faker-js/faker')

module.exports = (() => {
  const data = { posts: [] }
  // Create 1000 users
  for (let i = 1; i < 51; i++) {
    const tags = []
    const randTime = faker.datatype.number({
      min: 1546300800,
      max: 1647241369
    })
    for (let j = 0; j < faker.datatype.number({ min: 1, max: 5 }); j++) {
      tags.push(faker.lorem.word())
    }
    data.posts.push({
      id: i,
      title: `测试文章${i}`,
      tags: faker.random
        .words(faker.datatype.number({ min: 1, max: 3 }))
        .split(' '),
      coverImage: 'http://static-blog.starryio.com/test-cover.png',
      excerpt: faker.lorem.sentence(),
      createdTime: randTime,
      updatedTime: faker.datatype.number({ min: randTime, max: 1647241369 })
    })
  }
  return data
})()
