'use client'
import SearchResults from '@/app/components/header/search-results';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
    const searchParams = useSearchParams(); //https://nextjs.org/docs/app/api-reference/functions/use-search-params
    const query = searchParams.get("query");

    // Nu när vi fått sökordet, kan vi göra en fetch med det

    return (
        <main>
             <h1 className="flex bg-[url('/images/shop_now.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-6 py-7 text-3xl font-bold mt-4 mb-4">
             Search about : {query}</h1>
   
            {/* generera kort från apiet som är från sök */}
            <SearchResults query={query} />
        </main>
    )
}