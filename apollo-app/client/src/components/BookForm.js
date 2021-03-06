
import { useValidation } from '../hooks/useValidation';
import { useForm } from '../hooks/useForm';


import { TextValueDropDown } from './TextValueDropDown';

const AUTHOR_NOT_SELECTED = "-1";

export const BookForm = ({
  buttonText,
  authorOptions,
  onSubmitBook,
}) => {

  const [ errors, addError, clearErrors ] = useValidation();

  const [ bookForm, change, resetBookForm ] = useForm({
    title: '',
    isbn: '',
    authorId: AUTHOR_NOT_SELECTED,
    category: "Inspirational",
    price: 10.99,
    quantity: 0,
  });

  const isValidBookForm = () => {

    let isValid = true;

    clearErrors();

    if (bookForm.authorId === AUTHOR_NOT_SELECTED) {
      addError("An author must be selected.");
      isValid = false;
    }

    return isValid;
  };
  
  const submitBook = async () => {

    if (isValidBookForm()) {
      await onSubmitBook({ ...bookForm });
      resetBookForm();
    }

  };

  return (
    <form>
      {errors.length > 0 && <ul>
        {errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>}
      <label style={{display: 'block'}}>
        Title:
        <input type="text" name="title" value={bookForm.title} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        ISBN:
        <input type="text" name="isbn" value={bookForm.isbn} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Category:
        <input type="text" name="category" value={bookForm.category} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Author:
        <TextValueDropDown title="Select Author of the Book"
          name="authorId" value={bookForm.authorId} onChange={change}
          options={authorOptions} />
      </label>
      <label style={{display: 'block'}}>
        Price:
        <input type="float" name="price" value={bookForm.price} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Quantity:
        <input type="int" name="quantity" value={bookForm.quantity} onChange={change} />
      </label>
      <button type="button" onClick={submitBook}>{buttonText}</button>
    </form>
  );


};