import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="sp-ob_banner-1-1">
            <img src="/assets/blog/sp-ob_banner-1.jpg" alt="Shimada_Print Blog" className="sp-ob_banner-1-2" />
          </div>
          <div className="GitHub_s-1-1 nowrap items-center">
            <a
              href={`https://github.com/shimada-print/shimada-print-o-blog`}
              className="mx-3 font-bold hover:underline"
            >
              Source on GitHub
            </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="http://shimada.starfree.jp/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Shimada_Print Homepage
            </a>
          </div>
          <div className="created_spc-1-1 nowrap items-center">
            <a
              href={`https://docusaurus-2-shimada-print-1.vercel.app/docs/doc1`}
              className="mx-3 font-bold hover:underline"
            >
              created by S.P Consulting
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
