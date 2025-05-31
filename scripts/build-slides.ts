import { execSync } from "child_process";
import { cp, mkdir, rm } from "fs/promises";
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

async function buildSlide(slideName: string): Promise<void> {
  const slidePath = path.join(slidesDir, slideName);
  const distPath = path.join(slidePath, "dist");
  const targetPath = path.join(publicDir, slideName);

  console.log(`\n📦 Building slide: ${slideName}`);

  try {
    await removeDir(distPath);

    // 🧩 Step 1: Install local dependencies for this slide
    console.log(`📥 Installing dependencies for ${slideName}`);
    execSync("pnpm install --frozen-lockfile", {
      cwd: slidePath,
      stdio: "inherit",
    });

    // 🛠️ Step 2: Build with Slidev
    execSync(`pnpm build --base /slides/${slideName}/`, {
      cwd: slidePath,
      stdio: "inherit",
    });

    // 🧹 Step 3: Copy to public
    await removeDir(targetPath);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await cp(distPath, targetPath, { recursive: true });

    console.log(`✅ Built: /slides/${slideName}/`);
  } catch (error) {
    console.error(`❌ Failed to build ${slideName}:`, error);
  }
}
