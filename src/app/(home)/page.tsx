

// (home) = next js will not consider it as route - we use it if we want to group components of page. Example: if you have x components of home page which you will use only in home page then you can put all its component inside (home)

// by default next.js pages.tsx are server components if you want to convert it to client component then use 'use client' at the top. 
// you can also make server Component async so that you can fetch data from api 

import { Suspense } from "react";
import BookList from "./components/BookList";
import Loading from "@/components/Loading";

export default function Home() {
  return (
      <>    
            {/* When data will fetch then it will run BookList  */}
          <Suspense fallback={<Loading />}>
              <BookList />
          </Suspense>
      </>
  );
}
