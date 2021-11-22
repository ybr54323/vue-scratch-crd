npm run build
cd dist

git checkout -B gh-pages
git add -A
git commit -m 'deploy'

git push -f https://github.com/ybr54323/vue-scratch-crd.git gh-pages
cd -