import { useRouter } from "next/router";
import { useState } from "react";
// import AddTocartModal from "../../../components/AddTocartModal";
import dynamic from "next/dynamic";

const AddToCartModal = dynamic(
  () => import("@/components/AddTocartModal"),
  { loading: () => <p>Loading...</p> }
)
export default function Product() {
  const router = useRouter()
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false)

  function handleAddToCart() {
    setIsAddToCartModalVisible(true)
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to cart</button>

      { isAddToCartModalVisible && <AddToCartModal />}
    </div>
  )
}