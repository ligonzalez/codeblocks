import { createBlock } from "@/app/api";
import { prisma } from "@/database";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function CreateBlock() {
    const cookieStore = cookies();
    const userCookie = (await cookieStore).get("user_id");
    if (!userCookie) {
        return (
            <main className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-2xl mx-auto">
                    <header className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-semibold text-gray-800">Code Blocks</h1>

                        <Link
                            href="/login"
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        >
                            Log In
                        </Link>
                    </header>
                    <p className="text-gray-500 italic text-center">
                        Please log in to view your code blocks.
                    </p>
                </div>
            </main>
        );
    }
    const findUser = await prisma.user.findFirst({
        where: {
            id: Number((await cookies()).get('user_id')?.value)
        }
    });
    if (!findUser) {
        return (
            <main className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-2xl mx-auto">
                    <header className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-semibold text-gray-800">Code Blocks</h1>
                        <Link
                            href="/login"
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        >
                            Log In
                        </Link>
                    </header>
                    <p className="text-gray-500 italic text-center">
                        Please log in to view your code blocks.
                    </p>
                </div>
            </main>
        );
    }
    return (
        <main className="min-h-screen bg-gray-50 p-8 justify-center">

            <div className="max-w-2xl mx-auto justify-center"  >
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">Create Block New</h1>
                    <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        href="/">Go back Home</Link>
                </header>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">{`Welcome:  ${findUser?.username} !!`}</h2>
            </div>
            <form action={createBlock}>
                <div className="place-items-center h-screen">
                    <div className="mb-6 w-1/2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Block Title</label>
                        <input id="title" type="text" name="title"
                            className="bg-gray-50 w-20px border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Block Title" required />
                    </div>
                    <div className="mb-6 w-1/2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                        <textarea id="code" name="code" rows={15}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste your code here..." required></textarea>
                    </div>
                    <div className="mb-6 w-1/2">
                        <button name="btnCreate" type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Create</button>
                    </div>
                </div>
            </form >
        </main >
    );
}
