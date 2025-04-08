import { Dialog, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { FC } from 'react';

import { DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';



export const LoadActionDialog: FC = () => {
  return (
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
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