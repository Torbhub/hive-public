function generateSeedWorkers() {
  const now = Date.now();
  return [
    {
      id: "w-brave-ram",
      designation: "Alpha-1",
      role: "worker",
      status: "running",
      session_id: "ses-001",
      engine: "claude",
      pid: 41200,
      mode: "persistent",
      tmux_session: "brave-ram",
      worktree_path: "/worktrees/brave-ram",
      claude_md: null,
      config: null,
      created_at: new Date(now - 6 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 2 * 60 * 1e3).toISOString(),
      last_heartbeat: new Date(now - 30 * 1e3).toISOString(),
      error: null,
      hidden: false,
      spawn_reason: null,
      task_id: null,
      tokens_used: null,
      cost_usd: null,
      tasks_done: null
    },
    {
      id: "w-fair-hawk",
      designation: "Beta-1",
      role: "worker",
      status: "idle",
      session_id: "ses-002",
      engine: "gemini",
      pid: 41310,
      mode: "persistent",
      tmux_session: "fair-hawk",
      worktree_path: "/worktrees/fair-hawk",
      claude_md: null,
      config: null,
      created_at: new Date(now - 3 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 15 * 60 * 1e3).toISOString(),
      last_heartbeat: new Date(now - 5 * 60 * 1e3).toISOString(),
      error: null,
      hidden: false,
      spawn_reason: null,
      task_id: null,
      tokens_used: null,
      cost_usd: null,
      tasks_done: null
    },
    {
      id: "w-calm-deer",
      designation: "Gamma-1",
      role: "worker",
      status: "running",
      session_id: "ses-003",
      engine: "claude",
      pid: 41450,
      mode: "disposable",
      tmux_session: "calm-deer",
      worktree_path: "/worktrees/calm-deer",
      claude_md: null,
      config: null,
      created_at: new Date(now - 45 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 1 * 60 * 1e3).toISOString(),
      last_heartbeat: new Date(now - 15 * 1e3).toISOString(),
      error: null,
      hidden: false,
      spawn_reason: null,
      task_id: null,
      tokens_used: null,
      cost_usd: null,
      tasks_done: null
    },
    {
      id: "w-bold-fox",
      designation: "Delta-1",
      role: "worker",
      status: "stuck",
      session_id: "ses-004",
      engine: "claude",
      pid: 41580,
      mode: "persistent",
      tmux_session: "bold-fox",
      worktree_path: "/worktrees/bold-fox",
      claude_md: null,
      config: null,
      created_at: new Date(now - 2 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 10 * 60 * 1e3).toISOString(),
      last_heartbeat: new Date(now - 4 * 60 * 1e3).toISOString(),
      error: "Heartbeat timeout: no response for 240s",
      hidden: false,
      spawn_reason: null,
      task_id: null,
      tokens_used: null,
      cost_usd: null,
      tasks_done: null
    },
    {
      id: "w-keen-owl",
      designation: "Epsilon-1",
      role: "worker",
      status: "completed",
      session_id: "ses-005",
      engine: "gemini",
      pid: null,
      mode: "disposable",
      tmux_session: null,
      worktree_path: null,
      claude_md: null,
      config: null,
      created_at: new Date(now - 5 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 1 * 60 * 60 * 1e3).toISOString(),
      last_heartbeat: new Date(now - 1 * 60 * 60 * 1e3).toISOString(),
      error: null,
      hidden: false,
      spawn_reason: null,
      task_id: null,
      tokens_used: null,
      cost_usd: null,
      tasks_done: null
    }
  ];
}
function generateSeedTasks() {
  const now = Date.now();
  return [
    {
      id: "task-001",
      worker_id: "w-brave-ram",
      type: "implement",
      payload: { description: "Add JWT refresh token rotation" },
      status: "running",
      priority: 2,
      created_at: new Date(now - 30 * 60 * 1e3).toISOString(),
      started_at: new Date(now - 25 * 60 * 1e3).toISOString(),
      completed_at: null,
      timeout_s: 600,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-002",
      worker_id: "w-calm-deer",
      type: "test",
      payload: { description: "Run integration tests for auth module" },
      status: "running",
      priority: 1,
      created_at: new Date(now - 20 * 60 * 1e3).toISOString(),
      started_at: new Date(now - 18 * 60 * 1e3).toISOString(),
      completed_at: null,
      timeout_s: 300,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-003",
      worker_id: null,
      type: "implement",
      payload: { description: "Migrate dashboard to Mantine v8" },
      status: "queued",
      priority: 3,
      created_at: new Date(now - 15 * 60 * 1e3).toISOString(),
      started_at: null,
      completed_at: null,
      timeout_s: 900,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-004",
      worker_id: "w-bold-fox",
      type: "fix",
      payload: { description: "Fix SSE reconnection on WebSocket drop" },
      status: "assigned",
      priority: 2,
      created_at: new Date(now - 10 * 60 * 1e3).toISOString(),
      started_at: null,
      completed_at: null,
      timeout_s: 600,
      retry_count: 1,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-005",
      worker_id: "w-brave-ram",
      type: "implement",
      payload: { description: "Implement cost tracking per session" },
      status: "done",
      priority: 1,
      created_at: new Date(now - 4 * 60 * 60 * 1e3).toISOString(),
      started_at: new Date(now - 3.5 * 60 * 60 * 1e3).toISOString(),
      completed_at: new Date(now - 2 * 60 * 60 * 1e3).toISOString(),
      timeout_s: 600,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-006",
      worker_id: "w-fair-hawk",
      type: "review",
      payload: { description: "Review PR #42: plugin framework" },
      status: "done",
      priority: 0,
      created_at: new Date(now - 5 * 60 * 60 * 1e3).toISOString(),
      started_at: new Date(now - 4.5 * 60 * 60 * 1e3).toISOString(),
      completed_at: new Date(now - 3 * 60 * 60 * 1e3).toISOString(),
      timeout_s: 300,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-007",
      worker_id: null,
      type: "fix",
      payload: { description: "Resolve flaky test in heartbeat module" },
      status: "queued",
      priority: 1,
      created_at: new Date(now - 8 * 60 * 1e3).toISOString(),
      started_at: null,
      completed_at: null,
      timeout_s: 300,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-008",
      worker_id: "w-keen-owl",
      type: "implement",
      payload: { description: "Add Telegram notification channel" },
      status: "failed",
      priority: 2,
      created_at: new Date(now - 6 * 60 * 60 * 1e3).toISOString(),
      started_at: new Date(now - 5.5 * 60 * 60 * 1e3).toISOString(),
      completed_at: new Date(now - 5 * 60 * 60 * 1e3).toISOString(),
      timeout_s: 600,
      retry_count: 3,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-009",
      worker_id: null,
      type: "research",
      payload: { description: "Investigate HaMeR daemon memory leak" },
      status: "queued",
      priority: 3,
      created_at: new Date(now - 2 * 60 * 1e3).toISOString(),
      started_at: null,
      completed_at: null,
      timeout_s: 900,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    },
    {
      id: "task-010",
      worker_id: "w-calm-deer",
      type: "test",
      payload: { description: "Validate worker lifecycle edge cases" },
      status: "done",
      priority: 1,
      created_at: new Date(now - 1 * 60 * 60 * 1e3).toISOString(),
      started_at: new Date(now - 50 * 60 * 1e3).toISOString(),
      completed_at: new Date(now - 40 * 60 * 1e3).toISOString(),
      timeout_s: 300,
      retry_count: 0,
      max_retries: 3,
      parent_task_id: null,
      lease_expires_at: null,
      isolation: null,
      base_ref: null,
      worktree_path: null,
      failure_reason: null,
      auto_merge: false,
      conflict_files: null,
      retry_after_at: null,
      target_role: null,
      target_engine: null,
      routing_reason: null,
      progress_pct: null
    }
  ];
}
function generateSeedEvents() {
  const now = Date.now();
  return [
    {
      id: 1,
      type: "WORKER_SPAWNED",
      worker_id: "w-brave-ram",
      payload: { engine: "claude", mode: "persistent" },
      created_at: new Date(now - 6 * 60 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 2,
      type: "TASK_ASSIGNED",
      worker_id: "w-brave-ram",
      payload: { task_id: "task-001" },
      created_at: new Date(now - 25 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 3,
      type: "WORKER_SPAWNED",
      worker_id: "w-fair-hawk",
      payload: { engine: "gemini", mode: "persistent" },
      created_at: new Date(now - 3 * 60 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 4,
      type: "TASK_COMPLETED",
      worker_id: "w-fair-hawk",
      payload: { task_id: "task-006", duration_ms: 54e5 },
      created_at: new Date(now - 3 * 60 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 5,
      type: "WORKER_STUCK",
      worker_id: "w-bold-fox",
      payload: { reason: "Heartbeat timeout: 240s silence" },
      created_at: new Date(now - 10 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 6,
      type: "TASK_COMPLETED",
      worker_id: "w-brave-ram",
      payload: { task_id: "task-005", duration_ms: 54e5 },
      created_at: new Date(now - 2 * 60 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 7,
      type: "ALERT_FIRED",
      worker_id: null,
      payload: { alert_id: "alert-003", severity: "warning", title: "High memory usage" },
      created_at: new Date(now - 45 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 8,
      type: "TASK_FAILED",
      worker_id: "w-keen-owl",
      payload: { task_id: "task-008", reason: "Max retries exceeded" },
      created_at: new Date(now - 5 * 60 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 9,
      type: "WORKER_SPAWNED",
      worker_id: "w-calm-deer",
      payload: { engine: "claude", mode: "disposable" },
      created_at: new Date(now - 45 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 10,
      type: "TASK_COMPLETED",
      worker_id: "w-calm-deer",
      payload: { task_id: "task-010", duration_ms: 6e5 },
      created_at: new Date(now - 40 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 11,
      type: "WORKER_COMPLETED",
      worker_id: "w-keen-owl",
      payload: { reason: "All tasks finished" },
      created_at: new Date(now - 1 * 60 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 12,
      type: "ALERT_FIRED",
      worker_id: null,
      payload: { alert_id: "alert-001", severity: "critical", title: "Worker crash detected" },
      created_at: new Date(now - 15 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 13,
      type: "TASK_ASSIGNED",
      worker_id: "w-calm-deer",
      payload: { task_id: "task-002" },
      created_at: new Date(now - 18 * 60 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 14,
      type: "HEARTBEAT",
      worker_id: "w-brave-ram",
      payload: { progress_pct: 72 },
      created_at: new Date(now - 30 * 1e3).toISOString(),
      consumed_by: null
    },
    {
      id: 15,
      type: "ALERT_FIRED",
      worker_id: null,
      payload: { alert_id: "alert-005", severity: "info", title: "Daily cost report generated" },
      created_at: new Date(now - 8 * 60 * 60 * 1e3).toISOString(),
      consumed_by: null
    }
  ];
}
function generateSeedDuties() {
  const now = Date.now();
  return [
    {
      id: "duty-sentinel",
      name: "Sentinel",
      duty_type: "sentinel",
      skill_path: "skills/sentinel.md",
      cron_interval_s: 300,
      worker_id: "w-brave-ram",
      status: "active",
      config: null,
      timeout_minutes: null,
      last_triggered_at: new Date(now - 3 * 60 * 1e3).toISOString(),
      created_at: new Date(now - 24 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 3 * 60 * 1e3).toISOString()
    },
    {
      id: "duty-scraper",
      name: "Web Scraper",
      duty_type: "scrape-page",
      skill_path: "templates/duties/scrape-page.md",
      cron_interval_s: 3600,
      worker_id: "w-fair-hawk",
      status: "active",
      config: null,
      timeout_minutes: null,
      last_triggered_at: new Date(now - 45 * 60 * 1e3).toISOString(),
      created_at: new Date(now - 3 * 24 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 45 * 60 * 1e3).toISOString()
    },
    {
      id: "duty-screenshot",
      name: "UI Screenshot",
      duty_type: "take-screenshot",
      skill_path: "templates/duties/take-screenshot.md",
      cron_interval_s: 1800,
      worker_id: null,
      status: "paused",
      config: null,
      timeout_minutes: null,
      last_triggered_at: new Date(now - 6 * 60 * 60 * 1e3).toISOString(),
      created_at: new Date(now - 7 * 24 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 6 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "duty-test-ui",
      name: "UI Test Runner",
      duty_type: "test-ui",
      skill_path: "templates/duties/test-ui.md",
      cron_interval_s: 7200,
      worker_id: "w-calm-deer",
      status: "active",
      config: null,
      timeout_minutes: null,
      last_triggered_at: new Date(now - 2 * 60 * 60 * 1e3).toISOString(),
      created_at: new Date(now - 5 * 24 * 60 * 60 * 1e3).toISOString(),
      updated_at: new Date(now - 2 * 60 * 60 * 1e3).toISOString()
    }
  ];
}
function generateSeedAlerts() {
  const now = Date.now();
  return [
    {
      alert_id: "alert-001",
      alert_type: "worker_crash",
      severity: "critical",
      title: "Worker crash detected",
      body: "A worker crashed after 240s heartbeat timeout. Last task: task-004.",
      source_worker_id: "w-bold-fox",
      source_task_id: "task-004",
      acknowledged: false,
      created_at: new Date(now - 15 * 60 * 1e3).toISOString()
    },
    {
      alert_id: "alert-002",
      alert_type: "task_failure",
      severity: "warning",
      title: "Task exceeded max retries",
      body: "Task task-008 (Telegram notification) failed 3 times. Marked as permanently failed.",
      source_worker_id: "w-keen-owl",
      source_task_id: "task-008",
      acknowledged: true,
      created_at: new Date(now - 5 * 60 * 60 * 1e3).toISOString()
    },
    {
      alert_id: "alert-003",
      alert_type: "resource",
      severity: "warning",
      title: "High memory usage",
      body: "System memory at 87%. Consider terminating idle workers.",
      source_worker_id: null,
      source_task_id: null,
      acknowledged: false,
      created_at: new Date(now - 45 * 60 * 1e3).toISOString()
    },
    {
      alert_id: "alert-004",
      alert_type: "cost",
      severity: "info",
      title: "Daily budget at 60%",
      body: "Cumulative API spend: $3.12 of $5.00 daily budget.",
      source_worker_id: null,
      source_task_id: null,
      acknowledged: false,
      created_at: new Date(now - 2 * 60 * 60 * 1e3).toISOString()
    },
    {
      alert_id: "alert-005",
      alert_type: "report",
      severity: "info",
      title: "Daily cost report generated",
      body: "Yesterday total: $4.23 across 8 workers. Top spender: Alpha-1 ($1.87).",
      source_worker_id: null,
      source_task_id: null,
      acknowledged: true,
      created_at: new Date(now - 8 * 60 * 60 * 1e3).toISOString()
    }
  ];
}
const json = (body, init = {}) => new Response(JSON.stringify(body), {
  headers: { "content-type": "application/json" },
  status: 200,
  ...init
});
const text = (body, init = {}) => new Response(body, { headers: { "content-type": "text/plain" }, status: 200, ...init });
const workers = () => generateSeedWorkers();
const tasks = () => generateSeedTasks();
const events = () => generateSeedEvents();
const duties = () => generateSeedDuties();
const alerts = () => generateSeedAlerts();
const routes = [
  // Session / health
  ["GET", /^\/api\/session$/, () => ({ session_id: "demo-session", role: "conductor", authenticated: true })],
  ["POST", /^\/api\/session$/, () => ({ session_id: "demo-session", role: "conductor" })],
  ["GET", /^\/api\/health$/, () => ({ status: "ok", uptime_s: 12345, worker_count: workers().length, task_count: tasks().length })],
  // Workers
  ["GET", /^\/api\/workers$/, () => workers()],
  ["GET", /^\/api\/workers\/[^/]+$/, ({ url }) => {
    const id = url.pathname.split("/").pop();
    const w = workers().find((w2) => w2.id === id);
    return w ?? { __status: 404 };
  }],
  ["GET", /^\/api\/workers\/[^/]+\/tasks$/, () => ({ tasks: tasks().slice(0, 5), limit: 50, offset: 0, count: 5 })],
  ["GET", /^\/api\/workers\/[^/]+\/messages$/, () => ({ messages: [], channel_id: null, count: 0 })],
  ["GET", /^\/api\/workers\/[^/]+\/output$/, () => text("demo worker output — backend mocked for github.io demo\n[1] task assigned\n[2] processing...\n[3] complete\n")],
  ["GET", /^\/api\/workers\/[^/]+\/steps$/, () => []],
  ["POST", /^\/api\/workers\/[^/]+\/[^/]+$/, () => ({ status: "ok" })],
  ["POST", /^\/api\/workers\/prune$/, () => ({ status: "ok", pruned: [], count: 0 })],
  // Tasks
  ["GET", /^\/api\/tasks$/, () => tasks()],
  ["GET", /^\/api\/tasks\/[^/]+$/, ({ url }) => {
    const id = url.pathname.split("/").pop();
    const t = tasks().find((t2) => t2.id === id);
    return t ?? { __status: 404 };
  }],
  ["POST", /^\/api\/tasks$/, () => ({ status: "ok", task_id: "demo-" + Math.random().toString(36).slice(2, 10) })],
  ["DELETE", /^\/api\/tasks\/[^/]+$/, () => ({ status: "ok" })],
  ["PATCH", /^\/api\/tasks\/[^/]+$/, () => ({ status: "ok" })],
  // Events / progress
  ["GET", /^\/api\/events$/, () => ({ events: events(), count: events().length })],
  ["GET", /^\/api\/progress$/, () => []],
  // Dashboard / costs
  ["GET", /^\/api\/dashboard\/stats$/, () => ({
    worker_count: workers().length,
    task_count: tasks().length,
    tasks_running: tasks().filter((t) => t.status === "running").length,
    tasks_queued: tasks().filter((t) => t.status === "queued").length,
    tasks_failed: tasks().filter((t) => t.status === "failed").length,
    total_cost_usd: 4.82,
    budget_limit_usd: 21,
    uptime_s: 12345
  })],
  ["GET", /^\/api\/cost\/daily$/, () => ({
    entries: Array.from({ length: 7 }, (_, i) => ({ date: `2026-05-${5 + i}`, total_usd: 2 + Math.random() * 3 }))
  })],
  ["GET", /^\/api\/cost\/hourly$/, () => ({
    entries: Array.from({ length: 24 }, (_, i) => ({ hour: i, total_usd: 0.05 + Math.random() * 0.4 }))
  })],
  ["GET", /^\/api\/costs$/, () => []],
  // Channels / messages
  ["GET", /^\/api\/channels$/, () => []],
  ["POST", /^\/api\/channels\/cleanup$/, () => ({ status: "ok", removed: 0 })],
  // Alerts / approvals
  ["GET", /^\/api\/alerts$/, () => alerts()],
  ["POST", /^\/api\/alerts\/dismiss-all$/, () => ({ status: "ok", dismissed: 0 })],
  ["GET", /^\/api\/approvals$/, () => []],
  ["POST", /^\/api\/approvals\/[^/]+\/[^/]+$/, () => ({ status: "ok" })],
  // Duties / plugins / evolution
  ["GET", /^\/api\/duties$/, () => duties()],
  ["GET", /^\/api\/plugins$/, () => [
    { name: "fleet", version: "0.2.0", status: "active", tool_count: 5 },
    { name: "experiments", version: "0.2.0", status: "active", tool_count: 3 }
  ]],
  ["GET", /^\/api\/evolution\/proposals$/, () => []],
  // Worktrees / logs / meta
  ["GET", /^\/api\/worktrees$/, () => []],
  ["GET", /^\/api\/logs$/, () => ({ entries: [] })],
  ["GET", /^\/api\/meta\/engines$/, () => ["claude", "gemini", "codex"]],
  ["GET", /^\/api\/meta\/roles$/, () => ["conductor", "worker", "duty", "readonly"]]
];
function sseStub() {
  return new Response(new ReadableStream({ start: (c) => c.close() }), {
    status: 200,
    headers: { "content-type": "text/event-stream", "cache-control": "no-cache" }
  });
}
function installFetchMock() {
  const origFetch = window.fetch.bind(window);
  window.fetch = (async (input, init) => {
    const rawUrl = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    const method = ((init == null ? void 0 : init.method) || (input instanceof Request ? input.method : "GET")).toUpperCase();
    let url;
    try {
      url = new URL(rawUrl, window.location.origin);
    } catch {
      return origFetch(input, init);
    }
    const path = url.pathname;
    if (!path.startsWith("/api/") && path !== "/events" && path !== "/api/events") {
      return origFetch(input, init);
    }
    if (path === "/events") return sseStub();
    for (const [m, re, handler] of routes) {
      if (m !== method) continue;
      if (!re.test(path)) continue;
      try {
        const body = await handler({ url, method, init });
        if (body && typeof body === "object" && "__status" in body) {
          return new Response(null, { status: body.__status });
        }
        if (body instanceof Response) return body;
        if (typeof body === "string") return text(body);
        return json(body);
      } catch (err) {
        console.error("[fetch-mock] handler error for", method, path, err);
        return new Response(String(err), { status: 500 });
      }
    }
    console.warn("[fetch-mock] no handler for", method, path);
    return json({ __unmocked: true });
  });
}
export {
  installFetchMock
};
