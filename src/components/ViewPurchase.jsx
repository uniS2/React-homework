import inActiveCheck from "@/assets/inActiveCheck.svg";
import ActiveCheck from "@/assets/ActiveCheck.svg";

function ViewPurchase({ children, purchase, onclick }) {
  const checkImage = purchase ? ActiveCheck : inActiveCheck;

  return (
    <div className="flex gap-1">
      <label className="text-black text-xs" htmlFor="purchase">
        {children}
      </label>
      <button
        type="checkbox"
        id="purchase"
        name="purchase"
        className="no-underline"
        onClick={onclick}
      >
        <img src={checkImage} alt="체크 활성화" />
      </button>
    </div>
  );
}

export default ViewPurchase;
