import { distributorRepository } from "@/infrastructure/repository";
import type { ApiError, FormDistributor } from "@/interfaces";
import { useAppStore } from "@/store";
import type { AxiosError } from "axios";

export async function getDistributortList() {
  try {
    const { items } = await distributorRepository.getDistributortList();
    return items;
  } catch (e) {
    if (e instanceof Error) {
      const { setError } = useAppStore();

      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }

    return { items: [] };
  }
}

export async function createAdminDistributor(data: FormDistributor) {
  const { setError, setSuccess } = useAppStore();
  try {
    const result = await distributorRepository.createAdminDistributor(data);
    if (result) {
      setSuccess("Дистрибьютор успешно создан");

      return result;
    }
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }
  }
}

export async function editAdminDistributor(
  id: number,
  data: FormDistributor
): Promise<boolean> {
  const { setError, setSuccess } = useAppStore();
  try {
    await distributorRepository.editAdminDistributor(id, data);
    setSuccess("Изменения сохранены");

    return true;
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }

    return false;
  }
}

export async function getAdminDistributor(id: number) {
  const { setError } = useAppStore();
  try {
    return await distributorRepository.getAdminDistributorById(id);
  } catch (e) {
    if (e instanceof Error) {
      const axiosError = e as AxiosError<ApiError>;
      if (axiosError.response) {
        setError(axiosError.response.data?.message);
      } else {
        setError(e.message);
      }
    }
  }
}
