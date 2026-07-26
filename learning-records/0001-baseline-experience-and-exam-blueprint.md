# Baseline: prior experience and exam blueprint established

Tine disclosed "some" Anthropic-tooling experience: has used Claude/Claude Code as a dev tool and called an LLM API a couple of times, but has never built an agent, written an MCP tool, or done deliberate prompt engineering. Combined with 14+ years of general Java/TypeScript engineering, this means lessons can skip general programming/API-client fundamentals (auth, JSON basics, control flow) entirely and start directly at Claude-specific mechanics — the agentic loop, `stop_reason`, hooks, tool description design. Zone of proximal development for week 1 starts at [[MISSION]] Domain 1 task statement 1.1 (the agentic loop), not at "what is an LLM API call."

Also established this session: the full official exam blueprint (5 domains, weights, task statements, 6 scenarios, sample questions) via the [official exam guide PDF](../reference/official-exam-guide.pdf), which is now the spine for all future lesson planning — see [[RESOURCES]] and `reference/exam-blueprint.html`.

## Evidence
Direct disclosure via AskUserQuestion at session start (2026-07-26): "Some" prior exposure selected over "Little to none" and "Substantial."

## Implications
- Do not spend lesson time re-explaining what an API or JSON schema is — go straight to Claude-specific application (e.g. `tool_use` + schemas, not "what is JSON").
- Do check understanding of Claude-specific vocabulary before assuming it — "some" experience means gaps could be anywhere in the SDK/MCP/Claude Code surface, not evenly distributed.
