import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
    return (
        <Box className="max-w-xl">
            <Skeleton height={ 30 } />
            <Skeleton height="20rem" className="mt-3" />
        </Box>
    )
}

export default LoadingNewIssuePage