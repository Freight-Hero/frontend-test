import { Dialog, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { PlusIcon } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';



export const LoadActionDialog: FC = () => {
  return (
    <Dialog>
  <DialogTrigger>
    <Button variant="cta">
      <PlusIcon />
      Add Load
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  );
};