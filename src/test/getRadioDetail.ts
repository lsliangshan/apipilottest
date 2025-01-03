import { ApipilotRequest } from "../utils/axios";

/**
 * asdf
 * 
 * 
 * 
 * @param {Object} params   
 * @property {String} params.pk  
 *
 * @returns {void}
 */
export function getRadioDetail(params: {
  /**
   * Request Data
   */
  data: {
  /**
   * @property {String}  
   */
  pk: String;
},
  /**
   * Request Headers
   */
  headers?: {
}
}) {
  return new Promise(async (resolve) => {
    const apipilotRequest: ApipilotRequest = ApipilotRequest.getInstance();
    const defaultParams: any = {};
    const newParams = {...defaultParams, ...(params?.data || {})};
    
    const defaultHeaders: any = {};
    const newHeaders = {...defaultHeaders, ...(params?.headers || {})};
    
    await apipilotRequest
      .get("https://fm.xinli001.com/broadcast", newParams, {
        headers: newHeaders,
      })
      .then((res) => {
        if (res.status != 200) {
          resolve({
            code: res.status,
            message: res.statusText || "Failed",
          });
        } else {
          resolve({
            code: 200,
            data: res.data,
          });
        }
      })
      .catch((err) => {
        resolve({
          code: 1001,
          message: err.message,
        });
      });
  });
}
