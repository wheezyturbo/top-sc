import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function CartPage() {
  const { cart, setCart } = useOutletContext();

  function incrementQuantity(item) {
    const index = cart.findIndex((c) => c.id === item.id);
    const tempCart = [...cart];
    tempCart[index].quantity++;
    index !== -1 && setCart(tempCart);
  }

  function decrementQuantity(item) {
    const index = cart.findIndex((c) => c.id === item.id);
    const tempCart = [...cart];
    if (tempCart[index].quantity > 0) {
      tempCart[index].quantity--;
    }
    else{
      tempCart.splice(index,1);
    }
    index !== -1 && setCart(tempCart);
  }

  return (
    <div className="mx-auto">
      <h2>Cart</h2>
      {cart.length < 1 ? (
        <h2 className="text-red-300 text-center text-xl font-bold">
          Cart is empty!
        </h2>
      ):
      (<div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://placehold.co/200"
                          alt="Avatar"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.location}</div>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center">
                    <button
                      onClick={() => incrementQuantity(item)}
                      className="btn btn-sm mr-2"
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => decrementQuantity(item)}
                      className="btn btn-sm ml-2"
                    >
                      -
                    </button>
                  </div>
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
         <h3 className="dark:text-green-200 text-green-800">
            Grand total: $
  {cart.reduce((total, item) => total + item.quantity * item.price, 0)}
</h3>
 
      </div>)
      }
    </div>
  );
}

