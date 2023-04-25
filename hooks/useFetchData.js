import { useMutation } from "@tanstack/react-query";
import useInsuranceOffers from "../store/insurance-offers";

const postData = async (data) => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/8258eada-7c19-41f9-82d6-57a01350073b",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const respData = await response.json();
    return respData;
  } catch (error) {
    console.error("Error fetching the data: ", error.message);
  }
};

const useFetchData = () => {
  const [offers, updateInsuranceOffers, updateUserInfo] = useInsuranceOffers(
    (state) => [state.offers, state.updateInsuranceOffers, state.updateUserInfo]
  );

  return useMutation({
    mutationFn: postData,
    onMutate: (data) => updateUserInfo(data),
    onSuccess: (data) => updateInsuranceOffers(data),
  });
};

export default useFetchData;
