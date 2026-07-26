# Claude Certified Architect – Foundations Resources

## Knowledge

- [Official Exam Guide (PDF, saved locally)](./reference/official-exam-guide.pdf) — Anthropic, v0.1
  The primary source of truth. Contains the 5 domains with exact weightings, every task statement with "knowledge of" / "skills in" breakdowns, 6 exam scenarios, 12 annotated sample questions, 4 hands-on prep exercises, and explicit in-scope/out-of-scope topic lists. Every lesson in this workspace should trace back to a task statement in this guide. Use for: deciding what to teach next, checking a lesson's claims against the authoritative source.
- [Claude Agent SDK — Overview](https://docs.claude.com/en/api/agent-sdk/overview)
  Official docs for the SDK that powers Claude Code. Use for: Domain 1 (agentic loops, hooks, subagent spawning via Task, `allowedTools`).
- [Claude Agent SDK — Python reference](https://docs.claude.com/en/api/agent-sdk/python)
  Full API reference. Use for: exact signatures when practicing Exercise 1/4 from the exam guide.
- [Connect to external tools with MCP — Claude API Docs](https://platform.claude.com/docs/en/agent-sdk/mcp)
  Anthropic's own MCP integration guide (Agent SDK side). Use for: Domain 2 (tool/resource design, server scoping, `.mcp.json`).
- [Model Context Protocol — official spec & docs](https://modelcontextprotocol.io/docs/getting-started/intro)
  The protocol itself, docs.claude.com's Agent-SDK-specific MCP page is the shortcut, this is the ground truth for `isError`, tool/resource semantics. Use for: Domain 2 deep dives when the exam guide's summary isn't enough.
- [Extend Claude Code — Claude Code Docs](https://code.claude.com/docs/en/features-overview)
  Official reference for CLAUDE.md hierarchy, `.claude/commands/`, `.claude/skills/`, `.claude/rules/`, hooks, plan mode. Use for: Domain 3, almost every task statement.
- ["Steering Claude Code" — Anthropic blog](https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)
  Official explainer on when to reach for CLAUDE.md vs. skills vs. hooks vs. subagents — this exact decision is tested repeatedly (see sample Q6 in the exam guide). Use for: Domain 3 task statement 3.1–3.3.
- [Claude API docs — platform.claude.com](https://platform.claude.com/docs)
  Official Messages API reference. Use for: Domain 4 (`tool_use`, `tool_choice`, JSON schemas, Message Batches API) and Domain 1 (`stop_reason` semantics).
- [freeCodeCamp: "Claude Certified Architect – Foundations" prep video (Andrew Brown)](https://www.freecodecamp.org/news/claude-certified-architect-foundations-prep-for-anthropic-s-new-certification-exam/)
  ~13-hour hands-on YouTube course, practical-implementation-first. Good for watching a domain worked through end-to-end before/after a lesson here. Use for: seeing the Exercises from the official guide actually built.

### Lower-trust / use with caution
A cluster of SEO-style prep sites (claudecertificationguide.com, claudearchitectcertification.com, claudecertifiedarchitects.com, tutorialsdojo.com, certsafari.com, anthropiccertifications.com) sprang up around this new certification and surfaced specific-sounding claims (question counts, scenario pools, pass marks) in web search. Cross-checked against the **official exam guide PDF** above: the domain weights, 60-question/120-minute/720-pass-mark, and 4-of-6-scenario details these sites reported turned out to be accurate — but treat any *new* claim from this cluster as unverified until it's checked against the official guide. Don't rely on their practice questions as calibration for real difficulty; use the official guide's 12 sample questions for that instead.
- [Community GitHub: paullarionov/claude-certified-architect](https://github.com/paullarionov/claude-certified-architect) — community study guide + Anki decks, currently gated to Anthropic Partner Network members. Worth checking periodically in case it opens up.

## Wisdom (Communities)

- **Gap — no dedicated CCA-F community found yet.** The certification is brand new (guide dated Feb 2025, general availability still rolling out), so no established high-signal forum/subreddit exists yet specifically for it.
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/) — general Claude developer community; search/post about Agent SDK, MCP, Claude Code specifics. Moderate signal — filter for posts from people building production systems, not prompt-tinkering posts.
- [Anthropic Discord](https://www.anthropic.com/discord) — official developer Discord, has channels for Claude Code, Agent SDK, and MCP with some Anthropic staff presence. Best bet for "does this exam-guide behavior actually work like the docs say" questions.
- Revisit this section once the exam has been live longer — a dedicated study-group community will likely emerge (Discord/Slack) as more candidates sit it.
