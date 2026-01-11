"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div >
      <Button onClick={() => setIsClicked(true)}>Click Me</Button>
      <Dialog open={isClicked} onOpenChange={setIsClicked}>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog.
          </DialogDescription>
          {/* <Dialog.Close asChild> */}
            <Button variant="outline" onClick={() => setIsClicked(false)}>Close</Button>
          {/* </Dialog.Close> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
