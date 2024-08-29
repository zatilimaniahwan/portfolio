type MenuProps = {
  scrollIntoView: (menuId: string) => void;
};
export const Menu = ({ scrollIntoView }: MenuProps) => {
  const menuArray = [
    {
      id: "about",
      label: "about",
    },
    {
      id: "skills",
      label: "skills",
    },
    {
      id: "portfolio",
      label: "portfolio",
    },
  ];

  return (
    <div className="hidden lg:block">
      <ul className="flex items-center">
        {menuArray?.map((menu) => (
          <li className="group pl-6" key={menu.id}>
            <span
              onClick={() => scrollIntoView(menu.id)}
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >
              {menu.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
