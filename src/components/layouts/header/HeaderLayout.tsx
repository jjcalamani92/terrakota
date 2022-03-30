import { CartLayout } from "../cart/CartLayout";
import { HeaderIcon_1 } from "./HeaderIcon";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavbar} from "./HeaderNavbar";
import { HeaderSearch } from './HeaderSearch';

export const HeaderLayout = () => {
  return (
    <>
      <header className="header">
        <HeaderLogo />
        <HeaderNavbar />
        <HeaderIcon_1 />
        <HeaderSearch/>
        <CartLayout/>
      </header>
    </>
  );
};
