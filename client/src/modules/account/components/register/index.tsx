import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      <h1 className="text-large-semi uppercase mb-6">Реєстрація</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Створіть обліковий запис щоб отримати доступ до розширеного функціоналу.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Ім'я*"
            {...register("first_name", { required: "Вкажіть ваше ім'я" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Прізвище*"
            {...register("last_name", { required: "Вкажіть ваше прізвище" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email*"
            {...register("email", { required: "Вкажіть ваш e-mail" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Телефон"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Пароль*"
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              Під час створення облікового запису виникла помилка. Будь ласка, перевірте правильність вказаних даних
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Створюючи аккаунт, ви підтверджуєте свою згоду з <span> </span>
          <Link href="/content/privacy-policy">
            <a className="underline">Політикою Конфіденційность</a>
          </Link>{" "}
          та{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">Умовами Використання</a>
          </Link>
          .
        </span>
        <Button className="mt-6">Приєднатись</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Вже маєте обліковий запис?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Увійти
        </button>
        .
      </span>
    </div>
  )
}

export default Register
