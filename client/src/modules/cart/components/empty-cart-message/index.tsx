import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Ваш кошик порожній =(</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Ви ще не додали жодного товару до кошика. Давайте виправимо це. Скористайтесь посиланням нижче щоб переглянути список наявних товарів.
      </p>
      <div>
        <UnderlineLink href="/store">Перейти до каталогу</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
