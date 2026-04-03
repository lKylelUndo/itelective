import { Button } from "../ui/button"

const Skill = ({skill}: {skill: string}) => {
  return (
    <Button variant={"outline"} size={"xs"}>{skill}</Button>
  )
}

export default Skill