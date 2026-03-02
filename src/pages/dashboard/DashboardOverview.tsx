import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { dashboardStats, recentActivity, chartData } from "@/data/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Overview</h1>
        <p className="text-sm text-muted-foreground">Welcome back, here's what's happening.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl border border-border p-5"
          >
            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
            <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center gap-1 mt-1 text-xs text-primary">
              <TrendingUp className="h-3 w-3" />
              {stat.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4">AI Operations (Last 7 Days)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorOps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(235, 70%, 50%)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(235, 70%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
              <Tooltip />
              <Area type="monotone" dataKey="operations" stroke="hsl(235, 70%, 50%)" fill="url(#colorOps)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-display font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  item.status === "success" ? "bg-green-500" :
                  item.status === "warning" ? "bg-yellow-500" : "bg-primary"
                }`} />
                <div>
                  <div className="text-sm font-medium text-foreground">{item.action}</div>
                  <div className="text-xs text-muted-foreground">{item.detail}</div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
