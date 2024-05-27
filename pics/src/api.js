import axios from 'axios';

const searchImages = async(term) => {
            const response = await axios.get("https://api.unsplash.com/search/photos",{
                        headers:{
                                    Authorization : 'Client-ID sumQ1ZBCXwzd_P6edqn01wsGFtWr9gSGxNMKIEyslfU'
                        },
                        params:{
                                    query : term
                        }
            });

            console.log(response);
            if(response.data.results.length === 0){
            //         console.log("Hello");
            return "hello"
            }
            return response.data.results;
}; 

export default searchImages;