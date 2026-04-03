import Link from "next/link";
import { Button } from "../ui/button";
import DatePicker from "./DatePicker";
import CategoryMobile from "./CategoryMobile";

const CategoryButtons = () => {
  return (
    <div className="flex justify-between">
      <div className="lg:block hidden">
        <div className="space-x-2 lg:space-y-0 space-y-2 lg:block hidden">
          <Button asChild variant={"outline"}>
            <Link href={"/blogs"}>All</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/categories/achievements"}>Achievements</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/categories/technology"}>Technology</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/categories/web"}>Web</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/categories/experiences"}>Experiences</Link>
          </Button>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden">
        <CategoryMobile />
      </div>

      <DatePicker />
    </div>
  );
};

export default CategoryButtons;
