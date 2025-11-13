//"use client"; // This directive marks the file as a Client Component
//import { useSearchParams } from 'next/navigation';
import { prisma } from "@/database";
import { PrismaClient } from '@prisma/client';
import Link from "next/link";
//import { useState, useEffect } from "react";
//import { useRouter } from 'next/router';
//const prisma = new PrismaClient();

export default async function DetailBlock({ searchParams }: { searchParams: { id: string } }) {  
    const param = searchParams.id;    
    const blocks = await prisma.block.findUnique({
       where: { id: Number(3) } //idBlock
    });

    /*
    useEffect(() => {
        async function fetchData() {
            try {

                const block = await prisma.block.findUnique({
                    where: { id: 2 }
                }); // Replace with your actual API endpoint
               
                setData(block || { id:0, title: "", code: "" });
            } catch (err) {
               console.error("Error fetching data:", err);
               setError("Failed to load data");
            } finally {
                console.log("Data fetched");
            }
        }

        fetchData();
    }, []); // Empty dependency array means this runs once on mount
*/
    //const [title, setTitle] = useState('');
    //const [code, setCode] = useState('');
/*
    const handleDelete = async (e: { preventDefault: () => void; }) => {
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
                    <h1 className="text-3xl font-semibold text-gray-800">Detail Block</h1>
                    <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        href="/">Go back Home</Link>
                    <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        href="/">Delete</Link>
                    <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        href="edit">Edit</Link>
                </header>
            </div>

          
                <div className="place-items-center h-screen">
                    <div className="mb-6 w-1/2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                        <textarea disabled id="code" name="code" rows={15} value={blocks?.code} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required></textarea>
                    </div>

                    
                </div>
          
        </main >
    );
}
