import { create } from 'zustand';
const apikey = import.meta.env.VITE_PAGEINSIGHTS_API_KEY;


export const usePageSpeed = create((set)=>({
    data:{},
    loading: false,
    error: null,
    fetchData : async (URL)=> {
        set({loading:true,
            error:null
        });
        try {
          const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURI(URL)}&key=${apikey}&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=PWA&category=SEO`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        }
            throw new Error(`Sorry :/ (Status: ${response.status}). Please try again later.`);
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