#!/usr/bin/env bash
# Cria labels de fase no GitHub (spec 17). Requer: gh auth login
set -euo pipefail

create_label() {
  local name="$1"
  local color="$2"
  local description="$3"
  gh label create "$name" --color "$color" --description "$description" --force
}

create_label "phase:v1" "6b7280" "Release phase V1 — identidade HTML"
create_label "phase:v2" "4b5563" "Release phase V2 — 2.5D parallax"
create_label "phase:v3" "374151" "Release phase V3 — híbrido 3D"
create_label "phase:v4" "1f2937" "Release phase V4 — narrativa"

echo "Labels phase:v1–v4 criadas ou atualizadas."
