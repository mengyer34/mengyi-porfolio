import { createClient } from '@superbase/superbase-js'

export default ({ app }, inject) => {
  const sb = createClient('<your-superbase-url>', '<your-superbase-key>')
  inject('sb', sb)
}