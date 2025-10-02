#!/bin/bash

# Move to Production Script
# This script merges dev branch to main and syncs both branches

echo "🚀 Starting move to production..."
echo ""

# Version and date update
CONFIG_FILE="config/_default/config.toml"
CURRENT_VERSION=$(grep -E '^\s*version = ' "$CONFIG_FILE" | sed -E 's/.*version = "(.*)"/\1/')

echo "📝 The current version of your site is set to $CURRENT_VERSION"
echo "   Feel free to type in a new version or leave it as is (press Enter to skip):"
read -r NEW_VERSION

# Update version if user provided a new one
if [ -n "$NEW_VERSION" ] && [ "$NEW_VERSION" != "$CURRENT_VERSION" ]; then
    echo "   Updating version to $NEW_VERSION..."
    sed -i '' "s/version = \"$CURRENT_VERSION\"/version = \"$NEW_VERSION\"/" "$CONFIG_FILE"
fi

# Always update last_updated to today's date
TODAY=$(date +%Y-%m-%d)
echo "   Updating last_updated to $TODAY..."
sed -i '' "s/last_updated = \".*\"/last_updated = \"$TODAY\"/" "$CONFIG_FILE"

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

# Commit config changes if any were made
if [ -n "$NEW_VERSION" ] && [ "$NEW_VERSION" != "$CURRENT_VERSION" ]; then
    echo "   Committing config updates..."
    git add "$CONFIG_FILE"
    git commit -m "Update version to $NEW_VERSION and last_updated to $TODAY"
    check_git_status "git commit config updates"
else
    echo "   Committing last_updated change..."
    git add "$CONFIG_FILE"
    git commit -m "Update last_updated to $TODAY"
    check_git_status "git commit config updates"
fi

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