import { useState } from "react";
import HomeBar from "@/components/HomeBar";
import Link from "next/link";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const rents = [
    {id: 1, BookId: 1, UserId: 1, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000},
    {id: 2, BookId: 2, UserId: 2, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000},
    {id: 3, BookId: 3, UserId: 3, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000},
    {id: 4, BookId: 4, UserId: 1, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000},
    {id: 5, BookId: 5, UserId: 2, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000},
    {id: 6, BookId: 6, UserId: 3, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000},
    {id: 7, BookId: 7, UserId: 4, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000},
    {id: 8, BookId: 8, UserId: 1, RentedOn: Date.now(), ReturnOn: Date.now() + 7 * 24 * 60 * 60 * 1000}
]

export default function ManageRents() {

    const handleEditRent = (id: number) => {
        
    }

    const handleDeleteRent = (id: number) => {

    }

    return(
        <div className='homePage'>
            <HomeBar />
            <h1>Gerenciar aluguéis</h1>
            <h2>Exclua aluguéis que foram devolvidos</h2>
            <h2>Ou modifique uma informação errada</h2>      
            <div className='booksBox'>
                {rents.map(rent => {
                    return(
                        <>
                            <div
                                className='singleBookManage'
                                key={rent.id}
                            >
                                <p>{rent.BookId}</p>
                                <p>{rent.UserId}</p>
                                <p>{rent.RentedOn}</p>
                                <p>{rent.ReturnOn}</p>
                                <div className='actionIcons'>
                                    <AiOutlineDelete
                                        color="red"
                                        size={20}
                                        className='deleteIcon cursor-pointer mr-2'
                                        onClick={() => handleDeleteRent(rent.id)}
                                    />
                        
                                    <Link
                                        href={{
                                            pathname: '/editRent/editRent',
                                            query: { id: rent.id },
                                        }}
                                    >
                                        <AiOutlineEdit
                                            size={20}
                                            className='editIcon cursor-pointer'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}