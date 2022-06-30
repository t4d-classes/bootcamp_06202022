export const BookTable = ({ books }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      {books.map(book => <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.price}</td>
        <td>{book.quantity}</td>
      </tr>)}
    </table>
  )
};