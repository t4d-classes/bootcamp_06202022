import { gql } from '@apollo/client';


export const CarViewRow = ({
  car,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.formattedPrice}</td>
      <td>
        <button type="button" onClick={() => editCar(car.id)}>Edit</button>
        <button type="button" onClick={() => deleteCar(car.id)}>Delete</button>
      </td>
    </tr>
  );

};

// CarViewRow.fragments = {
//   car: gql`
//     fragment CarViewRow_Car on Car {
//       id make model year color price
//     }
//   `
// };

CarViewRow.fragments = {
  car: gql`
    fragment CarViewRow_Car on Car {
      id make model year color formattedPrice(currencyCode: $currencyCode)
    }
  `
};