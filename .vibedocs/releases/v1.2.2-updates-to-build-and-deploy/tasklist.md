# Task List - Build and Deploy Architecture Refactor v1.2.2

## Phase 1: Create New Repositories (Marcelo)
**Estimated Time: 15 minutes**

### Task 1.1: Create Production Repository
- [x] **Who**: Marcelo
- [x] **Action**: Create new repository `bymarcelolewin/bml-website-prod`
- [x] **Settings**: Public repository
- [x] **Action**: Go to repository Settings → Pages
- [x] **Action**: Set source to "Deploy from a branch"
- [ ] **Action**: Select branch: `gh-pages` (will be created by first deployment)
- [ ] **Action**: Add custom domain: `www.bymarcelolewin.com`
- [ ] **Action**: Enable "Enforce HTTPS" (if available)

### Task 1.2: Create Staging Repository
- [x] **Who**: Marcelo
- [x] **Action**: Create new repository `bymarcelolewin/bml-website-next`
- [x] **Settings**: Public repository
- [x] **Action**: Go to repository Settings → Pages
- [x] **Action**: Set source to "Deploy from a branch"
- [ ] **Action**: Select branch: `gh-pages` (will be created by first deployment)
- [ ] **Action**: Add custom domain: `next.bymarcelolewin.com`
- [ ] **Action**: Enable "Enforce HTTPS" (if available)

## Phase 2: Generate Personal Access Token (Marcelo)
**Estimated Time: 5 minutes**

### Task 2.1: Create Personal Access Token
- [x] **Who**: Marcelo
- [x] **Action**: Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- [x] **Action**: Click "Generate new token (classic)"
- [x] **Action**: Set expiration to "No expiration" (or your preferred duration)
- [x] **Action**: Add note: "Deploy to external repositories"
- [x] **Action**: Select scopes:
  - [x] `repo` (Full control of private repositories)
  - [x] `workflow` (Update GitHub Action workflows)
- [x] **Action**: Generate token
- [x] **Action**: Copy token and save securely (will be used in next phase)

## Phase 3: Configure Repository Secrets (Marcelo)
**Estimated Time: 5 minutes**

### Task 3.1: Add Deploy Token to Source Repository
- [x] **Who**: Marcelo
- [x] **Action**: Go to `bymarcelolewin/by-marcelo-lewin` repository
- [x] **Action**: Go to Settings → Secrets and variables → Actions
- [x] **Action**: Click "New repository secret"
- [x] **Action**: Name: `DEPLOY_TOKEN`
- [x] **Action**: Value: [paste the personal access token from Phase 2]
- [x] **Action**: Click "Add secret"

## Phase 4: Update GitHub Actions Workflows (Claude)
**Estimated Time: 10 minutes**

### Task 4.1: Update Production Workflow
- [x] **Who**: Claude
- [x] **Action**: Update `.github/workflows/hugo-prod.yml`
- [x] **Changes**:
  - [x] Change `permissions` from `contents: write` to `contents: read`
  - [x] Update deployment step to use `personal_token: ${{ secrets.DEPLOY_TOKEN }}`
  - [x] Update `external_repository: bymarcelolewin/bml-website-prod`
  - [x] Update `cname: www.bymarcelolewin.com`

### Task 4.2: Update Staging Workflow
- [x] **Who**: Claude
- [x] **Action**: Update `.github/workflows/hugo-next.yml`
- [x] **Changes**:
  - [x] Change `permissions` from `contents: write` to `contents: read`
  - [x] Update deployment step to use `personal_token: ${{ secrets.DEPLOY_TOKEN }}`
  - [x] Update `external_repository: bymarcelolewin/bml-website-next`
  - [x] Update `cname: next.bymarcelolewin.com`

## Phase 5: Test Deployments (Marcelo + Claude)
**Estimated Time: 15 minutes**

### Task 5.1: Test Staging Deployment
- [x] **Who**: Marcelo
- [x] **Action**: Make a small change to any file in `dev` branch
- [x] **Action**: Push to `dev` branch
- [ ] **Who**: Claude
- [ ] **Action**: Monitor GitHub Actions workflow for success
- [ ] **Action**: Verify deployment created `gh-pages` branch in `bml-website-next`
- [ ] **Action**: Check if `next.bymarcelolewin.com` serves the content (may take a few minutes)

