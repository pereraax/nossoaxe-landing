export const META_PIXEL_ID = '1266249548679863'

export function trackMetaEvent(event, params) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params)
  }
}

export function trackInitiateCheckout() {
  trackMetaEvent('InitiateCheckout')
}
