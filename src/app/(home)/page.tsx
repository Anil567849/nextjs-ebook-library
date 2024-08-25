

// (home) = next js will not consider it as route - we use it if we want to group components of page. Example: if you have x components of home page which you will use only in home page then you can put all its component inside (home)

import Image from "next/image";

export default function Home() {
  return (
    <h1>Hello World</h1>
  );
}
