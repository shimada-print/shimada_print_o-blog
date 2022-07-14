import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      markdownJSXなので簡単に投稿・保管が出来て、Next.jsなのでSEOで集客力が上がり、TypeScriptは静的型付けなので正確
    </section>
    <div className="sp-ob_banner-1-1">
      <img src="/assets/blog/sp-ob_banner-1.jpg" alt="Shimada_Print Blog" 
      className="sp-ob_banner-1-2 width:300px height:85px" width="300" height="85" />
    </div>
  )
}

export default Intro
