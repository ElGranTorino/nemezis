import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Адреси Доставки</h1>
        <p className="text-base-regular">
          Ви можете додати декілька адрес доставки, щоб не вказувати їх щоразу при створені нового замовлення
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
