import { useRouter } from 'next/router'

const GetUrl = () => {
  const router = useRouter()

  const pathName = router.asPath

  return pathName
}

export default GetUrl
