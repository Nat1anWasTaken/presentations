import { execSync } from "child_process";
import { cp, mkdir, readdir, rm, stat } from "fs/promises";
import path from "path";

const slidesDir = path.resolve(__dirname, "../slides");
const publicDir = path.resolve(__dirname, "../public/slides");

async function removeDir(targetPath: string) {
  try {
    await rm(targetPath, { recursive: true, force: true });
  } catch (err) {
    console.error(`⚠️ Failed to remove ${targetPath}:`, err);
  }
}

// 🛠️ Build a single Slidev presentation
async function buildSlide(slideName: string): Promise<void> {
  const slidePath = path.join(slidesDir, slideName);
  const distPath = path.join(slidePath, "dist");
  const targetPath = path.join(publicDir, slideName);

  console.log(`\n📦 Building slide: ${slideName}`);

  try {
    console.log(`📥 Installing dependencies for ${slideName}`);
    execSync("pnpm install --frozen-lockfile", {
      cwd: slidePath,
      stdio: "inherit",
    });

    execSync(`pnpm build --base /slides/${slideName}/`, {
      cwd: slidePath,
      stdio: "inherit",
    });

    await removeDir(targetPath);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await cp(distPath, targetPath, { recursive: true });

    console.log(`✅ Done: /slides/${slideName}/`);
  } catch (error) {
    console.error(`❌ Failed to build ${slideName}:`, error);
  }
}

async function main(): Promise<void> {
  const entries = await readdir(slidesDir);
  const slideNames: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(slidesDir, entry);
    if ((await stat(fullPath)).isDirectory()) {
      slideNames.push(entry);
    }
  }

  await Promise.all(slideNames.map((name) => buildSlide(name)));

  console.log("\n🎉 All slides built successfully.");
}

main().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
