import { IssueStatusBadge } from "@/app/components";
import { Card, Flex, Heading } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import { Text } from "@radix-ui/themes";
import { Issue } from "@prisma/client";

const IssueDetails = ({ issue }: { issue: Issue }) => {
    return (
        <>
            <Heading>{ issue.title }</Heading>
            <Flex className="space-x-3" my="2">
                <IssueStatusBadge status={ issue.status } />
                <Text>{ issue.createdAt.toDateString() }</Text>
            </Flex>
            <Card className="prose" mt="4">
                <ReactMarkdown>{ issue.description }</ReactMarkdown>
            </Card>
        </>
    )
}

export default IssueDetails