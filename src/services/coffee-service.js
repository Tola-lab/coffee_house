import { useHttp } from "../hooks/http.hook";

const useCoffeeService = () => {

    const {request, loading, error} = useHttp();

    const getAllCards = async () => {
        const res = await request("http://localhost:3001/coffee");
        return res;
       
    };

    const getCard = async (id) => {
        const res = await request("http://localhost:3001/coffee/");
        return res[`${id - 1}`]

        
    }

    return {loading, error, getAllCards, getCard};
};

export default useCoffeeService;