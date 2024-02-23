import Link from 'next/link'
import { useState } from 'react';
import LoginBar from '@/components/LoginBar';
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [error, setError] = useState('')

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  /*const handleForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!email) return setError('O e-mail é obrigatório')
    if (!password) return setError('a senha é obrigatório')

    setError('')
    try {
      const response = await fetch(`/api/user/login`, {
        method: 'POST',
        body: JSON.stringify({email, password})
      })

      const json = await response.json()

      if (response.status !== 200) throw new Error(json)
      setCookie('authorization', json)
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }*/

  return (
        <div className='loginPage'>
            <LoginBar />
            <h2>Login</h2>
            <h3>Fique em dia com a sua leitura</h3>
          <div className='loginBox' title="Faça seu login">
            <form className='loginForm'>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <BsEye className='eyeIcon' onClick={() => setShowPassword(false)} />
              ) : (
                <BsEyeSlash className='eyeIcon' onClick={() => setShowPassword(true)} />
              )}
              <button /*onClick={(e) => handleForm(e)}*/>Entrar</button>
              {error && <p className="error">{error}</p>}
              <Link href="/register/register">Não possui uma conta? Registre-se!</Link>
            </form>
          </div>
      </div>
  );
}
