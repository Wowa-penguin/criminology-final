import { styles } from "../styles";

const Navbar = ({ net, lík, fík, survey }) => {
  return (
    <div className="w-full h-[6rem]">
      <div className={`${styles.girdNavbar} bg-[#18516b]`}>
        <p className="pt-3 justify-self-start">Framhaldsskólinn í Mosfellsbæ</p>
        <p className="pt-3 justify-self-center	">LOKAVERKEFNI Í AFBROTAFRÆÐI</p>
        <p className="pt-3 justify-self-end">FÉLA3AB05</p>
      </div>
      <div className={`${styles.girdNavbar1} bg-[#126d96]`}>
        <button onClick={net}>Netglæpir</button>
        <button onClick={lík}>Líkamsárásir</button>
        <button onClick={fík}>Fíkniefnaneysla</button>
        <button onClick={survey}>Könnun</button>
      </div>
    </div>
  );
};

export default Navbar;
