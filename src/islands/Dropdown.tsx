import { useSignal } from "@preact/signals";

interface DropdownProps {
  links: Array<LinkType>;
}

export default function Dropdown({ links }: DropdownProps) {
  const updatedIsDropdownOpen = links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useSignal<boolean[]>(
    updatedIsDropdownOpen as boolean[],
  );

  const [isToggleMenuOpen, setIsToggleMenuOpen] = useSignal<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };
}
