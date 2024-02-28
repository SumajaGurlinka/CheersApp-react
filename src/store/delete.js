import axios from "axios";
import { toast } from "react-toastify";

export const delete1 = {
  state: {
    deleteData: [],
  
  },
  reducers: {
    setDelete: (state, payload) => {
      return {
        ...state,
        deleteData: payload,
      };
    },
   
  },
  effects: (dispatch) => ({
  
  
    getDeleteAsync: async ({ cardId }) => {
      try {
     
        const url =
        
          `  http://localhost:9090/card/deletedraft?cardId=${cardId}`;
          console.log(url);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.delete(url, config);
        

        const { data = undefined } = response;

        if (data) {
          console.log("deleted response: ",data);
          dispatch.delete1.setDelete(data.response);
          toast.success("draft card has been deleted");
        }
      } catch (error) {
        console.log("Api > Error >Login >  ", error.response);
        throw error;
      }
    },
   
  
  }),
  
};
