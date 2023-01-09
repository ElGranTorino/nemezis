import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-start justify-between p-6">
      <div>
        <h2 className="text-xl-semi">Вже маєте обліковий запис?</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          Авторизуйтесь, щоб отримати повний доступ до функціоналу
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="secondary">Авторизуватись</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
