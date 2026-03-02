import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/chat");
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-display text-2xl font-bold text-foreground">Aidera</span>
          </Link>
        </div>
        <div className="bg-card rounded-2xl shadow-card border border-border p-8">
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">Create your account</h1>
          <p className="text-sm text-muted-foreground mb-6">Start your health journey with Aidera.</p>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            </div>
            <Button className="w-full" size="lg" type="submit">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
