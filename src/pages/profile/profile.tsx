import HomeBar from '@/components/HomeBar';
import Link from 'next/link';


export default function Login() {

  return (
        <div className='loginPage'>
            <HomeBar />
            <h3>Dados do usuário</h3>
          <div className='loginBox' title="Faça seu login">
            <form className='loginForm'>
              <h3>Nome do Usuário</h3>
              <h3>Email do Usuário</h3>
              <Link href='/userRents/userRents'>
                <button /*onClick={(e) => handleForm(e)}*/>Meus aluguéis</button>
              </Link>
            </form>
          </div>
      </div>
  );
}
