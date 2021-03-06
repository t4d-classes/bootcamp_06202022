import { memo } from 'react';
import { isEqual } from 'lodash';

export const CarViewRow = memo(({
  car,
  onEditCar: editCar,
  onDeleteCar: deleteCar
}) => {

  console.log('rendering car view: ', car.id);

  return (
    <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>${car.price}</td>
        <td>
          <button type="button"
            onClick={() => editCar(car.id)}>Edit</button>
          <button type="button"
            onClick={() => deleteCar(car.id)}>Delete</button>
        </td>
    </tr>    
  )

}, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});