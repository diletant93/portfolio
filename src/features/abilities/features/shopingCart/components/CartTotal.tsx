export default function CartTotal({number}:{number:number}) {
    if(number < 0) return <div>No items selected</div>
  return (
    <div >
       Items in the cart: {number}
    </div>
  );
}
