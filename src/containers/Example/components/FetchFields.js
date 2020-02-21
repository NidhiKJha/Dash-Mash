
const scopes = [
    'ISIN',
    'descriptorname',
    'couponrate',]

const fetch FormFields = () => {
    return fetch(
      `https://oligrwklhi.execute-api.us-west-2.amazonaws.com/Dev/getinstrumentscards`
  )
      .then(response => {
          return response.json();
      })
      .catch(err => console.error(err));
  };
  const postFormData = (formData) => {
    let { ISIN, descriptorname, couponrate } = formData;
    let postData = {
      title: formData.title,
      content: formData.description,
      values: formData.values,
     
    };
  return fetch("https://oligrwklhi.execute-api.us-west-2.amazonaws.com/Dev/getinstrumentscards", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    })
    .then(response => {
      return response;
    })
    .catch(error => console.log(error));
  };

  module.exports = {
    postFormData
};