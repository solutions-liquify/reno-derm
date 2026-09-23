---
name: information-verifier
description: Confirm exact factual website-information changes before applying them. Use when a user asks to add, replace, remove, or correct public facts such as phone numbers, addresses, email addresses, opening hours, names, credentials, prices, dates, social links, service details, ratings, or other specific business information on a website.
---

# Information Verifier

Prevent incorrect public information from being published by requiring an explicit verification step before any factual edit.

## Required confirmation gate

Treat the user's initial request as a proposed change, even when it is phrased as a direct instruction. Do not edit project files, a CMS, metadata, structured data, or any other website surface until the user separately confirms the exact proposed fact.

Read-only inspection is allowed and encouraged before confirmation. Find the canonical source and every relevant duplicate or derived representation so the user can review one complete change.

Before editing:

1. Identify the current value, the proposed value, and the affected fact.
2. Resolve ambiguity first. If the proposed value is incomplete or could refer to multiple entities, ask for the missing exact information before presenting the confirmation.
3. Show a compact confirmation preview with:
   - the field or fact being changed;
   - the current value, or `not currently present`;
   - the exact proposed value;
   - the website surfaces that must stay synchronized, such as visible content, contact links, metadata, JSON-LD, maps, or configuration.
4. Ask one direct question: **“Please confirm: should I apply this exact information update?”**
5. Stop and wait for an explicit affirmative response. Silence, an unrelated reply, or the initial request is not confirmation.

Confirmation authorizes only the previewed values and scope. If later inspection reveals a materially different value, entity, or destination, present a revised preview and confirm again.

## After confirmation

Apply the verified update everywhere it is represented or derived. Prefer the project's canonical data source over scattered component edits. Preserve formatting required by each use, such as a human-readable phone number alongside its `tel:` URI, or an address alongside local-business structured data.

Search for stale occurrences of the old value after editing. Run validation appropriate to the project and report the exact change and checks completed. Do not request a second confirmation when the work remains within the already confirmed preview.

## Scope boundary

Use this gate for public factual information and factual claims. Ordinary layout, styling, animation, refactoring, and other changes that do not alter facts do not require this skill's confirmation step. If one request mixes factual and non-factual work, complete safe preparatory work but wait for confirmation before applying the factual portion.
