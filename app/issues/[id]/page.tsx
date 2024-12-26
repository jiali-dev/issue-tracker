import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}
const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Flex direction="column" gap="2">
        <Heading as="h2">{issue.title}</Heading>
        <Flex gap="3" my="2">
          <Text>{issue.description}</Text>
          <IssueStatusBadge status={issue.status} />
        </Flex>
        <Card>{issue.createdAt.toDateString()}</Card>
      </Flex>
    </div>
  );
};

export default IssueDetailsPage;
