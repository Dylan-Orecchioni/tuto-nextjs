import * as React from "react";
import Link from "next/link";

export interface IAppProps {
   params: {
      id: number;
   }
}

export default function App(props: IAppProps) {
  return (
    <div>
      <h2 className="text-3xl mb-6">Vous êtes sur l'article {props.params.id}</h2>
    </div>
  );
}
