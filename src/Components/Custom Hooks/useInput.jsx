import { useState, useEffect } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  /**
   * Function Name - handleChangeAll
   * Parameters -  e
   * this function helps to set the state of form when it gets change from its current state.
   */

  function handleChange(e) {
    setValue(e.target.value);
  }

  return [value, handleChange];
};
