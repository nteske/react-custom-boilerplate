import api from "../api";
import { AxiosError } from "axios";

export class TodoServices {
  static async getAll(): Promise<any[]> {
    try {
        const response = await api.get("/todos",);
        const users = response.data;
        return users;
    } catch (e) {
        const axiosError = e as AxiosError<any>
        console.log(`Error (${axiosError.status}) not handled: ${axiosError.message}`);
        return [];
    }
  }
}