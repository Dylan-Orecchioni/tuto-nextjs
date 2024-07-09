import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h2>Bienvenue à tous le monde</h2>

      {/* <a href="/connexion">Connectez-vous</a> */}

      <Link href="/connexion">Connectez-vous</Link>
    </main>
  );
}
