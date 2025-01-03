import { ApipilotRequest } from "../utils/axios";

/**
 * 获取电台详情
 * 
 * 
 * 
 * @param {Object} params   
 * @property {String} [params.pk=99406937]  
 *
 * @returns {Object} returnValue   
 * @returns {Number} returnValue.code  
 * @returns {Object} returnValue.data  
 * @returns {String} returnValue.data.id  
 * @returns {String} returnValue.data.title  
 * @returns {String} returnValue.data.cover  
 * @returns {String} returnValue.data.url  
 * @returns {String} returnValue.data.speak  
 * @returns {String} returnValue.data.favnum  
 * @returns {String} returnValue.data.viewnum  
 * @returns {String} returnValue.data.background  
 * @returns {Boolean} returnValue.data.is_teacher  
 * @returns {String} returnValue.data.absolute_url  
 * @returns {Array<String>} returnValue.data.url_list[]  
 * @returns {String} returnValue.data.is_selected  
 * @returns {String} returnValue.data.commentnum  
 * @returns {String} returnValue.data.speak_url  
 * @returns {String} returnValue.data.content  
 * @returns {String} returnValue.data.word_url  
 * @returns {String} returnValue.data.jingxuan_id  
 * @returns {Number} returnValue.data.user_vip  
 * @returns {Number} returnValue.data.is_exchange  
 */
export function getRadioDetail(params?: {
  /**
   * Request Data
   */
  data?: {
  /**
   * @property {String=99406937}  
   */
  pk?: String;
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
		defaultParams["pk"] = "99406937";

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
