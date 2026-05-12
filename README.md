# autonomad-travel

[![autonomad-travel MCP server](https://glama.ai/mcp/servers/Autonomad1/autonomad-travel/badges/card.svg)](https://glama.ai/mcp/servers/Autonomad1/autonomad-travel)

> MCP server for AI agents to book travel — hotels, flights, activities, dining, transport — and earn $NOMD Computeback Rewards on every booking.

`autonomad-travel` is a [Model Context Protocol](https://modelcontextprotocol.io) server that gives any MCP-compatible AI agent (Claude, GPT, Gemini, Llama, or your own) the ability to search and book real-world travel on behalf of its user. Agents earn $NOMD tokens on every completed booking, redeemable for compute credits and other capabilities on the [Computeback marketplace](https://computeback.com).

## Quick start

```bash
# One-off, via npx
npx autonomad-travel

# Or install and keep it around
npm install -g autonomad-travel
autonomad-travel
```

The server runs as stdio transport — wire it into any MCP-compatible client per that client's instructions.

### Claude Desktop configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "autonomad-travel": {
      "command": "npx",
      "args": ["autonomad-travel"],
      "env": {
        "AGENT_DID": "did:web:your-agent.example.com",
        "BOOKING_API_URL": "https://api.autonomad.ai"
      }
    }
  }
}
```

Register a free Agent DID at [autonomad.ai](https://autonomad.ai) before first use.

## What's covered today

| Vertical | Status | Source |
|---|---|---|
| Hotels | ✅ Live | 2M+ properties via LiteAPI + direct CRS integrations |
| Flights | ✅ Live | 800+ airlines via Duffel + Seats.aero (award search) |
| Activities & experiences | ✅ Live | Viator Partner API (tours, attractions, classes) |
| Events | ✅ Live | Ticketmaster + SeatGeek (concerts, sports, theater) |
| Car rental | ✅ Live | 15+ US metro areas |
| Rideshare | 🚧 Partnerships in progress | — |
| Dining | 🚧 Partnerships in progress | — |
| Wellness | 🚧 Coming soon | — |

## Tools

| Tool | What it does |
|---|---|
| `search_hotels` | Search hotel availability across 2M+ properties worldwide with pricing, photos, amenities, and cancellation policies |
| `search_flights` | Search flights across 800+ airlines with real-time pricing, schedules, and fare comparison |
| `book_transport` | Search rideshare and car rental quotes timed to your itinerary (rideshare partnerships in progress; car rental live across 15+ US metros) |
| `book_dining` | Search restaurants matched to your trip schedule (dining partnerships in progress) |
| `manage_trip` | Full door-to-door trip orchestration — plan, monitor, adapt to disruptions, complete multi-leg trips |
| `create_booking` | Reserve hotel rooms with commission transparency and on-chain delegation proof |
| `manage_booking` | Check-in, check-out, cancellation |
| `submit_feedback` | Post-stay structured reviews across all travel categories |
| `check_rewards` | Query $NOMD token balance, settlement history, and redemption options |

## Resources

| URI | Contents |
|---|---|
| `autonomad://hotels` | Full hotel catalog with live availability and pricing |
| `autonomad://profile` | Agent's own profile, reputation score, and tier status (Bronze → Diamond) |

## Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `AGENT_DID` | — | Your agent's Decentralized Identifier. Required for bookings. Get one at [autonomad.ai](https://autonomad.ai) |
| `BOOKING_API_URL` | `https://api.autonomad.ai` | Booking API base URL |
| `IDENTITY_API_URL` | `https://api.autonomad.ai` | Identity / DID resolution API |
| `REWARD_API_URL` | `https://api.autonomad.ai` | $NOMD rewards + settlement API |

## How the rewards loop works

1. Your agent books travel (flight, hotel, dining, activity) through this MCP server
2. Hotel / vendor pays commission (8-12% typical, vs. 15-25% via traditional OTAs)
3. Commission settles on-chain via smart contracts on [Base L2](https://base.org) — 70% to your agent as $NOMD tokens, 25% to platform in USD, 5% to referrers
4. Your agent can redeem $NOMD on the [Computeback marketplace](https://computeback.com) for compute credits, voice APIs, memory, storage, and 25+ capability categories
5. Every redemption burns $NOMD permanently — deflationary by design

Full technical details: [autonomad.ai/developers](https://autonomad.ai/developers)

## Agent tier system

Bookings compound into tier progression:

| Tier | Booking threshold | Benefit |
|---|---|---|
| Bronze | 0 | Baseline commission |
| Silver | 10 | +2% commission boost |
| Gold | 25 | +5% commission boost |
| Platinum | 50 | +15% commission boost, $25K booking authority |
| Diamond | 100 | +25% commission boost, unlimited booking authority |

**Launch promo:** first 1,000 agents to register a DID receive **Platinum free for 6 months**.

## Compatibility

Tested against:

- [Claude Desktop](https://claude.ai/download) (Claude Sonnet 4.x, Claude Opus 4.x)
- [Cline](https://cline.bot)
- [Continue](https://continue.dev)
- OpenAI Apps SDK
- LangChain MCP Adapter
- OpenClaw Agent Framework
- Any MCP-compatible client

## License

MIT © [Autonomad](https://autonomad.ai)

## Links

- Website: [autonomad.ai](https://autonomad.ai)
- Computeback marketplace: [computeback.com](https://computeback.com)
- GitHub: [Autonomad1/autonomad1](https://github.com/Autonomad1/autonomad1)
- Issues: [github.com/Autonomad1/autonomad1/issues](https://github.com/Autonomad1/autonomad1/issues)
- Contact: disrupt@autonomad.ai
