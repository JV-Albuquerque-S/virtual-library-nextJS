import Link from 'next/link'
import { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isDisable, setIsDisable] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }


  return (
        <div className='loginPage'>
          <div className='loginBox' title="Faça seu login">
            <form className='loginForm'>
              <input
                type="e-mail"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              />
              <button /*onClick={handleForm}*/>Entrar</button>
              {/*error && <p className="error">{error}</p>*/}
              <Link href="/register/register">Não possui uma conta?</Link>
            </form>
          </div>
      </div>
  );
}
