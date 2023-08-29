export const surveyJSON = {
  "title": "NPS Survey Question",
  "pages": [],
  "completedHtml": "<h3>Thank you for your feedback</h3>",
  "completedHtmlOnCondition": [
    {
      "expression": "{nps_score} >= 9",
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
    },
    {
      "expression": "{nps_score} >= 6  and {nps_score} <= 8",
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
    }
  ],
  "showQuestionNumbers": "off"
};