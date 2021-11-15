function loadImg(src) {
  const p = new Promise(
    (resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        const err = new Error(`图片加载失败 ${src}`)
        reject(err)
      }
      // src一赋值，就立马触发图片的加载
      img.src = src
    }
  )
  return p
}

// const url = 'https://codertw.com/wp-content/uploads/img/80CI38iSwL.jpg'
// loadImg(url).then(img => {
//   console.log(img.width)
//   // return的内容会被下一个then捕获到
//   return img
// }).then(img => {
//   console.log(img.height)
// }).catch(ex => console.error(ex))

// 演示先加载第一张图片，再加载第二张图片
const url1 = 'https://codertw.com/wp-content/uploads/img/80CI38iSwL.jpg'
const url2 = 'https://ivanjov.com/content/images/2017/02/do-you-promise-1.png'

loadImg(url1).then(img1=> {
  console.log(img1.width)
  return img1 // 普通对象
}).then(img1 => {
  console.log(img1.height)
  return loadImg(url2) // promise实例
}).then(img2 => {
  console.log(img2.width)
  return img2
}).then(img2 => {
  console.log(img2.height)
}).catch(err => console.error(err))