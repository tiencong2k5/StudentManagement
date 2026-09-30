// services/authService.ts
import { User } from "../types/auth.types";

// Hàm gọi API thật (sau này thay bằng fetch/axios)
export async function loginService(username: string, password: string): Promise<{ user: User; accessToken: string }> {
  // Mock data
  if (username === "admin" && password === "123456") {
    return {
      user: { id: "1", username: "admin", name: "Administrator", role: "admin" },
      accessToken: "mock-token-admin",
    };
  }

  return {
    user: { id: "2", username, name: "Normal User", role: "user" },
    accessToken: "mock-token-user",
  };
}
