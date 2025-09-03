import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// ---------------- PROFILE MENU ----------------
const profileMenuItems = [
  { label: "My Profile", icon: UserCircleIcon, path: "/my-profile" },
  { label: "Edit Profile", icon: Cog6ToothIcon, path: "/edit-profile" },
  { label: "Inbox", icon: InboxArrowDownIcon, path: "/inbox" },
  { label: "Help", icon: LifebuoyIcon, path: "/help" },
  { label: "Sign Out", icon: PowerIcon, path: "/logout" },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="rounded"
            size="md"
            alt="Ayyan"
            className="border border-gray-900 p-0.5"
            src="/avatar.png"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <Link to={path} key={label} onClick={closeMenu}>
              <MenuItem
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// ---------------- NAV ITEMS ----------------
const navListItems = [
  { label: "Home", icon: HomeIcon, path: "/" },
  { label: "About", icon: InformationCircleIcon, path: "/about" },
  { label: "Services", icon: CodeBracketSquareIcon, path: "/services" },
  { label: "Resume", icon: DocumentTextIcon, path: "/resume" },
  { label: "Contact", icon: PhoneIcon, path: "/contact" },
];

function NavList({ closeMobile }) {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }) => (
        <Typography
          key={label}
          as={Link}
          to={path}
          onClick={closeMobile} // ✅ Auto-close when clicked
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
            <span className="text-gray-900">{label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

// ---------------- NAVBAR ----------------
export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const closeMobile = () => setIsNavOpen(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        {/* Logo / Website Name */}
       <Typography
  as={Link}
  to="/"
  className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-lg flex items-center gap-2"
>
  {/* Logo Image */}
  <img
    src="/Ayyan (2).png"   // <-- replace with your logo path
    alt="Logo"
    className=" w-24 rounded-full"
  />

</Typography>
        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavList closeMobile={closeMobile} />
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/* Right Side */}
        <ProfileMenu />
      </div>

      {/* Mobile Nav */}
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList closeMobile={closeMobile} />
      </MobileNav>
    </Navbar>
  );
}
  