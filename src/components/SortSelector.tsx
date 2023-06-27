import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by
      </MenuButton>
      <MenuList>
        <MenuItem>Item List 1</MenuItem>
        <MenuItem>Item List 2</MenuItem>
        <MenuItem>Item List 3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
