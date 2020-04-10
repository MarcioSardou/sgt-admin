
export default class Errors {
  /**
   * Create a new Errors instance.
   */
  constructor() {
      this.errors = {};
  }


  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   */
  has(field) {
      return this.errors.hasOwnProperty(field);
  }

  /**
   * Parse errors
   *
   * @param {object} err
   */
  parse(err, separator = ' ') {

      let response = err.response.data;

      let error = response;
      let errors = [];

      if (response.hasOwnProperty('errors')) {
          for (var k in response.errors) {
              let errorMsgs = response.errors[k];
                            
              if (Array.isArray(errorMsgs)) {
                  errorMsgs.forEach((item) => errors.push(item.message));
              } else {
                  errors.push(errorMsgs.message)
              }
          }
      }

      if (typeof error != 'object') {
          error += ' ' + errors.join(separator);
          return error;
      }
      
      return errors.join(separator);
  }


  /**
   * Determine if we have any errors.
   */
  any() {
      return Object.keys(this.errors).length > 0;
  }


  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  get(field) {
      if (this.errors[field]) {
          return this.errors[field][0];
      }
  }


  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record(errors) {
      this.errors = errors;
  }


  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear(field) {
      if (field) {
          delete this.errors[field];

          return;
      }

      this.errors = {};
  }
}
