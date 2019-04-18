/* alanode example/ */
import closure from '../src'

(async () => {
  const res = await closure({
    text: 'example',
  })
  console.log(res)
})()