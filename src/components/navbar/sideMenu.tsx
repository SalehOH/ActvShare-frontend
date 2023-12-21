import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { FaBars } from "react-icons/fa6";

const sideMenu = () => {
  return (
  <Sheet>
    <SheetTrigger><FaBars /></SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default sideMenu 