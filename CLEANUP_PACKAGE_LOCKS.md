# Package-Lock.json Cleanup Guide

## ❗ The Problem

You have **20+ redundant `package-lock.json` files** scattered throughout your learning projects, plus the one main file at the workspace root. This creates:

- **Version conflicts** between different lock files
- **Confusion** about which dependencies are actually being used  
- **Maintenance overhead** - multiple files to update
- **Inconsistent behavior** across projects

## ✅ The Solution

Keep **only the workspace-level `package-lock.json`** and remove all the redundant ones from subfolders.

## 🧹 Safe Cleanup Commands

### Option 1: Remove All At Once (Recommended)

```powershell
# Remove all package-lock.json files from practice folder (keeps the main one at root)
Get-ChildItem -Path "practice" -Recurse -File -Name "package-lock.json" | ForEach-Object { 
    Remove-Item -Path "practice\$_" -Force -ErrorAction SilentlyContinue
    Write-Host "Removed: practice\$_"
}
```

### Option 2: Remove One by One (Extra Safe)

```powershell
# List them first to see what will be removed
Get-ChildItem -Path "practice" -Recurse -File -Name "package-lock.json"

# Then remove specific ones you're comfortable with
Remove-Item -Path "practice\apps\learn-basics-and-passenger-counting-app\package-lock.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "practice\apps\learn-basics-build-a-chrome-extension\package-lock.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "practice\apps\learn-basics-the-black-jack-game\package-lock.json" -Force -ErrorAction SilentlyContinue
# ... and so on
```

### Option 3: Move to Backup First (Ultra Safe)

```powershell
# Create backup folder
New-Item -ItemType Directory -Path "backup-package-locks" -Force

# Move (don't delete) all package-lock.json files to backup
Get-ChildItem -Path "practice" -Recurse -File -Filter "package-lock.json" | ForEach-Object {
    $relativePath = $_.FullName.Replace((Get-Location).Path + "\practice\", "")
    $backupPath = "backup-package-locks\" + $relativePath.Replace("\", "_")
    Move-Item -Path $_.FullName -Destination $backupPath -Force
    Write-Host "Backed up: $relativePath"
}
```

## 🎯 What You Should Keep

**Keep These:**

- ✅ `package-lock.json` (at workspace root)
- ✅ Individual `package.json` files (contain project metadata)

**Remove These:**

- ❌ All `package-lock.json` files inside `practice/` folder
- ❌ All nested `package-lock.json` files in subprojects

## 🔍 Verify After Cleanup

```powershell
# Check that you only have the main package-lock.json
Get-ChildItem -Path "." -Filter "package-lock.json" -Depth 0

# Confirm no package-lock.json files remain in practice folder
Get-ChildItem -Path "practice" -Recurse -File -Name "package-lock.json"
```

The second command should return nothing if cleanup was successful.

## 💡 Why This Works

- **Single Source of Truth**: One lock file defines exact versions for all projects
- **Consistent Dependencies**: All projects use the same Vite version
- **Simplified Updates**: Update dependencies in one place
- **No Conflicts**: No competing lock files with different version requirements

## ⚠️ Before You Run

1. **Backup**: Make sure your code is committed to git
2. **Test**: After cleanup, run `npm run dev` to ensure everything works
3. **Reinstall if needed**: If something breaks, just run `npm install` from the root

Your workspace will be even cleaner and more maintainable! 🎉
