import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      .
    </h2>
    <img src="/assets/blog/sp-ob_banner-1.jpg" alt="Shimada_Print Blog" 
    className="sp-ob_banner-1-2 width:300px height:85px" width="300" height="85" />
  )
}

export default Header
