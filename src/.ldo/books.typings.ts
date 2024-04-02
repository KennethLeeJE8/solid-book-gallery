import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for books
 * =============================================================================
 */

/**
 * BookSh Type
 */
export interface BookSh {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type:
    | {
        "@id": "Book";
      }
    | {
        "@id": "CreativeWork";
      }
    | {
        "@id": "Thing";
      };
  /**
   * The name of the book
   */
  name: string;
  /**
   * The author of the book.
   */
  author?: Person;
  /**
   * The number of pages in the book
   */
  numberOfPages: number;
  /**
   * The time and date at which the event starts.
   */
  startDate: string;
  /**
   * The time and date at which the event ends.
   */
  datePublished: string;
  /**
   * Additional information about the book
   */
  about: string;
}

/**
 * Person Type
 */
export interface Person {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Person";
  };
  givenName?: string;
  familyName?: string;
  name2?: string;
  oidcIssuer?: string;
}
