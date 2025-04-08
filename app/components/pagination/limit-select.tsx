"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";

export default function LimitSelect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  //called when the value changes in the drop down
  const handleChange = (value: string): void => {
    //use current pathname and add limit - for now, don't bother keeping the rest of the url since we want page refresh anyway
    router.push(`${pathname}/?limit=${value}`);
  };

  //get current limit from url to have it selected as default
  const limit = searchParams.get("limit") ?? "24";

  return (
    <Select onValueChange={handleChange} defaultValue={limit}>
      <SelectTrigger className="w-30">
        <SelectValue placeholder="Items/Page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Items/Page</SelectLabel>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="24">24</SelectItem>
          <SelectItem value="32">32</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}