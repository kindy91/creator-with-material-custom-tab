import { ICreatorPlugin, SurveyCreatorModel } from 'survey-creator-core';

export class CustomTabCreatorPlugin implements ICreatorPlugin {
  model: SurveyCreatorModel;

  constructor(private readonly creator: SurveyCreatorModel) {
    this.model = creator;
    creator.addPluginTab(
      'custom-tab',
      this,
      'Custom Tab',
      undefined,
      1,
    );
  }

  activate() {

  }
}
