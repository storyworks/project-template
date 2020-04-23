# Projects template

Follows https://adrianhall.github.io/javascript/react/2020/03/29/parcel-typescript-react/
with custom storybook and jest/react-testing-libary for demos and testing.

To publish from dist folder on gh-pages branch:

`git checkout --orphan gh-pages git rm -rf . git commit --allow-empty -m "Init empty branch" git push origin gh-pages git checkout master git worktree add dist gh-pages`

Then you should be able to run `yarn build` and `yarn deploy` to publish the app.
Make sure the repo is configured to use gh-pages branch as the source.

See below for more information:
https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7
https://stackoverflow.com/questions/39707402/why-does-git-worktree-add-create-a-branch-and-can-i-delete-it
