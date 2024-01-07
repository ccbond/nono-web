import { Session } from "next-auth"

export function VerifyAdmin(session: Session): boolean {
  const adminEmails = ["1315275049@qq.com", "yxy9926@163.com"]

  if (!session.user?.email) return false
  return adminEmails.includes(session.user?.email)
}
