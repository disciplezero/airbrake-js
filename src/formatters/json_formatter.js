var JSONFormatter = function() {};

JSONFormatter.prototype = {
  format: function(data) {
    var errors = [], request = {},
        request_data = data.request || {},
        request_key;

    errors.backtrace = [];

    // Copy values from provided request object
    for (request_key in request_data) {
      request[request_key] = request_data[request_key];
    }

    return {
      context: {
        language: "JavaScript",
        url: data.request_url,
        environment: data.environment,
        rootDirectory: data.project_root,
        action: data.request_action
      },
      notifier: {
        name: "airbrake_js",
        version: "<%= pkg.version %>",
        url: "http://airbrake.io"
      },
      environment: {},
      params: {},
      error: errors,
      request: request
    };
  }
};

module.exports = JSONFormatter;
