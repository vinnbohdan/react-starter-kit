export default values => {
  const errors = {};

  if (!values.first_name || !values.first_name.trim()) {
    errors.first_name = 'Required';
  }
  if (values.first_name && values.first_name.length > 20) {
    errors.first_name = 'Must be 20 characters or less';
  }
  if (values.first_name && values.first_name.length < 2) {
    errors.first_name = 'Must be Must be 2 characters or more';
  }
  if (
    values.first_name &&
    /* eslint-disable */
    /[^a-zA-Z0-9 ]/i.test(  // eslint-disable-line
      values.first_name,
    )
  ) {
    errors.first_name = 'Only alphanumeric characters';
  }
  if (!values.last_name || !values.last_name.trim()) {
    errors.last_name = 'Required';
  }
  if (values.last_name && values.last_name.length > 20) {
    errors.last_name = 'Must be 20 characters or less';
  }
  if (values.last_name && values.last_name.length < 2) {
    errors.last_name = 'Must be Must be 2 characters or more';
  }
  if (
    values.last_name &&
    /* eslint-disable */
    /[^a-zA-Z0-9 ]/i.test(  // eslint-disable-line
      values.last_name,
    )
  ) {
    errors.last_name = 'Only alphanumeric characters';
  }
  if (!values.address || !values.address.trim()) {
    errors.address = 'Required';
  }
  if (values.address && values.address.length > 40) {
    errors.address = 'Must be 40 characters or less';
  }
  if (values.address && values.address.length < 2) {
    errors.address = 'Must be Must be 2 characters or more';
  }
  if (!values.email || !values.email.trim()) {
    errors.email = 'Required';
  }
  if (
    values.email &&
    /* eslint-disable */
    !/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(  // eslint-disable-line
      values.email,
    )
  ) {
    errors.email = 'Wrong email format';
  }
  if (!values.city || !values.city.trim()) {
    errors.city = 'Required';
  }
  if (values.city && values.city.length > 20) {
    errors.city = 'Must be 20 characters or less';
  }
  if (values.city && values.city.length < 2) {
    errors.city = 'Must be Must be 2 characters or more';
  }
  if (
    values.city &&
    /* eslint-disable */
    /[^a-zA-Z0-9 ]/i.test(  // eslint-disable-line
      values.city,
    )
  ) {
    errors.city = 'Only alphanumeric characters';
  }
  if (!values.phone || !values.phone.trim()) {
    errors.phone = 'Required';
  }
  if (values.phone && values.phone.length !== 10) {
    errors.phone = 'Invalid phone number, must be 10 digits';
  }
  if (values.phone && isNaN(Number(values.phone))) {
    errors.phone = 'Must be a number';
  }
  if (!values.postcode || !values.postcode.trim()) {
    errors.postcode = 'Required';
  }
  if (values.postcode && values.postcode.length > 10) {
    errors.postcode = 'Must be 10 characters or less';
  }
  if (values.postcode && values.postcode.length < 5) {
    errors.postcode = 'Must be 5 characters or more';
  }
  if (values.postcode && isNaN(Number(values.postcode))) {
    errors.postcode = 'Must be a number';
  }
  if (!values.country || !values.country.trim()) {
    errors.country = 'Required';
  }
  if (values.country && values.country.length > 20) {
    errors.country = 'Must be 20 characters or less';
  }
  if (values.country && values.country.length < 2) {
    errors.country = 'Must be Must be 2 characters or more';
  }
  if (
    values.country &&
    /* eslint-disable */
    /[^a-zA-Z0-9 ]/i.test(  // eslint-disable-line
      values.country,
    )
  ) {
    errors.country = 'Only alphanumeric characters';
  }
  return errors;
};
