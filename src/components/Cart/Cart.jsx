import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/slices/cartSlice';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from '@material-tailwind/react';

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      {cart.length > 0 ? (
        <Dialog
          className="border-0 outline-0"
          open={openModal}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody className="flex flex-col justify-center items-start">
            {cart.map((product, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-2 py-4">
                    <div>
                      <img
                        className="h-[125px] rounded-md"
                        src={product.img}
                        alt={product.name}
                      />
                      <div className="flex flex-col items-start">
                        <h4 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-2">
                          {product.name}
                        </h4>
                      </div>
                      <div className="max-w-xs">
                        <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                          {product.text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected size:{' '}
                        <span className="ml-2">{product.size}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected color:{' '}
                        <span
                          className="ml-2 rounded-full px-2 ml-2"
                          style={{ backgroundColor: product.color }}
                        ></span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Amount: <span className="ml-2">{product.amount}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Single item price:{' '}
                        <span className="ml-2">{product.price}$</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Total item price:{' '}
                        <span className="ml-2">{product.totalPrice}$</span>
                      </p>
                      <div className="pt-4">
                        <Tooltip content="Remove from cart" placement="bottom">
                          <Button
                            onClick={() => dispatch(removeFromCart(product))}
                            size="sm"
                            color="red"
                            ripple
                            variant="filled"
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          <DialogFooter className="flex justify-start items-center">
            <p className="text-black text- font-inter tracking-normal leading-none pt-2">
              Total Price of All Products:{' '}
              <span className="ml-2">{totalPrice}$</span>
            </p>
          </DialogFooter>
        </Dialog>
      ) : (
        <Dialog
          className="border-0 outline-0"
          open={openModal}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody divider>
            <div>
              <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                Your bag is empty
              </h1>
              <p className="text-black text-base font-inter tracking-normal leading-none">
                Add some products
              </p>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </>
  );
};

export default Cart;
