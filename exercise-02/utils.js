import os from "os";

export function getSystemInfo() {
  const platform = os.platform();
  const cpuCount = os.cpus().length;
  const totalMem = os.totalmem();

  return {
    platform,
    cpuCount,
    totalMem,
  };
}
