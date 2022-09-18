import { green, red } from "../deps.ts";

/*
|-------------------------------------------------------------------------------
| CREATE A NEW BLOG POST
|-------------------------------------------------------------------------------
*/

const date = new Date();

// Get nice string version for post body.
const dateLocaleString = date.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Get raw title from user.
const rawTitle = prompt(green("\nWhat would you like to name this post? "));

if (!rawTitle) {
  console.error(red("\nExiting. No filename supplied.\n"));
  Deno.exit(1);
}

// Make URL-safe version.
const urlEncodedTitle = encodeURIComponent(
  rawTitle.toLowerCase().replaceAll(/\s/g, "-"),
);

// Create path & filename from date and title.
const newPostFile = `blog/src/${date.toISOString()}_${urlEncodedTitle}.md`;

// Create the file using title as heading, followed by date.
Deno.writeTextFileSync(
  newPostFile,
  `# ["${rawTitle}"](/"${urlEncodedTitle}")\n<div class=\"post-date\">"${dateLocaleString}"</div>`,
);

console.log(green("\nFile created!\n"));
