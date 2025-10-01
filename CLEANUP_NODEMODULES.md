# Clean Up Node Modules Script

This script will remove all the redundant `node_modules` folders from your JavaScript learning projects.

## PowerShell Commands

Run these commands in PowerShell from your project root directory:

```powershell
# Navigate to your project root
cd "C:\Projects\learn-javascript-scrimba\js-course-scrima"

# Remove all node_modules folders recursively (be careful!)
Get-ChildItem -Path "practice" -Recurse -Directory -Name "node_modules" | ForEach-Object { Remove-Item -Path "practice\$_" -Recurse -Force }

# Alternative: Remove specific node_modules folders one by one (safer)
# You can run these one by one to be more careful:

Remove-Item -Path "practice\apps\learn-basics-and-passenger-counting-app\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "practice\apps\learn-basics-build-a-chrome-extension\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "practice\apps\learn-basics-the-black-jack-game\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "practice\apps\learning-local-dev\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "practice\exams\solo-project-basketball-scoreboard\node_modules" -Recurse -Force -ErrorAction SilentlyContinue

# Remove nested node_modules in quizzes and subdirectories
Get-ChildItem -Path "practice\apps\learn-basics-build-a-chrome-extension\quizzes" -Recurse -Directory -Name "node_modules" | ForEach-Object { 
    Remove-Item -Path "practice\apps\learn-basics-build-a-chrome-extension\quizzes\$_" -Recurse -Force -ErrorAction SilentlyContinue
}

Get-ChildItem -Path "practice\apps\learn-basics-the-black-jack-game" -Recurse -Directory -Name "node_modules" | ForEach-Object { 
    Remove-Item -Path "practice\apps\learn-basics-the-black-jack-game\$_" -Recurse -Force -ErrorAction SilentlyContinue
}

Get-ChildItem -Path "practice\exams\5-basic-funcation-quizzes-from-chatgpt" -Recurse -Directory -Name "node_modules" | ForEach-Object { 
    Remove-Item -Path "practice\exams\5-basic-funcation-quizzes-from-chatgpt\$_" -Recurse -Force -ErrorAction SilentlyContinue
}
```

## Before You Run This

1. **Backup Important Work**: Make sure all your code changes are committed to git
2. **Test First**: Try removing just one node_modules folder to make sure everything still works
3. **Keep Individual package.json Files**: Don't delete the package.json files in each project - they contain project metadata

## What This Achieves

- **Saves Disk Space**: Each node_modules folder can be 200-500MB
- **Simplifies Development**: One place to manage dependencies
- **Faster Setup**: New developers only need to run `npm install` once
- **Easier Maintenance**: Updates and security patches in one place

## How to Use Your Projects After Cleanup

From the root directory, you can:

- Start any project: `npm start` (serves the main index.html)
- Run development server: `npm run dev`
- Build projects: `npm run build`

The projects will still work exactly the same way because they all use the same dependency (Vite) which is now installed at the workspace level.
