import { useState } from 'react';
import HomeBar from '@/components/HomeBar';


export default function Login() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publicated_in, setPublicated_in] = useState('')
  const [publisher, setPublisher] = useState('')
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
            <h3>Faça as modificações necessárias no livro</h3>
          <div className='loginBox' title="Faça seu login">
            <form className='loginForm'>
              <input
                type="text"
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
              type="text"
              placeholder="Autor"
              onChange={(e) => setAuthor(e.target.value)}
              />
              <input
              type="text"
              placeholder="Data de publicação"
              onChange={(e) => setPublicated_in(e.target.value)}
              />
              <input
              type="text"
              placeholder="Editora"
              onChange={(e) => setPublisher(e.target.value)}
              />
              <button /*onClick={(e) => handleForm(e)}*/>Editar</button>
              {error && <p className="error">{error}</p>}
            </form>
          </div>
      </div>
  );
}
