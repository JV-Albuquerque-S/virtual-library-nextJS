import { useState } from "react";
import HomeBar from "@/components/HomeBar";
import Link from "next/link";
import { FiPlusSquare } from 'react-icons/fi';

const books = [
    {id: 0, title: 'Senhor dos Anés: A Sociedade do Anel', author: 'J.R.R. Tolkien', publicated_in: '1954', publisher: 'HarperCollins', available: true},
    {id: 1, title: 'Senhor dos Anés: As Duas Torres', author: 'J.R.R. Tolkien', publicated_in: '1954', publisher: 'HarperCollins', available: false},
    {id: 2, title: 'Senhor dos Anés: O Retorno do Rei', author: 'J.R.R. Tolkien', publicated_in: '1955', publisher: 'HarperCollins', available: true},
    {id: 3, title: 'O Hobbit', author: 'J.R.R. Tolkien', publicated_in: '1937', publisher: 'HarperCollins', available: false},
    {id: 4, title: 'O Guia do mochileiro das Galáxias', author: 'Douglas Adams', publicated_in: '2007', publisher: 'Editora Arqueiro', available: true},
    {id: 5, title: 'Crônicas Saxônicas: O Último Reino', author: 'Bernard Cornwell', publicated_in: '2006', publisher: 'Record', available: false},
    {id: 6, title: 'Crônicas Saxônicas: O Cavaleiro de Morte', author: 'Bernard Cornwell', publicated_in: '2007', publisher: 'Record', available: false},
    {id: 7, title: 'Crônicas Saxônicas: Os Senhores do Norte', author: 'Bernard Cornwell', publicated_in: '2007', publisher: 'Record', available: true},
    {id: 8, title: 'Nome do livro', author: 'Autor do livro', publicated_in: '2077', publisher: 'Editora do livro', available: true},
    {id: 9, title: 'Nome do livro 2', author: 'Autor do livro 2', publicated_in: '2077', publisher: 'Editora do livro 2', available: false},
    {id: 10, title: 'Nome do livro 3', author: 'Autor do livro 3', publicated_in: '2077', publisher: 'Editora do livro 3', available: true},
    {id: 11, title: 'Nome do livro 4', author: 'Autor do livro 4', publicated_in: '2077', publisher: 'Editora do livro 4', available: false},
    {id: 12, title: 'Nome do livro 5', author: 'Autor do livro 5', publicated_in: '2077', publisher: 'Editora do livro 5', available: true},
    {id: 13, title: 'Nome do livro 6', author: 'Autor do livro 6', publicated_in: '2077', publisher: 'Editora do livro 6', available: false},
    {id: 14, title: 'Nome do livro 7', author: 'Autor do livro 7', publicated_in: '2077', publisher: 'Editora do livro 7', available: false},
    {id: 15, title: 'Nome do livro 8', author: 'Autor do livro 8', publicated_in: '2077', publisher: 'Editora do livro 8', available: true}
]

export default function Home() {
    const [isFormOpen, setFormOpen] = useState(false);
    const [newBook, setNewBook] = useState({
      title: '',
      author: '',
      publicated_in: '',
      publisher: '',
      available: true,
    });
  
    const toggleForm = () => {
        setFormOpen(!isFormOpen);
      };
    
      const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setNewBook((prevBook) => ({
          ...prevBook,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        // chamado de api
        console.log('Novo Livro:', newBook);
        setNewBook({
          title: '',
          author: '',
          publicated_in: '',
          publisher: '',
          available: true,
        });
        setFormOpen(false);
      };
    

    return(
        <div className='homePage'>
            <HomeBar />
            <h1>Gerenciar livros</h1>
            <h2>Adicione livros que adquirimos atualmente</h2>
            <h2>Exclua livros que não possuímos mais</h2>
            <h2>Ou modifique uma informação errada</h2>
            <button onClick={toggleForm}>
                <FiPlusSquare /> Adicionar Livro
            </button>
            {isFormOpen && (
                <div className='formOverlay'>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Título:
                            <input
                                type='text'
                                name='title'
                                value={newBook.title}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Autor:
                            <input
                                type='text'
                                name='author'
                                value={newBook.author}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Ano de Publicação:
                            <input
                                type='text'
                                name='publicated_in'
                                value={newBook.publicated_in}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Editora:
                            <input
                                type='text'
                                name='publisher'
                                value={newBook.publisher}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button className='ml-2 bg-orange-500' type='submit'>Adicionar Livro</button>
                    </form>
                </div>
            )}            
            <div className='booksBox'>
                {books.map(book => {
                    return(
                        <Link
                        className='singleBook'
                        key={book.id}
                        href={{
                            pathname:'/book/book',
                            query:{id:book.id}
                        }}>
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                            <p>{book.publicated_in}</p>
                            <p>{book.publisher}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}