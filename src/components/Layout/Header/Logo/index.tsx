import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}images/logo/ISOLOGO-KITOKO-2.png`}
        alt="logo"
        width={170}
        height={50}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
