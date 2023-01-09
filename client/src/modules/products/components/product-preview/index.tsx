import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`} className="block overflow-hidden group">
      <a className="block overflow-hidden group">
        <Thumbnail thumbnail={thumbnail} size="full" />
        <div className="relative pt-3 bg-white">
          <h3
            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
          >
            {title}
          </h3>

          <p className="mt-2">
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <span className="line-through text-gray-500">
                    {price.original_price}
                  </span>
                )}
                <span
                  className={clsx("tracking-wider", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                  {price.calculated_price}
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
            {/* <span className="line-through mr-2"> £30.00 GBP </span>

            <span className="tracking-wider text-gray-900"> £24.00 GBP </span> */}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
