import { ShapeType } from "@ldo/ldo";
import { booksSchema } from "./books.schema";
import { booksContext } from "./books.context";
import { BookSh, Person } from "./books.typings";

/**
 * =============================================================================
 * LDO ShapeTypes books
 * =============================================================================
 */

/**
 * BookSh ShapeType
 */
export const BookShShapeType: ShapeType<BookSh> = {
  schema: booksSchema,
  shape: "https://example.com/BookSh",
  context: booksContext,
};

/**
 * Person ShapeType
 */
export const PersonShapeType: ShapeType<Person> = {
  schema: booksSchema,
  shape: "http://schema.org/Person",
  context: booksContext,
};
