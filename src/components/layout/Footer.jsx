import AssetImage from '../ui/AssetImage'
import Reveal from '../ui/Reveal'
import { IMAGES } from '../../config/assets'

export default function Footer() {
  return (
    <footer className="border-t border-green/8 py-12">
      <Reveal className="container-page text-center">
        <AssetImage
          src={IMAGES.logo}
          alt="NossoAxé"
          width={480}
          height={377}
          className="mx-auto h-16 w-auto opacity-90 md:h-20"
        />
        <p className="mt-8 text-xs text-muted/60">
          © {new Date().getFullYear()} NossoAxé. Todos os direitos reservados.
        </p>
      </Reveal>
    </footer>
  )
}
