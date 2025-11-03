# Blacksmith.sh Demo Repository

A demonstration repository for testing [Blacksmith](https://www.blacksmith.sh) - a drop-in replacement for GitHub Actions runners with built-in analytics and performance improvements.

## What is Blacksmith?

Blacksmith replaces GitHub Actions runners with optimized infrastructure that provides:
- **Faster build times** - Optimized runners with better hardware
- **Detailed analytics** - Deep insights into workflow performance
- **Cost optimization** - Better resource utilization
- **Zero config changes** - Drop-in replacement for existing workflows

## Getting Started

### 1. Install Blacksmith

1. Go to https://www.blacksmith.sh
2. Sign up for an account
3. Install the Blacksmith GitHub App
4. Configure it for this repository

### 2. Test Locally

```bash
git clone https://github.com/$OWNER/$REPO_NAME.git
cd $REPO_NAME
npm install
npm test
```

### 3. Trigger Workflows

Push any commit to the `main` branch to trigger workflows:

```bash
git commit --allow-empty -m "Test Blacksmith"
git push
```

### 4. View Analytics

Check your Blacksmith dashboard at https://blacksmith.sh/dashboard to see:
- Execution time improvements
- Cost breakdowns
- Cache performance
- Detailed workflow metrics

## Workflows Included

This repository includes 4 comprehensive workflows:

### 1. CI (`ci.yml`)
Basic continuous integration that runs on every push and PR:
- Linting with ESLint
- Unit tests with Jest
- Coverage reporting

### 2. Build and Test (`build-test.yml`)
Comprehensive testing workflow:
- Full build process
- Unit and integration tests
- Security auditing with npm audit
- Test result artifacts

### 3. Matrix Build (`matrix-build.yml`)
Tests across multiple environments:
- Multiple Node.js versions (18, 20, 22)
- Multiple OS versions (Ubuntu 20.04, 22.04, latest)
- Performance benchmarking

### 4. Performance Test (`performance-test.yml`)
Benchmarks to showcase Blacksmith improvements:
- Cold start vs cached build comparison
- Dependency installation timing
- Test execution performance
- Parallel job efficiency

## What to Look For

When comparing Blacksmith to standard GitHub Actions runners:

✅ **Speed** - Check workflow execution times in the Actions tab
✅ **Analytics** - View detailed metrics in Blacksmith dashboard
✅ **Cost** - See cost breakdowns per workflow
✅ **Cache** - Notice improved caching behavior
✅ **Reliability** - Better success rates and fewer timeouts

## Project Structure

```
.
├── .github/
│   └── workflows/
│       ├── ci.yml              # Basic CI
│       ├── build-test.yml      # Comprehensive testing
│       ├── matrix-build.yml    # Multi-environment testing
│       └── performance-test.yml # Performance benchmarks
├── src/
│   ├── app.js                  # Main application
│   └── utils.js                # Utility functions
├── tests/
│   └── app.test.js             # Test suite
├── package.json                # Dependencies
├── .eslintrc.json              # Linting config
└── .gitignore                  # Git ignore rules
```

## Running Tests

```bash
# Run all tests
npm test

# Run linting
npm run lint

# Run application
npm start
```

## Support

- **Blacksmith Docs**: https://docs.blacksmith.sh
- **Blacksmith Support**: support@blacksmith.sh
- **GitHub Issues**: Use this repository's issue tracker

## License

MIT License
