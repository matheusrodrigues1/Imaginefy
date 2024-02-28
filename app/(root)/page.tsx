import { UserButton } from "@clerk/nextjs"

const Home = async () => {
  return (
    <>
      <div>
        <p>Home</p>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </>
  )
}

export default Home