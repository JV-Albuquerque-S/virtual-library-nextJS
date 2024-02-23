import Link from 'next/link'
import { useState } from 'react';
import LoginBar from '@/components/LoginBar';
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";


export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [showFirstPassword, setShowFirstPassword] = useState(false)
  const [showSecondPassword, setShowSecondPassword] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [error, setError] = useState('')

  const handleClickShowFirstPassword = () => {
    setShowFirstPassword(!showFirstPassword)
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
        <div className='registerPage'>
            <LoginBar />
            <h2>Registre-se</h2>
          <div className='registerBox' title="Faça seu login">
            <form className='registerForm'>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
              type={showFirstPassword ? 'text' : 'password'}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              />
              {showFirstPassword ? (
                <BsEye className='firstEyeIcon' onClick={() => setShowFirstPassword(false)} />
              ) : (
                <BsEyeSlash className='firstEyeIcon' onClick={() => setShowFirstPassword(true)} />
              )}
              <input
              type={showSecondPassword ? 'text' : 'password'}
              placeholder="Repita a Senha"
              onChange={(e) => setPassword(e.target.value)}
              />
              {showSecondPassword ? (
                <BsEye className='secondEyeIcon' onClick={() => setShowSecondPassword(false)} />
              ) : (
                <BsEyeSlash className='secondEyeIcon' onClick={() => setShowSecondPassword(true)} />
              )}
              <button /*onClick={(e) => handleForm(e)}*/>Entrar</button>
              {error && <p className="error">{error}</p>}
              <Link href="/login/login">Já possui uma conta? Entre!</Link>
            </form>
          </div>
      </div>
  );
}
