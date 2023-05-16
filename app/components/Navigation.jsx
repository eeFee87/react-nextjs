import Link from 'next/link';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Products',
    route: '/products',
  },
];
export function Navigation() {
  return (
    <header className="border-2 p-4 ">
      <nav>
        <ul className="flex justify-around ">
          {links.map(({ label, route }) => (
            <li key={route} className="border px-2 rounded-xl">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
