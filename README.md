# Projects template

Follows https://adrianhall.github.io/javascript/react/2020/03/29/parcel-typescript-react/
with custom storybook and jest/react-testing-libary for demos and testing.


## Deployment

This project should be generic enough to setup on any web host. So far tested with:


### GitHub Pages
To publish from dist folder on gh-pages branch:

1. 
```
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "Init empty branch"
git push origin gh-pages
git checkout master
git worktree add dist gh-pages
```

2. On GitHub go into Settings -> GitHub Pages -> Select 'gh-pages' as the source.

3. Run `yarn build` and `yarn deploy` to publish the app.





See below for more information:
https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7
https://stackoverflow.com/questions/39707402/why-does-git-worktree-add-create-a-branch-and-can-i-delete-it
