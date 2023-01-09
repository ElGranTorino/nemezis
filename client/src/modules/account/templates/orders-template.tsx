import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Мої Замовлення</h1>
        <p className="text-base-regular">
          Переглядайте детальну інформацію про всі свою попередні замовлення
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
