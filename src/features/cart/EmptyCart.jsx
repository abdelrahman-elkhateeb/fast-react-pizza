import LinkButton from "../ui/LinkButton";
import sad from "../../../public/sad.svg";
function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <img src={sad} alt="sad" />
      <p className="text-center text-xl font-semibold capitalize text-yellow-500">
        Your cart is still empty...
      </p>
    </div>
  );
}

export default EmptyCart;
