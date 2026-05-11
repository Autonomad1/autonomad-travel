#!/usr/bin/env node
/**
 * Autonomad MCP Travel Server
 * =============================
 * Model Context Protocol server exposing Autonomad's travel-booking surface
 * (hotels, flights, transport, dining, trips, rewards) as structured tools.
 *
 * Default install is human-mode: the LLM acts as a concierge for a person
 * using Claude / ChatGPT. Set AUTONOMAD_AGENT_MODE=true to expose autonomous
 * agent tools (register_agent, DID-based booking) for unattended workloads.
 *
 * Configuration (env):
 *   - AUTONOMAD_API_URL      → API base. Defaults to https://api.autonomad.ai.
 *                              Falls back to legacy BOOKING_API_URL /
 *                              IDENTITY_API_URL / REWARD_API_URL if set.
 *   - AUTONOMAD_AGENT_MODE   → "true" exposes autonomous-agent tools. Off by default.
 */
export {};
//# sourceMappingURL=server.d.ts.map