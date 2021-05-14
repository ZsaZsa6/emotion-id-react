export const sendFlashMessage = (message, className) => {

    return {
      type: "FLASH_MESSAGE",
      payload: {
        message,
        className
      }
    }
  };