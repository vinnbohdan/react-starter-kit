export default values => {
  const errors = {};

  if (!values.firstName || !values.firstName.trim()) {
    errors.firstName = 'Required';
  }
  if (values.firstName && values.firstName.length > 20) {
    errors.firstName = 'Must be 20 characters or less';
  }
  if (values.firstName && values.firstName.length < 2) {
    errors.firstName = 'Must be Must be 2 characters or more';
  }
  if (
    values.firstName &&
    /* eslint-disable */
    /[^a-zA-Z0-9 ]/i.test(  // eslint-disable-line
      values.firstName,
    )
  ) {
    errors.firstName = 'Only alphanumeric characters';
  }
  if (!values.lastName || !values.lastName.trim()) {
    errors.lastName = 'Required';
  }
  if (values.lastName && values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }
  if (values.lastName && values.lastName.length < 2) {
    errors.lastName = 'Must be Must be 2 characters or more';
  }
  if (
    values.lastName &&
    /* eslint-disable */
    /[^a-zA-Z0-9 ]/i.test(  // eslint-disable-line
      values.lastName,
    )
  ) {
    errors.lastName = 'Only alphanumeric characters';
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
  if (
    values.phoneNumber &&
    /* eslint-disable */
    !/^(0|[1-9][0-9]{9})$/i.test(  // eslint-disable-line
      values.phoneNumber,
    )
  ) {
    errors.phoneNumber = 'Invalid phone number, must be 10 digits';
  }
  if (!values.phoneNumber || !values.phoneNumber.trim()) {
    errors.phoneNumber = 'Required';
  }
  if (!values.zip || !values.zip.trim()) {
    errors.zip = 'Required';
  }
  if (values.zip && values.zip.length > 10) {
    errors.zip = 'Must be 10 characters or less';
  }
  if (values.zip && values.zip.length < 6) {
    errors.zip = 'Must be 6 characters or more';
  }
  if (values.zip && isNaN(Number(values.zip))) {
    errors.zip = 'Must be a number';
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
  if (!values.cardNumber || !values.cardNumber.trim()) {
    errors.cardNumber = 'Required';
  }
  if (values.cardNumber && values.cardNumber.length !== 12) {
    errors.cardNumber = 'Invalid phone number, must be 12 digits';
  }
  if (values.cardNumber && isNaN(Number(values.cardNumber))) {
    errors.cardNumber = 'Must be a number';
  }
  return errors;
};
