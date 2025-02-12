import {NgDocPage} from '@ng-doc/core';
import {DefaultDemoComponent} from "./demo/default-demo.component";
import {ColorDemoComponent} from "./color-demo/color-demo.component";

const ProgressBarPage: NgDocPage = {
	title: `progress-bar`,
	mdFile: './index.md',
  demos: { DefaultDemoComponent, ColorDemoComponent },
};

export default ProgressBarPage;
