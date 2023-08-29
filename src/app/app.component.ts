import { Component, OnInit } from '@angular/core';
import { AngularComponentFactory } from 'survey-angular-ui';
import { SurveyCreatorModel } from 'survey-creator-core';
import { CustomTabComponent } from './custom-tab/custom-tab.component';
import { surveyJSON } from "./survey_json";
import {CustomTabCreatorPlugin} from './custom-tab.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  model?: SurveyCreatorModel;
  ngOnInit() {
    const options = {
      showLogicTab: true
    };
    const creator = new SurveyCreatorModel(options);
    creator.JSON = surveyJSON;
    this.model = creator;

    new CustomTabCreatorPlugin(this.model);
    AngularComponentFactory.Instance.registerComponent(
      'svc-tab-custom-tab',
      CustomTabComponent,
    );
  }
}
