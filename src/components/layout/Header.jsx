import AssetImage from '../ui/AssetImage'
import { IMAGES } from '../../config/assets'

export default function Header() {
  return (
    <header className="edge-bleed border-b border-green/8 bg-cream/95 backdrop-blur-md">
      <div className="container-page flex justify-center py-3 md:py-3.5">
        <a href="#" className="inline-flex" aria-label="NossoAxé — início">
          <AssetImage
            src={IMAGES.logo}
            alt="NossoAxé — Conhecimento · Fé · Tradição · Axé"
            width={480}
            height={377}
            priority
            className="h-12 w-auto md:h-[3.5rem]"
          />
        </a>
      </div>
    </header>
  )
}
