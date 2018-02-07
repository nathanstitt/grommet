import del from 'del';
import fs from 'fs-extra';
import git from 'simple-git/promise';
import path from 'path';

const repoURL = `https://git@github.com:nathanstitt/grommet.git`;
const localFolder = path.resolve('./.tmp/grommet');
const localDist = path.resolve('./dist');


  del(localFolder).then(() => {
    git().silent(true)
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout('NEXT-stable'))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() => fs.copy(localDist, localFolder))
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit('NEXT-stable updated'))
      .then(() => git(localFolder).push('origin', 'NEXT-stable'))
      .catch(err => console.error('failed: ', err));
  });
