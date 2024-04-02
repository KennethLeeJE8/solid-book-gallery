import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * booksContext: JSONLD Context for books
 * =============================================================================
 */
export const booksContext: ContextDefinition = {
  type: {
    "@id": "@type",
  },
  Book: "http://schema.org/Book",
  CreativeWork: "http://schema.org/CreativeWork",
  Thing: "http://schema.org/Thing",
  name: {
    "@id": "http://schema.org/name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  author: {
    "@id": "http://schema.org/author",
    "@type": "@id",
  },
  Person: "http://xmlns.com/foaf/0.1/Person",
  givenName: {
    "@id": "http://schema.org/givenName",
    "@type": "http://schema.org/Text",
  },
  familyName: {
    "@id": "http://schema.org/familyName",
    "@type": "http://schema.org/Text",
  },
  name2: {
    "@id": "http://xmlns.com/foaf/0.1/name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  oidcIssuer: {
    "@id": "http://www.w3.org/ns/solid/terms#oidcIssuer",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  numberOfPages: {
    "@id": "http://schema.org/numberOfPages",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
  startDate: {
    "@id": "http://schema.org/startDate",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  datePublished: {
    "@id": "http://schema.org/datePublished",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  about: {
    "@id": "http://schema.org/about",
    "@type": "http://schema.org/Thing",
  },
};
