import { workflows } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  paused: "bg-yellow-100 text-yellow-700",
  draft: "bg-muted text-muted-foreground",
};

const Workflows = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Workflows</h1>
          <p className="text-sm text-muted-foreground">Manage your automation workflows.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground p-4">Name</th>
              <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden sm:table-cell">Status</th>
              <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden md:table-cell">Runs</th>
              <th className="text-left text-xs font-medium text-muted-foreground p-4 hidden lg:table-cell">Last Run</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((wf) => (
              <tr key={wf.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                <td className="p-4 text-sm font-medium text-foreground">{wf.name}</td>
                <td className="p-4 hidden sm:table-cell">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[wf.status]}`}>
                    {wf.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">{wf.runs.toLocaleString()}</td>
                <td className="p-4 text-sm text-muted-foreground hidden lg:table-cell">{wf.lastRun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workflows;
