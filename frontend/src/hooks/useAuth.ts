import { useState } from "react";

export function useAuth() {
  // Mock user, replace with real auth logic
  const [user] = useState({ role: "investigator" });
  return { user };
}