import Link from "next/link";

type Props = {
    href: string;
    title: string;
};

const NavLinks = ({ href, title }: Props) => {
    return (
        <Link href={href}>
            <div className="block py-2 pl-3 pr-4 text-white hover:text-blue-600">
                {title}
            </div>
        </Link>
    );
};

export default NavLinks;
