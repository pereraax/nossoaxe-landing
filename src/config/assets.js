/**
 * Mapa central de imagens — substitua os paths quando os assets finais estiverem prontos.
 * Placeholders em /public/placeholders/ | Assets reais em /public/images/
 */
export const IMAGES = {
  logo: '/images/logo-nossoaxe.png',

  hero: {
    mockup: '/images/hero-mockup-premium.png',
    plant: '/tl.png',
  },

  kit: {
    /** Livro principal + bônus + tablet + celular */
    completo: '/placeholders/mockup-kit-completo.png',
    livroPrincipal: '/placeholders/mockup-livro-principal.png',
    livroBonus: '/placeholders/mockup-livro-bonus.png',
  },

  bonus: {
    mockup: '/images/bonus-ervas-cover.png',
    cover: '/images/bonus-ervas-cover.png',
    selo: '/placeholders/selo-bonus-exclusivo.png',
  },

  icons: {
    prosperidade: '/images/icons/prosperidade.png',
    protecao: '/images/icons/protecao.png',
    amor: '/images/icons/amor.png',
    trabalho: '/images/icons/trabalho.png',
    banhos: '/images/icons/banhos.png',
    defumacoes: '/images/icons/defumacoes.png',
    checkMarca: '/Design sem nome (4).png',
  },

  galeria: {
    paginas: [
      '/placeholders/pagina-interna-01.png',
      '/placeholders/pagina-interna-02.png',
      '/placeholders/pagina-interna-03.png',
    ],
  },

  porDentro: {
    paginas: [
      {
        src: '/1.png',
        alt: 'Prévia — Guia de Ebós e Banhos (4 páginas)',
      },
      {
        src: '/2.png',
        alt: 'Prévia — Guia das Ervas Sagradas (4 páginas)',
      },
    ],
  },

  selos: {
    garantia: '/placeholders/selo-garantia.png',
    compraSegura: '/placeholders/selo-compra-segura.png',
  },

  decor: {
    faixa: '/images/decor/faixa-ornamento.png',
    florMacrame: '/images/decor/flor-macrame.png',
    folhasEsquerda: '/placeholders/ramos-esquerda.png',
    folhasDireita: '/placeholders/folhas-direita.png',
    fundo: '/placeholders/fundo-decorativo.png',
    banner: '/placeholders/banner-footer.png',
  },

  depoimentos: {
    avatar1: '/images/depoimentos/depoimento-01.png',
    avatar2: '/images/depoimentos/depoimento-02.png',
    avatar3: '/images/depoimentos/depoimento-03.png',
    avatar4: '/images/depoimentos/depoimento-04.png',
    avatar5: '/images/depoimentos/depoimento-05.png',
    avatar6: '/images/depoimentos/depoimento-06.png',
  },
}

/** @deprecated use IMAGES */
export const PLACEHOLDERS = IMAGES
