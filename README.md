# hive-public

Compiled demo bundle of the [Hive](https://github.com/Torbhub/hive) control-plane UI. Mocked backend — every `/api/*` call is served from seed data baked into the bundle.

**Live demo:** https://torbhub.github.io/hive-public/

This repository contains **only compiled artifacts**. No source, no sourcemaps. Source lives in the private `Torbhub/hive` repository.

## What you see
- React 19 + Mantine + Tailwind dashboard
- Mocked workers, tasks, costs, alerts, duties, events
- Read-only — write actions return success but persist nothing

## Rebuild
```bash
# from Torbhub/hive
cd ui
VITE_MOCK_BACKEND=1 VITE_BASE_PATH=/hive-public/ npm run build
# copy dist/* to this repo, commit, push
```

## License
MIT — see `LICENSE`.
