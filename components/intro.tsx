import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        markdownJSXなので簡単に投稿・保管が出来て
        &
        プリレンダーなのでSEOで集客力が上がり
        <img src="/assets/blog/nextjs-white-logo.svg" alt="Next.js" width="auto" height="80" /> 
        & 
        静的型付けなので正確な
        <img src="/assets/blog/ts-logo-512.svg" alt="TypeScript" width="auto" height="80" />         
      </h4>
    </section>
  )
}

export default Intro
