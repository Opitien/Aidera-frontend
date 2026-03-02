import { forms } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Eye } from "lucide-react";

const Forms = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Forms</h1>
          <p className="text-sm text-muted-foreground">Manage your AI-powered forms.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Form
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {forms.map((form) => (
          <div key={form.id} className="bg-card rounded-2xl border border-border p-5 hover:shadow-card transition-shadow">
            <h3 className="font-display font-semibold text-foreground mb-1">{form.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{form.submissions} submissions</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Last: {form.lastSubmission}</span>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-1" />
                Preview
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;
