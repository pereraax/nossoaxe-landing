import PremiumImage from './PremiumImage'
import { IMAGES } from '../../config/assets'

export default function SideBotanicals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] hidden overflow-hidden xl:block" aria-hidden>
      <PremiumImage
        src={IMAGES.galeriaPremium}
        alt=""
        width={1024}
        height={682}
        className="absolute -left-32 top-[18%] h-72 w-auto max-w-none opacity-[0.07] blur-[1px]"
      />
      <PremiumImage
        src={IMAGES.galeriaPremium}
        alt=""
        width={1024}
        height={682}
        className="absolute -right-32 top-[42%] h-72 w-auto max-w-none -scale-x-100 opacity-[0.07] blur-[1px]"
      />
      <PremiumImage
        src={IMAGES.bgHero}
        alt=""
        width={1024}
        height={576}
        className="absolute -left-24 bottom-[12%] h-56 w-auto max-w-none opacity-[0.06]"
      />
      <PremiumImage
        src={IMAGES.bgHero}
        alt=""
        width={1024}
        height={576}
        className="absolute -right-24 top-[68%] h-56 w-auto max-w-none -scale-x-100 opacity-[0.06]"
      />
    </div>
  )
}
