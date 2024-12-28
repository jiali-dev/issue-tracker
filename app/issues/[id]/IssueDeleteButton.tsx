import { TrashIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <TrashIcon />
      <Text>Edit Issue</Text>
    </Button>
  );
};

export default IssueDeleteButton;
