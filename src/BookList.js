import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { BookContext } from "./BookContext";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>
              {" "}
              {book}
            </li>
          );
        })}
        <li style={{ background: theme.ui }}>The Audacity Hope</li>
        <li style={{ background: theme.ui }}>The name of the wind</li>
        <li style={{ background: theme.ui }}>The Final Empire</li>
      </ul>
    </div>
  );
};

export default Booklist;
