import { useState } from 'react';
import HomeBar from '@/components/HomeBar';


export default function Login() {

  const [bookId, setBookId] = useState('')
  const [userId, setUserId] = useState('')
  const [rentedOn, setRentedOn] = useState('')
  const [returnOn, setReturnOn] = useState('')
  const [error, setError] = useState('')

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
            <HomeBar />
            <h3>Faça as modificações necessárias no aluguel</h3>
          <div className='loginBox' title="Faça seu login">
            <form className='loginForm'>
              <input
                type="text"
                placeholder="ID do livro"
                onChange={(e) => setBookId(e.target.value)}
              />
              <input
              type="text"
              placeholder="ID do Usuário"
              onChange={(e) => setUserId(e.target.value)}
              />
              <input
              type="text"
              placeholder="Data do aluguel"
              onChange={(e) => setRentedOn(e.target.value)}
              />
              <input
              type="text"
              placeholder="Data limite de retorno"
              onChange={(e) => setReturnOn(e.target.value)}
              />
              <button /*onClick={(e) => handleForm(e)}*/>Editar</button>
              {error && <p className="error">{error}</p>}
            </form>
          </div>
      </div>
  );
}
