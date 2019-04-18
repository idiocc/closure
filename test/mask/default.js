import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import closure from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await closure({
      text: input,
    })
    return res
  },
  context: Context,
})