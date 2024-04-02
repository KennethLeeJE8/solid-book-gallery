import { FunctionComponent } from "react";
import { AddBook } from "./AddBook";
import { Book } from "./Book";
import { useSolidAuth } from "@ldo/solid-react";

export const BookGallery: FunctionComponent = () => {
    const { session } = useSolidAuth();
    if (!session.isLoggedIn) return <p>No gallery available. Log in first.</p>;

  return (
    <main>
      <AddBook />
      <hr />
      <Book />
    </main>
  );
};