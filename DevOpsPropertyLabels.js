var DevOpsPropertyLabels = Class.create();
DevOpsPropertyLabels.prototype = {
    initialize: function() {},
    type: 'DevOpsPropertyLabels'
};

DevOpsPropertyLabels.PROPERTY_LABEL_MAPPINGS = {
    'sn_devops.github.api_url': 'Enter the GitHub API URL',
    'sn_devops.import.orchestration_tool.executions.per_page': 'Specify the number of orchestration tool executions allowed per page',
    'sn_devops.enable_import_polling': 'Select the option to enable polling of import requests. Clear to disable polling.',
    'sn_devops.github.api_version_path': 'Enter the GitHub API version path',
    'sn_devops.': '',
    'sn_devops.cascade_delete_threshold': 'Enter the cascade delete threshold. The recommended foreground limit 1000.',
    'sn_devops.import.max.retries.per_page': 'Enter the maximum retries to be allowed per page while importing data from tools',
    'sn_devops.committer.score.default': 'Enter the default committer score',
    'sn_devops.committer.score.multiply.factor': 'Enter the multiply factor for committer score',
    'sn_devops.table_auto_archive_duration': 'Specify the number of months after which table data must be auto-archived',
    'sn_devops.import.max.processing.time.seconds.per_page': 'Enter the maximum processing time in seconds, that should be allowed per page while importing data from tools',
    'sn_devops.supported_webhook_capabilities': 'Enter the webhook capabilities that are supported by DevOps',
    'sn_devops.bulk_flow_timeout': 'Specify in milliseconds when the bulk flows should time out',
    'sn_devops.import.coding_tool.commits.per_page': 'Specify the number of coding tool commits to be displayed per page',
    'sn_devops.discover.jenkins.folder.depth': '',
    'sn_devops.import.coding_tool.repos.per_page': 'Specify the number of coding repositories to be displayed per page',
    'sn_devops.custom_change_categorization': '',
    'sn_devops.devops_log_level': 'Select the DevOps log level from the list. The available levels are Error, Warning, Information, Debug, and Trace.',
    'sn_devops.inbound_events_retry_error_list': '',
    'sn_devops.import.max.pages.processing.per_import': '',
    'sn_devops.non_admin_software_quality_summary_flag': 'Enable to view and monitor SonarQube scans configured on your GitHub Actions, Jenkins, or Azure DevOps pipelines as a non-admin Sonar user',
    'sn_devops.github.url': 'For Github, this field is used to get the API URL (for REST calls)',
    'sn_devops.import.orchestration_tool.executions.maximum': 'Maximum orchestration tool executions while importing Jenkins freestyle jobs',
    'sn_devops.import.save.payloads.as.attachments': 'If true, the fetched JSON payload is saved as an attachment in the Import Request page',
    'sn_devops.default_test_type': 'Default test type from orchestration pipelines',
    'sn_devops.import.coding_tool.branches.per_page': 'Specify the number of coding tool branches per page',
    'sn_devops.sq_ui_category_preferences': '',
    'sn_devops.discovered.user.auto.assign.role': 'Enter an sn_devops role that must be automatically added to active DevOps users, for example, for making a commit',
    'sn_devops.import.planning_tool.issues.per_page': 'Specify the number of planning tool issues that will be displayed per page',
    'sn_devops.max_retry_count_inbound_event': 'Enter the maximum number of retries to be allowed for errored inbound events',
    'sn_devops.health_report_duration': 'Defaults to last 7 days to show system health metrics like inbound events',
    'sn_devops.permission_check_timeout': 'Specify in milliseconds when the tool permission checks should time out',
    'sn_devops.change_request.implement_state': 'Enter the DevOps change request implement state, for change management customizations',
    'sn_devops.change_request.post_implement_state': 'Enter the DevOps change request post implement state, for change management customizations',
    'sn_devops.change_request_handler_subflow': 'Enter the change request handler for subflows',
    'sn_devops.change_request.closed_state': 'Enter the DevOps change request close state, for change management customizations',
    'sn_devops.change_request.cancel_state': 'Enter the DevOps change request cancel state, for change management customizations',
    'sn_devops.change_request_reusability_subflow': 'Name of the subflow that can be called to check if a previously created change can be reused(instead of creating a new one)',
    'sn_devops.reused_model_change_request_subflow': '',
    'sn_devops.change_request.approved_approval': 'Enter the DevOps change request approval text, for change management customizations',
    'sn_devops.tool_capabilities': 'Enter the tool capabilities to be supported, as comma separated values',
    'sn_devops.enable_debug': '',
	'sn_devops_insights.x_hours_per_developer_time' : 'The time taken per developer to work on a single work item in hours. This value is used to calculate the Developer hours saved report.',
	'sn_devops_insights.avg_hourly_developer_cost' : 'The average hourly cost of a developer working on DevOps changes in the selected currency. This value is used to calculate the Change acceleration savings report.',
	'sn_devops_insights.awaiting_states' : 'The states that are reported as awaiting a change request in the Changes awaiting approval report',
	'sn_devops.inbound_events_retry_error_mins_ago': '',
	'sn_devops.discover.folder.depth': ''
};
