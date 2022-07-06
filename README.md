# sveltekit-undici-formdata-issue

This repository demonstrates an issue with the current SvelteKit version that uses undici for the fetch API.

This repo has two branches, with two different versions of SvelteKit, because the issue changed a bit, after the latest update.

To reproduce the issues, just execute this two commands on each branch:

```bash
npm install

npm run test
```

## 1.0.0-beta.359
This branch contains SvelteKit 1.0.0-beta.359.

With this SvelteKit version, you get this error:
```
TypeError: Request.formData: undefined
 ❯ Object.webidl.errors.exception ../../../../../../../C:/sveltekit-undici-request-formdata-bug/node_modules/@sveltejs/kit/dist/node/polyfills.js:817:10      
 ❯ Request.formData ../../../../../../../C:/sveltekit-undici-request-formdata-bug/node_modules/@sveltejs/kit/dist/node/polyfills.js:2867:24
 ❯ src/lib/dummy.test.js:11:39
      9|     });
     10| 
     11|     const requestData = await request.formData();
       |                                       ^

```

## 1.0.0-beta.358
This branch contains SvelteKit 1.0.0-beta.358.

With this SvelteKit version, you get this error:
```
NotSupportedError: multipart/form-data not supported
 ❯ Request$2.formData ../../../../../../../C:/sveltekit-undici-request-formdata-bug/node_modules/@sveltejs/kit/dist/node/polyfills.js:1921:13
 ❯ src/lib/dummy.test.js:11:39
      9|     });
     10| 
     11|     const requestData = await request.formData();
       |                                       ^

```
