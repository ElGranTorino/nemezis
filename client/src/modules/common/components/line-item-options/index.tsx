import { ProductVariant } from "@medusajs/medusa"

type LineItemOptionsProps = { variant: ProductVariant }

const LineItemOptions = ({ variant }: LineItemOptionsProps) => {
  return (
    <div className="text-small-regular text-gray-700">
      {variant.options.map((option) => {
        let optionName =
          variant.product.options.find((opt) => opt.id === option.option_id)
            ?.title || "Option"
        optionName === 'Size' ? optionName = 'Розмір' : optionName = optionName
        return (
          <div key={option.id}>
            <span>
              {optionName}: {option.value}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default LineItemOptions
