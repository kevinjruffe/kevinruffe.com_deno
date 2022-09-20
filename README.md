# ☘️ KevinRuffe.com ☘️

## 🦕 Deno Edition 🦕

This is the [Deno](https://deno.land/) version of my static blog generator. I plan to keep both this one and the Node.js version up to date, so rather than rehash all that was said in the README of the last version I'd instead point you to [that README](https://github.com/kevinjruffe/kevinruffe.com#readme) for further information on this site.

What follows is information anyone looking to try the Deno version would need to know.

---

## How to try it.

If you'd like to give it a trial spin simply clone the repo:

```bash
git clone https://github.com/kevinjruffe/kevinruffe.com.git
```

If you need to download Deno you can do so on a \*nix system by running:

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

You can then create a starter Markdown file with:

```bash
deno task newPost
```

Once you've completed writing your Markdown file all that's needed is running `deno task build` and your blog site will be generated. Viewing it locally is then possible by running `deno task serve`. That's it.

## How to run Deno on Cloudflare

Please see the README for the Node.js version of this static site generator for general information on the infrastructure I'm using, but for Deno specifically the only thing different is that for the build command you must first download Deno, use the executable in the right directory to call `deno task build`. The full build command I use is:

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh && /opt/buildhome/.deno/bin/deno task build
```

## Glossary of `deno task` scripts

These are scripts you can execute via the [Deno task runner](https://deno.land/manual@v1.25.3/tools/task_runner#task-runner).

- `build` - Runs the the blog generator script.
- `fmt` - Runs the Deno formatter.
- `lint` - Runs the Deno linter.
- `newPost` - Runs script that asks for a post title, then builds new file using a necessary filename convention. It also adds the title and some special date markup to the Markdown file.
- `server` - Runs [http-server](https://github.com/http-party/http-server#readme) with no caching on localhost and your local network. (**YES**, this is my one concession to Node in this port. I didn't find a really nice Deno alternative.)
