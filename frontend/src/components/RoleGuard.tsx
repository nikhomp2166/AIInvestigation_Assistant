import React from "react";
// สมมุติว่าคุณมี hook useAuth
const useAuth = () => ({ user: { role: "investigator" } });

const RoleGuard: React.FC<{ roles: string[]; children: React.ReactNode }> = ({ roles, children }) => {
  const { user } = useAuth();
  if (!user || !roles.includes(user.role)) {
    return <div className="text-red-600">Access denied.</div>;
  }
  return <>{children}</>;
};

export default RoleGuard;