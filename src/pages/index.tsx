import SEO from "@/components/SEO";
import { GetServerSideProps } from "next";
// import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";

interface IProduct {
  id: string
  title: string
}

interface IHomeProps {
  recommendedProducts: IProduct[]
}

export default function Home({ recommendedProducts }: IHomeProps) {
  async function handleSum() {
    const math = (await import('../lib/math')).default

    alert(math.sum(2, 5))
  }

  return (
    <div>
      <SEO 
        title="DevCommerce, o seu e-commerce top!"
        image="boost.png"
        shouldExcludeTitleSuffix
      />

      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section>

      <button onClick={handleSum}>Soma</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`)
  const recommendedProducts = await response.json()

  return {
    props: {
      recommendedProducts
    }
  }
}