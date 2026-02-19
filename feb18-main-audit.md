# Feb 18 Deep Audit: Current Main vs Codex Completion

Date reviewed: 2026-02-19
Repository branch available locally: `work`

## Important repository reality
There is no local `main` ref in this clone. To still complete the audit, we used the latest commit that clearly represents the integrated mainline state in history:

- **Inferred current main tip:** `7f65b8a` (`Merge pull request #17 ...`)
- **Final Feb 18 Codex completion tip:** `e222ee2` (`Remove duplicate Hero from city/service page ...`)

This lets us compare:
1) what was integrated in mainline by PR merge flow, and
2) the final same-day Codex completion commit.

## Audit method
1. Reconstruct Feb 18 work sequence in chronological order (execution order, not PR order).
2. Compare each Feb 18 Codex work commit against inferred main tip (`7f65b8a`) with `git merge-base --is-ancestor`.
3. Identify any missing commit(s) and turn them into concrete sync recommendations.

## Feb 18 Codex work sequence (chronological, non-merge commits)
1. `1859115` — Fix who-we-work-with image card overflow and overlap
2. `ef49a1d` — Create shared form styling pattern across contact and estimate forms
3. `52161a1` — Refactor service and money page templates into shared modules
4. `4a160be` — Trim city-service hero subtitles and preserve full intro copy
5. `24f2047` — Add conversion QA assertions for representative routes
6. `0084d78` — Add phased event tracking for forms, calls, and estimate CTAs
7. `4b179b9` — Make hero and CTA section primary CTAs configurable with free-estimate default
8. `6649a76` — Add reusable compact inline lead form to key landing pages
9. `f2ff28c` — Add single source of truth for route form rollout
10. `eb64c91` — Add reusable lead capture section component
11. `e6b68da` — Add inline lead capture sections to city and service templates
12. `541c8bb` — Add compact lead capture section to key overview pages
13. `6b96aae` — Fix LeadCaptureSection prop aliases for heading/description
14. `e222ee2` — Remove duplicate Hero from city/service page (template owns hero)

## Comparison results: inferred main (`7f65b8a`) vs final Feb 18 Codex work
- Included in inferred main: commits 1 through 13 above.
- Missing from inferred main: commit 14 (`e222ee2`).

## Exact gap identified
### Missing commit
- `e222ee2` modifies:
  - `src/pages/[city]/[service].astro`
- Purpose: remove duplicate Hero render so the template owns hero rendering consistently.

## Recommended changes to make main match final Feb 18 Codex output exactly
1. **Cherry-pick `e222ee2` onto `main`** (or apply equivalent patch).
2. Re-run route-level visual/functional QA for city/service pages to confirm no duplicate hero rendering.
3. If release process requires PR-only integration, open PR containing only this commit.

## Verification commands used
```bash
git log --all --pretty=format:'%H|%h|%ad|%an|%s' --date=iso-strict | head -n 80

git show --name-status --stat --oneline e222ee2

MAIN_TIP=7f65b8accad1741781d14af68155f4c48b51945a
for c in 1859115 ef49a1d 52161a1 4a160be 24f2047 0084d78 4b179b9 6649a76 f2ff28c eb64c91 e6b68da 541c8bb 6b96aae e222ee2; do
  if git merge-base --is-ancestor $c $MAIN_TIP; then s=IN; else s=OUT; fi
  echo "$s|$c|$(git show -s --format=%s $c)"
done
```

## Final outcome
To make current mainline match the **full final Feb 18 Codex completion set exactly**, include **one additional commit: `e222ee2`**.
