const handleError = (errors) => {
  const { data, status } = errors;

  switch (status) {
    case 400:
      return data.errors.join('');
    case 401:
      return data.errors.join('');
    case 403:
      return data.errors.join('');
    case 404:
      return data.errors.join('');
    case 500 || 503:
      return data.errors.join('');
    default:
      return 'Unknown error';
  }
};

export default handleError;
