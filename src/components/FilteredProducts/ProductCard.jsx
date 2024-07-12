import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../features/slices/productsSlice';
import { Link, useParams } from 'react-router-dom';

export const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card onClick={() => dispatch(singleProduct(id))} className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-96">
          <img src={img} alt="card-image" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};
