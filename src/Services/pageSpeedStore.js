import { create } from 'zustand';
const apikey = import.meta.env.VITE_PAGEINSIGHTS_API_KEY;
console

export const usePageSpeed = create((set)=>({
    data:{},
    loading: false,
    error: null,
    fetchData : async (URL)=> {
        set({loading:true,
            error:null
        });
        try {
          const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURI(URL)}&key=${apikey}&strategy=desktop&category=performance&category=seo`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(`HTTP error ! Status: ${response.status}`);
          }
          const responseData = await response.json();
          set({data : responseData,
            loading: false
          })
        } catch (error) {
             set({error: error.message, loading:false})
        }
    }
}))