import { merge } from "webpack-merge";
import singleSpaDefaults from "webpack-config-single-spa-ts";
import path from "path";

export default (webpackConfigEnv, argv) => {
  const orgName = "omni";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    entry: path.join(process.cwd(), "browser/omni-root-config.ts"),
    output: {
      path: path.join(process.cwd(), "./server/public"),
    },
  });
};
