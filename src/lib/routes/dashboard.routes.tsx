import CreditUsageIcon from "@/components/icons/credit-usage.icon";
import DatasetsIcon from "@/components/icons/datasets.icon";
import WorkflowsIcon from "@/components/icons/workflows.icon";

export const dashboardRoutes = [
  {
    key: 1,
    href: "/datasets",
    title: "Datasets",
    icon: <DatasetsIcon></DatasetsIcon>,
  },
  {
    key: 2,
    href: "/workflows",
    title: "Workflows",
    icon: <WorkflowsIcon></WorkflowsIcon>,
  },
  {
    key: 3,
    href: "/credit-usage",
    title: "Credit Usage",
    icon: <CreditUsageIcon></CreditUsageIcon>,
  },
];
