import { CV } from "@/interfaces/cv";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const API_URL = "http://localhost:3000/api/cv";

export const useCvData = (): UseQueryResult<CV[], Error> => {
	return useQuery({
		queryKey: ["cvData"],
		queryFn: fetchCvData,
	});
};

const fetchCvData = async (): Promise<CV[]> => {
	const response = await fetch(API_URL);

	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	return response.json();
};
