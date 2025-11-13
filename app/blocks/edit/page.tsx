//"use client"; // This directive marks the file as a Client Component
//import { useSearchParams } from 'next/navigation';
import { prisma } from "@/database";
import { PrismaClient } from '@prisma/client';
import Link from "next/link";
//import { useState } from "react";
//mport { redirect } from 'next/navigation';
//import { useRouter } from 'next/router';
//const prisma = new PrismaClient();

export default async function UpdateBlock({ searchParams }: { searchParams: { id: string } }) {
    const param = searchParams.id;
    const blocks = await prisma.block.findUnique({
        where: { id: Number(3) } //idBlock
    });
    //const [title, setTitle] = useState('');
    // const [code, setCode] = useState('');
/*
const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, code }),
    });
    if (response.ok) {
      // Handle success, e.g., clear form, show message
      setTitle('');
      setCode('');
      redirect('/');
    } else {
      // Handle error
    }
  };
  */
    return (
        <main className="min-h-screen bg-gray-50 p-8 justify-center">

            <div className="max-w-2xl mx-auto justify-center"  >
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">Update Block</h1>
                    <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        href="/">Go back Home</Link>

                </header>
            </div>

            <form >

                <div className="place-items-center h-screen">
                    <div className="mb-6 w-1/2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Block Title</label>
                        <input id="title" type="text" name="title" value={blocks?.title} 
                            className="bg-gray-50 w-20px border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Block Title" required />
                    </div>
                    <div className="mb-6 w-1/2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                        <textarea id="code" name="code" rows={15} value={blocks?.code} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste your code here..." required></textarea>
                    </div>
                    <div className="mb-6 w-1/2">
                        <button name="btnSave" type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Save</button>
                    </div>
                   
                </div>
            </form >

        </main >
    );
}
