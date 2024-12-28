import { TrashIcon } from "@radix-ui/react-icons";
import { Button, AlertDialog, Flex, Text } from "@radix-ui/themes";
import React from "react";

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <TrashIcon />
          <Text>Delete Issue</Text>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure? This action cannot undo.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default IssueDeleteButton;
