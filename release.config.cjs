module.exports = {
  branches: ['+([0-9])?(.{+([0-9]),x}).x', 'trunk', 'next', 'next-major', { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/npm', '@semantic-release/changelog', '@semantic-release/git', '@semantic-release/github'],
  ci: false,
  debug: true
}
