import { useQuery } from '@tanstack/react-query';

const useServices = () => {
    const {refetch, data : services = []} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
          const response = await fetch('http://localhost:8000/services')
          return response.json()
        },
      })
    return [services, refetch]
};

export default useServices;