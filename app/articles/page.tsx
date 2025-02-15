import * as React from "react";
import Link from "next/link";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <h2 className="text-3xl mb-6">Liste des Articles</h2>

      <ul>
        <li>
          <Link href="/articles/1">Article 1</Link>
        </li>
        <li>
          <Link href="/articles/2">Article 2</Link>
        </li>
      </ul>
    </div>
  );
}
