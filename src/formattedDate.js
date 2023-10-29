const formattedDate = (date) => {
  const res = date ? new Date(date) : new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return res.toLocaleDateString('ru', options);
};

export default formattedDate;
