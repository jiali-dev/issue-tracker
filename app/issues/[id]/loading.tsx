import { Box, Card, Flex } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";

const IssueDetailsLoading = () => {
  return (
    <Box className="max-w-xl">
      <Flex direction="column" gap="2">
        <Skeleton />
        <Flex gap="3" my="2">
          <Skeleton width="5rem" />
          <Skeleton width="8rem" />
        </Flex>
        <Card className="prose">
          <Skeleton count={3} />
        </Card>
      </Flex>
    </Box>
  );
};

export default IssueDetailsLoading;
