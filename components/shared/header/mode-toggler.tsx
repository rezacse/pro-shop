"use client";

import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@heroui/dropdown";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { AppDropdownItem } from "@/types/common";
import { SharedSelection } from "@heroui/react";
import { Button } from "@heroui/button";

const items: AppDropdownItem[] = [
  { value: "system", title: "System" },
  { value: "dark", title: "Dark" },
  { value: "light", title: "Light" },
];

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) return null;

  const onThemeSelect = (keys: SharedSelection): void => {
    setTheme(keys.currentKey!);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly>
          {theme === "system" && <SunMoon />}
          {theme === "light" && <Moon />}
          {theme === "dark" && <Sun />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Theme"
        items={items}
        disallowEmptySelection
        selectedKeys={[theme]}
        selectionMode="single"
        variant="flat"
        onSelectionChange={onThemeSelect}
      >
        {(item) => <DropdownItem key={item.value}>{item.title}</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeToggler;
