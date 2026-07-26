# Notes

## Study logistics
- Time budget: 5–7 hrs/week, evenings + weekend. ~4 weeks total (started 2026-07-26).
- Wants score ≥ 92% (920/1000 scaled), not just a pass (720/1000) — teach for depth, not just "good enough."
- Wants a community resource surfaced (see RESOURCES.md Wisdom section) — no dedicated CCA-F community exists yet since the cert is new; r/ClaudeAI and Anthropic Discord are the fallback.

## Study plan (domain-weighted, ~4 weeks)

Allocation roughly follows exam weighting so time-on-task matches point-value. Each week ends with retrieval practice on that week's material (spaced repetition of prior weeks builds in from week 2 onward).

- **Week 1 — Domain 1: Agentic Architecture & Orchestration (27%, heaviest domain)**
  Agentic loop mechanics (`stop_reason`), coordinator/subagent patterns, Task tool + `allowedTools`, hooks (PostToolUse, tool interception), task decomposition, session management (`--resume`, `fork_session`).
- **Week 2 — Domain 3 + Domain 2: Claude Code Configuration (20%) + Tool Design & MCP (18%)**
  CLAUDE.md hierarchy, `.claude/rules/`, skills, plan mode vs. direct execution, CI/CD integration; tool description design, structured MCP errors, tool distribution across agents, MCP server scoping.
- **Week 3 — Domain 4 + Domain 5: Prompt Engineering & Structured Output (20%) + Context Management & Reliability (15%)**
  Explicit criteria & few-shot prompting, `tool_use`/JSON schema enforcement, validation-retry loops, Message Batches API; context preservation, escalation patterns, error propagation, provenance/uncertainty handling.
- **Week 4 — Integration & exam readiness**
  Run all 6 official scenarios end-to-end, weak-spot review driven by learning records, timed practice questions, official guide's 4 hands-on exercises if not already done, final review of the reference cheat sheets.

Reference doc: [reference/study-plan.html](./reference/study-plan.html) has this as a printable checklist.

## Teaching preferences observed
- (none stated yet beyond the above — update as sessions happen)
