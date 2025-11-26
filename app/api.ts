"use server";
import { prisma } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    // Assuming you have a 'user' model in your Prisma schema
    const findUser = await prisma.user.findFirst({
      where: {
        username: username,
        password: password
      }
    });

    if (!findUser) {
      console.log("Invalid credentials for username:", username);
      redirect("/login?error=Invalid%20credentials");
    } else {
      console.log("User logged in:", findUser.username);
      (await cookies()).set('user_id', String(findUser.id));     
    }

    // Here you would typically set a session or a cookie
    // For simplicity, we are just redirecting to the home page
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login error:", error.message);
    } else {
      console.error("Login error:", error);
    }
    redirect("/login?error=Login%20failed");
  }
  redirect("/");
}

export async function userlogout() {
  (await cookies()).delete('user_id');
  console.log("User logged out");
  redirect("./login");
}

export async function createBlock(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  //const userId = Number(formData.get("userId"));
  const userId = Number((await cookies()).get('user_id')?.value);
  const block = await prisma.block.create({ data: { title, code, userId } });
  redirect("/");    
}

export async function updateBlock(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const block = await prisma.block.update({
    where: { id: Number(id) },
    data: { title, code },
  });
  redirect(`/blocks/${block.id}/detail`);
}

export async function deleteBlock(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.block.delete({
    where: { id: Number(id) },
  });
  redirect("/");
}