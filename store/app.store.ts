import { defineStore } from "pinia";

export interface AppState {
  deviceId: string | null;
  error: string | null;
  success: string | null;
}

export const useAppStore = defineStore({
  id: "appStore",
  state: () =>
    ({
      deviceId: null,
      error: null,
      success: null,
    } as AppState),
  actions: {
    setDeviceId(deviceId: string | null) {
      this.deviceId = deviceId;
    },
    setError(error: string | null) {
      this.error = error ? `${error}`.replace("Error: ", "") : "";
    },
    setSuccess(success: string | null) {
      this.success = success ? `${success}`.replace("Success: ", "") : "";
    },
  },
});
