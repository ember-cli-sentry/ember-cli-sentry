function initialize(instance) {
  const base = instance.lookup ? instance : instance.container;

  const raven = base.lookup(`service:raven`);
  const ajax = base.lookup(`service:ajax`);

  raven.callRaven('setTransport', args => {
    const {url, auth} = args;

    function urlencode(obj) {
      const parts = [];
      for (let key in obj) {
        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
      }
      return parts.join("&");
    }

    const requestOptions = {
      method: 'POST',
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(args.data),
      // Without Referer or Origin sentry gives a 403.
      headers: {Referer: 'fastboot://'}
    };
    ajax.request(url + '?' + urlencode(auth), requestOptions).then(function () {
      if (args.onSuccess) {
        args.onSuccess();
      }
    }).catch(function () {
      if (args.onFailure) {
        args.onFailure();
      }
    });
  });
}

export default {
  name: 'raven-fastboot-setup',
  after: ['sentry-setup'],
  initialize
};
