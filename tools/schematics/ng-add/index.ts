import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { chain, apply, url, template, move, mergeWith, MergeStrategy } from '@angular-devkit/schematics'
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('📦 Installing package my-funny-lib ...');
    _context.addTask(new NodePackageInstallTask());
    return chain([generateScssTheme()]);
  };
}

function generateScssTheme(): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    _context.logger.info('💄 Generating theme ...');
    const source = apply(url('../files/styles'), [template({}), move('src')]);
    return mergeWith(source, MergeStrategy.Overwrite);
  };
}
