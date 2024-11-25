import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

//const redressed = Redressed({ subsets: ["latin"] }, weight: ["400"]);

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div>
            <Link href="/">Shopper</Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Cart</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
