import Image from "next/image";
import { useState } from "react";

// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  return (
    <header className="navbar-wrapper flex justify-center">
      <nav className="navbar flex flex-col gap-4 w-2/4 text-center">
        <Logo />
        <div className="navbar-links flex flex-col gap-2">
          {isAuthUser ? (
            <>
              <h1 className="text-2xl font-bold my-5">Hoşgeldiniz</h1>
              <a
                href="#"
                className="navbar-link w-2/5 mx-auto rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="navbar-link w-2/5 mx-auto rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setIsAuthUser((prev) => !prev)}
              >
                Sign out
              </a>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold my-5">
                Hesabınıza giriş yapın
              </h1>
              <a
                href="#"
                className="navbar-link w-2/5 mx-auto rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setIsAuthUser((prev) => !prev)}
              >
                Login
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex lg:flex-1 justify-center mt-8 mb-3">
      <a href="#" className="-m-1.5 p-1.5">
        <Image
          className="h-8 w-auto"
          src="/mark.svg"
          alt="Tailwind Logo"
          width={500}
          height={500}
        />
      </a>
    </div>
  );
}
