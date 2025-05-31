import { execSync } from "child_process";
import { cp, mkdir, readdir, rm, stat } from "fs/promises";
import path from "path";

// Base folders
const slidesDir = path.resolve(__dirname, "../slides");
const publicDir = path.resolve(__dirname, "../public/slides");

async function removeDir(targetPath: string) {
  try {
    await rm(targetPath, { recursive: true, force: true });
  } catch (err) {
    console.error(`Failed to remove ${targetPath}:`, err);
  }
}

async function buildSlide(slideName: string) {
  const slidePath = path.join(slidesDir, slideName);
  const distPath = path.join(slidePath, "dist");
  const targetPath = path.join(publicDir, slideName);

  console.log(`\n📦 Building slide: ${slideName}`);

  // Remove old dist folder if exists
  await removeDir(distPath);

  // Build with base path
  execSync(`pnpm slidev build --base /slides/${slideName}/`, {
    cwd: slidePath,
    stdio: "inherit",
  });

  // Remove old public target folder
  await removeDir(targetPath);

  // Ensure parent folder exists
  await mkdir(path.dirname(targetPath), { recursive: true });

  // Copy new dist to public/slides/{slide}
  await cp(distPath, targetPath, { recursive: true });

  console.log(`✅ Done: /slides/${slideName}/`);
}

async function main() {
  const entries = await readdir(slidesDir);

  const slideDirs = [];
  for (const entry of entries) {
    const fullPath = path.join(slidesDir, entry);
    const isDir = (await stat(fullPath)).isDirectory();
    if (isDir) {
      slideDirs.push(entry);
    }
  }

  for (const slideName of slideDirs) {
    await buildSlide(slideName);
  }

  console.log("\n🎉 All slides built and copied to public.");
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