### Task 5.2: Test Production Deployment
- [ ] **Who**: Marcelo
- [ ] **Action**: Merge `dev` branch to `main` branch (or push directly to `main`)
- [ ] **Who**: Claude
- [ ] **Action**: Monitor GitHub Actions workflow for success
- [ ] **Action**: Verify deployment created `gh-pages` branch in `bml-website-prod`
- [ ] **Action**: Check if `www.bymarcelolewin.com` serves the content (may take a few minutes)

## Phase 6: Update DNS Configuration (Marcelo)
**Estimated Time: 10 minutes**

### Task 6.1: Update Production DNS
- [ ] **Who**: Marcelo
- [ ] **Action**: Log into Namecheap DNS management
- [ ] **Action**: Locate CNAME record for `www.bymarcelolewin.com`
- [ ] **Action**: Verify it points to `bymarcelolewin.github.io`
- [ ] **Note**: This should already be correct, but verify the target repository is now `bml-website-prod`

### Task 6.2: Update Staging DNS
- [ ] **Who**: Marcelo
- [ ] **Action**: Log into Namecheap DNS management
- [ ] **Action**: Locate CNAME record for `next.bymarcelolewin.com`
- [ ] **Action**: Verify it points to `bymarcelolewin.github.io`
- [ ] **Note**: This should already be correct, but verify the target repository is now `bml-website-next`

### Task 6.3: Wait for DNS Propagation
- [ ] **Who**: Marcelo
- [ ] **Action**: Wait up to 48 hours for DNS changes to propagate globally
- [ ] **Action**: Test domains from different networks/locations
- [ ] **Tools**: Use `dig` or online DNS propagation checkers

## Phase 7: Clean Up Source Repository (Marcelo)
**Estimated Time: 5 minutes**

### Task 7.1: Disable GitHub Pages
- [ ] **Who**: Marcelo
- [ ] **Action**: Go to `bymarcelolewin/by-marcelo-lewin` repository
- [ ] **Action**: Go to Settings → Pages
- [ ] **Action**: Set source to "None" (disable GitHub Pages)

### Task 7.2: Delete Old Deployment Branches
- [ ] **Who**: Marcelo
- [ ] **Action**: Go to `bymarcelolewin/by-marcelo-lewin` repository
- [ ] **Action**: Go to branches page
- [ ] **Action**: Delete `gh-pages` branch
- [ ] **Action**: Delete `gh-pages-dev` branch

## Phase 8: Final Testing and Validation (Marcelo + Claude)
**Estimated Time: 10 minutes**

### Task 8.1: Comprehensive Testing
- [ ] **Who**: Marcelo
- [ ] **Action**: Test `www.bymarcelolewin.com` loads correctly
- [ ] **Action**: Test `next.bymarcelolewin.com` loads correctly
- [ ] **Action**: Test navigation, links, and assets work on both domains
- [ ] **Action**: Test responsive design on both domains

### Task 8.2: Test Development Workflow
- [ ] **Who**: Marcelo
- [ ] **Action**: Make a change in `dev` branch
- [ ] **Action**: Push to `dev` branch
- [ ] **Action**: Verify change appears on `next.bymarcelolewin.com`
- [ ] **Action**: Merge `dev` to `main`
- [ ] **Action**: Verify change appears on `www.bymarcelolewin.com`

### Task 8.3: Document New Workflow
- [ ] **Who**: Claude
- [ ] **Action**: Update `.vibedocs/reference-library/` documentation
- [ ] **Action**: Update any build/deploy instructions
- [ ] **Action**: Create retrospective document

## Summary
**Total Estimated Time: 1-2 hours (plus DNS propagation time)**

### Critical Success Factors:
- [ ] Both repositories created and configured correctly
- [ ] Personal access token has correct permissions
- [ ] Repository secret added to source repository
- [ ] Both workflows updated and tested
- [ ] DNS records pointing to correct GitHub Pages sites
- [ ] All domains loading correctly

### Rollback Plan (if needed):
- [ ] Re-enable GitHub Pages in source repository
- [ ] Revert workflow changes
- [ ] Update DNS back to original settings
- [ ] Delete new deployment repositories

### Post-Implementation:
- [ ] Monitor for any issues over next 24-48 hours
- [ ] Test development workflow with team
- [ ] Update documentation and onboarding materials