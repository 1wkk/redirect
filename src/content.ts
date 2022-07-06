import { redirects } from './redirects'

const decode = (url: string) => decodeURIComponent(url)

const { location } = window
const parameter = redirects[location.origin]

if (parameter) {
  const splits = location.href.split(`${parameter}=`)
  if (splits.length > 1) {
    location.href = decode(splits[1])
  }
}

export {}
