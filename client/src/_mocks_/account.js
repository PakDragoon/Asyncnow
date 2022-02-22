import { useRecoilValue } from "recoil"
import { userDataRecoil } from "../components/data/atom"

// ----------------------------------------------------------------------

// const { userName } = useRecoilValue(userDataRecoil)
// const adminName = userName

const account = {
  displayName: "adminm name",
  email: "demo@minimals.cc",
  photoURL: "/static/mock-images/avatars/avatar_default.jpg",
}

export default account
