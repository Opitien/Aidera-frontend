import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account and preferences.</p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
        <h3 className="font-display font-semibold text-foreground">Profile</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="settings-email">Email</Label>
            <Input id="settings-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
        <h3 className="font-display font-semibold text-foreground">Preferences</h3>
        <div className="space-y-4">
          {[
            { label: "Email notifications", desc: "Receive workflow status updates via email", default: true },
            { label: "Weekly reports", desc: "Get a weekly summary of your AI operations", default: true },
            { label: "Beta features", desc: "Try new features before they're released", default: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <Switch defaultChecked={item.default} />
            </div>
          ))}
        </div>
      </div>

      <Button>Save Changes</Button>
    </div>
  );
};

export default SettingsPage;
