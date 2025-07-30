#!/bin/bash

# Move to Production Script
# This script merges dev branch to main and syncs both branches

echo "🚀 Starting move to production..."
echo ""

# Function to check if git command succeeded
check_git_status() {
    if [ $? -ne 0 ]; then
        echo "❌ Error: $1 failed"
        exit 1
    fi
}

# Get current branch to return to it later
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Step 1: Checkout main
echo "1️⃣  Switching to main branch..."
git checkout main
check_git_status "git checkout main"

# Step 2: Pull latest main
echo "2️⃣  Pulling latest changes from origin/main..."
git pull origin main
check_git_status "git pull origin main"

# Step 3: Merge dev into main
echo "3️⃣  Merging dev branch into main..."
git merge dev
check_git_status "git merge dev"

# Step 4: Push main to origin
echo "4️⃣  Pushing main to origin..."
git push origin main
check_git_status "git push origin main"

# Step 5: Switch back to dev
echo "5️⃣  Switching back to dev branch..."
git checkout dev
check_git_status "git checkout dev"

# Step 6: Pull latest dev
echo "6️⃣  Pulling latest changes from origin/dev..."
git pull origin dev
check_git_status "git pull origin dev"

# Step 7: Merge main back into dev to keep in sync
echo "7️⃣  Merging main back into dev to keep branches in sync..."
git merge main
check_git_status "git merge main"

echo ""
echo "✅ Move to production completed successfully!"
echo ""
echo "📋 Summary:"
echo "  • dev → main merge completed"
echo "  • main pushed to production"
echo "  • dev updated with main changes"
echo "  • Currently on dev branch"
echo ""
echo "🌐 Your changes should now be live in production!"