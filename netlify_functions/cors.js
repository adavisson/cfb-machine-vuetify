exports.handler = async (event, context) => {
  let url = event.path.split('.netlify/functions/cors/')[1];
  console.log(url);
  url = decodeURIComponent(url);
  url = new URL(url);

  for (let i in event.queryStringParameters) {
    url.searchParams.append(i, event.queryStringParameters[i]);
  }

  const headerToSend = {
    Authorization: event.headers['Authorization'] || '',
    content_type: 'application/json',
    host: url.host,
  };

  const options = {
    method: event.httpMethod.toUpperCase(),
    headers: headerToSend,
    body: event.body,
  };

  if (['GET', 'HEAD'].includes(event.httpMethod.toUpperCase())) {
    delete options.body;
  }

  const resp = await fetch(url, options);
  const resp_json = resp.text();
  const headers = resp.headers.raw();

  return {
    statusCode: 200,
    body: resp_json,
    headers: {
      content_type: String(headers['content_type']) || 'application/json',
    },
  };
};
