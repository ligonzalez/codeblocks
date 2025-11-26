 "use server";
import { userlogout } from "@/app/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout() {

    //await userlogout();
    redirect("/login");

}