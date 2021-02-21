import Commerce from '@chec/commerce.js'

let commerce = null

function getCommerce(commercePublicKey) {
  if (commerce) {
    return commerce
  } else {
    const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY
    const devEvironment = process.env.NODE_ENV === 'development'
    if (devEvironment && !publicKey) {
      throw Error('Commerce public API key not fount')
    }
    commerce = new Commerce(publicKey, devEvironment)
    return commerce
  }
}
export default getCommerce
