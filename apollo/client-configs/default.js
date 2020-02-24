import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/ck2dqw04b0zaz01gl67kn9wbd/master';

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})
