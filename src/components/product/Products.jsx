
import useStore from "../../store/useStore"
import Product from "./Product"

const Products = ({ products, search }) => {

  const { language } = useStore()

  return (
    <div className="mt-[33px] w-full">
      <div className="px-5 w-full flex">
        <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
          {language.ProductId}
        </p>
        <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
          {language.ProductName}
        </p>
        <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
          {language.Category}
        </p>
        <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
          {language.Quantity}
        </p>
        <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
          {language.PerPrice}
        </p>
        <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
          {language.Status}
        </p>
      </div>

      {search === ""
        ? products && products.map((product) => (
          <Product key={product.id} product={product} />
        ))
        : products
          .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <Product key={product.id} product={product} />
          ))
      }

    </div>
  )
}

export default Products