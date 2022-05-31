---
title: 'catatan yang berhubungan dengan GitHub'
date: 2022-05-21
tags: ['notes']
draft: false
summary: 'hal yang terkait dengan github yang belum cukup dijadikan artikel'
---

## GitHub

- API github

```
https://api.github.com/repos/username/reponame
```

## git commit message emoji

daftar kode emaji untuk commit message

- [emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

## ubah commit message jika sudah push ke github

> [link](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)

- git rebase -i HEAD~n
- ganti `pick` menjadi `reword` pada bagian pesan yang akan di ubah.
- git push --force origin main / branch

## how to write a git commit message

- `https://cbea.ms/git-commit/`
- `https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/`
- `https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/`
- `https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53`
- `https://medium.com/swlh/writing-better-commit-messages-9b0b6ff60c67`
- `https://initialcommit.com/blog/git-commit-messages-best-practices`
- `https://chiamakaikeanyi.dev/how-to-write-good-git-commit-messages/`
