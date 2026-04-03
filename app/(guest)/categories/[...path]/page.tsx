import { notFound } from "next/navigation";
import Category from "@/components/features/Category";

export default async function CategoryPage({ params }: { params: { path: string[] } }) {
  const { path } = await params;

  if (!path) return notFound();

  return (
    <>
      <Category path={path} /> 
    </>
  );
}