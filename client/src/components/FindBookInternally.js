import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import interrnal_api from '../services/internal';

const FindBookInternally = () => {
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        // console.log(book);
    },[book]);

const findBookInternallySubmitHandler = (e) => {
    e.preventDefault();
    let isbn = e.target.isbn.value;
    interrnal_api.getGeneric('isbn', isbn)
    .then(res=>setBook(res));

    
}

const editBookHandler = () => {
    navigate('/edit/' + book?.[0]?.id);
    return;
}

const deleteBookHandler = () => {
    navigate('/delete/' + book?.[0]?.id);
    return;
}

    return(<>
        <legend>Find book internally via ISBN</legend>
        <form id="internal" onSubmit={findBookInternallySubmitHandler}>
            <input type="text" name="isbn" />
            <input type="submit" value="Find book internally" />
            <input type="reset" value="Reset" />
            {(Object.keys(book || {}).length !== 0 && document.forms[0].isbn.value !== '') && <>
                    <button onClick={editBookHandler}>Edit</button>
                    <button onClick={deleteBookHandler}>Delete</button>
                </>
            }
        </form>
        </>
    )

}

export default FindBookInternally;