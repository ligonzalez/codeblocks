"use server";
import { prisma } from "@/database";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const block = await prisma.block.create({ data: { title, code } });
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