// Reference to https://github.com/react-toolbox/react-toolbox/issues/1583
import path from 'path';

export default (config, env, helpers) => {
  const reactToolboxPath = path.resolve('./node_modules', 'react-toolbox');
  const rules = helpers.getLoadersByName(config, 'postcss-loader');

  const cssModulesRule = rules[0].rule;
  cssModulesRule.include.push(reactToolboxPath); // this enables css modules for react-toolbox
  const globalCssRule = rules[1].rule;
  
  globalCssRule.exclude.push(reactToolboxPath); // exclude react-toolbox from global css
}