import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  // TODO Check subscription

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const catogories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={catogories} />;
};

export default CompanionIdPage;
