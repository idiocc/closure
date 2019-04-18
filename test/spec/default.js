import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import closure from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof closure, 'function')
  },
  async 'calls package without error'() {
    await closure()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await closure({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T