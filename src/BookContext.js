import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Kings of Queens', id: uuidv4()},
        {title: 'Wesley Snipes Tax Guide', id: uuidv4()},
        {title: 'The Bible: Kanye West Edition', id: uuidv4()},
        {title: 'Of Course That is Funny', id: uuidv4()}
    ])
    return(
        <BookContextProvider value={{books}}>
            {props.children}
        </BookContextProvider>
    )
}

export default BookContextProvider
