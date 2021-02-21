import Head from 'next/head'
import getCommerce from '../utils/commerce'
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next app</title>
      </Head>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.media.source} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price.formatted_with_symbol}</p>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const commerce = getCommerce()
  const { data: products } = await commerce.products.list()
  return {
    props: {
      products,
    },
  }
}
