import { Schema } from "shexj";

/**
 * =============================================================================
 * booksSchema: ShexJ Schema for books
 * =============================================================================
 */
export const booksSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://example.com/BookSh",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "http://schema.org/Book",
                  "http://schema.org/CreativeWork",
                  "http://schema.org/Thing",
                ],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "name",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The name of the book ",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/author",
              valueExpr: "http://schema.org/Person",
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "author",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The author of the book. ",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/numberOfPages",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "numberOfPages",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The number of pages in the book ",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/startDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "startDate",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The time and date at which the event starts. ",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/datePublished",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "datePublished",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The time and date at which the event ends. ",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/about",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Thing",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "about",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Additional information about the book",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "http://schema.org/Person",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://xmlns.com/foaf/0.1/Person"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/givenName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/familyName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://xmlns.com/foaf/0.1/name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/ns/solid/terms#oidcIssuer",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        annotations: [
          {
            type: "Annotation",
            predicate: "http://www.w3.org/2000/01/rdf-schema#label",
            object: {
              value: "Event",
            },
          },
          {
            type: "Annotation",
            predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
            object: {
              value:
                "A calendar event, this could be an online meeting or in-person event",
            },
          },
        ],
      },
    },
  ],
};
