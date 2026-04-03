"use client"
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const CategoryMobile = () => {
  const router = useRouter();

    function handlePathChange(value: string) {
        router.push(value);
    }

  return (
    <Select onValueChange={handlePathChange}>
      <SelectTrigger className="w-30">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            <SelectItem value='/blogs'>All</SelectItem>
            <SelectItem value='/categories/achievements'>Achievements</SelectItem>
            <SelectItem value='/categories/technology'>Technology</SelectItem>
            <SelectItem value='/categories/web'>Web</SelectItem>
            <SelectItem value='/categories/experiences'>Experiences</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default CategoryMobile