module.exports = function serviceOptions(service, api, payload = {}, queryParams = '', headers = { 'content-type': 'application/json' }) {
  const { url, [api]: endpoint } = global.services(service);
  console.log(endpoint);
  return {
    method: endpoint.method,
    uri: `${url}${endpoint.path}${queryParams}`,
    body: payload,
    json: true,
    headers,
  };
};
