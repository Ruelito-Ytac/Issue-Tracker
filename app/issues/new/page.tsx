import dynamic from "next/dynamic";

const IssueForm = dynamic(
    () => import("@/app/issues/_components/IssueForm"),
    { 
        ssr: false,
        loading: () => <p>Loading...</p>
    }
);

const NewIssuePAge = () => {
    return (
        <IssueForm />
    )
}

export default NewIssuePAge