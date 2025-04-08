import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Pagination({totalProducts}: { totalProducts: number }) {
         const router = useRouter();
         const [currentPage, setCurrentPage] = useState(1);
         const productsPerPage = 8;
         const totalPages = Math.ceil(totalProducts / productsPerPage);
       
         const handlePageChange = (newPage: number) => {
           setCurrentPage(newPage);
           router.push(`/?page=${newPage}`);
         };
  return (
    <div>
      {/* Paginering */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
              <Image src="/icons/chevron-left.png" alt="Previous Page" width={24} height={24} />

        </button>
        <span className="px-4 py-2 border rounded bg-gray-200">Sida {currentPage} av {totalPages}</span>
        <button
          className={`px-4 py-2 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
           <Image src="/icons/chevron-right.png" alt="Next Page" width={24} height={24} />

        </button>
      </div>
    </div>
  )
} 