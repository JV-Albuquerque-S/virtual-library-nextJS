import { useState } from 'react';
import Link from 'next/link';
import { FiAlignJustify } from 'react-icons/fi';

export default function HomeBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex items-center h-[70px] absolute top-0 w-screen z-0 bg-teal-100'>
            <Link href='/home/home'>
                <p className='text-2xl text-teal-500'>Biblioteca</p>
            </Link>
            <Link href='/home/home'>
                <p className='text-4xl text-teal-500'>Virtual</p>
            </Link>
            <FiAlignJustify
                className='absolute right-6 cursor-pointer'
                size={30}
                onClick={toggleMenu}
            />
            {isMenuOpen && (
                <div className='absolute top-[70px] right-6 bg-white border shadow-md p-2'>
                    <Link href='/profile/profile'>
                        <p className='cursor-pointer'>Usuário</p>
                    </Link>
                    <Link href='/manageBooks/manageBooks'>
                        <p className='cursor-pointer'>Gerenciar livros</p>
                    </Link>
                    <Link href='/manageRents/manageRents'>
                        <p className='cursor-pointer'>Gerenciar alugueis</p>
                    </Link>
                    <p onClick={() => console.log('Logout clicado')}>Logout</p>
                </div>
            )}
        </div>
  );
}

