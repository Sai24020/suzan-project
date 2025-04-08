//import styles from "./pagination.module.css";
import {
    ChevronRight,
    ChevronLast,
    ChevronLeft,
    ChevronFirst,
  } from "lucide-react";
  import Link from "next/link";
  import { Button, buttonVariants } from "@/app/components/ui/button";
  import LimitSelect from "./limit-select";
  
  const DEFAULT_LIMIT = 24;
  
  const makeLink = (
    path: string,
    text: string,
    Icon: React.ElementType,
    disabled = false
  ) => {
    //if we want text on the icons we can swap position left/right of text
    //const isLeadingIcon = text === "First" || text === "Previous";
    // const className =
    //   "flex items-center gap-2 justify-center bg-zinc-200 border border-gray-400 rounded p-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none font-bold";
    return disabled ? (
      // <Link className={className} href={path}>
      <Link
        className={buttonVariants({ variant: "outline", size: "icon" })}
        href={path}
      >
        <Icon />
        {/* {isLeadingIcon && <Icon className="text-gray-800" />} */}
        {/* {text}
          {!isLeadingIcon && <Icon />} */}
      </Link>
    ) : (
      <Button variant={"outline"} size={"icon"} disabled aria-disabled="true">
        <Icon />
        {/* {isLeadingIcon && <Icon />}
          {text}
          {!isLeadingIcon && <Icon />} */}
      </Button>
    );
  };
  
  export default function PaginationNav({
    path,
    pagesCount,
    skip = 0,
    limit = DEFAULT_LIMIT,
  }: {
    path: string;
    pagesCount: number;
    skip: number;
    limit: number;
  }) {
    const totalCount = pagesCount;
    const totalPages = limit > 0 ? Math.ceil(totalCount / limit) - 1 : 1;
    //TODO: Restrict current page to min/max
    const currentPage = skip + 1;
  
    return (
      <nav
        role="navigation"
        aria-label="pagination"
        className="flex items-center justify-center gap-4 mb-4"
      >
        {makeLink(
          `${path}?skip=${0}&limit=${limit}`,
          "First",
          ChevronFirst,
          skip > 0
        )}
        {makeLink(
          `${path}?skip=${skip - 1}&limit=${limit}`,
          "Previous",
          ChevronLeft,
          skip > 0
        )}
  
        <span>{`Page: ${currentPage}/${totalPages + 1}`}</span>
        <LimitSelect />
  
        {makeLink(
          `${path}?skip=${skip + 1}&limit=${limit}`,
          "Next",
          ChevronRight,
          skip < totalPages
        )}
        {makeLink(
          `${path}?skip=${totalPages}&limit=${limit}`,
          "Last",
          ChevronLast,
          skip < totalPages
        )}
      </nav>
    );
  }